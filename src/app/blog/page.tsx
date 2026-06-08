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

export default function BlogIndex() {
  const sections = [
    {
      id: "hero",
      num: "SECTION 01",
      name: "PAGE HERO",
      bgClass: "bg-warm-light",
      headline: "Web Insights.",
      objective: "Attract business owners searching Google for answers on speed, CRM automation, and local SEO, setting a helpful, authoritative tone.",
      content: [
        "Subtitle: 'Straightforward guides on page speed, search rankings, and CRM automation written in plain English for business owners.'",
        "Primary Button: 'Explore Articles' (links to #articles-list)."
      ],
      cta: "Primary button smooth-scrolls directly to the article grid.",
      psychology: "Proves that you speak like a business advisor, explaining complex code frameworks in simple, clear business terms.",
      appleStandard: "No clickbait headlines, no tech jargon. Focuses on real, high-value informational search terms."
    },
    {
      id: "articles-list",
      num: "SECTION 02",
      name: "ARTICLE LIST GRID",
      bgClass: "bg-cool-light",
      headline: "Guides & Insights.",
      objective: "Present informational articles in a clean list sorted chronologically.",
      content: [
        "Article 1: How Much Does a Custom Website Actually Cost? (Tag: BUDGET · 4 min read) — A direct breakdown of design, coding, and hosting expenses for small business owners.",
        "Article 2: Custom Web Design vs WordPress: An Honest Comparison (Tag: COMPARISON · 5 min read) — We compare load speeds, security loopholes, and plugin maintenance issues to show the real difference.",
        "Article 3: Why Your Small Business Needs a Customer Database (CRM) (Tag: OPERATIONS · 3 min read) — How automated lead capture prevents dropped calls and saves hours of manual follow-up."
      ],
      cta: "Clicking an article card routes to that post's detail page `/blog/[id]`.",
      psychology: "Builds authority by solving client problems for free (Cialdini's Reciprocity). By reading your guides, they realize you are a subject matter expert and become highly likely to check your pricing packages.",
      appleStandard: "Clean stacked layout, elegant font formatting."
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
            Blog Index `/blog` Blueprint
          </h1>
          <p className="text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
            This is a text-only representation of the Blog index page layout. Scroll through to review guides, tags, read times, and traffic metrics live.
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
