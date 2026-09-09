import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import KeyboardNavigation from "@/components/KeyboardNavigation";
import FloatingContact from "@/components/FloatingContact";
import ServiceWorkerRegistration from "../components/ServiceWorkerRegistration";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const BASE_URL = "https://mobwik.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mobwik | Premium Device Repair",
    template: "%s | Mobwik"
  },
  description: "Expert repair services for all mobile phones and tablets. Screen replacement, battery repair, and water damage recovery with premium quality and warranty.",
  keywords: ["mobile repair", "phone repair", "tablet repair", "screen replacement", "battery replacement", "iPhone repair", "Samsung repair"],
  authors: [{ name: "Mobwik" }],
  creator: "Mobwik",
  publisher: "Mobwik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Mobwik | Premium Device Repair",
    description: "Fast, professional repairs for all your devices. Same-day service available.",
    url: BASE_URL,
    siteName: "Mobwik",
    images: [
      {
        url: "/branding/logo_facebook_banner.png",
        width: 1200,
        height: 630,
        alt: "Mobwik | Premium Device Repair Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobwik | Premium Device Repair",
    description: "Expert repair services for all mobile phones and tablets.",
    images: ["/branding/logo_facebook_banner.png"],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Mobwik",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: "/branding/favicon-96x96.png",
    apple: "/branding/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans select-none" suppressHydrationWarning>
        <KeyboardNavigation />
        {children}
        <FloatingContact />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
