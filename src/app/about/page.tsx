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
      className={`full-section relative py-12 sm:py-16 ${bgClass} border-b border-gray-100`}
    >
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

export default function About() {

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

      {/* SECTION 2: PHILOSOPHY (Split — Left Text / Right Principles) */}
      <FullSection id="philosophy" bgClass="bg-cool-light">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Business-First Web Design.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                I treat website design as a precision instrument for revenue. Every decision eliminates noise and prioritizes conversions. We strip away everything that does not directly serve your bottom line.
              </p>

            </div>

            {/* Right: Numbered Principles with Dividers */}
            <div className="lg:col-span-7 space-y-0">
              {[
                { num: "01", title: "Eliminate Noise", desc: "We strip away bloated plugins, slow templates, and visual clutter that distract visitors from contacting you." },
                { num: "02", title: "Authority by Design", desc: "Premium visual design positions your brand as the trusted expert in your market. First impressions happen in seconds." },
                { num: "03", title: "Revenue Focus", desc: "Every layout decision is made to guide visitors toward your intake form. We measure success by leads generated." }
              ].map((item, idx) => (
                <div key={item.num} className={`flex gap-6 items-start py-6 ${idx < 2 ? 'border-b border-slate-200' : ''}`}>
                  <span className="text-2xl font-black text-slate-300 select-none leading-none pt-1 min-w-[40px]">{item.num}</span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FullSection>

      {/* SECTION 3: CAPABILITIES (Warm Light bg — 2x2 Grid) */}
      <FullSection id="capabilities" bgClass="bg-warm-light">
        <div className="max-w-5xl mx-auto w-full space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              SPECIALTIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Elite Execution.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              Four core capabilities that set our work apart from generic agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {[
              { num: "01", name: "Digital Architecture", desc: "Fast, custom websites designed to display instantly on desktop and mobile phones.", bold: "Sub-second load times." },
              { num: "02", name: "Lead Integration", desc: "Saving contact inquiries directly to your CRM, keeping your sales flow completely organized.", bold: "Zero lost leads." },
              { num: "03", name: "Conversion Funnels", desc: "Structuring typography and layouts to guide visitors effortlessly toward phone calls and bookings.", bold: "Every click has purpose." },
              { num: "04", name: "Absolute Ownership", desc: "Delivering all assets directly to your control with zero ongoing platform subscription fees.", bold: "You own everything." }
            ].map((item, idx) => (
              <div
                key={item.num}
                className={`p-8 lg:p-10 space-y-4 ${idx < 2 ? 'border-b border-slate-200' : ''} ${idx % 2 === 0 ? 'sm:border-r border-slate-200' : ''}`}
              >
                <span className="text-3xl font-black text-slate-600 block leading-none">{item.num}</span>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{item.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                <p className="text-xs sm:text-sm text-slate-900 font-bold">{item.bold}</p>
              </div>
            ))}
          </div>


        </div>
      </FullSection>

      {/* SECTION 4: TIMELINE (Horizontal Stacked Rows) */}
      <FullSection id="timeline" bgClass="bg-cool-light">
        <div className="max-w-5xl mx-auto w-full space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Professional History.
            </h2>
          </div>

          <div className="space-y-0">
            {[
              { year: "2026", title: "Independent Web Developer", desc: "Designing high-conversion layouts and developing automated systems for elite business owners." },
              { year: "2024", title: "Lead Web Developer", desc: "Developed fast custom software and secure database synchronization architectures." },
              { year: "2022", title: "Web Developer", desc: "Began building websites in Canada, focused on lightweight code and flawless performance." }
            ].map((exp, idx) => (
              <div key={exp.year} className={`grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-8 ${idx < 2 ? 'border-b border-slate-200' : ''}`}>
                <div className="sm:col-span-3">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 block leading-none tracking-tight">{exp.year}</span>
                </div>
                <div className="sm:col-span-9 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">{exp.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </FullSection>

      {/* SECTION 5: CTA (Full-Width Centered Editorial) */}
      <FullSection bgClass="bg-warm-light">
        <div className="max-w-3xl mx-auto w-full text-center space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
            INITIATE
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Let&apos;s Build Your Pipeline.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium max-w-xl mx-auto">
            Ready to deploy a custom digital platform that converts visitors into paying clients? Review our intake process or message me directly.
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
