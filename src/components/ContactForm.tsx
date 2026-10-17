"use client";

import { useEffect, useState, type ReactNode } from "react";
import { SCOPE_BUDGETS, SCOPES, WEBSITE_PARTS, budgetError, isScope, rupee, scopeLabel, type ScopeValue } from "@/lib/catalog";
import { btnPrimary, fieldClass } from "@/lib/ui";

const WHEN_OPTIONS = [
  { value: "asap", label: "Soon" },
  { value: "month", label: "Month" },
  { value: "quarter", label: "Quarter" },
  { value: "flex", label: "Flexible" },
] as const;

function optionClass(selected: boolean) {
  return `min-h-11 w-full rounded-xl border-2 px-3 py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wide text-center leading-tight transition-colors ${
    selected
      ? "border-slate-900 bg-slate-100 text-slate-900 shadow-md"
      : "border-slate-200 bg-white text-slate-600 shadow-sm hover:border-slate-400"
  }`;
}

function OptionGrid({
  label,
  options,
  columns,
  selected,
  onSelect,
  multiple = false,
  aside,
}: {
  label: string;
  options: readonly { value: string; label: string }[];
  columns: string;
  selected: (value: string) => boolean;
  onSelect: (value: string) => void;
  multiple?: boolean;
  aside?: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <span className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">{label}</span>
        {aside}
      </div>
      <div className={`grid gap-2 ${columns}`} role="group" aria-label={label}>
        {options.map((option) => {
          const on = selected(option.value);
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={on}
              onClick={() => onSelect(option.value)}
              className={optionClass(on)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      {multiple ? <span className="sr-only">Choose one or more</span> : null}
    </div>
  );
}

export default function ContactForm() {
  const [scopes, setScopes] = useState<ScopeValue[]>([]);
  const [budgets, setBudgets] = useState<Partial<Record<ScopeValue, string>>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [timeline, setTimeline] = useState("");
  const [details, setDetails] = useState("");
  const [website, setWebsite] = useState("");
  const [selectionNote, setSelectionNote] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scope = params.get("scope");
    if (scope && isScope(scope)) {
      setScopes([scope]);
      const budget = params.get("budget");
      if (budget && SCOPE_BUDGETS[scope].some((item) => item.value === budget)) {
        setBudgets({ [scope]: budget });
      }
    }
    if (scope === "websites") {
      const names = (params.get("parts") ?? "")
        .split(",")
        .flatMap((id) => {
          const name = WEBSITE_PARTS.find((part) => part.id === id)?.name;
          return name ? [name] : [];
        });
      const pageCount = Number(params.get("pages"));
      const mix = Number(params.get("mix"));
      const budget = params.get("budget");
      const campaigns = Number(params.get("campaigns"));
      const pay = params.get("pay");
      const budgetLabel = SCOPE_BUDGETS.websites.find((item) => item.value === budget)?.label;
      const figure = Number.isFinite(mix) && mix > 0 ? rupee(mix) : budgetLabel;
      if (figure || names.length > 0 || (Number.isFinite(pageCount) && pageCount > 0)) {
        const pieces = names.length > 0 ? names.join(", ") : "the included website";
        const pageLine = Number.isFinite(pageCount) && pageCount > 0 ? `${pageCount} ${pageCount === 1 ? "page" : "pages"}. ` : "";
        const campaignLine = Number.isFinite(campaigns) && campaigns > 0 ? ` ${campaigns} Google Ads ${campaigns === 1 ? "campaign" : "campaigns"}.` : "";
        const payLine = pay === "year" ? " Pay over a year." : "";
        setSelectionNote(`From the pricing page: ${figure ?? "custom"}. ${pageLine}Includes: ${pieces}.${campaignLine}${payLine}`);
      }
    }
  }, []);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    if (scopes.length === 0) {
      setError("Choose what you need.");
      return;
    }
    const missingBudget = budgetError(scopes, budgets);
    if (missingBudget) {
      setError(missingBudget);
      return;
    }
    if (!timeline) {
      setError("Choose when you want to start.");
      return;
    }
    setStatus("sending");
    const budgetPayload: Record<string, string> = {};
    for (const scope of scopes) {
      const value = budgets[scope];
      if (value) budgetPayload[scope] = value;
    }
    try {
      const response = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "project",
          name,
          phone,
          email,
          company,
          details: selectionNote ? `${selectionNote}\n${details}`.trim() : details,
          scopes,
          budgets: budgetPayload,
          timeline,
          website,
        }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setError(data.error || "Could not send. Try again, or email me directly.");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Could not send. Check your connection and try again.");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-3 text-center">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Received.</h3>
        <p className="text-sm text-slate-600 font-medium leading-relaxed">
          Thank you. I will read this and reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="relative bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
      <form onSubmit={onSubmit} className="space-y-6 no-swipe">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="brief-name" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Full name
            </label>
            <input id="brief-name" name="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="brief-phone" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Phone
            </label>
            <input id="brief-phone" name="phone" autoComplete="tel" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className={fieldClass} placeholder="Your mobile number" />
          </div>
          <div className="space-y-2">
            <label htmlFor="brief-email" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Email
            </label>
            <input id="brief-email" name="email" autoComplete="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} placeholder="you@company.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="brief-company" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Business
            </label>
            <input id="brief-company" name="company" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} className={fieldClass} placeholder="Business name" />
          </div>
        </div>

        <OptionGrid
          label="What do you need?"
          options={SCOPES.map((scope) => ({ value: scope.value, label: scope.label }))}
          columns="grid-cols-2 sm:grid-cols-3"
          multiple
          selected={(value) => scopes.includes(value as ScopeValue)}
          onSelect={(value) => {
            const scope = value as ScopeValue;
            setError("");
            if (scopes.includes(scope)) {
              setScopes(scopes.filter((item) => item !== scope));
              setBudgets((current) => {
                const next = { ...current };
                delete next[scope];
                return next;
              });
              return;
            }
            setScopes([...scopes, scope]);
          }}
        />
        {scopes.map((scope) => (
          <OptionGrid
            key={scope}
            label={`${scopeLabel(scope)} budget`}
            options={SCOPE_BUDGETS[scope]}
            columns="grid-cols-2"
            selected={(value) => budgets[scope] === value}
            onSelect={(value) => {
              setError("");
              setBudgets((current) => ({ ...current, [scope]: value }));
            }}
          />
        ))}

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <OptionGrid
              label="When"
              options={WHEN_OPTIONS}
              columns="grid-cols-2 sm:grid-cols-4"
              selected={(value) => timeline === value}
              onSelect={(value) => {
                setError("");
                setTimeline(value);
              }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="brief-details" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            Purpose
          </label>
          <textarea
            id="brief-details"
            name="details"
            rows={4}
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className={`${fieldClass} resize-none`}
            placeholder="What does the business do, and what should the website and ads achieve?"
          />
        </div>

        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="brief-website">Website</label>
          <input id="brief-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>

        {error ? <p className="text-sm font-medium text-slate-700">{error}</p> : null}

        <button type="submit" disabled={status === "sending"} className={`${btnPrimary} w-full py-4 rounded-xl text-sm disabled:opacity-60`}>
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </form>
    </div>
  );
}
