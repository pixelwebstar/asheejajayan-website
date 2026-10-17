"use client";

import React, { useState, useCallback } from "react";

interface CriterionData {
  id: string;
  title: string;
  standard: { value: string; impact: string };
  custom: { value: string; impact: string };
  standardCopy: string;
  customCopy: string;
}

const criteriaData: CriterionData[] = [
  {
    id: "speed",
    title: "Speed",
    standard: { value: "Slow", impact: "Slow on a phone" },
    custom: { value: "Fast", impact: "Opens quickly" },
    standardCopy:
      "A template loads extra scripts, so the page is slow on a phone and people leave.",
    customCopy:
      "The site is coded to open quickly on a phone, so people can stay and call you.",
  },
  {
    id: "files",
    title: "The files",
    standard: { value: "Theirs", impact: "They keep them" },
    custom: { value: "Yours", impact: "You keep them" },
    standardCopy:
      "The files stay on the builder's account. Moving the site later is hard.",
    customCopy:
      "The files are yours. You can host the site wherever you like.",
  },
  {
    id: "layout",
    title: "Design",
    standard: { value: "Template", impact: "Same as others" },
    custom: { value: "Custom", impact: "Made for you" },
    standardCopy:
      "A template looks like many other sites. Your business has to fit their layout.",
    customCopy:
      "The pages are designed around your business, and how a customer calls you.",
  },
  {
    id: "ownership",
    title: "Ownership",
    standard: { value: "Theirs", impact: "Builder keeps it" },
    custom: { value: "Yours", impact: "You get the files" },
    standardCopy:
      "The files stay with the builder. Moving the site later is hard.",
    customCopy:
      "You get the files. You are not locked to one builder.",
  },
  {
    id: "customers",
    title: "Contact",
    standard: { value: "Email", impact: "Easy to miss" },
    custom: { value: "A call", impact: "Form and a call" },
    standardCopy:
      "A form can sit in email. A busy day means a missed customer.",
    customCopy:
      "They can call, or send their name and phone. You get a text.",
  },
];

const stageOrder = ["all", "speed", "files", "layout", "ownership", "customers"];

export default function RoiComparison() {
  const [rotation, setRotation] = useState(0);
  const [frontStage, setFrontStage] = useState("all");
  const [backStage, setBackStage] = useState("speed");
  const [activeStage, setActiveStage] = useState("all");

  const triggerFlip = useCallback(
    (nextStageId: string) => {
      if (nextStageId === activeStage) return;
      const currentIsBackVisible = (rotation / 180) % 2 !== 0;
      if (currentIsBackVisible) {
        setFrontStage(nextStageId);
      } else {
        setBackStage(nextStageId);
      }
      setRotation((prev) => prev + 180);
      setActiveStage(nextStageId);
    },
    [activeStage, rotation],
  );

  const advance = useCallback(() => {
    const idx = stageOrder.indexOf(activeStage);
    const next = stageOrder[(idx + 1) % stageOrder.length];
    triggerFlip(next);
  }, [activeStage, triggerFlip]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    advance();
  };

  const innerStyle = (rot: number): React.CSSProperties => ({
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transform: `rotateY(${rot}deg)`,
    transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  });

  const faceStyle = (isBack: boolean): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: isBack ? "rotateY(180deg)" : "rotateY(0deg)",
  });

  const overviewRow = (
    crit: CriterionData,
    side: "standard" | "custom",
    emphasizedId?: string,
  ) => {
    const data = side === "standard" ? crit.standard : crit.custom;
    const isOn = !emphasizedId || emphasizedId === crit.id;
    const labelClass =
      side === "custom"
        ? "text-[10px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap"
        : "text-[10px] font-bold text-slate-600 uppercase tracking-wider whitespace-nowrap";
    const valueClass =
      side === "custom"
        ? "text-xs font-bold text-white whitespace-nowrap"
        : "text-xs font-bold text-slate-800 whitespace-nowrap";
    const impactClass =
      side === "custom"
        ? "text-[11px] text-slate-300 font-medium leading-none whitespace-nowrap truncate"
        : "text-[11px] text-slate-600 font-medium leading-none whitespace-nowrap truncate";

    return (
      <button
        type="button"
        key={crit.id}
        onClick={(event) => {
          event.stopPropagation();
          triggerFlip(crit.id);
        }}
        className={`w-full grid grid-cols-3 gap-2 sm:gap-4 items-center border-b last:border-0 py-3 last:pb-0 ${
          side === "custom" ? "border-slate-800" : "border-slate-50"
        } ${isOn ? "" : "opacity-35"}`}
      >
        <span className={`text-left ${labelClass}`}>{crit.title}</span>
        <span className={`text-center ${valueClass}`}>{data.value}</span>
        <span className={`text-right ${impactClass}`}>{data.impact}</span>
      </button>
    );
  };

  const renderStandardCard = (stageId: string) => {
    const featured = criteriaData.find((c) => c.id === stageId);

    if (stageId === "all" || !featured) {
      return (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full w-full">
          <div className="text-center border-b border-slate-100 pb-4 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">OLD STANDARD</span>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mt-1">Standard Build</h3>
          </div>
          <div className="space-y-1 pt-4 shrink-0">{criteriaData.map((crit) => overviewRow(crit, "standard"))}</div>
          <div className="border-t border-slate-100 mt-4 flex-1 flex items-center justify-center text-center px-1 min-h-[6.5rem]">
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Tap a row</p>
              <p className="text-xs text-slate-600 font-medium leading-snug">
                Tap a row to read how a template handles it.
              </p>
            </div>
          </div>
        </div>
      );
    }

    const value = featured.standard.value;

    return (
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full w-full">
        <div className="text-center border-b border-slate-100 pb-4 shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">{featured.title}</span>
          <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mt-1">Standard Build</h3>
        </div>
        <div className="space-y-1 pt-4 shrink-0">{criteriaData.map((crit) => overviewRow(crit, "standard", stageId))}</div>
        <div className="border-t border-slate-100 mt-4 flex-1 flex items-center justify-center text-center px-1 min-h-[6.5rem]">
          <div className="space-y-1.5">
            <p className="text-sm font-black text-slate-900 tracking-tight whitespace-nowrap">{value}</p>
            <p className="text-xs text-slate-600 font-medium leading-snug line-clamp-2">{featured.standardCopy}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderCustomCard = (stageId: string) => {
    const featured = criteriaData.find((c) => c.id === stageId);

    if (stageId === "all" || !featured) {
      return (
        <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-md text-white relative flex flex-col h-full w-full">
          <div className="text-center border-b border-slate-800 pb-4 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">NEW STANDARD</span>
            <h3 className="text-lg font-black text-white uppercase tracking-widest mt-1">Custom Build</h3>
          </div>
          <div className="space-y-1 pt-4 shrink-0">{criteriaData.map((crit) => overviewRow(crit, "custom"))}</div>
          <div className="border-t border-slate-800 mt-4 flex-1 flex items-center justify-center text-center px-1 min-h-[6.5rem]">
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Tap a row</p>
              <p className="text-xs text-slate-300 font-medium leading-snug">
                Tap a row to read how your site handles it.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-md flex flex-col h-full w-full text-white">
        <div className="text-center border-b border-slate-800 pb-4 shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">{featured.title}</span>
          <h3 className="text-lg font-black text-white uppercase tracking-widest mt-1">Custom Build</h3>
        </div>
        <div className="space-y-1 pt-4 shrink-0">{criteriaData.map((crit) => overviewRow(crit, "custom", stageId))}</div>
        <div className="border-t border-slate-800 mt-4 flex-1 flex items-center justify-center text-center px-1 min-h-[6.5rem]">
          <div className="space-y-1.5">
            <p className="text-sm font-black text-white tracking-tight whitespace-nowrap">{featured.custom.value}</p>
            <p className="text-xs text-slate-300 font-medium leading-snug line-clamp-2">{featured.customCopy}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      onClick={handleClick}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-[1400px] mx-auto items-stretch cursor-pointer select-none"
    >
      <div className="relative w-full">
        <div className="invisible pointer-events-none select-none" aria-hidden="true">
          {renderStandardCard("all")}
        </div>
        <div className="absolute inset-0" style={{ perspective: "1500px" }}>
          <div style={innerStyle(rotation)}>
            <div style={faceStyle(false)}>{renderStandardCard(frontStage)}</div>
            <div style={faceStyle(true)}>{renderStandardCard(backStage)}</div>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="invisible pointer-events-none select-none" aria-hidden="true">
          {renderCustomCard("all")}
        </div>
        <div className="absolute inset-0" style={{ perspective: "1500px" }}>
          <div style={innerStyle(rotation)}>
            <div style={faceStyle(false)}>{renderCustomCard(frontStage)}</div>
            <div style={faceStyle(true)}>{renderCustomCard(backStage)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
