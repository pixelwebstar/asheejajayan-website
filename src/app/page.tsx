import GravityBentoGrid from "@/components/GravityBentoGrid";
import HeroSection from "@/components/HeroSection";
import ThreeDGallery from "@/components/ThreeDGallery";
import ContactForm from "@/components/ContactForm";
import MethodTimeline from "@/components/MethodTimeline";
import RoiComparison from "@/components/RoiComparison";
import FullSection from "@/components/FullSection";
import HireSteps from "@/components/HireSteps";
import SectionHeader from "@/components/SectionHeader";
import { SCOPES, money } from "@/lib/catalog";
import { btnPrimary, btnSecondary } from "@/lib/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amrith Sheeja Jayan - Web Developer",
  description: "High-performance websites designed to grow your business.",
  alternates: { canonical: "/" },
};

const STANDARD = [
  {
    num: "01",
    title: "You own the files",
    desc: "I hand-code the site and the database. No Squarespace or Shopify rent. You keep 100% of production files.",
  },
  {
    num: "02",
    title: "It stays fast",
    desc: "Page builders ship extra script that drives mobile buyers away. Lightweight code renders on every phone.",
  },
  {
    num: "03",
    title: "Built to get the next call",
    desc: "Clear actions, competitor-aware layout, and a lead list that works when you are not at the desk.",
  },
];

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Amrith Sheeja Jayan - Custom Web Developer",
    description:
      "High-performance custom Next.js websites and CRM software built for small business growth. Load times under 0.3s. No templates, no page builders.",
    publisher: {
      "@type": "Person",
      name: "Amrith Sheeja Jayan",
    },
  };

  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <HeroSection id="hero" bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Portfolio</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Websites built for business growth.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            I design and code high-performance websites that help business owners win more clients and automate follow-up.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <a href="#projects" className={`${btnSecondary} w-full sm:w-auto`}>
              See my work
            </a>
            <a href="/start" className={`${btnPrimary} w-full sm:w-auto`}>
              Start a project
            </a>
          </div>
        </div>
      </HeroSection>

      <FullSection id="services" bgClass="bg-cool-light" compact>
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          <SectionHeader
            eyebrow="What I do"
            title="Websites and web applications."
            lede="Custom systems that run fast, capture leads, and automate the sales pipeline."
          />
          <div className="max-w-4xl mx-auto w-full">
            {SCOPES.map((scope, index) => (
              <a
                key={scope.value}
                href={scope.href}
                className={`flex gap-5 sm:gap-8 items-start py-6 ${index < SCOPES.length - 1 ? "border-b border-slate-200" : ""} group`}
              >
                <span className="text-2xl font-black text-slate-600 leading-none min-w-[2.5rem] font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 space-y-1 flex-1">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-slate-600 transition-colors">
                    {scope.label}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{scope.desc}</p>
                </div>
                <span className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-slate-500 shrink-0 pt-1">
                  From ${money(scope.from)}
                  {scope.monthly ? "/mo" : ""}
                </span>
              </a>
            ))}
          </div>
        </div>
      </FullSection>

      <FullSection id="projects" bgClass="bg-warm-light" compact>
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          <SectionHeader eyebrow="Selected projects" title="Real projects. Real outcomes." />
          <div className="w-full pt-4">
            <ThreeDGallery />
          </div>
        </div>
      </FullSection>

      <FullSection id="method" bgClass="bg-cool-light" compact>
        <MethodTimeline />
      </FullSection>

      <FullSection id="roi" bgClass="bg-warm-light" compact>
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          <SectionHeader
            eyebrow="The difference"
            title="Template vs. custom."
            lede="Why a hand-coded website outperforms page builders on the metrics that get you the next call."
          />
          <RoiComparison />
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#services" className={btnSecondary}>
              See how I work
            </a>
            <a href="/start" className={btnPrimary}>
              Start a project
            </a>
          </div>
        </div>
      </FullSection>

      <FullSection id="what" bgClass="bg-cool-light" compact>
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          <SectionHeader
            eyebrow="The system"
            title="What your business gets."
            lede="Every site is a lead-capture system. Here is the path from visitor to your phone."
          />
          <GravityBentoGrid />
        </div>
      </FullSection>

      <FullSection id="manifesto" bgClass="bg-warm-light" compact>
        <div className="max-w-3xl mx-auto w-full space-y-12">
          <SectionHeader
            align="left"
            eyebrow="The standard"
            title="Built to perform. Zero compromise."
            lede="You own the files. The site stays fast. Every page is built to get you the next call."
          />
          <ol>
            {STANDARD.map((item, index) => (
              <li
                key={item.num}
                className={`flex gap-5 sm:gap-8 items-start py-6 ${index < STANDARD.length - 1 ? "border-b border-slate-200" : ""}`}
              >
                <span className="text-2xl font-black text-slate-600 leading-none min-w-[2.5rem] font-mono">{item.num}</span>
                <div className="space-y-1 min-w-0">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="/about" className={`${btnSecondary} w-full sm:w-auto text-center`}>
              Read my story
            </a>
            <a href="/start" className={`${btnPrimary} w-full sm:w-auto text-center`}>
              Start a project
            </a>
          </div>
        </div>
      </FullSection>

      <FullSection id="reviews" bgClass="bg-cool-light" compact>
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          <SectionHeader
            eyebrow="Client results"
            title="What clients achieve."
            lede="Feedback from owners who replaced a slow template with a system that answers the phone."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {[
              {
                quote:
                  "Our new website opens instantly. Customer inquiries rose by 80% almost immediately. We went from getting three calls a week to getting three calls a day.",
                initials: "MV",
                name: "Marcus V.",
                role: "Business owner",
              },
              {
                quote:
                  "Inquiries go straight to our phones now. Our customer calls doubled within 30 days. The custom CRM eliminated hours of manual data entry every single week.",
                initials: "DK",
                name: "David K.",
                role: "Local business owner",
              },
              {
                quote:
                  "The CRM saves us hours every week. We never lose a lead, and our response time dropped from hours to minutes. It is the best investment we have made this year.",
                initials: "SL",
                name: "Sarah L.",
                role: "Service company",
              },
            ].map((review) => (
              <figure
                key={review.name}
                className="bg-white p-7 lg:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full space-y-8"
              >
                <blockquote className="text-lg lg:text-xl text-slate-900 leading-relaxed font-bold tracking-tight flex-1">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-4 pt-4 border-t border-slate-100 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-sm font-black">
                    {review.initials}
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-slate-900 block uppercase tracking-wider">{review.name}</span>
                    <span className="text-[10px] font-semibold text-slate-600 block uppercase tracking-widest">{review.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </FullSection>

      <FullSection id="contact" bgClass="bg-warm-light" compact>
        <div className="max-w-6xl mx-auto w-full space-y-10">
          <SectionHeader
            eyebrow="Start here"
            title="Send a brief. Skip the call."
            lede="Name, email, what you need. I reply in one business day with a fixed quote."
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="hidden lg:block lg:col-span-4">
              <HireSteps />
            </div>
            <div className="lg:col-span-8 space-y-4">
              <ContactForm />
              <p className="text-center text-sm font-medium text-slate-600">
                Want the full intake?{" "}
                <a href="/start" className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">
                  Start a project
                </a>
              </p>
            </div>
          </div>
        </div>
      </FullSection>
    </article>
  );
}
