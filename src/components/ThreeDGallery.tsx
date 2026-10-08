"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import BrowserMockup from "@/components/BrowserMockup";
import { btnPrimary, btnSecondary } from "@/lib/ui";

const projects = [
  {
    id: 1,
    title: "Mobile Search Engine",
    desc: "A search-optimized mobile database directory and wiki application.",
    url: "https://mobwik.vercel.app",
    type: "portal" as const,
  },
  {
    id: 2,
    title: "Operations Portal",
    desc: "A custom real-time request tracker and operations dispatch system.",
    url: "https://dakeek.ae",
    type: "portal" as const,
  },
  {
    id: 3,
    title: "Workspace Operating System",
    desc: "A high-performance command center and calendar scheduling hub.",
    url: "https://checkersmark.com",
    type: "dashboard" as const,
  },
  {
    id: 4,
    title: "Product Showroom",
    desc: "A clean storefront and interactive catalog for kitchen appliances.",
    url: "https://novacookers.vercel.app",
    type: "shop" as const,
  },
  {
    id: 5,
    title: "Collaboration Platform",
    desc: "A client communication portal and real-time team coordination tool.",
    url: "https://bonder.vercel.app",
    type: "portal" as const,
  },
  {
    id: 6,
    title: "Interior Design Showcase",
    desc: "A curated digital catalog displaying high-end lighting installations.",
    url: "https://lumiereluminouse.netlify.app/",
    type: "landing" as const,
  },
  {
    id: 7,
    title: "Digital Publishing Archive",
    desc: "A lightweight content management portal for digital archives.",
    url: "https://sayahnam.vercel.app",
    type: "portal" as const,
  },
  {
    id: 8,
    title: "Professional Portfolio",
    desc: "A minimalist digital resume and showcase for professional services.",
    url: "https://ksinghconstruction.vercel.app",
    type: "landing" as const,
  },
  {
    id: 9,
    title: "Marketing Platform",
    desc: "A search-optimized page built to maximize local service conversion.",
    url: "https://jsgastech.com",
    type: "landing" as const,
  },
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
  9: "/screenshots/jsgastech.webp",
};

const count = projects.length;
const STAGE = 3;
const TICK_MS = 3000;

function shortestDiff(idx: number, active: number) {
  let diff = idx - active;
  if (diff < -count / 2) diff += count;
  if (diff > count / 2) diff -= count;
  return diff;
}

export default function ThreeDGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [tickFrom, setTickFrom] = useState("20px");
  const rootRef = useRef<HTMLDivElement>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onStageIds = useRef<Set<number>>(new Set());
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const indexRef = useRef(0);
  const tickRef = useRef<HTMLDivElement>(null);
  const didTick = useRef(false);
  indexRef.current = activeIndex;

  const scheduleResume = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
      resumeTimerRef.current = null;
    }, TICK_MS);
  }, []);

  const goTo = useCallback(
    (next: number | ((prev: number) => number)) => {
      const prev = indexRef.current;
      const value = typeof next === "function" ? next(prev) : next;
      setTickFrom(shortestDiff(value, prev) >= 0 ? "20px" : "-20px");
      setActiveIndex(value);
      setIsPaused(true);
      scheduleResume();
    },
    [scheduleResume],
  );

  const handleNext = useCallback(() => goTo((prev) => (prev + 1) % count), [goTo]);
  const handlePrev = useCallback(() => goTo((prev) => (prev - 1 + count) % count), [goTo]);

  const selectProject = (idx: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    goTo(idx);
  };

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setIsLg(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useLayoutEffect(() => {
    const next = new Set<number>();
    projects.forEach((project, idx) => {
      if (Math.abs(shortestDiff(idx, activeIndex)) <= STAGE) next.add(project.id);
    });
    onStageIds.current = next;
  }, [activeIndex]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "80px",
      threshold: 0.05,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setTickFrom("20px");
      setActiveIndex((prev) => (prev + 1) % count);
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [isPaused, inView]);

  useEffect(() => {
    const el = tickRef.current;
    if (!el || isLg) return;
    if (!didTick.current) {
      didTick.current = true;
      return;
    }
    el.style.setProperty("--tick-from", tickFrom);
    el.classList.remove("gallery-tick");
    void el.offsetWidth;
    el.classList.add("gallery-tick");
  }, [activeIndex, isLg, tickFrom]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!inView) return;
      if (event.target instanceof HTMLElement && event.target.closest("input, textarea, select")) return;
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inView, handleNext, handlePrev]);

  const active = projects[activeIndex];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY };
    setIsPaused(true);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) {
      scheduleResume();
      return;
    }
    const touch = e.changedTouches[0];
    const dx = start.x - touch.clientX;
    const dy = start.y - touch.clientY;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) {
      scheduleResume();
      return;
    }
    if (dx > 0) handleNext();
    else handlePrev();
  };

  return (
    <div ref={rootRef} className="w-full flex flex-col items-center space-y-8 no-swipe">
      <div className="gallery-stage hidden lg:flex w-full items-center justify-center py-6 relative perspective-stage select-none">
        <div className="relative w-full max-w-[400px] aspect-[16/10] preserve-3d">
          {projects.map((project, idx) => {
            const diff = shortestDiff(idx, activeIndex);
            const abs = Math.abs(diff);
            const isActive = diff === 0;
            const onStage = abs <= STAGE;
            const skipMotion = !onStage || !onStageIds.current.has(project.id);
            const src = screenshotMap[project.id];
            const isVideo = src.endsWith(".webm");

            let transform = "none";
            let zIndex = 1;

            if (!onStage) {
              transform = "none";
              zIndex = 0;
            } else if (isActive) {
              transform = "translate3d(0, 0, 48px) rotateY(0deg) scale(var(--flow-scale))";
              zIndex = 20;
            } else {
              const depth = -24 * abs;
              const scaleMul = (1 - abs * 0.08).toFixed(2);
              const rot = diff < 0 ? "var(--flow-angle)" : "calc(var(--flow-angle) * -1)";
              transform = `translate3d(calc(var(--flow-shift) * ${diff}), 0, ${depth}px) rotateY(${rot}) scale(calc(var(--flow-scale) * ${scaleMul}))`;
              zIndex = 10 - abs;
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
                className={`absolute inset-0 w-full h-full block [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform-style:flat] ${isActive ? "cursor-default" : "cursor-pointer"}`}
                style={{
                  transform,
                  zIndex,
                  opacity: onStage ? 1 : 0,
                  visibility: onStage ? "visible" : "hidden",
                  pointerEvents: onStage ? "auto" : "none",
                  transition: skipMotion ? "none" : "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                aria-hidden={!onStage}
                aria-label={isActive ? `Open ${project.title}` : `Select ${project.title}`}
                tabIndex={isActive ? 0 : -1}
              >
                <BrowserMockup
                  url={project.url}
                  screenshotUrl={src}
                  title={project.title}
                  isVisible={inView && isLg && onStage && !(isVideo && abs > 1)}
                  isActive={inView && isLg && isActive}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className="block lg:hidden w-full max-w-[480px] mx-auto px-4 select-none relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={tickRef}
          className="w-full"
          style={{ ["--tick-from" as string]: tickFrom }}
        >
          <Link
            href={active.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-[520/310] relative cursor-pointer block"
            aria-label={`Open ${active.title}`}
          >
            <BrowserMockup
              url={active.url}
              screenshotUrl={screenshotMap[active.id]}
              title={active.title}
              isVisible={inView && !isLg}
              isActive={inView && !isLg}
            />
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5" role="tablist" aria-label="Selected projects">
        {projects.map((project, idx) => {
          const selected = idx === activeIndex;
          return (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={project.title}
              onClick={(e) => selectProject(idx, e)}
              className={`h-11 w-8 flex items-center justify-center ${selected ? "text-slate-900" : "text-slate-300"}`}
            >
              <span className={`block h-1.5 rounded-full ${selected ? "w-5 bg-slate-900" : "w-1.5 bg-current"}`} />
            </button>
          );
        })}
      </div>

      <div className="max-w-2xl mx-auto w-full text-center space-y-6">
        <div className="space-y-1.5 min-h-[64px] flex flex-col justify-center items-center" aria-live="polite">
          <h3 className="text-xl font-black text-slate-900 tracking-tight">{active.title}</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-lg">{active.desc}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="#method" className={btnSecondary}>
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
