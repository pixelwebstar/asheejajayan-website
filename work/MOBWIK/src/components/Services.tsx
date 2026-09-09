"use client";

import React from "react";
import { Smartphone, Battery, Droplets, Camera, Shield, Usb, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Screen Repair",
    description: "We fix cracked screens and touch problems quickly using high-quality parts for all iPhone and Android models. Get your screen looking new today.",
    icon: <Smartphone className="w-10 h-10" />,
  },
  {
    title: "Battery Service",
    description: "Is your phone dying too fast? We replace old batteries with new ones to give your phone a full day of life again. Fast and reliable battery service.",
    icon: <Battery className="w-10 h-10" />,
  },
  {
    title: "Water Damage",
    description: "Dropped your phone in water? Don't turn it on! Bring it to us for a professional deep clean to save your device from any permanent internal damage.",
    icon: <Droplets className="w-10 h-10" />,
  },
  {
    title: "Charging Port",
    description: "Phone not charging or cable feels loose? We can repair or replace your charging port so you can get back to full power without any more issues.",
    icon: <Usb className="w-10 h-10" />,
  },
  {
    title: "Camera Repair",
    description: "Blurry photos or a broken lens? We repair front and back cameras so you can start taking clear, sharp pictures and videos again with your smartphone.",
    icon: <Camera className="w-10 h-10" />,
  },
  {
    title: "Data Recovery",
    description: "Lost your photos or important files? Even if your phone is broken, we can help you get your precious data back safely and securely for peace of mind.",
    icon: <Shield className="w-10 h-10" />,
  },
];

const Services = () => {
  const [flippedIndex, setFlippedIndex] = React.useState<number | null>(null);

  const seoServices: { [key: string]: string[] } = {
    "Screen Repair": ["iPhone OLED Replacement", "Android Glass Fix", "Precision Calibration"],
    "Battery Service": ["OEM Battery Install", "Capacity Restoration", "Power Management Fix"],
    "Water Damage": ["Ultrasonic Board Clean", "Corrosion Extraction", "Hardware Decontamination"],
    "Charging Port": ["Type-C Micro-Soldering", "Lightning Port Fix", "Power Input Repair"],
    "Camera Repair": ["Lens Optics Fix", "Sensor Alignment", "Focus Motor Repair"],
    "Data Recovery": ["Dead Board Data Extraction", "SSD Partition Recovery", "Forensic Data Salvage"],
  };

  return (
    <section id="services" className="py-24 bg-surface-2 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-4xl lg:text-6xl font-black text-secondary leading-none uppercase">REPAIR <br />SOLUTIONS</p>
          </div>
          <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
            Standardized repair workflows and premium components ensure the highest level of reliability for every device we handle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
              className={`flip-card ${flippedIndex === index ? "flipped" : ""} h-full flex flex-col`}
            >
              <div className="flip-card-inner h-full flex flex-col flex-1">
                {/* Front */}
                <div className={`flip-card-front p-12 transition-colors group relative border-border flex flex-col items-center text-center h-full w-full flex-1
                  ${index % 2 === 0 ? "bg-white" : "bg-surface-2"}`}>
                  <div className="text-primary mb-8 transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-secondary uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium mb-10 min-h-[5rem]">{service.description}</p>
                  <a 
                    href="/contact?scroll=form"
                    className="inline-flex items-center justify-center w-full py-4 border-2 border-primary text-primary font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all mt-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Book Repair
                  </a>
                </div>

                {/* Back */}
                <div className={`flip-card-back p-12 transition-colors flex flex-col items-start text-left justify-center
                  ${index % 2 === 0 ? "bg-surface-2" : "bg-white"}`}>
                  <h4 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-8 self-center">TECHNICAL SPECS</h4>
                  <ul className="space-y-4 mb-10 w-full">
                    {seoServices[service.title]?.map((seo, sIndex) => (
                      <li key={sIndex} className="flex items-start gap-3 group/point">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-500 leading-relaxed uppercase tracking-tight">{seo}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact?scroll=form"
                    className="inline-flex items-center justify-center w-full py-4 bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Get Quote
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


export default Services;
