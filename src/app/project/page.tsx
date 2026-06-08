"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrowserMockup from "@/components/BrowserMockup";

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28";

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
  mobwik: "/screenshots/mobwik.png",
  dakeek: "/screenshots/dakeek.png",
  checkersmark: "/screenshots/checkersmark.png",
  novacookers: "/screenshots/novacookers.png",
  ksingh: "/screenshots/ksingh.webm",
  jsgastech: "/screenshots/jsgastech.png"
};

function HeroSection({ children, bgClass }: { children: ReactNode; bgClass: string }) {
  return (
    <section className={`hero-section relative py-20 sm:py-32 ${bgClass} border-b border-gray-100 overflow-hidden`}>
      {/* Background overlay image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('/hero-bg.webp')] bg-cover bg-center" />
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

function FullSection({ children, bgClass, id }: { children: ReactNode; bgClass: string; id?: string }) {
  return (
    <section id={id} className={`full-section relative py-16 sm:py-24 ${bgClass} border-b border-gray-100`}>
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

export default function ProjectsIndex() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (proj) => activeCategory === "All" || proj.category === activeCategory
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const scrollToProjects = () => {
    document.getElementById("projects-list")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      {/* Hero (Warm Sand) */}
      <HeroSection bgClass="bg-warm-light">
        <motion.div 
          className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8"
          initial="initial"
          animate="whileInView"
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Projects.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Real systems designed, coded, and optimized for real business results. No page builders, no bloat.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 font-medium text-white transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
            >
              <span className="mr-2">See Projects</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </HeroSection>

      {/* Projects Grid (Cool Slate) */}
      <FullSection id="projects-list" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3"
            initial="initial"
            whileInView="whileInView"
            variants={fadeInUp}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                  activeCategory === cat 
                  ? "bg-slate-900 text-white shadow-md scale-105" 
                  : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full text-left">
            <AnimatePresence>
              {filteredProjects.map((proj) => (
                <motion.div 
                  key={proj.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 group"
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
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                        {proj.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {proj.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </FullSection>
    </div>
  );
}
