"use client";

import { useEffect, type ReactNode } from "react";

export default function SwipeNavigation({ children }: { children: ReactNode }) {
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    const onFirstTouch = () => {
      window.removeEventListener("touchstart", onFirstTouch);
      import("./swipe-attach").then((mod) => {
        cleanup = mod.attach();
      });
    };
    window.addEventListener("touchstart", onFirstTouch, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onFirstTouch);
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}
