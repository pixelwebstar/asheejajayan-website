import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { frame, shell } from "@/lib/ui";
import { CALL_MINUTES, CARE_MONTHLY, SHORT_PRICE, SINGLE_PAGE, WEBSITE_PRICE, YEAR_PLANS, rupee } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for project work, the website payment plan, and what happens if a payment is missed.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Prices",
    body: `One page is ${rupee(SINGLE_PAGE)}. A basic website is ${rupee(SHORT_PRICE)}. A premium website is ${rupee(WEBSITE_PRICE)}. Custom is the price of the pieces you keep. Work begins only after you accept a written quote. If the quote names a different amount or date, the quote is the one that applies.`,
  },
  {
    title: "Pay in full",
    body: `You can pay the quoted website price in one payment. Hosting comes with the website, with no monthly fee to keep it online. The project files are delivered when that payment is received. Support after launch is optional: ${rupee(CARE_MONTHLY)} a month covers backups and up to two text changes. You can skip support and still keep a site you have paid for.`,
  },
  {
    title: "Pay over time",
    body: `The basic website can be paid over a year: ${rupee(YEAR_PLANS[0].start)} to start, then ${rupee(YEAR_PLANS[0].monthly)} a month for ${YEAR_PLANS[0].months} months. The total is ${rupee(YEAR_PLANS[0].total)}. The premium website can start with ${rupee(YEAR_PLANS[1].start)}, then ${rupee(YEAR_PLANS[1].monthly)} a month for ${YEAR_PLANS[1].months} months. The total is ${rupee(YEAR_PLANS[1].total)}. A one-page website is ${rupee(SINGLE_PAGE)}, paid once, with no monthly fee. Work starts after the first payment. During a year plan the site stays on my account. The files are delivered only after the last payment.`,
  },
  {
    title: "If a payment is missed",
    body: "An automated system watches the due date on a payment plan. If a payment is missed, you are emailed and the work pauses. Pay what is due and the work continues. If the payment is still missing 30 days after the due date, the site comes offline and the work stops until that payment is in. Money already paid covers the work done up to that date and is not refunded. Turning off an automatic payment counts as a missed payment. The files are not handed over while any part of the quoted price is unpaid.",
  },
  {
    title: "A 30 minute call",
    body: `A call is ${CALL_MINUTES} minutes. Tell me two times that work, and I confirm one within one business day.`,
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
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
            LEGAL
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Terms of Use
          </h1>
        </div>
      </HeroSection>
      <section className="py-16 sm:py-24 bg-cool-light border-b border-gray-100">
        <div className={shell}>
          <div className={`${frame} space-y-10 text-slate-600 font-medium leading-relaxed`}>
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
        </div>
      </section>
    </article>
  );
}
