import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import "@/index.css";
import "@/styles/Layout.css";

export const metadata: Metadata = {
  title: "LUMIÈRE - The Eternal Banquet",
  description: "A symphony of shadows and flavors. Dine in the embrace of the night at LUMIÈRE Restaurant.",
  keywords: ["restaurant", "fine dining", "LUMIÈRE", "gothic", "Edmonton"],
  openGraph: {
    title: "LUMIÈRE - The Eternal Banquet",
    description: "A symphony of shadows and flavors. Dine in the embrace of the night.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Header />
          <AudioPlayer />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
