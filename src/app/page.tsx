import React, { ReactNode } from "react";
import GravityBentoGrid from "@/components/GravityBentoGrid";
import HeroSection from "@/components/HeroSection";
import ThreeDGallery from "@/components/ThreeDGallery";
import ContactForm from "@/components/ContactForm";
import MethodTimeline from "@/components/MethodTimeline";
import RoiComparison from "@/components/RoiComparison";
import type { Metadata } from "next";
import Picture from "@/components/Picture";

export const metadata: Metadata = {
  title: "Amrith Sheeja Jayan - Web Developer",
  description: "High-performance websites designed to grow your business.",
  alternates: { canonical: "/" },
};

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28";

// Premium Button Styles
const btnPrimary = "inline-flex items-center justify-center rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] min-w-[220px]";
const btnSecondary = "inline-flex items-center justify-center rounded border-2 border-slate-900 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-50 active:scale-[0.98] min-w-[220px]";



function FullSection({ children, bgClass, id }: { children: ReactNode; bgClass: string; id?: string }) {
  return (
    <section
      id={id}
      className={`full-section relative py-14 sm:py-16 lg:py-20 xl:py-24 ${bgClass} border-b border-gray-100 scroll-mt-[var(--navbar-h)]`}
    >
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}


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
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
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
            <a href="#projects" className={`${btnSecondary} w-full sm:w-auto`}>
              See My Work
            </a>
            <a href="/contact" className={`${btnPrimary} w-full sm:w-auto`}>
              Start Your Project
            </a>
          </div>
        </div>
      </HeroSection>

      {/* 2. SECTION 2: SERVICES OVERVIEW (Cool Slate) */}
      <FullSection id="services" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full text-center space-y-12 lg:space-y-16 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
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
              <a
                href={`/services#${srv.id}`}
                key={srv.num}
                className="bg-white p-6 lg:p-8 xl:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-4 relative hover:shadow-md hover:-translate-y-1 transition-all duration-300 block text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600 block tracking-widest">{srv.num}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider group-hover:text-muted transition-colors">{srv.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{srv.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </FullSection>

      {/* 3. SECTION 3: SELECTED PROJECTS (Warm Sand) */}
      <FullSection id="projects" bgClass="bg-warm-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-2 flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
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

      {/* 4. SECTION 4: HOW WE WORK */}
      <FullSection id="method" bgClass="bg-cool-light">
        <MethodTimeline />
      </FullSection>

      {/* 5. SECTION 5: CUSTOM VS TEMPLATE COMPARISON (Warm Sand) */}
      <FullSection id="roi" bgClass="bg-warm-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
              THE DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Template vs. Custom.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              See why a hand-coded website outperforms page builders and pre-made themes on every metric that matters.
            </p>
          </div>

          <RoiComparison />

          {/* CTA */}
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#services" className={btnSecondary}>
              See How We Do It
            </a>
            <a href="/contact" className={btnPrimary}>
              Start Your Project
            </a>
          </div>
        </div>
      </FullSection>

      {/* 6. SECTION 6: WHAT YOUR BUSINESS GETS (Cool Slate) */}
      <FullSection id="what" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          <div className="flex flex-col items-center text-center gap-6 border-b border-slate-200 pb-8 max-w-3xl mx-auto w-full">
            <div className="space-y-4 w-full">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
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
                  <Picture
                    src="/founder.webp"
                    alt="Portrait of Amrith Sheeja Jayan, founder and lead systems developer"
                    width={800}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-black tracking-tight text-slate-900">
                    Amrith Sheeja Jayan
                  </h3>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest block">
                    Founder / Lead Systems Developer
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Key Pillars */}
            <div className="lg:col-span-7 space-y-8 text-left h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
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
                <a href="/about" className={`${btnSecondary} w-full sm:w-auto text-center`}>
                  Read My Story
                </a>
                <a href="/contact" className={`${btnPrimary} w-full sm:w-auto text-center`}>
                  Start Your Project
                </a>
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
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            <div className="bg-white p-7 lg:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full space-y-8">
              <p className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight flex-1">
                &ldquo;Our new website opens instantly. Customer inquiries rose by 80% almost immediately. We went from getting three calls a week to getting three calls a day.&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-slate-100 shrink-0">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-sm font-black">MV</div>
                <div className="min-w-0">
                  <span className="text-sm font-bold text-slate-900 block uppercase tracking-wider">Marcus V.</span>
                  <span className="text-[10px] font-semibold text-slate-600 block uppercase tracking-widest whitespace-nowrap truncate">Business Owner</span>
                </div>
              </footer>
            </div>

            <div className="bg-white p-7 lg:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full space-y-8">
              <p className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight flex-1">
                &ldquo;Inquiries go straight to our phones now. Our customer calls doubled within 30 days. The custom CRM eliminated hours of manual data entry every single week.&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-slate-100 shrink-0">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-sm font-black">DK</div>
                <div className="min-w-0">
                  <span className="text-sm font-bold text-slate-900 block uppercase tracking-wider">David K.</span>
                  <span className="text-[10px] font-semibold text-slate-600 block uppercase tracking-widest whitespace-nowrap truncate">Local Business Owner</span>
                </div>
              </footer>
            </div>

            <div className="bg-white p-7 lg:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full space-y-8">
              <p className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight flex-1">
                &ldquo;The CRM saves us hours every week. We never lose a lead, and our response time dropped from hours to minutes. It is the best investment we have made this year.&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-slate-100 shrink-0">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-sm font-black">SL</div>
                <div className="min-w-0">
                  <span className="text-sm font-bold text-slate-900 block uppercase tracking-wider">Sarah L.</span>
                  <span className="text-[10px] font-semibold text-slate-600 block uppercase tracking-widest whitespace-nowrap truncate">Service Company</span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 9. SECTION 9a: MESSAGE FORM (Warm Sand) */}
      <FullSection id="contact" bgClass="bg-warm-light">
        <div className="max-w-[1500px] mx-auto w-full relative z-10">
          <div className="text-center space-y-3 flex flex-col items-center mb-8 lg:mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
              COMMUNICATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Project Brief.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <aside className="hidden lg:flex lg:col-span-3 flex-col justify-between py-1">
              {[
                { num: "01", label: "Timing", text: "A reply in one business day." },
                { num: "02", label: "Price", text: "A fixed quote after this brief." },
                { num: "03", label: "Files", text: "You own the production code." },
              ].map((item) => (
                <div key={item.num} className="relative">
                  <span className="text-5xl font-black text-slate-200 leading-none select-none block" aria-hidden="true">
                    {item.num}
                  </span>
                  <div className="-mt-4 space-y-1">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">{item.label}</h3>
                    <p className="text-sm text-slate-600 font-medium leading-snug line-clamp-2 min-h-[2.5rem]">{item.text}</p>
                  </div>
                </div>
              ))}
            </aside>

            <div className="lg:col-span-6 w-full">
              <ContactForm />
            </div>

            <aside className="hidden lg:flex lg:col-span-3 flex-col justify-between py-1 text-right">
              {[
                { num: "04", label: "Build", text: "Four weeks from the first call." },
                { num: "05", label: "Next", text: "Submit the brief, get a plan." },
                { num: "06", label: "Direct", text: "Book a time on the pricing page." },
              ].map((item) => (
                <div key={item.num} className="relative">
                  <span className="text-5xl font-black text-slate-200 leading-none select-none block" aria-hidden="true">
                    {item.num}
                  </span>
                  <div className="-mt-4 space-y-1">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">{item.label}</h3>
                    <p className="text-sm text-slate-600 font-medium leading-snug line-clamp-2 min-h-[2.5rem]">{item.text}</p>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </FullSection>
    </article>
  );
}
