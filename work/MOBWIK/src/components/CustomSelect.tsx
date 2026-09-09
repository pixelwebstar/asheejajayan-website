"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CustomSelectProps {
  options: string[];
  label: string;
}

export default function CustomSelect({ options, label }: CustomSelectProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentIndex = selected ? options.indexOf(selected) : -1;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % options.length;
    setSelected(options[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = currentIndex <= 0 ? options.length - 1 : currentIndex - 1;
    setSelected(options[prevIndex]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-3 relative" ref={dropdownRef}>
      <label className="text-[10px] font-black tracking-widest uppercase text-secondary">
        {label}
      </label>
      
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={handlePrev}
          className="p-4 border border-border rounded-md bg-slate-50 hover:bg-primary hover:text-white transition-all text-slate-400 focus:outline-none"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex-grow p-4 px-6 border border-border rounded-md bg-slate-50 flex items-center justify-start transition-all focus:outline-none focus:border-primary
            ${isOpen ? "border-primary ring-1 ring-primary/10" : ""}`}
        >
          <span className={`text-sm font-medium ${selected ? "text-secondary" : "text-slate-400"}`}>
            {selected || "SELECT SERVICE"}
          </span>
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="p-4 border border-border rounded-md bg-slate-50 hover:bg-primary hover:text-white transition-all text-slate-400 focus:outline-none"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-border rounded-md shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`px-6 py-3 text-sm font-medium cursor-pointer transition-colors border-b last:border-0 border-border/50 text-left
                  ${selected === option ? "bg-primary text-white" : "text-secondary hover:bg-slate-50"}`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
