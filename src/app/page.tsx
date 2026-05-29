"use client";

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
      className={`min-h-[100svh] flex items-center justify-center relative py-12 sm:py-16 lg:py-20 ${bgClass} border-b border-gray-100`}
    >
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">

      {/* 0. SECTION 0: THE HERO */}
      <HeroSection bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Websites Built for Business Growth.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
            No templates. No clutter. Just custom digital platforms designed to turn your traffic into qualified leads.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
              Start Your Project
            </Link>
            <Link href="# pricing" className={`${btnSecondary} w-full sm:w-auto`}>
              See How We Do It
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* 1. SECTION 1: SERVICES (The "What" Grid) */}
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

      {/* 2. SECTION 2: WHY (Business Need — Clean Split) */}
      <FullSection id="why" bgClass="bg-warm-light">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column (Focal Heading) */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                WHY A WEBSITE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Why Your Business Needs a Website.
              </h2>
              <div className="w-16 h-1 bg-slate-900"></div>
            </div>

            {/* Right Column (Editorial Copy) */}
            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
                Your website is your active business partner, representing your brand and building customer trust 24/7. It is the first place clients look to verify your credibility.
              </p>
              <p className="text-sm leading-relaxed text-slate-500 font-medium">
                A custom-built design establishes instant authority and guides visitors directly to your services. It works continuously to turn traffic into bookings.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link href="#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
                  Start Your Project
                </Link>
                <Link href="#services" className={`${btnSecondary} w-full sm:w-auto`}>
                  See Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 3. SECTION 3: HOW (Frictionless Path — Clean Split) */}
      <FullSection id="how" bgClass="bg-cool-light">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading & Summary */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                OUR METHOD
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-[1.1]">
                How We Build Your Business Growth.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                We replace generic templates with custom layouts that present your value with absolute clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
                  Design Your Path
                </Link>
              </div>
            </div>

            {/* Right Column: Three Stacked Value Rows */}
            <div className="lg:col-span-7 space-y-8">
              {[
                { title: "Frictionless Path", desc: "Clean layouts with clear visual flow that guide visitors directly to your intake form, eliminating distraction." },
                { title: "Brand Positioning", desc: "Custom visual design engineered to represent your business as a trusted, premium authority." },
                { title: "Pure Reliability", desc: "Zero database bloat or plugin security risks, ensuring consistent performance." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                  <span className="text-xs font-bold text-slate-400 select-none">0{idx + 1}</span>
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

      {/* 4. SECTION 4: WHAT (Lead Intake — Horizontal Timeline) */}
      <FullSection id="what" bgClass="bg-warm-light">
        <div className="max-w-5xl mx-auto w-full space-y-12 lg:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              THE VALUE DELIVERED
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              What Your Business Gets.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              We deliver a custom client acquisition system that connects your brand directly to active leads, working continuously to build your pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
            {[
              { num: "01", name: "Client Submits", desc: "A prospect fills out the simple form on your website with their goals and contact info." },
              { num: "02", name: "Instant Save", desc: "The system automatically saves their information securely into your database so it never gets lost." },
              { num: "03", name: "Phone Alert", desc: "You get an instant notification on your phone, letting you call them back immediately before they go to a competitor." }
            ].map((step) => (
              <div 
                key={step.num} 
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 relative hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 block tracking-widest">{step.num} / PROCESS</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">{step.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
              Automate Your Leads
            </Link>
            <Link href="#pricing" className={`${btnSecondary} w-full sm:w-auto`}>
              CRM Details
            </Link>
          </div>
        </div>
      </FullSection>

      {/* 5. SECTION 5: CLIENT REVIEWS (Testimonials — Editorial Layout) */}
      <FullSection id="reviews" bgClass="bg-cool-light">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column (Focal Heading) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                SOCIAL PROOF
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                What our clients achieve.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                We focus entirely on outcomes. By removing technical friction and aligning visual hierarchy, we help brands double their conversion rates and automate operations.
              </p>
              <div className="w-16 h-1 bg-slate-900"></div>
            </div>

            {/* Right Column (Editorial Testimonials) */}
            <div className="lg:col-span-7 space-y-8">
              {[
                {
                  quote: "Our new website opens instantly. Prospective clients never have to wait, and our customer inquiries rose by 80% almost immediately.",
                  name: "Marcus V.",
                  role: "Business Owner"
                },
                {
                  quote: "Inquiries go straight to our mobile phones now, saving us hours of manual data entry. Our customer calls doubled within 30 days.",
                  name: "David K.",
                  role: "Local Business Owner"
                }
              ].map((rev, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed font-medium italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider">{rev.name}</span>
                    <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-widest">{rev.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FullSection>

      {/* 6. SECTION 6: FOUNDER'S MANIFESTO (My Philosophy — Editorial Quote) */}
      <FullSection id="manifesto" bgClass="bg-warm-light">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">
                MANIFESTO / THE STANDARDS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase leading-none">
                No Bloated Builders.
                <span className="block text-slate-400 mt-2">No Slow Templates.</span>
                <span className="block text-slate-900 mt-2">Zero Compromise.</span>
              </h2>
            </div>
            
            {/* Right Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  I refuse to build slow, templated sites that make your business look unprofessional. I refuse to use bloated page builders that put your security at risk and frustrate your visitors.
                </p>
                <p>
                  Every website I create is custom-coded from scratch. I build clean, secure platforms for one simple reason: <strong>to turn your website visitors into paying customers</strong>.
                </p>
                <p>
                  By combining instant loading, clear visual layouts, and automatic lead capture, I build websites that actively bring in clients for your business 24/7.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-mono text-lg text-slate-900 tracking-wider font-semibold italic">Amrith Sheeja Jayan</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Founder / Developer</span>
                </div>
                <div className="flex gap-4 w-full sm:w-auto">
                  <Link href="#pricing" className={`${btnPrimary} w-full sm:w-auto text-center`}>
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 7. SECTION 7: THE INTAKE PIPELINE (Pricing & Form) */}
      <FullSection id="pricing" bgClass="bg-cool-light">
        <div className="max-w-5xl mx-auto w-full text-center space-y-8 lg:space-y-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              GET STARTED
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Initiate Your Project.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              Submit your goals and objectives below. I will analyze your goals and return a project proposal within 24 hours.
            </p>
          </div>

          <div className="max-w-3xl w-full text-left bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 lg:space-y-6">
              {/* Name fields */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <div className="space-y-2 text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                  <input type="text" required className="w-full px-5 py-3 lg:py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="John" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                  <input type="text" required className="w-full px-5 py-3 lg:py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="Doe" />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2 text-left">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Business Email</label>
                <input type="email" required className="w-full px-5 py-3 lg:py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="john@company.com" />
              </div>

              {/* Objectives */}
              <div className="space-y-2 text-left">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Project Objectives</label>
                <textarea rows={4} className="w-full px-5 py-3 lg:py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm resize-none" placeholder="Describe your vision and requirements..."></textarea>
              </div>

              <button type="submit" className={`${btnPrimary} w-full py-4 lg:py-5 rounded-xl text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2`}>
                Submit Project Request
              </button>
            </form>
          </div>
        </div>
      </FullSection>
    </div>
  );
}
