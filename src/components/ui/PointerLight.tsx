"use client";

import { useEffect } from "react";

export function PointerLight() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10 hidden mix-blend-soft-light md:block"
      style={{
        background:
          "radial-gradient(420px circle at var(--pointer-x, 50%) var(--pointer-y, 20%), rgba(47,125,255,0.12), transparent 55%)",
      }}
    />
  );
}
