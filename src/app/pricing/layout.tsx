import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Starting prices for custom websites, apps, CRM, Maps, ads, and support. Build a quote, then send a brief.",
  alternates: { canonical: "/pricing" },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
