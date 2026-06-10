import React, { ReactNode } from "react";
import Image from "next/image";

const shell = "mx-auto w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-16";

interface HeroSectionProps {
  children: ReactNode;
  bgClass: string;
  id?: string;
  bgImage?: string;
}

export default function HeroSection({ children, bgClass, id, bgImage }: HeroSectionProps) {
  return (
    <section
      id={id}
      className={`hero-section relative py-16 sm:py-20 ${bgClass} border-b border-gray-100 overflow-hidden`}
    >
      {bgImage && (
        <>
          {/* 1. Base image preloaded using next/image with priority */}
          <div className="absolute inset-0 z-0">
            <Image
              src={bgImage}
              alt="Hero Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          {/* 2. Localized Blur Mask: Blurs background details ONLY behind the text, fading to sharp at the edges */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              maskImage: "radial-gradient(circle, black 15%, transparent 60%)",
              WebkitMaskImage: "radial-gradient(circle, black 15%, transparent 60%)",
            }}
          />
          {/* 3. Radial mask overlay: 92% opaque in the center, fading to 0% at the edges */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(250, 245, 240, 0.92) 0%, rgba(250, 245, 240, 0.65) 45%, rgba(250, 245, 240, 0) 80%)",
            }}
          />
        </>
      )}
      <div className={`${shell} relative z-10 w-full`}>
        {children}
      </div>
    </section>
  );
}
