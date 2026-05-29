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
      className={`full-section relative py-12 sm:py-16 ${bgClass} border-b border-gray-100`}
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

      {/* 2. SECTION 2: WHY (Business Need — Scannable) */}
      <FullSection id="why" bgClass="bg-warm-light">
        <div className="max-w-6xl mx-auto w-full space-y-12 lg:space-y-16">
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              WHY A WEBSITE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Why Your Business Needs a Website.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              Your website is your 24/7 sales partner. It builds trust, captures leads, and converts visitors while you focus on your work.
            </p>
          </div>

          {/* 4 Stat Cards — The Main Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: "75%",
                title: "Judge by Design",
                desc: "Consumers evaluate your credibility based on your website before ever contacting you."
              },
              {
                stat: "24/7",
                title: "Always Open",
                desc: "Your site captures inquiries and builds trust around the clock, even while you sleep."
              },
              {
                stat: "3×",
                title: "More Leads",
                desc: "Professional websites generate significantly more qualified leads than word of mouth alone."
              },
              {
                stat: "10s",
                title: "Or They Leave",
                desc: "Visitors decide to stay or bounce within ten seconds. Speed and clarity keep them."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-4xl sm:text-5xl font-black text-slate-900 block tracking-tight leading-none">
                  {item.stat}
                </span>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Single CTA Row */}
          <div className="text-center space-y-6">
            <p className="text-sm text-slate-500 font-medium max-w-lg mx-auto">
              Without a professional site, customers move on to a competitor in seconds. A strong web presence is how they discover, evaluate, and choose you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
                Start Your Project
              </Link>
              <Link href="#services" className={`${btnSecondary} w-full sm:w-auto`}>
                See Services
              </Link>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 3. SECTION 3: HOW (Split — Left Heading / Right Process Rows) */}
      <FullSection id="how" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Left Column: Heading & Summary (Stretched to match right column height) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2 lg:py-6">
              <div className="space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                  OUR METHOD
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
                  Engineered for Growth.
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-sm">
                  We don't just design websites. We architect custom digital pipelines that convert visitors into paying clients.
                </p>
              </div>

              <div className="mt-12 lg:mt-auto space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
                    Start Your Project
                  </Link>
                  <Link href="/contact" className={`${btnSecondary} w-full sm:w-auto`}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Five Stacked Process Rows */}
            <div className="lg:col-span-7 space-y-0">
              {[
                { num: "01", title: "Discovery Call", desc: "We learn your business goals, target customers, and what success looks like for you." },
                { num: "02", title: "Strategy & Layout", desc: "We map the page structure and conversion flow before writing a single line of code." },
                { num: "03", title: "Custom Design", desc: "Your brand identity is translated into a clean, premium visual design you approve." },
                { num: "04", title: "Code & Build", desc: "We hand-code your site from scratch. No templates, no page builders, no bloat." },
                { num: "05", title: "Launch & Support", desc: "Your site goes live with backups, monitoring, and ongoing content support included." }
              ].map((step, idx) => (
                <div key={step.num} className={`flex gap-6 items-start py-6 ${idx < 4 ? 'border-b border-slate-200' : ''}`}>
                  <span className="text-2xl font-black text-slate-300 select-none leading-none pt-1 min-w-[40px]">{step.num}</span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FullSection>

      {/* 4. SECTION 4: WHAT (Wide Bento Grid — Lead Pipeline) */}
      <FullSection id="what" bgClass="bg-warm-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-200 pb-8">
            <div className="space-y-4 max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                THE VALUE DELIVERED
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
                What Your Business Gets.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
                Every website we build is an automated lead-capture system. Here is exactly how it works to scale your operations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
                Start Your Project
              </Link>
              <Link href="/contact" className={`${btnSecondary} w-full sm:w-auto`}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Box 1: Lead Capture */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow">
              <span className="text-6xl font-black text-slate-200 block leading-none">01</span>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Client Submits</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  A visitor lands on your site and effortlessly fills out the simple, high-converting contact form with their name, email, and project details.
                </p>
              </div>
            </div>

            {/* Box 2: Instant Save */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow">
              <span className="text-6xl font-black text-slate-200 block leading-none">02</span>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Instant Database</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Their information is instantly and securely saved to your custom customer database. Zero manual entry, zero lost leads.
                </p>
              </div>
            </div>

            {/* Box 3: Phone Alert (Spans 2 columns on tablet, 1 on desktop) */}
            <div className="bg-slate-900 p-8 lg:p-12 rounded-3xl shadow-md flex flex-col justify-between space-y-8 md:col-span-2 lg:col-span-1">
              <span className="text-6xl font-black text-slate-800 block leading-none">03</span>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">Phone Alert</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  You receive an instant notification directly on your phone, allowing you to call them back in minutes before they contact a competitor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 5. SECTION 5: CLIENT REVIEWS (Wide 3-Column Staggered Grid) */}
      <FullSection id="reviews" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-200 pb-8">
            <div className="space-y-4 max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                SOCIAL PROOF
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
                What Our Clients Achieve.
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
                Start Your Project
              </Link>
              <Link href="/contact" className={`${btnSecondary} w-full sm:w-auto`}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* 3-Column Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Column 1 (Pushed down slightly for staggered effect) */}
            <div className="md:mt-12 bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <p className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight">
                &ldquo;Our new website opens instantly. Customer inquiries rose by 80% almost immediately. We went from getting three calls a week to getting three calls a day.&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white text-sm font-black">MV</div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block uppercase tracking-wider">Marcus V.</span>
                  <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-widest">Business Owner</span>
                </div>
              </footer>
            </div>

            {/* Column 2 */}
            <div className="bg-slate-900 p-8 lg:p-12 rounded-3xl shadow-md space-y-8 text-white">
              <p className="text-lg lg:text-xl leading-relaxed font-bold tracking-tight">
                &ldquo;Inquiries go straight to our phones now. Our customer calls doubled within 30 days. The custom CRM eliminated hours of manual data entry every single week.&rdquo;
              </p>
              <footer className="flex items-center gap-4 pt-4 border-t border-slate-700">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 text-sm font-black">DK</div>
                <div>
                  <span className="text-sm font-bold text-white block uppercase tracking-wider">David K.</span>
                  <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-widest">Local Business Owner</span>
                </div>
              </footer>
            </div>

            {/* Column 3 (Pushed down slightly) */}
            <div className="md:mt-24 bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <p className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight">
                &ldquo;The CRM saves us hours every week. We never lose a lead and our response time dropped from hours to minutes. It's the best investment we've made.&rdquo;
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

      {/* 6. SECTION 6: FOUNDER'S MANIFESTO (Wide Split-Screen Editorial) */}
      <FullSection id="manifesto" bgClass="bg-warm-light">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left: Massive Typography */}
            <div className="space-y-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">
                MANIFESTO / THE STANDARDS
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-slate-900 uppercase leading-[0.9]">
                No Bloated Builders.
                <span className="block text-slate-300 mt-4">No Slow Templates.</span>
                <span className="block text-slate-900 mt-4">Zero Compromise.</span>
              </h2>
            </div>

            {/* Right: Editorial & CTA */}
            <div className="space-y-12">
              <div className="space-y-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-medium border-l-2 border-slate-900 pl-8">
                <p>
                  I refuse to build slow, templated sites that make your business look unprofessional. I refuse to use bloated page builders that put your security at risk and frustrate your visitors.
                </p>
                <p>
                  Every website I create is custom-coded from scratch. I build clean, secure platforms for one simple reason: <strong className="text-slate-900">to turn your website visitors into paying customers</strong>.
                </p>
                <p>
                  By combining instant loading, clear visual layouts, and automatic lead capture, I build websites that actively bring in clients for your business 24/7.
                </p>
              </div>

              {/* Signature & Dual Buttons */}
              <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-t border-slate-200">
                <div className="flex flex-col">
                  <span className="font-mono text-xl text-slate-900 tracking-wider font-semibold italic">Amrith Sheeja Jayan</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Founder / Developer</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link href="#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
                    Start Your Project
                  </Link>
                  <Link href="/contact" className={`${btnSecondary} w-full sm:w-auto`}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 7. SECTION 7: INTAKE (Two-Column — Left Info / Right Form) */}
      <FullSection id="pricing" bgClass="bg-cool-light">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading + Selling Points */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                  GET STARTED
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                  Initiate Your Project.
                </h2>
                <p className="text-base leading-relaxed text-slate-600 font-medium">
                  Submit your goals and I will return a custom project proposal within 24 hours.
                </p>
              </div>

              {/* Stacked Info Rows */}
              <div className="space-y-0">
                {[
                  { label: "Response Time", value: "Under 24 hours" },
                  { label: "Hidden Fees", value: "None — ever" },
                  { label: "Code Ownership", value: "100% yours" },
                  { label: "Obligation", value: "Zero commitment to proceed" }
                ].map((row, idx) => (
                  <div key={row.label} className={`flex justify-between items-center py-4 ${idx < 3 ? 'border-b border-slate-200' : ''}`}>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{row.label}</span>
                    <span className="text-sm font-bold text-slate-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-sm">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4 lg:space-y-6">
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

                  <div className="space-y-2 text-left">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Business Email</label>
                    <input type="email" required className="w-full px-5 py-3 lg:py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-medium transition-all shadow-sm" placeholder="john@company.com" />
                  </div>

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
          </div>
        </div>
      </FullSection>
    </div>
  );
}
