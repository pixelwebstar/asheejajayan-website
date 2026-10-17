import { Resend } from "resend";
import { briefSubject, briefText, type Brief } from "@/lib/brief";
import { estimateTotal, formatEstimate } from "@/lib/catalog";

const hits = new Map<string, { count: number; reset: number }>();

export function rateLimit(key: string, max = 5, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const current = hits.get(key);
  if (!current || now > current.reset) {
    hits.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  if (current.count >= max) return false;
  current.count += 1;
  return true;
}

export async function sendBrief(brief: Brief) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.BRIEF_TO_EMAIL || "asheejajayan.com@gmail.com";
  const from = process.env.BRIEF_FROM_EMAIL || "Amrith <onboarding@resend.dev>";
  const estimate = formatEstimate(brief.scopes);
  const { monthly } = estimateTotal(brief.scopes);

  const html = `
    <p><strong>${brief.kind === "call" ? "30 minute call" : brief.kind === "inquiry" ? "Question" : "Project brief"}</strong></p>
    <p>Name: ${escapeHtml(brief.name)}<br/>
    Phone: ${escapeHtml(brief.phone)}<br/>
    Email: ${escapeHtml(brief.email)}<br/>
    ${brief.company ? `Company: ${escapeHtml(brief.company)}<br/>` : ""}
    Scope: ${escapeHtml(brief.scopes.join(", "))}<br/>
    Timing: ${escapeHtml(brief.timeline || "—")}<br/>
    ${brief.budget ? `Budget: ${escapeHtml(brief.budget)}<br/>` : ""}
    Estimate: ${escapeHtml(estimate)}${monthly ? " monthly" : ""}<br/>
    </p>
    <p>${escapeHtml(brief.details).replace(/\n/g, "<br/>")}</p>
  `;

  if (!key) {
    if (process.env.NODE_ENV !== "production") {
      return { ok: true as const, skipped: true };
    }
    return { ok: false as const, error: "Email is not configured yet." };
  }

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: brief.email,
    subject: briefSubject(brief),
    text: `${briefText(brief)}\n\nEstimate: ${estimate}`,
    html,
  });

  if (error) return { ok: false as const, error: "Could not send the brief." };
  return { ok: true as const, skipped: false };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
