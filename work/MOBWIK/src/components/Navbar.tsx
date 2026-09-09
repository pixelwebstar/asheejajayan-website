"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-200 bg-surface-2"
    >
      {/* Scroll Indicator - Unified Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10 z-[60]" />
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-primary z-[60] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28 relative z-10">
        {/* First Header Row */}
        <div className={`flex justify-between items-center transition-all duration-200 ${isScrolled ? "py-3" : "py-5"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tighter text-secondary uppercase leading-none">
              Mob<span className="text-primary font-black">wik</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-bold uppercase tracking-widest transition-colors ${pathname === link.href ? "text-primary" : "text-secondary/70 hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+17803607447"
              className="bg-primary text-white px-6 py-3 rounded-md font-bold hover:bg-primary/90 transition-all text-sm uppercase tracking-wider shadow-sm flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Call Now Button */}
          <div className="lg:hidden flex items-center">
            <a
              href="tel:+17803607447"
              className="bg-primary text-white px-4 py-2 rounded-md font-bold hover:bg-primary/90 transition-all text-xs uppercase tracking-wider shadow-sm flex items-center space-x-2 leading-none"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Secondary Header (Links) */}
      <div className="lg:hidden w-full bg-white relative z-10">
        <div className="w-full px-6 sm:px-12">
          <div className="flex w-full items-center divide-x divide-black/10 overflow-x-auto py-2 no-scrollbar">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex-1 px-2 py-2 text-center text-[10px] sm:text-[11px] whitespace-nowrap font-bold uppercase tracking-widest transition-colors leading-none ${pathname === link.href ? "text-primary" : "text-secondary/70 hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
