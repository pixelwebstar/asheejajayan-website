import React from "react";
import { Star } from "lucide-react";

interface SocialSectionProps {
  background?: "white" | "surface-2";
}

const SocialSection = ({ background = "white" }: SocialSectionProps) => {
  return (
    <section className={`py-24 ${background === "white" ? "bg-white" : "bg-surface-2"} border-b border-border`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matched to Services) */}
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="space-y-4">
            <h4 className="text-4xl lg:text-6xl font-black text-secondary uppercase leading-none">SOCIAL <br />PRESENCE</h4>
          </div>
          <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
            Standardized repair workflows and premium components ensure the highest level of reliability for every device we handle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left: Google Business Profile */}
          <div className={`${background === "white" ? "bg-surface-2" : "bg-white"} p-12 border border-border flex flex-col justify-between space-y-8`}>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-4 border border-border shadow-sm">
                  <Star className="w-10 h-10 text-primary fill-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-secondary tracking-tighter uppercase">5.0 GOOGLE RATING</h3>
                  <p className="text-xs font-bold text-slate-500 tracking-[0.2em]">OFFICIAL BUSINESS PROFILE</p>
                </div>
              </div>
              
              <p className="text-slate-600 font-medium leading-relaxed">
                Join over 2,400 satisfied customers who have experienced our technical excellence. We maintain a perfect rating through strict quality control and transparent service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary px-10 py-5 flex items-center justify-center uppercase text-xs tracking-[0.2em]"
              >
                <span>Visit Profile</span>
              </a>
              <a 
                href="#contact" 
                className="bg-white border-2 border-secondary text-secondary px-10 py-5 flex items-center justify-center uppercase text-xs tracking-[0.2em] hover:bg-secondary hover:text-white transition-all font-black"
              >
                <span>Write a Review</span>
              </a>
            </div>
          </div>

          {/* Right: Social Connectivity Grid (4 Items - Text Only) */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "INSTAGRAM", color: "hover:text-pink-600" },
              { name: "FACEBOOK", color: "hover:text-blue-600" },
              { name: "YOUTUBE", color: "hover:text-red-600" },
              { name: "X (TWITTER)", color: "hover:text-slate-900" },
            ].map((social, i) => (
              <a 
                key={i}
                href="#"
                className={`flex flex-col items-center justify-center p-12 border border-border transition-all group ${background === "white" ? "bg-surface-2" : "bg-white"} hover:border-primary ${social.color}`}
              >
                <span className="text-xs font-black tracking-[0.3em] uppercase">{social.name}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialSection;
