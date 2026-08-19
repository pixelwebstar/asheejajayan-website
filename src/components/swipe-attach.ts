const nav = ["/", "/about", "/services", "/pricing", "/project", "/blog", "/contact"];

export function attach(): () => void {
  let startX: number | null = null;
  let startY: number | null = null;

  const onStart = (e: TouchEvent) => {
    const target = e.target as HTMLElement;
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
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  };

  const onEnd = (e: TouchEvent) => {
    if (startX === null || startY === null) return;
    const diffX = startX - e.changedTouches[0].clientX;
    const diffY = startY - e.changedTouches[0].clientY;
    startX = null;
    startY = null;
    if (Math.abs(diffX) <= 75 || Math.abs(diffY) >= 45) return;

    const path = window.location.pathname;
    const activeIndex = nav.findIndex((href) =>
      href === "/" ? path === "/" : path.startsWith(href),
    );
    const currentIndex = activeIndex === -1 ? 0 : activeIndex;
    const nextIndex =
      diffX > 0
        ? (currentIndex + 1) % nav.length
        : (currentIndex - 1 + nav.length) % nav.length;
    window.location.assign(nav[nextIndex]);
  };

  window.addEventListener("touchstart", onStart, { passive: true });
  window.addEventListener("touchend", onEnd, { passive: true });
  return () => {
    window.removeEventListener("touchstart", onStart);
    window.removeEventListener("touchend", onEnd);
  };
}
