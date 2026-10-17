import { SCOPE_BUDGETS, SCOPES, TIMELINES, budgetError, parseScopeList, scopeLabel, type ScopeValue } from "@/lib/catalog";

export type BriefKind = "inquiry" | "project" | "call";

export type BriefInput = {
  kind?: string;
  name?: string;
  email?: string;
  details?: string;
  company?: string;
  phone?: string;
  scopes?: string[] | string;
  timeline?: string;
  budget?: string;
  budgets?: Record<string, string>;
  website?: string;
};

export type Brief = {
  kind: BriefKind;
  name: string;
  email: string;
  details: string;
  company: string;
  phone: string;
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
  const phone = (input.phone ?? "").trim();
  const phoneDigits = phone.replace(/\D/g, "");
  const kind: BriefKind = input.kind === "inquiry" || input.kind === "call" ? input.kind : "project";

  if (name.length < 2 || name.length > 80) return { ok: false, error: "Enter your name." };
  if (!EMAIL.test(email) || email.length > 120) return { ok: false, error: "Enter a valid email." };
  if (phoneDigits.length < 10 || phoneDigits.length > 15) return { ok: false, error: "Enter a phone number." };
  if (details.length > 5000) return { ok: false, error: "Keep the notes under 5,000 characters." };
  if (details.length < 8) return { ok: false, error: "Add a short note about the business." };
  if (company.length > 120) return { ok: false, error: "Company name is too long." };

  const scopes = parseScopeList(input.scopes);
  const timeline = TIMELINES.some((item) => item.value === input.timeline) ? (input.timeline as string) : "";

  if (kind === "project" && scopes.length === 0) {
    return { ok: false, error: "Choose what you need." };
  }

  const rawBudgets = input.budgets;
  const budgetMap =
    rawBudgets && typeof rawBudgets === "object" && !Array.isArray(rawBudgets) ? rawBudgets : undefined;
  if (kind === "project") {
    const missingBudget = budgetError(scopes, budgetMap);
    if (missingBudget) return { ok: false, error: missingBudget };
  }
  const picked: string[] = [];
  if (kind === "project" && budgetMap) {
    for (const scope of scopes) {
      const raw = budgetMap[scope];
      if (typeof raw !== "string") continue;
      const match = SCOPE_BUDGETS[scope].find((item) => item.value === raw);
      if (match) picked.push(`${scopeLabel(scope)}: ${match.label}`);
    }
  }
  if (kind === "project" && !timeline) {
    return { ok: false, error: "Choose when you want to start." };
  }
  const budget = picked.join(" · ");

  return {
    ok: true,
    brief: { kind, name, email, details, company, phone, scopes, timeline, budget },
  };
}

export function briefSubject(brief: Brief) {
  const scope = brief.scopes.map((value) => SCOPES.find((item) => item.value === value)?.label).filter(Boolean).join(", ");
  if (brief.kind === "call") return `30 minute call from ${brief.name}`;
  if (brief.kind === "inquiry") return `Question from ${brief.name}`;
  return `Project brief from ${brief.name}${scope ? ` · ${scope}` : ""}`;
}

export function briefText(brief: Brief) {
  const timeline = TIMELINES.find((item) => item.value === brief.timeline)?.label ?? "Not set";
  const scope = brief.scopes.map((value) => SCOPES.find((item) => item.value === value)?.label).join(", ");
  return [
    `Kind: ${brief.kind}`,
    `Name: ${brief.name}`,
    `Phone: ${brief.phone}`,
    `Email: ${brief.email}`,
    brief.company ? `Company: ${brief.company}` : "",
    `Scope: ${scope || "—"}`,
    `Timing: ${timeline}`,
    brief.budget ? `Budget: ${brief.budget}` : "",
    "",
    brief.details,
  ]
    .filter((line) => line !== "")
    .join("\n");
}
