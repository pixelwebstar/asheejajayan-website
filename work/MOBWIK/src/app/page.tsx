import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DeviceService from "@/components/DeviceService";
import Services from "@/components/Services";
import QualityReviews from "@/components/QualityReviews";
import TrustSection from "@/components/TrustSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <DeviceService background="white" />
        <Services />
        <QualityReviews background="white" />
        <TrustSection background="surface-2" />
        <SocialSection background="white" />
      </main>
      <Footer />
    </div>
  );
}

