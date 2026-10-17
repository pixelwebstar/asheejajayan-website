import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Work",
    template: "%s | Amrith Sheeja Jayan",
  },
  description: "Websites and apps for real businesses, built so a customer can find the business and get in touch.",
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
