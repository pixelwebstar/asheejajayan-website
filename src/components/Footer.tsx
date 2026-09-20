import React from "react";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const services = [
  { label: "Websites", href: "/services#websites" },
  { label: "Layouts", href: "/services" },
  { label: "Automation", href: "/services#crm-software" },
  { label: "Support", href: "/services#support-ops" },
  { label: "SEO", href: "/services" },
  { label: "Ads", href: "/services#google-ads" },
];

const resources = [
  { label: "Start Project", href: "/contact" },
  { label: "FAQ", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/privacy" },
  { label: "Projects", href: "/project" },
];

const contact = [
  { label: "Booking", href: "/pricing" },
  { label: "Email", href: "mailto:hello@amrith.com" },
  { label: "Phone", href: "tel:+1234567890" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

const linkClass =
  "text-xs font-bold text-foreground hover:text-muted transition-colors uppercase tracking-wider inline-flex items-center min-h-9 md:min-h-11";

function FooterColumn({
  heading,
  items,
}: {
  heading: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="col-span-1 md:col-span-2 space-y-4 md:space-y-6 text-center md:text-left">
      <h2 className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase">{heading}</h2>
      <ul className="footer-links">
        {items.map((item) => {
          const external = item.href.startsWith("http");
          return (
            <li key={`${heading}-${item.label}`}>
              <a
                href={item.href}
                className={linkClass}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="site-footer bg-surface-2 border-t border-border">
      <div className="mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6 mb-10 lg:mb-16">
          <div className="col-span-2 md:col-span-4 space-y-4 md:space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                Amrith Sheeja Jayan
              </span>
            </div>
            <p className="text-muted font-medium leading-relaxed text-sm max-w-xs md:max-w-[260px] mx-auto md:mx-0">
              I build websites designed specifically to grow your business. Everything I create is focused on getting you more clients and making your operations smoother.
            </p>
          </div>

          <FooterColumn heading="PAGES" items={pages} />
          <FooterColumn heading="SERVICES" items={services} />
          <FooterColumn heading="RESOURCES" items={resources} />
          <FooterColumn heading="CONTACT" items={contact} />
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-center items-center text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.3em] text-muted gap-6">
          <p>© 2026 AMRITH SHEEJA JAYAN. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
