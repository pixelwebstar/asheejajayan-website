export const AD_SPEND = 30000;
export const ADS_CREDIT = 20000;
export const WEBSITE_PRICE = 150000;
export const CARE_MONTHLY = 1500;
export const FINANCE_START = 50000;
export const FINANCE_MONTHLY = 12500;
export const FINANCE_MONTHS = 8;

export const SCOPES = [
  {
    value: "websites",
    label: "Website",
    from: WEBSITE_PRICE,
    monthly: false,
    weeks: "1–4 weeks",
    href: "/services#websites",
    desc: "A custom website from ₹1,50,000. Pay it once, or start with ₹50,000 and pay the rest over 8 months. You get the files when the price is paid.",
  },
  {
    value: "web-apps",
    label: "Apps",
    from: 249000,
    monthly: false,
    weeks: "3–8 weeks",
    href: "/services#web-apps",
    desc: "Private portals, booking, and tools built around how the business actually works.",
  },
  {
    value: "crm",
    label: "CRM",
    from: 49000,
    monthly: false,
    weeks: "About 1 week",
    href: "/services#crm-software",
    desc: "Every enquiry is saved, and you get a message on your phone so a lead is not lost.",
  },
  {
    value: "maps",
    label: "Maps",
    from: 15000,
    monthly: false,
    weeks: "A few days",
    href: "/services#google-map",
    desc: "Google Business and Maps, set up so a local search can find the business and call.",
  },
  {
    value: "ads",
    label: "Ads",
    from: 15000,
    monthly: true,
    weeks: "Monthly",
    href: "/services#google-ads",
    desc: "We keep the campaigns running after launch. About ₹30,000 a month is paid to Google on top of this fee.",
  },
  {
    value: "support",
    label: "Support",
    from: 8000,
    monthly: true,
    weeks: "Ongoing",
    href: "/services#support-ops",
    desc: "Backups, uptime, and text updates after launch, billed monthly.",
  },
] as const;

export type ScopeValue = (typeof SCOPES)[number]["value"];

export const TIMELINES = [
  { value: "asap", label: "As soon as possible" },
  { value: "month", label: "Within a month" },
  { value: "quarter", label: "This quarter" },
  { value: "flex", label: "Flexible" },
] as const;

export const BUDGETS = [
  { value: "150k", label: "Around ₹1,50,000", short: "₹1,50,000" },
  { value: "300k", label: "Around ₹3,00,000", short: "₹3,00,000" },
  { value: "500k", label: "₹5,00,000 or more", short: "₹5,00,000+" },
  { value: "unsure", label: "Not sure yet", short: "Not sure" },
] as const;

export const PAYMENT_PLANS = [
  {
    id: "full",
    title: "Pay in full",
    figure: rupee(WEBSITE_PRICE),
    lines: [
      "One payment for the website.",
      "You get the project files when that payment is received.",
      `${rupee(CARE_MONTHLY)} a month after launch keeps the site online, with backups and up to two text changes. You can stop that and host the files yourself.`,
    ],
  },
  {
    id: "finance",
    title: "Pay over time",
    figure: `${rupee(FINANCE_START)} to start`,
    lines: [
      `Then ${rupee(FINANCE_MONTHLY)} a month for ${FINANCE_MONTHS} months. The total is the same ${rupee(WEBSITE_PRICE)}.`,
      `Work starts after the ${rupee(FINANCE_START)}.`,
      "The site stays with me until the last payment. Then you get the files.",
      "If a payment is missed, the site can be paused. The terms explain what happens next.",
    ],
  },
] as const;

export const HIRE_STEPS = [
  { num: "01", title: "Brief", text: "Call, WhatsApp, or send the form. Tell me what the business needs." },
  { num: "02", title: "Quote", text: "A fixed price within one business day." },
  { num: "03", title: "Deposit", text: "₹50,000 starts the payment plan, or the full price is paid at once. The files come with the last payment." },
  { num: "04", title: "Build", text: "About four weeks from the first payment." },
] as const;

export const INCLUDED = [
  { title: "Mobile layout", desc: "The site fits every phone without a page builder." },
  { title: "Search setup", desc: "Titles, sitemap, and indexing so Google can find the pages." },
  { title: "Contact capture", desc: "A form that takes name, phone, email, and what they need." },
  { title: "One revision round", desc: "Text and layout changes before launch." },
  { title: "Full ownership", desc: "You get the source files when the quoted price is paid." },
  { title: "30 days after launch", desc: "Fixes, backups, and speed checks included." },
] as const;

export const FAQS = [
  {
    q: "Do I own the code?",
    a: "Yes, when the quoted price is paid in full. On the 8-month plan, that is after the last payment. There is no monthly builder rent after that.",
  },
  {
    q: "How long does a project take?",
    a: "A marketing site is usually one to four weeks. Apps depend on scope. The quote locks the dates before work starts.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Thirty days of fixes are included. After that you can send updates for the support plan, or edit the files yourself.",
  },
  {
    q: "Do you charge monthly fees?",
    a: "The website is ₹1,50,000, paid once or over 8 months. ₹1,500 a month after that keeps the site online and covers small text changes. Ads management is separate. Money paid to Google is not part of either fee.",
  },
  {
    q: "What if a payment is missed?",
    a: "I email you, then I can pause the site. If it is still unpaid after 30 days, I can take the site offline and stop the work. Money already paid covers the work done and is not refunded. The project files are handed over only when the quoted price is complete. The terms page has the full rule.",
  },
  {
    q: "Can I call you?",
    a: "Yes. Call or WhatsApp if you want to talk. The form is there if you would rather write. I reply within one business day either way.",
  },
  {
    q: "Why sell the website and Google Ads together?",
    a: "A website with no visitors does not grow a business. Google Ads puts it in front of people who are already searching. The site takes the enquiry. The ads open the door.",
  },
  {
    q: "How much should we spend on Google Ads?",
    a: "₹30,000 a month, paid to Google, is where a local business in India starts getting regular enquiries. A smaller spend usually buys too few clicks to learn what works. The management fee is separate from that spend.",
  },
  {
    q: "Is there a Google Ads credit for a new business?",
    a: "New advertisers in India may be eligible for ₹20,000 in Google Ads credit after they spend ₹20,000 within 60 days. Google decides who qualifies. The credit is advertising balance, not cash.",
  },
  {
    q: "What if I already have a website?",
    a: "We can move your pages, photos, and domain onto a hand-coded build that loads on phones.",
  },
] as const;

export function isScope(value: string): value is ScopeValue {
  return SCOPES.some((scope) => scope.value === value);
}

export function parseScopes(input: string[] | string | null | undefined): ScopeValue[] {
  const raw = Array.isArray(input) ? input : input ? input.split(",") : [];
  const next = raw.map((item) => item.trim()).filter(isScope);
  return next.length > 0 ? Array.from(new Set(next)) : ["websites"];
}

export function estimateTotal(scopes: readonly string[]) {
  let oneTime = 0;
  let monthly = 0;
  for (const scope of SCOPES) {
    if (!scopes.includes(scope.value)) continue;
    if (scope.monthly) monthly += scope.from;
    else oneTime += scope.from;
  }
  if (oneTime === 0 && monthly === 0) oneTime = WEBSITE_PRICE;
  return { oneTime, monthly };
}

export function money(value: number) {
  const digits = Math.abs(Math.round(value)).toString();
  if (digits.length <= 3) return digits;
  const head = digits.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `${head},${digits.slice(-3)}`;
}

export function rupee(value: number) {
  return `₹${money(value)}`;
}

export function formatEstimate(scopes: readonly string[]) {
  const { oneTime, monthly } = estimateTotal(scopes);
  if (oneTime > 0 && monthly > 0) return `${rupee(oneTime)} + ${rupee(monthly)}/mo`;
  if (monthly > 0) return `${rupee(monthly)}/mo`;
  return `From ${rupee(oneTime)}`;
}

export function scopeLabel(value: string) {
  return SCOPES.find((scope) => scope.value === value)?.label ?? value;
}
