import React, { ReactNode } from "react";

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-28";

interface HeroSectionProps {
  children: ReactNode;
  bgClass: string;
  id?: string;
  bgImage?: string;
  fill?: boolean;
}

export default function HeroSection({ children, bgClass, id, bgImage, fill = true }: HeroSectionProps) {
  return (
    <section
      id={id}
      className={`${fill ? "hero-section" : ""} relative py-16 sm:py-20 ${bgClass} border-b border-gray-100 overflow-hidden`}
    >
      {bgImage ? (
        <>
          <div className="absolute inset-0 z-0">
            <picture className="absolute inset-0 block h-full w-full">
              <source
                type="image/avif"
                srcSet="/hero-bg-768.avif 768w, /hero-bg-960.avif 960w, /hero-bg-1280.avif 1280w, /hero-bg.avif 1920w"
                sizes="100vw"
              />
              <source
                type="image/webp"
                srcSet="/hero-bg-768.webp 768w, /hero-bg-960.webp 960w, /hero-bg-1280.webp 1280w, /hero-bg.webp 1920w"
                sizes="100vw"
              />
              <img
                src={bgImage}
                alt=""
                width={1920}
                height={1080}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </picture>
          </div>
          <div className="hero-bg-blur" aria-hidden="true" />
          <div className="hero-bg-wash" aria-hidden="true" />
        </>
      ) : null}
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}
