import type { Metadata } from "next";
import Link from "next/link";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import HireSteps from "@/components/HireSteps";
import { btnPrimary, btnSecondary, frame } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Brief received",
  description: "Your note was sent. I reply within one business day.",
  robots: { index: false, follow: false },
};

export default function StartThanksPage() {
  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Received</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              I have the details.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Thank you. I will read this and reply within one business day.
          </p>
        </div>
      </HeroSection>
      <FullSection bgClass="bg-cool-light">
        <div className={`${frame} space-y-10`}>
          <HireSteps />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className={`${btnSecondary} w-full sm:w-auto text-center`}>
              Back home
            </Link>
            <Link href="/project" className={`${btnPrimary} w-full sm:w-auto text-center`}>
              See the work
            </Link>
          </div>
        </div>
      </FullSection>
    </article>
  );
}
