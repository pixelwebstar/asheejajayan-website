"use client";

import React, { useState } from "react";

const btnPrimary = "inline-flex items-center justify-center rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] min-w-[220px]";

export default function ContactForm() {
  const [plan, setPlan] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <label htmlFor="contact-name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
            <input id="contact-name" type="text" required className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="John Doe" />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <label htmlFor="contact-email" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
            <input id="contact-email" type="email" required className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="john@company.com" />
          </div>
        </div>

        <div className="space-y-2 text-center sm:text-left">
          <label htmlFor="contact-scope" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Project Scope</label>
          <div className="relative">
            <select
              id="contact-scope"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm appearance-none cursor-pointer"
            >
              <option value="">Select a package...</option>
              <option value="essential">Essential Package ($999)</option>
              <option value="growth">Growth Package ($2,499)</option>
              <option value="enterprise">Enterprise Package ($4,999+)</option>
              <option value="custom">Custom Bespoke Solution</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-slate-400 font-bold select-none">
              ▼
            </div>
          </div>
        </div>

        <div className="space-y-2 text-center sm:text-left">
          <label htmlFor="contact-details" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Inquiry Details</label>
          <textarea
            id="contact-details"
            rows={5}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm resize-none"
            placeholder="Describe your business requirements..."
          ></textarea>
        </div>

        <button type="submit" className={`${btnPrimary} w-full py-6 rounded-xl text-sm`}>
          Submit Project Request
        </button>
      </form>
    </div>
  );
}
