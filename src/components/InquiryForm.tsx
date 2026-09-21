"use client";

import { useState } from "react";
import { btnPrimary, fieldClass } from "@/lib/ui";

export default function InquiryForm() {
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
        body: JSON.stringify({ kind: "inquiry", name, email, details, website, scopes: ["websites"] }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setError(data.error || "Could not send. Try again.");
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
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Message received.</h3>
        <p className="text-sm text-slate-600 font-medium leading-relaxed">I will reply in one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5 no-swipe">
      <div className="space-y-2">
        <label htmlFor="ask-name" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
          Full name
        </label>
        <input id="ask-name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} placeholder="Your name" />
      </div>
      <div className="space-y-2">
        <label htmlFor="ask-email" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
          Email
        </label>
        <input id="ask-email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} placeholder="you@company.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="ask-details" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
          Question
        </label>
        <textarea id="ask-details" required rows={5} value={details} onChange={(e) => setDetails(e.target.value)} className={`${fieldClass} resize-none`} placeholder="What do you want to know?" />
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      {error ? <p className="text-sm font-medium text-slate-700">{error}</p> : null}
      <button type="submit" disabled={status === "sending"} className={`${btnPrimary} w-full py-4 rounded-xl text-sm disabled:opacity-60`}>
        {status === "sending" ? "Sending…" : "Send question"}
      </button>
    </form>
  );
}
