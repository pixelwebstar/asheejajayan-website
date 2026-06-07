"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28";

const articles = [
  {
    id: "cost-custom-website",
    title: "How Much Does a Custom Website Actually Cost?",
    desc: "A direct, transparent breakdown of design, development, and hosting expenses for small business owners.",
    readTime: "4 min read",
    tag: "BUDGET"
  },
  {
    id: "wordpress-vs-custom",
    title: "Custom Web Design vs WordPress: An Honest Comparison",
    desc: "We compare load speeds, security loopholes, plugin maintenance issues, and conversion rates to show the real difference.",
    readTime: "5 min read",
    tag: "COMPARISON"
  },
  {
    id: "crm-small-business",
    title: "Why Your Small Business Needs a Customer Database (CRM)",
    desc: "How automated lead capture prevents dropped phone calls and saves hours of manual follow-up every single week.",
    readTime: "3 min read",
    tag: "OPERATIONS"
  }
];

function HeroSection({ children, bgClass }: { children: ReactNode; bgClass: string }) {
  return (
    <section className={`hero-section relative py-16 sm:py-20 ${bgClass} border-b border-gray-100`}>
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

function FullSection({ children, bgClass, id }: { children: ReactNode; bgClass: string; id?: string }) {
  return (
    <section id={id} className={`full-section relative py-12 sm:py-16 ${bgClass} border-b border-gray-100`}>
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

export default function BlogIndex() {
  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      {/* Hero (Warm Sand) */}
      <HeroSection bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Web Insights.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
            Articles written to help business owners understand speed, search engine rankings, and workflow automation.
          </p>
        </div>
      </HeroSection>

      {/* Blog List (Cool Slate) */}
      <FullSection id="articles-list" bgClass="bg-cool-light">
        <div className="max-w-4xl mx-auto w-full space-y-8">
          <div className="space-y-6">
            {articles.map((art) => (
              <div
                key={art.id}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 block text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    {art.tag}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    {art.readTime}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight hover:text-slate-500 transition-colors cursor-pointer">
                    {art.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {art.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FullSection>
    </div>
  );
}
