import Link from "next/link";
import BrowserMockup from "@/components/BrowserMockup";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { SCOPES } from "@/lib/catalog";
import { btnPrimary, btnSecondary, frame } from "@/lib/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Custom Development",
  description: "Websites and Google Ads for businesses in India. Custom apps, CRM, Maps, and support.",
};

const DETAILS = [
  {
    id: "websites",
    mockup: { url: "https://novacookers.vercel.app", shots: ["/screenshots/novacookers.webp", "/screenshots/jsgastech.webp"], title: "Product Showroom" },
    included: ["Pages built for your business", "Mobile-first design", "A Call now button and a form"],
  },
  {
    id: "web-apps",
    mockup: { url: "https://checkersmark.com", shots: ["/screenshots/checkersmark.webp", "/screenshots/dakeek.webp"], title: "Workspace Operating System" },
    included: ["A private area for your clients", "Built around how your team works", "You own it"],
  },
  {
    id: "crm-software",
    mockup: { url: "https://bonder.vercel.app", shots: ["/screenshots/bonder.webp", "/screenshots/sayahnam.webp"], title: "Collaboration Platform" },
    included: ["A Checkersmark account", "Enquiries saved", "Custom CRM if you need it"],
  },
  {
    id: "google-map",
    mockup: { url: "https://jsgastech.com", shots: ["/screenshots/jsgastech.webp", "/screenshots/novacookers.webp"], title: "Marketing Platform" },
    included: ["Google Business profile", "Call now", "Photos and reviews"],
  },
  {
    id: "google-ads",
    mockup: { url: "https://mobwik.vercel.app", shots: ["/screenshots/mobwik.webp", "/screenshots/jsgastech.webp"], title: "Mobile Search Engine" },
    included: ["Ads for people already searching", "A page that matches the ad", "See which search brought them", "I keep them running"],
  },
  {
    id: "support-ops",
    mockup: { url: "https://ksinghconstruction.vercel.app", shots: ["/screenshots/ksingh.webm", "/screenshots/lumiere.webm"], title: "Professional Portfolio" },
    included: ["Daily backups", "The site stays online", "Text and photo updates"],
  },
] as const;

export default function Services() {
  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Services</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Custom design and development.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            I design the website, write the code, and run the ads for people already searching.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <Link href="/project" className={`${btnSecondary} w-full sm:w-auto`}>
              See the work
            </Link>
            <Link href="/start" className={`${btnPrimary} w-full sm:w-auto`}>
              Start a project
            </Link>
          </div>
        </div>
      </HeroSection>

      <FullSection id="index" bgClass="bg-cool-light">
        <div className={`${frame} space-y-12`}>
          <SectionHeader align="left" eyebrow="Index" title="Choose the work." />
          <div>
            {SCOPES.map((scope, index) => (
              <a
                key={scope.value}
                href={`#${scope.href.split("#")[1]}`}
                className={`flex gap-5 sm:gap-8 items-start py-5 ${index < SCOPES.length - 1 ? "border-b border-slate-200" : ""} group`}
              >
                <span className="text-2xl font-black text-slate-600 leading-none min-w-[2.5rem] font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-slate-600">
                    {scope.label}
                  </h2>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mt-1">{scope.desc}</p>
                </div>
                <span className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-slate-500 shrink-0 pt-1">
                  {scope.weeks}
                </span>
              </a>
            ))}
          </div>
        </div>
      </FullSection>

      {SCOPES.map((scope, index) => {
        const detail = DETAILS[index];
        const cool = index % 2 === 1;
        return (
          <FullSection key={scope.value} id={detail.id} bgClass={cool ? "bg-cool-light" : "bg-warm-light"}>
            <div className={frame}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className={`lg:col-span-5 space-y-6 ${cool ? "lg:order-2" : ""}`}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
                    {String(index + 1).padStart(2, "0")} / {scope.label}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1]">{scope.label}.</h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">{scope.desc}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{scope.weeks}</p>
                  <ul className="space-y-2">
                    {detail.included.map((item) => (
                      <li key={item} className="text-sm text-slate-600 font-medium flex gap-3">
                        <span className="text-slate-400 font-mono text-[10px] pt-1">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/start?scope=${scope.value}`} className={`${btnPrimary} w-full sm:w-auto`}>
                    Start with {scope.label.toLowerCase()}
                  </Link>
                </div>
                <div className={`lg:col-span-7 w-full ${cool ? "lg:order-1" : ""}`}>
                  <div className="w-full aspect-[520/310] lg:aspect-auto lg:h-[280px]">
                    <BrowserMockup url={detail.mockup.url} screenshotUrl={[...detail.mockup.shots]} title={detail.mockup.title} />
                  </div>
                </div>
              </div>
            </div>
          </FullSection>
        );
      })}

      <FullSection bgClass="bg-cool-light">
        <div className={`${frame} text-center space-y-8`}>
          <SectionHeader
            eyebrow="Next"
            title="Tell me about the work."
            lede="Call, WhatsApp, or send the form. I reply within one business day."
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className={`${btnSecondary} w-full sm:w-auto`}>
              Ask a question
            </Link>
            <Link href="/start" className={`${btnPrimary} w-full sm:w-auto`}>
              Start a project
            </Link>
          </div>
        </div>
      </FullSection>
    </article>
  );
}
