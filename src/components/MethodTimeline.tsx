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

export default function MethodTimeline() {
  const [activeStep, setActiveStep] = useState<string>("01");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    }, 4500);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPaused]);

  useEffect(() => {
    const handleDocumentClick = () => {
      if (isPaused) {
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
          setIsPaused(false);
          resumeTimerRef.current = null;
        }, 5000);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [isPaused]);

  const handleStepSelect = (num: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setActiveStep(num);
    setIsPaused(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch w-full min-h-[580px]">
      <div className="lg:col-span-1 flex flex-col justify-between self-stretch py-4 lg:py-6 w-full lg:sticky lg:top-24 lg:border-r lg:border-slate-200/80 lg:pr-16 text-left items-start h-full min-h-[520px]">
        <div className="flex flex-col justify-start w-full text-left max-w-[500px] pb-6 space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block font-mono">
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
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] font-mono border-b border-slate-100 pb-2.5 block">
                        Things Covered
                      </span>
                      <ul className="space-y-2 text-[13px] text-slate-600 font-medium leading-relaxed">
                        {step.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-slate-400 font-mono text-[10px] shrink-0 pt-0.5">
                              {String(dIdx + 1).padStart(2, "0")}.
                            </span>
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono pt-3 border-t border-slate-100 block">
                      Timeline: {step.timeframe}
                    </span>
                  </div>
                );
              })}
              <div className="absolute bottom-0 left-0 h-[3px] bg-slate-100 w-full overflow-hidden">
                <div
                  key={activeStep + "_" + isPaused}
                  className="h-full bg-slate-900/40 rounded-full"
                  style={{
                    width: isPaused ? "0%" : undefined,
                    animation: isPaused ? undefined : "progressRun 4.5s linear forwards",
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
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] font-mono border-b border-slate-100 pb-2 block">
                          What We Do
                        </span>
                        <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                          {step.focusDesc}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono pt-3 border-t border-slate-100 block">
                        Result: {step.result}
                      </span>
                    </div>
                  );
                })}
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-slate-100 w-full overflow-hidden">
                  <div
                    key={activeStep + "_" + isPaused}
                    className="h-full bg-slate-900/40 rounded-full"
                    style={{
                      width: isPaused ? "0%" : undefined,
                      animation: isPaused ? undefined : "progressRun 4.5s linear forwards",
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
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] font-mono border-b border-slate-100 pb-2 block">
                          Your Part
                        </span>
                        <ul className="space-y-2 text-[13px] text-slate-600 font-medium leading-relaxed">
                          {step.clientInput.map((input, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2">
                              <span className="text-slate-400 font-mono text-[10px] shrink-0 pt-0.5">•</span>
                              <span className="text-slate-700">{input}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono pt-3 border-t border-slate-100 block">
                        Next Step: {step.nextStep}
                      </span>
                    </div>
                  );
                })}
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-slate-100 w-full overflow-hidden">
                  <div
                    key={activeStep + "_" + isPaused}
                    className="h-full bg-slate-900/40 rounded-full"
                    style={{
                      width: isPaused ? "0%" : undefined,
                      animation: isPaused ? undefined : "progressRun 4.5s linear forwards",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1 flex flex-col justify-start self-stretch py-4 lg:py-6 w-full lg:pl-16 h-full">
        <div className="w-full text-left">
          {steps.map((step) => {
            const isActive = step.num === activeStep;
            return (
              <div
                key={step.num}
                onClick={(e) => handleStepSelect(step.num, e)}
                className="flex gap-6 items-start py-5 border-b border-slate-200/80 last:border-0 cursor-pointer group select-none transition-all duration-300"
                role="button"
                aria-expanded={isActive}
              >
                <span
                  className={`text-2xl font-black select-none leading-none pt-1 min-w-[40px] transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                >
                  {step.num}
                </span>

                <div className="space-y-1 text-left flex-1">
                  <h3
                    className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-800/80 group-hover:text-slate-900"
                      }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-300 ${isActive ? "text-slate-900 font-semibold" : "text-slate-500 group-hover:text-slate-700"
                      }`}
                  >
                    {step.desc}
                  </p>

                  {isActive && (
                    <div className="block lg:hidden mt-4 pt-4 border-t border-slate-100 space-y-3 animate-timeline-switch">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block font-mono">
                        Things Covered
                      </span>

                      <div className="grid grid-cols-2 gap-4">
                        <ul className="space-y-2 text-sm text-slate-600 font-medium">
                          {step.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-slate-400 shrink-0 select-none">
                                {String(dIdx + 1).padStart(2, "0")}.
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="space-y-1.5 pl-4 border-l border-slate-100 flex flex-col justify-between">
                          <div className="space-y-1">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                              What We Do
                            </span>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">
                              {step.focusDesc}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-slate-50 text-[9px] text-slate-500 font-medium">
                            <span className="font-bold uppercase tracking-wider block font-mono text-[8px] text-slate-500 mb-0.5">Next Step:</span>
                            {step.nextStep}
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
