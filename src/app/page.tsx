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

export default function Home() {
  const sections = [
    {
      id: "hero",
      num: "SECTION 01",
      name: "PAGE HERO",
      bgClass: "bg-warm-light",
      headline: "Websites Built for Business Growth.",
      objective: "Hook the client in 3 seconds. Establish the core value proposition: we hand-code fast, custom web platforms that automate client acquisition.",
      content: [
        "Subtitle: 'Most business websites are slow, bloated templates that leak leads and charge monthly fees. We hand-code custom platforms that load in 0.2 seconds, save leads automatically, and cost you $0 in monthly platform fees. You own 100% of the code.'",
        "Primary Button: 'Start Your Project' (links to #contact).",
        "Secondary Button: 'See My Work' (links to #projects)."
      ],
      cta: "Primary button routes the user to the Intake Brief form at the bottom of the page. Secondary button smooth-scrolls them to the Projects Gallery.",
      psychology: "The visitor immediately registers: 'This developer has premium standards and thinks about my bottom line.' It contrasts your performance directly against slow, messy WordPress/Wix sites, triggering immediate curiosity.",
      appleStandard: "No pleading language like 'Please hire me' or 'Affordable rates'. Directly states the value: load speed, ownership, and zero monthly fees."
    },
    {
      id: "projects",
      num: "SECTION 02",
      name: "SELECTED PROJECTS GALLERY",
      bgClass: "bg-white",
      headline: "Real Projects. Real Outcomes.",
      objective: "Provide immediate visual authority of custom systems you have engineered. Replaces the standard abstract agency graphics with real client outcomes.",
      content: [
        "Visual Element: Interactive 3D Browser Gallery displaying 6 mockups (CheckersMark Workspace, Dakeek Operations Portal, NovaCookers, KSingh, JSGasTech, Mobwik).",
        "Sub-text displays the verified performance metric for the active project (e.g., 'Page load 0.2s · 100/100 Mobile Speed score').",
        "Button 1: 'Start Your Project' (links to #contact).",
        "Button 2: 'See How We Do It' (links to #services)."
      ],
      cta: "Buttons route either to the Project Brief Form or smooth-scroll them down to the services breakdown.",
      psychology: "Placed immediately below the Hero (Serial Primacy). Before the user's analytical mind can ask, 'Is this guy actually good?' they are confronted with verified, highly responsive browser mockups of running applications.",
      appleStandard: "Shows real screenshots inside sleek Chrome browser mockups with URL bars visible. Pure proof, zero mock-up fluff."
    },
    {
      id: "services",
      num: "SECTION 03",
      name: "SERVICES OVERVIEW",
      bgClass: "bg-warm-light",
      headline: "Websites and Web Applications.",
      objective: "Display the range of products you build. Connects the visual proof they just saw to your concrete capabilities.",
      content: [
        "Card 1: Custom Websites — Hand-coded to load instantly and make your business look highly professional.",
        "Card 2: Web Applications — Customer portals, booking calendars, and internal databases custom-made for operations.",
        "Card 3: CRM Database Integration — Forms that save leads automatically into your customer database so you never lose inquiries.",
        "Card 4: Google Maps SEO — Optimizing local business map listings to rank first when clients search nearby.",
        "Card 5: Google Ads Campaign — Targeted search ads to put you in front of clients who want to hire you today.",
        "Card 6: Support & Backups — Performance monitoring, data backups, and updates so you never worry about technology."
      ],
      cta: "Cards are clickable, routing the user to the specific service anchor on the detailed `/services` page.",
      psychology: "The client identifies their exact operational need. A plumber sees 'CRM Lead Database & Google Maps'; a B2B owner sees 'Web Applications & Portals.' They realize you build systems, not just static pages.",
      appleStandard: "Speaks about benefits (saving leads, ranking first, zero tech worries) rather than framework specs (React, databases)."
    },
    {
      id: "method",
      num: "SECTION 04",
      name: "OUR METHOD / TIMELINE",
      bgClass: "bg-cool-light",
      headline: "Built to Convert.",
      objective: "De-risk the process. Show a clear, logical roadmap to remove the fear of developers who vanish after receiving payment.",
      content: [
        "Step 1: Discovery Call — We study your business model and target clients.",
        "Step 2: Strategy & Layout — We map the structure and conversion layout before writing code.",
        "Step 3: Custom Design — Your brand gets translated into a clean layout you approve.",
        "Step 4: Hand-Coding — We build your site from scratch. No templates, no page builders, no bloat.",
        "Step 5: Launch & Support — Your site goes live with backups and ongoing content updates."
      ],
      cta: "None. This section is purely educational to build operational comfort.",
      psychology: "Robert the Plumber gets nervous about tech processes. This timeline makes the build look structured, safe, and transparent. They see that they are in control at every stage.",
      appleStandard: "Avoids complex jargon like 'Sprint pipelines' or 'Git branches'. Explains the steps in plain English."
    },
    {
      id: "roi",
      num: "SECTION 05",
      name: "CUSTOM VS TEMPLATE COMPARISON",
      bgClass: "bg-warm-light",
      headline: "Custom Build vs. Templates.",
      objective: "Justify the pricing ($2,500+). Compare performance, risk, and long-term costs side-by-side using metrics.",
      content: [
        "Row 1: Code Size — Under 50KB vs 2–5MB of template bloat.",
        "Row 2: Speed — Under 0.3 seconds vs 3–8 seconds template load.",
        "Row 3: Monthly Fees — $0 you own the code vs $30–$300/mo platform builder fees.",
        "Row 4: Security — Minimal risk with zero plugin dependencies vs High plugin exploit risks."
      ],
      cta: "Primary button: 'Start Your Project' (#contact) / Secondary: 'See How We Do It' (#services).",
      psychology: "Appeals to System 2 logical thinking. If Evelyn (Shopify owner) is thinking 'Why shouldn't I just build a Squarespace site?' she realizes that templates charge monthly rent forever, whereas custom is an asset you own.",
      appleStandard: "Presents hard, indisputable facts side-by-side. Focuses on financial and operational freedom."
    },
    {
      id: "reviews",
      num: "SECTION 06",
      name: "CLIENT TESTIMONIALS",
      bgClass: "bg-cool-light",
      headline: "What Our Clients Achieve.",
      objective: "Provide social proof. Show that other business owners have trusted you and gotten results.",
      content: [
        "Card 1: 'Our website opens instantly. Customer inquiries rose by 80%. We went from 3 calls a week to 3 calls a day.' — Marcus V. (Business Owner)",
        "Card 2: 'Inquiries go straight to our phones now. Calls doubled in 30 days. The CRM eliminated hours of data entry.' — David K. (Local Business Owner)",
        "Card 3: 'The CRM saves us hours. We never lose a lead and response time dropped from hours to minutes.' — Sarah L. (Service Company)"
      ],
      cta: "None.",
      psychology: "Validates the technical claims of Section 5 with human outcomes. Seeing 'calls tripled' or 'CRM saves hours' makes the prospect desire the same system.",
      appleStandard: "Avoids generic reviews. Displays outcomes that business owners actually care about (leads, phone calls, saved time)."
    },
    {
      id: "contact",
      num: "SECTION 07",
      name: "GET STARTED INTAKE BRIEF",
      bgClass: "bg-warm-light",
      headline: "Start Your Project.",
      objective: "Frictionless, low-commitment lead capture to initiate a project proposal.",
      content: [
        "Left Column Indicators: Response Time: Under 24 hours · Hidden Fees: None · Code Ownership: 100% yours · Commitment: Zero.",
        "Right Column Fields: First Name · Last Name · Email Address · Project Objectives (Textarea).",
        "Submit Button: 'Submit Project Request'."
      ],
      cta: "Launches the request. Upon submission, the CRM automatically registers the lead, alerts Amrith's phone, and routes the user to a success page.",
      psychology: "The terminal action of the scroll journey. Placing the list of guarantees next to the form fields removes final buying anxiety.",
      appleStandard: "Minimalist layout, clean input fields, clear response promises. Elegant and frictionless."
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
            Home Page `/` Blueprint
          </h1>
          <p className="text-sm text-slate-300 font-medium max-w-2xl leading-relaxed">
            This is a text-only representation of the Home page layout. Scroll through to review the copywriting headlines, section objectives, visual temperatures, and UX conversion notes live.
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
