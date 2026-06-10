import Link from "next/link";
import React from "react";

const articleData: Record<string, {
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  content: React.ReactNode;
}> = {
  "cost-custom-website": {
    title: "How Much Does a Custom Website Actually Cost?",
    category: "BUDGET",
    readTime: "4 min read",
    publishDate: "June 2026",
    content: (
      <div className="space-y-6">
        <p>
          For small business owners, purchasing a website is often a confusing process of navigating varying quotes—ranging from free visual builder accounts to $20,000 agency contracts. To understand the true cost, we must break down design, development, and maintenance.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">1. Visual Builder Platforms vs. Custom Coding</h3>
        <p>
          Visual builder platforms like Squarespace, Wix, or Shopify charge ongoing monthly subscriptions. While a base account is relatively low-cost, adding plugins, booking forms, custom calculators, or e-commerce capabilities can quickly elevate monthly charges. In contrast, a custom-coded website is built from scratch. You pay a fixed development fee and own 100% of your production files.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">2. Infrastructure & Hosting Costs</h3>
        <p>
          Custom HTML/React/Next.js code compiles into static production assets. Because these files are incredibly lightweight, hosting is either free or very low-cost. You do not pay for server processing power or monthly builder rent.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">3. Capital Asset vs. Recurring Expense</h3>
        <p>
          When you hand-code a website, you treat development as a business asset. You do not rent pages; you own the code. If your business scales, your web capabilities scale with you, without additional lock-in fees or plugin vulnerabilities.
        </p>
      </div>
    )
  },
  "wordpress-vs-custom": {
    title: "Custom Web Design vs WordPress: An Honest Comparison",
    category: "COMPARISON",
    readTime: "5 min read",
    publishDate: "May 2026",
    content: (
      <div className="space-y-6">
        <p>
          WordPress powers a massive portion of the web, but its database-first structure is heavily bloated for clean marketing goals. For business owners seeking speed, security, and lead conversion, comparing custom design and templates is critical.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">1. The Speed Disadvantage</h3>
        <p>
          WordPress relies on databases to fetch page content dynamically on every visit. Combined with heavy page-builder themes and various third-party plugins, total code sizes easily balloon to 3–6MB. This creates rendering delays, causing mobile visitors to abandon pages before they load. Hand-coded websites compile under 50KB, loading in 0.3s.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">2. Security Vulnerabilities</h3>
        <p>
          WordPress platforms require continuous core, theme, and plugin updates. Because plugins are created by separate third-party creators, they represent common entry points for security exploits. Custom-coded frontends do not run databases or query interpreters behind pages, minimizing common hacking risks.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">3. Zero Plugin Maintenance</h3>
        <p>
          With hand-coded websites, there are no plugin database sync errors, theme incompatibilities, or security configuration tasks. Your website remains fast and stable without weekly check-ups.
        </p>
      </div>
    )
  },
  "crm-small-business": {
    title: "Why Your Small Business Needs a Customer Database (CRM)",
    category: "OPERATIONS",
    readTime: "3 min read",
    publishDate: "April 2026",
    content: (
      <div className="space-y-6">
        <p>
          Many local trades and service companies lose leads simply because of disjointed communication. Inquiries get caught in email spam folders, or contractors forget to record phone details into spreadsheets. A custom lead database (CRM) solves this workflow gap.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">1. Automated Lead Capture</h3>
        <p>
          Instead of routing contact forms to standard emails, custom CRM links save submission details directly into a secure lead database. Even if you miss an email notification, customer records remain structured and archived.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">2. Instant Text Notifications</h3>
        <p>
          Custom CRM integrations send instant notifications to your phone when a prospect submits an intake brief. Getting back to a client in minutes—while their search intent is highest—doubles closing rates.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">3. Structured Follow-up Logs</h3>
        <p>
          A central database allows you to log contact history, project scope records, and payment timelines. Your business runs as a professional system, not a collection of post-it notes.
        </p>
      </div>
    )
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "cost-custom-website" },
    { slug: "wordpress-vs-custom" },
    { slug: "crm-small-business" },
  ];
}

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;
  const article = articleData[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-warm-light flex items-center justify-center py-20 px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-black text-slate-900">Article Not Found</h1>
          <p className="text-sm text-slate-600 font-medium">The requested blog article does not exist.</p>
          <Link href="/blog" className="inline-block bg-slate-900 text-white font-bold uppercase tracking-wider text-[10px] px-6 py-3 rounded hover:bg-slate-800 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full text-slate-900 bg-white antialiased selection:bg-slate-900 selection:text-white">
      
      {/* 1. ARTICLE HERO HEADER (Warm Sand - No CTA buttons) */}
      <section className="relative w-full bg-warm-light py-20 sm:py-32 border-b border-slate-200/60 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(15,23,42,0.02),transparent_60%)] pointer-events-none" />
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-12 flex flex-col items-start space-y-6 relative z-10">
          <div className="flex gap-4 items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono animate-fade-in-up">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1] animate-fade-in-up animate-delay-100">
            {article.title}
          </h1>

          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono animate-fade-in-up animate-delay-200">
            PUBLISHED BY AMRITH · {article.publishDate}
          </div>
        </div>
      </section>

      {/* 2. ARTICLE BODY (Cool Slate background, White text card - NO CTA buttons) */}
      <section className="w-full bg-cool-light py-12 sm:py-20 border-b border-slate-200/60">
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-12">
          <div className="bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-12 shadow-sm text-slate-700 text-sm sm:text-base leading-relaxed font-medium font-sans animate-fade-in-up animate-delay-100">
            {article.content}
            
            <div className="pt-8 mt-12 border-t border-slate-100 flex justify-between items-center">
              <Link 
                href="/blog"
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 animate-fade-in-up animate-delay-200"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARTICLE FOOTER CTA (Warm Sand - CTA allowed) */}
      <section className="w-full bg-warm-light py-20 sm:py-32 border-b border-slate-200/60 flex items-center">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-12 flex flex-col items-start space-y-6 relative z-10">
          
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 font-mono block animate-fade-in-up">
              FINAL ARTICLE PROMPT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 animate-fade-in-up animate-delay-100">
              Want to optimize your website?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl leading-relaxed animate-fade-in-up animate-delay-100">
            Let&apos;s discuss building a fast, secure, hand-coded system designed to turn traffic into qualified inquiries.
          </p>

          <div className="pt-2 animate-fade-in-up animate-delay-200">
            <Link
              href="/pricing"
              className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px] px-8 py-4 rounded hover:bg-slate-800 transition-all text-center focus:outline-none"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
