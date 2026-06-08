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

export default function Services() {
  const sections = [
    {
      id: "hero",
      num: "SECTION 01",
      name: "PAGE HERO",
      bgClass: "bg-warm-light",
      headline: "Web Services Tailored for Growth.",
      objective: "Confirm that you build secure web systems that automate business operations, setting a premium technical tone.",
      content: [
        "Subtitle: 'We design and code clean, fast, custom web systems that automate operations and turn traffic into leads.'",
        "Primary Button: 'Explore Capabilities' (links to #overview)."
      ],
      cta: "Primary button smooth-scrolls directly to the Overview Jump-Link Grid.",
      psychology: "Sets a high standard immediately, making the client realize they are buying functional code rather than static marketing brochures.",
      appleStandard: "Direct, plain English, zero agency jargon."
    },
    {
      id: "overview",
      num: "SECTION 02",
      name: "SERVICES JUMP-LINK GRID",
      bgClass: "bg-cool-light",
      headline: "Choose Your Service.",
      objective: "Help the client navigate directly to the specific service details they care about.",
      content: [
        "Jump-links grid: Websites Detail · Web Apps Detail · CRM Software Detail · Google Maps SEO · Google Ads Setup · Support & Backups."
      ],
      cta: "Tapping any link triggers a smooth-scroll down to that specific section.",
      psychology: "Slashes navigation friction. A visitor only looking for a CRM pipeline doesn't have to scroll through website design sections.",
      appleStandard: "Ergonomic grid links, neat layout."
    },
    {
      id: "websites",
      num: "SECTION 03",
      name: "WEBSITES DETAIL",
      bgClass: "bg-warm-light",
      headline: "Custom Websites.",
      objective: "Detail hand-coded marketing websites. Connects the speed, SEO, and $0 monthly platform fee benefits.",
      content: [
        "Key specs: Sub-0.3s load speed · Mobile optimized · Built-in SEO · Full source code handoff · Chrome browser mockup.",
        "CTA Button: 'Request Website Quote' (links to /pricing)."
      ],
      cta: "Redirects the client to the Pricing packages page.",
      psychology: "Proves you build fast, clean frontends that capture attention instantly, making template alternatives look slow and bloated.",
      appleStandard: "Clean mockup visualization, plain benefits description."
    },
    {
      id: "web-apps",
      num: "SECTION 04",
      name: "WEB APPLICATIONS DETAIL",
      bgClass: "bg-cool-light",
      headline: "Custom Web Applications.",
      objective: "Showcase custom-engineered database and portal applications, showing you build software systems, not just pages.",
      content: [
        "Key specs: Invoicing systems · booking calendars · user authentication · mobile PWA installations · Chrome browser mockup.",
        "CTA Button: 'Request Custom Proposal' (links to /contact?plan=enterprise)."
      ],
      cta: "Redirects the client to the Contact Brief page.",
      psychology: "Appeals to Marcus-level clients (B2B tools). Proves you can solve heavy operational bottlenecks.",
      appleStandard: "Clean mockup, outcome-focused."
    },
    {
      id: "crm-software",
      num: "SECTION 05",
      name: "CRM SOFTWARE DETAIL",
      bgClass: "bg-warm-light",
      headline: "Custom CRM Database Integration.",
      objective: "Highlight custom lead databases. Mentions your own CheckersMark software naturally.",
      content: [
        "Key specs: Forms saved directly to database · Instant text alerts on phone · Zero lost leads · 'Built on the same secure CRM foundation we use to manage our own client pipelines.'",
        "CTA Button: 'Integrate CRM' (links to /pricing)."
      ],
      cta: "Redirects the client to the Pricing packages page.",
      psychology: "Highlights your own tool (CheckersMark), proving you build software products for yourself, not just client work.",
      appleStandard: "Simple explanations of lead pipelines, zero complex DB jargon."
    },
    {
      id: "google-map",
      num: "SECTION 06",
      name: "GOOGLE MAPS SEO",
      bgClass: "bg-cool-light",
      headline: "Local Business SEO.",
      objective: "Detail Google Business Profile and Maps optimization, critical for local trades and contractor leads.",
      content: [
        "Key specs: Rank higher locally · Maximize organic reviews · Dynamic local tracking · Chrome browser mockup.",
        "CTA Button: 'Optimize My Maps' (links to /contact?plan=growth)."
      ],
      cta: "Redirects to Contact Brief page.",
      psychology: "Addresses local business owner needs (like Robert the plumber). They see how you directly drive local phone calls.",
      appleStandard: "Clear local lead outcomes."
    },
    {
      id: "google-ads",
      num: "SECTION 07",
      name: "GOOGLE ADS CAMPAIGNS",
      bgClass: "bg-warm-light",
      headline: "Search Ads Campaigns.",
      objective: "Detail targeted Paid Search setup, driving ready-to-buy traffic to client sites.",
      content: [
        "Key specs: Zero budget waste · Targeted keywords · High conversion rates · Performance tracking.",
        "CTA Button: 'Start Ad Campaign' (links to /contact?plan=growth)."
      ],
      cta: "Redirects to Contact Brief page.",
      psychology: "Presents ads as an investment that directly scales phone calls.",
      appleStandard: "No bloated metrics. Simple, clear ROI values."
    },
    {
      id: "support-ops",
      num: "SECTION 08",
      name: "SUPPORT & OPERATIONS",
      bgClass: "bg-cool-light",
      headline: "Support & Backups.",
      objective: "Detail ongoing backups, security, and content updates for peace of mind.",
      content: [
        "Key specs: Daily database backups · Speed monitoring · Security patches · Priority updates.",
        "CTA Button: 'Request Support Plan' (links to /contact)."
      ],
      cta: "Redirects to Contact page.",
      psychology: "Guarantees you stay around after launch, removing the fear of developers who vanish.",
      appleStandard: "Flat support packages, clean copy."
    },
    {
      id: "cta",
      num: "SECTION 09",
      name: "PAGE CTA",
      bgClass: "bg-warm-light",
      headline: "Ready to Build Your System?",
      objective: "Transition the detail-seeker into a buying state.",
      content: [
        "Subtitle: 'Review our pricing tiers, calculate custom feature options, and start development.'",
        "Primary Button: 'View Pricing Packages' (links to /pricing)."
      ],
      cta: "Redirects to Pricing page.",
      psychology: "The logical close of the services deep-dive.",
      appleStandard: "Clean, direct close."
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
            Services Page `/services` Blueprint
          </h1>
          <p className="text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
            This is a text-only representation of the Services page layout. Scroll through to review capabilities, browser mockups, CheckersMark integrations, and section objectives live.
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
