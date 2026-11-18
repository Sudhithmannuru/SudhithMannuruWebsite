"use client";

import { Plane } from "@/components/world/art";
import { useEffect, useState } from "react";

export function Plotter() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setVisible(false), reduce ? 200 : 1100);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="plotter fixed inset-0 z-[70] grid place-items-center bg-[var(--sky)]">
      <div className="text-center">
        <div className="mb-3 flex items-end justify-center">
          <Plane className="h-12 w-16" />
          <span className="mb-2 ml-2 h-0 w-36 border-t-[3px] border-dashed border-[var(--coral)]" />
        </div>
        <p className="meta">Plotting the next route...</p>
      </div>
    </div>
  );
}
