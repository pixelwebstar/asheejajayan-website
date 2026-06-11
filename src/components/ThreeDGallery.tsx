"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import BrowserMockup from "@/components/BrowserMockup";

const btnPrimary = "inline-flex items-center justify-center rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] min-w-[220px]";
const btnSecondary = "inline-flex items-center justify-center rounded border-2 border-slate-900 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-50 active:scale-[0.98] min-w-[220px]";

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
  1: "/screenshots/mobwik.webp",
  2: "/screenshots/dakeek.webp",
  3: "/screenshots/checkersmark.webp",
  4: "/screenshots/novacookers.webp",
  5: "/screenshots/bonder.webp",
  6: "/screenshots/lumiere.webm",
  7: "/screenshots/sayahnam.webp",
  8: "/screenshots/ksingh.webm",
  9: "/screenshots/jsgastech.webp"
};

export default function ThreeDGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [interactionCount, setInteractionCount] = useState(0);
  const count = projects.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setInteractionCount((c) => c + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setInteractionCount((c) => c + 1);
  };

  const selectProject = (idx: number) => {
    setActiveIndex(idx);
    setInteractionCount((c) => c + 1);
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

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    const delayTimer = setTimeout(() => {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
      }, 4500);
    }, interactionCount > 0 ? 15000 : 0);

    return () => {
      clearTimeout(delayTimer);
      if (interval) clearInterval(interval);
    };
  }, [interactionCount]);

  return (
    <div className="w-full flex flex-col items-center space-y-8 no-swipe">
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
              transform = "translate3d(0, 0, 140px) rotateY(0deg) scale(var(--flow-scale))";
              opacity = 1;
              zIndex = 20;
              pointerEvents = "auto";
            } else if (isLeftStack) {
              transform = `translate3d(calc(var(--flow-gap) * ${diff} - var(--flow-shift)), 0, -100px) rotateY(60deg) scale(calc(var(--flow-scale) * 0.85))`;
              opacity = 1;
              zIndex = 10 + diff;
              pointerEvents = "auto";
            } else if (isRightStack) {
              transform = `translate3d(calc(var(--flow-gap) * ${diff} + var(--flow-shift)), 0, -100px) rotateY(-60deg) scale(calc(var(--flow-scale) * 0.85))`;
              opacity = 1;
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
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? "cursor-default" : "cursor-pointer hover:opacity-85"
                  }`}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents,
                  transformStyle: "preserve-3d",
                }}
              >
                <BrowserMockup url={project.url} screenshotUrl={screenshotMap[project.id]} title={project.title} isVisible={true} />
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
          className="w-full aspect-[520/310] relative cursor-pointer hover:opacity-95 transition-opacity active:scale-[0.99] transition-transform duration-150"
        >
          <BrowserMockup url={projects[activeIndex].url} screenshotUrl={screenshotMap[projects[activeIndex].id]} title={projects[activeIndex].title} isVisible={true} />
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectProject(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-slate-900 w-4" : "bg-slate-300 hover:bg-slate-400"
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
          <Link href="#services" className={btnSecondary}>
            See How We Do It
          </Link>
          <Link href="/contact" className={btnPrimary}>
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
