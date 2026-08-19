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
    standard: { value: "3.5 Seconds", impact: "Slower on mobile screens" },
    custom: { value: "1.2 Seconds", impact: "Loads fast on all devices" }
  },
  {
    id: "fees",
    title: "Monthly Fees",
    standard: { value: "Ongoing", impact: "Pay every month forever" },
    custom: { value: "None", impact: "No monthly design fees" }
  },
  {
    id: "layout",
    title: "Website Design",
    standard: { value: "Template", impact: "Pre-made design layout" },
    custom: { value: "Custom", impact: "Built exactly for your brand" }
  },
  {
    id: "ownership",
    title: "File Ownership",
    standard: { value: "Locked", impact: "Hosted on their platform only" },
    custom: { value: "100% Owned", impact: "You own all website files" }
  },
  {
    id: "customers",
    title: "SEO",
    standard: { value: "Page 2 or 3", impact: "Harder for customers to find" },
    custom: { value: "Page 1", impact: "Better search visibility" }
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
  const [customMainWidth, setCustomMainWidth] = useState(8);

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
    if (stageId === "layout") return `${prefix} DESIGN`;
    if (stageId === "ownership") return `${prefix} OWNERSHIP`;
    if (stageId === "customers") return `${prefix} SEO`;
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

  // ── Render helper
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
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest block">{crit.title}</span>
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
      desc = "Standard template sites often load extra files they don't need, which makes the website take longer to load on phones.";
      visual = (
        <div className="w-full space-y-3 p-4 bg-slate-50 border border-slate-100 rounded-xl text-left font-mono text-[11px] text-slate-600">
          <div className="flex justify-between items-center text-xs font-sans font-bold text-slate-800 border-b border-slate-100 pb-1.5">
            <span>Page Loading Order</span>
            <span className="text-slate-900 font-mono">3.5s total</span>
          </div>
          <div className="space-y-2 pt-1">
            <div className="space-y-0.5">
              <div className="flex justify-between">
                <span>system-scripts.js (280KB)</span>
                <span className="text-slate-900 font-bold">1.2s</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full w-full overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full w-0 animate-bar-1" />
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="flex justify-between">
                <span>layout-styles.css (140KB)</span>
                <span className="text-slate-900 font-bold">0.8s</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full w-full overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full w-0 animate-bar-2" />
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="flex justify-between">
                <span>header-image.jpg (1.5MB)</span>
                <span className="text-slate-900 font-bold">2.4s</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full w-full overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full w-0 animate-bar-3" />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (stageId === "fees") {
      title = "Monthly Fees";
      desc = "Template builders charge monthly subscription fees to keep your website live on the internet.";
      visual = (
        <div className="w-full space-y-2.5 p-4 bg-slate-50 border border-slate-100 rounded-xl text-left font-mono text-[11px] text-slate-600">
          <div className="flex justify-between items-center text-xs font-sans font-bold text-slate-800 border-b border-slate-100 pb-1.5">
            <span>Monthly Website Costs</span>
            <span className="text-slate-900 font-bold">${feesStandard}.00/mo</span>
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between">
              <span>Website builder subscription</span>
              <span className="text-slate-900 font-bold">$39/mo</span>
            </div>
            <div className="flex justify-between">
              <span>Template theme renewal</span>
              <span className="text-slate-900 font-bold">$15/mo</span>
            </div>
            <div className="flex justify-between">
              <span>Plugin / extension fees</span>
              <span className="text-slate-900 font-bold">$26/mo</span>
            </div>
          </div>
        </div>
      );
    } else if (stageId === "layout") {
      title = "Website Design";
      desc = "Pre-made templates have fixed layouts, making it harder to customize the style exactly how you want.";
      visual = (
        <div className="w-full space-y-2.5 p-4 bg-slate-50 border border-slate-100 rounded-xl text-left font-mono text-[11px] text-slate-600">
          <div className="flex justify-between items-center text-xs font-sans font-bold text-slate-800 border-b border-slate-100 pb-1.5">
            <span>Template Layout Grid</span>
            <span className="text-slate-600">[Fixed Layout]</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1 h-[40px] items-stretch">
            <div className="border border-dashed border-slate-200 bg-slate-100 rounded p-1.5 text-center text-[10px] text-slate-600 flex items-center justify-center">
              Left Block
            </div>
            <div className="border border-dashed border-slate-200 bg-slate-100 rounded p-1.5 text-center text-[10px] text-slate-600 flex items-center justify-center">
              Right Block
            </div>
          </div>
          <div className="text-[10px] text-slate-600 font-sans text-center mt-1">
            Template layouts have pre-set sections that are hard to move.
          </div>
        </div>
      );
    } else if (stageId === "ownership") {
      title = "File Ownership";
      desc = "Your website files are stored inside their system, meaning you cannot easily move them to another host.";
      visual = (
        <div className="w-full space-y-2.5 p-4 bg-slate-50 border border-slate-100 rounded-xl text-left font-mono text-[11px] text-slate-600">
          <div className="flex justify-between items-center text-xs font-sans font-bold text-slate-800 border-b border-slate-100 pb-1.5">
            <span>Server File Access</span>
            <span className="text-slate-600">[Locked Access]</span>
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between">
              <span>Direct File Access (FTP)</span>
              <span className="text-slate-900 font-bold">Inaccessible</span>
            </div>
            <div className="flex justify-between">
              <span>Database Download</span>
              <span className="text-slate-900 font-bold">Disabled</span>
            </div>
            <div className="flex justify-between">
              <span>Website File Transfer</span>
              <span className="text-slate-900 font-bold">Not Supported</span>
            </div>
          </div>
        </div>
      );
    } else if (stageId === "customers") {
      title = "SEO";
      desc = "Slower page loads can make Google rank your website lower in search results.";
      visual = (
        <div className="w-full space-y-2.5 p-4 bg-slate-50 border border-slate-100 rounded-xl text-left font-mono text-[11px] text-slate-600">
          <div className="flex justify-between items-center text-xs font-sans font-bold text-slate-800 border-b border-slate-100 pb-1.5">
            <span>Google Search Results</span>
            <span className="text-slate-600">[Search: "Web Designer"]</span>
          </div>
          <div className="space-y-1.5 pt-1 pl-1 border-l border-slate-200">
            <div className="text-slate-600">1. Competitor Website (Loads Faster)</div>
            <div className="text-slate-600">2. Competitor Agency (Loads Faster)</div>
            <div className="font-bold text-slate-900">18. Your Website (Loads Slower)</div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full w-full">
        {/* Header */}
        <div className="text-center border-b border-slate-100 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">{title}</span>
          <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-widest mt-1">Standard Build</h3>
        </div>
        <div key={stageId} className="flex-1 flex flex-col justify-center py-4">
          <div className="w-full h-full flex items-center justify-center">
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
      desc = "Custom websites are built with clean code and only load the files they actually need, making pages open much faster.";
      visual = (
        <div className="w-full space-y-3 p-4 bg-slate-950 border border-slate-850 rounded-xl text-left font-mono text-[11px] text-slate-400">
          <div className="flex justify-between items-center text-xs font-sans font-bold text-white border-b border-slate-800 pb-1.5">
            <span>Page Loading Order</span>
            <span className="text-white font-mono">1.2s total</span>
          </div>
          <div className="space-y-2 pt-1">
            <div className="space-y-0.5">
              <div className="flex justify-between">
                <span>website-page.html (12KB)</span>
                <span className="text-white font-bold">0.4s</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden">
                <div className="h-full bg-white rounded-full w-0 animate-custom-1" />
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="flex justify-between">
                <span>clean-styles.css (35KB)</span>
                <span className="text-white font-bold">0.4s</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden">
                <div className="h-full bg-white rounded-full w-0 animate-custom-2" />
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="flex justify-between">
                <span>clean-scripts.js (25KB)</span>
                <span className="text-white font-bold">0.4s</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden">
                <div className="h-full bg-white rounded-full w-0 animate-custom-3" />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (stageId === "fees") {
      title = "Monthly Fees";
      desc = "Since you own the code, you can use free or low-cost hosting services without paying monthly design fees.";
      visual = (
        <div className="w-full space-y-2.5 p-4 bg-slate-955 border border-slate-850 rounded-xl text-left font-mono text-[11px] text-slate-400">
          <div className="flex justify-between items-center text-xs font-sans font-bold text-white border-b border-slate-800 pb-1.5">
            <span>Hosting & Support Costs</span>
            <span className="text-white font-mono">$0.00/mo</span>
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between">
              <span>Cloud website hosting</span>
              <span className="text-white font-bold">$0.00/mo</span>
            </div>
            <div className="flex justify-between">
              <span>Security certificate (SSL)</span>
              <span className="text-white font-bold">$0.00/mo</span>
            </div>
            <div className="flex justify-between">
              <span>Contact forms & database</span>
              <span className="text-white font-bold">$0.00/mo</span>
            </div>
          </div>
        </div>
      );
    } else if (stageId === "layout") {
      title = "Website Design";
      desc = "Custom code gives you complete control over the layout, allowing any design structure you need.";
      visual = (
        <div className="w-full space-y-2.5 p-4 bg-slate-955 border border-slate-855 rounded-xl text-left font-mono text-[11px] text-slate-400">
          <div className="flex justify-between items-center text-xs font-sans font-bold text-white border-b border-slate-800 pb-1.5">
            <span>Custom Layout Grid</span>
            <div className="flex gap-1">
              <button
                onClick={(e) => { e.stopPropagation(); setCustomMainWidth(6); }}
                className={`px-1 rounded text-[8px] border transition-all ${customMainWidth === 6 ? 'bg-white text-slate-900 border-white font-bold' : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'}`}
              >
                50/50
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setCustomMainWidth(8); }}
                className={`px-1 rounded text-[8px] border transition-all ${customMainWidth === 8 ? 'bg-white text-slate-900 border-white font-bold' : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'}`}
              >
                70/30
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setCustomMainWidth(10); }}
                className={`px-1 rounded text-[8px] border transition-all ${customMainWidth === 10 ? 'bg-white text-slate-900 border-white font-bold' : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'}`}
              >
                85/15
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 pt-1 h-[40px] items-stretch">
            <div
              style={{ gridColumn: `span ${customMainWidth} / span ${customMainWidth}`, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
              className="bg-slate-900 border border-slate-800 rounded p-1.5 text-[9px] text-white flex items-center justify-center font-bold"
            >
              Main ({customMainWidth}/12)
            </div>
            <div
              style={{ gridColumn: `span ${12 - customMainWidth} / span ${12 - customMainWidth}`, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
              className="bg-slate-900 border border-slate-800 rounded p-1.5 text-[9px] text-slate-500 flex items-center justify-center"
            >
              {12 - customMainWidth > 0 ? `Sidebar (${12 - customMainWidth}/12)` : "None"}
            </div>
          </div>
          <div className="text-[9px] text-slate-550 font-sans text-center mt-1">
            Tap the layout buttons above to adjust the custom column widths live.
          </div>
        </div>
      );
    } else if (stageId === "ownership") {
      title = "File Ownership";
      desc = "You get the complete website files, giving you the freedom to move or host your website anywhere.";
      visual = (
        <div className="w-full space-y-2.5 p-4 bg-slate-955 border border-slate-855 rounded-xl text-left font-mono text-[11px] text-slate-400">
          <div className="flex justify-between items-center text-xs font-sans font-bold text-white border-b border-slate-800 pb-1.5">
            <span>Source Code Repository</span>
            <span className="text-white">[Full Access]</span>
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between">
              <span>Website Files Status</span>
              <span className="text-white font-bold">100% Privately Owned</span>
            </div>
            <div className="flex justify-between">
              <span>Server Transfer</span>
              <span className="text-white font-bold">Allowed / Free to move</span>
            </div>
            <div className="flex justify-between">
              <span>Hosting Support</span>
              <span className="text-white font-bold">Any provider you choose</span>
            </div>
          </div>
        </div>
      );
    } else if (stageId === "customers") {
      title = "SEO";
      desc = "Fast loading times and clean coding help Google read and rank your website higher.";
      visual = (
        <div className="w-full space-y-2.5 p-4 bg-slate-955 border border-slate-850 rounded-xl text-left font-mono text-[11px] text-slate-400">
          <div className="flex justify-between items-center text-xs font-sans font-bold text-white border-b border-slate-800 pb-1.5">
            <span>Google Search Results</span>
            <span className="text-slate-550">[Search: "Web Designer"]</span>
          </div>
          <div className="space-y-1.5 pt-1 pl-1 border-l border-slate-800">
            <div className="font-bold text-white">1. Your Website (Loads Faster)</div>
            <div className="text-slate-500">2. Competitor Website</div>
            <div className="text-slate-500">3. Competitor Agency</div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-850 shadow-md flex flex-col justify-between h-full w-full text-white">
        {/* Header */}
        <div className="text-center border-b border-slate-800 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">{title}</span>
          <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-widest mt-1">Custom Build</h3>
        </div>
        <div key={stageId} className="flex-1 flex flex-col justify-center py-4">
          <div className="w-full h-full flex items-center justify-center">
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
        @keyframes loadBar1 {
          0% { width: 0%; }
          100% { width: 40%; }
        }
        @keyframes loadBar2 {
          0% { width: 0%; }
          100% { width: 60%; }
        }
        @keyframes loadBar3 {
          0% { width: 0%; }
          100% { width: 90%; }
        }
        @keyframes customBar1 {
          0% { width: 0%; }
          100% { width: 33%; }
        }
        @keyframes customBar2 {
          0% { width: 0%; }
          100% { width: 66%; }
        }
        @keyframes customBar3 {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-bar-1 {
          animation: loadBar1 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-bar-2 {
          animation: loadBar2 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-bar-3 {
          animation: loadBar3 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-custom-1 {
          animation: customBar1 0.4s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
        }
        .animate-custom-2 {
          animation: customBar2 0.7s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
        }
        .animate-custom-3 {
          animation: customBar3 1.0s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
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
