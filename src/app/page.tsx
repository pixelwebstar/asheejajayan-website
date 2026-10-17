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
    desc: "Mobile-friendly. Customers can call you from the page.",
    href: "/services#websites",
  },
  {
    num: "02",
    name: "Web Apps",
    desc: "Bookings, logins, and the work your team does each day.",
    href: "/services#web-apps",
  },
  {
    num: "03",
    name: "CRM",
    desc: "A Checkersmark account for your team. Custom CRM if you need it.",
    href: "/services#crm-software",
  },
  {
    num: "04",
    name: "Google Business",
    desc: "People nearby can find you and call.",
    href: "/services#google-map",
  },
  {
    num: "05",
    name: "Google Ads",
    desc: "Ads for people already searching. I run them.",
    href: "/services#google-ads",
  },
  {
    num: "06",
    name: "Support",
    desc: "Backups, and small text changes after launch.",
    href: "/services#support-ops",
  },
];

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Amrith Sheeja Jayan - Custom Web Developer",
    description:
      "Custom websites and Google Ads, so people who are searching can find a business and get in touch.",
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
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Web developer</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Websites built for business growth.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            I build the website and run Google Ads, so people who are searching can find your business and contact you.
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
            eyebrow="What I do"
            title="Websites and Google Ads."
            lede="The site takes the call. The ads bring the people."
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
            lede="A template site and a site built for your business. Here is the difference."
          />
          <RoiComparison />
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#projects" className={btnSecondary}>
              See the work
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
            eyebrow="A new enquiry"
            title="From the form to your phone."
            lede="They fill in the form. The message is saved. You get a text."
          />
          <GravityBentoGrid />
        </div>
      </FullSection>

      <FullSection id="manifesto" bgClass="bg-warm-light" compact>
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-16 lg:gap-y-8 items-center">
            <div className="order-1 lg:order-none lg:col-start-6 lg:col-span-7 lg:row-start-1 text-center lg:text-left space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">
                About me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                I build the site. <br />You own it.
              </h2>
            </div>

            <div className="order-2 lg:order-none lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-span-2 w-full flex justify-center lg:justify-start">
              <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5 lg:space-y-6 w-full max-w-sm lg:max-w-[440px] text-center">
                <div className="w-full aspect-square bg-slate-100 border border-slate-200 rounded-2xl relative select-none overflow-hidden shadow-xs">
                  <Picture
                    src="/founder.webp"
                    alt="Portrait of Amrith Sheeja Jayan"
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
                    Web developer
                  </span>
                </div>
              </div>
            </div>

            <div className="order-3 lg:order-none lg:col-start-6 lg:col-span-7 space-y-8 text-left">
              <div className="space-y-6">
                <div className="space-y-6 pt-2">
                  {[
                    {
                      title: "You Talk to Me",
                      desc: "I design the site and I write the code. The person you talk to is the person who builds it.",
                    },
                    {
                      title: "You Own the Files",
                      desc: "The files are yours. You are not renting a template.",
                    },
                    {
                      title: "You See It First",
                      desc: "You review the pages before anything goes live.",
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
                  Start a project
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
                  "People check the shop on their phone before they come. The page opens, and they call. We get a few more walk-ins in a week. That is enough for us.",
                initials: "RA",
                name: "Ravi",
                role: "Hardware shop, Nashik",
              },
              {
                quote:
                  "The number on Google was an old one. Now they call the parlour from the page. Saturdays are a bit fuller. Nothing sudden, just steadier.",
                initials: "NE",
                name: "Neha",
                role: "Beauty parlour, Jaipur",
              },
              {
                quote:
                  "I used to find messages the next morning. Now a text comes when someone asks for cards. I ring them back the same day, and the order does not sit there.",
                initials: "AM",
                name: "Amit",
                role: "Printing shop, Lucknow",
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
            lede="Tell me what the business needs. I reply within one business day."
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
