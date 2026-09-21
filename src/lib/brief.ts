import { BUDGETS, SCOPES, TIMELINES, isScope, parseScopes, type ScopeValue } from "@/lib/catalog";

export type BriefKind = "inquiry" | "project";

export type BriefInput = {
  kind?: string;
  name?: string;
  email?: string;
  details?: string;
  company?: string;
  scopes?: string[] | string;
  timeline?: string;
  budget?: string;
  website?: string;
};

export type Brief = {
  kind: BriefKind;
  name: string;
  email: string;
  details: string;
  company: string;
  scopes: ScopeValue[];
  timeline: string;
  budget: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseBrief(input: BriefInput): { ok: true; brief: Brief } | { ok: false; error: string } {
  if (typeof input.website === "string" && input.website.trim() !== "") {
    return { ok: false, error: "Rejected." };
  }

  const name = (input.name ?? "").trim();
  const email = (input.email ?? "").trim().toLowerCase();
  const details = (input.details ?? "").trim();
  const company = (input.company ?? "").trim();
  const kind: BriefKind = input.kind === "inquiry" ? "inquiry" : "project";

  if (name.length < 2 || name.length > 80) return { ok: false, error: "Enter your name." };
  if (!EMAIL.test(email) || email.length > 120) return { ok: false, error: "Enter a valid email." };
  if (details.length > 5000) return { ok: false, error: "Keep the notes under 5,000 characters." };
  if (kind === "project" && details.length < 8) return { ok: false, error: "Add a short note about the work." };
  if (kind === "inquiry" && details.length < 8) return { ok: false, error: "Write your question." };
  if (company.length > 120) return { ok: false, error: "Company name is too long." };

  const scopes = parseScopes(input.scopes);
  const timeline = TIMELINES.some((item) => item.value === input.timeline) ? (input.timeline as string) : "";
  const budget = BUDGETS.some((item) => item.value === input.budget) ? (input.budget as string) : "";

  if (kind === "project" && scopes.some((scope) => !isScope(scope))) {
    return { ok: false, error: "Pick a valid scope." };
  }

  return {
    ok: true,
    brief: { kind, name, email, details, company, scopes, timeline, budget },
  };
}

export function briefSubject(brief: Brief) {
  const scope = brief.scopes.map((value) => SCOPES.find((item) => item.value === value)?.label).filter(Boolean).join(", ");
  if (brief.kind === "inquiry") return `Question from ${brief.name}`;
  return `Project brief from ${brief.name}${scope ? ` · ${scope}` : ""}`;
}

export function briefText(brief: Brief) {
  const timeline = TIMELINES.find((item) => item.value === brief.timeline)?.label ?? "Not set";
  const budget = BUDGETS.find((item) => item.value === brief.budget)?.label ?? "Not set";
  const scope = brief.scopes.map((value) => SCOPES.find((item) => item.value === value)?.label).join(", ");
  return [
    `Kind: ${brief.kind}`,
    `Name: ${brief.name}`,
    `Email: ${brief.email}`,
    brief.company ? `Company: ${brief.company}` : "",
    `Scope: ${scope || "—"}`,
    brief.kind === "project" ? `Timing: ${timeline}` : "",
    brief.kind === "project" ? `Budget: ${budget}` : "",
    "",
    brief.details,
  ]
    .filter((line) => line !== "")
    .join("\n");
}
