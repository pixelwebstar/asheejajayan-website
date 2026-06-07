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
      <div className="bg-white">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-12">
          <nav
            className="flex h-10 sm:h-12 items-center overflow-x-auto whitespace-nowrap scrollbar-none justify-start md:justify-between gap-6 sm:gap-8"
            aria-label="Site Navigation"
          >
            {nav.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`inline-flex h-full items-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-colors focus:outline-none shrink-0 px-1 sm:px-2 ${active
                    ? "text-primary"
                    : "text-muted hover:text-foreground"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
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
