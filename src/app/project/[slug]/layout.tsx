import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

const projectNames: Record<string, string> = {
  mobwik: "Mobwik Mobile Database Case Study - Amrith Sheeja Jayan",
  dakeek: "Dakeek Logistics Dispatch Case Study - Amrith Sheeja Jayan",
  checkersmark: "CheckersMark CRM Portal Case Study - Amrith Sheeja Jayan",
  novacookers: "NovaCookers Storefront Case Study - Amrith Sheeja Jayan",
  bonder: "Bonder Collaboration Platform Case Study - Amrith Sheeja Jayan",
  sayahnam: "Sayahnam Digital Publishing Archive Case Study - Amrith Sheeja Jayan",
  ksingh: "KSingh Engineering Portfolio Case Study - Amrith Sheeja Jayan",
  jsgastech: "JSGasTech Marketing Platform Case Study - Amrith Sheeja Jayan",
  lumiere: "Lumiere Interior Design Showcase Case Study - Amrith Sheeja Jayan",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = projectNames[slug] || "Case Study - Amrith Sheeja Jayan";
  return {
    title,
    description: "Read details of custom Next.js web design engineering and client outcomes.",
  };
}

export default function ProjectSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
