import React from "react";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Projects", href: "/project" },
  { label: "Blog", href: "/blog" },
];

const services = [
  { label: "Websites", href: "/services#websites" },
  { label: "Web Apps", href: "/services#web-apps" },
  { label: "CRM", href: "/services#crm-software" },
  { label: "Maps", href: "/services#google-map" },
  { label: "Ads", href: "/services#google-ads" },
  { label: "Support", href: "/services#support-ops" },
];

const resources = [
  { label: "Start Project", href: "/start" },
  { label: "Ask a Question", href: "/contact" },
  { label: "FAQ", href: "/pricing#faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const contact = [
  { label: "Start", href: "/start" },
  { label: "Email", href: "mailto:asheejajayan.com@gmail.com" },
  { label: "GitHub", href: "https://github.com/asheejajayan" },
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
          const isHttp = item.href.startsWith("http");
          return (
            <li key={`${heading}-${item.label}`}>
              <a
                href={item.href}
                className={linkClass}
                {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Amrith Sheeja Jayan</span>
            </div>
            <p className="text-muted font-medium leading-relaxed text-sm max-w-xs md:max-w-[260px] mx-auto md:mx-0">
              Custom websites for business growth. Written brief, fixed quote, no call required.
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
