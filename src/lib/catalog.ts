export const SCOPES = [
  {
    value: "websites",
    label: "Websites",
    from: 999,
    monthly: false,
    weeks: "1–4 weeks",
    href: "/services#websites",
    desc: "A custom marketing site that loads instantly and makes it obvious how to hire you.",
  },
  {
    value: "web-apps",
    label: "Web Apps",
    from: 2000,
    monthly: false,
    weeks: "3–8 weeks",
    href: "/services#web-apps",
    desc: "Private portals, booking, and internal tools built around how you actually work.",
  },
  {
    value: "crm",
    label: "CRM",
    from: 500,
    monthly: false,
    weeks: "About 1 week",
    href: "/services#crm-software",
    desc: "Inquiries save to your list and ping your phone so no lead is lost.",
  },
  {
    value: "maps",
    label: "Maps",
    from: 300,
    monthly: false,
    weeks: "A few days",
    href: "/services#google-map",
    desc: "Google Business and Maps setup so local searches can find and call you.",
  },
  {
    value: "ads",
    label: "Ads",
    from: 500,
    monthly: false,
    weeks: "About 1 week",
    href: "/services#google-ads",
    desc: "Search campaigns aimed at people already looking to hire someone like you.",
  },
  {
    value: "support",
    label: "Support",
    from: 200,
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
  { value: "1k", label: "Around $1,000" },
  { value: "2k", label: "Around $2,500" },
  { value: "5k", label: "$5,000 or more" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const HIRE_STEPS = [
  { num: "01", title: "Brief", text: "You send the work in writing. No call required." },
  { num: "02", title: "Quote", text: "A fixed price in one business day." },
  { num: "03", title: "Deposit", text: "Forty percent to start. You own the files." },
  { num: "04", title: "Build", text: "About four weeks from the first payment." },
] as const;

export const INCLUDED = [
  { title: "Mobile layout", desc: "The site fits every phone without a page builder." },
  { title: "Search setup", desc: "Titles, sitemap, and indexing so Google can find the pages." },
  { title: "Contact capture", desc: "A form that takes name, email, and what they need." },
  { title: "One revision round", desc: "Text and layout changes before launch." },
  { title: "Full ownership", desc: "You get the source files. No platform lock-in." },
  { title: "30 days after launch", desc: "Fixes, backups, and speed checks included." },
] as const;

export const FAQS = [
  {
    q: "Do I own the code?",
    a: "Yes. You get the source files. There is no monthly builder fee and no lock-in.",
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
    a: "No, unless you choose support. Hosting for a custom site is separate and usually a few dollars a month.",
  },
  {
    q: "Do I have to get on a call?",
    a: "No. Send a brief. I reply in writing within one business day with a fixed quote. A call is optional if the brief is unclear.",
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
  if (oneTime === 0 && monthly === 0) oneTime = 999;
  return { oneTime, monthly };
}

export function money(value: number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatEstimate(scopes: readonly string[]) {
  const { oneTime, monthly } = estimateTotal(scopes);
  const amount = money(oneTime);
  if (monthly > 0) return `$${amount} + $${monthly}/mo`;
  return `From $${amount}`;
}

export function scopeLabel(value: string) {
  return SCOPES.find((scope) => scope.value === value)?.label ?? value;
}
