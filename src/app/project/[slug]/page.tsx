import type { Metadata } from "next";
import Link from "next/link";
import BrowserMockup from "@/components/BrowserMockup";
import FullSection from "@/components/FullSection";
import HeroSection from "@/components/HeroSection";
import { PROJECTS, projectBySlug } from "@/lib/projects";
import { btnPrimary, frame } from "@/lib/ui";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  return {
    title: project?.name ?? "Work",
    description: project?.lede ?? "A website built so a customer can find the business and get in touch.",
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) {
    return (
      <HeroSection bgClass="bg-warm-light">
        <div className="flex flex-col text-center items-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">This work is not here.</h1>
          <Link href="/project" className={btnPrimary}>
            Back to the work
          </Link>
        </div>
      </HeroSection>
    );
  }

  return (
    <article className="w-full text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
      <HeroSection bgClass="bg-warm-light" bgImage="/hero-bg.webp">
        <div className="flex flex-col text-center items-center max-w-4xl mx-auto space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Work</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            {project.name}
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 font-medium max-w-2xl">{project.lede}</p>
        </div>
      </HeroSection>

      <FullSection bgClass="bg-cool-light">
        <div className={`${frame} flex justify-center`}>
          <div className="max-w-3xl w-full space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            What was in the way.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">{project.problem}</p>
          </div>
        </div>
      </FullSection>

      <FullSection bgClass="bg-warm-light">
        <div className={frame}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                What I built.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">{project.solution}</p>
            </div>
            <div className="lg:col-span-7 w-full">
              <div className="w-full">
                <BrowserMockup full url={project.url} screenshotUrl={project.shot} title={project.name} />
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      <FullSection bgClass="bg-cool-light">
        <div className={`${frame} flex justify-center`}>
          <div className="max-w-3xl w-full space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            What changed.
          </h2>
          <ul className="space-y-3">
            {project.changed.map((item) => (
              <li key={item} className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
                {item}
              </li>
            ))}
          </ul>
          </div>
        </div>
      </FullSection>

      <FullSection bgClass="bg-warm-light">
        <div className={`${frame} flex justify-center`}>
          <div className="max-w-3xl w-full space-y-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            A site like this.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-xl mx-auto">
            Tell me about the work. I can build a site like this for your business.
          </p>
          <Link href="/start" className={`${btnPrimary} w-full sm:w-auto`}>
            Start a project
          </Link>
          </div>
        </div>
      </FullSection>
    </article>
  );
}
