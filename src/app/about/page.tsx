import Link from "next/link";
import React, { ReactNode } from "react";

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
      className={`min-h-[100svh] flex items-center justify-center relative py-24 ${bgClass} border-b border-gray-100`}
    >
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

export default function About() {
  const capabilities = [
    { name: "Digital Architecture", desc: "Fast, custom websites designed to display instantly on desktop and mobile phones." },
    { name: "Lead Integration", desc: "Saving contact inquiries directly to your CRM, keeping your sales flow completely organized." },
    { name: "Conversion Funnels", desc: "Structuring typography and layouts to guide visitors effortlessly toward phone calls and bookings." },
    { name: "Absolute Ownership", desc: "Delivering all assets directly to your control with zero ongoing platform subscription fees." },
  ];

  const experience = [
    { year: "2026", title: "Independent Web Engineer", desc: "Designing high-conversion layouts and engineering automated systems for elite business owners." },
    { year: "2024", title: "Lead Web Developer", desc: "Engineered fast custom software and secure database synchronization architectures." },
    { year: "2022", title: "Web Developer", desc: "Began building websites in Canada, focused on lightweight code and flawless performance." },
  ];

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">

      {/* SECTION 1: HERO (Pure White) */}
      <HeroSection bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            <span className="block md:inline">Amrith </span>
            <span className="block md:inline">Sheeja </span>
            <span className="block md:inline">Jayan</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
            I build high-performance custom websites. I do not build templates. I construct clean, fast digital platforms that command authority and capture leads effortlessly.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
              Start Your Project
            </Link>
            <Link href="#philosophy" className={`${btnSecondary} w-full sm:w-auto`}>
              Read Philosophy
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* SECTION 2: PHILOSOPHY (Slate 50) */}
      <FullSection id="philosophy" bgClass="bg-cool-light">
        <div className="flex flex-col text-center items-center max-w-3xl mx-auto space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            PHILOSOPHY
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Business-First Web Design.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            I treat website design as a precision instrument. We eliminate visual noise, bloated plugins, and slow template features to prioritize the only metric that matters: elevating your brand authority and converting your visitors into revenue.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link href="#capabilities" className={`${btnPrimary} w-full sm:w-auto`}>
              Explore Capabilities
            </Link>
            <Link href="/contact" className={`${btnSecondary} w-full sm:w-auto`}>
              Discuss Strategy
            </Link>
          </div>
        </div>
      </FullSection>

      {/* SECTION 3: CAPABILITIES GRID (White) */}
      <FullSection id="capabilities" bgClass="bg-warm-light">
        <div className="space-y-20 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              SPECIALTIES
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Elite Execution.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {capabilities.map((item, index) => (
              <div
                key={item.name}
                className="flex flex-col items-center text-center space-y-4 p-8 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-black text-lg shadow-sm">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link href="#timeline" className={`${btnPrimary} w-full sm:w-auto mx-auto sm:mx-0`}>
              View Journey
            </Link>
          </div>
        </div>
      </FullSection>

      {/* SECTION 4: TIMELINE (Slate 50) */}
      <FullSection id="timeline" bgClass="bg-cool-light">
        <div className="space-y-20 max-w-4xl mx-auto w-full">
          <div className="text-center max-w-xl mx-auto space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              JOURNEY
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Professional History.
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
            {experience.map((exp) => (
              <div key={exp.year} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-slate-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-[10px] font-bold">{exp.year.slice(-2)}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-widest block mb-2">{exp.year}</span>
                  <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-2">{exp.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto text-center">
            <Link href="/#pricing" className={`${btnPrimary} w-full sm:w-auto mx-auto`}>
              Reserve Architecture Slot
            </Link>
          </div>
        </div>
      </FullSection>

      {/* SECTION 5: CTA (White) */}
      <FullSection bgClass="bg-warm-light">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
            INITIATE
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Let's Build Your Pipeline.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium max-w-xl mx-auto">
            Ready to deploy an elite, custom digital architecture that effortlessly converts your visitors? Review our intake process or message me directly.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link href="/#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
              Submit Requirements
            </Link>
            <Link href="/contact" className={`${btnSecondary} w-full sm:w-auto`}>
              Direct Contact
            </Link>
          </div>
        </div>
      </FullSection>
    </div>
  );
}
