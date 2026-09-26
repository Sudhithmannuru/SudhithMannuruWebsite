"use client";

export function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="aurora absolute inset-0" />
      <div className="grid-fade absolute inset-0 opacity-[0.22] dark:opacity-[0.14]" />
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply dark:opacity-[0.12] dark:mix-blend-soft-light" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[var(--bg)] to-transparent" />
    </div>
  );
}
