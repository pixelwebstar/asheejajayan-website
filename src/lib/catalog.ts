export const AD_SPEND = 30000;
export const ADS_CREDIT = 20000;
export const WEBSITE_PRICE = 150000;
export const CARE_MONTHLY = 1500;
export const CARE_PREMIUM = 8000;
export const SINGLE_PAGE = 25000;
export const CALL_MINUTES = 30;
export const SHORT_PRICE = 75000;
export const FINANCE_START = 50000;
export const FINANCE_MONTHLY = 10000;
export const FINANCE_MONTHS = 12;
export const FINANCE_TOTAL = 170000;
export const CHECKERSMARK_USER = 1250;
export const CUSTOM_CRM = 50000;

export const SCOPES = [
  {
    value: "websites",
    label: "Website",
    from: SINGLE_PAGE,
    monthly: false,
    weeks: "1–4 weeks",
    href: "/services#websites",
    desc: "Mobile-friendly. Customers can call you from the page.",
  },
  {
    value: "web-apps",
    label: "Apps",
    from: 249000,
    monthly: false,
    weeks: "3–8 weeks",
    href: "/services#web-apps",
    desc: "Bookings, logins, and tools for the work your team does.",
  },
  {
    value: "crm",
    label: "CRM",
    from: CHECKERSMARK_USER,
    monthly: true,
    weeks: "A few days",
    href: "/services#crm-software",
    desc: "A Checkersmark account for your team. Custom CRM if you need it.",
  },
  {
    value: "maps",
    label: "Maps",
    from: 15000,
    monthly: false,
    weeks: "A few days",
    href: "/services#google-map",
    desc: "People nearby can find the business on Google and call.",
  },
  {
    value: "ads",
    label: "Ads",
    from: 15000,
    monthly: true,
    weeks: "Monthly",
    href: "/services#google-ads",
    desc: "Ads for people already searching. I keep them running.",
  },
  {
    value: "support",
    label: "Support",
    from: CARE_MONTHLY,
    monthly: true,
    weeks: "Ongoing",
    href: "/services#support-ops",
    desc: "Backups, and small text changes after launch.",
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
      "Hosting comes with the website. There is no monthly fee to keep it online.",
      `Support is optional. ${rupee(CARE_MONTHLY)} a month adds backups and up to two text changes.`,
    ],
  },
  {
    id: "finance",
    title: "Pay over time",
    figure: `${rupee(FINANCE_START)} to start`,
    lines: [
      `Then ${rupee(FINANCE_MONTHLY)} a month for ${FINANCE_MONTHS} months. The total is ${rupee(FINANCE_TOTAL)}.`,
      `Work starts after the ${rupee(FINANCE_START)}.`,
      "The site stays with me until the last payment. Then you get the files.",
      "If a payment is missed, an automated system pauses the work and tells you. The terms explain what happens next.",
    ],
  },
] as const;

export const HIRE_STEPS = [
  { num: "01", title: "Brief", text: "Call, WhatsApp, or send the form. Tell me what the business needs." },
  { num: "02", title: "Plan", text: "I write what I will build, and when it will be ready." },
  { num: "03", title: "Yes", text: "Work starts after you say yes." },
  { num: "04", title: "Build", text: "About four weeks from the day we start." },
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
    q: "Is ₹25,000 a full website?",
    a: "Yes. That is one page, paid once. It includes basic SEO, Vercel Analytics, a Call now button, a form, free hosting, and a free subdomain. You can stop there.",
  },
  {
    q: "Do you charge monthly fees?",
    a: "A website has no monthly fee. Hosting is included. A monthly charge starts only if you choose to pay a larger website over a year, or if you choose a service that is billed each month, such as ads, support, or Checkersmark.",
  },
  {
    q: "What if a payment is missed?",
    a: "An automated system watches the due dates. If a payment is missed, the work pauses and you get a message. Pay what is due, and it continues. If it is still unpaid after 30 days, the site comes offline until that payment is in. Money already paid covers the work already done. The terms page has the full rule.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. You get the files when the price is paid in full. You can move the site later, or leave it hosted.",
  },
  {
    q: "Do I need to buy a domain?",
    a: "No. A free subdomain is ready to share from day one. Your own domain can replace it later, if you want one.",
  },
  {
    q: "Will my business show up on Google?",
    a: "Basic SEO gives Google a clear page for the work you do. That is included. It is not a promise of the first result. Advanced SEO is there if you want the page prepared for the words people type.",
  },
  {
    q: "How long does a website take?",
    a: "One to four weeks. The dates are written down before the work starts.",
  },
  {
    q: "Can I review it before it goes live?",
    a: "Yes. You see the site before it goes live, and notes from that review are part of the build.",
  },
  {
    q: "What if I need changes after launch?",
    a: "The premium website includes the first month of small fixes. After that, support can cover backups and text changes, or you can edit the files yourself.",
  },
  {
    q: "What if I need more later?",
    a: "Extra pages and tools can be added when you are ready. Each one has its price on this page. The first page does not have to be rebuilt.",
  },
  {
    q: "What is not included?",
    a: "The price covers the work you chose. It does not cover a domain you buy yourself, the money you pay Google for clicks, or a service you did not pick.",
  },
  {
    q: "Can I pay over a year?",
    a: "Yes, for the basic website and the premium website. You pay part at the start, then a set amount each month for 12 months. The year costs a little more than paying once. The ₹25,000 website is paid once.",
  },
  {
    q: "Do I have to take Google Ads as well?",
    a: "No. The website stands on its own. Ads are for people already searching, and you can add them later.",
  },
  {
    q: "How much should the ads cost?",
    a: "About ₹30,000 a month to Google is where local enquiries start. You pay Google for the clicks. Managing the ads is a separate fee.",
  },
  {
    q: "Is there a Google Ads credit for a new business?",
    a: "New advertisers in India may get ₹20,000 in Google Ads credit after they spend ₹20,000 in 60 days. Google decides who qualifies.",
  },
  {
    q: "What if I already have a website?",
    a: "Your pages, photos, and domain can move over. You do not have to start from a blank name.",
  },
  {
    q: "What happens after I send the form?",
    a: "I read it and reply within one business day. Nothing is charged, and no work starts, until you accept a written price.",
  },
  {
    q: "Can I call you?",
    a: "Yes. Call or WhatsApp. I reply within one business day.",
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
  return rupee(oneTime);
}

export function scopeLabel(value: string) {
  return SCOPES.find((scope) => scope.value === value)?.label ?? value;
}

export function parseScopeList(input: string[] | string | null | undefined): ScopeValue[] {
  const raw = Array.isArray(input) ? input : input ? input.split(",") : [];
  return Array.from(new Set(raw.map((item) => item.trim()).filter(isScope)));
}

/** One chip per plan that exists. Website has four. The others have two. */
export const SCOPE_BUDGETS: Record<ScopeValue, readonly { value: string; label: string }[]> = {
  websites: [
    { value: "25", label: "₹25,000 one page" },
    { value: "75", label: "₹75,000 basic" },
    { value: "150", label: "₹1,50,000 premium" },
    { value: "more", label: "Above ₹1,50,000" },
  ],
  "web-apps": [
    { value: "250", label: "₹2,50,000 or more" },
    { value: "500", label: "₹5,00,000 or more" },
  ],
  crm: [
    { value: "user", label: "₹1,250 per user" },
    { value: "50", label: "₹50,000 custom" },
  ],
  maps: [
    { value: "15", label: "₹15,000" },
    { value: "quoted", label: "Premium, quoted" },
  ],
  ads: [
    { value: "15", label: "₹15,000 a month" },
    { value: "quoted", label: "Premium, quoted" },
  ],
  support: [
    { value: "15", label: "₹1,500 a month" },
    { value: "80", label: "₹8,000 a month" },
  ],
};

export function budgetError(scopes: readonly ScopeValue[], budgets: Partial<Record<string, string>> | undefined) {
  const missing = scopes.filter((scope) => {
    const raw = budgets?.[scope];
    return typeof raw !== "string" || !SCOPE_BUDGETS[scope].some((item) => item.value === raw);
  });
  if (missing.length === 0) return "";
  if (missing.length === 1) return `Choose a ${scopeLabel(missing[0])} budget.`;
  return "Choose a budget for each one.";
}

export const PRICING_SECTION: Record<ScopeValue, string> = {
  websites: "/pricing#websites",
  "web-apps": "/pricing#web-apps",
  crm: "/pricing#crm",
  maps: "/pricing#maps",
  ads: "/pricing#ads",
  support: "/pricing#support",
};

export const EXTRA_PAGE = 10000;
export const MAX_PAGES = 20;

export const WEBSITE_BASE_LINES = [
  { name: "Basic SEO", detail: "When someone searches for the work you do, Google has a page it can show them." },
  { name: "Mobile-first design", detail: "Most customers in India open this on a phone, so they can read it and call." },
  { name: "Call now", detail: "A customer taps Call now and your phone rings. A form is there if they would rather write." },
  { name: "Free hosting", detail: "The website stays online, with no monthly fee and no ads on the page." },
  { name: "Free subdomain", detail: "A free subdomain is ready to share from day one. Your own domain can replace it later." },
  { name: "You own it", detail: "The files belong to the business. Move the site later, or leave it hosted." },
] as const;

export const ADS_CAMPAIGN_FIRST = 25000;
export const ADS_CAMPAIGN_EXTRA = 15000;
export const MAX_CAMPAIGNS = 6;
export const GBP_REFRESH = 8000;

export const WEBSITE_PARTS = [
  { id: "seo-basic", name: "Basic SEO", detail: "Customers searching for what you do can land on your page.", price: 0 },
  { id: "seo", name: "Advanced SEO", detail: "The site is prepared for the exact words people type before they call.", price: 25000 },
  { id: "analytics", name: "Google Analytics", detail: "See which search brought people, and which page made them call.", price: 15000 },
  { id: "vercel", name: "Vercel Analytics", detail: "See which pages customers open. This comes with the hosting.", price: 0 },
  { id: "gbp-refresh", name: "Refresh the listing", detail: "The listing you already have shows the right hours, photos, and a way to call.", price: GBP_REFRESH },
  { id: "maps", name: "Google Business Profile", detail: "People nearby find the business on Google and call from the listing.", price: 15000 },
  { id: "enquiry", name: "Text alerts", detail: "You get a text the moment a customer writes, while they are still interested.", price: 15000 },
  { id: "blog", name: "Blog", detail: "New pages for the questions your customers already ask Google.", price: 25000 },
  { id: "language", name: "Second language", detail: "The same pages in the language your customers speak at home.", price: 35000 },
  { id: "catalog", name: "Booking or catalog", detail: "Customers see what you sell, or book a time, before they call.", price: 75000 },
] as const;

export const WEBSITE_GROUPS = [
  { id: "seo", title: "SEO", mode: "single" as const, fallback: "seo-basic" as const, options: ["seo-basic", "seo"] as const },
  { id: "analytics", title: "Analytics", mode: "many" as const, fallback: null, options: ["analytics", "vercel"] as const },
  { id: "gbp", title: "Google Business Profile", mode: "single" as const, fallback: null, options: ["gbp-refresh", "maps"] as const },
  { id: "more", title: "More", mode: "many" as const, fallback: null, options: ["enquiry", "blog", "language", "catalog"] as const },
] as const;

export type WebsitePartId = (typeof WEBSITE_PARTS)[number]["id"];

export const WEBSITE_PACKS = {
  short: {
    id: "short",
    label: "Basic website",
    price: SHORT_PRICE,
    pages: 1,
    parts: [] as WebsitePartId[],
    items: [
      { name: "Your pages", detail: "What you do, and how to reach you." },
      { name: "Basic SEO", detail: "Google can find each page." },
      { name: "WhatsApp", detail: "A button to message you." },
    ],
  },
  website: {
    id: "website",
    label: "Premium website",
    price: WEBSITE_PRICE,
    pages: 1,
    parts: ["seo", "analytics", "enquiry"] as WebsitePartId[],
    items: [
      { name: "Advanced SEO", detail: "Set up for the words people already search." },
      { name: "Google Analytics", detail: "See who visited, and which page." },
      { name: "Instant text", detail: "You get a text when someone writes." },
      { name: "Written for you", detail: "I write the pages from what you tell me." },
      { name: "30 days of fixes", detail: "Small fixes after launch." },
    ],
  },
} as const;

export const CUSTOM_START = { pages: 1, parts: ["seo-basic", "vercel"] as WebsitePartId[], campaigns: 0 };

export function adsPrice(campaigns: number) {
  const count = Math.max(0, Math.min(MAX_CAMPAIGNS, campaigns));
  if (count === 0) return 0;
  return ADS_CAMPAIGN_FIRST + (count - 1) * ADS_CAMPAIGN_EXTRA;
}

export const YEAR_PLANS = [
  { price: SHORT_PRICE, start: 25000, monthly: 5000, months: 12, total: 85000, name: "Basic website" },
  { price: WEBSITE_PRICE, start: FINANCE_START, monthly: FINANCE_MONTHLY, months: FINANCE_MONTHS, total: FINANCE_TOTAL, name: "Premium website" },
] as const;

export function yearPlan(price: number) {
  return YEAR_PLANS.find((plan) => plan.price === price) ?? null;
}

export function pageCost(pages: number) {
  const count = Math.min(MAX_PAGES, Math.max(1, pages));
  return SINGLE_PAGE + (count - 1) * EXTRA_PAGE;
}

export function customTotal(pages: number, parts: readonly string[], campaigns = 0) {
  const pieces = WEBSITE_PARTS.reduce((sum, part) => (parts.includes(part.id) ? sum + part.price : sum), 0);
  return pageCost(pages) + pieces + adsPrice(campaigns);
}
