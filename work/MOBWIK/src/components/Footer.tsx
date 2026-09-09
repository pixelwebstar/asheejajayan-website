import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-surface-2 border-t border-border pt-12 lg:pt-24 pb-6 lg:pb-12">
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28">
        <div className="grid grid-cols-2 lg:grid-cols-9 gap-x-8 gap-y-16 mb-12 lg:mb-20">
          {/* Branding - Spans full width on mobile/tablet, 3 cols on desktop */}
          <div className="col-span-2 lg:col-span-3 space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <span className="text-2xl font-black text-secondary tracking-tighter uppercase">MOB<span className="text-primary">WIK</span></span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed text-sm max-w-[300px] mx-auto lg:mx-0">
              Mobwik is dedicated to providing high-quality, reliable repair services for all your essential devices. We prioritize precision, transparency, and customer satisfaction.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="tel:+17803607447" title="Call Us" className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all rounded">
                <Phone className="w-4 h-4" />
              </a>
              <a href="https://wa.me/17803607447" title="WhatsApp" className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:bg-accent hover:text-white transition-all rounded group">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="https://instagram.com" title="Instagram" className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:bg-[#E4405F] hover:text-white transition-all rounded">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://facebook.com" title="Facebook" className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:bg-[#1877F2] hover:text-white transition-all rounded">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pages & Services Container - Spans 2 cols on mobile/tablet, 4 cols on desktop */}
          <div className="col-span-2 lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Pages */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">PAGES</h4>
              <ul className="flex flex-col gap-6">
                {["Home", "About", "Services", "Reviews", "Contact", "Careers"].map((item) => (
                  <li key={item}>
                    <Link href={item === "Home" ? "/" : item === "Contact" ? "/contact?scroll=form" : `/${item.toLowerCase()}`} className="text-xs font-black text-secondary hover:text-primary transition-colors uppercase tracking-wider block">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">SERVICES</h4>
              <ul className="flex flex-col gap-6">
                {["Screen Repair", "Battery Repair", "Water Damage", "Fix My Phone", "Camera Repair", "Back Glass"].map((item) => (
                  <li key={item}>
                    <Link href="/services" className="text-xs font-black text-secondary hover:text-primary transition-colors uppercase tracking-wider block">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Info - Spans full width on mobile/tablet, 2 cols on desktop */}
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase text-center lg:text-left">BUSINESS INFO</h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: "HOURS", value: "MON-SAT 09:00 - 18:00" },
                { label: "ADDRESS", value: "11910 76TH STREET", href: "https://maps.google.com/?q=11910+76th+Street" },
                { label: "PHONE", value: "+1 (780) 360-7447", href: "tel:+17803607447" },
                { label: "WHATS APP", value: "+1 (780) 360-7447", href: "https://wa.me/17803607447", labelColor: "text-accent lg:text-slate-400" },
                { label: "MAIL", value: "ADMIN@ASHEEJAJAYAN.COM", href: "mailto:admin@asheejajayan.com" },
                { label: "TEAM", value: "ONLINE 24/7", href: "/contact?scroll=form" }
              ].map((item) => (
                <li key={item.label} className="flex flex-col items-center justify-center p-6 bg-white border border-border rounded-md space-y-3 lg:flex-row lg:items-center lg:justify-start lg:p-0 lg:bg-transparent lg:border-none lg:space-y-0 lg:text-xs font-black uppercase tracking-wider group">
                  <span className={`${item.labelColor || 'text-primary lg:text-slate-400'} text-[13px] font-black uppercase tracking-[0.2em] lg:w-28 lg:shrink-0 lg:text-[10px] lg:tracking-widest`}>
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-secondary text-[13px] lg:text-xs hover:text-primary transition-colors select-all">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-secondary text-[13px] lg:text-xs">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-center items-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 gap-6">
          <p>© 2026 MOBWIK. ALL RIGHTS RESERVED.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
