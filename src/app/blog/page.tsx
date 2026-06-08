"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28";

const articles = [
  {
    id: "cost-custom-website",
    title: "How Much Does a Custom Website Actually Cost?",
    desc: "A direct, transparent breakdown of design, development, and hosting expenses for small business owners.",
    readTime: "4 min read",
    tag: "BUDGET",
    slug: "cost-custom-website"
  },
  {
    id: "wordpress-vs-custom",
    title: "Custom Web Design vs WordPress: An Honest Comparison",
    desc: "We compare load speeds, security loopholes, plugin maintenance issues, and conversion rates to show the real difference.",
    readTime: "5 min read",
    tag: "COMPARISON",
    slug: "wordpress-vs-custom"
  },
  {
    id: "crm-small-business",
    title: "Why Your Small Business Needs a Customer Database (CRM)",
    desc: "How automated lead capture prevents dropped phone calls and saves hours of manual follow-up every single week.",
    readTime: "3 min read",
    tag: "OPERATIONS",
    slug: "crm-small-business"
  }
];

function HeroSection({ children, bgClass }: { children: ReactNode; bgClass: string }) {
  return (
    <section className={`hero-section relative py-20 sm:py-32 ${bgClass} border-b border-gray-100 overflow-hidden`}>
       {/* Background overlay image */}
       <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('/hero-bg.webp')] bg-cover bg-center" />
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

function FullSection({ children, bgClass, id }: { children: ReactNode; bgClass: string; id?: string }) {
  return (
    <section id={id} className={`full-section relative py-16 sm:py-24 ${bgClass} border-b border-gray-100`}>
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

export default function BlogIndex() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const scrollToArticles = () => {
    document.getElementById("articles-list")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      {/* Hero (Warm Sand) */}
      <HeroSection bgClass="bg-warm-light">
        <motion.div 
          className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8"
          initial="initial"
          animate="whileInView"
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Web Insights.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Articles written to help business owners understand speed, search engine rankings, and workflow automation.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToArticles}
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 font-medium text-white transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
            >
              <span className="mr-2">See Articles</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </HeroSection>

      {/* Blog List (Cool Slate) */}
      <FullSection id="articles-list" bgClass="bg-cool-light">
        <div className="max-w-4xl mx-auto w-full space-y-8">
          <div className="space-y-6">
            {articles.map((art, i) => (
              <motion.div
                key={art.id}
                initial="initial"
                whileInView="whileInView"
                variants={fadeInUp}
                custom={i}
              >
                <Link href={`/blog/${art.slug}`} className="block">
                  <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left group">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono bg-slate-100 px-3 py-1 rounded-sm">
                        {art.tag}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        {art.readTime}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                        {art.title}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed font-medium">
                        {art.desc}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Read Article
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </FullSection>
    </div>
  );
}
