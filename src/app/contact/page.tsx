"use client";

import Link from "next/link";
import React, { ReactNode, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-16";

// Premium Button Styles
const btnPrimary = "inline-flex items-center justify-center rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] min-w-[220px]";
const btnSecondary = "inline-flex items-center justify-center rounded border-2 border-slate-900 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-50 active:scale-[0.98] min-w-[220px]";

function HeroSection({ children, bgClass, id, bgImage }: { children: ReactNode; bgClass: string; id?: string; bgImage?: string }) {
  return (
    <section
      id={id}
      className={`hero-section relative py-16 sm:py-20 ${bgClass} border-b border-gray-100 overflow-hidden`}
    >
      {bgImage && (
        <>
          {/* 1. Base image (Full opacity, crisp on edges) */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          />
          {/* 2. Localized Blur Mask: Blurs background details ONLY behind the text, fading to sharp at the edges */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              maskImage: "radial-gradient(circle, black 15%, transparent 60%)",
              WebkitMaskImage: "radial-gradient(circle, black 15%, transparent 60%)",
            }}
          />
          {/* 3. Radial mask overlay: 92% opaque in the center, fading to 0% at the edges */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(250, 245, 240, 0.92) 0%, rgba(250, 245, 240, 0.65) 45%, rgba(250, 245, 240, 0) 80%)",
            }}
          />
        </>
      )}
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
      className={`full-section relative py-20 lg:py-32 ${bgClass} border-b border-gray-100`}
    >
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

function ContactContent() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || "";
  const initialCustom = searchParams.get("custom") || "";

  const [plan, setPlan] = useState(initialPlan ? initialPlan : (initialCustom ? "custom" : ""));
  const [details, setDetails] = useState(initialCustom);

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">

      {/* SECTION 1: HERO (Warm Sand) */}
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              CONTACT
            </span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Start growing your sales.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Let us discuss your business goals and design a website built to get you more clients. Receive your custom proposal in 24 hours.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <Link href="#channels" className={`${btnSecondary} w-full sm:w-auto`}>
              Direct Details
            </Link>
            <Link href="#form" className={`${btnPrimary} w-full sm:w-auto`}>
              Inquire Now
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* SECTION 2: MESSAGE FORM (Cool Slate) */}
      <FullSection id="message" bgClass="bg-cool-light">
        <div className="space-y-12 max-w-3xl mx-auto w-full relative z-10">
          <div className="text-center space-y-6 flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              COMMUNICATION
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Project Brief.
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm">
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
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Project Scope</label>
                <div className="relative">
                  <select
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
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Inquiry Details</label>
                <textarea
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
        </div>
      </FullSection>

      {/* SECTION 3: OTHER CHANNELS (Slate 50) */}
      <FullSection id="channels" bgClass="bg-warm-light">
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

export default function Contact() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
      <ContactContent />
    </Suspense>
  );
}
