import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for asheejajayan.com, including project inquiries and website content.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="w-full text-slate-900 bg-white">
      <HeroSection bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
            LEGAL
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Terms of Use
          </h1>
        </div>
      </HeroSection>
      <section className="px-6 sm:px-12 lg:px-20 xl:px-16 py-16 sm:py-24 bg-cool-light border-b border-gray-100">
        <div className="max-w-3xl mx-auto space-y-6 text-slate-600 font-medium leading-relaxed">
          <p>
            Content on this website is for general information about custom web development services. It is not a binding offer until a written project agreement is signed.
          </p>
          <p>
            You may not copy, resell, or republish site copy, case studies, or design without permission.
          </p>
          <p>
            Project work is governed by the statement of work and contract issued for that engagement.
          </p>
          <p>
            <Link href="/contact" className="font-bold text-slate-900 underline">Contact us</Link> with questions about these terms.
          </p>
        </div>
      </section>
    </article>
  );
}
