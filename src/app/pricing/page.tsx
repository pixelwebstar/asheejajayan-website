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
      className={`min-h-[100svh] flex items-center justify-center relative py-24 ${bgClass} border-b border-gray-100`}
    >
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("GROWTH");

  const plans = [
    {
      name: "ESSENTIAL",
      price: "$999",
      desc: "Perfect for new businesses needing a clean, professional online presence.",
      features: ["Custom Web Design", "Fits All Mobile Phones", "Basic Search Optimization", "1 Week Delivery"]
    },
    {
      name: "GROWTH",
      price: "$2,499",
      desc: "Designed for expanding businesses ready to capture and structure leads automatically.",
      features: ["Everything in Essential", "Inquiries Saved Automatically", "Layout Conversion Audit", "3 Weeks Delivery"]
    },
    {
      name: "ENTERPRISE",
      price: "$4,999+",
      desc: "Full-scale custom applications, payment systems, and client tracking setup.",
      features: ["Everything in Growth", "Custom Business Website", "Payment Setup & Support", "Priority Support"]
    }
  ];

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">

      {/* SECTION 1: HERO */}
      <HeroSection bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Transparent Pricing Packages.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
            Select a plan below, fill out the custom request brief, and launch development. No hidden fees, no retainers.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#plans" className={`${btnPrimary} w-full sm:w-auto`}>
              Explore Plans
            </Link>
            <Link href="#checkout" className={`${btnSecondary} w-full sm:w-auto`}>
              Go to Intake Form
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* SECTION 2: PLAN CARDS */}
      <FullSection id="plans" bgClass="bg-cool-light">
        <div className="space-y-20 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              INVESTMENT TIERS
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Choose Your Scope.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Each tier is designed to match your growth stage. Select the package that aligns with your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`flex flex-col items-center text-center p-8 rounded-2xl border transition-all ${selectedPlan === plan.name ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.02]' : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-md'}`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${selectedPlan === plan.name ? 'text-slate-400' : 'text-slate-500'}`}>
                  {index === 1 ? "RECOMMENDED" : `TIER 0${index + 1}`}
                </span>
                <h3 className="text-lg font-bold tracking-tight mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-black mb-4">{plan.price}</div>
                <p className={`text-sm leading-relaxed mb-6 ${selectedPlan === plan.name ? 'text-slate-300' : 'text-slate-600'}`}>
                  {plan.desc}
                </p>
                <ul className={`space-y-2 text-xs text-left w-full mb-8 ${selectedPlan === plan.name ? 'text-slate-300' : 'text-slate-600'}`}>
                  {plan.features.map(f => (
                    <li key={f}>+ {f}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full py-4 text-xs font-bold uppercase tracking-widest rounded-xl border-2 transition-all mt-auto ${selectedPlan === plan.name ? 'bg-white text-slate-900 border-white shadow-md' : 'bg-transparent text-slate-900 border-slate-200 hover:border-slate-900'}`}
                >
                  {selectedPlan === plan.name ? "SELECTED" : `SELECT ${plan.name}`}
                </button>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link href="#custom" className={`${btnPrimary} w-full sm:w-auto`}>
              Need Something Custom?
            </Link>
          </div>
        </div>
      </FullSection>

      {/* SECTION 3: CUSTOM PROJECTS */}
      <FullSection id="custom" bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-3xl mx-auto space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            BESPOKE
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Custom Client Solutions.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            If your business requires specific integrations, custom-built tools, booking calendar configurations, or multi-location platforms, I can design a custom proposal package tailored to your exact objectives.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-4">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center">
              <span className="block text-slate-900 font-black text-lg mb-1">✔</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Custom Integrations</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center">
              <span className="block text-slate-900 font-black text-lg mb-1">✔</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Multi-Location</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center">
              <span className="block text-slate-900 font-black text-lg mb-1">✔</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Payment Systems</span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link href="#checkout" onClick={() => setSelectedPlan("ENTERPRISE")} className={`${btnPrimary} w-full sm:w-auto`}>
              Request Custom Quote
            </Link>
          </div>
        </div>
      </FullSection>

      {/* SECTION 4: CHECKOUT FORM */}
      <FullSection id="checkout" bgClass="bg-cool-light">
        <div className="space-y-12 max-w-3xl mx-auto relative z-10 w-full">
          <div className="text-center space-y-6 flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">INITIATE</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Complete Your Request.
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed font-medium">
              Confirm your selected package, complete the client form below, and submit to proceed.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">

              <div className="space-y-4">
                <label className="block text-center sm:text-left text-[10px] font-bold text-slate-500 uppercase tracking-widest">Select Scope</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["ESSENTIAL", "GROWTH", "ENTERPRISE"].map((plan) => (
                    <button
                      key={plan}
                      type="button"
                      onClick={() => setSelectedPlan(plan)}
                      className={`py-5 text-[10px] font-bold tracking-widest rounded-xl uppercase transition-all border-2 ${selectedPlan === plan ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 shadow-sm'}`}
                    >
                      {plan}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-center sm:text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                  <input type="text" required className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="John" />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                  <input type="text" required className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Business Email</label>
                <input type="email" required className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="john@company.com" />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Project Objectives</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm resize-none" placeholder="Describe your vision and requirements..."></textarea>
              </div>

              <button type="submit" className={`${btnPrimary} w-full py-6 rounded-xl text-sm`}>
                Submit Project Request
              </button>
            </form>
          </div>
        </div>
      </FullSection>
    </div>
  );
}

