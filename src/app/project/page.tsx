"use client";

import Link from "next/link";
import { useState } from "react";
import BrowserMockup from "@/components/BrowserMockup";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import { btnPrimary, btnSecondary, chipActive, chipIdle } from "@/lib/ui";

const projects = [
  {
    id: "mobwik",
    title: "Mobile Search Engine",
    desc: "A search-optimized mobile database directory and wiki application built for instant access.",
    url: "https://mobwik.vercel.app",
    metrics: "Loads in 0.2s · 100/100 Mobile Score",
    category: "Web Apps",
    slug: "mobwik"
  },
  {
    id: "dakeek",
    title: "Operations Portal",
    desc: "A custom real-time request tracker and operations dispatch system for field dispatching.",
    url: "https://dakeek.ae",
    metrics: "Real-time sync · Sub-second database writes",
    category: "CRM",
    slug: "dakeek"
  },
  {
    id: "checkersmark",
    title: "Workspace Operating System",
    desc: "A high-performance command center, client portal, and calendar scheduling dashboard.",
    url: "https://checkersmark.com",
    metrics: "Built with CheckersMark core engine",
    category: "Web Apps",
    slug: "checkersmark"
  },
  {
    id: "novacookers",
    title: "Product Showroom",
    desc: "A clean storefront catalog with rapid navigation for high-end kitchen appliances.",
    url: "https://novacookers.vercel.app",
    metrics: "Zero layout shift · Instant product loads",
    category: "Marketing",
    slug: "novacookers"
  },
  {
    id: "ksingh",
    title: "Professional Portfolio",
    desc: "A minimalist digital resume and showcase built for structural consulting services.",
    url: "https://ksinghconstruction.vercel.app",
    metrics: "80% Lead Conversion Increase",
    category: "Marketing",
    slug: "ksingh"
  },
  {
    id: "jsgastech",
    title: "Marketing Platform",
    desc: "A search-optimized page built to maximize local contractor customer inquiries.",
    url: "https://jsgastech.com",
    metrics: "Ranked #1 for targeted local search",
    category: "Marketing",
    slug: "jsgastech"
  }
];

const categories = ["All", "Marketing", "Web Apps", "CRM"];

const screenshotMap: Record<string, string> = {
  mobwik: "/screenshots/mobwik.webp",
  dakeek: "/screenshots/dakeek.webp",
  checkersmark: "/screenshots/checkersmark.webp",
  novacookers: "/screenshots/novacookers.webp",
  ksingh: "/screenshots/ksingh.webm",
  jsgastech: "/screenshots/jsgastech.webp"
};



export default function ProjectsIndex() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (proj) => activeCategory === "All" || proj.category === activeCategory
  );



  const scrollToProjects = () => {
    document.getElementById("projects-list")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      {/* Hero (Warm Sand) */}
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div 
          className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8 animate-fade-in-up"
        >
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              PROJECTS
            </span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Real work, real outcomes.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Explore examples of websites designed to increase business sales, capture customer inquiries, and automate daily operations.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <button
              onClick={scrollToProjects}
              className={`${btnSecondary} w-full sm:w-auto cursor-pointer`}
            >
              See Case Studies
            </button>
            <Link href="/start" className={`${btnPrimary} w-full sm:w-auto`}>
              Start a project
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* Projects Grid (Cool Slate) */}
      <FullSection id="projects-list" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          
          <div 
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                aria-pressed={activeCategory === cat}
                className={activeCategory === cat ? chipActive : chipIdle}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full text-left">
              {filteredProjects.map((proj) => (
                <div 
                  key={proj.id} 
                  className="space-y-6 group animate-fade-in-up"
                >
                  <Link href={`/project/${proj.slug}`} className="block">
                    <div className="aspect-[520/310] relative rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 bg-white">
                      <BrowserMockup url={proj.url} screenshotUrl={screenshotMap[proj.id]} title={proj.title} isVisible={true} />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 z-20 pointer-events-none" />
                    </div>
                  </Link>
                  <div className="space-y-3 px-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono bg-slate-200/50 px-2.5 py-1 rounded-sm">
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        {proj.metrics}
                      </span>
                    </div>
                    <Link href={`/project/${proj.slug}`} className="block">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-slate-600 transition-colors">
                        {proj.title}
                      </h3>
                    </Link>
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
