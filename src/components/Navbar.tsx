"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/60">
      {/* Row 1: Brand & Actions (Colored like footer using bg-surface-2) */}
      <div className="border-b border-border/40 bg-surface-2">
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

      {/* Row 2: Navigation Links */}
      <div className="bg-surface/30">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-12">
          <nav
            className="flex h-10 sm:h-12 items-center overflow-x-auto whitespace-nowrap scrollbar-none justify-between"
            aria-label="Site Navigation"
          >
            {nav.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`inline-flex h-full items-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-colors focus:outline-none border-b-2 px-1 sm:px-2 ${active
                    ? "text-primary border-primary"
                    : "text-muted border-transparent hover:text-foreground hover:border-border"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
