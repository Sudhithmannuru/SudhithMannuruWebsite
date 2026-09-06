"use client";

import { experiences } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Experience() {
  const [active, setActive] = useState<(typeof experiences)[number]["id"]>(
    experiences[0].id,
  );

  return (
    <section id="experience" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Experience and research"
          title="Work that taught me how ideas survive contact with people."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <ol className="relative space-y-2 border-l border-[var(--line)] pl-5">
              {experiences.map((item) => {
                const selected = item.id === active;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActive(item.id)}
                      className={cn(
                        "w-full rounded-2xl px-4 py-4 text-left transition-colors",
                        selected
                          ? "bg-[var(--bg-elevated)]"
                          : "hover:bg-[var(--bg-elevated)]/60",
                      )}
                    >
                      <p className="text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">
                        {item.period}
                      </p>
                      <p className="mt-1 text-lg tracking-tight">{item.org}</p>
                      <p className="text-sm text-[var(--fg-muted)]">{item.role}</p>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>
          <Reveal>
            {experiences.map((item) =>
              item.id === active ? (
                <div key={item.id} className="glass rounded-[32px] p-7 sm:p-9">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-blue)]">
                    {item.org}
                  </p>
                  <h3 className="mt-3 text-3xl tracking-tight">{item.role}</h3>
                  <ul className="mt-6 space-y-4">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null,
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
