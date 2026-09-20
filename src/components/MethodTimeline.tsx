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
    title: "First Call",
    desc: "We learn about your business, your customers, and the exact goal you want this website to reach.",
    longDesc: "We talk with you to learn about your business, see what other websites in your field are doing, and make a plan that turns visitors into paying customers.",
    timeframe: "Days 1–2",
    focusDesc: "We join a video call to learn your business, who you serve, and which pages the new site needs.",
    deliverables: [
      "List of business goals",
      "Notes on your target customer",
      "Your preferred colors and style",
      "Review of other websites in your field",
      "Final list of pages to build",
      "Plan for custom features",
      "Check of your domain name",
      "Plan for your text and images",
      "First draft of the timeline",
      "Checklist for project success"
    ],
    clientInput: [
      "Send your logo and colors",
      "Join the first video call"
    ],
    result: "A clear website plan",
    nextStep: "Fill out the kickoff form"
  },
  {
    num: "02",
    title: "Plan & Pricing",
    desc: "We write what we will build, when it will be ready, and the fixed price you will pay for the work.",
    longDesc: "We write down every feature, page count, and key date. We give you a clear proposal with fixed pricing so we both agree on the plan before we start.",
    timeframe: "Days 3–4",
    focusDesc: "We write a fixed plan covering page count, visual rules, dates, and the final project price.",
    deliverables: [
      "Written project agreement",
      "Simple sitemap diagram",
      "List of page layouts",
      "List of custom features",
      "Final timeline with dates",
      "Payment milestone schedule",
      "Launch day checklist",
      "Plan for gathering content",
      "Domain setup instructions",
      "Signed project contract"
    ],
    clientInput: [
      "Review the written plan",
      "Choose your price option"
    ],
    result: "Fixed price and dates",
    nextStep: "Sign the project contract"
  },
  {
    num: "03",
    title: "Layout & Text",
    desc: "We plan where each page goes and write the headlines and words your visitors will actually read.",
    longDesc: "We design black-and-white page layouts to show where text, images, and buttons will sit. We write clean, simple headlines that explain your value to visitors.",
    timeframe: "Days 5–8",
    focusDesc: "We map every page, write the headlines, and place buttons so visitors know how to contact you.",
    deliverables: [
      "Complete sitemap plan",
      "First draft of page text",
      "Map of how visitors use the site",
      "First draft of page layouts",
      "Mobile layout drafts",
      "Button placement plan",
      "Contact page layout plan",
      "List of key search words",
      "Text placement guide",
      "Link to review layout blueprints"
    ],
    clientInput: [
      "Send your text and notes",
      "Approve the page layouts"
    ],
    result: "Layouts and first text",
    nextStep: "Review the text draft"
  },
  {
    num: "04",
    title: "Visual Design",
    desc: "We design the look of the site from scratch with your colors, type, photos, and brand details.",
    longDesc: "We build a unique visual design from scratch. We do not use cheap templates, so your brand looks professional and stands out from competitors.",
    timeframe: "Days 9–14",
    focusDesc: "We design custom visuals with color, type, and image style chosen to fit your brand.",
    deliverables: [
      "Full color page designs",
      "Designs for mobile screens",
      "Final brand color choices",
      "Font and text style guide",
      "Buttons and inputs design guide",
      "Custom graphics and icons",
      "Link to view the interactive design",
      "Custom illustrations pack",
      "Button animation plans",
      "Final design files for review"
    ],
    clientInput: [
      "Review the visual designs",
      "Pick your color options"
    ],
    result: "Full visual design set",
    nextStep: "Approve the design look"
  },
  {
    num: "05",
    title: "Building & Code",
    desc: "We write clean custom code so the site loads fast and works the same on every screen size.",
    longDesc: "We write custom code from scratch without bloated page builders. We optimize every script and image to make sure your site loads instantly on mobile.",
    timeframe: "Days 15–24",
    focusDesc: "We hand-code the site so it loads at once on computers, tablets, and phones.",
    deliverables: [
      "Custom code for your website",
      "Search-friendly page structure",
      "Styles for all screen sizes",
      "Compressed fast-loading images",
      "Interactive page scripts",
      "Working website contact forms",
      "Page loading speed check",
      "Mobile device display check",
      "Google page speed audit",
      "Link to preview the website live"
    ],
    clientInput: [
      "Test the live preview site",
      "Send your domain details"
    ],
    result: "A working preview link",
    nextStep: "Test the preview link"
  },
  {
    num: "06",
    title: "Launch & Google Setup",
    desc: "We put the site live, connect your domain name, and help Google find and index every page.",
    longDesc: "We point your domain name to the new host, install a secure padlock on your site, and register your pages with Google so they show up in searches.",
    timeframe: "Days 25–27",
    focusDesc: "We connect your domain, turn on HTTPS, and submit your pages so Google can find the site.",
    deliverables: [
      "Domain name connection",
      "Secure site setup (HTTPS)",
      "Fast hosting configuration",
      "Google Search setup",
      "Google sitemap file upload",
      "Google bot crawl setup",
      "Google search title descriptions",
      "Redirects for old links",
      "Final live speed check",
      "Live website launch"
    ],
    clientInput: [
      "Share domain host access",
      "Check the live website"
    ],
    result: "Site live on Google",
    nextStep: "Help connect your domain"
  },
  {
    num: "07",
    title: "Updates & Support",
    desc: "We keep the site safe, ship monthly text updates, and check loading speed after every change.",
    longDesc: "We check your website uptime, run daily backups so you never lose data, and make monthly updates to your text and images to keep things fresh.",
    timeframe: "Ongoing care",
    focusDesc: "We watch uptime daily, keep backups, and update copy whenever you send a change.",
    deliverables: [
      "Daily check to ensure site is online",
      "Daily website backup files",
      "Weekly security scans",
      "Monthly speed reports",
      "Code library updates",
      "Updates to your text and pictures",
      "Google search reports",
      "Regular visual display checks",
      "Quick email support line",
      "Monthly visitor traffic report"
    ],
    clientInput: [
      "Review visitor reports",
      "Tell us updates you want"
    ],
    result: "Reports and updates",
    nextStep: "Send the text updates"
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
  const covered = (
    <div className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-0 h-full">
      <div key={step.num + "-covered"} className="flex flex-col justify-between h-full w-full animate-timeline-switch">
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
    <div className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-0 h-full">
      <div key={step.num + "-do"} className="flex flex-col justify-between h-full w-full animate-timeline-switch">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] font-mono border-b border-slate-100 pb-2 block">
            What We Do
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
    <div className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-0 h-full">
      <div key={step.num + "-part"} className="flex flex-col justify-between h-full w-full animate-timeline-switch min-h-0">
        <div className="space-y-2 min-h-0">
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
              OUR METHOD
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Built to Convert.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-medium pt-1">
              We don&apos;t just design websites. We build clean, custom systems that turn your visitors into customers. By focusing on conversion psychology and optimized layouts, we ensure every element guides your audience toward taking action.
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
            <DetailPanels step={activeStep} stacked />
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
