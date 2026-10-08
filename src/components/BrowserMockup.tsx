"use client";

import React, { useState, useEffect, useRef } from "react";
import Picture from "@/components/Picture";

interface BrowserMockupProps {
  url: string;
  screenshotUrl: string | string[];
  title: string;
  isVisible?: boolean;
  isActive?: boolean;
}

export default function BrowserMockup({
  url,
  screenshotUrl,
  title,
  isVisible = true,
  isActive = true,
}: BrowserMockupProps) {
  const [hasBeenVisible, setHasBeenVisible] = useState(isVisible);
  const isArray = Array.isArray(screenshotUrl);
  const screenshotArray = isArray ? (screenshotUrl as string[]) : [screenshotUrl as string];
  const [activeIdx, setActiveIdx] = useState(0);
  const [mediaReady, setMediaReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVisible) setHasBeenVisible(true);
  }, [isVisible]);

  const activeUrl = hasBeenVisible ? screenshotArray[activeIdx] : "";
  const isVideo = activeUrl.endsWith(".webm");

  useEffect(() => {
    setMediaReady(false);
  }, [activeUrl]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo) return;
    video.defaultMuted = true;
    video.muted = true;
    if (isActive && isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [activeUrl, isVideo, isActive, isVisible]);

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

  return (
    <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col border border-slate-200 shadow-md group relative isolate">
      <div className="h-8 bg-slate-50 border-b border-slate-200/80 flex items-center px-4 justify-between select-none shrink-0 font-sans z-10 relative">
        <div className="flex gap-1.5 items-center" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-slate-200 block"></span>
          <span className="w-2 h-2 rounded-full bg-slate-200 block"></span>
          <span className="w-2 h-2 rounded-full bg-slate-200 block"></span>
        </div>
        <div className="w-1/2 max-w-[200px] bg-white border border-slate-200/60 rounded py-0.5 text-[10px] font-bold text-slate-600 uppercase tracking-widest text-center truncate font-mono shadow-sm">
          {url.replace("https://", "").replace("www.", "")}
        </div>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 relative overflow-hidden blueprint-grid bg-slate-50">
        {hasBeenVisible && activeUrl && (
          <>
            {isVideo ? (
              <video
                ref={videoRef}
                src={activeUrl}
                autoPlay={isActive}
                loop
                muted
                playsInline
                preload={isActive ? "auto" : "metadata"}
                onLoadedData={() => setMediaReady(true)}
                aria-hidden="true"
                title=""
                className={`absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none ${mediaReady ? "opacity-100" : "opacity-0"}`}
              />
            ) : (
              <Picture
                src={activeUrl}
                alt=""
                width={960}
                height={513}
                loading={isActive ? "eager" : "lazy"}
                fetchPriority={isActive ? "high" : "low"}
                className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none"
              />
            )}

            {screenshotArray.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center text-xs font-bold transition-all shadow-md z-30 opacity-0 group-hover:opacity-100 cursor-pointer select-none"
                  aria-label="Previous screenshot"
                >
                  &larr;
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center text-xs font-bold transition-all shadow-md z-30 opacity-0 group-hover:opacity-100 cursor-pointer select-none"
                  aria-label="Next screenshot"
                >
                  &rarr;
                </button>

                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-30">
                  {screenshotArray.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeIdx ? "bg-slate-900 w-3" : "bg-slate-500/60"
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
