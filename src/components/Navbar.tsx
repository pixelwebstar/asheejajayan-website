"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((window.scrollY / scrollHeight) * 100);
      }
    };
    
    // Run initially
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = nav.findIndex((item) => {
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  });
  const currentIndex = activeIndex === -1 ? 0 : activeIndex;
  const prevIndex = (currentIndex - 1 + nav.length) % nav.length;
  const nextIndex = (currentIndex + 1) % nav.length;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      {/* Row 1: Brand & Actions (Intense, solid cool slate-blue trust color) */}
      <div className="border-b border-border bg-[#F0F4F8]">
        <div className="mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28">
          <div className="flex h-14 sm:h-16 items-center justify-between gap-4">
            <Link
              href="/"
              className="shrink-0 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-foreground hover:text-foreground/80 focus-visible:outline-none transition-colors"
            >
              Amrith Sheeja Jayan
            </Link>

            <Link
              href="/pricing"
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

          {/* Mobile Carousel Nav (Visible on mobile only) */}
          <nav
            className="flex md:hidden h-12 items-center justify-between relative select-none"
            aria-label="Site Navigation Mobile"
          >
            {/* Prev Page Peek & Arrow */}
            <div className="flex items-center gap-1.5 w-1/3 justify-start overflow-hidden">
              <Link
                href={nav[prevIndex].href}
                className="text-[9px] font-bold uppercase tracking-wider text-muted/40 whitespace-nowrap truncate max-w-[50px] transition-opacity hover:opacity-75"
              >
                {nav[prevIndex].label}
              </Link>
              <Link
                href={nav[prevIndex].href}
                className="text-lg font-black text-muted hover:text-foreground p-1"
                aria-label="Previous Page"
              >
                ‹
              </Link>
            </div>

            {/* Active Page (Centered) */}
            <div className="w-1/3 text-center flex justify-center items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                {nav[currentIndex].label}
              </span>
            </div>

            {/* Next Page Peek & Arrow */}
            <div className="flex items-center gap-1.5 w-1/3 justify-end overflow-hidden">
              <Link
                href={nav[nextIndex].href}
                className="text-lg font-black text-muted hover:text-foreground p-1"
                aria-label="Next Page"
              >
                ›
              </Link>
              <Link
                href={nav[nextIndex].href}
                className="text-[9px] font-bold uppercase tracking-wider text-muted/40 whitespace-nowrap truncate max-w-[50px] transition-opacity hover:opacity-75"
              >
                {nav[nextIndex].label}
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Scroll Progress Bar indicator */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-slate-900 z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
}
