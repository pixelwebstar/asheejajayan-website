"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ScopeChips from "@/components/ScopeChips";
import { estimateTotal, formatEstimate, parseScopes, type ScopeValue } from "@/lib/catalog";
import { btnPrimary, chipActive, chipIdle } from "@/lib/ui";

export default function PriceBuilder({ initialScopes = ["websites"] }: { initialScopes?: string[] }) {
  const router = useRouter();
  const [scopes, setScopes] = useState<ScopeValue[]>(() => parseScopes(initialScopes));
  const estimate = useMemo(() => estimateTotal(scopes), [scopes]);

  const start = () => {
    const params = new URLSearchParams();
    params.set("scope", scopes.join(","));
    router.push(`/start?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-10 space-y-8">
      <div className="space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 block">Select the work</span>
        <ScopeChips value={scopes} onChange={setScopes} />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-t border-slate-200 pt-8">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">Estimate</span>
          <p className="text-4xl font-black tracking-tight text-slate-900">{formatEstimate(scopes)}</p>
          <p className="text-sm text-slate-600 font-medium">
            Starting figure. The brief locks a fixed quote. {estimate.monthly > 0 ? "Support is monthly and optional to keep." : "No monthly builder fee."}
          </p>
        </div>
        <button type="button" onClick={start} className={`${btnPrimary} w-full sm:w-auto`}>
          Start this project
        </button>
      </div>
    </div>
  );
}

export function ChoiceChips({
  value,
  options,
  onChange,
  label,
}: {
  value: string;
  options: readonly { value: string; label: string }[];
  onChange: (next: string) => void;
  label: string;
}) {
  return (
    <div className="space-y-3">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 block">{label}</span>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((option) => {
          const selected = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.value)}
              className={selected ? chipActive : chipIdle}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
