import { HIRE_STEPS } from "@/lib/catalog";

export default function HireSteps({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={compact ? "space-y-0" : "space-y-0"}>
      {HIRE_STEPS.map((step, index) => (
        <li
          key={step.num}
          className={`flex gap-5 items-start py-5 ${index < HIRE_STEPS.length - 1 ? "border-b border-slate-200" : ""}`}
        >
          <span className="text-2xl font-black text-slate-600 leading-none min-w-[2.5rem] font-mono">{step.num}</span>
          <div className="space-y-1 min-w-0">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">{step.title}</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
