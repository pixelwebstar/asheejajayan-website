import type { Metadata } from "next";
import CallForm from "@/components/CallForm";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import { frame } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Book a call",
  description: "A thirty minute call to talk about the work. I confirm a time within one business day.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">A call</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Thirty minutes.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Tell me two times that work. I confirm one within one business day.
          </p>
        </div>
      </HeroSection>

      <FullSection bgClass="bg-cool-light">
        <div className={`${frame} flex justify-center`}>
          <div className="max-w-3xl w-full space-y-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            The time is kept.
          </h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
            <p>Tell me two times that work. I confirm one, within one business day.</p>
            <p>The call is thirty minutes. We use it to talk about the business and what the site needs to do.</p>
          </div>
          </div>
        </div>
      </FullSection>

      <FullSection id="request" bgClass="bg-warm-light" className="section-auto">
        <div className={`${frame} mx-auto max-w-3xl space-y-8`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Ask for a time.
          </h2>
          <CallForm />
        </div>
      </FullSection>
    </article>
  );
}
