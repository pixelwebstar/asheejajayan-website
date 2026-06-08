"use client";

import Link from "next/link";
import React from "react";

const shell = "mx-auto w-full max-w-5xl px-6 py-12 sm:px-12 sm:py-16 space-y-8";

function WireframeSection({
  id,
  num,
  name,
  bgClass,
  headline,
  objective,
  content,
  cta,
  psychology,
  appleStandard
}: {
  id: string;
  num: string;
  name: string;
  bgClass: string;
  headline: string;
  objective: string;
  content: string[];
  cta: string;
  psychology: string;
  appleStandard: string;
}) {
  return (
    <section id={id} className={`w-full ${bgClass} border-b border-slate-200/60 overflow-hidden`}>
      <div className={shell}>
        {/* Section Label */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-900/10 pb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            {num} · {name}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest bg-slate-900/5 px-2 py-0.5 rounded text-slate-600 font-mono">
            Background: {bgClass === "bg-warm-light" ? "Warm Sand (#FAF5F0)" : bgClass === "bg-cool-light" ? "Cool Slate (#F0F4F8)" : "Flat White (#FFFFFF)"}
          </span>
        </div>

        {/* Copy Headline */}
        <div className="space-y-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Planned Headline:</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            {headline}
          </h2>
        </div>

        {/* Detailed Blueprint Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Left Column: Objective & Copy */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">🎯 Section Objective</h3>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {objective}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">📝 Copywriting Content</h3>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed font-medium">
                {content.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-slate-400 shrink-0 font-mono">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: CTA & Psychology Walkthrough */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">🔘 Action Trigger (CTA)</h3>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {cta}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">💡 Client Psychology Walkthrough</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {psychology}
              </p>
            </div>

            <div className="space-y-2 border-t border-slate-900/10 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">🔒 Apple Standard Note</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium italic">
                {appleStandard}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  const sections = [
    {
      id: "hero",
      num: "SECTION 01",
      name: "PAGE HERO",
      bgClass: "bg-warm-light",
      headline: "Transparent Pricing Packages.",
      objective: "Establish immediate trust by providing transparent, fixed-price packages. Defuses the standard client fear of hidden developer fees.",
      content: [
        "Subtitle: 'Select a plan below, customize your options with the estimator, and launch development. No hidden fees, no monthly platform rent.'",
        "Primary Button: 'Explore Plans' (links to #plans).",
        "Secondary Button: 'Build a Custom Quote' (links to #estimator)."
      ],
      cta: "Navigates either to the standard packages or scrolls directly to the Interactive Estimator.",
      psychology: "Clients hate the 'schedule a discovery call for a quote' game. By showing pricing upfront, you immediately establish yourself as transparent and direct, matching Apple's clarity.",
      appleStandard: "No technical jargon. Focuses on flat, predictable billing packages."
    },
    {
      id: "plans",
      num: "SECTION 02",
      name: "PLAN TIERS GRID",
      bgClass: "bg-cool-light",
      headline: "Choose Your Scope.",
      objective: "Segment clients into 3 distinct packages: Essential ($999), Growth ($2,499), and Enterprise ($4,999+).",
      content: [
        "Card 1: ESSENTIAL — $999. Perfect for new businesses needing a clean, professional online presence. Features: Custom Web Design, Fits All Mobile Phones, Basic Search Optimization, 1 Week Delivery.",
        "Card 2: GROWTH (Recommended) — $2,499. Designed for expanding businesses ready to capture and structure leads automatically. Features: Everything in Essential, Inquiries Saved Automatically, Layout Conversion Audit, 3 Weeks Delivery.",
        "Card 3: ENTERPRISE — $4,999+. Full-scale custom applications, payment systems, and client tracking setup. Features: Everything in Growth, Custom Business Website, Payment Setup & Support, CheckersMark Portal Access."
      ],
      cta: "Buttons route the client to the Contact Project Brief form at `/contact?plan=[plan-name]`.",
      psychology: "Visual hierarchy is key. By highlighting the 'Growth' package as recommended, we guide mid-market business owners to self-select the highest value-density package.",
      appleStandard: "Simple, easy-to-read grids with clear pricing figures and feature checkmarks."
    },
    {
      id: "estimator",
      num: "SECTION 03",
      name: "INTERACTIVE ESTIMATOR",
      bgClass: "bg-warm-light",
      headline: "Interactive Cost Estimator.",
      objective: "Let clients custom-build their website scope and see the quote calculate in real-time, removing all pricing friction.",
      content: [
        "Feature checkboxes: Custom Web Design ($999, Base) · Mobile Layout (Included) · CRM Lead Capture (+$500) · Google Maps SEO (+$300) · Google Ads Setup (+$500) · Custom Web Applications (+$2,000) · Stripe / Apple Pay Checkout (+$800) · CheckersMark Portal Access (+$400) · Support & Backups (+$200/mo).",
        "Dynamic live price indicator displaying total sum.",
        "CTA Button: 'Request This Quote' (links to /contact?custom=[encoded-summary])."
      ],
      cta: "Redirects the client to the contact page, pre-filling the Project Brief textarea with their exact estimator selections.",
      psychology: "Utilizes the Zeigarnik Effect (tension of uncompleted tasks). Toggling features creates a sense of customization and micro-commitment, making them highly likely to submit the brief once their custom price is revealed.",
      appleStandard: "A clean, tactile interface where inputs translate immediately into a clear outcome (the price)."
    },
    {
      id: "included",
      num: "SECTION 04",
      name: "STANDARD INCLUDED FEATURES",
      bgClass: "bg-cool-light",
      headline: "Included in Every Build.",
      objective: "Define standard deliverables. Prevents repetitive questions about basic performance features.",
      content: [
        "Checklist: Mobile layouts · Search engine friendly setup · Lead capture form · 1 round of revisions · 100% source code ownership · 30 days support · $0 monthly platform fees."
      ],
      cta: "None.",
      psychology: "Removes lingering objections. Stating '100% code ownership' and '$0 platform fees' contrasts with Wix/Shopify lock-in, validating the custom-build decision.",
      appleStandard: "Presents table stakes clearly. Focuses on peace of mind and client control."
    },
    {
      id: "custom",
      num: "SECTION 05",
      name: "BESPOKE ENTERPRISE SOLUTIONS",
      bgClass: "bg-warm-light",
      headline: "Custom Client Solutions.",
      objective: "Pitch complex web application systems directly to large enterprise clients who have unique software goals.",
      content: [
        "Bespoke features: Custom API integrations · Multi-location platforms · Subscription billing · Secure booking databases.",
        "Button: 'Request Custom Proposal' (links to /contact?plan=enterprise)."
      ],
      cta: "Routes to Contact Project Brief.",
      psychology: "Marcus-level clients (B2B apps) realize you aren't just building brochure sites. They see you can build full-scale database systems to solve their specific bottlenecks.",
      appleStandard: "Highlights the capability to build tailored engineering systems rather than generic templates."
    },
    {
      id: "faq",
      num: "SECTION 06",
      name: "FAQ ACCORDION",
      bgClass: "bg-cool-light",
      headline: "Common Questions.",
      objective: "Overcome final buying friction points (code ownership, revisions, timelines, payment terms) at the bottom of the page.",
      content: [
        "Q: 'Do I own the code?' — A: 'Yes. 100%. We hand over all source files. No lock-in, no monthly platform builder fees.'",
        "Q: 'How long does a project take?' — A: 'Essential: ~1 week. Growth: ~3 weeks. Custom apps depend on scope.'",
        "Q: 'Are there monthly fees?' — A: 'No. You pay once for the custom design and build. Support plans are optional.'",
        "Q: 'Do you require a deposit?' — A: 'Yes. To maintain high-quality work, we require a secure deposit via Stripe to book your onboarding brief. We spend hours researching your business before the call, and this filters out casual inquiries. If we aren't a fit, it is refunded.' (Apple Standard Setup)"
      ],
      cta: "None.",
      psychology: "Defuses remaining skepticism. The onboarding deposit explanation positions your time as highly valuable (like Apple's premium consulting), making the client respect your time before they even contact you.",
      appleStandard: "Collapsible accordion design. Simple, direct answers, zero fluff."
    }
  ];

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      {/* Page Header Info */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="mx-auto w-full max-w-5xl px-6 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            INTERACTIVE BLUEPRINT MODE
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
            Pricing Page `/pricing` Blueprint
          </h1>
          <p className="text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
            This is a text-only representation of the Pricing page layout. Scroll through to review the standard packages, custom estimator toggles, and client psychology notes live.
          </p>
        </div>
      </section>

      {/* Render Wireframe Sections */}
      {sections.map((sect) => (
        <WireframeSection key={sect.id} {...sect} />
      ))}
    </div>
  );
}
