"use client";

import { siteConfig, socialLinks } from "@/data/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % siteConfig.rotatingPhrases.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduce]);

  const github = socialLinks.find((link) => link.id === "github");
  const linkedin = socialLinks.find((link) => link.id === "linkedin");
  const phrase = siteConfig.rotatingPhrases[index];

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10"
    >
      <HeroBackdrop />
      <div className="section-pad relative z-20 mx-auto flex w-full max-w-6xl flex-1 flex-row items-center justify-between gap-5 sm:gap-10 lg:gap-16">
        <div className="min-w-0 flex-1 text-left">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-5 kicker"
          >
            {siteConfig.heroLabel}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14 }}
            className="display max-w-[13ch] text-[clamp(2.15rem,6.4vw,5.2rem)] font-semibold text-[var(--fg)]"
          >
            {siteConfig.name}
          </motion.h1>
          <div className="relative mt-4 h-8 overflow-hidden sm:h-9">
            <AnimatePresence mode="wait">
              <motion.p
                key={phrase}
                initial={
                  reduce ? false : { y: 12, opacity: 0, filter: "blur(8px)" }
                }
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={
                  reduce
                    ? { opacity: 0 }
                    : { y: -10, opacity: 0, filter: "blur(8px)" }
                }
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="hero-phrase text-base font-medium tracking-tight text-[var(--fg-muted)] sm:text-lg"
              >
                {phrase}
              </motion.p>
            </AnimatePresence>
          </div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26 }}
            className="mt-5 max-w-lg text-[1.05rem] font-normal leading-relaxed tracking-[-0.02em] text-[var(--fg-muted)] sm:text-xl"
          >
            {siteConfig.heroQuote}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.36 }}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap"
          >
            <a href="#projects" className="btn-primary">
              Explore My Work
            </a>
            {github ? (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile (opens in a new tab)"
                className="btn-secondary"
              >
                View GitHub
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
            {linkedin ? (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn (opens in a new tab)"
                className="btn-secondary"
              >
                Connect on LinkedIn
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </motion.div>
        </div>
        <HeroPortrait />
      </div>
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="section-pad relative z-20 mx-auto mt-10 w-full max-w-6xl"
      >
        <p className="inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-[var(--line)] bg-[var(--card)]/70 px-4 py-2 text-[11px] font-medium tracking-[0.12em] text-[var(--fg-muted)] uppercase backdrop-blur-md">
          {siteConfig.heroTicker}
        </p>
      </motion.div>
    </section>
  );
}
