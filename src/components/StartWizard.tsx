"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ScopeChips from "@/components/ScopeChips";
import { ChoiceChips } from "@/components/PriceBuilder";
import { BUDGETS, TIMELINES, formatEstimate, parseScopes, scopeLabel, type ScopeValue } from "@/lib/catalog";
import { btnPrimary, btnSecondary, fieldClass } from "@/lib/ui";

const STEPS = [
  {
    num: "01",
    title: "Need",
    heading: "What do you need built?",
    lede: "Tap everything that applies. The starting figure updates as you go.",
  },
  {
    num: "02",
    title: "Timing",
    heading: "When, and roughly what budget?",
    lede: "This is not the locked price. It tells me how to write the quote.",
  },
  {
    num: "03",
    title: "Details",
    heading: "Who should I reply to?",
    lede: "I reply in writing within one business day. No call required.",
  },
  {
    num: "04",
    title: "Review",
    heading: "Check this, then send.",
    lede: "You can go back and change anything before it sends.",
  },
] as const;

export default function StartWizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [scopes, setScopes] = useState<ScopeValue[]>(["websites"]);
  const [timeline, setTimeline] = useState("month");
  const [budget, setBudget] = useState("unsure");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scope = params.get("scope");
    if (scope) setScopes(parseScopes(scope));
    const nextTimeline = params.get("timeline");
    if (nextTimeline) setTimeline(nextTimeline);
    const nextBudget = params.get("budget");
    if (nextBudget) setBudget(nextBudget);
  }, []);

  const estimate = useMemo(() => formatEstimate(scopes), [scopes]);
  const at = STEPS[step];

  const next = () => {
    if (step === 2) {
      if (name.trim().length < 2 || !email.includes("@") || details.trim().length < 8) {
        setError("Name, email, and a short note are required.");
        return;
      }
    }
    setError("");
    setStep((current) => Math.min(current + 1, STEPS.length - 1));
  };
  const back = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
  };

  const onSubmit = async () => {
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "project",
          name,
          email,
          company,
          details,
          scopes,
          timeline,
          budget,
          website,
        }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setError(data.error || "Could not send the brief.");
        return;
      }
      router.push("/start/thanks");
    } catch {
      setStatus("error");
      setError("Could not send. Check your connection and try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full space-y-10 no-swipe">
      <div className="space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
          Step {at.num} · {at.title}
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
          {at.heading}
        </h2>
        <p className="text-base text-slate-600 font-medium leading-relaxed">{at.lede}</p>
      </div>

      <div className="relative bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-8">
        {step === 0 ? (
          <div className="space-y-6">
            <ScopeChips value={scopes} onChange={setScopes} />
            <p className="text-2xl font-black tracking-tight text-slate-900">{estimate}</p>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="space-y-8">
            <ChoiceChips label="Timing" value={timeline} options={TIMELINES} onChange={setTimeline} />
            <ChoiceChips label="Budget" value={budget} options={BUDGETS} onChange={setBudget} />
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="start-name" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                  Full name
                </label>
                <input id="start-name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} />
              </div>
              <div className="space-y-2">
                <label htmlFor="start-email" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                  Email
                </label>
                <input id="start-email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="start-company" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                Business <span className="text-slate-400">optional</span>
              </label>
              <input id="start-company" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} className={fieldClass} />
            </div>
            <div className="space-y-2">
              <label htmlFor="start-details" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                What the site needs to do
              </label>
              <textarea id="start-details" required rows={6} value={details} onChange={(e) => setDetails(e.target.value)} className={`${fieldClass} resize-none`} placeholder="Pages, customers, anything that must work on day one." />
            </div>
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <dl className="space-y-0 text-sm">
            {[
              { label: "Need", value: scopes.map(scopeLabel).join(", ") },
              { label: "Estimate", value: estimate },
              { label: "Timing", value: TIMELINES.find((item) => item.value === timeline)?.label ?? "—" },
              { label: "Budget", value: BUDGETS.find((item) => item.value === budget)?.label ?? "—" },
              { label: "Name", value: name || "—" },
              { label: "Email", value: email || "—" },
              { label: "Business", value: company || "—" },
              { label: "Notes", value: details || "—" },
            ].map((row, index, list) => (
              <div key={row.label} className={`grid grid-cols-1 sm:grid-cols-12 gap-2 py-4 ${index < list.length - 1 ? "border-b border-slate-200" : ""}`}>
                <dt className="sm:col-span-3 text-[10px] font-bold uppercase tracking-widest text-slate-600">{row.label}</dt>
                <dd className="sm:col-span-9 font-medium text-slate-900 whitespace-pre-wrap">{row.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {error ? <p className="text-sm font-medium text-slate-700">{error}</p> : null}

        <div className="hidden sm:flex flex-col sm:flex-row gap-4 pt-2">
          {step > 0 ? (
            <button type="button" onClick={back} className={`${btnSecondary} w-full sm:w-auto`}>
              Back
            </button>
          ) : null}
          {step < STEPS.length - 1 ? (
            <button type="button" onClick={next} className={`${btnPrimary} w-full sm:w-auto`}>
              Continue
            </button>
          ) : (
            <button type="button" onClick={onSubmit} disabled={status === "sending"} className={`${btnPrimary} w-full sm:w-auto disabled:opacity-60`}>
              {status === "sending" ? "Sending…" : "Send project brief"}
            </button>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 z-20 -mx-6 px-6 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-cool-light/95 backdrop-blur-sm border-t border-slate-200/80 sm:static sm:bg-transparent sm:border-0 sm:p-0 sm:backdrop-blur-none space-y-2">
        <div className="flex gap-3 sm:hidden">
          {step > 0 ? (
            <button type="button" onClick={back} className={`${btnSecondary} min-w-0 flex-1`}>
              Back
            </button>
          ) : null}
          {step < STEPS.length - 1 ? (
            <button type="button" onClick={next} className={`${btnPrimary} min-w-0 flex-1`}>
              Continue
            </button>
          ) : (
            <button type="button" onClick={onSubmit} disabled={status === "sending"} className={`${btnPrimary} min-w-0 flex-1 disabled:opacity-60`}>
              {status === "sending" ? "Sending…" : "Send brief"}
            </button>
          )}
        </div>
        <div className="flex justify-between gap-1" role="tablist" aria-label="Wizard steps">
          {STEPS.map((item, index) => (
            <button
              key={item.num}
              type="button"
              role="tab"
              aria-selected={index === step}
              onClick={() => setStep(index)}
              className={`text-[10px] font-bold font-mono tracking-widest min-h-11 px-1 ${index === step ? "text-slate-900" : "text-slate-400"}`}
            >
              {item.num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
