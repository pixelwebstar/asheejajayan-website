import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

const articleTitles: Record<string, string> = {
  "cost-custom-website": "How Much Does a Custom Website Actually Cost? - Amrith Sheeja Jayan",
  "wordpress-vs-nextjs": "WordPress vs. Next.js: The Complete Guide - Amrith Sheeja Jayan",
  "crm-small-business": "Why Your Small Business Needs a CRM - Amrith Sheeja Jayan",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = articleTitles[slug] || "Blog Post - Amrith Sheeja Jayan";
  return {
    title,
    description: "Read high-performance web development and search optimization guides.",
  };
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
