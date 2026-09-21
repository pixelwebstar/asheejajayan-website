"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [coverflow, setCoverflow] = useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const resumeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const count = projects.length;

  const pauseAnd = (next: (prev: number) => number) => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setActiveIndex(next);
    setIsPaused(true);
  };

  const handleNext = () => pauseAnd((prev) => (prev + 1) % projects.length);
  const handlePrev = () => pauseAnd((prev) => (prev - 1 + projects.length) % projects.length);

  const selectProject = (idx: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    pauseAnd(() => idx);
  };

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [touchEndY, setTouchEndY] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchEndY(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
    setIsPaused(true);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (touchStartX == null || touchEndX == null || touchStartY == null || touchEndY == null) return;
    const dx = touchStartX - touchEndX;
    const dy = touchStartY - touchEndY;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx > 0) handleNext();
    else handlePrev();
  };

  useEffect(() => {
    const apply = () => {
      setCoverflow(window.innerWidth >= 1024 && window.innerHeight >= 820);
    };
    apply();
    window.addEventListener("resize", apply);
    window.visualViewport?.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("resize", apply);
      window.visualViewport?.removeEventListener("resize", apply);
    };
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "80px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !inView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, inView]);

  useEffect(() => {
    const handleDocumentClick = () => {
      if (!isPaused) return;
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => {
        setIsPaused(false);
        resumeTimerRef.current = null;
      }, 5000);
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [isPaused]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!inView) return;
      if (event.target instanceof HTMLElement && event.target.closest("input, textarea, select")) return;
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inView]);

  return (
    <div ref={rootRef} className="w-full flex flex-col items-center space-y-8 no-swipe">
      <div
        className={`gallery-stage w-full flex items-center justify-center py-6 ${coverflow ? "gallery-stage-flow" : ""}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`relative w-full max-w-[400px] aspect-[16/10] ${coverflow ? "preserve-3d perspective-stage" : ""}`}
        >
          {projects.map((project, idx) => {
            let diff = idx - activeIndex;
            if (diff < -count / 2) diff += count;
            if (diff > count / 2) diff -= count;

            const isActive = diff === 0;
            const abs = Math.abs(diff);
            const show = coverflow ? abs <= 3 : abs === 0;

            let transform = "none";
            let zIndex = 1;
            let pointerEvents: "auto" | "none" = "none";

            if (!show) {
              return (
                <div
                  key={project.id}
                  className="absolute inset-0 w-full h-full pointer-events-none invisible"
                  aria-hidden="true"
                />
              );
            }

            if (!coverflow) {
              transform = "none";
              zIndex = 20;
              pointerEvents = "auto";
            } else if (isActive) {
              transform = "translate3d(0, 0, 48px) rotateY(0deg) scale(var(--flow-scale))";
              zIndex = 20;
              pointerEvents = "auto";
            } else {
              const depth = -24 * abs;
              const scaleMul = (1 - abs * 0.08).toFixed(2);
              const rot = diff < 0 ? "var(--flow-angle)" : "calc(var(--flow-angle) * -1)";
              transform = `translate3d(calc(var(--flow-shift) * ${diff}), 0, ${depth}px) rotateY(${rot}) scale(calc(var(--flow-scale) * ${scaleMul}))`;
              zIndex = 10 - abs;
              pointerEvents = "auto";
            }

            return (
              <Link
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!isActive) {
                    e.preventDefault();
                    selectProject(idx);
                  }
                }}
                className={`absolute inset-0 w-full h-full block [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform-style:flat] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? "cursor-default" : "cursor-pointer"}`}
                style={{
                  transform,
                  zIndex,
                  pointerEvents,
                }}
                aria-label={isActive ? `Open ${project.title}` : `Select ${project.title}`}
                tabIndex={isActive ? 0 : -1}
              >
                <BrowserMockup
                  url={project.url}
                  screenshotUrl={screenshotMap[project.id]}
                  title={project.title}
                  isVisible={inView && abs <= 3}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className="flex items-center justify-center gap-1.5"
        role="tablist"
        aria-label="Selected projects"
      >
        {projects.map((project, idx) => {
          const active = idx === activeIndex;
          return (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={project.title}
              onClick={(e) => selectProject(idx, e)}
              className={`h-11 w-8 flex items-center justify-center ${active ? "text-slate-900" : "text-slate-300"}`}
            >
              <span className={`block h-1.5 rounded-full ${active ? "w-5 bg-slate-900" : "w-1.5 bg-current"}`} />
            </button>
          );
        })}
      </div>

      <div className="max-w-2xl mx-auto w-full text-center space-y-6">
        <div className="space-y-1.5 min-h-[64px] flex flex-col justify-center items-center" aria-live="polite">
          <h3 className="text-xl font-black text-slate-900 tracking-tight">
            {projects[activeIndex].title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-lg">
            {projects[activeIndex].desc}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="#services" className={btnSecondary}>
            See how I work
          </Link>
          <Link href="/start" className={btnPrimary}>
            Start a project
          </Link>
        </div>
      </div>
    </div>
  );
}
