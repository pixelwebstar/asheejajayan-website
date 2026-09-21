"use client";

import { useState } from "react";
import ScopeChips from "@/components/ScopeChips";
import { parseScopes, type ScopeValue } from "@/lib/catalog";
import { btnPrimary, fieldClass } from "@/lib/ui";

export default function ContactForm({
  initialScopes = ["websites"],
}: {
  initialScopes?: string[];
}) {
  const [scopes, setScopes] = useState<ScopeValue[]>(() => parseScopes(initialScopes));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
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
          details,
          scopes,
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
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Brief received.</h3>
        <p className="text-sm text-slate-600 font-medium leading-relaxed">
          I will reply in one business day with a fixed quote. No call required.
        </p>
      </div>
    );
  }

  return (
    <div className="relative bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
      <form onSubmit={onSubmit} className="space-y-5 no-swipe">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="brief-name" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Full name
            </label>
            <input id="brief-name" name="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="brief-email" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Email
            </label>
            <input id="brief-email" name="email" autoComplete="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} placeholder="you@company.com" />
          </div>
        </div>

        <div className="space-y-2">
          <span id="brief-scope-label" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            What do you need?
          </span>
          <ScopeChips value={scopes} onChange={setScopes} id="brief-scope" />
        </div>

        <div className="space-y-2">
          <label htmlFor="brief-details" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            Notes
          </label>
          <textarea
            id="brief-details"
            name="details"
            rows={4}
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className={`${fieldClass} resize-none`}
            placeholder="What the site needs to do, and when you want it live."
          />
        </div>

        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="brief-website">Website</label>
          <input id="brief-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>

        {error ? <p className="text-sm font-medium text-slate-700">{error}</p> : null}

        <button type="submit" disabled={status === "sending"} className={`${btnPrimary} w-full py-4 rounded-xl text-sm disabled:opacity-60`}>
          {status === "sending" ? "Sending…" : "Send brief"}
        </button>
      </form>
    </div>
  );
}
