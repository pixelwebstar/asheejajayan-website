"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import BrowserMockup from "@/components/BrowserMockup";

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28";

const projects = [
  {
    id: "mobwik",
    title: "Mobile Search Engine",
    desc: "A search-optimized mobile database directory and wiki application built for instant access.",
    url: "https://mobwik.vercel.app",
    metrics: "Loads in 0.2s · 100/100 Mobile Score"
  },
  {
    id: "dakeek",
    title: "Operations Portal",
    desc: "A custom real-time request tracker and operations dispatch system for field dispatching.",
    url: "https://dakeek.ae",
    metrics: "Real-time sync · Sub-second database writes"
  },
  {
    id: "checkersmark",
    title: "Workspace Operating System",
    desc: "A high-performance command center, client portal, and calendar scheduling dashboard.",
    url: "https://checkersmark.com",
    metrics: "Built with CheckersMark core engine"
  },
  {
    id: "novacookers",
    title: "Product Showroom",
    desc: "A clean storefront catalog with rapid navigation for high-end kitchen appliances.",
    url: "https://novacookers.vercel.app",
    metrics: "Zero layout shift · Instant product loads"
  },
  {
    id: "ksingh",
    title: "Professional Portfolio",
    desc: "A minimalist digital resume and showcase built for structural consulting services.",
    url: "https://ksinghconstruction.vercel.app",
    metrics: "80% Lead Conversion Increase"
  },
  {
    id: "jsgastech",
    title: "Marketing Platform",
    desc: "A search-optimized page built to maximize local contractor customer inquiries.",
    url: "https://jsgastech.com",
    metrics: "Ranked #1 for targeted local search"
  }
];

const screenshotMap: Record<string, string> = {
  mobwik: "/screenshots/mobwik.png",
  dakeek: "/screenshots/dakeek.png",
  checkersmark: "/screenshots/checkersmark.png",
  novacookers: "/screenshots/novacookers.png",
  ksingh: "/screenshots/ksingh.webm",
  jsgastech: "/screenshots/jsgastech.png"
};

function HeroSection({ children, bgClass }: { children: ReactNode; bgClass: string }) {
  return (
    <section className={`hero-section relative py-16 sm:py-20 ${bgClass} border-b border-gray-100`}>
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

function FullSection({ children, bgClass, id }: { children: ReactNode; bgClass: string; id?: string }) {
  return (
    <section id={id} className={`full-section relative py-12 sm:py-16 ${bgClass} border-b border-gray-100`}>
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

export default function ProjectsIndex() {
  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      {/* Hero (Warm Sand) */}
      <HeroSection bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Selected Projects.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
            Real systems designed, coded, and optimized for real business results. No page builders, no bloat.
          </p>
        </div>
      </HeroSection>

      {/* Projects Grid (Cool Slate) */}
      <FullSection id="projects-list" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full text-left">
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-6">
                <div className="aspect-[520/310] relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <BrowserMockup url={proj.url} screenshotUrl={screenshotMap[proj.id]} title={proj.title} isVisible={true} />
                </div>
                <div className="space-y-3 px-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                    {proj.metrics}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FullSection>
    </div>
  );
}
