import type { Metadata } from "next";
import Link from "next/link";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import HireSteps from "@/components/HireSteps";
import InquiryForm from "@/components/InquiryForm";
import SectionHeader from "@/components/SectionHeader";
import { btnPrimary } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ask a question or start a project in writing. Reply in one business day. No call required.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Contact</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Two doors. No call.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Ask a short question, or send a project brief. I reply in writing within one business day.
          </p>
        </div>
      </HeroSection>

      <FullSection id="ask" bgClass="bg-cool-light">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <SectionHeader
                align="left"
                eyebrow="Ask"
                title="A question is enough."
                lede="Use this if you are not ready to hire. If you already know the work, start a project instead."
              />
              <div className="hidden lg:block">
                <HireSteps />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <InquiryForm />
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Ready to hire</h2>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Four steps. Scope, timing, details, send. You get a fixed quote and a deposit link. Nothing is due until you accept.
                </p>
                <Link href="/start" className={`${btnPrimary} w-full sm:w-auto`}>
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      <FullSection id="direct" bgClass="bg-warm-light">
        <div className="max-w-3xl mx-auto w-full space-y-8">
          <SectionHeader eyebrow="Direct" title="Email if you prefer." />
          <div className="space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 py-5 border-b border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Email</span>
              <a href="mailto:asheejajayan.com@gmail.com" className="text-lg font-bold text-slate-900">
                asheejajayan.com@gmail.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 py-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">GitHub</span>
              <a href="https://github.com/asheejajayan" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-slate-900">
                github.com/asheejajayan
              </a>
            </div>
          </div>
        </div>
      </FullSection>
    </article>
  );
}
