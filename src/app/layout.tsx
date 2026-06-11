import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SwipeNavigation from "@/components/SwipeNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asheejajayan.com"),
  title: {
    default: "Amrith Sheeja Jayan - Web Developer",
    template: "%s | Amrith Sheeja Jayan",
  },
  description: "High-performance websites designed to grow your business. Custom Next.js development, CRM integration, and Google Business optimization.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asheejajayan.com",
    siteName: "Amrith Sheeja Jayan",
    title: "Amrith Sheeja Jayan - Web Developer",
    description: "High-performance websites designed to grow your business. Custom Next.js development, CRM integration, and Google Business optimization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amrith Sheeja Jayan - Web Developer",
    description: "High-performance websites designed to grow your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <SwipeNavigation>
          <main className="flex-grow pt-24 sm:pt-28">
            {children}
          </main>
        </SwipeNavigation>
        <Footer />
      </body>
    </html>
  );
}
