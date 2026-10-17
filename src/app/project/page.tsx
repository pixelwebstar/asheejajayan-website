import Link from "next/link";
import BrowserMockup from "@/components/BrowserMockup";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import { PROJECTS } from "@/lib/projects";
import { btnPrimary, btnSecondary, frame } from "@/lib/ui";

const backgrounds = ["bg-cool-light", "bg-warm-light"] as const;

export default function ProjectsIndex() {
  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Work</span>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Sites for real businesses.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Each one was built so a customer could find the business and get in touch.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <a href={`#${PROJECTS[0].slug}`} className={`${btnSecondary} w-full sm:w-auto`}>
              See the work
            </a>
            <Link href="/start" className={`${btnPrimary} w-full sm:w-auto`}>
              Start a project
            </Link>
          </div>
        </div>
      </HeroSection>

      {PROJECTS.map((project, index) => (
        <FullSection key={project.slug} id={project.slug} bgClass={backgrounds[index % 2]}>
          <div className={`${frame} flex flex-col items-center text-center gap-6`}>
            <div className="w-full max-w-3xl">
              <BrowserMockup full url={project.url} screenshotUrl={project.shot} title={project.name} />
            </div>
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                {project.name}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">{project.lede}</p>
            </div>
            <Link href={`/project/${project.slug}`} className={`${btnPrimary} w-full sm:w-auto`}>
              See this work
            </Link>
          </div>
        </FullSection>
      ))}
    </article>
  );
}
