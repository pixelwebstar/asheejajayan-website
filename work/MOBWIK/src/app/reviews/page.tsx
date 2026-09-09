import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustSection from "@/components/TrustSection";
import PageHero from "@/components/PageHero";
import QualityReviews from "@/components/QualityReviews";

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PageHero 
          title="CLIENT"
          highlight="REVIEWS."
          subtitle="Real feedback from our satisfied customers. We take pride in every repair we complete."
        />
        <QualityReviews background="white" />


        {/* Section 2: Trust Standards */}
        <TrustSection />

        {/* Section 3: Submit Review */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-secondary p-16 rounded-lg overflow-hidden flex flex-col items-center text-center">
              <h2 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">YOUR EXPERIENCE</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none mb-8">SUBMIT A <br />REVIEW</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-lg mb-12">
                We value your honest feedback. Help us maintain our rigorous service standards by sharing your repair experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://g.page/review" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary/90 transition-all text-center rounded">Google Review</a>
                <a href="/contact?scroll=form" className="px-10 py-5 border border-border text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-all text-center rounded">Direct Feedback</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
