"use client";

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

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
    desc: "We learn about your business, your customers, and what you want to achieve.",
    longDesc: "We talk with you to learn about your business, see what other websites in your field are doing, and make a plan that turns visitors into paying customers.",
    timeframe: "Days 1–2",
    focusDesc: "We talk on a video call to learn about your business, who your customers are, and what pages you need.",
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
      "Fill out our short kickoff form",
      "Send us your logo and colors",
      "Join the first call with us"
    ],
    result: "A clear website plan",
    nextStep: "Fill out the kickoff form"
  },
  {
    num: "02",
    title: "Plan & Pricing",
    desc: "We write down exactly what we will build, when it will be ready, and what it costs.",
    longDesc: "We write down every feature, page count, and key date. We give you a clear proposal with fixed pricing so we both agree on the plan before we start.",
    timeframe: "Days 3–4",
    focusDesc: "We write a detailed plan with page counts, visual style guidelines, milestone dates, and the final price.",
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
      "Review the project plan",
      "Choose your price option",
      "Sign the agreement and pay deposit"
    ],
    result: "Fixed price and dates",
    nextStep: "Sign the contract"
  },
  {
    num: "03",
    title: "Layout & Text",
    desc: "We plan where everything goes on each page and write the text for your website.",
    longDesc: "We design black-and-white page layouts to show where text, images, and buttons will sit. We write clean, simple headlines that explain your value to visitors.",
    timeframe: "Days 5–8",
    focusDesc: "We plan the layout flow of every page, write headlines, and place buttons to help visitors contact you.",
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
      "Send us your text notes",
      "Review the list of pages",
      "Approve the page layouts"
    ],
    result: "First layouts and text",
    nextStep: "Review the text draft"
  },
  {
    num: "04",
    title: "Visual Design",
    desc: "We design the exact look of your website with your colors, fonts, and images.",
    longDesc: "We build a unique visual design from scratch. We do not use cheap templates, so your brand looks professional and stands out from competitors.",
    timeframe: "Days 9–14",
    focusDesc: "We design custom visuals, choosing premium colors, clean fonts, and visual styles that fit your business.",
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
      "Pick your favorite color options",
      "Send us your feedback on the look"
    ],
    result: "Beautiful website design",
    nextStep: "Approve the design look"
  },
  {
    num: "05",
    title: "Building & Code",
    desc: "We write clean code to build your website so it loads fast and works perfectly.",
    longDesc: "We write custom code from scratch without bloated page builders. We optimize every script and image to make sure your site loads instantly on mobile.",
    timeframe: "Days 15–24",
    focusDesc: "We write clean code to build your website, making sure it loads instantly on computers, tablets, and phones.",
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
      "Test the live preview website",
      "Fill out the contact forms to test",
      "Send us your domain name details"
    ],
    result: "A working preview link",
    nextStep: "Test the preview link"
  },
  {
    num: "06",
    title: "Launch & Google Setup",
    desc: "We put your website online, connect your domain name, and help Google find it.",
    longDesc: "We point your domain name to the new host, install a secure padlock on your site, and register your pages with Google so they show up in searches.",
    timeframe: "Days 25–27",
    focusDesc: "We connect your domain name, make your site secure, and tell Google to index your pages.",
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
      "Help us access your domain host",
      "Check the live website",
      "Pay the final invoice"
    ],
    result: "Website live on Google",
    nextStep: "Help connect your domain"
  },
  {
    num: "07",
    title: "Updates & Support",
    desc: "We keep your website safe, make monthly updates, and check loading speeds.",
    longDesc: "We check your website uptime, run daily backups so you never lose data, and make monthly updates to your text and images to keep things fresh.",
    timeframe: "Continuous",
    focusDesc: "We check your website daily, run safe backups, and make text updates whenever you need them.",
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
      "Send us any text changes you need",
      "Review your visitor reports",
      "Tell us about new updates you want"
    ],
    result: "Monthly reports and updates",
    nextStep: "Send text updates you need"
  }
];

const STEP_MS = 7000;
const READING_MS = 60_000;

export default function MethodTimeline() {
  const [activeStep, setActiveStep] = useState<string>("01");
  const [inView, setInView] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const activeStepRef = useRef(activeStep);
  const pendingPinRef = useRef(false);
  const inViewRef = useRef(false);
  const ignoreUntilRef = useRef(0);
  const pauseUntilRef = useRef(0);
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const readingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const barDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  activeStepRef.current = activeStep;
  inViewRef.current = inView;

  const goToStep = (num: string) => {
    if (activeStepRef.current === num) return;
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      pendingPinRef.current = true;
    }
    setActiveStep(num);
  };

  const armTimer = () => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    if (!inViewRef.current) return;
    if (Date.now() < pauseUntilRef.current) return;
    if (barDebounceRef.current) clearTimeout(barDebounceRef.current);
    barDebounceRef.current = setTimeout(() => setCycleKey((k) => k + 1), 80);
    advanceTimerRef.current = setTimeout(() => {
      const currentIndex = steps.findIndex((s) => s.num === activeStepRef.current);
      const nextIndex = (currentIndex + 1) % steps.length;
      goToStep(steps[nextIndex].num);
      armTimer();
    }, STEP_MS);
  };

  const startReadingPause = () => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    if (barDebounceRef.current) clearTimeout(barDebounceRef.current);
    pauseUntilRef.current = Date.now() + READING_MS;
    setIsReading(true);
    if (readingTimerRef.current) clearTimeout(readingTimerRef.current);
    readingTimerRef.current = setTimeout(() => {
      pauseUntilRef.current = 0;
      setIsReading(false);
      armTimer();
    }, READING_MS);
  };

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

  useLayoutEffect(() => {
    if (!pendingPinRef.current || typeof window === "undefined") return;
    pendingPinRef.current = false;

    const el = document.getElementById(`step-card-${activeStep}`);
    if (!el) return;

    const navRaw = getComputedStyle(document.documentElement).getPropertyValue("--navbar-h");
    const nav = parseFloat(navRaw) || (window.innerWidth >= 640 ? 112 : 104);
    const top = el.getBoundingClientRect().top + window.scrollY - nav - 12;
    if (Math.abs(window.scrollY - top) < 8) return;
    ignoreUntilRef.current = Date.now() + 900;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, [activeStep]);

  useEffect(() => {
    if (!inView) {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      return;
    }
    if (Date.now() < pauseUntilRef.current) return;
    armTimer();
    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      if (barDebounceRef.current) clearTimeout(barDebounceRef.current);
    };
  }, [inView]);

  useEffect(() => {
    const resetClock = () => {
      if (Date.now() < ignoreUntilRef.current) return;
      if (Date.now() < pauseUntilRef.current) return;
      armTimer();
    };
    const opts: AddEventListenerOptions = { passive: true };
    addEventListener("scroll", resetClock, opts);
    addEventListener("wheel", resetClock, opts);
    addEventListener("touchstart", resetClock, opts);
    addEventListener("touchmove", resetClock, opts);
    return () => {
      removeEventListener("scroll", resetClock);
      removeEventListener("wheel", resetClock);
      removeEventListener("touchstart", resetClock);
      removeEventListener("touchmove", resetClock);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (readingTimerRef.current) clearTimeout(readingTimerRef.current);
    };
  }, []);

  const handleStepSelect = (num: string, e: React.SyntheticEvent) => {
    e.stopPropagation();
    goToStep(num);
    ignoreUntilRef.current = Date.now() + 900;
    startReadingPause();
  };

  return (
    <div ref={rootRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch w-full min-h-0 lg:min-h-[580px]">

      <div className="lg:col-span-1 flex flex-col justify-between self-stretch py-4 lg:py-6 w-full lg:sticky lg:top-24 lg:border-r lg:border-slate-200/80 lg:pr-16 text-left items-start h-full min-h-0 lg:min-h-[520px]">
        <div className="flex flex-col justify-start w-full text-left max-w-[500px] pb-6 space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block font-mono">
            OUR METHOD
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Built to Convert.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium pt-3">
            We don&apos;t just design websites. We build clean, custom systems that turn your visitors into customers. By focusing on conversion psychology and optimized layouts, we ensure every element guides your audience toward taking action.
          </p>
        </div>

        <div className="flex-1 w-full flex flex-col justify-center py-4">
          <div className="hidden lg:grid grid-cols-2 gap-4 w-full h-[430px] select-none">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
              {steps.map((step) => {
                if (step.num !== activeStep) return null;
                return (
                  <div
                    key={step.num}
                    className="flex flex-col justify-between h-full w-full animate-timeline-switch"
                  >
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] font-mono border-b border-slate-100 pb-2.5 block whitespace-nowrap">
                        Things Covered
                      </span>
                      <ul className="space-y-2 text-[13px] text-slate-600 font-medium leading-none">
                        {step.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2 min-h-[1.25rem]">
                            <span className="text-slate-600 font-mono text-[10px] shrink-0">
                              {String(dIdx + 1).padStart(2, "0")}.
                            </span>
                            <span className="text-slate-700 truncate whitespace-nowrap">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest font-mono pt-3 border-t border-slate-100 block whitespace-nowrap truncate">
                      Timeline: {step.timeframe}
                    </span>
                  </div>
                );
              })}
              <div className="absolute bottom-0 left-0 h-[3px] bg-slate-100 w-full overflow-hidden">
                <div
                  key={activeStep + "_" + cycleKey}
                  className="h-full bg-slate-900/40 rounded-full"
                  style={{
                    width: isReading ? "0%" : undefined,
                    animation: isReading ? undefined : "progressRun 7s linear forwards",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex-1 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                {steps.map((step) => {
                  if (step.num !== activeStep) return null;
                  return (
                    <div
                      key={step.num}
                      className="flex flex-col justify-between h-full w-full animate-timeline-switch"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] font-mono border-b border-slate-100 pb-2 block whitespace-nowrap">
                          What We Do
                        </span>
                        <p className="text-[13px] text-slate-600 font-medium leading-snug line-clamp-2 min-h-[2.5rem]">
                          {step.focusDesc}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest font-mono pt-3 border-t border-slate-100 block whitespace-nowrap truncate">
                        Result: {step.result}
                      </span>
                    </div>
                  );
                })}
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-slate-100 w-full overflow-hidden">
                  <div
                    key={activeStep + "_" + cycleKey}
                    className="h-full bg-slate-900/40 rounded-full"
                    style={{
                      width: isReading ? "0%" : undefined,
                      animation: isReading ? undefined : "progressRun 7s linear forwards",
                    }}
                  />
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex-1 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                {steps.map((step) => {
                  if (step.num !== activeStep) return null;
                  return (
                    <div
                      key={step.num}
                      className="flex flex-col justify-between h-full w-full animate-timeline-switch"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] font-mono border-b border-slate-100 pb-2 block whitespace-nowrap">
                          Your Part
                        </span>
                        <ul className="space-y-2 text-[13px] text-slate-600 font-medium leading-none">
                          {step.clientInput.map((input, iIdx) => (
                            <li key={iIdx} className="flex items-center gap-2 min-h-[1.25rem]">
                              <span className="text-slate-600 font-mono text-[10px] shrink-0">•</span>
                              <span className="text-slate-700 truncate whitespace-nowrap">{input}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest font-mono pt-3 border-t border-slate-100 block whitespace-nowrap truncate">
                        Next Step: {step.nextStep}
                      </span>
                    </div>
                  );
                })}
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-slate-100 w-full overflow-hidden">
                  <div
                    key={activeStep + "_" + cycleKey}
                    className="h-full bg-slate-900/40 rounded-full"
                    style={{
                      width: isReading ? "0%" : undefined,
                      animation: isReading ? undefined : "progressRun 7s linear forwards",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1 flex flex-col justify-center self-stretch py-4 lg:py-6 w-full lg:pl-16 h-full">
        <div className="w-full text-left">
          {steps.map((step) => {
            const isActive = step.num === activeStep;
            return (
              <button
                type="button"
                key={step.num}
                id={`step-card-${step.num}`}
                onClick={(e) => handleStepSelect(step.num, e)}
                className="w-full flex gap-6 items-start py-5 border-0 border-b border-slate-200/80 last:border-b-0 cursor-pointer group select-none bg-transparent text-left"
                aria-expanded={isActive}
              >
                <span
                  className={`text-2xl font-black select-none leading-none pt-1 min-w-[40px] transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-800"
                    }`}
                >
                  {step.num}
                </span>

                <div className="space-y-1 text-left flex-1 min-w-0">
                  <h3
                    className={`text-sm font-bold uppercase tracking-wider whitespace-nowrap truncate transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-800/80 group-hover:text-slate-900"
                      }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-snug font-medium line-clamp-2 min-h-[2.5rem] sm:min-h-[2.75rem] transition-colors duration-300 ${isActive ? "text-slate-900 font-semibold" : "text-slate-600 group-hover:text-slate-800"
                      }`}
                  >
                    {step.desc}
                  </p>

                  {isActive ? (
                    <div className="block lg:hidden mt-4 pt-4 border-t border-slate-100 space-y-5 animate-timeline-switch">
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block font-mono whitespace-nowrap">
                          Things Covered
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                          {step.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2 min-h-[1.25rem]">
                              <span className="text-slate-600 font-mono text-[10px] shrink-0">
                                {String(dIdx + 1).padStart(2, "0")}.
                              </span>
                              <span className="text-slate-700 truncate whitespace-nowrap">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest block font-mono whitespace-nowrap">
                            What We Do
                          </span>
                          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-snug line-clamp-2 min-h-[2.5rem]">
                            {step.focusDesc}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest block font-mono whitespace-nowrap">
                            Next Step
                          </span>
                          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-snug whitespace-nowrap truncate">
                            {step.nextStep}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
