import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BOOT_SCRIPT, NAV_SCRIPT } from "@/lib/smart-vh";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" type="image/webp" href="/hero-bg-1280.webp" media="(min-width: 1024px)" fetchPriority="high" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "body{font-family:ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",sans-serif}",
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background">
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-slate-900 focus:text-white focus:px-4 focus:py-3 focus:rounded"
        >
          Skip to main content
        </a>
        <Navbar />
        <script dangerouslySetInnerHTML={{ __html: NAV_SCRIPT }} />
        <main id="main-content" className="flex-grow pt-[var(--navbar-h)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
