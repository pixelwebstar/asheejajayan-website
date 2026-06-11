import Link from "next/link";
import Image from "next/image";
import React, { ReactNode } from "react";
import GravityBentoGrid from "@/components/GravityBentoGrid";
import HeroSection from "@/components/HeroSection";
import ThreeDGallery from "@/components/ThreeDGallery";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amrith Sheeja Jayan - Web Developer",
  description: "High-performance websites designed to grow your business.",
};

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-16";

// Premium Button Styles
const btnPrimary = "inline-flex items-center justify-center rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] min-w-[220px]";
const btnSecondary = "inline-flex items-center justify-center rounded border-2 border-slate-900 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-50 active:scale-[0.98] min-w-[220px]";



function FullSection({ children, bgClass, id, bgImage }: { children: ReactNode; bgClass: string; id?: string; bgImage?: string }) {
  return (
    <section
      id={id}
      className={`full-section relative py-20 lg:py-32 ${bgClass} border-b border-gray-100 overflow-hidden`}
    >
      {bgImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-45 pointer-events-none"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />
      )}
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

const criteriaData = [
  {
    id: "speed",
    title: "Loading Speed",
    standard: {
      value: "Slow",
      impact: "Causes client drop-off"
    },
    custom: {
      value: "Instant",
      impact: "Zero client delay, higher conversion"
    }
  },
  {
    id: "fees",
    title: "Monthly Fees",
    standard: {
      value: "Ongoing",
      impact: "Locked in forever"
    },
    custom: {
      value: "None",
      impact: "You own hosting & code"
    }
  },
  {
    id: "layout",
    title: "Design Layout",
    standard: {
      value: "Generic",
      impact: "Generic layouts"
    },
    custom: {
      value: "Bespoke",
      impact: "Custom conversion architecture"
    }
  },
  {
    id: "ownership",
    title: "Code Ownership",
    standard: {
      value: "Locked",
      impact: "Platform dependency & lock-in"
    },
    custom: {
      value: "Full Ownership",
      impact: "Complete source files, no rent"
    }
  },
  {
    id: "security",
    title: "Security Risks",
    standard: {
      value: "Vulnerable",
      impact: "High plugin dependencies"
    },
    custom: {
      value: "Bulletproof",
      impact: "Static code, no databases"
    }
  }
];

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Amrith Sheeja Jayan - Custom Web Developer",
    "description": "High-performance custom Next.js websites and CRM software built for small business growth. Load times under 0.3s. No templates, no page builders.",
    "publisher": {
      "@type": "Person",
      "name": "Amrith Sheeja Jayan"
    }
  };

  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* 1. SECTION 1: THE HERO (Warm Sand) */}
      <HeroSection id="hero" bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              PORTFOLIO
            </span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Websites built for business growth.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            We design and code high-performance websites that help business owners win more clients and automate customer follow-ups.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <Link href="#projects" className={`${btnSecondary} w-full sm:w-auto`}>
              See My Work
            </Link>
            <Link href="/contact" className={`${btnPrimary} w-full sm:w-auto`}>
              Start Your Project
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* 2. SECTION 2: SERVICES OVERVIEW (Cool Slate) */}
      <FullSection id="services" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full text-center space-y-12 lg:space-y-16 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Websites and Web Applications.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              We design and code custom web systems that run fast, capture leads, and automate your sales pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full text-left">
            {[
              { num: "01", name: "Websites", desc: "Custom-built marketing websites designed to load instantly and make your business look highly professional.", id: "websites" },
              { num: "02", name: "Web Apps", desc: "Private customer portals, booking systems, and internal tools custom-made for your daily business operations.", id: "web-apps" },
              { num: "03", name: "CRM Software", desc: "Forms that automatically save lead details into your customer database so you never lose inquiries.", id: "crm-software" },
              { num: "04", name: "Google Business and Map", desc: "Optimizing your Google maps listing so you show up first when customers search locally.", id: "google-map" },
              { num: "05", name: "Google Ads", desc: "Targeted campaigns that show your business to active customers who are looking to hire you today.", id: "google-ads" },
              { num: "06", name: "Support & Operations", desc: "Daily database backups, performance monitoring, and content updates so you never worry about tech.", id: "support-ops" }
            ].map((srv) => (
              <Link
                href={`/services#${srv.id}`}
                key={srv.num}
                className="bg-white p-8 xl:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-4 relative hover:shadow-md hover:-translate-y-1 transition-all duration-300 block text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 block tracking-widest">{srv.num}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider group-hover:text-muted transition-colors">{srv.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{srv.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </FullSection>

      {/* 3. SECTION 3: SELECTED PROJECTS (Warm Sand) */}
      <FullSection id="projects" bgClass="bg-warm-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-2 flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              SELECTED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Real Projects. Real Outcomes.
            </h2>
          </div>
          <div className="w-full pt-4">
            <ThreeDGallery />
          </div>
        </div>
      </FullSection>

      {/* 4. SECTION 4: HOW (Cool Slate - Split Timeline Layout) */}
      <FullSection id="method" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Left Column: Headline */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2 lg:py-6 text-center lg:text-left items-center lg:items-start w-full">
              <div className="space-y-6 max-w-sm mx-auto lg:mx-0 w-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                  OUR METHOD
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                  Built to Convert.
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-sm mx-auto lg:mx-0">
                  We don&apos;t just design websites. We build clean, custom systems that turn your visitors into customers.
                </p>
              </div>
            </div>

            {/* Right Column: Process Timeline */}
            <div className="lg:col-span-7 space-y-0">
              {[
                { num: "01", title: "Discovery Call", desc: "We learn your business goals, target customers, and what success looks like for you." },
                { num: "02", title: "Strategy & Layout", desc: "We map the page structure and conversion flow before writing a single line of code." },
                { num: "03", title: "Custom Design", desc: "Your brand identity is translated into a clean, premium visual design you approve." },
                { num: "04", title: "Code & Build", desc: "We hand-code your site from scratch. No templates, no page builders, no bloat." },
                { num: "05", title: "Launch & Support", desc: "Your site goes live with backups, monitoring, and ongoing content support included." }
              ].map((step, idx) => (
                <div key={step.num} className={`flex gap-6 items-start py-6 ${idx < 4 ? 'border-b border-slate-200' : ''}`}>
                  <span className="text-2xl font-black text-slate-355 select-none leading-none pt-1 min-w-[40px]">{step.num}</span>
                  <div className="space-y-1 text-left">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FullSection>

      {/* 5. SECTION 5: CUSTOM VS TEMPLATE COMPARISON (Warm Sand) */}
      <FullSection id="roi" bgClass="bg-warm-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              THE DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Template vs. Custom.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              See why a hand-coded website outperforms page builders and pre-made themes on every metric that matters.
            </p>
          </div>

          {/* Criteria Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[1400px] mx-auto items-stretch">
            {/* Standard Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="text-center border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">OLD STANDARD</span>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mt-1">Standard Build</h3>
              </div>
              <div className="space-y-4 flex-1">
                {criteriaData.map((crit) => (
                  <div key={crit.id} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start border-b border-slate-50 last:border-0 pb-4 last:pb-0">
                    <div className="sm:col-span-4 shrink-0">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block pt-0.5">{crit.title}</span>
                    </div>
                    <div className="sm:col-span-4 text-left">
                      <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest block sm:hidden mb-0.5">Value</span>
                      <div className="text-xs font-bold text-slate-800">{crit.standard.value}</div>
                    </div>
                    <div className="sm:col-span-4 text-left">
                      <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest block sm:hidden mb-0.5">Impact</span>
                      <div className="text-[11px] text-slate-500 font-medium leading-relaxed">{crit.standard.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Card */}
            <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-850 shadow-md space-y-6 text-white relative flex flex-col justify-between">
              <div className="text-center border-b border-slate-800 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">NEW STANDARD</span>
                <h3 className="text-lg font-black text-white uppercase tracking-widest mt-1">Custom Build</h3>
              </div>
              <div className="space-y-4 flex-1">
                {criteriaData.map((crit) => (
                  <div key={crit.id} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start border-b border-slate-800 last:border-0 pb-4 last:pb-0">
                    <div className="sm:col-span-4 shrink-0">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block pt-0.5">{crit.title}</span>
                    </div>
                    <div className="sm:col-span-4 text-left">
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block sm:hidden mb-0.5">Value</span>
                      <div className="text-xs font-bold text-white">{crit.custom.value}</div>
                    </div>
                    <div className="sm:col-span-4 text-left">
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block sm:hidden mb-0.5">Impact</span>
                      <div className="text-[11px] text-slate-300 font-medium leading-relaxed">{crit.custom.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#services" className={btnSecondary}>
              See How We Do It
            </Link>
            <Link href="/contact" className={btnPrimary}>
              Start Your Project
            </Link>
          </div>
        </div>
      </FullSection>

      {/* 6. SECTION 6: WHAT YOUR BUSINESS GETS (Cool Slate) */}
      <FullSection id="what" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          <div className="flex flex-col items-center text-center gap-6 border-b border-slate-200 pb-8 max-w-3xl mx-auto w-full">
            <div className="space-y-4 w-full">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                THE SYSTEM
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
                What Your Business Gets.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
                Every website we build is an automated lead-capture system. Here is exactly how it works to scale your operations.
              </p>
            </div>
          </div>

          {/* Gravity Bento Grid */}
          <GravityBentoGrid />
        </div>
      </FullSection>

      {/* 7. SECTION 7: FOUNDER'S MANIFESTO (Warm Sand) */}
      <FullSection id="manifesto" bgClass="bg-warm-light">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Portrait Card */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
              <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5 lg:space-y-6 w-full max-w-sm lg:max-w-[440px] text-center">
                <div className="w-full aspect-square bg-slate-100 border border-slate-200 rounded-2xl relative select-none overflow-hidden shadow-xs">
                  <Image
                    src="/founder.webp"
                    alt="Amrith Sheeja Jayan Portrait"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 440px"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-black tracking-tight text-slate-900">
                    Amrith Sheeja Jayan
                  </h3>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                    Founder / Lead Systems Developer
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Key Pillars */}
            <div className="lg:col-span-7 space-y-8 text-left h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">
                    MANIFESTO / THE STANDARDS
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                    Built to Perform. <br />Zero Compromise.
                  </h2>
                </div>

                <div className="space-y-6 pt-2">
                  {[
                    {
                      title: "Zero Platform Retainers",
                      desc: "I hand-code web applications and databases from scratch. No monthly Squarespace or Shopify builder subscriptions. You own 100% of your production files."
                    },
                    {
                      title: "Sub-0.3s Performance",
                      desc: "Page builders load massive script packages that drive away mobile buyers. We use lightweight code to guarantee instant rendering on every screen."
                    },
                    {
                      title: "Conversion-Rate Architecture",
                      desc: "We analyze competitor traffic, design clear call-to-actions, and build automated lead databases so your site works 24/7 as a sales engine."
                    }
                  ].map((pillar) => (
                    <div key={pillar.title} className="space-y-1.5 border-l-2 border-slate-900 pl-4 py-0.5">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">{pillar.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-5 justify-start w-full sm:w-auto">
                <Link href="/about" className={`${btnSecondary} w-full sm:w-auto text-center`}>
                  Read My Story
                </Link>
                <Link href="/contact" className={`${btnPrimary} w-full sm:w-auto text-center`}>
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 8. SECTION 8: CLIENT TESTIMONIALS (Cool Slate) */}
      <FullSection id="reviews" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          {/* Centered Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              CLIENT RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              What Our Clients Achieve.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              Real feedback from business owners who upgraded their digital performance.
            </p>
          </div>

          {/* 3-Column Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Column 1 */}
            <div className="md:mt-12 bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <p className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight">
                &ldquo;Our new website opens instantly. Customer inquiries rose by 80% almost immediately. We went from getting three calls a week to getting three calls a day.&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-sm font-black">MV</div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block uppercase tracking-wider">Marcus V.</span>
                  <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-widest">Business Owner</span>
                </div>
              </footer>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <p className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight">
                &ldquo;Inquiries go straight to our phones now. Our customer calls doubled within 30 days. The custom CRM eliminated hours of manual data entry every single week.&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-sm font-black">DK</div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block uppercase tracking-wider">David K.</span>
                  <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-widest">Local Business Owner</span>
                </div>
              </footer>
            </div>

            {/* Column 3 */}
            <div className="md:mt-24 bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <p className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight">
                &ldquo;The CRM saves us hours every week. We never lose a lead and our response time dropped from hours to minutes. It&apos;s the best investment we&apos;ve made.&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 text-sm font-black">SL</div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block uppercase tracking-wider">Sarah L.</span>
                  <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-widest">Service Company</span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 9. SECTION 9a: MESSAGE FORM (Warm Sand) */}
      <FullSection id="contact" bgClass="bg-warm-light">
        <div className="space-y-12 max-w-3xl mx-auto w-full relative z-10">
          <div className="text-center space-y-6 flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              COMMUNICATION
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Project Brief.
            </h2>
          </div>

          <ContactForm />
        </div>
      </FullSection>
    </article>
  );
}
