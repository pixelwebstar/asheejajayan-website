import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface-2 border-t border-border pt-12 lg:pt-20 pb-6 lg:pb-10">
      <div className="mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6 mb-12 lg:mb-16">

          {/* Branding - Column 1 */}
          <div className="col-span-2 md:col-span-4 space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                Amrith Sheeja Jayan
              </span>
            </div>
            <p className="text-muted font-medium leading-relaxed text-sm max-w-xs md:max-w-[260px] mx-auto md:mx-0">
              I build websites designed specifically to grow your business. Everything I create is focused on getting you more clients and making your operations smoother.
            </p>
          </div>

          {/* Pages - Column 2 */}
          <div className="col-span-1 md:col-span-2 space-y-6 text-center md:text-left">
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase">PAGES</h2>
            <ul className="flex flex-col gap-2">
              {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-xs font-bold text-foreground hover:text-muted transition-colors uppercase tracking-wider inline-flex items-center min-h-11"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Column 3 */}
          <div className="col-span-1 md:col-span-2 space-y-6 text-center md:text-left">
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase">SERVICES</h2>
            <ul className="flex flex-col gap-2">
              {["Websites", "Layouts", "Automation", "Support", "SEO"].map((item) => (
                <li key={item}>
                  <a
                    href="/services"
                    className="text-xs font-bold text-foreground hover:text-muted transition-colors uppercase tracking-wider inline-flex items-center min-h-11"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Column 4 */}
          <div className="col-span-1 md:col-span-2 space-y-6 text-center md:text-left">
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase">RESOURCES</h2>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Start Project", href: "/contact" },
                { label: "FAQ", href: "/contact" },
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Security", href: "/privacy" }
              ].map((item) => (
                <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs font-bold text-foreground hover:text-muted transition-colors uppercase tracking-wider inline-flex items-center min-h-11"
                    >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Column 5 */}
          <div className="col-span-1 md:col-span-2 space-y-6 text-center md:text-left">
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase">CONTACT</h2>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Booking", href: "/pricing" },
                { label: "Email", href: "mailto:hello@amrith.com" },
                { label: "Phone", href: "tel:+1234567890" },
                { label: "GitHub", href: "https://github.com" },
                { label: "LinkedIn", href: "https://www.linkedin.com" }
              ].map((item) => {
                const external = item.href.startsWith("http");
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs font-bold text-foreground hover:text-muted transition-colors uppercase tracking-wider inline-flex items-center min-h-11"
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-center items-center text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.3em] text-muted gap-6">
          <p>© 2026 AMRITH SHEEJA JAYAN. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
