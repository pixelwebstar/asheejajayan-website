import type { Metadata } from "next";
import Link from "next/link";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import HireSteps from "@/components/HireSteps";
import { btnPrimary, btnSecondary } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Brief received",
  description: "Your project brief was sent. A fixed quote follows in one business day.",
  robots: { index: false, follow: false },
};

export default function StartThanksPage() {
  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp" fill={false}>
        <div className="flex flex-col text-center items-center max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Received</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            Brief is in.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl">
            I will reply in one business day with a fixed quote and a deposit link. Nothing is due until you accept it.
          </p>
        </div>
      </HeroSection>
      <FullSection bgClass="bg-cool-light">
        <div className="max-w-3xl mx-auto w-full space-y-10">
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
