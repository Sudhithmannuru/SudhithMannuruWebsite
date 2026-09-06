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
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[var(--bg)] to-transparent" />
      <div
        className={`absolute right-[8%] top-[22%] h-56 w-56 rounded-full bg-[var(--color-blue)]/16 blur-3xl ${
          reduce ? "" : "animate-pulse"
        }`}
      />
    </div>
  );
}
