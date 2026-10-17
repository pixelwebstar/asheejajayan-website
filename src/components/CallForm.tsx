"use client";

import { useState, type FormEvent } from "react";
import { btnPrimary, fieldClass } from "@/lib/ui";

export default function CallForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    if (details.trim().length < 8) {
      setError("Add two times that work.");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "call",
          name,
          phone,
          email,
          company,
          details,
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
          I will confirm a time within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="relative bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
      <form onSubmit={onSubmit} className="space-y-6 no-swipe">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="call-name" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Full name
            </label>
            <input id="call-name" name="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="call-phone" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Phone
            </label>
            <input id="call-phone" name="phone" autoComplete="tel" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className={fieldClass} placeholder="Your mobile number" />
          </div>
          <div className="space-y-2">
            <label htmlFor="call-email" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Email
            </label>
            <input id="call-email" name="email" autoComplete="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} placeholder="you@company.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="call-company" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              Business
            </label>
            <input id="call-company" name="company" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} className={fieldClass} placeholder="Business name" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="call-times" className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            Two times that work
          </label>
          <textarea
            id="call-times"
            name="details"
            rows={4}
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className={`${fieldClass} resize-none`}
            placeholder="Tuesday after 4, or Wednesday morning. A website for a repair shop."
          />
        </div>
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="call-website">Website</label>
          <input id="call-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        {error ? <p className="text-sm font-medium text-slate-700">{error}</p> : null}
        <button type="submit" disabled={status === "sending"} className={`${btnPrimary} w-full py-4 rounded-xl text-sm disabled:opacity-60`}>
          {status === "sending" ? "Sending…" : "Request a time"}
        </button>
      </form>
    </div>
  );
}
