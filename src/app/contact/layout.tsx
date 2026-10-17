import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Project - Amrith Sheeja Jayan",
  description: "Call, WhatsApp, or send the form. I reply within one business day.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
