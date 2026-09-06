"use client";

import { about } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="section-pad py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <Reveal>
          <div className="media-frame">
            <Image
              src="/photos/sudhith-portrait.jpg"
              alt="Sudhith Mannuru standing on a bridge with a river and city skyline behind him."
              width={900}
              height={1120}
              className="aspect-[4/5] w-full object-cover"
              sizes="(min-width: 1024px) 38vw, 100vw"
              priority={false}
            />
          </div>
        </Reveal>
        <div className="space-y-8">
          <Reveal>
            <p className="kicker mb-5">
              {about.kicker}
            </p>
            <h2 className="display text-[2.15rem] sm:text-5xl md:text-[3.4rem]">{about.headline}</h2>
          </Reveal>
          <Reveal>
            <blockquote className="border-l border-[var(--line-strong)] pl-5 text-2xl leading-snug tracking-[-0.03em] text-[var(--fg)] sm:text-[1.85rem]">
              “{about.pullQuote}”
            </blockquote>
          </Reveal>
          {about.paragraphs.map((paragraph) => (
            <Reveal key={paragraph}>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
