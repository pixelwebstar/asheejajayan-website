"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";
import BrowserMockup from "@/components/BrowserMockup";

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28";

// Premium Button Styles
const btnPrimary = "inline-flex items-center justify-center rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] min-w-[220px]";
const btnSecondary = "inline-flex items-center justify-center rounded border-2 border-slate-900 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-50 active:scale-[0.98] min-w-[220px]";

function HeroSection({ children, bgClass, id }: { children: ReactNode; bgClass: string; id?: string }) {
  return (
    <section
      id={id}
      className={`hero-section relative py-16 sm:py-20 ${bgClass} border-b border-gray-100`}
    >
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

function FullSection({ children, bgClass, id }: { children: ReactNode; bgClass: string; id?: string }) {
  return (
    <section
      id={id}
      className={`full-section relative py-12 sm:py-16 ${bgClass} border-b border-gray-100`}
    >
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

const projects = [
  {
    id: 1,
    title: "Mobile Search Engine",
    desc: "A search-optimized mobile database directory and wiki application.",
    url: "https://mobwik.vercel.app",
    type: "portal" as const
  },
  {
    id: 2,
    title: "Operations Portal",
    desc: "A custom real-time request tracker and operations dispatch system.",
    url: "https://dakeek.ae",
    type: "portal" as const
  },
  {
    id: 3,
    title: "Workspace Operating System",
    desc: "A high-performance command center and calendar scheduling hub.",
    url: "https://checkersmark.com",
    type: "dashboard" as const
  },
  {
    id: 4,
    title: "Product Showroom",
    desc: "A clean storefront and interactive catalog for kitchen appliances.",
    url: "https://novacookers.vercel.app",
    type: "shop" as const
  },
  {
    id: 5,
    title: "Collaboration Platform",
    desc: "A client communication portal and real-time team coordination tool.",
    url: "https://bonder.vercel.app",
    type: "portal" as const
  },
  {
    id: 6,
    title: "Interior Design Showcase",
    desc: "A curated digital catalog displaying high-end lighting installations.",
    url: "https://lumiereluminouse.netlify.app/",
    type: "landing" as const
  },
  {
    id: 7,
    title: "Digital Publishing Archive",
    desc: "A lightweight content management portal for digital archives.",
    url: "https://sayahnam.vercel.app",
    type: "portal" as const
  },
  {
    id: 8,
    title: "Professional Portfolio",
    desc: "A minimalist digital resume and showcase for professional services.",
    url: "https://ksinghconstruction.vercel.app",
    type: "landing" as const
  },
  {
    id: 9,
    title: "Marketing Platform",
    desc: "A search-optimized page built to maximize local service conversion.",
    url: "https://jsgastech.com",
    type: "landing" as const
  }
];
const screenshotMap: Record<number, string> = {
  1: "/screenshots/mobwik.png",
  2: "/screenshots/dakeek.png",
  3: "/screenshots/checkersmark.png",
  4: "/screenshots/novacookers.png",
  5: "/screenshots/bonder.png",
  6: "/screenshots/lumiere.webm",
  7: "/screenshots/sayahnam.png",
  8: "/screenshots/ksingh.webm",
  9: "/screenshots/jsgastech.png"
};



function ThreeDGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(0);
  const count = projects.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setLastInteraction(Date.now());
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setLastInteraction(Date.now());
  };

  const selectProject = (idx: number) => {
    setActiveIndex(idx);
    setLastInteraction(Date.now());
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      const timeSinceInteraction = Date.now() - lastInteraction;
      if (timeSinceInteraction >= 15000) {
        setActiveIndex((prev) => (prev + 1) % projects.length);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [lastInteraction]);

  return (
    <div className="w-full flex flex-col items-center space-y-8">
      {/* 3D Gallery Stage (Hidden on Mobile) */}
      <div className="hidden lg:flex w-full h-[340px] items-center justify-center relative perspective-stage select-none overflow-visible pt-4">
        <div className="relative w-[520px] h-[310px] preserve-3d">
          {projects.map((project, idx) => {
            let diff = idx - activeIndex;
            if (diff < -count / 2) diff += count;
            if (diff > count / 2) diff -= count;

            const isActive = diff === 0;
            const isLeftStack = diff < 0;
            const isRightStack = diff > 0;

            let transform = "";
            let opacity = 1;
            let zIndex = 1;
            let pointerEvents: "auto" | "none" = "auto";

            if (isActive) {
              transform = "translate3d(0, 0, 140px) rotateY(0deg) scale(1.05)";
              opacity = 1;
              zIndex = 20;
              pointerEvents = "auto";
            } else if (isLeftStack) {
              // Cover Flow shift left + Y-rotation inward
              transform = `translate3d(${(diff * 55) - 260}px, 0, -100px) rotateY(60deg)`;
              opacity = 1; // Opaque to prevent transparency overlaps
              zIndex = 10 + diff;
              pointerEvents = "auto";
            } else if (isRightStack) {
              // Cover Flow shift right + Y-rotation inward
              transform = `translate3d(${(diff * 55) + 260}px, 0, -100px) rotateY(-60deg)`;
              opacity = 1; // Opaque to prevent transparency overlaps
              zIndex = 10 - diff;
              pointerEvents = "auto";
            } else {
              transform = "translate3d(0, 0, -250px) rotateY(180deg)";
              opacity = 0;
              zIndex = 1;
              pointerEvents = "none";
            }

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (isActive) {
                    if (project.url !== "#") {
                      window.open(project.url, "_blank", "noopener,noreferrer");
                    }
                  } else {
                    selectProject(idx);
                  }
                }}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] reflect-below ${
                  isActive ? "cursor-default" : "cursor-pointer hover:opacity-85"
                }`}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents,
                  transformStyle: "preserve-3d",
                }}
              >
                <BrowserMockup url={project.url} screenshotUrl={screenshotMap[project.id]} title={project.title} isVisible={Math.abs(diff) <= 1} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Flat Mobile Preview Slider (Visible on Mobile) */}
      <div 
        className="block lg:hidden w-full max-w-[480px] mx-auto px-4 select-none relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          onClick={() => {
            if (projects[activeIndex].url !== "#") {
              window.open(projects[activeIndex].url, "_blank", "noopener,noreferrer");
            }
          }}
          className="w-full h-[260px] relative cursor-pointer hover:opacity-95 transition-opacity active:scale-[0.99] transition-transform duration-150"
        >
          <BrowserMockup url={projects[activeIndex].url} screenshotUrl={screenshotMap[projects[activeIndex].id]} title={projects[activeIndex].title} isVisible={true} />
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectProject(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "bg-slate-900 w-4" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Active Project Info & Standard Navigation Panel */}
      <div className="max-w-2xl mx-auto w-full text-center mt-12 lg:mt-16 space-y-6">
        {/* Info Block */}
        <div className="space-y-1.5 min-h-[64px] flex flex-col justify-center items-center">
          <h3 className="text-xl font-black text-slate-900 tracking-tight">
            {projects[activeIndex].title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium max-w-lg">
            {projects[activeIndex].desc}
          </p>
        </div>

        {/* Two Standard Conversion CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="#pricing" className={btnPrimary}>
            Start Your Project
          </Link>
          <Link href="#services" className={btnSecondary}>
            See How We Do It
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">

      {/* 0. SECTION 0: THE HERO */}
      <HeroSection bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Websites Built for Business Growth.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
            No templates. No clutter. Just custom digital platforms designed to turn your traffic into qualified leads.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
              Start Your Project
            </Link>
            <Link href="#services" className={`${btnSecondary} w-full sm:w-auto`}>
              See How We Do It
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* 1. SECTION 1: SERVICES (The "What" Grid) */}
      <FullSection id="services" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full text-center space-y-12 lg:space-y-16 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Websites and Web Applications.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              We design and code custom web systems that run fast, capture leads, and automate your sales pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full text-left">
            {[
              { num: "01", name: "Websites", desc: "Custom-built marketing websites designed to load instantly and make your business look highly professional.", id: "websites" },
              { num: "02", name: "Web Apps", desc: "Private customer portals, booking systems, and internal tools custom-made for your daily business operations.", id: "web-apps" },
              { num: "03", name: "CRM Software", desc: "Forms that automatically save lead details into your customer database so you never lose inquiries.", id: "crm-software" },
              { num: "04", name: "Google Business and Map", desc: "Optimizing your Google maps listing so you show up first when customers search locally.", id: "google-map" },
              { num: "05", name: "Google Ads", desc: "Targeted campaigns that show your business to active customers who are looking to hire you today.", id: "google-ads" },
              { num: "06", name: "Support & Operations", desc: "Daily database backups, performance monitoring, and content updates so you never worry about tech.", id: "support-ops" }
            ].map((srv) => (
              <Link
                href={`/services#${srv.id}`}
                key={srv.num}
                className="bg-white p-8 xl:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-4 relative hover:shadow-md hover:-translate-y-1 transition-all duration-300 block text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 block tracking-widest">{srv.num}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider group-hover:text-muted transition-colors">{srv.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{srv.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </FullSection>

      {/* 2. SECTION 2: SELECTED WORK (Case Studies) */}
      <FullSection id="work" bgClass="bg-warm-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-2 flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Real Projects. Real Outcomes.
            </h2>
          </div>

          {/* ThreeD Gallery Curved Deck */}
          <div className="w-full pt-4">
            <ThreeDGallery />
          </div>
        </div>
      </FullSection>

      {/* 3. SECTION 3: HOW (Split — Left Heading / Right Process Rows) */}
      <FullSection id="how" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Left Column: Heading & Summary (Stretched to match right column height) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2 lg:py-6 text-center lg:text-left items-center lg:items-start w-full">
              <div className="space-y-6 max-w-sm mx-auto lg:mx-0 w-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                  OUR METHOD
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
                  Architected for Growth.
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-sm mx-auto lg:mx-0">
                  We don't just design websites. We architect custom digital pipelines that convert visitors into paying clients.
                </p>
              </div>


            </div>

            {/* Right Column: Five Stacked Process Rows */}
            <div className="lg:col-span-7 space-y-0">
              {[
                { num: "01", title: "Discovery Call", desc: "We learn your business goals, target customers, and what success looks like for you." },
                { num: "02", title: "Strategy & Layout", desc: "We map the page structure and conversion flow before writing a single line of code." },
                { num: "03", title: "Custom Design", desc: "Your brand identity is translated into a clean, premium visual design you approve." },
                { num: "04", title: "Code & Build", desc: "We hand-code your site from scratch. No templates, no page builders, no bloat." },
                { num: "05", title: "Launch & Support", desc: "Your site goes live with backups, monitoring, and ongoing content support included." }
              ].map((step, idx) => (
                <div key={step.num} className={`flex gap-6 items-start py-6 ${idx < 4 ? 'border-b border-slate-200' : ''}`}>
                  <span className="text-2xl font-black text-slate-300 select-none leading-none pt-1 min-w-[40px]">{step.num}</span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FullSection>

      {/* 4. SECTION 4: ROI COMPARISON (Custom Build vs. Templates) */}
      <FullSection id="roi" bgClass="bg-warm-light">
        <div className="max-w-6xl mx-auto w-full space-y-12 lg:space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              THE DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Custom Build vs. Templates.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              See why a hand-coded website outperforms page builders and pre-made themes on every metric that matters.
            </p>
          </div>

          {/* Unified Comparison Table */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-slate-200">
              <div className="p-5 lg:p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">METRIC</span>
              </div>
              <div className="p-5 lg:p-6 border-l border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">TEMPLATE</span>
              </div>
              <div className="p-5 lg:p-6 border-l border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 block">CUSTOM BUILD</span>
              </div>
            </div>
            {/* Table Rows */}
            {[
              { label: "Code Size", ours: "Under 50 KB", theirs: "2–5 MB of Bloat" },
              { label: "Load Speed", ours: "Under 0.3 Seconds", theirs: "3–8 Seconds" },
              { label: "Conversion Rate", ours: "3–5× Higher", theirs: "Industry Average" },
              { label: "Monthly SaaS Fees", ours: "$0 — You Own It", theirs: "$30–$300 / Month" },
              { label: "Security Risk", ours: "Minimal — No Plugins", theirs: "High — Plugin Exploits" }
            ].map((row, idx) => (
              <div key={row.label} className={`grid grid-cols-3 ${idx < 4 ? 'border-b border-slate-100' : ''}`}>
                <div className="p-5 lg:p-6 flex items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{row.label}</span>
                </div>
                <div className="p-5 lg:p-6 border-l border-slate-100 flex items-center">
                  <span className="text-sm font-medium text-slate-400">{row.theirs}</span>
                </div>
                <div className="p-5 lg:p-6 border-l border-slate-100 flex items-center">
                  <span className="text-sm font-bold text-emerald-600">{row.ours}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#pricing" className={btnPrimary}>
              Start Your Project
            </Link>
            <Link href="#services" className={btnSecondary}>
              See How We Do It
            </Link>
          </div>
        </div>
      </FullSection>

      {/* 5. SECTION 5: WHAT (Wide Bento Grid — Lead Pipeline) */}
      <FullSection id="what" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-b border-slate-200 pb-8">
            <div className="space-y-4 max-w-3xl text-center md:text-left w-full">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                THE VALUE DELIVERED
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
                What Your Business Gets.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto md:mx-0">
                Every website we build is an automated lead-capture system. Here is exactly how it works to scale your operations.
              </p>
            </div>

          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Box 1: Lead Capture */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow">
              <span className="text-6xl font-black text-slate-200 block leading-none">01</span>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Customer Fills Form</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  When a customer wants to hire you, they fill out a simple contact form on your website with their name and email.
                </p>
              </div>
            </div>

            {/* Box 2: Instant Save */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow">
              <span className="text-6xl font-black text-slate-200 block leading-none">02</span>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Leads Are Saved</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Their details are saved automatically in your list. You do not have to write anything down, and you will never lose a lead.
                </p>
              </div>
            </div>

            {/* Box 3: Phone Alert */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-8 md:col-span-2 lg:col-span-1 hover:shadow-md transition-shadow">
              <span className="text-6xl font-black text-slate-200 block leading-none">03</span>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Get Text Notification</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  You get a text message on your phone right away. This lets you call the customer back fast before they look for someone else.
                </p>
              </div>
            </div>
          </div>


        </div>
      </FullSection>

      {/* 6. SECTION 6: CLIENT REVIEWS (Wide 3-Column Staggered Grid) */}
      <FullSection id="reviews" bgClass="bg-warm-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-b border-slate-200 pb-8">
            <div className="space-y-4 max-w-3xl text-center md:text-left w-full">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                SOCIAL PROOF
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
                What Our Clients Achieve.
              </h2>
            </div>

          </div>

          {/* 3-Column Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Column 1 (Pushed down slightly for staggered effect) */}
            <div className="md:mt-12 bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <p className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight">
                &ldquo;Our new website opens instantly. Customer inquiries rose by 80% almost immediately. We went from getting three calls a week to getting three calls a day.&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-sm font-black">MV</div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block uppercase tracking-wider">Marcus V.</span>
                  <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-widest">Business Owner</span>
                </div>
              </footer>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <p className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight">
                &ldquo;Inquiries go straight to our phones now. Our customer calls doubled within 30 days. The custom CRM eliminated hours of manual data entry every single week.&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-sm font-black">DK</div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block uppercase tracking-wider">David K.</span>
                  <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-widest">Local Business Owner</span>
                </div>
              </footer>
            </div>

            {/* Column 3 (Pushed down slightly) */}
            <div className="md:mt-24 bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <p className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight">
                &ldquo;The CRM saves us hours every week. We never lose a lead and our response time dropped from hours to minutes. It's the best investment we've made.&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 text-sm font-black">SL</div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block uppercase tracking-wider">Sarah L.</span>
                  <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-widest">Service Company</span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </FullSection>



      {/* 7. SECTION 7: INTAKE (Two-Column — Left Info / Right Form) */}
      <FullSection id="pricing" bgClass="bg-cool-light">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading + Selling Points */}
            <div className="lg:col-span-5 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
              <div className="space-y-4 w-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                  GET STARTED
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                  Initiate Your Project.
                </h2>
                <p className="text-base leading-relaxed text-slate-600 font-medium max-w-sm mx-auto lg:mx-0">
                  Submit your goals and I will return a custom project proposal within 24 hours.
                </p>
              </div>

              {/* Stacked Info Rows */}
              <div className="space-y-0">
                {[
                  { label: "Response Time", value: "Under 24 hours" },
                  { label: "Hidden Fees", value: "None — ever" },
                  { label: "Code Ownership", value: "100% yours" },
                  { label: "Obligation", value: "Zero commitment to proceed" }
                ].map((row, idx) => (
                  <div key={row.label} className={`flex justify-between items-center py-4 ${idx < 3 ? 'border-b border-slate-200' : ''}`}>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{row.label}</span>
                    <span className="text-sm font-bold text-slate-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-sm">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4 lg:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="space-y-2 text-left">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                      <input type="text" required className="w-full px-5 py-3 lg:py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="John" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                      <input type="text" required className="w-full px-5 py-3 lg:py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Business Email</label>
                    <input type="email" required className="w-full px-5 py-3 lg:py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Project Objectives</label>
                    <textarea rows={4} className="w-full px-5 py-3 lg:py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm resize-none" placeholder="Describe your vision and requirements..."></textarea>
                  </div>

                  <button type="submit" className={`${btnPrimary} w-full py-4 lg:py-5 rounded-xl text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2`}>
                    Submit Project Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </FullSection>
    </div>
  );
}
