import React from "react";
import { EMAIL, PHONE_TEL, SOCIALS, WHATSAPP_URL } from "@/lib/contact";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Projects", href: "/project" },
  { label: "Blog", href: "/blog" },
];

const services = [
  { label: "Website", href: "/services#websites" },
  { label: "Apps", href: "/services#web-apps" },
  { label: "CRM", href: "/services#crm-software" },
  { label: "Maps", href: "/services#google-map" },
  { label: "Ads", href: "/services#google-ads" },
  { label: "Support", href: "/services#support-ops" },
];

const resources = [
  { label: "Start", href: "/start" },
  { label: "Ask", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Call", href: "/book" },
];

const contact = [
  { label: "Phone", href: PHONE_TEL },
  { label: "WhatsApp", href: WHATSAPP_URL },
  { label: "Email", href: `mailto:${EMAIL}` },
  { label: "Start", href: "/start" },
  { label: "Ask", href: "/contact" },
].filter((item) => item.href);

const linkClass =
  "text-xs font-bold text-foreground hover:text-muted transition-colors uppercase tracking-wider inline-flex items-center min-h-9 md:min-h-11";

function SocialIcon({ name }: { name: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true as const };
  if (name === "GitHub") {
    return (
      <svg {...common}>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }
  if (name === "X") {
    return (
      <svg {...common}>
        <path d="M18.24 2H21.5l-7.12 8.14L22.75 22h-6.56l-5.14-6.72L5.7 22H2.42l7.62-8.7L1.25 2h6.72l4.64 6.14L18.24 2Zm-1.15 18h1.8L7.01 3.9H5.08L17.09 20Z" />
      </svg>
    );
  }
  if (name === "Instagram") {
    return (
      <svg {...common}>
        <path d="M12 2.2c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85C2.42 3.92 3.93 2.38 7.15 2.27 8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-2.18.1-3.19 1.1-3.29 3.29-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.1 2.18 1.11 3.19 3.29 3.29 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c2.18-.1 3.19-1.11 3.29-3.29.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.1-2.18-1.11-3.19-3.29-3.29-1.24-.06-1.61-.07-4.76-.07Zm0 3.07a4.93 4.93 0 1 1 0 9.86 4.93 4.93 0 0 1 0-9.86Zm0 1.8a3.13 3.13 0 1 0 0 6.26 3.13 3.13 0 0 0 0-6.26Zm6.27-2.2a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.8 2.7 4.8 6.2V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z" />
    </svg>
  );
}

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
      <div className="footer-frame">
        <div className="mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6">
            <div className="col-span-2 md:col-span-4 min-w-0 flex flex-col gap-5 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Amrith Sheeja Jayan</span>
              <p className="text-muted font-medium leading-relaxed text-sm max-w-xs md:max-w-[260px] mx-auto md:mx-0">
                I build the website and run Google Ads together, so a business in India shows up when someone is already searching. The site takes the enquiry. The ads bring the people. You own the files. Call, WhatsApp, or send the form, and I reply within one business day.
              </p>
              <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                {SOCIALS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground hover:text-muted hover:border-foreground transition-colors"
                    >
                      <SocialIcon name={item.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <FooterColumn heading="PAGES" items={pages} />
            <FooterColumn heading="SERVICES" items={services} />
            <FooterColumn heading="RESOURCES" items={resources} />
            <FooterColumn heading="CONTACT" items={contact} />
          </div>
          <div className="footer-rule" />
        </div>
      </div>
      <div className="footer-legal mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28">
        <p>© 2026 AMRITH SHEEJA JAYAN. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
