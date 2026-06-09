"use client";

import Link from "next/link";
import React, { use } from "react";
import { motion } from "framer-motion";
import BrowserMockup from "@/components/BrowserMockup";

const projectData: Record<string, {
  clientName: string;
  metric: string;
  problem: string;
  solution: string;
  mockup: string;
  url: string;
  outcomes: string[];
}> = {
  mobwik: {
    clientName: "Mobwik Mobile Database",
    metric: "Loads in 0.2s · Offline sync database",
    problem: "Field operators in remote areas could not access reference wiki manuals because mobile internet connections were unstable or slow. Page load failures resulted in crew dispatch delay and operations bottlenecks.",
    solution: "We designed and coded a Progressive Web App (PWA) using Next.js. The system caches documents locally on the device's storage. When offline, a service worker intercepts lookups and answers requests instantly.",
    mockup: "/screenshots/mobwik.png",
    url: "https://mobwik.com",
    outcomes: [
      "100/100 Mobile PageSpeed score",
      "Offline operation capability with zero network access",
      "Zero platform hosting fees and 100% code ownership"
    ]
  },
  dakeek: {
    clientName: "Dakeek Logistics Dispatch",
    metric: "Dispatch lag reduced by 90% · Loads in 0.4s",
    problem: "Traditional courier operations relied on dispatchers typing delivery addresses into SMS manually. Drivers were delayed waiting for coordinates, leading to order dropouts and double-booked dispatch runs.",
    solution: "We built an operations dispatch board using React. Coordination details sync directly to couriers' phones in real-time. Drivers update dispatch records instantly, removing manual dispatcher bottlenecks.",
    mockup: "/screenshots/dakeek.png",
    url: "https://dakeek.com",
    outcomes: [
      "Driver address delivery in milliseconds",
      "Average page load time under 0.4s",
      "Eliminated dispatcher transcription errors"
    ]
  },
  checkersmark: {
    clientName: "CheckersMark CRM Portal",
    metric: "Lead response time reduced to seconds",
    problem: "Client inquiries from standard contact forms were saved in manual spreadsheets or cluttered emails. Response times dragged to hours, causing hot prospects to hire competitors instead.",
    solution: "We integrated a custom CRM database. Contact forms trigger instant text alerts on developer phones. Lead records are structured and saved automatically to a secure admin portal.",
    mockup: "/screenshots/checkersmark.png",
    url: "https://checkersmark.com",
    outcomes: [
      "Average response time under 10 minutes",
      "Zero leads lost to spam folders",
      "Automatic draft workspace generation"
    ]
  },
  novacookers: {
    clientName: "NovaCookers Storefront",
    metric: "99/100 Mobile PageSpeed score",
    problem: "E-commerce catalog templates loaded tons of external scripts, taking over 6 seconds to render on standard mobile connections. Shoppers abandoned the catalog before seeing kitchen product specs.",
    solution: "We custom-coded a storefront catalog database. Removing visual builder clutter reduced code size to under 50KB. Catalog search filters compile instantly on the client.",
    mockup: "/screenshots/novacookers.png",
    url: "https://novacookers.com",
    outcomes: [
      "Catalog load speed is 0.3s",
      "Mobile dropout rate reduced by 40%",
      "Zero recurring monthly platform builder fees"
    ]
  },
  ksingh: {
    clientName: "KSingh Engineering Portfolio",
    metric: "Speed improved by 800% · Sub-0.3s load",
    problem: "The consulting firm had a template portfolio website that took 5 seconds to load. Large structural blueprints failed to render on mobile browsers, making the firm look unprofessional to corporate clients.",
    solution: "We rebuilt the showcase from scratch using lightweight HTML/CSS layouts. Case study blueprints render as optimized web assets, displaying immediately on all devices.",
    mockup: "/screenshots/ksingh.webm",
    url: "https://ksinghconstruction.com",
    outcomes: [
      "Showcase page load time under 0.3s",
      "Corporate design matches premium standards",
      "Optimized media compression files"
    ]
  },
  jsgastech: {
    clientName: "JSGasTech Campaign",
    metric: "Inquiries increased by 110%",
    problem: "A local gas safety contractor ran search ads, but the traffic landed on a generic homepage. Visitors could not find booking calendars, leading to wasted ad spend and low client conversion.",
    solution: "We created a target landing page focused on local search queries. Scheduling buttons scroll directly to booking forms, streamlining the path to purchase.",
    mockup: "/screenshots/jsgastech.png",
    url: "https://jsgastech.com",
    outcomes: [
      "Wasted Google Ads click-spend cut in half",
      "Customer inquiry conversion rate doubled",
      "Forms sync leads directly to CRM inbox"
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetail({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-warm-light flex items-center justify-center py-20 px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-black text-slate-900">Project Not Found</h1>
          <p className="text-sm text-slate-600 font-medium">The requested project case study does not exist.</p>
          <Link href="/project" className="inline-block bg-slate-900 text-white font-bold uppercase tracking-wider text-[10px] px-6 py-3 rounded hover:bg-slate-800 transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  };

  return (
    <div className="w-full text-slate-900 bg-white antialiased selection:bg-slate-900 selection:text-white">
      
      {/* 1. HERO SECTION (Warm Sand - No CTA buttons) */}
      <section className="relative w-full bg-warm-light py-20 sm:py-32 border-b border-slate-200/60 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(15,23,42,0.02),transparent_60%)] pointer-events-none" />
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-12 flex flex-col items-start space-y-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900/5 border border-slate-900/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-900 block"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-mono">
              CASE STUDY DETAILS
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
          >
            {project.clientName}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex text-[10px] font-bold uppercase tracking-widest bg-slate-900/5 border border-slate-900/10 text-slate-800 px-3 py-1 rounded font-mono"
          >
            {project.metric}
          </motion.div>
        </div>
      </section>

      {/* 2. THE BUSINESS PROBLEM (Cool Slate - NO CTA buttons) */}
      <section className="w-full bg-cool-light py-20 sm:py-32 border-b border-slate-200/60">
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-12 space-y-6">
          <motion.span {...fadeInUp} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 font-mono block">
            SECTION 02 · THE BUSINESS PROBLEM
          </motion.span>
          <motion.h2 {...fadeInUp} className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            Pain Points & Limitations.
          </motion.h2>
          <motion.p {...fadeInUp} className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            {project.problem}
          </motion.p>
        </div>
      </section>

      {/* 3. CUSTOM SOLUTION (Warm Sand - CTA allowed) */}
      <section className="w-full bg-warm-light py-20 sm:py-32 border-b border-slate-200/60">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 font-mono block">
                SECTION 03 · THE IMPLEMENTATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
                Custom Solution.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                {project.solution}
              </p>
              <div className="pt-2">
                <Link 
                  href="/services" 
                  className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px] px-8 py-4 rounded hover:bg-slate-800 transition-all focus:outline-none"
                >
                  View Technical Blueprint
                </Link>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-md">
              <BrowserMockup 
                url={project.url} 
                screenshotUrl={project.mockup} 
                title={project.clientName} 
                isVisible={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VERIFIED OUTCOMES & METRICS (Cool Slate - NO CTA buttons) */}
      <section className="w-full bg-cool-light py-20 sm:py-32 border-b border-slate-200/60">
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-12 space-y-6">
          <motion.span {...fadeInUp} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 font-mono block">
            SECTION 04 · VERIFIED OUTCOMES
          </motion.span>
          <motion.h2 {...fadeInUp} className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            Performance & Business Impact.
          </motion.h2>
          
          <ul className="space-y-4 pt-4">
            {project.outcomes.map((outcome, idx) => (
              <motion.li 
                key={idx}
                {...fadeInUp}
                className="flex items-start gap-3 text-sm sm:text-base font-semibold text-slate-800"
              >
                <span className="text-slate-400 shrink-0 font-mono">0{idx + 1} /</span>
                <span>{outcome}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. CASE STUDY CTA (Warm Sand - CTA allowed) */}
      <section className="w-full bg-warm-light py-20 sm:py-32 border-b border-slate-200/60 flex items-center">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-12 flex flex-col items-start space-y-6 relative z-10">
          
          <div className="space-y-3">
            <motion.span {...fadeInUp} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 font-mono block">
              SECTION 05 · REPLICABLE VALUE
            </motion.span>
            <motion.h2 {...fadeInUp} className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Request a Similar System.
            </motion.h2>
          </div>

          <motion.p {...fadeInUp} className="text-sm sm:text-base text-slate-600 font-medium max-w-xl leading-relaxed">
            Let&apos;s discuss building a fast, secure, custom platform to streamline your operations and convert your traffic into revenue.
          </motion.p>

          <motion.div {...fadeInUp} className="pt-2">
            <Link
              href="/pricing#plans"
              className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px] px-8 py-4 rounded hover:bg-slate-800 transition-all text-center focus:outline-none"
            >
              Request a Similar System
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
