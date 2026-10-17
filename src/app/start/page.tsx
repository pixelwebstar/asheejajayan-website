import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import { btnSecondary, frame } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell me about the work. I reply within one business day.",
  alternates: { canonical: "/start" },
};

export default function StartPage() {
  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Start</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Tell me about the work.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Tell me what the business needs. I reply within one business day.
          </p>
          <div className="pt-6">
            <Link href="/book" className={`${btnSecondary} w-full sm:w-auto`}>
              Book a 30 minute call
            </Link>
          </div>
        </div>
      </HeroSection>
      <FullSection bgClass="bg-cool-light">
        <div className={frame}>
          <ContactForm />
        </div>
      </FullSection>
    </article>
  );
}
