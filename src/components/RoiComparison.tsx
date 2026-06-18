"use client";

import React, { useState, useEffect, useCallback } from "react";

interface CriterionData {
  id: string;
  title: string;
  standard: { value: string; impact: string };
  custom: { value: string; impact: string };
}

const criteriaData: CriterionData[] = [
  {
    id: "speed",
    title: "Loading Speed",
    standard: { value: "Slow", impact: "Causes client drop-off" },
    custom: { value: "Instant", impact: "Zero client delay" }
  },
  {
    id: "fees",
    title: "Monthly Fees",
    standard: { value: "Ongoing", impact: "Locked in forever" },
    custom: { value: "None", impact: "You own the code" }
  },
  {
    id: "layout",
    title: "Design Layout",
    standard: { value: "Generic", impact: "Cookie-cutter templates" },
    custom: { value: "Bespoke", impact: "Custom architecture" }
  },
  {
    id: "ownership",
    title: "Code Ownership",
    standard: { value: "Locked", impact: "Platform dependency" },
    custom: { value: "Full Ownership", impact: "Complete source files" }
  },
  {
    id: "customers",
    title: "Google Ranking",
    standard: { value: "Page 2+", impact: "Invisible to searchers" },
    custom: { value: "Rank #1", impact: "SEO optimized markup" }
  }
];

// Stage order: "all" → each individual criterion → back to "all"
const stageOrder = ["all", "speed", "fees", "layout", "ownership", "customers"];

export default function RoiComparison() {
  // 3D flip state
  const [rotation, setRotation] = useState(0);
  const [frontStage, setFrontStage] = useState("all");
  const [backStage, setBackStage] = useState("speed");
  const [activeStage, setActiveStage] = useState("all");

  // State for live counting standard fees animation
  const [feesStandard, setFeesStandard] = useState(0);

  const triggerFlip = useCallback((nextStageId: string) => {
    if (nextStageId === activeStage) return;

    const currentIsBackVisible = (rotation / 180) % 2 !== 0;

    if (currentIsBackVisible) {
      // Back face is currently visible, so front face will be shown next
      setFrontStage(nextStageId);
    } else {
      // Front face is currently visible, so back face will be shown next
      setBackStage(nextStageId);
    }

    setRotation((prev) => prev + 180);
    setActiveStage(nextStageId);
  }, [activeStage, rotation]);

  const advance = useCallback(() => {
    const idx = stageOrder.indexOf(activeStage);
    const next = stageOrder[(idx + 1) % stageOrder.length];
    triggerFlip(next);
  }, [activeStage, triggerFlip]);

  // Monthly fees count-up animation
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

  // Helper to determine stage subtitle dynamically
  const getSubTitle = (stageId: string, isCustom: boolean) => {
    const prefix = isCustom ? "NEW" : "OLD";
    if (stageId === "all") return `${prefix} STANDARD`;
    if (stageId === "speed") return `${prefix} SPEED`;
    if (stageId === "fees") return `${prefix} FEES`;
    if (stageId === "layout") return `${prefix} LAYOUT`;
    if (stageId === "ownership") return `${prefix} OWNERSHIP`;
    if (stageId === "customers") return `${prefix} RANKING`;
    return `${prefix} STANDARD`;
  };

  // 3D styles (Safari-safe)
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

  // ── Render helpers ──
  const renderStandardCard = (stageId: string) => {
    if (stageId === "all") {
      return (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 flex flex-col justify-between h-full w-full">
          <div className="text-center border-b border-slate-100 pb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">{getSubTitle(stageId, false)}</span>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mt-1">Standard Build</h3>
          </div>
          <div className="space-y-4 flex-1">
            {criteriaData.map((crit) => (
              <div key={crit.id} className="grid grid-cols-12 gap-x-3 gap-y-1.5 items-start border-b border-slate-50 last:border-0 pb-4 last:pb-0 text-left">
                <div className="col-span-4 shrink-0">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">{crit.title}</span>
                </div>
                <div className="col-span-3 text-left">
                  <div className="text-xs font-bold text-slate-800 leading-normal">{crit.standard.value}</div>
                </div>
                <div className="col-span-5 text-left">
                  <div className="text-[11px] text-slate-600 font-medium leading-relaxed">{crit.standard.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    let title = "";
    let desc = "";
    let visual: React.ReactNode = null;

    if (stageId === "speed") {
      title = "Loading Speed";
      desc = "Bloated template builders load dozens of unused CSS and JavaScript files, resulting in high mobile visitor drop-offs.";
      visual = (
        <div className="w-full space-y-2 p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-left font-mono">
          <div className="flex justify-between items-center text-[10px] font-sans font-bold text-slate-800">
            <span>Browser Paint Load</span>
            <span className="text-slate-900">3.8s</span>
          </div>
          <div className="h-1.5 bg-slate-200 rounded-full w-full overflow-hidden">
            <div className="h-full bg-slate-400 rounded-full animate-[fillSlow_4s_linear_forwards]" />
          </div>
        </div>
      );
    } else if (stageId === "fees") {
      title = "Monthly Fees";
      desc = "Platform dependencies tie your business to lifetime subscription fees, shutting down when payments stop.";
      visual = (
        <div className="w-full space-y-1.5 p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-left font-mono text-[10px]">
          <div className="flex justify-between text-slate-600">
            <span>Ongoing SaaS</span>
            <span className="text-slate-900 font-bold">${feesStandard}.00/mo</span>
          </div>
        </div>
      );
    } else if (stageId === "layout") {
      title = "Design Layout";
      desc = "Cookie-cutter themes restrict your site to standard grid designs, diluting your brand's unique identity.";
      visual = (
        <div className="w-full p-2.5 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5 text-left">
          <div className="h-4 bg-slate-200 rounded w-full flex items-center justify-center text-[8px] font-mono text-slate-400">Standard Grid</div>
        </div>
      );
    } else if (stageId === "ownership") {
      title = "Code Ownership";
      desc = "Source files are locked inside proprietary platforms, making migration to own hosting impossible without rebuilding.";
      visual = (
        <div className="w-full space-y-1.5 p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-left font-mono text-[10px] text-slate-600">
          <div className="flex justify-between font-bold text-slate-900">
            <span>Locked Platform</span>
          </div>
        </div>
      );
    } else if (stageId === "customers") {
      title = "Google Ranking";
      desc = "Bloated code and slow load times push your website down in Google search, making you invisible to searchers.";
      visual = (
        <div className="w-full space-y-1 p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-left text-[10px] font-mono text-slate-500">
          <div className="font-bold text-slate-900">Rank: 18 (Page 2)</div>
        </div>
      );
    }

    return (
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full w-full">
        <div className="text-center border-b border-slate-100 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-550 block">{getSubTitle(stageId, false)}</span>
          <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-widest mt-1">Standard Build</h3>
        </div>
        <div key={stageId} className="flex-1 flex flex-col justify-center py-2 space-y-2">
          <div className="text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{title}</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {visual}
          </div>
        </div>
        <div className="border-t border-slate-100 pt-3">
          <p className="text-[11px] sm:text-[11.5px] text-slate-600 leading-normal font-medium text-center">{desc}</p>
        </div>
      </div>
    );
  };

  const renderCustomCard = (stageId: string) => {
    if (stageId === "all") {
      return (
        <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-850 shadow-md space-y-6 text-white relative flex flex-col justify-between h-full w-full">
          <div className="text-center border-b border-slate-800 pb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">{getSubTitle(stageId, true)}</span>
            <h3 className="text-lg font-black text-white uppercase tracking-widest mt-1">Custom Build</h3>
          </div>
          <div className="space-y-4 flex-1">
            {criteriaData.map((crit) => (
              <div key={crit.id} className="grid grid-cols-12 gap-x-3 gap-y-1.5 items-start border-b border-slate-800 last:border-0 pb-4 last:pb-0 text-left">
                <div className="col-span-4 shrink-0">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">{crit.title}</span>
                </div>
                <div className="col-span-3 text-left">
                  <div className="text-xs font-bold text-white leading-normal">{crit.custom.value}</div>
                </div>
                <div className="col-span-5 text-left">
                  <div className="text-[11px] text-slate-300 font-medium leading-relaxed">{crit.custom.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    let title = "";
    let desc = "";
    let visual: React.ReactNode = null;

    if (stageId === "speed") {
      title = "Loading Speed";
      desc = "Optimized source code delivers instant rendering with clean semantic markup for perfect Lighthouse scores.";
      visual = (
        <div className="w-full space-y-2 p-2.5 bg-slate-955 border border-slate-850 rounded-xl text-left font-mono text-slate-400">
          <div className="flex justify-between items-center text-[10px] font-sans font-bold text-white">
            <span>Browser Paint Load</span>
            <span className="text-white">0.1s (Instant)</span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full w-full overflow-hidden">
            <div className="h-full bg-white rounded-full animate-[fillFast_1s_cubic-bezier(0.1,0.9,0.2,1)_forwards]" />
          </div>
        </div>
      );
    } else if (stageId === "fees") {
      title = "Monthly Fees";
      desc = "No monthly SaaS rent or license fees. Enjoy free edge hosting and dynamic functions.";
      visual = (
        <div className="w-full space-y-1.5 p-2.5 bg-slate-955 border border-slate-850 rounded-xl text-left font-mono text-[10px] text-slate-400">
          <div className="flex justify-between font-bold text-white">
            <span>Recurring Outflow</span>
            <span>$0.00/mo</span>
          </div>
        </div>
      );
    } else if (stageId === "layout") {
      title = "Design Layout";
      desc = "Handcrafted front-end styles built from the ground up, allowing infinite layout flexibility and perfect branding.";
      visual = (
        <div className="w-full p-2.5 bg-slate-955 border border-slate-850 rounded-xl space-y-1.5 text-left">
          <div className="h-4 bg-slate-900 rounded w-full flex items-center justify-center text-[8px] font-mono text-slate-455">Bespoke Architecture</div>
        </div>
      );
    } else if (stageId === "ownership") {
      title = "Code Ownership";
      desc = "Direct access to full source files. Version controlled in a private repository, giving you total freedom.";
      visual = (
        <div className="w-full space-y-1.5 p-2.5 bg-slate-955 border border-slate-850 rounded-xl text-left font-mono text-[10px] text-slate-400">
          <div className="font-bold text-white">100% Independent</div>
        </div>
      );
    } else if (stageId === "customers") {
      title = "Google Ranking";
      desc = "Clean semantic markup and instant edge performance satisfy Google's core vitals, ranking your business at the top.";
      visual = (
        <div className="w-full space-y-1 p-2.5 bg-slate-955 border border-slate-800 rounded-xl text-left text-[10px] font-mono text-slate-400">
          <div className="font-bold text-white">Rank: 1 (SEO Optimized)</div>
        </div>
      );
    }

    return (
      <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-850 shadow-md flex flex-col justify-between h-full w-full text-white">
        <div className="text-center border-b border-slate-800 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">{getSubTitle(stageId, true)}</span>
          <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-widest mt-1">Custom Build</h3>
        </div>
        <div key={stageId} className="flex-1 flex flex-col justify-center py-2 space-y-2">
          <div className="text-center">
            <span className="text-[10px] font-bold text-slate-550 uppercase tracking-widest block">{title}</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {visual}
          </div>
        </div>
        <div className="border-t border-slate-800 pt-3">
          <p className="text-[11px] sm:text-[11.5px] text-slate-300 leading-normal sm:leading-relaxed font-medium text-center">
            {desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      onClick={handleClick}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-[1400px] mx-auto items-stretch cursor-pointer select-none"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes loadSlow {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes loadFast {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-load-slow {
          animation: loadSlow 3.8s linear forwards;
        }
        .animate-load-fast {
          animation: loadFast 0.2s ease-out forwards;
        }
        @keyframes fillSlow {
          0% { width: 0%; }
          100% { width: 80%; }
        }
        @keyframes fillFast {
          0% { width: 0%; }
          100% { width: 100%; box-shadow: 0 0 10px rgba(255,255,255,0.8); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-160px); }
        }
        @keyframes dropFade {
          0% { top: 0px; opacity: 1; transform: translate(-50%, 0) scale(1); }
          70% { opacity: 1; }
          100% { top: 24px; opacity: 0; transform: translate(-50%, 0) scale(0.5); }
        }
        @keyframes fadeScale {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}} />

      {/* Left Card: Standard Build */}
      <div className="relative w-full">
        {/* Invisible static helper to drive container height (always "all" stage to keep size constant) */}
        <div className="invisible pointer-events-none select-none" aria-hidden="true">
          {renderStandardCard("all")}
        </div>
        {/* Absolutely positioned 3D wrapper */}
        <div className="absolute inset-0" style={{ perspective: "1500px" }}>
          <div style={innerStyle(rotation)}>
            <div style={faceStyle(false)}>{renderStandardCard(frontStage)}</div>
            <div style={faceStyle(true)}>{renderStandardCard(backStage)}</div>
          </div>
        </div>
      </div>

      {/* Right Card: Custom Build */}
      <div className="relative w-full">
        {/* Invisible static helper to drive container height (always "all" stage to keep size constant) */}
        <div className="invisible pointer-events-none select-none" aria-hidden="true">
          {renderCustomCard("all")}
        </div>
        {/* Absolutely positioned 3D wrapper */}
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
