import React from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  highlight?: string;
}

const PageHero = ({ title, subtitle, highlight }: PageHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-surface-2 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">

        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-8xl font-black text-secondary leading-none uppercase tracking-tighter">
            {title} <span className="text-primary">{highlight}</span>
          </h1>
          <div className="w-24 h-2 bg-primary mx-auto mb-8" />
          <p className="text-xl sm:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>


    </section>
  );
};

export default PageHero;
