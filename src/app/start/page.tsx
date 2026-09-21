import type { Metadata } from "next";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import StartWizard from "@/components/StartWizard";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Send a written project brief. Fixed quote in one business day. No call required.",
  alternates: { canonical: "/start" },
};

export default function StartPage() {
  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp" fill={false}>
        <div className="flex flex-col text-center items-center max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Start a project</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            Hire me in writing.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl">
            Four short steps. I send a fixed quote the next business day. You do not need a call.
          </p>
        </div>
      </HeroSection>
      <FullSection bgClass="bg-cool-light" compact>
        <StartWizard />
      </FullSection>
    </article>
  );
}
