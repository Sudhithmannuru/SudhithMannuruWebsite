"use client";

import { useReducedMotion } from "framer-motion";
import { NeuralField } from "./NeuralField";

export function HeroBackdrop() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="aurora absolute inset-0" />
      <div className="grid-fade absolute inset-0 opacity-[0.18] dark:opacity-[0.12]" />
      <NeuralField />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[var(--bg)] to-transparent" />
      <div
        className={`absolute right-[10%] top-[24%] h-44 w-44 rounded-full bg-[var(--color-blue)]/10 blur-3xl ${
          reduce ? "" : "animate-pulse"
        }`}
      />
    </div>
  );
}
