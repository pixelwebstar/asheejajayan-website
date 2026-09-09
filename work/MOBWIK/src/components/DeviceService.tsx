"use client";

import React from "react";
import { Smartphone, Laptop, Tablet, Watch, Headphones, Cpu, CheckCircle2 } from "lucide-react";

const devices = [
  { title: "Smartphones", desc: "Screen repair, battery replacement, and diagnostics for all major iPhone and Android models.", icon: <Smartphone className="w-10 h-10" /> },
  { title: "Tablets", desc: "Comprehensive repairs for iPads and Android tablets, including screen replacements and charge ports.", icon: <Tablet className="w-10 h-10" /> },
  { title: "Laptops", desc: "Hardware upgrades, screen repairs, and battery replacements for MacBooks and standard PC laptops.", icon: <Laptop className="w-10 h-10" /> },
  { title: "Smartwatches", desc: "Delicate glass repair and battery restoration for Apple Watch and other premium wearables.", icon: <Watch className="w-10 h-10" /> },
  { title: "Accessories", desc: "Testing and repair of high-end accessories to ensure optimal connection and functionality.", icon: <Headphones className="w-10 h-10" /> },
  { title: "Custom Devices", desc: "Specialized diagnostics and hardware restoration for unique personal electronic devices.", icon: <Cpu className="w-10 h-10" /> },
];

interface DeviceServiceProps {
  background?: "white" | "surface-2";
}

const DeviceService = ({ background = "white" }: DeviceServiceProps) => {
  const [flippedIndex, setFlippedIndex] = React.useState<number | null>(null);

  const seoServices: { [key: string]: string[] } = {
    "Smartphones": ["iPhone Screen Repair", "Samsung Battery Fix", "Pixel Camera Restoration"],
    "Tablets": ["iPad Glass Replacement", "Surface Battery Service", "Charging Port Recovery"],
    "Laptops": ["MacBook Logic Board Fix", "Dell Screen Replacement", "SSD Data Recovery"],
    "Smartwatches": ["Apple Watch Glass Fix", "Battery Restoration", "Sensor Diagnostics"],
    "Accessories": ["Professional Testing", "Hardware Diagnostics", "Connection Restoration"],
    "Custom Devices": ["Board-Level Repair", "Specialized Restoration", "Hardware Recovery"],
  };

  return (
    <section className={`py-24 ${background === "white" ? "bg-white" : "bg-surface-2"} border-b border-border`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-4xl lg:text-6xl font-black text-secondary leading-none uppercase">DEVICES <br />WE SERVICE</p>
          </div>
          <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
            Expert care for your daily tech. We handle a wide range of mobile and personal computing devices with professional precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border">
          {devices.map((item, index) => (
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
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-secondary uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium mb-10 min-h-[5rem]">{item.desc}</p>
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
                  <h4 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-8 self-center">TOP SERVICES</h4>
                  <ul className="space-y-4 mb-10 w-full">
                    {seoServices[item.title]?.map((service, sIndex) => (
                      <li key={sIndex} className="flex items-start gap-3 group/point">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-500 leading-relaxed uppercase tracking-tight">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact?scroll=form"
                    className="inline-flex items-center justify-center w-full py-4 bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book Repair
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


export default DeviceService;
