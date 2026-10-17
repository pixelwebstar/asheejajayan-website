import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Amrith Sheeja Jayan",
  },
  description: "How ads and a website work together, what a premium site is for, and how a visit becomes a call.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
