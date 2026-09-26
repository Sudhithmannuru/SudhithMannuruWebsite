"use client";

import { heroPortraits } from "@/data/content";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const REEL = [
  {
    src: "/photos/sudhith-portrait.jpg",
    alt: "Sudhith Mannuru standing on a bridge with a river and city skyline behind him.",
    caption: "On the bridge, looking forward.",
    position: "50% 22%",
  },
  {
    ...heroPortraits[5],
    caption: "Mountains that reset the scale of a problem.",
  },
  {
    ...heroPortraits[7],
    caption: "Trevi. A coin, a wish, a plan.",
  },
  {
    ...heroPortraits[9],
    caption: "Rome, between classes and bigger questions.",
  },
  {
    ...heroPortraits[0],
    caption: "City light. Same curiosity.",
  },
  {
    ...heroPortraits[10],
    caption: "Home, then back to the work.",
  },
] as const;

export function HeroPortrait() {
  const [current, setCurrent] = useState(0);
  const featured = REEL[current];
  const total = REEL.length;

  const go = (direction: -1 | 1) => {
    setCurrent((value) => (value + direction + total) % total);
  };

  return (
    <div className="mx-auto mt-8 max-w-[1180px] px-5 sm:px-7">
      <div className="mb-5 flex items-baseline justify-center gap-3.5">
        <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
          Out in the world
        </p>
        <p className="text-[0.72rem] tracking-[0.1em] text-[var(--fg-muted)]">
          {current + 1} / {total}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-[var(--accent)] bg-[var(--card)] font-serif text-2xl leading-none text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--bg)] sm:h-[52px] sm:w-[52px]"
        >
          ‹
        </button>

        <div className="min-w-0 flex-1">
          <div className="border border-[var(--line)] bg-[var(--card)] p-2.5">
            <div className="relative mx-auto h-[46vh] w-full max-w-[900px] sm:h-[62vh] sm:max-h-[620px] sm:min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featured.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={featured.src}
                    alt={featured.alt}
                    fill
                    sizes="(min-width: 1180px) 900px, 90vw"
                    priority={current === 0}
                    className="object-contain"
                    style={{ objectPosition: featured.position }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-[620px] text-center font-serif text-[1.05rem] leading-relaxed text-[var(--fg)] italic">
            {featured.caption}
          </p>
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-[var(--accent)] bg-[var(--card)] font-serif text-2xl leading-none text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--bg)] sm:h-[52px] sm:w-[52px]"
        >
          ›
        </button>
      </div>

      <div className="relative mx-auto mt-8 h-px max-w-[300px] bg-[var(--line)]">
        <div
          className="absolute inset-y-0 left-0 bg-[var(--accent)] transition-[width] duration-300"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
