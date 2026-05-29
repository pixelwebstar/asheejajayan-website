import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    >
      <body className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow pt-24 sm:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
