"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-16";

// Premium Button Styles
const btnPrimary = "inline-flex items-center justify-center rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] min-w-[220px]";
const btnSecondary = "inline-flex items-center justify-center rounded border-2 border-slate-900 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-50 active:scale-[0.98] min-w-[220px]";

function HeroSection({ children, bgClass, id, bgImage }: { children: ReactNode; bgClass: string; id?: string; bgImage?: string }) {
  return (
    <section
      id={id}
      className={`hero-section relative py-16 sm:py-20 ${bgClass} border-b border-gray-100 overflow-hidden`}
    >
      {bgImage && (
        <>
          {/* 1. Base image (Full opacity, crisp on edges) */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          />
          {/* 2. Localized Blur Mask: Blurs background details ONLY behind the text, fading to sharp at the edges */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              maskImage: "radial-gradient(circle, black 15%, transparent 60%)",
              WebkitMaskImage: "radial-gradient(circle, black 15%, transparent 60%)",
            }}
          />
          {/* 3. Radial mask overlay: 92% opaque in the center, fading to 0% at the edges */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(250, 245, 240, 0.92) 0%, rgba(250, 245, 240, 0.65) 45%, rgba(250, 245, 240, 0) 80%)",
            }}
          />
        </>
      )}
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
      className={`full-section relative py-20 lg:py-32 ${bgClass} border-b border-gray-100`}
    >
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

export default function Pricing() {
  const plans = [
    {
      name: "ESSENTIAL",
      price: "$999",
      desc: "Perfect for new businesses needing a clean, professional online presence.",
      features: ["Custom Web Design", "Fits All Mobile Phones", "Basic Search Optimization", "1 Week Delivery"]
    },
    {
      name: "GROWTH",
      price: "$2,499",
      desc: "Designed for expanding businesses ready to capture and structure leads automatically.",
      features: ["Everything in Essential", "Inquiries Saved Automatically", "Layout Conversion Audit", "3 Weeks Delivery"]
    },
    {
      name: "ENTERPRISE",
      price: "$4,999+",
      desc: "Full-scale custom applications, payment systems, and client tracking setup.",
      features: ["Everything in Growth", "Custom Business Website", "Payment Setup & Support", "Priority Support"]
    }
  ];

  // Interactive Estimator Selections
  const [selections, setSelections] = useState({
    customWebDesign: true, // Fixed Base
    mobileOptimization: true, // Included
    crmLeadCapture: false,
    googleMapsOptimization: false,
    googleAdsCampaign: false,
    customWebApplication: false,
    paymentIntegration: false,
    portalClientAccess: false,
    supportMaintenance: false,
  });

  const handleToggle = (key: keyof typeof selections) => {
    if (key === "customWebDesign" || key === "mobileOptimization") return;
    setSelections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Price calculation
  const basePrice = 999;
  let calculatedTotal = basePrice;
  if (selections.crmLeadCapture) calculatedTotal += 500;
  if (selections.googleMapsOptimization) calculatedTotal += 300;
  if (selections.googleAdsCampaign) calculatedTotal += 500;
  if (selections.customWebApplication) calculatedTotal += 2000;
  if (selections.paymentIntegration) calculatedTotal += 800;
  if (selections.portalClientAccess) calculatedTotal += 400;

  const getCustomQuery = () => {
    const list: string[] = [];
    if (selections.crmLeadCapture) list.push("CRM Lead Capture ($500)");
    if (selections.googleMapsOptimization) list.push("Google Maps Optimization ($300)");
    if (selections.googleAdsCampaign) list.push("Google Ads Setup ($500)");
    if (selections.customWebApplication) list.push("Custom Web Application ($2,000)");
    if (selections.paymentIntegration) list.push("Payment Integration ($800)");
    if (selections.portalClientAccess) list.push("CheckersMark Portal Access ($400)");
    if (selections.supportMaintenance) list.push("Support Plan ($200/mo)");

    const summary = `Custom project estimated at $${calculatedTotal}. Options selected: ${list.length > 0 ? list.join(", ") : "Base Custom Design"}`;
    return encodeURIComponent(summary);
  };

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do I own the code?",
      a: "Yes. 100%. We hand over all source files. No lock-in, no monthly platform builder fees."
    },
    {
      q: "How long does a project take?",
      a: "Essential takes ~1 week. Growth takes ~3 weeks. Custom web apps depend on scope, and we'll give you a locked-in timeline before starting."
    },
    {
      q: "What if I need changes after launch?",
      a: "30 days of post-launch support is included. After that, we offer optional support plans ($200/mo) or you can edit it yourself—you own the files."
    },
    {
      q: "Do you charge monthly fees?",
      a: "No. You pay once for the design and build. The only recurring cost is if you choose our support plan, which is entirely optional."
    },
    {
      q: "Can I track my project progress?",
      a: "Yes. Custom app and enterprise clients get access to the CheckersMark portal, where you can see status updates, exchange assets, and chat with us."
    },
    {
      q: "What if I already have a website?",
      a: "We can migrate your existing content, graphics, and pages to a hand-coded, high-performance architecture that loads instantly."
    }
  ];

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">

      {/* 1. SECTION 1: HERO (Warm Sand) */}
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              PRICING
            </span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Transparent design packages.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Explore clear pricing plans built to match your business goals. Customize your options and receive a custom estimate instantly.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <Link href="#plans" className={`${btnPrimary} w-full sm:w-auto`}>
              Explore Plans
            </Link>
            <Link href="#estimator" className={`${btnSecondary} w-full sm:w-auto`}>
              Build a Custom Quote
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* 2. SECTION 2: PLAN CARDS (Cool Slate) */}
      <FullSection id="plans" bgClass="bg-cool-light">
        <div className="max-w-6xl mx-auto w-full space-y-12 lg:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              INVESTMENT TIERS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Choose Your Scope.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              Each tier matches your growth stage. Select the package that aligns with your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => {
              const isRecommended = index === 1;
              return (
                <div
                  key={plan.name}
                  className={`flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-0.5 ${
                    isRecommended 
                      ? 'bg-white text-slate-900 border-2 border-slate-900 shadow-lg scale-[1.02]' 
                      : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-md'
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-slate-500">
                    {isRecommended ? "RECOMMENDED" : `TIER 0${index + 1}`}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">{plan.price}</div>
                  <p className="text-sm leading-relaxed mb-6 text-slate-600">
                    {plan.desc}
                  </p>
                  <ul className="space-y-2 text-xs text-left w-full mb-8 text-slate-600">
                    {plan.features.map(f => (
                      <li key={f}>+ {f}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?plan=${plan.name.toLowerCase()}#form`}
                    className={`w-full py-4 text-xs font-bold uppercase tracking-widest rounded-xl border-2 transition-all mt-auto text-center ${
                      isRecommended 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md hover:bg-slate-800' 
                        : 'bg-transparent text-slate-900 border-slate-200 hover:border-slate-900'
                    }`}
                  >
                    Select {plan.name}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="#estimator" className={`${btnSecondary} w-full sm:w-auto`}>
              Customize a Plan
            </Link>
          </div>
        </div>
      </FullSection>

      {/* 3. SECTION 3: INTERACTIVE ESTIMATOR (Warm Sand - New Section) */}
      <FullSection id="estimator" bgClass="bg-warm-light">
        <div className="max-w-4xl mx-auto w-full space-y-12 lg:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              BUILD YOUR QUOTE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Interactive Estimator.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
              Select your specifications below and watch the pricing update in real-time.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-6 sm:p-10 space-y-8">
            <div className="space-y-4">
              {[
                { key: "customWebDesign", label: "Custom Website Design", price: "$999 (Base Plan)", fixed: true },
                { key: "mobileOptimization", label: "Mobile-Responsive Layout", price: "Included", fixed: true },
                { key: "crmLeadCapture", label: "CRM Lead Capture Database Integration", price: "+$500" },
                { key: "googleMapsOptimization", label: "Google Business & Maps SEO Optimization", price: "+$300" },
                { key: "googleAdsCampaign", label: "Google Ads Search Campaign Setup", price: "+$500" },
                { key: "customWebApplication", label: "Custom Client Portal / Web Application Systems", price: "+$2,000" },
                { key: "paymentIntegration", label: "Stripe / Apple Pay Payment Checkout Setup", price: "+$800" },
                { key: "portalClientAccess", label: "CheckersMark Client Portal Dashboard Access", price: "+$400" },
                { key: "supportMaintenance", label: "Ongoing Monthly Support & backups", price: "+$200/mo (Optional)" }
              ].map((item) => {
                const isChecked = selections[item.key as keyof typeof selections];
                return (
                  <div
                    key={item.key}
                    onClick={() => handleToggle(item.key as keyof typeof selections)}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all select-none cursor-pointer ${
                      isChecked
                        ? "border-slate-900 bg-slate-50/50"
                        : "border-slate-100 hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        disabled={item.fixed}
                        className="w-4 h-4 rounded text-slate-900 focus:ring-slate-900 border-slate-200 cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest shrink-0">
                      {item.price}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Total display & submit CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200 pt-8">
              <div className="text-center sm:text-left space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">ESTIMATED PRICE</span>
                <div className="text-4xl font-black tracking-tight text-slate-900">
                  ${calculatedTotal}
                  {selections.supportMaintenance && <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono"> + $200/mo</span>}
                </div>
              </div>
              <Link href={`/contact?custom=${getCustomQuery()}#form`} className={`${btnPrimary} w-full sm:w-auto`}>
                Request This Quote
              </Link>
            </div>
          </div>
        </div>
      </FullSection>

      {/* 4. SECTION 4: WHAT'S INCLUDED IN EVERY PLAN (Cool Slate - New Section) */}
      <FullSection id="included" bgClass="bg-cool-light">
        <div className="max-w-4xl mx-auto w-full space-y-12 lg:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              STANDARD SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Included in Every Build.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Mobile Layout", desc: "Your site fits perfectly on every smartphone screen size." },
              { title: "Search Optimization", desc: "Basic SEO settings so Google indexes your pages accurately." },
              { title: "Contact Capture", desc: "A clean contact form to capture name, email, and objectives." },
              { title: "Revisions", desc: "One full round of content and layout changes before launch." },
              { title: "Full Ownership", desc: "You own 100% of the custom source code files." },
              { title: "Launch Support", desc: "30 days of performance monitoring and backup support." }
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">+ {item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FullSection>

      {/* 5. SECTION 5: CUSTOM CLIENT SOLUTIONS (Warm Sand) */}
      <FullSection id="custom" bgClass="bg-warm-light">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Heading */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
                BESPOKE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Custom Client Solutions.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                If your business requires specific integrations, multi-location platforms, or custom booking systems, I design proposals tailored to your exact objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contact?plan=enterprise#form" className={`${btnPrimary} w-full sm:w-auto`}>
                  Request Custom Quote
                </Link>
              </div>
            </div>

            {/* Right: Feature Rows */}
            <div className="lg:col-span-7 space-y-0">
              {[
                { title: "Custom Integrations", desc: "Payment systems, third-party APIs, and custom automation workflows built to fit your operations." },
                { title: "Multi-Location Platforms", desc: "Separate landing pages, localized SEO, and location-specific contact forms for each branch." },
                { title: "Payment & Billing", desc: "Secure checkout flows, invoicing portals, and subscription billing configured for your business model." },
                { title: "Booking Calendars", desc: "Integrated scheduling systems that let customers book appointments directly from your website." }
              ].map((item, idx) => (
                <div key={item.title} className={`py-6 ${idx < 3 ? 'border-b border-slate-200' : ''}`}>
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FullSection>

      {/* 6. SECTION 6: FAQ ACCORDION (Cool Slate - New Section) */}
      <FullSection id="faq" bgClass="bg-cool-light">
        <div className="max-w-4xl mx-auto w-full space-y-12 lg:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Common Questions.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none select-none"
                  >
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      {faq.q}
                    </span>
                    <span className="text-xl font-black text-slate-400 shrink-0 ml-4">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-50">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </FullSection>

    </div>
  );
}
