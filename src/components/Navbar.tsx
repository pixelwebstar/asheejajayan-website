"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

/* ─── Isolated scroll progress bar ─── */
function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0 && barRef.current) {
        barRef.current.style.width = `${(window.scrollY / scrollHeight) * 100}%`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="absolute bottom-0 left-0 h-[3px] bg-slate-900 z-50 transition-[width] duration-75 ease-out"
      style={{ width: "0%" }}
    />
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const activeIndex = nav.findIndex((item) => {
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  });
  const currentIndex = activeIndex === -1 ? 0 : activeIndex;
  const prevIndex = (currentIndex - 1 + nav.length) % nav.length;
  const nextIndex = (currentIndex + 1) % nav.length;

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border no-swipe">
      {/* Row 1: Brand & Actions (Intense, solid cool slate-blue trust color) */}
      <div className="border-b border-border bg-[#F0F4F8]">
        <div className="mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28">
          <div className="flex h-14 sm:h-16 items-center justify-between gap-4">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="shrink-0 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-foreground hover:text-foreground/80 focus-visible:outline-none transition-colors"
            >
              Amrith Sheeja Jayan
            </Link>

            <Link
              href="/contact"
              className="bg-foreground text-background text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-2 sm:px-5 sm:py-2.5 rounded hover:bg-foreground/90 transition-colors shrink-0"
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>

      {/* Row 2: Navigation Links (Solid white background for clear contrast) */}
      <div className="bg-white border-b border-border/50">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-12">
          {/* Desktop Nav (Visible on md and up) */}
          <nav
            className="hidden md:flex h-12 items-center overflow-x-auto whitespace-nowrap scrollbar-none justify-between"
            aria-label="Site Navigation Desktop"
          >
            {nav.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`inline-flex h-full items-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-colors focus:outline-none px-2 ${active
                    ? "text-primary font-black"
                    : "text-muted hover:text-foreground"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Carousel Nav (Visible on mobile only) — CSS transitions instead of Framer Motion */}
          <nav
            className="flex md:hidden h-12 items-center justify-between relative select-none w-full"
            aria-label="Site Navigation Mobile"
          >
            {/* Prev Page Column */}
            <div className="w-[30%] h-full flex items-center justify-center relative overflow-hidden">
              <Link
                href={nav[prevIndex].href}
                className="w-full h-full flex items-center justify-center focus-visible:outline-none select-none text-[9px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap truncate max-w-[80px]"
              >
                {nav[prevIndex].label}
              </Link>
            </div>

            {/* Left Arrow (Positioned absolutely on the 30% line) */}
            <Link
              href={nav[prevIndex].href}
              className="absolute left-[30%] -translate-x-1/2 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-500 hover:text-slate-700 px-2 py-1.5 transition-colors shrink-0 z-10 select-none focus-visible:outline-none"
              aria-label="Previous Page"
            >
              ‹
            </Link>

            {/* Active Page Column */}
            <div className="w-[40%] h-full flex items-center justify-center relative overflow-hidden">
              <Link
                href={nav[currentIndex].href}
                className="w-full h-full flex items-center justify-center focus-visible:outline-none select-none text-[10px] font-black uppercase tracking-[0.2em] text-primary whitespace-nowrap truncate max-w-[90px]"
                onClick={(e) => handleNavClick(e, nav[currentIndex].href)}
              >
                {nav[currentIndex].label}
              </Link>
            </div>

            {/* Right Arrow (Positioned absolutely on the 70% line) */}
            <Link
              href={nav[nextIndex].href}
              className="absolute left-[70%] -translate-x-1/2 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-500 hover:text-slate-700 px-2 py-1.5 transition-colors shrink-0 z-10 select-none focus-visible:outline-none"
              aria-label="Next Page"
            >
              ›
            </Link>

            {/* Next Page Column */}
            <div className="w-[30%] h-full flex items-center justify-center relative overflow-hidden">
              <Link
                href={nav[nextIndex].href}
                className="w-full h-full flex items-center justify-center focus-visible:outline-none select-none text-[9px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap truncate max-w-[80px]"
              >
                {nav[nextIndex].label}
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Scroll Progress Bar — isolated to prevent re-renders */}
      <ScrollProgressBar />
    </header>
  );
}
