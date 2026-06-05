import Link from "next/link";
import React, { ReactNode } from "react";
import BrowserMockup from "@/components/BrowserMockup";

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
              <div className="w-full aspect-[520/310] lg:aspect-auto lg:h-[280px]">
                <BrowserMockup url="https://novacookers.vercel.app" screenshotUrl="/screenshots/novacookers.png" title="Product Showroom" />
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
              <div className="w-full aspect-[520/310] lg:aspect-auto lg:h-[280px]">
                <BrowserMockup url="https://checkersmark.com" screenshotUrl="/screenshots/checkersmark.png" title="Workspace Operating System" />
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
              <div className="w-full aspect-[520/310] lg:aspect-auto lg:h-[280px]">
                <BrowserMockup url="https://bonder.vercel.app" screenshotUrl="/screenshots/bonder.png" title="Collaboration Platform" />
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
              <div className="w-full aspect-[520/310] lg:aspect-auto lg:h-[280px]">
                <BrowserMockup url="https://jsgastech.com" screenshotUrl="/screenshots/jsgastech.png" title="Marketing Platform" />
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
              <div className="w-full aspect-[520/310] lg:aspect-auto lg:h-[280px]">
                <BrowserMockup url="https://mobwik.vercel.app" screenshotUrl="/screenshots/mobwik.png" title="Mobile Search Engine" />
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
              <div className="w-full aspect-[520/310] lg:aspect-auto lg:h-[280px]">
                <BrowserMockup url="https://ksinghconstruction.vercel.app" screenshotUrl="/screenshots/ksingh.webm" title="Professional Portfolio" />
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
