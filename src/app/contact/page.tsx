import type { Metadata } from "next";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import HireSteps from "@/components/HireSteps";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";
import { frame } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call, WhatsApp, or send the form. I reply within one business day.",
  alternates: { canonical: "/contact" },
};

const direct = [
  { label: "Phone", href: PHONE_TEL, value: PHONE_DISPLAY },
  { label: "WhatsApp", href: WHATSAPP_URL, value: "WhatsApp" },
  { label: "Email", href: `mailto:${EMAIL}`, value: EMAIL },
].filter((item) => item.href);

export default function Contact() {
  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Contact</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Tell me about the work.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Call, WhatsApp, or send the form. Tell me what the business needs. I reply within one business day.
          </p>
        </div>
      </HeroSection>

      <FullSection id="ask" bgClass="bg-cool-light">
        <div className={frame}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-8">
              <SectionHeader
                align="left"
                eyebrow="Start here"
                title="Tell me about the work."
                lede="Tell me what the business needs. I reply within one business day."
              />
              <HireSteps />
            </div>
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </FullSection>

      <FullSection id="direct" bgClass="bg-warm-light">
        <div className={`${frame} space-y-8`}>
          <SectionHeader eyebrow="Direct" title="Or reach me here." />
          <div>
            {direct.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 py-5 ${index < direct.length - 1 ? "border-b border-slate-200" : ""}`}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">{item.label}</span>
                <a
                  href={item.href}
                  className="text-lg font-bold text-slate-900"
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </FullSection>
    </article>
  );
}
