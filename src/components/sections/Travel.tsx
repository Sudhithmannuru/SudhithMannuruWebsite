"use client";

import { travel } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Travel() {
  const [active, setActive] = useState<(typeof travel)[number]["id"]>(
    travel[0].id,
  );
  const featured = travel.find((item) => item.id === active) ?? travel[0];

  return (
    <section id="travel" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Travel"
          title="Places that recalibrated the scale of a question."
          description="Puerto Rico, Rome, Banff, Vellore, Bengaluru, Miami, and New York — a field notebook more than a checklist."
        />

        <Reveal className="mt-12 overflow-hidden rounded-[28px] shadow-[var(--shadow)]">
          <div className="relative aspect-[4/5] min-h-[420px] w-full sm:aspect-[16/10]">
            {travel.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1120px"
                className={cn(
                  "object-cover transition-opacity duration-700",
                  item.id === featured.id ? "opacity-100" : "opacity-0",
                )}
                priority={item.id === travel[0].id}
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                {featured.region}
              </p>
              <h3 className="display mt-2 text-5xl text-white sm:text-7xl">
                {featured.place}
              </h3>
              <p className="mt-4 max-w-xl text-xl leading-snug tracking-tight text-white/90 sm:text-2xl">
                {featured.caption}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="no-scrollbar mt-5 flex gap-3 overflow-x-auto pb-2">
          {travel.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              aria-pressed={item.id === active}
              className={cn(
                "relative h-24 w-28 shrink-0 overflow-hidden rounded-2xl border transition-all sm:h-28 sm:w-36",
                item.id === active
                  ? "border-white/80 ring-2 ring-[var(--color-blue)]"
                  : "border-[var(--line)] opacity-80 hover:opacity-100",
              )}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="144px"
                className="object-cover"
              />
              <span className="sr-only">{item.place}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
