import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Amrith Sheeja Jayan collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="w-full text-slate-900 bg-white">
      <HeroSection bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
            LEGAL
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Privacy Policy
          </h1>
        </div>
      </HeroSection>
      <section className="px-6 sm:px-12 lg:px-20 xl:px-16 py-16 sm:py-24 bg-cool-light border-b border-gray-100">
        <div className="max-w-3xl mx-auto space-y-6 text-slate-600 font-medium leading-relaxed">
          <p>
            Project inquiries submitted through this site are used only to respond to your request and to prepare a proposal. We do not sell personal information.
          </p>
          <p>
            Form submissions may include your name, email, and project details. These are stored as long as needed to complete the conversation, then deleted on request.
          </p>
          <p>
            This site does not use advertising trackers. Essential hosting logs may record IP addresses for security.
          </p>
          <p>
            Email <a className="font-bold text-slate-900 underline" href="mailto:asheejajayan.com@gmail.com">asheejajayan.com@gmail.com</a> to review or delete your information.
          </p>
          <p>
            <Link href="/contact" className="font-bold text-slate-900 underline">Return to contact</Link>
          </p>
        </div>
      </section>
    </article>
  );
}
