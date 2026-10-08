import GravityBentoGrid from "@/components/GravityBentoGrid";
import HeroSection from "@/components/HeroSection";
import ThreeDGallery from "@/components/ThreeDGallery";
import ContactForm from "@/components/ContactForm";
import MethodTimeline from "@/components/MethodTimeline";
import RoiComparison from "@/components/RoiComparison";
import FullSection from "@/components/FullSection";
import HireSteps from "@/components/HireSteps";
import SectionHeader from "@/components/SectionHeader";
import Picture from "@/components/Picture";
import { btnPrimary, btnSecondary } from "@/lib/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amrith Sheeja Jayan - Web Developer",
  description: "Custom websites and Google Ads for business growth in India.",
  alternates: { canonical: "/" },
};

const HOME_SCOPES = [
  {
    num: "01",
    name: "Websites",
    desc: "From ₹1,50,000. Pay it once, or start with ₹50,000 and finish over 8 months. The site takes the enquiry. The ads bring the people.",
    href: "/services#websites",
  },
  {
    num: "02",
    name: "Web Apps",
    desc: "Private customer portals, booking systems, and internal tools custom-made for your daily business operations.",
    href: "/services#web-apps",
  },
  {
    num: "03",
    name: "CRM Software",
    desc: "Forms that automatically save lead details into your customer database so you never lose inquiries.",
    href: "/services#crm-software",
  },
  {
    num: "04",
    name: "Google Business and Map",
    desc: "Optimizing your Google maps listing so you show up first when customers search locally.",
    href: "/services#google-map",
  },
  {
    num: "05",
    name: "Google Ads",
    desc: "Search ads for people already looking to hire you. ₹30,000 a month paid to Google is where regular enquiries start. New advertisers in India may get ₹20,000 in ad credit.",
    href: "/services#google-ads",
  },
  {
    num: "06",
    name: "Support & Operations",
    desc: "Daily database backups, performance monitoring, and content updates so you never worry about tech.",
    href: "/services#support-ops",
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
            We build the website and run Google Ads, so people who are already searching can find your business and get in touch.
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
        <div className="max-w-[1500px] mx-auto w-full text-center space-y-12 lg:space-y-16 flex flex-col items-center">
          <SectionHeader
            eyebrow="What we do"
            title="Websites and Google Ads."
            lede="The site takes the enquiry. The ads bring the people. We build both, then keep the campaigns running."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full text-left">
            {HOME_SCOPES.map((srv) => (
              <a
                href={srv.href}
                key={srv.num}
                className="bg-white p-6 lg:p-8 xl:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-4 relative hover:shadow-md hover:-translate-y-1 transition-all duration-300 block text-left group"
              >
                <span className="text-xs font-bold text-slate-600 block tracking-widest">{srv.num}</span>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider group-hover:text-muted transition-colors">
                    {srv.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{srv.desc}</p>
                </div>
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
            <a href="#method" className={btnSecondary}>
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
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-16 lg:gap-y-8 items-center">
            <div className="order-1 lg:order-none lg:col-start-6 lg:col-span-7 lg:row-start-1 text-center lg:text-left space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
                MANIFESTO / THE STANDARDS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Built to Perform. <br />Zero Compromise.
              </h2>
            </div>

            <div className="order-2 lg:order-none lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-span-2 w-full flex justify-center lg:justify-start">
              <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5 lg:space-y-6 w-full max-w-sm lg:max-w-[440px] text-center">
                <div className="w-full aspect-square bg-slate-100 border border-slate-200 rounded-2xl relative select-none overflow-hidden shadow-xs">
                  <Picture
                    src="/founder.webp"
                    alt="Portrait of Amrith Sheeja Jayan, founder and lead systems developer"
                    width={800}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-black tracking-tight text-slate-900">
                    Amrith Sheeja Jayan
                  </h3>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest block">
                    Founder / Lead Systems Developer
                  </span>
                </div>
              </div>
            </div>

            <div className="order-3 lg:order-none lg:col-start-6 lg:col-span-7 space-y-8 text-left">
              <div className="space-y-6">
                <div className="space-y-6 pt-2">
                  {[
                    {
                      title: "Zero Platform Retainers",
                      desc: "I hand-code web applications and databases from scratch. No monthly Squarespace or Shopify builder subscriptions. You own 100% of your production files.",
                    },
                    {
                      title: "Sub-0.3s Performance",
                      desc: "Page builders load massive script packages that drive away mobile buyers. We use lightweight code to guarantee instant rendering on every screen.",
                    },
                    {
                      title: "Conversion-Rate Architecture",
                      desc: "We analyze competitor traffic, design clear call-to-actions, and build automated lead databases so your site works 24/7 as a sales engine.",
                    },
                  ].map((pillar) => (
                    <div key={pillar.title} className="space-y-1.5 border-l-2 border-slate-900 pl-4 py-0.5">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">{pillar.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center w-full">
                <a href="/about" className={`${btnSecondary} w-full sm:w-auto text-center`}>
                  Read My Story
                </a>
                <a href="/contact" className={`${btnPrimary} w-full sm:w-auto text-center`}>
                  Start Your Project
                </a>
              </div>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 items-stretch md:items-center md:[perspective:1400px]">
            {[
              {
                quote:
                  "Our new website opens instantly. Customer inquiries rose by 80% almost immediately. We went from getting three calls a week to getting three calls a day.",
                initials: "JA",
                name: "John A.",
                role: "Business owner",
              },
              {
                quote:
                  "Inquiries go straight to our phones now. Our customer calls doubled within 30 days. The custom CRM eliminated hours of manual data entry every single week.",
                initials: "SM",
                name: "Sara M.",
                role: "Local business owner",
              },
              {
                quote:
                  "The CRM saves us hours every week. We never lose a lead, and our response time dropped from hours to minutes. It is the best investment we have made this year.",
                initials: "AP",
                name: "Anna P.",
                role: "Service company",
              },
            ].map((review, index) => (
              <figure
                key={review.name}
                className={`bg-white p-7 lg:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full space-y-8 ${
                  index === 1
                    ? "md:relative md:z-10 md:border-slate-200 md:shadow-xl md:scale-[1.045]"
                    : "md:scale-[0.97]"
                }`}
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
            title="Tell me about the work."
            lede="A website starts at ₹1,50,000. Pay it once, or start with ₹50,000. I reply within one business day."
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="hidden lg:block lg:col-span-4">
              <HireSteps />
            </div>
            <div className="lg:col-span-8 space-y-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </FullSection>
    </article>
  );
}
