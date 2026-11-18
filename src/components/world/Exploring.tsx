"use client";

import { interests, projectById } from "@/data/adventure";
import { Compass, Plane } from "@/components/world/art";
import { useState } from "react";

export function Exploring() {
  const [active, setActive] = useState(0);
  const interest = interests[active];
  const related = projectById(interest.projectId);

  return (
    <section id="exploring" className="lined py-20 sm:py-28" aria-labelledby="exploring-title">
      <div className="world">
        <p className="inline-flex rounded-full border-[2.5px] border-[#7a5bd6] px-3 py-1 text-xs font-bold tracking-[0.16em] text-[#7a5bd6] uppercase">
          Journal 03
        </p>
        <h2 id="exploring-title" className="display mt-4 text-[clamp(2.8rem,6.5vw,5.6rem)]">
          Currently exploring
        </h2>
        <div className="relative mt-8 max-w-3xl rounded-[32px] border-[2.5px] border-[var(--ink)] bg-[#fde4ea] px-5 py-4 shadow-[5px_6px_0_rgba(37,48,59,0.14)]">
          <div className="flex items-center gap-3">
            <Compass className="h-10 w-10 shrink-0" />
            <p className="text-lg font-semibold sm:text-xl">
              Things I&apos;m learning, researching, and curious about right now.
            </p>
          </div>
          <Plane className="absolute -top-3 right-4 h-8 w-12" />
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[32px] border-[2.5px] border-[var(--ink)] bg-[var(--paper)] shadow-[6px_7px_0_rgba(37,48,59,0.16)] lg:grid-cols-[1fr_1fr]">
          <div className="border-b-[2.5px] border-[var(--ink)] p-3 sm:p-5 lg:border-r-[2.5px] lg:border-b-0" role="tablist" aria-label="Current interests">
            {interests.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.id}
                  id={`interest-tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="interest-panel"
                  onClick={() => setActive(index)}
                  className="flex w-full items-center gap-4 border-b border-dashed border-[color-mix(in_srgb,var(--ink)_28%,transparent)] px-2 py-4 text-left last:border-b-0"
                >
                  <span className="meta w-8 text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
                  <span className={`flex-1 text-lg font-semibold ${selected ? "underline decoration-[3px] decoration-[var(--sun)] underline-offset-4" : "text-[var(--muted)]"}`}>
                    {item.title}
                  </span>
                  <span aria-hidden className="text-xl">→</span>
                </button>
              );
            })}
          </div>

          <div
            id="interest-panel"
            role="tabpanel"
            aria-labelledby={`interest-tab-${interest.id}`}
            className="m-4 rounded-[24px] border-[2.5px] border-[var(--ink)] p-6 shadow-[4px_5px_0_rgba(37,48,59,0.14)] sm:m-6 sm:p-8"
            style={{ background: interest.swatch }}
          >
            <p className="meta text-[var(--jungle)]">Pinned field note</p>
            <h3 className="font-display mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{interest.title}</h3>
            <p className="mt-4 max-w-md text-xl leading-snug font-medium">{interest.body}</p>
            <div className="my-6 border-t-2 border-dashed border-[color-mix(in_srgb,var(--ink)_35%,transparent)]" />
            <p className="meta">Related destination</p>
            <a className="mt-2 inline-flex items-center gap-2 text-xl font-bold" href={`#project-${related.id}`}>
              {related.name}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
