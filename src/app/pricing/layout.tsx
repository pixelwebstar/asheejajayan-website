import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Fixed-Rate Packages - Amrith Sheeja Jayan",
  description: "Transparent, fixed-price pricing tiers and interactive custom cost estimator for custom coded web applications and marketing sites.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
