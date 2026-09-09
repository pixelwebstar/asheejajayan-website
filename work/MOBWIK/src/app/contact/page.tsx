"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CustomSelect from "@/components/CustomSelect";

function ContactContent() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchParams.get("scroll") === "form" && formRef.current) {
      // Small delay to ensure page is fully rendered
      const timeout = setTimeout(() => {
        if (formRef.current) {
          const navbarHeight = 86;
          const elementTop = formRef.current.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementTop - navbarHeight, behavior: "smooth" });
        }
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [searchParams]);

  const servicesList = [
    "Screen Repair",
    "Battery Service",
    "Water Damage",
    "Charging Port",
    "Camera Repair",
    "Data Recovery",
    "Other / Not Listed"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PageHero
          title="CONTACT"
          highlight="TERMINAL."
          subtitle="Support channels available for technical consultations and service scheduling. Reach out for immediate assistance."
        />
        <div ref={formRef} className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Contact Billboard Grid */}
              <div className="lg:col-span-5 bg-white border border-border rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <div className="grid grid-cols-2 gap-[1px] bg-border h-full min-h-[600px]">
                  {[
                    { label: "Phone", value: "+1 (780) 360-7447", link: "tel:+17803607447" },
                    { label: "WhatsApp", value: "+1 (780) 360-7447", link: "https://wa.me/17803607447" },
                    { label: "Email", value: "ADMIN@ASHEEJAJAYAN.COM", link: "mailto:admin@asheejajayan.com" },
                    { label: "G-Business", value: "MOBWIK OFFICIAL", link: "#" },
                    { label: "Address", value: "11910 76TH STREET", link: "https://maps.google.com/?q=11910+76th+Street" },
                    { label: "Schedule", value: "09:00 - 18:00", link: "#" },
                    { label: "Careers", value: "JOIN THE TEAM", link: "/about" },
                    { label: "Privacy", value: "PROTOCOLS", link: "/about" },
                    { label: "Instagram", value: "@MOBILEWIK", link: "#" },
                    { label: "Facebook", value: "MOBWIK REPAIR", link: "#" },
                    { label: "X (Twitter)", value: "@MOBWIK", link: "#" },
                    { label: "LinkedIn", value: "MOBWIK DATA", link: "#" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      className="flex flex-col items-center justify-center p-8 bg-white hover:bg-primary group transition-all text-center"
                    >
                      <div className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase group-hover:text-white/70 mb-3">{item.label}</div>
                      <div className="text-sm font-black text-secondary group-hover:text-white uppercase leading-tight tracking-tight">
                        {item.value}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7 bg-white border border-border p-12 rounded-lg shadow-md">
                <h3 className="text-3xl font-black text-secondary uppercase tracking-tight mb-10 text-center">INQUIRY FORM</h3>
                <form className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black tracking-widest uppercase text-secondary">Full Name</label>
                      <input type="text" className="w-full p-4 border border-border rounded-md bg-slate-50 focus:outline-none focus:border-primary transition-colors text-sm font-medium" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black tracking-widest uppercase text-secondary">Email Address</label>
                      <input type="email" className="w-full p-4 border border-border rounded-md bg-slate-50 focus:outline-none focus:border-primary transition-colors text-sm font-medium" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-widest uppercase text-secondary">Device Model</label>
                    <input type="text" className="w-full p-4 border border-border rounded-md bg-slate-50 focus:outline-none focus:border-primary transition-colors text-sm font-medium" />
                  </div>

                  <CustomSelect options={servicesList} label="Service Required" />

                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-widest uppercase text-secondary">Message</label>
                    <textarea rows={1} className="w-full p-4 border border-border rounded-md bg-slate-50 focus:outline-none focus:border-primary transition-colors text-sm font-medium" />
                  </div>
                  <div className="flex justify-center pt-4">
                    <button type="submit" className="px-20 bg-primary text-white py-5 rounded-md font-black flex items-center justify-center hover:bg-primary/90 transition-all text-sm uppercase tracking-tight">
                      <span>Send Inquiry</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
