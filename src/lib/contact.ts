export const EMAIL = "asheejajayan.com@gmail.com";
export const HANDLE = "asheejajayan";

/** India business line, international form. */
export const PHONE_E164 = "+918891550819";
export const PHONE_DISPLAY = "+91 88915 50819";

const phoneDigits = PHONE_E164.replace(/\D/g, "");

export const PHONE_TEL = phoneDigits ? `tel:+${phoneDigits}` : "";

export const WHATSAPP_URL = phoneDigits
  ? `https://wa.me/${phoneDigits}?text=${encodeURIComponent("I want a website and Google Ads for my business.")}`
  : "";

export const SOCIALS = [
  { label: "GitHub", href: `https://github.com/${HANDLE}` },
  { label: "X", href: `https://x.com/${HANDLE}` },
  { label: "Instagram", href: `https://instagram.com/${HANDLE}` },
  { label: "LinkedIn", href: `https://www.linkedin.com/in/${HANDLE}` },
] as const;
