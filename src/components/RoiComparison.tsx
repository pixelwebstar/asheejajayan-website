"use client";

import React, { useState, useEffect, useCallback } from "react";

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
    standard: { value: "3.5 Seconds", impact: "Slow on mobile phones" },
    custom: { value: "1.2 Seconds", impact: "Fast on every device" },
    standardCopy:
      "Builders load extra scripts and heavy images, so phones bounce and Google sees a weaker speed signal.",
    customCopy:
      "A custom Next.js site ships only the code each page needs, so visitors stay and Google can crawl it fast.",
  },
  {
    id: "fees",
    title: "Fees",
    standard: { value: "Ongoing", impact: "Billed every month" },
    custom: { value: "None", impact: "No monthly site fee" },
    standardCopy:
      "You pay platform, theme, and plugin fees for as long as the site stays up, and you never own the software.",
    customCopy:
      "You own the files. Hosting is a normal bill, SSL is free, and budget goes to growth instead of rent.",
  },
  {
    id: "layout",
    title: "Design",
    standard: { value: "Template", impact: "Pre-made theme look" },
    custom: { value: "Custom", impact: "Built for your brand" },
    standardCopy:
      "A shared theme locks layout and forms, so your offer has to squeeze into someone else's page grid.",
    customCopy:
      "Layout, type, and calls-to-action follow how your customers buy, from the first line to the lead form.",
  },
  {
    id: "ownership",
    title: "Ownership",
    standard: { value: "Locked", impact: "Locked to one host" },
    custom: { value: "Owned", impact: "You own every file" },
    standardCopy:
      "Files stay inside the builder. You cannot move hosts freely if prices rise or the platform shuts down.",
    customCopy:
      "You get the source, assets, and content, with a local backup, so no single vendor can lock you in.",
  },
  {
    id: "customers",
    title: "SEO",
    standard: { value: "Page 2–3", impact: "Harder to get found" },
    custom: { value: "Page 1", impact: "Easier to get found" },
    standardCopy:
      "Slow loads and duplicate template markup make it hard for Google to trust the page in local search.",
    customCopy:
      "Clean HTML, unique copy, and a fast mobile render help Google show you when people search to hire you.",
  },
];

const stageOrder = ["all", "speed", "fees", "layout", "ownership", "customers"];

export default function RoiComparison() {
  const [rotation, setRotation] = useState(0);
  const [frontStage, setFrontStage] = useState("all");
  const [backStage, setBackStage] = useState("speed");
  const [activeStage, setActiveStage] = useState("all");
  const [feesStandard, setFeesStandard] = useState(0);

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

  useEffect(() => {
    if (activeStage === "fees") {
      setFeesStandard(0);
      let current = 0;
      const interval = setInterval(() => {
        current += 2;
        if (current >= 80) {
          current = 80;
          clearInterval(interval);
        }
        setFeesStandard(current);
      }, 15);
      return () => clearInterval(interval);
    }
  }, [activeStage]);

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
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Select a metric</p>
              <p className="text-xs text-slate-600 font-medium leading-snug">
                Tap any row to see why a template falls short on that point.
              </p>
            </div>
          </div>
        </div>
      );
    }

    const value = stageId === "fees" ? `$${feesStandard}.00/mo` : featured.standard.value;

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
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Select a metric</p>
              <p className="text-xs text-slate-300 font-medium leading-snug">
                Tap any row to see what a custom build returns on that point.
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
