import { NextRequest } from "next/server";
import { parseBrief, type BriefInput } from "@/lib/brief";
import { rateLimit, sendBrief } from "@/lib/email";

function allowedOrigin(origin: string | null) {
  if (!origin) return true;
  try {
    const host = new URL(origin).host;
    return (
      host === "asheejajayan.com" ||
      host.endsWith(".asheejajayan.com") ||
      host === "localhost:3000" ||
      host.startsWith("127.0.0.1") ||
      host.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!allowedOrigin(origin)) {
    return Response.json({ error: "Invalid origin." }, { status: 403 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!rateLimit(ip)) {
    return Response.json({ error: "Too many briefs from this network. Try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = parseBrief((body ?? {}) as BriefInput);
  if (!parsed.ok) return Response.json({ error: parsed.error }, { status: 400 });

  const sent = await sendBrief(parsed.brief);
  if (!sent.ok) return Response.json({ error: sent.error }, { status: 503 });

  return Response.json({ ok: true, skipped: sent.skipped ?? false });
}
