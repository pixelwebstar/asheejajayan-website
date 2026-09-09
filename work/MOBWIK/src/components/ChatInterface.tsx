"use client";

import React, { useState, useEffect, useRef } from "react";
import { useChat, UIMessage } from "@ai-sdk/react";
import { ArrowUp, X, PhoneCall } from "lucide-react";

interface ChatInterfaceProps {
  onClose: () => void;
}

const ChatInterface = ({ onClose }: ChatInterfaceProps) => {
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Callback states
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [isSubmittingCallback, setIsSubmittingCallback] = useState(false);
  const [isCustomTyping, setIsCustomTyping] = useState(false);

  const { messages, sendMessage, status, setMessages } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome-message",
        role: "assistant",
        content: "Welcome to Mobwik. How can I help with your device?",
        parts: [{ type: "text", text: "Welcome to Mobwik. How can I help with your device?" }],
      }
    ],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onToolCall: ({ toolCall }: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const args = toolCall.args as any;
      if (toolCall.toolName === "scrollTo") {
        const element = document.getElementById(args.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      if (toolCall.toolName === "bookRepair") {
        window.location.href = "/contact?scroll=form";
      }
      if (toolCall.toolName === "navigateTo") {
        window.location.href = args.path;
      }
    },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const isLoading = status === "streaming" || status === "submitted";
  const showTypingIndicator = status === "submitted" || isCustomTyping;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue || isLoading) return;
    const text = inputValue;
    setInputValue("");
    await sendMessage({ text });
  };

  const handleRequestCallback = () => {
    setIsCallbackOpen(true);
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone || isSubmittingCallback) return;
    setIsSubmittingCallback(true);
    try {
      await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: callbackName, phone: callbackPhone }),
      });
      const submittedName = callbackName;
      const submittedPhone = callbackPhone;

      setIsCallbackOpen(false);
      setCallbackName("");
      setCallbackPhone("");

      // 1. Add user message to history
      setMessages((prevMessages: UIMessage[]) => [
        ...prevMessages,
        {
          id: `user-callback-${Date.now()}`,
          role: "user",
          parts: [{ type: "text", text: `Requested Callback: ${submittedName} (${submittedPhone})` }]
        }
      ]);

      // 2. Show typing indicator for a brief moment to simulate processing
      setIsCustomTyping(true);
      await new Promise(r => setTimeout(r, 1200));
      setIsCustomTyping(false);

      // 3. Append empty assistant message
      const assistantMsgId = `assistant-callback-${Date.now()}`;
      setMessages((prevMessages: UIMessage[]) => [
        ...prevMessages,
        {
          id: assistantMsgId,
          role: "assistant",
          parts: [{ type: "text", text: "" }]
        }
      ]);

      // 4. Stream typing animation word-by-word
      const responseText = `Thank you, ${submittedName}! We have received your callback request and will contact you at ${submittedPhone} shortly.`;
      const words = responseText.split(" ");
      let currentText = "";
      for (let i = 0; i < words.length; i++) {
        currentText += (i === 0 ? "" : " ") + words[i];
        setMessages((prevMessages: UIMessage[]) => 
          prevMessages.map((msg) => 
            msg.id === assistantMsgId
              ? { ...msg, parts: [{ type: "text", text: currentText }] }
              : msg
          )
        );
        await new Promise(r => setTimeout(r, 80)); // 80ms delay between words
      }
    } catch (error) {
      console.error("Failed to submit callback:", error);
    } finally {
      setIsSubmittingCallback(false);
    }
  };

  return (
    <div className="relative w-[calc(100vw-48px)] sm:w-[380px] h-[480px] sm:h-[540px] max-h-[calc(100vh-120px)] bg-white flex flex-col rounded-2xl overflow-hidden border border-black/5 shadow-xl">

      {/* ── Header ── */}
      <div className="relative px-5 py-4 bg-secondary text-white flex justify-between items-center shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary to-primary/20 pointer-events-none" />
        
        <div className="relative flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-primary" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold tracking-wide">Mobwik</span>
            <span className="text-[9px] font-medium text-white/50 uppercase tracking-[0.15em]">AI Assistant</span>
          </div>
        </div>

        <button 
          onClick={onClose} 
          className="relative w-8 h-8 flex items-center justify-center bg-white/15 hover:bg-white/25 rounded-lg transition-colors"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* ── Messages ── */}
      <div 
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto px-5 py-4 space-y-4 bg-gradient-to-b from-surface-2/40 to-white no-scrollbar"
      >
        {messages.map((m: UIMessage) => {
          const textPart = m.parts?.find((p: { type: string }) => p.type === 'text') as { text?: string } | undefined;
          const content = textPart?.text || (m as { content?: string }).content || "";
          if (!content && m.role === 'assistant') return null;

          return (
            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role === "assistant" && (
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mr-2 mt-1 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-primary" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z"/>
                  </svg>
                </div>
              )}
              <div className={`max-w-[78%] px-4 py-3 text-[13px] leading-relaxed ${
                m.role === "user" 
                  ? "bg-primary text-white rounded-2xl rounded-tr-sm font-medium" 
                  : "bg-white text-secondary/80 rounded-2xl rounded-tl-sm border border-black/5 shadow-sm"
              }`}>
                {content}
              </div>
            </div>
          );
        })}
        
        {showTypingIndicator && (
          <div className="flex justify-start">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mr-2 mt-1 shrink-0">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-primary animate-pulse" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z"/>
              </svg>
            </div>
            <div className="bg-white border border-black/5 px-4 py-3 rounded-2xl rounded-tl-sm flex space-x-1.5 items-center shadow-sm">
              <div className="w-1.5 h-1.5 bg-secondary/20 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-1.5 h-1.5 bg-secondary/30 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {/* ── Callback Form Overlay ── */}
      {isCallbackOpen && (
        <div className="absolute inset-x-0 bottom-0 top-[68px] bg-white z-40 flex flex-col p-6 transition-all duration-300">
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-black text-secondary uppercase tracking-tight">Request a Call Back</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Enter your details below and our team will contact you shortly.
              </p>
            </div>

            <form onSubmit={handleCallbackSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-wider text-secondary">Your Name</label>
                <input
                  required
                  value={callbackName}
                  onChange={(e) => setCallbackName(e.target.value)}
                  placeholder="Amrith Jayan"
                  className="w-full text-xs p-3.5 bg-surface-2 border border-black/5 rounded-xl focus:outline-none focus:border-primary transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-wider text-secondary">Phone Number</label>
                <input
                  required
                  type="tel"
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  placeholder="+1 (780) 360-7447"
                  className="w-full text-xs p-3.5 bg-surface-2 border border-black/5 rounded-xl focus:outline-none focus:border-primary transition-all font-medium"
                />
              </div>

              <div className="pt-4 flex space-x-3">
                <button
                  type="button"
                  onClick={() => setIsCallbackOpen(false)}
                  className="flex-1 py-3.5 bg-surface-2 hover:bg-black/5 text-secondary text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingCallback}
                  className="flex-1 py-3.5 bg-primary hover:bg-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-primary/20 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmittingCallback ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <div className="bg-white border-t border-black/5 shrink-0">
        {/* Quick Action — Request Callback */}
        <div className="px-4 pt-3">
          <button
            onClick={handleRequestCallback}
            disabled={isLoading || isCallbackOpen}
            className="w-full flex items-center justify-center space-x-2 text-[11px] font-bold text-secondary bg-surface-2/60 hover:bg-primary/5 hover:text-primary border border-black/5 hover:border-primary/15 px-4 py-2.5 rounded-xl transition-all disabled:opacity-40"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Request a Call Back</span>
          </button>
        </div>

        {/* Input */}
        <div className="px-4 pt-3 pb-4">
          <form onSubmit={handleFormSubmit} className="flex items-center space-x-2">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about repairs..."
              disabled={isCallbackOpen}
              className="flex-grow text-[13px] bg-surface-2/60 pl-4 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/15 focus:bg-white transition-all border border-transparent focus:border-primary/10 disabled:opacity-50"
            />
            <button 
              type="submit" 
              disabled={!inputValue || isLoading || isCallbackOpen}
              className="p-3 bg-primary text-white rounded-xl hover:bg-primary/90 active:scale-95 transition-all disabled:opacity-20 shadow-lg shadow-primary/20"
            >
              <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
