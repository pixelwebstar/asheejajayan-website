"use client";

import { SCOPES, type ScopeValue } from "@/lib/catalog";
import { chipActive, chipIdle } from "@/lib/ui";

export default function ScopeChips({
  value,
  onChange,
  id,
}: {
  value: ScopeValue[];
  onChange: (next: ScopeValue[]) => void;
  id?: string;
}) {
  const toggle = (scope: ScopeValue) => {
    if (value.includes(scope)) {
      const next = value.filter((item) => item !== scope);
      onChange(next.length > 0 ? next : value);
      return;
    }
    onChange([...value, scope]);
  };

  return (
    <div id={id} className="flex flex-wrap gap-2" role="group" aria-label="Project scope">
      {SCOPES.map((scope) => {
        const selected = value.includes(scope.value);
        return (
          <button
            key={scope.value}
            type="button"
            aria-pressed={selected}
            onClick={() => toggle(scope.value)}
            className={selected ? chipActive : chipIdle}
          >
            {scope.label}
          </button>
        );
      })}
    </div>
  );
}
