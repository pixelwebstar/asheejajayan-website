"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const ROUTES = ["/", "/about", "/services", "/reviews", "/contact"];

export default function KeyboardNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      touchStartTime = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      // Don't navigate if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const touchEndTime = Date.now();
      
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const deltaTime = touchEndTime - touchStartTime;
      
      // Calculations for "Natural" feel
      const velocity = Math.abs(deltaX) / deltaTime;
      const threshold = 50; // Minimum distance
      const minVelocity = 0.3; // px/ms (flick)
      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY) * 2;
      const isQuick = deltaTime < 300; // Swipe must be fast

      // Safety Zone: Avoid edges (15% on each side) to let browser handle back/forward
      const edgeBuffer = window.innerWidth * 0.15;
      const isInSafetyZone = touchStartX > edgeBuffer && touchStartX < window.innerWidth - edgeBuffer;

      if (isHorizontal && isInSafetyZone && (Math.abs(deltaX) > threshold || (velocity > minVelocity && isQuick))) {
        const currentIndex = ROUTES.indexOf(pathname);
        if (currentIndex === -1) return;

        if (deltaX < 0) {
          // Swipe Left -> Go Right
          const nextIndex = (currentIndex + 1) % ROUTES.length;
          router.push(ROUTES[nextIndex]);
        } else {
          // Swipe Right -> Go Left
          const prevIndex = (currentIndex - 1 + ROUTES.length) % ROUTES.length;
          router.push(ROUTES[prevIndex]);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      
      // Don't navigate if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) return;

      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % ROUTES.length;
        router.push(ROUTES[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + ROUTES.length) % ROUTES.length;
        router.push(ROUTES[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pathname, router]);

  return null;
}
