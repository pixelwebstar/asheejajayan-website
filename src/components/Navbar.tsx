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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border no-swipe">
      <div className="border-b border-border bg-[#F0F4F8]">
        <div className="mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28">
          <div className="flex h-14 sm:h-16 items-center justify-between gap-4">
            <a
              href="/"
              data-same
              className="shrink-0 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-foreground hover:text-foreground/80 focus-visible:outline-none transition-colors"
            >
              Amrith Sheeja Jayan
            </a>

            <a
              href="/contact"
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
            {nav.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                data-nav={href}
                data-same
                className="inline-flex h-full items-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-colors focus:outline-none px-2 text-muted hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>

          <nav
            className="flex md:hidden h-12 items-center justify-between relative select-none w-full"
            aria-label="Site Navigation Mobile"
          >
            <div className="w-[30%] h-full flex items-center justify-center relative overflow-hidden">
              <a
                href="/contact"
                data-slot="prev"
                className="w-full h-full flex items-center justify-center focus-visible:outline-none select-none text-[9px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap truncate max-w-[80px]"
              >
                Contact
              </a>
            </div>

            <a
              href="/contact"
              data-slot="prev-arrow"
              className="absolute left-[30%] -translate-x-1/2 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-500 hover:text-slate-700 px-2 py-1.5 transition-colors shrink-0 z-10 select-none focus-visible:outline-none"
              aria-label="Previous Page"
            >
              ‹
            </a>

            <div className="w-[40%] h-full flex items-center justify-center relative overflow-hidden">
              <a
                href="/"
                data-slot="current"
                data-same
                className="w-full h-full flex items-center justify-center focus-visible:outline-none select-none text-[10px] font-black uppercase tracking-[0.2em] text-primary whitespace-nowrap truncate max-w-[90px]"
              >
                Home
              </a>
            </div>

            <a
              href="/about"
              data-slot="next-arrow"
              className="absolute left-[70%] -translate-x-1/2 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-500 hover:text-slate-700 px-2 py-1.5 transition-colors shrink-0 z-10 select-none focus-visible:outline-none"
              aria-label="Next Page"
            >
              ›
            </a>

            <div className="w-[30%] h-full flex items-center justify-center relative overflow-hidden">
              <a
                href="/about"
                data-slot="next"
                className="w-full h-full flex items-center justify-center focus-visible:outline-none select-none text-[9px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap truncate max-w-[80px]"
              >
                About
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div
        id="scroll-progress"
        className="absolute bottom-0 left-0 h-[3px] bg-slate-900 z-50 w-0 transition-[width] duration-75 ease-out"
        aria-hidden="true"
      />
    </header>
  );
}
