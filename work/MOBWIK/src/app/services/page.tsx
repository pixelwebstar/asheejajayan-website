import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import DeviceService from "@/components/DeviceService";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PageHero 
          title="REPAIR"
          highlight="SOLUTIONS."
          subtitle="Expert hardware repair services performed under strict technical standards for all your essential devices."
        />
        <DeviceService background="white" />


        {/* Section 2: Technical Solutions (From Components) */}
        <Services />

        {/* Section 3: Warranty */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-border rounded-lg overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-secondary p-16 flex flex-col justify-center items-center text-center">
                <h2 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">WARRANTY TERMS</h2>
                <h3 className="text-4xl font-black text-white uppercase tracking-tight leading-none mb-8">QUALITY<br />ASSURANCE</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We stand behind the quality of our components and the expertise of our technicians.
                </p>
              </div>
              <div className="lg:w-2/3 p-16 space-y-12">
                <div className="grid sm:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <div className="w-12 h-[2px] bg-primary" />
                    <h4 className="text-sm font-black text-secondary uppercase tracking-wider">Parts Warranty</h4>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed">
                      All replacement parts are covered by a standard 12-month warranty against manufacturing defects, ensuring your device operates reliably.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-[2px] bg-primary" />
                    <h4 className="text-sm font-black text-secondary uppercase tracking-wider">Service Guarantee</h4>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed">
                      Our repairs are conducted by certified professionals. If an issue arises related to our workmanship, we are committed to resolving it promptly.
                    </p>
                  </div>
                </div>
                <div className="pt-12 border-t border-border flex flex-col sm:flex-row gap-6">
                  <a href="/contact?scroll=form" className="px-10 py-5 bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary/90 transition-all text-center rounded">Start Repair</a>
                  <a href="/about" className="px-10 py-5 border border-border text-secondary text-[10px] font-black uppercase tracking-[0.3em] hover:bg-slate-50 transition-all text-center rounded">Read Terms</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
