"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ADS_CAMPAIGN_EXTRA,
  ADS_CAMPAIGN_FIRST,
  CUSTOM_START,
  EXTRA_PAGE,
  MAX_CAMPAIGNS,
  MAX_PAGES,
  SINGLE_PAGE,
  WEBSITE_BASE_LINES,
  WEBSITE_GROUPS,
  WEBSITE_PACKS,
  WEBSITE_PARTS,
  adsPrice,
  customTotal,
  rupee,
  yearPlan,
  type WebsitePartId,
} from "@/lib/catalog";
import { btnPrimary } from "@/lib/ui";

type Mode = "short" | "website" | "custom";

const MODES: { id: Mode; label: string; blurb: string }[] = [
  {
    id: "short",
    label: "Basic website",
    blurb: "For a business that needs customers to find it and call. They see the work, and they reach you from the page.",
  },
  {
    id: "website",
    label: "Premium website",
    blurb: "For a business that wants to know which search brought the call. You see the visits, and you get a text when someone writes.",
  },
  {
    id: "custom",
    label: "Custom",
    blurb: "One page, paid once. Basic SEO and Vercel Analytics are included. There is no monthly fee.",
  },
];

function partById(id: string) {
  return WEBSITE_PARTS.find((part) => part.id === id);
}

function moneyLabel(price: number) {
  return price === 0 ? "Included" : rupee(price);
}

export function IncludedList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {WEBSITE_BASE_LINES.map((item) => (
        <li key={item.name} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 h-full">
          <span className="block text-sm font-bold text-slate-900">{item.name}</span>
          <span className="mt-2 block text-sm font-medium leading-snug text-slate-600 min-h-[2.75rem]">
            {item.detail}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function WebsitePlans() {
  const [finance, setFinance] = useState(false);

  return (
    <div className="space-y-8">
      <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-2" role="group" aria-label="How to pay">
        <button type="button" aria-pressed={!finance} onClick={() => setFinance(false)} className={payClass(!finance)}>
          Pay once
        </button>
        <button type="button" aria-pressed={finance} onClick={() => setFinance(true)} className={payClass(finance)}>
          Pay over a year
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {MODES.map((item) => {
          const pack = item.id === "custom" ? null : WEBSITE_PACKS[item.id];
          const once = pack ? pack.price : SINGLE_PAGE;
          const plan = pack ? yearPlan(once) : null;
          const financed = finance && plan;
          const href = item.id === "custom" ? "/pricing#custom" : startHrefFor(item.id, financed ? "year" : "once");
          return (
            <article
              key={item.id}
              className="bg-white rounded-3xl border-2 border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col gap-6 h-full"
            >
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">{item.label}</h3>
                <p className="text-4xl font-black tracking-tight text-slate-900">
                  {item.id === "custom" ? `From ${rupee(once)}` : rupee(financed ? plan.start : once)}
                </p>
                <p className="text-sm font-medium text-slate-600">
                  {item.id === "custom" ? "One page. Pay this once." : financed ? "To start." : "Pay this once."}
                </p>
              </div>
              <p className="text-sm font-medium leading-snug text-slate-600">{item.blurb}</p>
              {financed ? (
                <p className="text-sm font-medium leading-snug text-slate-600">
                  Then {rupee(plan.monthly)} a month for {plan.months} months.
                </p>
              ) : null}
              <Link href={href} className={`${btnPrimary} w-full mt-auto`}>
                {item.id === "custom" ? "Build your own" : "Start a project"}
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function payClass(on: boolean) {
  return `min-h-11 rounded-xl border-2 px-3 text-xs font-bold uppercase tracking-widest transition-colors ${
    on ? "border-slate-900 bg-slate-100 text-slate-900 shadow-md" : "border-slate-200 bg-white text-slate-600 shadow-sm hover:border-slate-400"
  }`;
}

function startHrefFor(mode: Exclude<Mode, "custom">, pay: "once" | "year") {
  const pack = WEBSITE_PACKS[mode];
  const params = new URLSearchParams();
  params.set("scope", "websites");
  params.set("pages", String(pack.pages));
  if (pack.parts.length > 0) params.set("parts", pack.parts.join(","));
  params.set("pay", pay);
  params.set("budget", mode === "short" ? "75" : "150");
  return `/start?${params.toString()}`;
}

export function WebsiteCustom() {
  const [pages, setPages] = useState(CUSTOM_START.pages);
  const [parts, setParts] = useState<WebsitePartId[]>(() => [...CUSTOM_START.parts]);
  const [campaigns, setCampaigns] = useState(CUSTOM_START.campaigns);
  const total = customTotal(pages, parts, campaigns);

  const choose = (groupId: (typeof WEBSITE_GROUPS)[number]["id"], optionId: WebsitePartId) => {
    const group = WEBSITE_GROUPS.find((item) => item.id === groupId);
    if (!group) return;
    setParts((current) => {
      const options = group.options as readonly string[];
      const rest = current.filter((id) => !options.includes(id));
      const on = current.includes(optionId);
      if (group.mode === "many") return on ? rest : [...rest, optionId];
      if (on) return group.fallback ? [...rest, group.fallback] : rest;
      return [...rest, optionId];
    });
  };

  const startHref = useMemo(() => {
    const params = new URLSearchParams();
    params.set("scope", "websites");
    params.set("pages", String(pages));
    if (parts.length > 0) params.set("parts", parts.join(","));
    if (campaigns > 0) params.set("campaigns", String(campaigns));
    if (total === SINGLE_PAGE) params.set("budget", "25");
    else if (total === 75000) params.set("budget", "75");
    else if (total === 150000) params.set("budget", "150");
    else if (total > 150000) params.set("budget", "more");
    if (total !== SINGLE_PAGE && total !== 75000 && total !== 150000) params.set("mix", String(total));
    return `/start?${params.toString()}`;
  }, [pages, parts, campaigns, total]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
      <div className="lg:col-span-7 space-y-4">
        <Stepper
          title="Pages"
          detail="Each page is a place a customer can land, read, and call. The first page is included."
          value={pages}
          lessLabel="Fewer pages"
          moreLabel="More pages"
          lessDisabled={pages <= 1}
          moreDisabled={pages >= MAX_PAGES}
          onLess={() => setPages((count) => Math.max(1, count - 1))}
          onMore={() => setPages((count) => Math.min(MAX_PAGES, count + 1))}
          aside={pages <= 1 ? "Included" : `${rupee(EXTRA_PAGE)} each`}
        />
        {WEBSITE_GROUPS.map((group) => (
          <div key={group.id} className="space-y-2">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-600">{group.title}</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {group.options.map((id) => {
                const part = partById(id);
                if (!part) return null;
                const on = parts.includes(part.id);
                return (
                  <li key={part.id}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => choose(group.id, part.id)}
                      className={`w-full h-full text-left rounded-3xl border-2 px-5 py-4 min-h-11 transition-colors ${
                        on ? "border-slate-900 bg-slate-100 shadow-md" : "border-slate-200 bg-white shadow-sm hover:border-slate-400"
                      }`}
                    >
                      <span className="flex items-start justify-between gap-3">
                        <span className="block text-sm font-bold text-slate-900">{part.name}</span>
                        <span className="text-sm font-black text-slate-900 shrink-0">{moneyLabel(part.price)}</span>
                      </span>
                      <span className="mt-1 block text-sm font-medium leading-snug text-slate-600">{part.detail}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <Stepper
          title="Google Ads"
          detail="One campaign for the search that brings the calls. Add another for a second service, or a second city."
          value={campaigns}
          lessLabel="Fewer campaigns"
          moreLabel="More campaigns"
          lessDisabled={campaigns <= 0}
          moreDisabled={campaigns >= MAX_CAMPAIGNS}
          onLess={() => setCampaigns((count) => Math.max(0, count - 1))}
          onMore={() => setCampaigns((count) => Math.min(MAX_CAMPAIGNS, count + 1))}
          aside={campaigns === 0 ? "None" : rupee(adsPrice(campaigns))}
          note={
            campaigns === 0
              ? `First campaign ${rupee(ADS_CAMPAIGN_FIRST)}. Each extra campaign ${rupee(ADS_CAMPAIGN_EXTRA)}.`
              : `${campaigns} ${campaigns === 1 ? "campaign" : "campaigns"}. First one ${rupee(ADS_CAMPAIGN_FIRST)}, then ${rupee(ADS_CAMPAIGN_EXTRA)} each.`
          }
        />
      </div>
      <aside className="lg:col-span-5">
        <div className="bg-white rounded-3xl border-2 border-slate-900 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Custom</span>
            <p className="text-4xl font-black tracking-tight text-slate-900">{rupee(total)}</p>
            <p className="text-sm font-medium text-slate-600">Pay this once.</p>
          </div>
          <p className="text-sm font-medium leading-snug text-slate-600">
            Pay this once. There is no monthly fee.
          </p>
          <Link href={startHref} className={`${btnPrimary} w-full`}>
            Start a project
          </Link>
        </div>
      </aside>
    </div>
  );
}

function Stepper({
  title,
  detail,
  value,
  lessLabel,
  moreLabel,
  lessDisabled,
  moreDisabled,
  onLess,
  onMore,
  aside,
  note,
}: {
  title: string;
  detail: string;
  value: number;
  lessLabel: string;
  moreLabel: string;
  lessDisabled: boolean;
  moreDisabled: boolean;
  onLess: () => void;
  onMore: () => void;
  aside: string;
  note?: string;
}) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm px-6 py-4 space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <span className="block text-sm font-bold text-slate-900">{title}</span>
          <span className="block text-sm font-medium leading-snug text-slate-600">{detail}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            aria-label={lessLabel}
            disabled={lessDisabled}
            onClick={onLess}
            className="h-11 w-11 rounded-xl border-2 border-slate-200 text-lg font-black text-slate-900 disabled:text-slate-300 disabled:border-slate-100"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-black text-slate-900">{value}</span>
          <button
            type="button"
            aria-label={moreLabel}
            disabled={moreDisabled}
            onClick={onMore}
            className="h-11 w-11 rounded-xl border-2 border-slate-200 text-lg font-black text-slate-900 disabled:text-slate-300 disabled:border-slate-100"
          >
            +
          </button>
        </div>
      </div>
      {note ? (
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-slate-600">{note}</span>
          <span className="text-sm font-black text-slate-900 shrink-0">{aside}</span>
        </div>
      ) : (
        <span className="block text-right text-sm font-black text-slate-900">{aside}</span>
      )}
    </div>
  );
}
