import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { CARE_MONTHLY, FINANCE_MONTHLY, FINANCE_MONTHS, FINANCE_START, WEBSITE_PRICE, rupee } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for project work, the website payment plan, and what happens if a payment is missed.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Starting prices",
    body: `Prices on this website are starting points. A website starts at ${rupee(WEBSITE_PRICE)}. Work begins only after you accept a written quote. If the quote names a different amount or date, the quote is the one that applies.`,
  },
  {
    title: "Pay in full",
    body: `You can pay the quoted website price in one payment. The project files are delivered when that payment is received. After launch, ${rupee(CARE_MONTHLY)} a month keeps the site online, with backups and up to two text changes a month. You can stop that care plan and host the files yourself. Stopping care does not take away a site you have already paid for.`,
  },
  {
    title: "Pay over time",
    body: `You can start with ${rupee(FINANCE_START)}. The rest is ${rupee(FINANCE_MONTHLY)} a month for ${FINANCE_MONTHS} months. The total is the same ${rupee(WEBSITE_PRICE)}, unless the written quote says otherwise. Work starts after the first ${rupee(FINANCE_START)}. During those months the site stays on my account. The project files, the repository, and the handover are delivered only after the last payment.`,
  },
  {
    title: "If a payment is missed",
    body: "A monthly payment is due on the date in the quote. If it is not received, I will email you. I may pause the website. If the payment is still missing 30 days after the due date, I may take the site offline and stop the work. Money already paid covers the work done up to that date and is not refunded. You can continue by paying what is overdue. Turning off an automatic payment counts as a missed payment. The files are not handed over while any part of the quoted price is unpaid.",
  },
  {
    title: "Ads and other work",
    body: "Google Ads management, money paid to Google, apps, CRM, and Maps are separate from these two website payments. They are billed only if the quote includes them.",
  },
  {
    title: "Site content",
    body: "You may not copy, resell, or republish the copy, case studies, or design on this website without permission.",
  },
];

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
        <div className="max-w-3xl mx-auto space-y-10 text-slate-600 font-medium leading-relaxed">
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">{section.title}</h2>
              <p>{section.body}</p>
            </div>
          ))}
          <p>
            <Link href="/pricing" className="font-bold text-slate-900 underline">See the prices</Link>
            {" · "}
            <Link href="/contact" className="font-bold text-slate-900 underline">Contact me</Link>
            {" with questions about these terms."}
          </p>
        </div>
      </section>
    </article>
  );
}
