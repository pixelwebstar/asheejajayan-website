"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28";

// Premium Button Styles
const btnPrimary = "inline-flex items-center justify-center rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] min-w-[220px]";
const btnSecondary = "inline-flex items-center justify-center rounded border-2 border-slate-900 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-50 active:scale-[0.98] min-w-[220px]";

function HeroSection({ children, bgClass, id }: { children: ReactNode; bgClass: string; id?: string }) {
  return (
    <section
      id={id}
      className={`hero-section relative py-16 sm:py-20 ${bgClass} border-b border-gray-100`}
    >
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

function FullSection({ children, bgClass, id }: { children: ReactNode; bgClass: string; id?: string }) {
  return (
    <section
      id={id}
      className={`full-section relative py-12 sm:py-16 ${bgClass} border-b border-gray-100`}
    >
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

export default function Contact() {
  // Interactive Brief Builder State
  const [selections, setSelections] = useState<string[]>(["CRM"]);

  const toggleSelection = (item: string) => {
    if (selections.includes(item)) {
      setSelections(selections.filter(i => i !== item));
    } else {
      setSelections([...selections, item]);
    }
  };

  const requirements = [
    { id: "DEV", label: "Custom Website Build" },
    { id: "CRM", label: "Automated Lead Integration" },
    { id: "CHECKOUT", label: "Secure Payment Systems" },
    { id: "SEO", label: "Search Engine Authority" },
    { id: "PORTAL", label: "Frictionless Content Editor" }
  ];

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">

      {/* SECTION 1: HERO (Pure White) */}
      <HeroSection bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Start Your Project.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
            Ready to deploy an elite digital sales system that effortlessly captures leads? Select your specifications below or message us directly to begin.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#brief" className={`${btnPrimary} w-full sm:w-auto`}>
              Build Requirements
            </Link>
            <Link href="#message" className={`${btnSecondary} w-full sm:w-auto`}>
              Send Inquiry
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* SECTION 2: PROJECT BRIEF BUILDER (Slate 50) */}
      <FullSection id="brief" bgClass="bg-cool-light">
        <div className="space-y-12 max-w-3xl mx-auto relative z-10 w-full">
          <div className="text-center space-y-6 flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              SPECIFICATIONS
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Interactive Architecture Brief.
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed font-medium">
              Select your essential requirements below. These choices will form the baseline structural logic for your custom build.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
            <div className="space-y-4">
              {requirements.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleSelection(item.id)}
                  className={`w-full p-5 border-2 rounded-xl flex justify-between items-center text-sm font-bold transition-all ${selections.includes(item.id) ? 'bg-slate-100 text-slate-900 border-slate-900 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 shadow-sm'}`}
                >
                  <span>{item.label}</span>
                  <span className={`text-lg leading-none ${selections.includes(item.id) ? 'text-slate-900' : 'text-slate-400'}`}>
                    {selections.includes(item.id) ? "✓" : "+"}
                  </span>
                </button>
              ))}
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center text-sm font-bold">
              <span className="text-slate-900">Total Architecture Requirements</span>
              <span className="text-slate-900">{selections.length} Selected</span>
            </div>

            <div className="text-center pt-4">
              <Link href="#message" className={`${btnPrimary} w-full py-6 rounded-xl text-sm`}>
                Confirm Specifications
              </Link>
            </div>
          </div>
        </div>
      </FullSection>

      {/* SECTION 3: MESSAGE FORM (White) */}
      <FullSection id="message" bgClass="bg-warm-light">
        <div className="space-y-12 max-w-3xl mx-auto w-full relative z-10">
          <div className="text-center space-y-6 flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              COMMUNICATION
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Direct Contact.
            </h2>
          </div>

          <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-center sm:text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" required className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                  <input type="email" required className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Inquiry Details</label>
                <textarea rows={5} className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm resize-none" placeholder="Describe your business requirements..."></textarea>
              </div>
              <button type="submit" className={`${btnPrimary} w-full py-6 rounded-xl text-sm`}>
                Submit Project Request
              </button>
            </form>
          </div>

          <div className="pt-8 flex justify-center w-full">
            <Link href="#channels" className={`${btnSecondary} w-full sm:w-auto`}>
              View Other Channels
            </Link>
          </div>
        </div>
      </FullSection>

      {/* SECTION 4: OTHER CHANNELS (Slate 50) */}
      <FullSection id="channels" bgClass="bg-cool-light">
        <div className="space-y-12 max-w-xl mx-auto text-center">
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              CHANNELS
            </span>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Global Presence.
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
            <div className="border-b border-slate-100 pb-8 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Executive Email</span>
              <div className="text-xl font-bold text-slate-900">hello@amrith.com</div>
            </div>
            <div className="border-b border-slate-100 pb-8 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Headquarters</span>
              <div className="text-xl font-bold text-slate-900">Canada</div>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Digital Profiles</span>
              <div className="flex justify-center gap-8 pt-2 text-xs font-bold text-slate-900">
                <a href="#" className="hover:text-slate-500 transition-colors uppercase tracking-widest">LinkedIn</a>
                <a href="#" className="hover:text-slate-500 transition-colors uppercase tracking-widest">GitHub</a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link href="/#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
              Return to Pricing
            </Link>
          </div>
        </div>
      </FullSection>

    </div>
  );
}
