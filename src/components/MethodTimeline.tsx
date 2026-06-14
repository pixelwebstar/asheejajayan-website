"use client";

import React, { useState, useEffect, useRef } from "react";

interface StepDetail {
  num: string;
  title: string;
  desc: string;
  longDesc: string;
  timeframe: string;
  focusDesc: string;
  deliverables: string[];
  clientInput: string[];
}

const steps: StepDetail[] = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We study your business goals, target audience, and project success metrics.",
    longDesc: "We hold a focused consultation to review your business framework, evaluate competitor sites, and select trust-based layout templates that will guide your customers to convert.",
    timeframe: "1-2 Days",
    focusDesc: "We talk on a video call to understand your business goals, target users, and what features you need.",
    deliverables: [
      "List of business goals",
      "Target user profile",
      "Brand style preferences",
      "Competitor review"
    ],
    clientInput: [
      "Tell us your goals",
      "Share brand assets",
      "Describe your needs"
    ]
  },
  {
    num: "02",
    title: "Proposal & Scope",
    desc: "We define the exact project scope, timeline, and pricing agreement.",
    longDesc: "We compile a detailed strategy document mapping out page budgets, integrations, and milestones. We outline a clear proposal to ensure alignment before any design begins.",
    timeframe: "2-3 Days",
    focusDesc: "We write a project proposal with page counts, design scope, timeline milestones, and final cost.",
    deliverables: [
      "Project proposal file",
      "Timeline milestones map",
      "Pricing details",
      "Scope of work agreement"
    ],
    clientInput: [
      "Review project proposal",
      "Confirm final scope",
      "Pay the first deposit"
    ]
  },
  {
    num: "03",
    title: "UX Layout & Copy",
    desc: "We map out content structure, page hierarchy, and copy text layout.",
    longDesc: "We map out the content hierarchy, draft wireframe guides, and arrange calls-to-action in high-impact zones to guide visitors smoothly from initial interest to contact.",
    timeframe: "4-5 Days",
    focusDesc: "We plan the layout flow of every page, draft headlines, and place call-to-action buttons.",
    deliverables: [
      "Website sitemap map",
      "Headline & text layout",
      "Wireframe layout blueprint",
      "User journey flow"
    ],
    clientInput: [
      "Provide website text",
      "Review layout plan",
      "Approve wireframe draft"
    ]
  },
  {
    num: "04",
    title: "Custom UI Design",
    desc: "We design high-fidelity visual mockups tailored to your brand style.",
    longDesc: "We create premium visual designs styled strictly around your brand. We avoid pre-made templates and cookie-cutter themes to ensure your business makes a premium impression.",
    timeframe: "5-7 Days",
    focusDesc: "We design custom visuals, choosing the colors, fonts, and images that represent your brand.",
    deliverables: [
      "Full page mockup design",
      "Color palette & font guide",
      "Custom visual graphics",
      "Interactive design proof"
    ],
    clientInput: [
      "Pick final colors",
      "Provide design feedback",
      "Approve final look"
    ]
  },
  {
    num: "05",
    title: "Handcoded Coding",
    desc: "We build your website from scratch using fast, clean code.",
    longDesc: "We compile semantic Next.js elements and clean Tailwind styles. We tune media assets and script loading speeds to achieve perfect Core Web Vital scores and zero bloat.",
    timeframe: "7-10 Days",
    focusDesc: "We write clean code to build your website pages, optimize images, and ensure maximum load speed.",
    deliverables: [
      "Semantic page code",
      "Optimized image files",
      "Fast layout styling",
      "Speed audit scorecard"
    ],
    clientInput: [
      "No action is required",
      "Review dev draft online",
      "Prepare server access"
    ]
  },
  {
    num: "06",
    title: "Launch & SEO Setup",
    desc: "We configure custom hosting, point domains, and set up Google indexing.",
    longDesc: "We manage custom DNS configurations, install secure SSL certificates, set up edge networks, and register your website on Google Search Console to jumpstart indexing.",
    timeframe: "2-3 Days",
    focusDesc: "We set up secure server hosting, connect your domain DNS, and register your site on Google.",
    deliverables: [
      "Live domain connection",
      "SSL security certificate",
      "Google Console setup",
      "Google sitemap index"
    ],
    clientInput: [
      "Provide DNS access key",
      "Perform final checklist",
      "Approve site release"
    ]
  },
  {
    num: "07",
    title: "Growth & Support",
    desc: "We monitor speed performance, run backups, and update copy text.",
    longDesc: "We track system responsiveness, check security protocols, perform daily database backups, and implement monthly text adjustments to keep your digital shop running.",
    timeframe: "Continuous",
    focusDesc: "We check site uptime, secure daily backups, and make monthly text changes to keep your site fresh.",
    deliverables: [
      "Speed & uptime report",
      "Uptime security check",
      "Daily backup history",
      "Monthly text updates"
    ],
    clientInput: [
      "Send new text edits",
      "Read monthly reports",
      "Suggest growth ideas"
    ]
  }
];

export default function MethodTimeline() {
  const [activeStep, setActiveStep] = useState<string>("01");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const activeDetail = steps.find((s) => s.num === activeStep) || steps[0];
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      setActiveStep((prev) => {
        const currentIndex = steps.findIndex((s) => s.num === prev);
        const nextIndex = (currentIndex + 1) % steps.length;
        return steps[nextIndex].num;
      });
    }, 4500); // Cycle every 4.5 seconds

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPaused]);

  const handleStepSelect = (num: string) => {
    setActiveStep(num);
    setIsPaused(true); // Pause autoplay permanently once the user interacts
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch w-full min-h-[580px]">
      {/* Left Column: Headline (Top Row) & Interactive Details Pane (Centered vertically in remaining space) */}
      <div className="lg:col-span-1 flex flex-col justify-between self-stretch py-4 lg:py-6 w-full lg:sticky lg:top-24 lg:border-r lg:border-slate-200/80 lg:pr-16 text-left items-start h-full min-h-[520px]">
        {/* Top Left Section: Main Titles (Aligned left-to-right, positioned at the top) */}
        <div className="flex flex-col justify-start w-full text-left max-w-[500px] pb-6 space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-655 block font-mono">
            OUR METHOD
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Built to Convert.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium pt-3">
            We don&apos;t just design websites. We build clean, custom systems that turn your visitors into customers. By focusing on conversion psychology and optimized layouts, we ensure every element guides your audience toward taking action.
          </p>
        </div>

        {/* Bottom Left Section Wrapper: Centered vertically in the remaining Left Column space */}
        <div className="flex-1 w-full flex flex-col justify-center py-4">
          <div className="hidden lg:flex flex-col text-left w-full border border-slate-200/80 bg-white shadow-sm rounded-xl overflow-hidden">
            {/* Header Row: Stage Name */}
            <div className="w-full text-center py-4 bg-slate-50 border-b border-slate-200/80">
              <span className="text-[11px] font-bold text-slate-800 tracking-[0.2em] uppercase font-mono">
                Stage {activeDetail.num} Details
              </span>
            </div>

            {/* Columns Header Row */}
            <div className="grid grid-cols-3 border-b border-slate-200/80 bg-slate-50/50">
              <div className="py-3 px-6 font-bold text-[10px] text-slate-455 uppercase tracking-widest text-left">
                Things Covered
              </div>
              <div className="py-3 px-6 border-l border-r border-slate-200/80 font-bold text-[10px] text-slate-455 uppercase tracking-widest text-left">
                Stage Focus
              </div>
              <div className="py-3 px-6 font-bold text-[10px] text-slate-455 uppercase tracking-widest text-left">
                Client Input
              </div>
            </div>

            {/* Columns Content Row */}
            <div className="grid grid-cols-3 items-stretch min-h-[170px]">
              {/* Column 1: Things Covered Content */}
              <div className="p-6 flex flex-col justify-start text-left">
                <ul className="space-y-2.5 text-xs text-slate-655 font-medium text-left">
                  {activeDetail.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-left">
                      <span className="text-slate-400 shrink-0 font-mono text-[11px]">{idx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Stage Focus Content */}
              <div className="p-6 border-l border-r border-slate-200/80 flex flex-col justify-between text-left h-full">
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed text-left">
                  {activeDetail.focusDesc}
                </p>
                <div className="text-[9px] text-slate-455 font-bold uppercase tracking-widest pt-2 font-mono border-t border-slate-100 mt-4 text-left">
                  Duration: {activeDetail.timeframe}
                </div>
              </div>

              {/* Column 3: Client Input Content */}
              <div className="p-6 flex flex-col justify-start text-left">
                <ul className="space-y-2.5 text-xs text-slate-655 font-medium text-left">
                  {activeDetail.clientInput.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-left">
                      <span className="text-slate-455 shrink-0 select-none font-bold text-[12px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Process Timeline (Left-aligned relative to its container) */}
      <div className="lg:col-span-1 flex flex-col justify-start self-stretch py-4 lg:py-6 w-full lg:pl-16 h-full">
        <div className="w-full text-left">
          {steps.map((step, idx) => {
            const isActive = step.num === activeStep;
            return (
              <div
                key={step.num}
                onClick={() => handleStepSelect(step.num)}
                className="flex gap-6 items-start py-5 border-b border-slate-200/80 last:border-0 cursor-pointer group select-none transition-all duration-300"
                role="button"
                aria-expanded={isActive}
              >
                {/* Number */}
                <span
                  className={`text-2xl font-black select-none leading-none pt-1 min-w-[40px] transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                >
                  {step.num}
                </span>

                {/* Title & Desc */}
                <div className="space-y-1 text-left flex-1">
                  <h3
                    className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-800/80 group-hover:text-slate-900"
                      }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-300 ${isActive ? "text-slate-900 font-semibold" : "text-slate-500 group-hover:text-slate-755"
                      }`}
                  >
                    {step.desc}
                  </p>

                  {/* Mobile Fallback: Render deliverables inline when screen is small */}
                  {isActive && (
                    <div className="block lg:hidden mt-4 pt-4 border-t border-slate-100 space-y-3 animate-fade-in-up">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block font-mono">
                        Stage Deliverables
                      </span>

                      <div className="grid grid-cols-2 gap-4">
                        <ul className="space-y-2 text-sm text-slate-655 font-medium">
                          {step.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-slate-400 shrink-0 select-none">{dIdx + 1}.</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="space-y-1.5 pl-4 border-l border-slate-100 flex flex-col justify-between">
                          <div className="space-y-1">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                              Focus & Role
                            </span>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">
                              {step.focusDesc}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-slate-50 text-[9px] text-slate-455 font-medium">
                            <span className="font-bold uppercase tracking-wider block font-mono text-[8px] text-slate-455 mb-0.5">Key Client Action:</span>
                            {step.clientInput[0]}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
