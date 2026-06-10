"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BrowserMockupProps {
  url: string;
  screenshotUrl: string | string[];
  title: string;
  isVisible?: boolean;
}

export default function BrowserMockup({ url, screenshotUrl, title, isVisible = true }: BrowserMockupProps) {
  const [hasBeenVisible, setHasBeenVisible] = useState(isVisible);
  const isArray = Array.isArray(screenshotUrl);
  const screenshotArray = isArray ? (screenshotUrl as string[]) : [screenshotUrl as string];
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + screenshotArray.length) % screenshotArray.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % screenshotArray.length);
  };

  const activeUrl = hasBeenVisible ? screenshotArray[activeIdx] : "";
  const isVideo = activeUrl.endsWith(".webm");

  return (
    <div className="w-full h-full bg-white rounded-t-xl overflow-hidden flex flex-col border border-slate-200 shadow-md group relative">
      {/* Browser Chrome Header */}
      <div className="h-8 bg-slate-50 border-b border-slate-200/80 flex items-center px-4 justify-between select-none shrink-0 font-sans z-10 relative">
        {/* Window controls */}
        <div className="flex gap-1.5 items-center">
          <span className="w-2 h-2 rounded-full bg-slate-200 block"></span>
          <span className="w-2 h-2 rounded-full bg-slate-200 block"></span>
          <span className="w-2 h-2 rounded-full bg-slate-200 block"></span>
        </div>
        {/* Address bar */}
        <div className="w-1/2 max-w-[200px] bg-white border border-slate-200/60 rounded py-0.5 text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center truncate font-mono shadow-sm">
          {url.replace("https://", "").replace("www.", "")}
        </div>
        <div className="w-10"></div>
      </div>
      
      {/* Content Area with Blueprint Grid Texture & Screenshot/Video */}
      <div className={`flex-1 relative overflow-hidden ${!hasBeenVisible ? "bg-white" : "blueprint-grid bg-slate-50"}`}>
        {hasBeenVisible && activeUrl && (
          <>
            {isVideo ? (
              <video
                src={activeUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-top select-none pointer-events-none opacity-90"
              />
            ) : (
              <Image
                src={activeUrl}
                alt={`${title} - slide ${activeIdx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top select-none pointer-events-none opacity-90"
              />
            )}

            {/* Left and Right Carousel Arrow Buttons */}
            {screenshotArray.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center text-xs font-bold transition-all shadow-md z-30 opacity-0 group-hover:opacity-100 cursor-pointer select-none"
                  aria-label="Previous screenshot"
                >
                  &larr;
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center text-xs font-bold transition-all shadow-md z-30 opacity-0 group-hover:opacity-100 cursor-pointer select-none"
                  aria-label="Next screenshot"
                >
                  &rarr;
                </button>

                {/* Bullet Indicators */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-30">
                  {screenshotArray.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeIdx ? "bg-slate-900 w-3" : "bg-slate-400/60"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
