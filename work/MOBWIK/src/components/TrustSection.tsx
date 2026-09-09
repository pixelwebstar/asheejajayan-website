"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "ALEX K.",
    role: "LEAD TECHNICIAN",
    text: "We maintain a professional-grade environment for all hardware procedures. Every device undergoes a rigorous 24-point diagnostic check before release.",
    rating: 5,
  },
  {
    name: "SARAH M.",
    role: "SERVICE MANAGER",
    text: "Standardized protocols are non-negotiable. We source only OEM-spec components to ensure the structural integrity of every repair.",
    rating: 5,
  },
  {
    name: "DAVID H.",
    role: "SHOP OWNER",
    text: "Transparency is our foundation. Our technicians are trained to provide clear technical explanations so clients understand exactly how their hardware is being restored.",
    rating: 5,
  },
  {
    name: "EMMA W.",
    role: "HARDWARE SPECIALIST",
    text: "Precision is our priority. We utilize advanced micro-soldering and diagnostic tools to solve complex board-level issues that others might dismiss.",
    rating: 5,
  },
];

interface TrustSectionProps {
  background?: "white" | "surface-2";
}

const TrustSection = ({ background = "surface-2" }: TrustSectionProps) => {
  const [flippedIndex, setFlippedIndex] = React.useState<number | null>(null);

  const technicalIndicators = [
    ["Board-Level Protocol", "Circuit Analysis", "Signal Restoration"],
    ["Micro-Soldering", "IC Replacement", "Trace Repair"],
    ["Hardware Integrity", "Structural Bonding", "Material Testing"],
    ["Diagnostic Logic", "Root Cause Analysis", "System Validation"]
  ];

  return (
    <section id="reviews" className={`py-24 ${background === "white" ? "bg-white" : "bg-surface-2"} relative overflow-hidden border-b border-border`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-4xl lg:text-6xl font-black text-secondary leading-none uppercase">STRICT <br />STANDARDS</p>
          </div>
          <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
            Standardized repair workflows and premium components ensure the highest level of reliability for every device we handle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              onClick={() => setFlippedIndex(flippedIndex === i ? null : i)}
              className={`flip-card ${flippedIndex === i ? "flipped" : ""} h-full flex flex-col`}
            >
              <div className="flip-card-inner h-full flex flex-col flex-1">
                {/* Front */}
                <div className="flip-card-front h-full w-full flex-1 p-10 border border-border bg-white hover:border-primary transition-all group flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex text-primary mb-6 space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary" />
                      ))}
                    </div>
                    <p className="text-lg font-medium text-slate-600 mb-8 leading-relaxed italic">&quot;{review.text}&quot;</p>
                  </div>
                  <div className="flex justify-between items-end border-t border-border pt-6">
                    <div>
                      <div className="font-black text-secondary uppercase tracking-widest text-xs mb-1">{review.name}</div>
                      <div className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase">{review.role}</div>
                    </div>
                    <div className="text-[10px] font-black text-slate-400">STAFF</div>
                  </div>
                </div>

                {/* Back */}
                <div className="flip-card-back p-10 border border-border bg-surface-2 flex flex-col items-start text-left justify-center">
                  <h4 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-8 self-center">TECHNICAL STANDARD</h4>
                  <ul className="space-y-4 mb-10 w-full">
                    {technicalIndicators[i % technicalIndicators.length].map((point, sIndex) => (
                      <li key={sIndex} className="flex items-start gap-3 group/point">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-500 leading-relaxed uppercase tracking-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact?scroll=form"
                    className="inline-flex items-center justify-center w-full py-4 bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Our Process
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default TrustSection;
