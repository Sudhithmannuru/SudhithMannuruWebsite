"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SignalVisual() {
  const reduce = useReducedMotion();
  const cards = [
    { label: "Claim", status: "Unverified", tone: "muted" },
    { label: "Evidence", status: "Cross-checked", tone: "blue" },
    { label: "Verdict", status: "Low confidence", tone: "silver" },
  ];

  return (
    <div className="relative min-h-[340px] overflow-hidden bg-[#111318] p-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,255,0.28),transparent_42%)]" />
      <p className="relative text-xs uppercase tracking-[0.2em] text-white/50">
        Signal isolation
      </p>
      <div className="relative mt-8 space-y-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={reduce ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur"
          >
            <span className="text-sm">{card.label}</span>
            <span
              className={
                card.tone === "blue"
                  ? "text-sm text-[var(--color-blue-soft)]"
                  : "text-sm text-white/60"
              }
            >
              {card.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function PathVisual() {
  const reduce = useReducedMotion();
  const steps = ["Eligibility", "Documents", "Deadlines", "Next step"];

  return (
    <div className="relative min-h-[340px] overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--bg)] p-6">
      <div className="absolute inset-y-0 left-8 w-px bg-[var(--line-strong)]" />
      <p className="relative pl-8 text-xs uppercase tracking-[0.2em] text-[var(--fg-muted)]">
        Benefits path
      </p>
      <ol className="relative mt-8 space-y-5 pl-8">
        {steps.map((step, index) => (
          <motion.li
            key={step}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-10 top-1 grid h-4 w-4 place-items-center rounded-full bg-[var(--color-blue)]" />
            <p className="text-2xl tracking-tight">{step}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function CourtVisual({ tall = false }: { tall?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`relative overflow-hidden bg-[#0d1a12] p-6 text-[#d7f5df] ${
        tall ? "min-h-[420px] rounded-[36px] sm:min-h-[520px]" : "min-h-[340px] rounded-[32px]"
      }`}
    >
      <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden>
        <rect x="16" y="16" width="368" height="228" rx="8" stroke="#3f7a52" fill="none" />
        <line x1="200" y1="16" x2="200" y2="244" stroke="#3f7a52" />
        <circle cx="200" cy="130" r="36" stroke="#3f7a52" fill="none" />
        <path d="M16 70 H90 A60 60 0 0 1 90 190 H16" stroke="#3f7a52" fill="none" />
        <path d="M384 70 H310 A60 60 0 0 0 310 190 H384" stroke="#3f7a52" fill="none" />
        <motion.circle
          cx="168"
          cy="118"
          r="6"
          fill="#2f7dff"
          animate={reduce ? undefined : { cx: [168, 214, 246, 168], cy: [118, 96, 148, 118] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="248"
          cy="164"
          r="5"
          fill="#f4f4f0"
          animate={reduce ? undefined : { cx: [248, 190, 260, 248], cy: [164, 140, 108, 164] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <p className="absolute left-6 top-6 text-xs uppercase tracking-[0.2em] text-[#d7f5df]/60">
        Court calibration
      </p>
    </div>
  );
}
