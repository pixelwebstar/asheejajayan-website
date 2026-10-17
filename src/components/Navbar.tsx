"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

const navClass =
  "inline-flex h-full items-center text-[10px] sm:text-xs uppercase tracking-[0.2em] transition-colors focus:outline-none px-2";
const navIdle = `${navClass} font-bold text-muted hover:text-foreground`;
const navActive = `${navClass} font-black text-primary`;

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function isSamePage(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);

  const onStart = pathname.startsWith("/start");
  const onBook = pathname.startsWith("/book");
  let activeIndex = 0;
  for (let i = 0; i < nav.length; i++) {
    if (isCurrent(pathname, nav[i].href)) activeIndex = i;
  }
  const special = onBook ? { href: "/book", label: "Call" } : onStart ? { href: "/start", label: "Start" } : null;
  const prev = special ? nav[nav.length - 1] : nav[(activeIndex - 1 + nav.length) % nav.length];
  const current = special ?? nav[activeIndex];
  const next = special ? nav[0] : nav[(activeIndex + 1) % nav.length];

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = height > 0 ? `${(window.scrollY / height) * 100}%` : "0%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onSamePageClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isSamePage(pathname, href)) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border no-swipe">
      <div className="border-b border-border bg-[#F0F4F8]">
        <div className="mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28">
          <div className="flex h-14 sm:h-16 items-center justify-between gap-4">
            <a
              href="/"
              onClick={onSamePageClick("/")}
              className="shrink-0 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-foreground hover:text-foreground/80 focus-visible:outline-none transition-colors"
            >
              Amrith Sheeja Jayan
            </a>

            <a
              href="/start"
              aria-current={onStart ? "page" : undefined}
              className="bg-foreground text-background text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-2 sm:px-5 sm:py-2.5 rounded hover:bg-foreground/90 transition-colors shrink-0"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-border/50">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-12">
          <nav
            className="hidden md:flex h-12 items-center overflow-x-auto whitespace-nowrap scrollbar-none justify-between"
            aria-label="Site Navigation Desktop"
          >
            {nav.map(({ href, label }) => {
              const active = isCurrent(pathname, href);
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={onSamePageClick(href)}
                  className={active ? navActive : navIdle}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          <nav
            className="flex md:hidden h-12 items-center justify-between relative select-none w-full"
            aria-label="Site Navigation Mobile"
          >
            <div className="w-[30%] h-full flex items-center justify-center relative overflow-hidden">
              <a
                href={prev.href}
                className="w-full h-full flex items-center justify-center focus-visible:outline-none select-none text-[9px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap truncate max-w-[80px]"
              >
                {prev.label}
              </a>
            </div>

            <a
              href={prev.href}
              className="absolute left-[30%] -translate-x-1/2 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-500 hover:text-slate-700 px-2 py-1.5 transition-colors shrink-0 z-10 select-none focus-visible:outline-none"
              aria-label="Previous Page"
            >
              ‹
            </a>

            <div className="w-[40%] h-full flex items-center justify-center relative overflow-hidden">
              <a
                href={current.href}
                aria-current="page"
                onClick={onSamePageClick(current.href)}
                className="w-full h-full flex items-center justify-center focus-visible:outline-none select-none text-[10px] font-black uppercase tracking-[0.2em] text-primary whitespace-nowrap truncate max-w-[90px]"
              >
                {current.label}
              </a>
            </div>

            <a
              href={next.href}
              className="absolute left-[70%] -translate-x-1/2 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-500 hover:text-slate-700 px-2 py-1.5 transition-colors shrink-0 z-10 select-none focus-visible:outline-none"
              aria-label="Next Page"
            >
              ›
            </a>

            <div className="w-[30%] h-full flex items-center justify-center relative overflow-hidden">
              <a
                href={next.href}
                className="w-full h-full flex items-center justify-center focus-visible:outline-none select-none text-[9px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap truncate max-w-[80px]"
              >
                {next.label}
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div
        ref={progressRef}
        id="scroll-progress"
        className="absolute bottom-0 left-0 h-[3px] bg-slate-900 z-50 w-0 transition-[width] duration-75 ease-out"
        aria-hidden="true"
        suppressHydrationWarning
      />
    </header>
  );
}
