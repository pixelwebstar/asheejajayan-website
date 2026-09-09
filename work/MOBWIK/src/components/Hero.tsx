import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] lg:h-[100dvh] pt-[110px] lg:pt-[70px] flex items-center justify-center bg-surface-2 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">

        <div className="space-y-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-8xl font-black text-secondary leading-none uppercase tracking-tighter">
              MOBILE <br />
              <span className="text-primary">SPECIALIST.</span>
            </h1>
            <div className="w-32 h-3 bg-primary mx-auto" />
            <p className="text-xl sm:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              High-precision hardware restoration and technical support for all major device architectures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="/contact?scroll=form"
              className="btn-primary uppercase tracking-widest text-sm min-w-[240px] py-5"
            >
              Start Repair
            </a>
            <a
              href="/services"
              className="btn-secondary uppercase tracking-widest text-sm min-w-[240px] py-5 bg-white"
            >
              View Services
            </a>
          </div>
        </div>
      </div>



    </section>
  );
};

export default Hero;
