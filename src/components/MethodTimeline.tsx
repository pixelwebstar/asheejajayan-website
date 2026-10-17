"use client";

import React, { useEffect, useState } from "react";

interface StepDetail {
  num: string;
  title: string;
  desc: string;
  longDesc: string;
  timeframe: string;
  focusDesc: string;
  deliverables: string[];
  clientInput: string[];
  result: string;
  nextStep: string;
}

const steps: StepDetail[] = [
  {
    num: "01",
    title: "Brief",
    desc: "You send the work in writing. I learn the business, the customer, and the pages the site needs.",
    longDesc: "You write down the work. I learn the business, the customer, and the pages the site needs.",
    timeframe: "Days 1–2",
    focusDesc: "You send what the business does. I ask a question only if something is unclear.",
    deliverables: [
      "What the business does",
      "Who the customer is",
      "The pages to build",
      "Your logo and colors",
      "Your photos",
      "Your current website",
      "Your domain name",
      "How people contact you",
      "A first timeline",
      "The plan for the site"
    ],
    clientInput: [
      "Send what the business does",
      "Share your logo and colors if you have them"
    ],
    result: "A clear plan",
    nextStep: "Send the brief"
  },
  {
    num: "02",
    title: "The Plan",
    desc: "I write the pages, the dates, and what you will see before anything goes live.",
    longDesc: "I write the pages and the dates. Work starts after you say yes.",
    timeframe: "Days 3–4",
    focusDesc: "I send one written plan: the pages, and the dates. Work starts after you say yes.",
    deliverables: [
      "The pages I will build",
      "What the site will include",
      "The start date",
      "The launch date",
      "What you need to send",
      "The domain plan",
      "What happens at launch",
      "One written plan",
      "Your yes before I start"
    ],
    clientInput: [
      "Read the plan",
      "Say yes before I start"
    ],
    result: "A written plan",
    nextStep: "Say yes to the plan"
  },
  {
    num: "03",
    title: "Layout & Text",
    desc: "I plan where each page goes, then I write the headlines and the words your visitors will read.",
    longDesc: "I place the words, photos, and buttons, and I write the headlines your visitors will read.",
    timeframe: "Days 5–8",
    focusDesc: "I place the words, photos, and buttons so a visitor knows how to call you.",
    deliverables: [
      "List of pages",
      "Headline for each page",
      "The body text",
      "Where photos go",
      "Where buttons go",
      "The phone layout",
      "The contact form",
      "The call button",
      "A link to review it",
      "Your approval"
    ],
    clientInput: [
      "Send your text and photos",
      "Approve the page layouts"
    ],
    result: "Pages and words",
    nextStep: "Review the words"
  },
  {
    num: "04",
    title: "Visual Design",
    desc: "I design the look of the site from scratch, using your colors, your photos, and your logo.",
    longDesc: "I design the phone and desktop pages with your colors, photos, and logo.",
    timeframe: "Days 9–14",
    focusDesc: "I design the phone and desktop pages with your colors, photos, and logo.",
    deliverables: [
      "Your colors",
      "Your logo",
      "Your photos",
      "The type",
      "The buttons",
      "Phone screens",
      "Desktop screens",
      "The contact page",
      "A link to review it",
      "Your approval"
    ],
    clientInput: [
      "Review the design",
      "Tell me what to change"
    ],
    result: "The look of the site",
    nextStep: "Approve the design"
  },
  {
    num: "05",
    title: "Building & Code",
    desc: "I write the code so the site opens fast and works on phones and computers.",
    longDesc: "I code every page so it works on a phone and on a computer.",
    timeframe: "Days 15–24",
    focusDesc: "I code every page so it works on a phone and on a computer.",
    deliverables: [
      "The coded website",
      "Phone layout",
      "Desktop layout",
      "Fast photos",
      "The contact form",
      "The call button",
      "A preview link",
      "A phone check",
      "A computer check",
      "Page titles for Google"
    ],
    clientInput: [
      "Open the preview",
      "Send your domain login"
    ],
    result: "A preview link",
    nextStep: "Test the preview"
  },
  {
    num: "06",
    title: "Launch",
    desc: "I put the site online, connect your domain, and help Google find the pages.",
    longDesc: "I connect your domain, turn on HTTPS, and submit the pages so Google can find the site.",
    timeframe: "Days 25–27",
    focusDesc: "I connect your domain, turn on HTTPS, and submit the pages so Google can find the site.",
    deliverables: [
      "Domain connected",
      "HTTPS turned on",
      "Site hosted",
      "Sitemap for Google",
      "Page titles",
      "Old links redirected",
      "Final check",
      "The live website",
      "You can open it",
      "Google can find it"
    ],
    clientInput: [
      "Share domain access",
      "Check the live website"
    ],
    result: "Live on your domain",
    nextStep: "Help connect your domain"
  },
  {
    num: "07",
    title: "Updates & Support",
    desc: "I keep backups, update the text you send me, and check that the site stays fast.",
    longDesc: "I keep a backup, watch that the site is online, and change text when you send it.",
    timeframe: "Ongoing care",
    focusDesc: "I keep a backup, watch that the site is online, and change text when you send it.",
    deliverables: [
      "A daily backup",
      "A check the site is up",
      "Text changes you send",
      "Photo changes you send",
      "A speed check",
      "Email support",
      "The site stays online",
      "Small fixes",
      "You can stop later",
      "You still own the files"
    ],
    clientInput: [
      "Send the text to change",
      "Tell me if something breaks"
    ],
    result: "Backups and updates",
    nextStep: "Send text changes"
  }
];

const METHOD_AUTO_MS = 5500;

function ProgressBar({ play, restartKey }: { play: boolean; restartKey: string }) {
  if (!play) return null;
  return (
    <div className="absolute bottom-0 left-0 h-[3px] bg-slate-100 w-full overflow-hidden">
      <div key={restartKey} className="method-auto-bar h-full bg-slate-900/40" />
    </div>
  );
}

function DetailPanels({ step, stacked = false, autoPlay = false }: { step: StepDetail; stacked?: boolean; autoPlay?: boolean }) {
  const card = stacked
    ? "bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col relative"
    : "bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-0 h-full";
  const inner = stacked
    ? "flex flex-col gap-3 w-full"
    : "flex flex-col justify-between h-full w-full animate-timeline-switch";

  const covered = (
    <div className={card}>
      <div key={step.num + "-covered"} className={inner}>
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] font-mono border-b border-slate-100 pb-2 block">
            Things Covered
          </span>
          <ul className={`grid gap-x-4 gap-y-1.5 text-xs sm:text-[13px] text-slate-600 font-medium leading-none ${stacked ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
            {step.deliverables.map((item, dIdx) => (
              <li key={dIdx} className="flex items-center gap-2 min-h-[1.25rem]">
                <span className="text-slate-600 font-mono text-[10px] shrink-0">
                  {String(dIdx + 1).padStart(2, "0")}.
                </span>
                <span className="text-slate-700 truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest font-mono pt-3 border-t border-slate-100 block truncate mt-3 shrink-0">
          Timeline: {step.timeframe}
        </span>
      </div>
      <ProgressBar play={autoPlay} restartKey={step.num} />
    </div>
  );

  const weDo = (
    <div className={card}>
      <div key={step.num + "-do"} className={inner}>
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] font-mono border-b border-slate-100 pb-2 block">
            What I do
          </span>
          <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-snug line-clamp-3 min-h-[3.75rem]">
            {step.focusDesc}
          </p>
        </div>
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest font-mono pt-3 border-t border-slate-100 block truncate mt-3 shrink-0">
          Result: {step.result}
        </span>
      </div>
      <ProgressBar play={autoPlay} restartKey={step.num} />
    </div>
  );

  const yourPart = (
    <div className={card}>
      <div key={step.num + "-part"} className={inner}>
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] font-mono border-b border-slate-100 pb-2 block">
            Your Part
          </span>
          <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-600 font-medium leading-none">
            {step.clientInput.map((input, iIdx) => (
              <li key={iIdx} className="flex items-center gap-2 min-h-[1.25rem]">
                <span className="text-slate-600 font-mono text-[10px] shrink-0">•</span>
                <span className="text-slate-700 truncate">{input}</span>
              </li>
            ))}
          </ul>
        </div>
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest font-mono pt-3 border-t border-slate-100 block mt-3 shrink-0 truncate">
          Next Step: {step.nextStep}
        </span>
      </div>
      <ProgressBar play={autoPlay} restartKey={step.num} />
    </div>
  );

  if (stacked) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="sm:col-span-2">{covered}</div>
        {weDo}
        {yourPart}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 w-full min-h-[280px] lg:h-[380px] xl:h-[400px] select-none">
      {covered}
      <div className="flex flex-col gap-4 h-full min-h-0">
        <div className="flex-1 min-h-0">{weDo}</div>
        <div className="flex-1 min-h-0">{yourPart}</div>
      </div>
    </div>
  );
}

export default function MethodTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const resumeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [touchEndY, setTouchEndY] = useState<number | null>(null);

  useEffect(() => {
    const apply = () => setIsDesktop(window.innerWidth >= 1024);
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!isDesktop || !inView || isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % steps.length);
    }, METHOD_AUTO_MS);
    return () => clearInterval(timer);
  }, [isDesktop, inView, isPaused]);

  const pauseAuto = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
      resumeTimerRef.current = null;
    }, 8000);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!inView) return;
      if (event.target instanceof HTMLElement && event.target.closest("input, textarea, select")) return;
      if (event.key === "ArrowRight") {
        pauseAuto();
        setActiveIndex((index) => (index + 1) % steps.length);
      } else if (event.key === "ArrowLeft") {
        pauseAuto();
        setActiveIndex((index) => (index - 1 + steps.length) % steps.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inView]);

  const handleStepSelect = (index: number) => {
    pauseAuto();
    setActiveIndex(index);
  };

  const onTouchStart = (event: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchEndY(null);
    setTouchStartX(event.targetTouches[0].clientX);
    setTouchStartY(event.targetTouches[0].clientY);
  };

  const onTouchMove = (event: React.TouchEvent) => {
    setTouchEndX(event.targetTouches[0].clientX);
    setTouchEndY(event.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (touchStartX == null || touchEndX == null || touchStartY == null || touchEndY == null) return;
    const dx = touchStartX - touchEndX;
    const dy = touchStartY - touchEndY;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx > 0) setActiveIndex((index) => (index + 1) % steps.length);
    else setActiveIndex((index) => (index - 1 + steps.length) % steps.length);
    pauseAuto();
  };

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const activeStep = steps[activeIndex];
  const progress = (activeIndex + 1) / steps.length;

  return (
    <div
      ref={rootRef}
      className="relative w-full max-w-[1500px] mx-auto"
      style={{ ["--step-progress" as string]: String(progress) }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 content-start lg:content-center items-start lg:items-stretch w-full min-h-0">
        <div className="lg:col-span-1 flex flex-col justify-between self-stretch w-full lg:border-r lg:border-slate-200/80 lg:pr-10 xl:pr-16 text-left items-start min-h-0 gap-8">
          <div className="flex flex-col justify-start w-full text-left max-w-[500px] space-y-2 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block font-mono">
              How I work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              From the brief to launch.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-medium pt-1">
              I design the site, write the code, and put it online. You see the plan before I start.
            </p>
          </div>

          <div className="hidden lg:block w-full shrink-0">
            <DetailPanels step={activeStep} autoPlay={isDesktop && inView && !isPaused} />
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col justify-center self-stretch w-full lg:pl-10 xl:pl-16 min-h-0">
          <div className="lg:hidden flex flex-col min-h-0 gap-4">
            <div className="flex items-baseline gap-4 shrink-0">
              <span className="text-2xl font-black text-slate-900 leading-none">{activeStep.num}</span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                {activeStep.title}
              </h3>
            </div>
            <p className="text-sm leading-snug font-medium text-slate-700 shrink-0 line-clamp-2 min-h-[2.5rem]">
              {activeStep.desc}
            </p>
            <div className="mb-16">
              <DetailPanels step={activeStep} stacked />
            </div>
            <div className="sticky bottom-0 z-10 -mx-6 px-6 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] bg-cool-light/95 backdrop-blur-sm border-t border-slate-200/80">
              <div className="flex justify-between gap-1">
                {steps.map((step, index) => (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => handleStepSelect(index)}
                    className={`text-[10px] font-bold font-mono tracking-widest min-h-11 px-1 ${
                      index === activeIndex ? "text-slate-900" : "text-slate-400"
                    }`}
                    aria-label={step.title}
                    aria-current={index === activeIndex ? "step" : undefined}
                  >
                    {step.num}
                  </button>
                ))}
              </div>
              <div className="pointer-events-none h-[3px] w-full bg-slate-200/80 mt-1">
                <div className="method-step-bar h-full bg-slate-900" />
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-full text-left">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  type="button"
                  key={step.num}
                  onClick={() => handleStepSelect(index)}
                  className="w-full flex gap-5 items-start py-2.5 lg:py-3.5 border-0 border-b border-slate-200/80 last:border-b-0 cursor-pointer group select-none bg-transparent text-left"
                  aria-expanded={isActive}
                >
                  <span
                    className={`text-2xl font-black select-none leading-none pt-1 min-w-[40px] transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-800"}`}
                  >
                    {step.num}
                  </span>

                  <div className="space-y-1 text-left flex-1 min-w-0">
                    <h3
                      className={`text-sm font-bold uppercase tracking-wider whitespace-nowrap truncate transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-800/80 group-hover:text-slate-900"}`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-snug font-medium line-clamp-2 min-h-[2.5rem] transition-colors duration-300 ${
                        isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-800"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
