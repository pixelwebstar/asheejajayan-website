"use client";

import { useState } from "react";
import Link from "next/link";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { IncludedList, WebsiteCustom, WebsitePlans } from "@/components/WebsitePrice";
import { FAQS, SINGLE_PAGE, rupee } from "@/lib/catalog";
import { btnPrimary, btnSecondary, frame } from "@/lib/ui";

const SERVICES = [
  {
    id: "web-apps",
    eyebrow: "Apps",
    title: "An app for the work.",
    lede: "Bookings, logins, or the work your team does each day.",
    bgClass: "bg-warm-light",
    plans: [
      {
        name: "Basic",
        price: "₹2,50,000 or more",
        detail: "A login, the screens the work needs, and you own the app.",
        href: "/start?scope=web-apps&budget=250",
      },
      {
        name: "Premium",
        price: "₹5,00,000 or more",
        detail: "More people, more screens, and a system built around the team.",
        href: "/start?scope=web-apps&budget=500",
      },
    ],
  },
  {
    id: "crm",
    eyebrow: "CRM",
    title: "Every enquiry, saved.",
    lede: "I set up Checkersmark for your team. Custom CRM if the work needs its own system.",
    bgClass: "bg-cool-light",
    plans: [
      {
        name: "Checkersmark",
        price: "₹1,250 / user / mo",
        detail: "I set up Checkersmark. Your team saves every enquiry.",
        href: "/start?scope=crm&budget=user",
      },
      {
        name: "Custom CRM",
        price: "₹50,000",
        detail: "Built around how your team already works, and you own it.",
        href: "/start?scope=crm&budget=50",
      },
    ],
  },
  {
    id: "maps",
    eyebrow: "Maps",
    title: "Found on Google.",
    lede: "People nearby can find the business and call.",
    bgClass: "bg-warm-light",
    plans: [
      {
        name: "Basic",
        price: "₹15,000",
        detail: "Your Google listing, Call now, photos, and a link for reviews.",
        href: "/start?scope=maps&budget=15",
      },
      {
        name: "Premium",
        price: "Quoted",
        detail: "More locations, extra photos, and a listing that matches the site.",
        href: "/start?scope=maps&budget=quoted",
      },
    ],
  },
  {
    id: "ads",
    eyebrow: "Ads",
    title: "Ads for people searching.",
    lede: "I run the ads. You pay Google for the clicks.",
    bgClass: "bg-cool-light",
    plans: [
      {
        name: "Basic",
        price: "₹15,000 a month",
        detail: "Ads for people already searching for what you do.",
        href: "/start?scope=ads&budget=15",
      },
      {
        name: "Premium",
        price: "Quoted",
        detail: "More campaigns, more cities, and a weekly report.",
        href: "/start?scope=ads&budget=quoted",
      },
    ],
  },
  {
    id: "support",
    eyebrow: "Support",
    title: "After the site is live.",
    lede: "Hosting already comes with the website. This is care after launch.",
    bgClass: "bg-warm-light",
    plans: [
      {
        name: "Basic",
        price: "₹1,500 a month",
        detail: "Backups, and two text changes each month.",
        href: "/start?scope=support&budget=15",
      },
      {
        name: "Premium",
        price: "₹8,000 a month",
        detail: "The site is checked, backed up, and updated when you ask.",
        href: "/start?scope=support&budget=80",
      },
    ],
  },
] as const;

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Pricing</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              See the price before the work starts.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            A one-page website is {rupee(SINGLE_PAGE)}, paid once. Basic SEO and Vercel Analytics are included, and hosting has no monthly fee. Every larger plan is on this page, with what the business gets.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <a href="#websites" className={`${btnSecondary} w-full sm:w-auto`}>
              See the prices
            </a>
            <Link href="/start" className={`${btnPrimary} w-full sm:w-auto`}>
              Start a project
            </Link>
          </div>
        </div>
      </HeroSection>

      <FullSection id="included" bgClass="bg-cool-light">
        <div className={`${frame} space-y-12`}>
          <SectionHeader
            eyebrow="Included"
            title="On every website."
            lede={`Included with the ${rupee(SINGLE_PAGE)} website, and with every larger one.`}
          />
          <IncludedList />
        </div>
      </FullSection>

      <FullSection id="websites" bgClass="bg-warm-light">
        <div className={`${frame} space-y-12`}>
          <SectionHeader
            eyebrow="Websites"
            title="What the business gets."
            lede="See who each website is for, then choose to pay once or over a year."
          />
          <WebsitePlans />
        </div>
      </FullSection>

      <FullSection id="custom" bgClass="bg-cool-light" className="section-auto">
        <div className={`${frame} space-y-12`}>
          <SectionHeader
            eyebrow="Custom"
            title="Add what customers need."
            lede={`One page is ${rupee(SINGLE_PAGE)}, paid once. Add a page or a tool only if the business needs it.`}
          />
          <WebsiteCustom />
        </div>
      </FullSection>

      {SERVICES.map((service) => (
        <FullSection key={service.id} id={service.id} bgClass={service.bgClass}>
          <div className={`${frame} space-y-12`}>
            <SectionHeader eyebrow={service.eyebrow} title={service.title} lede={service.lede} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
              {service.plans.map((plan) => (
                <article
                  key={plan.name}
                  className="bg-white rounded-3xl border-2 border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col gap-6 h-full"
                >
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">{plan.name}</h3>
                    <p className="text-4xl font-black tracking-tight text-slate-900">{plan.price}</p>
                  </div>
                  <p className="text-sm font-medium leading-snug text-slate-600">{plan.detail}</p>
                  <Link href={plan.href} className={`${btnPrimary} w-full mt-auto`}>
                    Start a project
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </FullSection>
      ))}

      <FullSection id="faq" bgClass="bg-cool-light" className="section-auto">
        <div className={`${frame} space-y-12`}>
          <SectionHeader eyebrow="Questions" title="Before you decide." />
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm px-6 sm:px-8">
            {FAQS.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div key={faq.q} className={index < FAQS.length - 1 ? "border-b border-slate-200" : ""}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left min-h-11"
                    aria-expanded={open}
                  >
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wider pr-4">{faq.q}</span>
                    <span className="text-xl font-black text-slate-400 shrink-0">{open ? "−" : "+"}</span>
                  </button>
                  {open ? <p className="pb-5 text-sm text-slate-600 font-medium leading-relaxed">{faq.a}</p> : null}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact" className={`${btnSecondary} w-full sm:w-auto text-center`}>
              Ask a question
            </Link>
            <Link href="/start" className={`${btnPrimary} w-full sm:w-auto text-center`}>
              Start a project
            </Link>
          </div>
        </div>
      </FullSection>
    </div>
  );
}
