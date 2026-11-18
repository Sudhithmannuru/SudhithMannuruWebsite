"use client";

import { about } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="display text-[2.15rem] sm:text-5xl md:text-[3.4rem]">
            {about.kicker}
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
            {about.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
