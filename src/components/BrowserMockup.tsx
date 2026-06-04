"use client";

import React, { useState } from "react";

interface BrowserMockupProps {
  url: string;
  screenshotUrl: string;
  title: string;
  isVisible?: boolean;
}

export default function BrowserMockup({ url, screenshotUrl, title, isVisible = true }: BrowserMockupProps) {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  if (isVisible && !hasBeenVisible) {
    setHasBeenVisible(true);
  }

  const activeUrl = hasBeenVisible ? screenshotUrl : "";
  const isVideo = activeUrl.endsWith(".webm");

  return (
    <div className="w-full h-full bg-white rounded-t-xl overflow-hidden flex flex-col border border-slate-200 shadow-md">
      {/* Browser Chrome Header */}
      <div className="h-8 bg-slate-50 border-b border-slate-200/80 flex items-center px-4 justify-between select-none shrink-0 font-sans">
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
              <img
                src={activeUrl}
                alt={title}
                className="w-full h-full object-cover object-top select-none pointer-events-none opacity-90"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
