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

export default function Contact() {
  const sections = [
    {
      id: "hero",
      num: "SECTION 01",
      name: "PAGE HERO",
      bgClass: "bg-warm-light",
      headline: "Start Your Project.",
      objective: "Welcome high-intent leads ready to submit their brief. Sets clear expectations about response timelines.",
      content: [
        "Subtitle: 'Ready to start? Fill out the project brief below or reach out directly. I reply with a custom proposal in under 24 hours.'",
        "Primary Button: 'Go to Intake Form' (links to #message).",
        "Secondary Button: 'Direct Channels' (links to #channels)."
      ],
      cta: "Primary button smooth-scrolls directly to the Intake Form card. Secondary scrolls to email/phone blocks.",
      psychology: "Removes final transaction friction. Stating a '24-hour proposal promise' encourages immediate form completion.",
      appleStandard: "No corporate fluff. Clean, action-oriented hero."
    },
    {
      id: "message",
      num: "SECTION 02",
      name: "PROJECT BRIEF INTAKE FORM",
      bgClass: "bg-cool-light",
      headline: "Project Brief.",
      objective: "Capture structured business requirements, budget selection, and timeline to write an instant proposal.",
      content: [
        "Fields: Full Name · Email Address · Project Scope Dropdown (Essential / Growth / Enterprise / Custom) · Project Details Textarea (pre-filled with custom estimator summary).",
        "Submit Button: 'Submit Project Request'."
      ],
      cta: "Registers the brief in the lead database. Alerts Amrith's phone instantly, and automatically sets up a draft workspace in the CheckersMark portal.",
      psychology: "Pre-filling their custom estimator quote details in the textarea builds consistency. Seeing their budget pre-selected confirms that they are in a structured, professional onboarding process.",
      appleStandard: "Clean input boxes, large touch targets, no unnecessary fields to decrease form dropout."
    },
    {
      id: "channels",
      num: "SECTION 03",
      name: "DIRECT CHANNELS",
      bgClass: "bg-warm-light",
      headline: "Direct Contact.",
      objective: "Provide alternative communication lines for users who dislike form textareas.",
      content: [
        "Direct lines: Email: hello@amrith.com · Headquarters: Canada · Profiles: LinkedIn / GitHub.",
        "Secure onboarding deposit note: 'We spend hours researching and analyzing your business model before our call. To protect this time and filter out casual inquiries, booking a strategy brief requires a small secure deposit via Stripe. Refundable if the project is not a fit.'"
      ],
      cta: "Clickable mailto, tel, and social URLs.",
      psychology: "The Stripe onboarding deposit rule is a massive authority builder. Just like Apple's elite support, it tells the client: 'Amrith's time is highly valuable, and his research is thorough.' It filters out low-value tire-kickers.",
      appleStandard: "Presents direct contact details simply. Bold, clean text, zero clutter."
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
            Contact Page `/contact` Blueprint
          </h1>
          <p className="text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
            This is a text-only representation of the Contact page layout. Scroll through to review the brief intake details, pre-fill parameter setups, and direct channels live.
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
