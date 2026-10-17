import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "A one-page website is ₹25,000, paid once. Hosting has no monthly fee. Larger plans are priced here before the work starts.",
  alternates: { canonical: "/pricing" },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
