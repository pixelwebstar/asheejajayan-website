"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrowserMockup from "@/components/BrowserMockup";

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-16";

// Premium Button Styles
const btnPrimary = "inline-flex items-center justify-center rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] min-w-[220px]";
const btnSecondary = "inline-flex items-center justify-center rounded border-2 border-slate-900 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-50 active:scale-[0.98] min-w-[220px]";

const articles = [
  {
    id: "cost-custom-website",
    title: "How Much Does a Custom Website Actually Cost?",
    desc: "A direct, transparent breakdown of design, development, and hosting expenses for small business owners.",
    readTime: "4 min read",
    tag: "BUDGET",
    slug: "cost-custom-website",
    mockup: "/screenshots/novacookers.png",
    url: "https://novacookers.vercel.app"
  },
  {
    id: "wordpress-vs-custom",
    title: "Custom Web Design vs WordPress: An Honest Comparison",
    desc: "We compare load speeds, security loopholes, plugin maintenance issues, and conversion rates to show the real difference.",
    readTime: "5 min read",
    tag: "COMPARISON",
    slug: "wordpress-vs-custom",
    mockup: "/screenshots/jsgastech.png",
    url: "https://jsgastech.com"
  },
  {
    id: "crm-small-business",
    title: "Why Your Small Business Needs a Customer Database (CRM)",
    desc: "How automated lead capture prevents dropped phone calls and saves hours of manual follow-up every single week.",
    readTime: "3 min read",
    tag: "OPERATIONS",
    slug: "crm-small-business",
    mockup: "/screenshots/checkersmark.png",
    url: "https://checkersmark.com"
  }
];

const categories = ["All", "BUDGET", "COMPARISON", "OPERATIONS"];

function HeroSection({ children, bgClass, bgImage }: { children: ReactNode; bgClass: string; bgImage?: string }) {
  return (
    <section className={`hero-section relative py-16 sm:py-20 ${bgClass} border-b border-gray-100 overflow-hidden`}>
      {bgImage && (
        <>
          {/* 1. Base image (Full opacity, crisp on edges) */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          />
          {/* 2. Localized Blur Mask: Blurs background details ONLY behind the text, fading to sharp at the edges */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              maskImage: "radial-gradient(circle, black 15%, transparent 60%)",
              WebkitMaskImage: "radial-gradient(circle, black 15%, transparent 60%)",
            }}
          />
          {/* 3. Radial mask overlay: 92% opaque in the center, fading to 0% at the edges */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(250, 245, 240, 0.92) 0%, rgba(250, 245, 240, 0.65) 45%, rgba(250, 245, 240, 0) 80%)",
            }}
          />
        </>
      )}
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

function FullSection({ children, bgClass, id }: { children: ReactNode; bgClass: string; id?: string }) {
  return (
    <section id={id} className={`full-section relative py-20 lg:py-32 ${bgClass} border-b border-gray-100`}>
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === "All" || art.tag === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToArticles = () => {
    document.getElementById("articles-list")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      {/* Hero (Warm Sand) */}
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <motion.div 
          className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block">
              BLOG
            </span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Learn how to grow online.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Read practical guides on improving your search engine ranking, getting customer reviews, and running successful local ads.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <button
              onClick={scrollToArticles}
              className={`${btnPrimary} w-full sm:w-auto cursor-pointer`}
            >
              See Articles
            </button>
            <Link href="/contact#form" className={`${btnSecondary} w-full sm:w-auto`}>
              Start Project
            </Link>
          </div>
        </motion.div>
      </HeroSection>

      {/* Blog List & Search (Cool Slate) */}
      <FullSection id="articles-list" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full space-y-12 lg:space-y-16">
          
          {/* Search & Categories Bar */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white p-6 rounded-3xl border border-slate-100 shadow-sm max-w-5xl mx-auto w-full">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer uppercase ${
                    activeCategory === cat 
                      ? "bg-slate-900 text-white shadow-xs" 
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:max-w-sm">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-2.5 rounded-full border border-slate-200 bg-slate-50/50 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-xs font-bold uppercase tracking-wider transition-all placeholder:text-slate-400"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-[10px]">
                🔍
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="max-w-5xl mx-auto w-full">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <AnimatePresence mode="popLayout">
                {filteredArticles.map((art, i) => {
                  const isFeatured = i === 0 && searchQuery === "" && activeCategory === "All";
                  return (
                    <motion.div
                      key={art.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`group ${isFeatured ? "md:col-span-2" : ""}`}
                    >
                      <Link href={`/blog/${art.slug}`} className="block h-full">
                        <div className={`bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full text-left`}>
                          <div className={`p-6 sm:p-8 flex flex-col justify-between gap-6 ${isFeatured ? "md:flex-row md:items-center" : ""}`}>
                            
                            {/* Card Content */}
                            <div className={`space-y-4 flex-1`}>
                              <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-sm">
                                  {art.tag}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                                  {art.readTime}
                                </span>
                              </div>
                              
                              <h3 className={`text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-slate-600 transition-colors leading-snug`}>
                                {art.title}
                              </h3>
                              
                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                {art.desc}
                              </p>

                              <div className="pt-2 flex items-center text-xs font-bold text-slate-900 group-hover:text-slate-600 transition-colors uppercase tracking-widest font-mono">
                                Read Article
                                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </div>
                            </div>

                            {/* Card Mockup Image */}
                            <div className={`w-full ${isFeatured ? "md:max-w-md md:w-[420px]" : ""} aspect-[520/310] shrink-0 rounded-2xl overflow-hidden border border-slate-100 shadow-xs bg-slate-50/50`}>
                              <BrowserMockup url={art.url} screenshotUrl={art.mockup} title={art.title} isVisible={true} />
                            </div>

                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {filteredArticles.length === 0 && (
                <div className="col-span-full py-16 text-center text-slate-400 font-medium text-sm">
                  No matching articles found.
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </FullSection>
    </div>
  );
}
