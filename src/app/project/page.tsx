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

export default function ProjectsIndex() {
  const sections = [
    {
      id: "hero",
      num: "SECTION 01",
      name: "PAGE HERO",
      bgClass: "bg-warm-light",
      headline: "Selected Projects.",
      objective: "Set the RESULT-oriented context for your portfolio, showing that you build high-performance custom code for businesses.",
      content: [
        "Subtitle: 'Real web systems and custom applications coded and optimized for business results. No page builders, no template bloat.'",
        "Primary Button: 'Browse Projects' (links to #projects-list)."
      ],
      cta: "Primary button smooth-scrolls directly to the Projects Grid.",
      psychology: "Reinforces the hand-coded engineering angle, telling the user: 'I build actual systems that solve bottlenecks, not just decorative graphic templates.'",
      appleStandard: "No technical jargon. Clean, outcome-focused."
    },
    {
      id: "projects-list",
      num: "SECTION 02",
      name: "PROJECTS GRID",
      bgClass: "bg-cool-light",
      headline: "Real Projects. Real Outcomes.",
      objective: "Present project cards in a clean layout with tag filters so users can view relevant work immediately.",
      content: [
        "Interactive element: Filter tabs (All, Marketing, Web Apps, CRM).",
        "Cards listed: 1. Mobwik (Mobile wiki, 0.2s load) · 2. Dakeek (Real-time Operations dispatch) · 3. CheckersMark (Workspace OS CRM) · 4. NovaCookers (Storefront catalog) · 5. KSingh (Structural consultant portfolio) · 6. JSGasTech (Local contractor campaign).",
        "Each card shows a Chrome browser mockup URL and its verified performance outcomes."
      ],
      cta: "Clicking a card routes to that project's case study detail page `/project/[id]`.",
      psychology: "Marcus-level clients can filter by 'Web Apps' to view databases; Robert can filter by 'Marketing' to see contractor sites, finding exactly what they need.",
      appleStandard: "Chrome mockup cards, minimalist labels, clean layout."
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
            Projects Index `/project` Blueprint
          </h1>
          <p className="text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
            This is a text-only representation of the Projects page layout. Scroll through to review sitemaps, category filters, and project tags live.
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
