import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Project - Amrith Sheeja Jayan",
  description: "Discuss your business goals and request a custom Next.js web design proposal. Get your intake analysis in 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
