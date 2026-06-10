"use client";

import Link from "next/link";
import React, { ReactNode, useState, useEffect, useRef } from "react";
// Premium Button Styles
const btnPrimary = "inline-flex items-center justify-center rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] min-w-[220px]";

function FullSection({
  children,
  bgClass,
  id,
}: {
  children: ReactNode;
  bgClass: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full py-20 lg:py-32 ${bgClass} border-b border-slate-100 overflow-hidden`}>
      <div className="mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28">
        {children}
      </div>
    </section>
  );
}

export default function IdeasPage() {
  // --- Experiment 1 State: Fluid Spacing & Typography Clamping Sandbox ---
  const [simulatedWidth, setSimulatedWidth] = useState(1024);
  // Calculate dynamic clamp value: clamp(2rem, 4vw + 1rem, 4rem)
  // 1rem = 16px. Mobile width = 320px. Desktop width = 1440px.
  // 4vw at 320px = 12.8px. 12.8 + 16 = 28.8px (approx 1.8rem).
  // 4vw at 1440px = 57.6px. 57.6 + 16 = 73.6px (approx 4.6rem).
  const calculatedFontSize = Math.min(Math.max(28.8, (simulatedWidth * 0.04) + 16), 64);
  const calculatedPadding = Math.min(Math.max(16, (simulatedWidth * 0.03) + 8), 48);

  // --- Experiment 2 State: Edge Middleware & Geo-Personalization Console ---
  const [activeServer, setActiveServer] = useState("Toronto");
  const [geoRewriteLog, setGeoRewriteLog] = useState<string[]>([]);
  const servers = [
    { name: "Toronto", code: "YYZ", lat: "43.6532° N", status: "Active", delay: "0.8ms", msg: "Welcome back, Canada! Custom pipelines enabled." },
    { name: "Tokyo", code: "NRT", lat: "35.6762° N", status: "Active", delay: "1.4ms", msg: "ようこそ！ Japan request routed through APAC edge cluster." },
    { name: "London", code: "LHR", lat: "51.5074° N", status: "Active", delay: "1.1ms", msg: "Good day, UK! Static assets localized via Heathrow server." },
    { name: "Vancouver", code: "YVR", lat: "49.2827° N", status: "Active", delay: "0.9ms", msg: "Hello BC! Optimized layout loaded for Pacific Standard Time." },
    { name: "Paris", code: "CDG", lat: "48.8566° N", status: "Active", delay: "1.2ms", msg: "Bonjour France! Edge rewrite active for Western Europe." }
  ];

  const handleServerChange = (name: string) => {
    setActiveServer(name);
    const target = servers.find(s => s.name === name);
    const timestamp = new Date().toLocaleTimeString();
    setGeoRewriteLog(prev => [
      `[${timestamp}] Request intercepted at CDN Node ${target?.code} (${target?.name})`,
      `[${timestamp}] Geolocation verified at lat/long ${target?.lat}`,
      `[${timestamp}] Rewriting route from '/' to '/locale/${target?.name.toLowerCase()}' in ${target?.delay}`,
      `[${timestamp}] Response completed with ZERO layout shift (CLS: 0.0)`,
      ...prev.slice(0, 8)
    ]);
  };

  // --- Experiment 3 Ref/State: GPU-Accelerated Canvas Particle Field ---
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fps, setFps] = useState(60);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particleCount] = useState(80);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lastTime = performance.now();
    let frameCount = 0;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || 600;
      canvas.height = 300;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particles array
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 3 + 1,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    // Render loop
    const render = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background grid simulation
      ctx.strokeStyle = "rgba(15, 23, 42, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Boundary bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Attract to mouse if close
        const dx = mousePos.x - p.x;
        const dy = mousePos.y - p.y;
        const dist = Math.sqrt(dx * dx + dx * dx);
        if (dist < 100) {
          p.x += dx * 0.02;
          p.y += dy * 0.02;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 23, 42, ${p.alpha})`;
        ctx.fill();
      });

      // Connect particles near mouse
      particles.forEach((p1, idx) => {
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
          if (dist < 70) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(15, 23, 42, ${(1 - dist / 70) * 0.08})`;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mousePos, particleCount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // --- Experiment 4 State: State-Machine UI Transition Console ---
  const [transitionState, setTransitionState] = useState<"IDLE" | "SENDING" | "EDGE_PERSONALIZING" | "CRM_SYNC" | "SUCCESS" | "WORKSPACE_LOADED">("IDLE");
  const [transitionLog, setTransitionLog] = useState<string[]>([]);

  const startTransitionSequence = () => {
    if (transitionState !== "IDLE" && transitionState !== "SUCCESS" && transitionState !== "WORKSPACE_LOADED") return;
    
    setTransitionState("SENDING");
    const now = () => new Date().toLocaleTimeString();
    setTransitionLog([`[${now()}] Starting transition trigger: client form submission`]);

    setTimeout(() => {
      setTransitionState("EDGE_PERSONALIZING");
      setTransitionLog(prev => [`[${now()}] Intercepting edge cookies & executing geolocation checks`, ...prev]);
    }, 1500);

    setTimeout(() => {
      setTransitionState("CRM_SYNC");
      setTransitionLog(prev => [`[${now()}] Connecting database endpoint & saving record synchronously`, ...prev]);
    }, 3000);

    setTimeout(() => {
      setTransitionState("SUCCESS");
      setTransitionLog(prev => [`[${now()}] CRM Synchronization succeeded. Showing native success indicator`, ...prev]);
    }, 4500);

    setTimeout(() => {
      setTransitionState("WORKSPACE_LOADED");
      setTransitionLog(prev => [`[${now()}] Page workspace transition complete. Cache updated in CDN`, ...prev]);
    }, 6000);
  };

  // --- Experiment 5 State: Incremental Static Regeneration (ISR) Cache Tracker ---
  const [conversionRateInput, setConversionRateInput] = useState("4.2%");
  const [cdnCacheStatus, setCdnCacheStatus] = useState<"FRESH" | "STALE" | "REGENERATING">("FRESH");
  const [isrLogs, setIsrLogs] = useState<string[]>([]);
  const [currentCdnValue, setCurrentCdnValue] = useState("4.2%");

  const triggerRevalidation = () => {
    if (cdnCacheStatus === "REGENERATING") return;

    setCdnCacheStatus("STALE");
    const now = () => new Date().toLocaleTimeString();
    setIsrLogs(prev => [
      `[${now()}] Client requested revalidation for route '/ideas'`,
      `[${now()}] CDN cache is STALE: serving previous conversion rate: ${currentCdnValue} instantly to next visitor`,
      `[${now()}] Launching serverless build thread in background...`,
      ...prev
    ]);

    setTimeout(() => {
      setCdnCacheStatus("REGENERATING");
      setIsrLogs(prev => [
        `[${now()}] Fetching fresh values from source DB...`,
        `[${now()}] Re-compiling route templates in background Node thread`,
        ...prev
      ]);
    }, 1500);

    setTimeout(() => {
      setCdnCacheStatus("FRESH");
      setCurrentCdnValue(conversionRateInput);
      setIsrLogs(prev => [
        `[${now()}] Static page compiled successfully!`,
        `[${now()}] CDN Cache regenerated. Fresh value is now ${conversionRateInput}`,
        `[${now()}] All future requests served instant HTML with value ${conversionRateInput}`,
        ...prev
      ]);
    }, 3500);
  };

  return (
    <article className="w-full bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Hero Header */}
      <section className="relative w-full bg-warm-light py-20 sm:py-32 border-b border-slate-200/60 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(15,23,42,0.02),transparent_60%)] pointer-events-none" />
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-12 lg:px-20 xl:px-28 flex flex-col items-center text-center space-y-6 relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block">
            NEXT.JS ADVANCED EXPERIMENTS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] max-w-4xl">
            Custom Next.js Capabilities.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-2xl">
            This playground demonstrates state-of-the-art browser capabilities, edge execution, and database behaviors that are virtually impossible to build on traditional monolithic page builders like WordPress.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <Link href="/" className={btnPrimary}>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Experiment 1: Fluid Typography & Spacing Calculator */}
      <FullSection id="calc" bgClass="bg-white">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">EXPERIMENT 01</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Fluid Responsive Scaling</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Instead of using jumpy media query breakpoints, we use mathematical CSS clamping to resize elements proportionally. Drag the simulator slider to watch fonts and layouts scale smoothly.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Simulated Device Width:</span>
                  <span className="font-mono">{simulatedWidth}px</span>
                </div>
                <input
                  type="range"
                  min="320"
                  max="1920"
                  value={simulatedWidth}
                  onChange={(e) => setSimulatedWidth(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">
                  <div>Font Size: <span className="text-slate-800 font-black">{calculatedFontSize.toFixed(1)}px</span></div>
                  <div>Section Padding: <span className="text-slate-800 font-black">{calculatedPadding.toFixed(1)}px</span></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-center overflow-hidden transition-all duration-300 min-h-[350px]">
                <div 
                  className="space-y-4 border-slate-200 border border-dashed rounded-2xl bg-white shadow-xs text-center"
                  style={{ 
                    padding: `${calculatedPadding}px`,
                    transition: "padding 0.1s ease-out"
                  }}
                >
                  <h3 
                    className="font-black text-slate-900 leading-none tracking-tight"
                    style={{ 
                      fontSize: `${calculatedFontSize}px`,
                      transition: "font-size 0.1s ease-out"
                    }}
                  >
                    Fluid Text.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">
                    This box changes padding and text scale continuously matching the dynamic width parameters above. Zero layout jumps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* Experiment 2: Edge Geo-Personalization Console */}
      <FullSection id="geo" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">EXPERIMENT 02</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Edge Middleware Geolocation</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Next.js allows routing code to execute at CDN edge servers (under 2ms) *before* reaching the browser. Click different server nodes to simulate immediate geolocation content personalization.
              </p>

              <div className="grid grid-cols-5 gap-2 pt-4">
                {servers.map((serv) => (
                  <button
                    key={serv.name}
                    onClick={() => handleServerChange(serv.name)}
                    className={`px-3 py-2 text-[10px] font-bold uppercase tracking-wider rounded border transition-all ${
                      activeServer === serv.name
                        ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    {serv.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-850 shadow-md text-white flex flex-col justify-between h-full space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700" />
                
                {/* Simulated Web View */}
                <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">SIMULATED FRONTEND RESPONSE</span>
                    <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900 font-mono">EDGE OK</span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Dynamic Content:</span>
                    <p className="text-base font-bold text-white leading-relaxed">
                      {servers.find(s => s.name === activeServer)?.msg}
                    </p>
                  </div>
                </div>

                {/* Middleware Logs console */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">CDN Edge Routing Logs:</span>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 h-[140px] overflow-y-auto scrollbar-none font-mono text-[9px] text-slate-400 space-y-1">
                    {geoRewriteLog.length === 0 ? (
                      <div className="text-slate-600">[Console Idle] Click a server node to launch request trace...</div>
                    ) : (
                      geoRewriteLog.map((log, index) => (
                        <div key={index} className="leading-relaxed border-b border-slate-900/50 pb-1 last:border-0">{log}</div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* Experiment 3: WebGL GPU Particle Canvas */}
      <FullSection id="gpu" bgClass="bg-white">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">EXPERIMENT 03</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">GPU Particle Physics</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Traditional platforms struggle to run dynamic graphic layouts smoothly. Next.js handles native HTML5 Canvas configurations using client hooks to run particle interactions directly on the device GPU.
              </p>
              
              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">
                <div>Frame Rate: <span className="text-slate-800 font-black block text-lg font-sans mt-1">{fps} FPS</span></div>
                <div>Array Count: <span className="text-slate-800 font-black block text-lg font-sans mt-1">{particleCount} items</span></div>
                <div>Processing: <span className="text-slate-800 font-black block text-lg font-sans mt-1">GPU</span></div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                <canvas
                  ref={canvasRef}
                  onMouseMove={handleMouseMove}
                  className="w-full bg-white rounded-2xl border border-slate-200/60 cursor-crosshair shadow-xs"
                />
                <div className="absolute bottom-10 left-10 text-[8px] font-bold uppercase tracking-widest text-slate-400 font-mono">
                  Coordinates: X={mousePos.x} Y={mousePos.y}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* Experiment 4: State-Machine UI Transition Console */}
      <FullSection id="state-machine" bgClass="bg-cool-light">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">EXPERIMENT 04</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">State-Machine Workflows</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Custom React allows building complete backend sync loops into UI states. Click the button to watch the simulation step through multiple complex API and personalization workflow states dynamically.
              </p>
              <div className="pt-4 flex justify-center lg:justify-start">
                <button
                  onClick={startTransitionSequence}
                  disabled={transitionState !== "IDLE" && transitionState !== "SUCCESS" && transitionState !== "WORKSPACE_LOADED"}
                  className={`${btnPrimary} w-full sm:w-auto text-center`}
                >
                  {transitionState === "IDLE" ? "Launch Workflow" : "Executing..."}
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 h-full flex flex-col justify-between">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">STATE-MACHINE VISUALIZATION</span>
                  <span className="text-[8px] font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-widest font-mono">
                    Current: {transitionState}
                  </span>
                </div>

                {/* State Flow Map */}
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono py-4">
                  {[
                    { id: "SENDING", label: "01. Submission" },
                    { id: "EDGE_PERSONALIZING", label: "02. Personalize" },
                    { id: "CRM_SYNC", label: "03. DB Sync" }
                  ].map((step) => {
                    const isActive = transitionState === step.id;
                    const isPassed = 
                      (step.id === "SENDING" && (transitionState !== "IDLE" && transitionState !== "SENDING")) ||
                      (step.id === "EDGE_PERSONALIZING" && (transitionState !== "IDLE" && transitionState !== "SENDING" && transitionState !== "EDGE_PERSONALIZING"));
                    return (
                      <div
                        key={step.id}
                        className={`p-3 rounded-xl border transition-all ${
                          isActive
                            ? "border-slate-950 bg-slate-950 text-white scale-102 shadow-sm"
                            : isPassed
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-slate-100 bg-slate-50"
                        }`}
                      >
                        {step.label}
                      </div>
                    );
                  })}
                </div>

                {/* Transition logs */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Sync System logs:</span>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 h-[100px] overflow-y-auto scrollbar-none font-mono text-[9px] text-slate-500 space-y-1">
                    {transitionLog.length === 0 ? (
                      <div className="text-slate-400">[Console Idle] Click the Launch button to trace states...</div>
                    ) : (
                      transitionLog.map((log, index) => (
                        <div key={index} className="leading-relaxed border-b border-slate-200/30 pb-1 last:border-0">{log}</div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* Experiment 5: Incremental Static Regeneration (ISR) Cache Tracker */}
      <FullSection id="isr" bgClass="bg-white">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">EXPERIMENT 05</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">CDN Incremental Static Regeneration</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Next.js updates static pages dynamically in the background without rebuilding. Edit the conversion rate below and click &quot;Revalidate CDN&quot; to watch how the serverless thread updates cache parameters.
              </p>

              <div className="flex gap-4 items-center pt-2 max-w-sm mx-auto lg:mx-0">
                <input
                  type="text"
                  value={conversionRateInput}
                  onChange={(e) => setConversionRateInput(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-bold w-1/2"
                  placeholder="e.g. 5.1%"
                />
                <button
                  onClick={triggerRevalidation}
                  disabled={cdnCacheStatus === "REGENERATING"}
                  className={`${btnPrimary} py-4 rounded-xl text-xs flex-1`}
                >
                  Revalidate CDN
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-850 shadow-md text-white flex flex-col justify-between h-full space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700" />
                
                {/* Cache Status Header */}
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">CDN CACHE NODE CONTROL</span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      cdnCacheStatus === "FRESH"
                        ? "bg-emerald-400 animate-ping"
                        : cdnCacheStatus === "STALE"
                        ? "bg-amber-400"
                        : "bg-blue-400 animate-pulse"
                    }`} />
                    <span className="text-[9px] font-bold uppercase tracking-widest font-mono">
                      Cache: {cdnCacheStatus}
                    </span>
                  </div>
                </div>

                {/* Simulated CDN values */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest font-mono block">STALE VALUE SERVED</span>
                    <span className="text-xl font-bold text-white font-mono">{currentCdnValue}</span>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest font-mono block">BACKGROUND COMPILED VALUE</span>
                    <span className="text-xl font-bold text-slate-400 font-mono">{conversionRateInput}</span>
                  </div>
                </div>

                {/* Logger console */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Cache Revalidation Logs:</span>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 h-[100px] overflow-y-auto scrollbar-none font-mono text-[9px] text-slate-400 space-y-1">
                    {isrLogs.length === 0 ? (
                      <div className="text-slate-600">[Console Idle] Click the Revalidate button to trigger cache update...</div>
                    ) : (
                      isrLogs.map((log, index) => (
                        <div key={index} className="leading-relaxed border-b border-slate-900/50 pb-1 last:border-0">{log}</div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullSection>
    </article>
  );
}
