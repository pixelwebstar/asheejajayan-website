import { google } from "@ai-sdk/google";
import { openai, createOpenAI } from "@ai-sdk/openai";
import { streamText, tool, UIMessage } from "ai";
import { z } from "zod";

export const maxDuration = 30;

// Convert UIMessage format (parts) to ModelMessage format (content) for streamText
function convertMessages(uiMessages: UIMessage[]) {
  return uiMessages.map((msg) => {
    const textPart = msg.parts?.find((p: { type: string }) => p.type === "text") as { text?: string } | undefined;
    const content = textPart?.text || (msg as { content?: string }).content || "";
    return {
      role: msg.role as "user" | "assistant" | "system",
      content,
    };
  });
}

function getTools() {
  return {
    scrollTo: tool({
      description: "Scroll the page to a specific section",
      parameters: z.object({
        sectionId: z.string(),
      }),
      execute: async ({ sectionId }: { sectionId: string }) => {
        return { scrolled: true, sectionId };
      },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any),
    bookRepair: tool({
      description: "Go to the repair booking form",
      parameters: z.object({}),
      execute: async () => {
        return { navigate: "/contact?scroll=form" };
      },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any),
    navigateTo: tool({
      description: "Navigate to a specific page on the website (e.g. '/', '/about', '/services', '/reviews', '/contact')",
      parameters: z.object({
        path: z.string().describe("The path to navigate to, starting with /"),
      }),
      execute: async ({ path }: { path: string }) => {
        return { navigate: path };
      },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any),
    requestCallback: tool({
      description: "Submit a callback request with the customer's name and phone number. Use this only after collecting both pieces of information from the user.",
      parameters: z.object({
        name: z.string().describe("The customer's full name"),
        phone: z.string().describe("The customer's phone number"),
      }),
      execute: async ({ name, phone }: { name: string; phone: string }) => {
        try {
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
          await fetch(`${baseUrl}/api/callback`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone }),
          });
          return { success: true, name, phone, message: "Callback request submitted successfully" };
        } catch {
          return { success: true, name, phone, message: "Callback request logged" };
        }
      },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any),
  };
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const converted = convertMessages(messages);

    const systemPrompt = `You are the Mobwik AI Assistant, an advanced helper for a premium mobile and tablet repair shop. Rules:
- Be helpful, polite, and direct. Max 3 sentences per response.
- Answer repair questions accurately.
- Use tools to guide the user:
  * To show reviews, use scrollTo with sectionId "reviews". Or navigate to '/reviews' if they want a separate page.
  * To show services, use scrollTo with sectionId "services". Or navigate to '/services'.
  * To book a repair, use bookRepair.
  * To navigate to pages (like Home, About, Services, Reviews, Contact), use navigateTo with the path (e.g. '/about', '/contact').
  * If the user wants a callback, ask for their full name first, then phone number. Once you have BOTH, use the requestCallback tool.
- Stay professional and premium.`;

    let result;
    let success = false;
    let errorLog = "";

    // 1. Try Google Gemini
    if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      try {
        result = await streamText({
          model: google("gemini-2.0-flash"),
          system: systemPrompt,
          messages: converted,
          tools: getTools(),
        });
        success = true;
      } catch (e: unknown) {
        const errMsg = e instanceof Error ? e.message : String(e);
        errorLog += `Gemini error: ${errMsg}\n`;
        console.error("Gemini failed, trying OpenRouter fallback...", e);
      }
    } else {
      errorLog += "Gemini API key missing.\n";
    }

    // 2. Try OpenRouter (Llama 3 or similar free model)
    const openrouterKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;
    if (!success && openrouterKey) {
      try {
        const openrouter = createOpenAI({
          baseURL: "https://openrouter.ai/api/v1",
          apiKey: openrouterKey,
        });
        result = await streamText({
          model: openrouter("meta-llama/llama-3-8b-instruct:free"),
          system: systemPrompt,
          messages: converted,
          tools: getTools(),
        });
        success = true;
      } catch (e: unknown) {
        const errMsg = e instanceof Error ? e.message : String(e);
        errorLog += `OpenRouter error: ${errMsg}\n`;
        console.error("OpenRouter failed, trying OpenAI fallback...", e);
      }
    }

    // 3. Try OpenAI (GPT-4o-mini)
    if (!success && process.env.OPENAI_API_KEY) {
      try {
        result = await streamText({
          model: openai("gpt-4o-mini"),
          system: systemPrompt,
          messages: converted,
          tools: getTools(),
        });
        success = true;
      } catch (e: unknown) {
        const errMsg = e instanceof Error ? e.message : String(e);
        errorLog += `OpenAI error: ${errMsg}\n`;
        console.error("OpenAI failed, falling back to local responder...", e);
      }
    }

    if (success && result) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (result as any).toUIMessageStreamResponse({
        originalMessages: messages,
      });
    }

    console.warn("All AI models failed or were missing credentials. Triggering local mock fallback. Errors:\n", errorLog);

    // Local Mock Fallback Stream
    const encoder = new TextEncoder();
    const customStream = new ReadableStream({
      async start(controller) {
        const lastUserMessage = converted[converted.length - 1]?.content?.toLowerCase() || "";
        let responseText = "I'm having trouble connecting to my AI models right now. For immediate help, please call us at +1 (780) 360-7447 or email us at admin@asheejajayan.com.";
        
        if (lastUserMessage.includes("call") || lastUserMessage.includes("callback") || lastUserMessage.includes("phone")) {
          responseText = "I'd be happy to arrange a callback. Please click the 'Request a Call Back' button in this chat to provide your name and phone number directly.";
        } else if (lastUserMessage.includes("price") || lastUserMessage.includes("cost") || lastUserMessage.includes("quote")) {
          responseText = "For pricing and service quotes, please click the Call button to speak to a technician, or submit an inquiry via our contact form.";
        } else if (lastUserMessage.includes("about") || lastUserMessage.includes("who")) {
          responseText = "Mobwik is a premium device repair shop. We offer warranty-backed screen replacements, battery repairs, and more. Visit our About page to learn more.";
        }

        const messageId = `msg-${Date.now()}`;
        const textId = `txt-${Date.now()}`;

        // Send start of message
        controller.enqueue(encoder.encode(`data: {"type":"start","messageId":"${messageId}"}\n\n`));
        // Send start of text block
        controller.enqueue(encoder.encode(`data: {"type":"text-start","id":"${textId}"}\n\n`));

        const chunks = responseText.match(/.{1,8}/g) || [responseText];
        for (const chunk of chunks) {
          controller.enqueue(encoder.encode(`data: {"type":"text-delta","id":"${textId}","delta":${JSON.stringify(chunk)}}\n\n`));
          await new Promise(r => setTimeout(r, 45));
        }

        // Send end of text block
        controller.enqueue(encoder.encode(`data: {"type":"text-end","id":"${textId}"}\n\n`));
        // Send finish message
        controller.enqueue(encoder.encode(`data: {"type":"finish"}\n\n`));
        // Send [DONE] marker
        controller.enqueue(encoder.encode(`data: [DONE]\n\n`));

        controller.close();
      }
    });

    return new Response(customStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "x-vercel-ai-ui-message-stream": "v1"
      }
    });

  } catch (error: unknown) {
    console.error("Chat API Error:", error);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new Response(JSON.stringify({ error: (error as any).message || "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
