"use client";

import { heroPortraits } from "@/data/content";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const SATELLITES = 8;

export function HeroPortrait() {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const total = heroPortraits.length;
  const featured = heroPortraits[current];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setCurrent((value) => (value + 1) % total);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduce, total]);

  const satellites = useMemo(
    () =>
      Array.from({ length: SATELLITES }, (_, slot) => {
        const index = (current + slot + 1) % total;
        return { ...heroPortraits[index], index };
      }),
    [current, total],
  );

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.12 }}
      className="hero-orbit relative ml-auto h-[22rem] w-[22rem] shrink-0 sm:h-[26rem] sm:w-[26rem] lg:h-[30rem] lg:w-[30rem]"
      aria-label="Rotating portraits of Sudhith Mannuru"
    >
      <div
        className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-blue)]/14 blur-3xl sm:h-56 sm:w-56"
        aria-hidden
      />

      <div
        className={`absolute inset-0 ${reduce ? "" : "orbit-spin"}`}
      >
        {satellites.map((portrait, slot) => {
          const angle = (360 / SATELLITES) * slot;
          return (
            <div
              key={`${portrait.src}-${slot}`}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(var(--orbit-r)) rotate(${-angle}deg)`,
              }}
            >
              <div className={reduce ? "" : "orbit-spin-reverse"}>
                <button
                  type="button"
                  onClick={() => setCurrent(portrait.index)}
                  aria-label={portrait.alt}
                  className="relative h-16 w-16 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white bg-[var(--card)] p-0 shadow-[0_10px_24px_rgba(0,0,0,0.14)] sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20 dark:border-white/15"
                >
                  <Image
                    src={portrait.src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                    style={{ objectPosition: portrait.position }}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[3px] border-white shadow-[0_16px_40px_rgba(0,0,0,0.16)] sm:h-[13rem] sm:w-[13rem] lg:h-[14.5rem] lg:w-[14.5rem] dark:border-white/15">
        <AnimatePresence mode="wait">
          <motion.div
            key={featured.src}
            initial={reduce ? false : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="280px"
              priority
              className="object-cover"
              style={{ objectPosition: featured.position }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
