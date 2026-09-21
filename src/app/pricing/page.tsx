"use client";

import { useState } from "react";
import Link from "next/link";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import PriceBuilder from "@/components/PriceBuilder";
import SectionHeader from "@/components/SectionHeader";
import { FAQS, INCLUDED, SCOPES, money } from "@/lib/catalog";
import { btnPrimary, btnSecondary } from "@/lib/ui";

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Pricing</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Build the quote yourself.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Starting figures, not packages. Tap the work you need. The brief locks a fixed price before anything is billed.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <a href="#builder" className={`${btnSecondary} w-full sm:w-auto`}>
              Open the builder
            </a>
            <Link href="/start" className={`${btnPrimary} w-full sm:w-auto`}>
              Start a project
            </Link>
          </div>
        </div>
      </HeroSection>

      <FullSection id="builder" bgClass="bg-cool-light">
        <div className="max-w-4xl mx-auto w-full space-y-12">
          <SectionHeader
            eyebrow="Estimate"
            title="Select the work."
            lede="These are starting numbers. Your brief comes back as one fixed quote."
          />
          <PriceBuilder />
        </div>
      </FullSection>

      <FullSection id="range" bgClass="bg-warm-light">
        <div className="max-w-4xl mx-auto w-full space-y-12">
          <SectionHeader align="left" eyebrow="From prices" title="What each piece starts at." />
          <div>
            {SCOPES.map((scope, index) => (
              <div
                key={scope.value}
                className={`grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-8 py-6 ${index < SCOPES.length - 1 ? "border-b border-slate-200" : ""}`}
              >
                <h3 className="sm:col-span-3 text-sm font-bold uppercase tracking-wider text-slate-900">{scope.label}</h3>
                <p className="sm:col-span-6 text-sm text-slate-600 font-medium leading-relaxed">{scope.desc}</p>
                <p className="sm:col-span-3 sm:text-right text-sm font-black text-slate-900">
                  From ${money(scope.from)}
                  {scope.monthly ? "/mo" : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FullSection>

      <FullSection id="included" bgClass="bg-cool-light">
        <div className="max-w-4xl mx-auto w-full space-y-12">
          <SectionHeader eyebrow="Every build" title="Included before extras." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {INCLUDED.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 sm:p-8 space-y-2 ${index < 4 ? "border-b border-slate-200" : ""} ${index % 2 === 0 ? "sm:border-r border-slate-200" : ""}`}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FullSection>

      <FullSection id="faq" bgClass="bg-warm-light">
        <div className="max-w-3xl mx-auto w-full space-y-12">
          <SectionHeader eyebrow="Questions" title="Before you send a brief." />
          <div className="space-y-0">
            {FAQS.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div key={faq.q} className={index < FAQS.length - 1 ? "border-b border-slate-200" : ""}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left min-h-11"
                    aria-expanded={open}
                  >
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wider pr-4">{faq.q}</span>
                    <span className="text-xl font-black text-slate-400 shrink-0">{open ? "−" : "+"}</span>
                  </button>
                  {open ? (
                    <p className="pb-5 text-sm text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact" className={`${btnSecondary} w-full sm:w-auto text-center`}>
              Ask a question
            </Link>
            <Link href="/start" className={`${btnPrimary} w-full sm:w-auto text-center`}>
              Start a project
            </Link>
          </div>
        </div>
      </FullSection>
    </div>
  );
}
