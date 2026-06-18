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
    title: "Customer Capture",
    standard: { value: "High Drop-offs", impact: "Visitor abandonment" },
    custom: { value: "CRM Integrated", impact: "Direct SMS alerts" }
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
    if (stageId === "customers") return `${prefix} CAPTURE`;
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
  // Renders the EXACT same markup as the original page.tsx for each card side
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
      desc = "Bloated template builders load dozens of unused CSS and JavaScript files before showing any page content, resulting in high mobile visitor drop-offs.";
      visual = (
        <div className="w-full space-y-3 font-mono text-left bg-slate-50 border border-slate-100 rounded-xl p-3 text-[10px] text-slate-600">
          <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 font-sans font-bold">
            <span className="text-slate-800">DevTools Performance Audit</span>
            <span className="text-slate-900 font-mono">Score: 34/100</span>
          </div>
          <div className="space-y-1.5 font-mono">
            <div className="flex justify-between items-center text-[9px]">
              <span>Audited URL:</span>
              <span className="text-slate-900 font-bold truncate max-w-[170px]">https://your-template.com</span>
            </div>
            <div className="flex justify-between text-[9px]">
              <span>First Contentful Paint:</span>
              <span className="text-slate-900 font-bold">3.2s</span>
            </div>
            <div className="flex justify-between text-[9px]">
              <span>Time to Interactive:</span>
              <span className="text-slate-900 font-bold">4.8s</span>
            </div>
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[8px] text-slate-400">
                <span>Loading Assets Sequence</span>
                <span className="text-slate-900 font-bold">3.8s total</span>
              </div>
              <div className="h-1.5 bg-slate-200 rounded-full w-full overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full animate-[fillSlow_4s_linear_forwards]" />
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-1.5 text-[8px] text-slate-400 flex justify-between">
            <span>Size: 2.4MB</span>
            <span>42 Requests (Bloated CSS/JS)</span>
          </div>
        </div>
      );
    } else if (stageId === "fees") {
      title = "Monthly Fees";
      desc = "Platform dependencies tie your business to lifetime subscription fees, meaning your site is shut down the moment payments stop.";
      visual = (
        <div className="w-full space-y-3 font-mono text-left bg-slate-50 border border-slate-100 rounded-xl p-3 text-[10px] text-slate-600">
          <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 font-sans font-bold text-slate-800">
            <span>PLATFORM RENTAL LEDGER</span>
            <span>INVOICE #9284</span>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[8px] uppercase tracking-wider text-slate-400">
                <th className="pb-1">Line Item</th>
                <th className="pb-1 text-center">Type</th>
                <th className="pb-1 text-right">Outflow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-[9px]">
              <tr>
                <td className="py-1.5">SaaS Platform Rental Fee</td>
                <td className="py-1.5 text-center">Recurring</td>
                <td className="py-1.5 text-right font-bold text-slate-900">$39.00</td>
              </tr>
              <tr>
                <td className="py-1.5">Premium Theme Maintenance</td>
                <td className="py-1.5 text-center">Recurring</td>
                <td className="py-1.5 text-right font-bold text-slate-900">$15.00</td>
              </tr>
              <tr>
                <td className="py-1.5">Third-Party App Licensing</td>
                <td className="py-1.5 text-center">Recurring</td>
                <td className="py-1.5 text-right font-bold text-slate-900">$26.00</td>
              </tr>
            </tbody>
          </table>
          <div className="border-t border-slate-100 pt-2 flex justify-between items-center font-sans font-bold text-slate-900 text-[10px]">
            <span>ESTIMATED MONTHLY TOTAL</span>
            <span>${feesStandard}.00/mo</span>
          </div>
        </div>
      );
    } else if (stageId === "layout") {
      title = "Design Layout";
      desc = "Cookie-cutter layout themes restrict your site to standard grid designs, diluting your brand's unique identity.";
      visual = (
        <div className="w-full space-y-2 font-mono text-left bg-slate-50 border border-slate-100 rounded-xl p-3 text-[9px] text-slate-600">
          <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 font-sans font-bold text-slate-800">
            <span>Visual Theme Editor</span>
            <span className="text-[8px] text-slate-400">Restricted Mode</span>
          </div>
          <div className="space-y-2 pt-1 font-sans">
            <div className="border border-slate-200 bg-white rounded p-1 flex justify-between items-center">
              <span className="text-slate-400 font-mono text-[8px]">Header Segment</span>
              <span className="text-[7.5px] px-1 bg-slate-100 rounded text-slate-500 font-mono">Row Lock</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="border border-dashed border-slate-200 bg-slate-100 rounded p-1 text-center text-[7px] text-slate-400">
                Locked Block
              </div>
              <div className="border border-dashed border-slate-200 bg-slate-100 rounded p-1 text-center text-[7px] text-slate-400">
                Locked Block
              </div>
              <div className="border border-dashed border-slate-200 bg-slate-100 rounded p-1 text-center text-[7px] text-slate-400">
                Locked Block
              </div>
            </div>
            <div className="border border-slate-200 bg-white rounded p-1.5 text-center text-[8px] text-slate-400 font-mono">
              [Section Template Locked to Grid Preset 4]
            </div>
          </div>
        </div>
      );
    } else if (stageId === "ownership") {
      title = "Code Ownership";
      desc = "Your source files are locked inside the database of the builder, making it impossible to migrate to your own hosting without rebuilding.";
      visual = (
        <div className="w-full space-y-2 font-mono text-left bg-slate-50 border border-slate-100 rounded-xl p-3 text-[9px] text-slate-600">
          <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 font-sans font-bold text-slate-800">
            <span>Proprietary Hosting Gateway</span>
            <span className="text-slate-400 font-mono">Access: Denied</span>
          </div>
          <div className="space-y-1.5 font-mono text-[8.5px] pt-1">
            <div className="flex justify-between border-b border-slate-100 pb-1">
              <span>$ ssh admin@platform-servers.com</span>
              <span className="font-bold text-slate-900">Permission Denied</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1">
              <span>$ ftp-get /src/theme-layouts</span>
              <span className="font-bold text-slate-900">Command Not Allowed</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1">
              <span>$ git clone platform-db-store</span>
              <span className="font-bold text-slate-900">No Read Access</span>
            </div>
            <div className="text-[7.5px] text-slate-400 pt-1 leading-normal">
              Warning: Theme source files and database schemas are stored inside the platform's proprietary network and cannot be exported.
            </div>
          </div>
        </div>
      );
    } else if (stageId === "customers") {
      title = "Customer Capture";
      desc = "Database delays, page performance lags, and unoptimized phone input layouts cause high form abandonment on mobile devices.";
      visual = (
        <div className="w-full space-y-2 font-mono text-left bg-slate-50 border border-slate-100 rounded-xl p-3 text-[9px] text-slate-600">
          <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 font-sans font-bold text-slate-800">
            <span>Inquiry Processing Pipeline</span>
            <span className="text-slate-400">Status: Suspended</span>
          </div>
          <div className="space-y-2 pt-1 font-sans">
            <div className="border border-slate-200 bg-white rounded p-1.5 flex justify-between items-center">
              <div className="space-y-0.5">
                <div className="text-[8.5px] font-bold text-slate-900">Lead Form Submission</div>
                <div className="text-[7.5px] text-slate-400">Triggered from template submit button</div>
              </div>
              <span className="text-[7.5px] font-mono font-bold text-slate-900">Wait Time: 4.8s</span>
            </div>
            <div className="border border-dashed border-slate-200 bg-slate-100 rounded p-1.5 text-center text-[7.5px] text-slate-400 font-mono">
              [Pipeline Terminated - Form submission abandoned due to database delay]
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full w-full">
        <div className="text-center border-b border-slate-100 pb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 block">{getSubTitle(stageId, false)}</span>
          <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mt-1">Standard Build</h3>
        </div>
        <div key={stageId} className="flex-1 flex flex-col justify-center py-4 space-y-4">
          <div className="text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{title}</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {visual}
          </div>
        </div>
        <div className="border-t border-slate-100 pt-4">
          <p className="text-[11.5px] text-slate-600 leading-relaxed font-medium text-center">
            {desc}
          </p>
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
      desc = "Optimized source code delivers instant page rendering with clean semantic markup, achieving near-perfect Lighthouse scores.";
      visual = (
        <div className="w-full space-y-3 font-mono text-left bg-slate-950 border border-slate-850 rounded-xl p-3 text-[10px] text-slate-400">
          <div className="flex justify-between items-center border-b border-slate-800 pb-1.5 font-sans font-bold">
            <span className="text-white">DevTools Performance Audit</span>
            <span className="text-white font-mono">Score: 100/100</span>
          </div>
          <div className="space-y-1.5 font-mono">
            <div className="flex justify-between items-center text-[9px]">
              <span>Audited URL:</span>
              <span className="text-white font-bold truncate max-w-[170px]">https://your-custom-build.com</span>
            </div>
            <div className="flex justify-between text-[9px]">
              <span>First Contentful Paint:</span>
              <span className="text-white font-bold">0.1s</span>
            </div>
            <div className="flex justify-between text-[9px]">
              <span>Time to Interactive:</span>
              <span className="text-white font-bold">0.2s</span>
            </div>
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[8px] text-slate-500">
                <span>Loading Assets Sequence</span>
                <span className="text-white font-bold">0.2s total</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full w-full overflow-hidden">
                <div className="h-full bg-white rounded-full animate-[fillFast_1s_cubic-bezier(0.1,0.9,0.2,1)_forwards]" />
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-1.5 text-[8px] text-slate-500 flex justify-between">
            <span>Size: 4.2KB</span>
            <span>1 Request (Edge SSR Pre-rendered)</span>
          </div>
        </div>
      );
    } else if (stageId === "fees") {
      title = "Monthly Fees";
      desc = "No monthly SaaS rent or theme licenses. Enjoy free edge hosting and dynamic functions under standard traffic tiers.";
      visual = (
        <div className="w-full space-y-3 font-mono text-left bg-slate-950 border border-slate-850 rounded-xl p-3 text-[10px] text-slate-400">
          <div className="flex justify-between items-center border-b border-slate-800 pb-1.5 font-sans font-bold text-white">
            <span>SERVERLESS DEPLOYMENT LEDGER</span>
            <span>INVOICE #0000</span>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[8px] uppercase tracking-wider text-slate-500">
                <th className="pb-1">Infrastructure Asset</th>
                <th className="pb-1 text-center">Tier</th>
                <th className="pb-1 text-right">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900 text-[9px]">
              <tr>
                <td className="py-1.5">Edge Compute (Vercel/AWS)</td>
                <td className="py-1.5 text-center">Serverless</td>
                <td className="py-1.5 text-right font-bold text-white">$0.00</td>
              </tr>
              <tr>
                <td className="py-1.5">Source Version Control (GitHub)</td>
                <td className="py-1.5 text-center">Developer</td>
                <td className="py-1.5 text-right font-bold text-white">$0.00</td>
              </tr>
              <tr>
                <td className="py-1.5">Dynamic Webhook APIs (Serverless)</td>
                <td className="py-1.5 text-center">Serverless</td>
                <td className="py-1.5 text-right font-bold text-white">$0.00</td>
              </tr>
            </tbody>
          </table>
          <div className="border-t border-slate-800 pt-2 flex justify-between items-center font-sans font-bold text-white text-[10px]">
            <span>PERPETUAL INFRASTRUCTURE TOTAL</span>
            <span>$0.00/mo</span>
          </div>
        </div>
      );
    } else if (stageId === "layout") {
      title = "Design Layout";
      desc = "Handcrafted front-end styles built from the ground up, allowing infinite layout flexibility and perfect brand representation.";
      visual = (
        <div className="w-full space-y-2 font-mono text-left bg-slate-950 border border-slate-850 rounded-xl p-3 text-[9px] text-slate-400">
          <div className="flex justify-between items-center border-b border-slate-800 pb-1.5 font-sans font-bold text-white">
            <span>CSS Grid Canvas</span>
            <span className="text-[8px] text-slate-500 font-mono">[Bespoke Layout]</span>
          </div>
          <div className="space-y-2 pt-1">
            <div className="border border-dashed border-slate-800 rounded p-2 flex justify-between items-center bg-slate-900/50">
              <span className="font-mono text-[7.5px] text-white">grid-template-columns: repeat(12, 1fr)</span>
              <span className="text-[7.5px] font-mono text-slate-500">w-full h-auto</span>
            </div>
            <div className="grid grid-cols-12 gap-2 text-[7px]">
              <div className="col-span-8 border border-slate-700 bg-slate-900 rounded p-1.5 font-mono text-slate-300">
                custom-section (col-span-8)
              </div>
              <div className="col-span-4 border border-slate-700 bg-slate-900 rounded p-1.5 font-mono text-slate-300 flex items-center justify-center">
                asymmetric-aside
              </div>
            </div>
            <div className="border border-dashed border-slate-800 rounded p-1.5 flex justify-between items-center text-[7.5px] text-slate-500 font-mono bg-slate-900/50">
              <span>transform: rotate(-1.5deg) translate3d(0, 0, 0)</span>
              <span>flex-basis: clamp(200px, 40vw, 600px)</span>
            </div>
          </div>
        </div>
      );
    } else if (stageId === "ownership") {
      title = "Code Ownership";
      desc = "Direct access to full source files. Version controlled in a private repository, giving you total freedom to host anywhere.";
      visual = (
        <div className="w-full space-y-2 font-mono text-left bg-slate-950 border border-slate-850 rounded-xl p-3 text-[9px] text-slate-400">
          <div className="flex justify-between items-center border-b border-slate-800 pb-1.5 font-sans font-bold text-white">
            <span>Developer Git Terminal</span>
            <span className="text-slate-500 font-mono">Access: Owner</span>
          </div>
          <div className="space-y-1.5 font-mono text-[8.5px] pt-1">
            <div className="flex justify-between border-b border-slate-900 pb-1">
              <span>$ git status</span>
              <span className="text-white">On branch main (working tree clean)</span>
            </div>
            <div className="flex justify-between border-b border-slate-900 pb-1">
              <span>$ git remote -v</span>
              <span className="text-white">origin git@github.com:your-brand/site.git</span>
            </div>
            <div className="flex justify-between border-b border-slate-900 pb-1">
              <span>$ vercel deploy --prod</span>
              <span className="text-white">Deployed to edge router successfully</span>
            </div>
            <div className="text-[7.5px] text-slate-500 pt-1 leading-normal">
              Success: Private repository matches edge node clusters. Source files can be cloned, modified, or migrated to AWS/Vercel at any time.
            </div>
          </div>
        </div>
      );
    } else if (stageId === "customers") {
      title = "Customer Capture";
      desc = "Fast-loading forms connected to edge handlers send instant SMS notifications and CRM updates, maximizing conversions.";
      visual = (
        <div className="w-full space-y-2 font-mono text-left bg-slate-950 border border-slate-850 rounded-xl p-3 text-[9px] text-slate-400">
          <div className="flex justify-between items-center border-b border-slate-800 pb-1.5 font-sans font-bold text-white">
            <span>Inquiry Processing Pipeline</span>
            <span className="text-slate-500">Status: Active</span>
          </div>
          <div className="space-y-2 pt-1 font-sans">
            <div className="border border-slate-800 bg-slate-900 rounded p-1.5 flex justify-between items-center">
              <div className="space-y-0.5">
                <div className="text-[8.5px] font-bold text-white">Sarah J. (+1 312-555-8930)</div>
                <div className="text-[7.5px] text-slate-500">Edge serverless endpoint handler</div>
              </div>
              <span className="text-[7.5px] font-mono font-bold text-white">Process Time: 0.1s</span>
            </div>
            <div className="border border-dashed border-slate-800 rounded p-1.5 flex justify-between items-center bg-slate-900/50 text-[7.5px] font-mono text-slate-300">
              <span>CRM Synced (Direct API)</span>
              <span>SMS Alert Dispatched (Twilio Router)</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-850 shadow-md flex flex-col justify-between h-full w-full text-white">
        <div className="text-center border-b border-slate-800 pb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">{getSubTitle(stageId, true)}</span>
          <h3 className="text-lg font-black text-white uppercase tracking-widest mt-1">Custom Build</h3>
        </div>
        <div key={stageId} className="flex-1 flex flex-col justify-center py-4 space-y-4">
          <div className="text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">{title}</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {visual}
          </div>
        </div>
        <div className="border-t border-slate-800 pt-4">
          <p className="text-[11.5px] text-slate-300 leading-relaxed font-medium text-center">
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
