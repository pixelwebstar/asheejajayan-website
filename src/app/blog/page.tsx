import Link from "next/link";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import { ARTICLES, readLabel } from "@/lib/blog";
import { btnPrimary, frame } from "@/lib/ui";

const backgrounds = ["bg-cool-light", "bg-warm-light"] as const;

export default function BlogIndex() {
  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Blog</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Why the site is built this way.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            How ads and a website work together, what a premium site is for, and how a visit becomes a call.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <a href={`#${ARTICLES[0].slug}`} className={`${btnPrimary} w-full sm:w-auto`}>
              Start reading
            </a>
          </div>
        </div>
      </HeroSection>

      {ARTICLES.map((article, index) => (
        <FullSection key={article.slug} id={article.slug} bgClass={backgrounds[index % 2]}>
          <div className={`${frame} flex justify-center`}>
            <div className="max-w-3xl w-full space-y-6 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                {article.title}
              </h2>
              <p className="text-sm font-medium text-slate-600">{readLabel(article.minutes)}</p>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">{article.lede}</p>
              <Link href={`/blog/${article.slug}`} className={`${btnPrimary} w-full sm:w-auto`}>
                Read
              </Link>
            </div>
          </div>
        </FullSection>
      ))}
    </article>
  );
}
