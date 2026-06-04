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

export default function Services() {
  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">

      {/* 0. HERO SECTION (Warm Sand bg) */}
      <HeroSection bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
            WEB SYSTEMS CRAFT
          </span>
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Professional Web Services.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
            Dedicated web components designed exclusively to elevate your brand authority and turn passive traffic into captured revenue.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/#pricing" className={`${btnPrimary} w-full sm:w-auto`}>
              Start Your Project
            </Link>
            <Link href="#overview" className={`${btnSecondary} w-full sm:w-auto`}>
              Explore Systems
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* 1. OVERVIEW SECTION (Homepage "What We Do" Grid Mirror) */}
      <FullSection id="overview" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full text-center space-y-12 lg:space-y-16 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              SERVICES OVERVIEW
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
                href={`#${srv.id}`}
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
              </a>
            ))}
          </div>
        </div>
      </FullSection>

      {/* 2. WEBSITES DETAIL SECTION (Warm Sand bg) */}
      <FullSection id="websites" bgClass="bg-warm-light">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                01 / WEBSITES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-[1.1]">
                Marketing Websites.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                We design and code clean, custom marketing websites from scratch. No slow page builders, no bloated pre-made templates, and no unnecessary widgets. Your website opens instantly, ensuring potential clients never click away to a competitor out of frustration.
              </p>
            </div>
            <div className="lg:col-span-7 w-full space-y-6">
              {/* Browser mockup widget */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                {/* Browser Title Bar */}
                <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
                  </div>
                  <div className="bg-white border border-slate-200 rounded text-[10px] text-slate-400 px-3 py-1 font-mono text-center flex-grow max-w-[280px]">
                    pixelwebstar.com/your-business
                  </div>
                  <span className="text-[9px] font-bold tracking-widest text-slate-900 uppercase bg-slate-200 rounded px-2.5 py-0.5 ml-auto">INSTANT</span>
                </div>
                {/* Browser Body Mockup Content */}
                <div className="p-8 space-y-6 bg-white min-h-[220px] flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">YOUR PREMIUM BUSINESS</span>
                    <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase">Elite Local Services.</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-sm">We provide high-quality structural repair, consultation, and custom builds for residential estates.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="block text-[11px] font-bold text-slate-900">4.9 / 5</span>
                      <span className="block text-[8px] text-slate-400 uppercase tracking-widest mt-1">Rating</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="block text-[11px] font-bold text-slate-900">24 Hour</span>
                      <span className="block text-[8px] text-slate-400 uppercase tracking-widest mt-1">Response</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="block text-[11px] font-bold text-slate-900">100% Custom</span>
                      <span className="block text-[8px] text-slate-400 uppercase tracking-widest mt-1">No Templates</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Core Benefits */}
              <div className="grid grid-cols-3 gap-4 text-center font-mono text-[9px] sm:text-[10px] text-slate-500">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Instant Speed</span>
                  No loading screen bounce-offs
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Elite Design</span>
                  Builds instant credibility
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Smooth Forms</span>
                  Easiest path to contact you
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 3. WEB APPS DETAIL SECTION (Cool Light bg) */}
      <FullSection id="web-apps" bgClass="bg-cool-light">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
            <div className="lg:col-span-7 order-last lg:order-first w-full space-y-6">
              {/* Dashboard Layout Mockup */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Internal Operations Portal</span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">ACTIVE DATABASE</span>
                </div>
                <div className="grid grid-cols-12 min-h-[220px] bg-white">
                  {/* Dashboard Sidebar */}
                  <div className="col-span-4 bg-slate-50 border-r border-slate-200 p-4 space-y-3">
                    <div className="w-full h-6 bg-slate-200 rounded text-[9px] text-slate-900 font-bold flex items-center px-3.5 uppercase tracking-wider">Dashboard</div>
                    <div className="w-full h-6 bg-white border border-slate-200 rounded text-[9px] text-slate-600 font-bold flex items-center px-3.5 uppercase tracking-wider">Bookings</div>
                    <div className="w-full h-6 bg-white border border-slate-200 rounded text-[9px] text-slate-600 font-bold flex items-center px-3.5 uppercase tracking-wider">Invoices</div>
                    <div className="w-full h-6 bg-white border border-slate-200 rounded text-[9px] text-slate-600 font-bold flex items-center px-3.5 uppercase tracking-wider">Settings</div>
                  </div>
                  {/* Dashboard Main Panel */}
                  <div className="col-span-8 p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Client Queue</span>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between border border-slate-200 p-2.5 rounded-xl bg-slate-50/50 text-[10px] font-mono">
                          <span className="text-slate-900 font-bold">John Davis</span>
                          <span className="text-[8px] bg-slate-200 text-slate-900 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Confirmed</span>
                        </div>
                        <div className="flex items-center justify-between border border-slate-200 p-2.5 rounded-xl bg-slate-50/50 text-[10px] font-mono">
                          <span className="text-slate-900 font-bold">Sarah Miller</span>
                          <span className="text-[8px] bg-slate-200 text-slate-900 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">In Progress</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-100 text-slate-900 p-4 rounded-xl flex items-center justify-between border border-slate-200">
                      <div>
                        <span className="block text-[8px] text-slate-500 uppercase tracking-widest">Automation Saved</span>
                        <span className="text-sm font-black tracking-tight leading-none mt-0.5 uppercase">42 Hours / Mo</span>
                      </div>
                      <span className="text-[9px] font-bold bg-slate-200 px-2 py-1 rounded tracking-widest uppercase font-mono text-slate-700">Time Sync</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Core Benefits */}
              <div className="grid grid-cols-3 gap-4 text-center font-mono text-[9px] sm:text-[10px] text-slate-500">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Custom Portals</span>
                  Secure areas for client details
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Work Flow Sync</span>
                  Automates manual daily entry
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">No SaaS Fees</span>
                  Lifetime tool ownership
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                02 / WEB APPS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-[1.1]">
                Custom Internal Software.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                We design and build custom client login portals, scheduling systems, and internal tools tailored exactly to how your business runs. Because you own the code, you get software that fits your workflow perfectly without paying expensive monthly per-user software fees.
              </p>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 4. CRM DETAIL SECTION (Warm Sand bg) */}
      <FullSection id="crm-software" bgClass="bg-warm-light">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                03 / CRM SOFTWARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-[1.1]">
                Customer Database & Alerts.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                When someone requests a quote on your site, their information is immediately saved to your customer contact list. The system automatically alerts your phone via text or email. This lets you contact them back in minutes, while they are actively looking to buy.
              </p>
            </div>
            <div className="lg:col-span-7 w-full space-y-6">
              {/* Lead Sync Pipeline Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                {/* Lead Form Box */}
                <div className="md:col-span-2 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Website Form</span>
                  <div className="space-y-1.5">
                    <div className="h-6 bg-slate-50 border border-slate-200 rounded px-2 text-[9px] text-slate-900 font-bold flex items-center font-mono">Sarah Miller</div>
                    <div className="h-6 bg-slate-50 border border-slate-200 rounded px-2 text-[9px] text-slate-900 font-bold flex items-center font-mono">sarah@domain.com</div>
                    <div className="h-10 bg-slate-50 border border-slate-200 rounded p-2 text-[8px] text-slate-900 font-bold flex items-start font-mono">Needs consultation...</div>
                  </div>
                  <div className="h-6 bg-slate-900 text-white rounded text-[8px] font-bold uppercase tracking-widest flex items-center justify-center font-mono">Submit Form</div>
                </div>
                
                {/* Sync Arrow */}
                <div className="md:col-span-1 flex md:flex-col justify-center items-center gap-1 text-slate-400 py-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider font-mono">Sync</span>
                  <span className="text-lg leading-none">➜</span>
                </div>
                
                {/* Mobile Notification Mockup */}
                <div className="md:col-span-2 bg-slate-100 p-5 rounded-2xl border border-slate-200 text-slate-900 space-y-3">
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block font-mono">Phone Notification</span>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 font-mono">
                      <span className="text-[9px] font-bold tracking-wider text-slate-900">🚨 NEW INQUIRY</span>
                      <span className="text-[8px] text-slate-400">Just Now</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold text-slate-900">Sarah Miller</span>
                      <span className="block text-[8px] text-slate-500">Request: Consultation</span>
                    </div>
                    <div className="bg-slate-900 text-white text-[8px] font-black uppercase tracking-widest text-center py-1.5 rounded-lg mt-1 font-mono">Tap to Call back</div>
                  </div>
                </div>
              </div>
              {/* Core Benefits */}
              <div className="grid grid-cols-3 gap-4 text-center font-mono text-[9px] sm:text-[10px] text-slate-500">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Instant Alerts</span>
                  Leads go straight to your phone
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Secure Database</span>
                  Never lose lead contact info
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Fast Response</span>
                  Call back before anyone else
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 5. GOOGLE MAP DETAIL SECTION (Cool Light bg) */}
      <FullSection id="google-map" bgClass="bg-cool-light">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
            <div className="lg:col-span-7 order-last lg:order-first w-full space-y-6">
              {/* Search Engine Mockup */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center gap-3">
                  <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest font-mono">Google</span>
                  <div className="bg-white border border-slate-200 rounded text-[10px] text-slate-950 px-3 py-1 font-mono flex-grow max-w-[280px]">
                    structural repair services near me
                  </div>
                </div>
                <div className="p-6 space-y-4 min-h-[220px] flex flex-col justify-between bg-white">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Local Maps Rankings</span>
                  <div className="space-y-2">
                    {/* Rank #1 */}
                    <div className="bg-slate-50 border border-slate-900/10 p-3.5 rounded-xl flex items-center justify-between shadow-sm">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold text-slate-900 bg-slate-200 px-2 py-0.5 rounded font-mono">#1 Rank</span>
                          <span className="text-xs font-black text-slate-950 uppercase">Your Business Name</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-mono">
                          <span className="font-bold text-slate-900 font-mono">5.0 Rating</span>
                          <span>(48 Reviews)</span>
                        </div>
                        <span className="block text-[9px] text-slate-500">Open 24/7 • Fast Response</span>
                      </div>
                      <div className="bg-slate-900 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg font-mono">Call Now</div>
                    </div>
                    {/* Rank #2 */}
                    <div className="bg-white border border-slate-200 p-3.5 rounded-xl flex items-center justify-between opacity-50">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded font-mono">#2 Rank</span>
                          <span className="text-xs font-bold text-slate-600 uppercase">Competitor Services</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-mono">
                          <span>3.8 Rating</span>
                          <span>(12 Reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Core Benefits */}
              <div className="grid grid-cols-3 gap-4 text-center font-mono text-[9px] sm:text-[10px] text-slate-500">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Show Up First</span>
                  Be the first name clients see
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Click to Call</span>
                  Make calling you effortless
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Showcase Reviews</span>
                  Build credibility on Google
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                04 / GOOGLE BUSINESS & MAP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-[1.1]">
                Google Maps & Local Search.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                When people in your local area search for services you offer, you need to show up at the top of Google Maps. We set up and optimize your business map listing so you stand out, get customer reviews, and receive direct phone calls.
              </p>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 6. GOOGLE ADS DETAIL SECTION (Warm Sand bg) */}
      <FullSection id="google-ads" bgClass="bg-warm-light">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                05 / GOOGLE ADS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-[1.1]">
                Search Ad Campaigns.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Unlike social media ads that interrupt people, Google Ads shows your business to customers who are actively looking to hire someone right now. We build campaigns and landing pages that work together to turn clicks into calls without wasting your budget.
              </p>
            </div>
            <div className="lg:col-span-7 w-full space-y-6">
              {/* Google Ad Result Mockup */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center gap-3">
                  <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest font-mono">Google</span>
                  <div className="bg-white border border-slate-200 rounded text-[10px] text-slate-950 px-3 py-1 font-mono flex-grow max-w-[280px]">
                    best structural consultant to hire today
                  </div>
                </div>
                <div className="p-6 space-y-4 min-h-[220px] flex flex-col justify-center text-left bg-white">
                  <div className="space-y-2 border border-slate-200 p-4 rounded-xl shadow-sm bg-slate-50/20">
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-extrabold text-slate-900 border border-slate-900 px-1.5 py-0.25 rounded uppercase tracking-wider font-mono">Sponsored</span>
                      <span className="text-[10px] text-slate-500 font-mono">pixelwebstar.com/hire-expert</span>
                    </div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Hire a Top-Rated Professional Consultant Today.</h3>
                    <p className="text-[10.5px] text-slate-600 font-medium">Custom-crafted plans, residential inspections, and structural calculations. Direct phone responses in minutes. Get a transparent quote now.</p>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-[9px] font-bold text-slate-500 font-mono">
                      <div>• Clear Flat Rate Pricing</div>
                      <div>• Licensed & Insured Crew</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Core Benefits */}
              <div className="grid grid-cols-3 gap-4 text-center font-mono text-[9px] sm:text-[10px] text-slate-500">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Target Hot Leads</span>
                  Only pay for prospective buyers
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Zero Budget Waste</span>
                  Target buyers searching today
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Dedicated Pages</span>
                  Tailored to turn clicks into calls
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 7. SUPPORT & OPERATIONS DETAIL SECTION (Cool Light bg) */}
      <FullSection id="support-ops" bgClass="bg-cool-light">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
            <div className="lg:col-span-7 order-last lg:order-first w-full space-y-6">
              {/* Health Console Mockup */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Server Maintenance Logs</span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-900 uppercase bg-slate-200 rounded px-2 py-0.5 font-mono">ONLINE</span>
                </div>
                <div className="p-6 space-y-3 min-h-[220px] flex flex-col justify-between bg-white">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block font-mono">System Diagnostics</span>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-[10px] font-mono">
                      <span className="text-slate-500">Database Daily Backups</span>
                      <span className="text-slate-900 font-bold uppercase">Active (4:00 AM)</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-[10px] font-mono">
                      <span className="text-slate-500">Website Content Updates</span>
                      <span className="text-slate-900 font-bold uppercase">Completed</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-[10px] font-mono">
                      <span className="text-slate-500">Anti-Spam Security Shield</span>
                      <span className="text-slate-900 font-bold uppercase">Active</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Core Benefits */}
              <div className="grid grid-cols-3 gap-4 text-center font-mono text-[9px] sm:text-[10px] text-slate-500">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Easy Updates</span>
                  Email us details to update pricing
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Secure Backups</span>
                  Database lists are saved daily
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="block font-bold text-slate-900 uppercase mb-1">Spam Blocking</span>
                  Keeps hackers out of your mailbox
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                06 / SUPPORT & OPERATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-[1.1]">
                Updates & Protection.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Once your site is live, we make sure it stays secure, fast, and online. If you need to update text, change pricing, or post photos, just send us an email and we will make the changes for you so you can focus on running your business.
              </p>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 8. FINAL CTA SECTION (Clean Centered) */}
      <FullSection bgClass="bg-warm-light">
        <div className="max-w-3xl mx-auto w-full text-center space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
            GET STARTED
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Ready to Sync Your Pipeline?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-medium max-w-xl mx-auto">
            Review budget parameters or submit your goals below. I will analyze your requirements and send a project proposal within 24 hours.
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
