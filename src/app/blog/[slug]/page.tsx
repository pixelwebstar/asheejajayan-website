import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import { ARTICLES, articleBySlug, readLabel } from "@/lib/blog";
import { btnPrimary, btnSecondary, frame } from "@/lib/ui";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();
  return {
    title: article.title.replace(/\.$/, ""),
    description: article.description,
  };
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;
  const article = articleBySlug(slug);

  if (!article) notFound();

  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Blog</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            {article.title}
          </h1>
          <p className="text-sm font-medium text-slate-600">{readLabel(article.minutes)}</p>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl">{article.lede}</p>
        </div>
      </HeroSection>

      <FullSection bgClass="bg-cool-light" className="section-auto">
        <div className={`${frame} flex justify-center`}>
          <div className="max-w-3xl w-full space-y-12">
          {article.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-slate-600 font-medium">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <Link href="/blog" className="inline-flex text-sm font-bold text-slate-900">
            All notes
          </Link>
          </div>
        </div>
      </FullSection>

      <FullSection bgClass="bg-warm-light">
        <div className={`${frame} flex justify-center`}>
          <div className="max-w-3xl w-full space-y-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            {article.closeTitle}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">{article.close}</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href={article.closeHref} className={`${btnPrimary} w-full sm:w-auto`}>
              {article.closeLabel}
            </Link>
            <Link href="/start" className={`${btnSecondary} w-full sm:w-auto`}>
              Start a project
            </Link>
          </div>
          </div>
        </div>
      </FullSection>
    </article>
  );
}
