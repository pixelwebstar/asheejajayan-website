"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/" },
  { href: "/about" },
  { href: "/services" },
  { href: "/pricing" },
  { href: "/project" },
  { href: "/blog" },
  { href: "/contact" },
];

export default function SwipeNavigation({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchYStart, setTouchYStart] = useState<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      // Exclude forms, inputs, selects, and textareas to avoid breaking form interactions
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("form") ||
        target.closest("button") ||
        target.closest(".no-swipe")
      ) {
        return;
      }
      setTouchStart(e.touches[0].clientX);
      setTouchYStart(e.touches[0].clientY);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStart === null || touchYStart === null) return;

      const touchEnd = e.changedTouches[0].clientX;
      const touchYEnd = e.changedTouches[0].clientY;

      const diffX = touchStart - touchEnd;
      const diffY = touchYStart - touchYEnd;

      // Verify horizontal swipe (X movement > 75px and Y deviation < 45px)
      if (Math.abs(diffX) > 75 && Math.abs(diffY) < 45) {
        const activeIndex = nav.findIndex((item) => {
          if (item.href === "/") return pathname === "/";
          return pathname.startsWith(item.href);
        });
        const currentIndex = activeIndex === -1 ? 0 : activeIndex;

        if (diffX > 0) {
          // Swipe Left -> Navigate Next
          const nextIndex = (currentIndex + 1) % nav.length;
          router.push(nav[nextIndex].href);
        } else {
          // Swipe Right -> Navigate Prev
          const prevIndex = (currentIndex - 1 + nav.length) % nav.length;
          router.push(nav[prevIndex].href);
        }
      }

      setTouchStart(null);
      setTouchYStart(null);
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStart, touchYStart, pathname, router]);

  return <>{children}</>;
}
