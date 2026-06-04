"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

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

export default function Pricing() {
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

      {/* SECTION 2: PLAN CARDS (Centered Cards — Interactive) */}
      <FullSection id="plans" bgClass="bg-cool-light">
        <div className="max-w-6xl mx-auto w-full space-y-12 lg:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              INVESTMENT TIERS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Choose Your Scope.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              Each tier matches your growth stage. Select the package that aligns with your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => {
              const isRecommended = index === 1;
              return (
                <div
                  key={plan.name}
                  className={`flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-0.5 ${
                    isRecommended 
                      ? 'bg-white text-slate-900 border-2 border-slate-900 shadow-lg scale-[1.02]' 
                      : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-md'
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-slate-500">
                    {isRecommended ? "RECOMMENDED" : `TIER 0${index + 1}`}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">{plan.price}</div>
                  <p className="text-sm leading-relaxed mb-6 text-slate-600">
                    {plan.desc}
                  </p>
                  <ul className="space-y-2 text-xs text-left w-full mb-8 text-slate-600">
                    {plan.features.map(f => (
                      <li key={f}>+ {f}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?plan=${plan.name.toLowerCase()}`}
                    className={`w-full py-4 text-xs font-bold uppercase tracking-widest rounded-xl border-2 transition-all mt-auto text-center ${
                      isRecommended 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md hover:bg-slate-800' 
                        : 'bg-transparent text-slate-900 border-slate-200 hover:border-slate-900'
                    }`}
                  >
                    Select {plan.name}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="#custom" className={`${btnPrimary} w-full sm:w-auto`}>
              Need Something Custom?
            </Link>
          </div>
        </div>
      </FullSection>

      {/* SECTION 3: CUSTOM PROJECTS (Split — Left Heading / Right Feature List) */}
      <FullSection id="custom" bgClass="bg-warm-light">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Heading */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                BESPOKE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Custom Client Solutions.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                If your business requires specific integrations, multi-location platforms, or custom booking systems, I design proposals tailored to your exact objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contact?plan=enterprise" className={`${btnPrimary} w-full sm:w-auto`}>
                  Request Custom Quote
                </Link>
              </div>
            </div>

            {/* Right: Feature Rows with Dividers */}
            <div className="lg:col-span-7 space-y-0">
              {[
                { title: "Custom Integrations", desc: "Payment systems, third-party APIs, and custom automation workflows built to fit your operations." },
                { title: "Multi-Location Platforms", desc: "Separate landing pages, localized SEO, and location-specific contact forms for each branch." },
                { title: "Payment & Billing", desc: "Secure checkout flows, invoicing portals, and subscription billing configured for your business model." },
                { title: "Booking Calendars", desc: "Integrated scheduling systems that let customers book appointments directly from your website." }
              ].map((item, idx) => (
                <div key={item.title} className={`py-6 ${idx < 3 ? 'border-b border-slate-200' : ''}`}>
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FullSection>

    </div>
  );
}

