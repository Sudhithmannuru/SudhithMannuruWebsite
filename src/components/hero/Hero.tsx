"use client";

import { siteConfig } from "@/data/site";
import { motion, useReducedMotion } from "framer-motion";
import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-[760px] px-7 pt-16 text-center sm:pt-20">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="display text-[clamp(2.1rem,5vw,3rem)]"
        >
          {siteConfig.heroGreeting}
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mt-4 max-w-[640px] text-left text-[0.98rem] leading-[1.75] text-[var(--fg-muted)]"
        >
          {siteConfig.heroQuote}
        </motion.p>
        <div className="mx-auto mt-8 h-px w-10 bg-[var(--accent)]" />
      </div>
      <HeroPortrait />
    </section>
  );
}
