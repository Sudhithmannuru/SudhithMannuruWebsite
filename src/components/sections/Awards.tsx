"use client";

import { awards } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";

export function Awards() {
  return (
    <section id="awards" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Awards"
          title="Recognition that followed the work."
        />
        <ol className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {awards.map((award, index) => (
            <Reveal key={award.id}>
              <li className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline">
                <span className="text-sm text-[var(--fg-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl tracking-tight sm:text-3xl">{award.title}</h3>
                <p className="text-sm text-[var(--fg-muted)]">{award.context}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
