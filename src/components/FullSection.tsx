import type { ReactNode } from "react";
import { shell } from "@/lib/ui";

export default function FullSection({
  children,
  bgClass,
  id,
  compact = false,
  className = "",
}: {
  children: ReactNode;
  bgClass: string;
  id?: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`full-section relative ${compact ? "py-14 sm:py-16 lg:py-20 xl:py-24" : "py-20 lg:py-32"} ${bgClass} ${className} border-b border-gray-100`}
    >
      <div className={`${shell} relative z-10 w-full`}>{children}</div>
    </section>
  );
}
