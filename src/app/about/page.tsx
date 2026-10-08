import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import FullSection from "@/components/FullSection";
import SectionHeader from "@/components/SectionHeader";
import { btnPrimary, btnSecondary } from "@/lib/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Amrith Sheeja Jayan - Custom Systems Developer",
  description: "Amrith Sheeja Jayan builds custom websites for performance, ownership, and the next client call.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  { num: "01", title: "Eliminate noise", desc: "No bloated plugins, slow templates, or visual clutter that keeps someone from contacting you." },
  { num: "02", title: "Authority by design", desc: "The first screen has to look like the person they should hire. That decision happens in seconds." },
  { num: "03", title: "Revenue focus", desc: "Every layout choice points at the intake. Success is measured in leads, not page count." },
];

const SPECIALTIES = [
  { num: "01", name: "Digital architecture", desc: "Custom sites that display instantly on desktop and phone.", bold: "Sub-second load times." },
  { num: "02", name: "Lead integration", desc: "Inquiries save to your list the moment they send.", bold: "Zero lost leads." },
  { num: "03", name: "Conversion funnels", desc: "Type and layout that move a visitor toward a call or booking.", bold: "Every click has purpose." },
  { num: "04", name: "Absolute ownership", desc: "You get the files. No monthly builder rent.", bold: "You own everything." },
];

const HISTORY = [
  { year: "2026", title: "Independent web developer", desc: "High-conversion layouts and automated systems for business owners who want to own the stack." },
  { year: "2024", title: "Lead web developer", desc: "Custom software and secure database sync for live operations." },
  { year: "2022", title: "Web developer", desc: "Started in Canada, building lightweight sites that stay fast on phones." },
];

export default function About() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Amrith Sheeja Jayan - Custom Developer",
    description:
      "Amrith Sheeja Jayan builds high-performance custom Next.js websites and automated CRM systems from scratch. Focused on sub-second load times and zero platform lock-in fees.",
    mainEntity: {
      "@type": "Person",
      name: "Amrith Sheeja Jayan",
      jobTitle: "Web Developer",
      knowsAbout: ["Web Design", "CRM Integration", "Next.js", "PageSpeed Optimization"],
    },
  };

  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">About me</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Amrith Sheeja Jayan.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            I design and code fast, secure websites for growing businesses. You own the files. The site is built to get the next call.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <Link href="#philosophy" className={`${btnSecondary} w-full sm:w-auto`}>
              Read philosophy
            </Link>
            <Link href="/start" className={`${btnPrimary} w-full sm:w-auto`}>
              Start a project
            </Link>
          </div>
        </div>
      </HeroSection>

      <FullSection id="philosophy" bgClass="bg-cool-light">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                align="left"
                eyebrow="Philosophy"
                title="Business-first web design."
                lede="A website is a precision tool for revenue. Every decision should remove noise and make it obvious how to hire you."
              />
            </div>
            <ol className="lg:col-span-7">
              {PRINCIPLES.map((item, index) => (
                <li
                  key={item.num}
                  className={`flex gap-6 items-start py-6 ${index < PRINCIPLES.length - 1 ? "border-b border-slate-200" : ""}`}
                >
                  <span className="text-2xl font-black text-slate-600 leading-none min-w-[2.5rem] font-mono">{item.num}</span>
                  <div className="space-y-1 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </FullSection>

      <FullSection id="capabilities" bgClass="bg-warm-light">
        <div className="max-w-5xl mx-auto w-full space-y-16">
          <SectionHeader
            eyebrow="Specialties"
            title="What every build is for."
            lede="Four things I will not skip, whether the job is a marketing site or a private tool."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {SPECIALTIES.map((item, index) => (
              <div
                key={item.num}
                className={`p-8 lg:p-10 space-y-4 ${index < 2 ? "border-b border-slate-200" : ""} ${index % 2 === 0 ? "sm:border-r border-slate-200" : ""}`}
              >
                <span className="text-3xl font-black text-slate-600 block leading-none font-mono">{item.num}</span>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{item.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                <p className="text-sm text-slate-900 font-bold">{item.bold}</p>
              </div>
            ))}
          </div>
        </div>
      </FullSection>

      <FullSection id="timeline" bgClass="bg-cool-light">
        <div className="max-w-5xl mx-auto w-full space-y-12">
          <SectionHeader align="left" eyebrow="Journey" title="How I got here." />
          <div>
            {HISTORY.map((exp, index) => (
              <div
                key={exp.year}
                className={`grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-8 ${index < HISTORY.length - 1 ? "border-b border-slate-200" : ""}`}
              >
                <span className="sm:col-span-3 text-4xl sm:text-5xl font-black text-slate-900 leading-none tracking-tight">
                  {exp.year}
                </span>
                <div className="sm:col-span-9 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{exp.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FullSection>

      <FullSection bgClass="bg-warm-light">
        <div className="max-w-3xl mx-auto w-full text-center space-y-8">
          <SectionHeader
            eyebrow="Next"
            title="Tell me about the work."
            lede="Call, WhatsApp, or send the form. I reply within one business day with a fixed price."
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className={`${btnSecondary} w-full sm:w-auto`}>
              Ask a question
            </Link>
            <Link href="/start" className={`${btnPrimary} w-full sm:w-auto`}>
              Start a project
            </Link>
          </div>
        </div>
      </FullSection>
    </article>
  );
}
