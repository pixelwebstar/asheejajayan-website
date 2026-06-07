import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SwipeNavigation from "@/components/SwipeNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amrith Sheeja Jayan - Web Developer",
  description: "High-performance websites designed to grow your business.",
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
        {/* Smart dynamic viewport height: 
            Updates dynamically on desktop or orientation change, 
            but ignores vertical mobile browser chrome shifts to prevent jank */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var vh = window.innerHeight;
                var vw = window.innerWidth;
                var setVh = function() {
                  document.documentElement.style.setProperty('--vh', vh + 'px');
                };
                setVh();
                window.addEventListener('resize', function() {
                  // Update if width > 768 (desktop) OR if width changed (mobile orientation change)
                  if (window.innerWidth > 768 || window.innerWidth !== vw) {
                    vw = window.innerWidth;
                    vh = window.innerHeight;
                    setVh();
                  }
                });
              })();
            `,
          }}
        />
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
