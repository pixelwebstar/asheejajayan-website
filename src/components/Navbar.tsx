"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const spinVariants = {
  initial: (dir: number) => ({
    x: dir * 24,
    rotateY: dir * 45,
    opacity: 0,
  }),
  animate: {
    x: 0,
    rotateY: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    },
  },
  exit: (dir: number) => ({
    x: -dir * 24,
    rotateY: -dir * 45,
    opacity: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    },
  }),
};

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
      } else {
        setScrollProgress(0);
      }
    };

    // Run initially
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const activeIndex = nav.findIndex((item) => {
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  });
  const currentIndex = activeIndex === -1 ? 0 : activeIndex;
  const prevIndex = (currentIndex - 1 + nav.length) % nav.length;
  const nextIndex = (currentIndex + 1) % nav.length;
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [direction, setDirection] = useState(0);

  if (pathname !== prevPathname) {
    const prevActiveIndex = nav.findIndex((item) => {
      if (item.href === "/") return prevPathname === "/";
      return prevPathname.startsWith(item.href);
    });
    const lastIdx = prevActiveIndex === -1 ? 0 : prevActiveIndex;

    if (currentIndex !== lastIdx) {
      let dir = currentIndex > lastIdx ? 1 : -1;
      // Handle wrapping
      if (lastIdx === 0 && currentIndex === nav.length - 1) dir = -1;
      if (lastIdx === nav.length - 1 && currentIndex === 0) dir = 1;
      setDirection(dir);
    }
    setPrevPathname(pathname);
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
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

          {/* Mobile Carousel Nav (Visible on mobile only) */}
          <nav
            className="flex md:hidden h-12 items-center justify-between relative select-none w-full"
            aria-label="Site Navigation Mobile"
          >
            {/* Prev Page Column */}
            <div 
              className="w-[30%] h-full flex items-center justify-center relative overflow-hidden"
              style={{ perspective: "150px", transformStyle: "preserve-3d" }}
            >
              <Link
                href={nav[prevIndex].href}
                className="w-full h-full relative block focus-visible:outline-none select-none"
              >
                <AnimatePresence mode="sync" custom={direction}>
                  <motion.div
                    key={prevIndex}
                    custom={direction}
                    variants={spinVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-y-0 left-0 right-3 flex items-center justify-center text-[9px] font-bold uppercase tracking-wider text-muted/40 hover:text-muted/60 transition-colors whitespace-nowrap truncate max-w-[80px] mx-auto"
                  >
                    {nav[prevIndex].label}
                  </motion.div>
                </AnimatePresence>
              </Link>
            </div>

            {/* Left Arrow (Positioned absolutely on the 30% line) */}
            <Link
              href={nav[prevIndex].href}
              className="absolute left-[30%] -translate-x-1/2 top-1/2 -translate-y-1/2 text-lg font-bold text-muted/40 hover:text-foreground/80 px-2 py-1.5 transition-colors shrink-0 z-10 select-none focus-visible:outline-none"
              aria-label="Previous Page"
            >
              ‹
            </Link>

            {/* Active Page Column */}
            <div 
              className="w-[40%] h-full flex items-center justify-center relative overflow-hidden"
              style={{ perspective: "150px", transformStyle: "preserve-3d" }}
            >
              <Link
                href={nav[currentIndex].href}
                className="w-full h-full relative block focus-visible:outline-none select-none"
                onClick={(e) => handleNavClick(e, nav[currentIndex].href)}
              >
                <AnimatePresence mode="sync" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={spinVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-[0.2em] text-primary whitespace-nowrap truncate max-w-[90px] mx-auto"
                  >
                    {nav[currentIndex].label}
                  </motion.div>
                </AnimatePresence>
              </Link>
            </div>

            {/* Right Arrow (Positioned absolutely on the 70% line) */}
            <Link
              href={nav[nextIndex].href}
              className="absolute left-[70%] -translate-x-1/2 top-1/2 -translate-y-1/2 text-lg font-bold text-muted/40 hover:text-foreground/80 px-2 py-1.5 transition-colors shrink-0 z-10 select-none focus-visible:outline-none"
              aria-label="Next Page"
            >
              ›
            </Link>

            {/* Next Page Column */}
            <div 
              className="w-[30%] h-full flex items-center justify-center relative overflow-hidden"
              style={{ perspective: "150px", transformStyle: "preserve-3d" }}
            >
              <Link
                href={nav[nextIndex].href}
                className="w-full h-full relative block focus-visible:outline-none select-none"
              >
                <AnimatePresence mode="sync" custom={direction}>
                  <motion.div
                    key={nextIndex}
                    custom={direction}
                    variants={spinVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-y-0 left-3 right-0 flex items-center justify-center text-[9px] font-bold uppercase tracking-wider text-muted/40 hover:text-muted/60 transition-colors whitespace-nowrap truncate max-w-[80px] mx-auto"
                  >
                    {nav[nextIndex].label}
                  </motion.div>
                </AnimatePresence>
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
