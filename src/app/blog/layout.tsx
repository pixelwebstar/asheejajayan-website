import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systems Optimization Blog - Amrith Sheeja Jayan",
  description: "Practical guides on SEO rankings, local Google Ads, database structures, and Next.js performance optimizations for business growth.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
