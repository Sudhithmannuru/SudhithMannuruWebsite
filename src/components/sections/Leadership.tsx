"use client";

import { leadership } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Leadership() {
  return (
    <section id="leadership" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Leadership and impact"
          title="Rooms I helped open, then filled with other people."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {leadership.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.04}
              className={cn(
                "glass rounded-[28px] p-6 sm:p-7",
                item.span === "lg" && "md:col-span-6",
                item.span === "md" && "md:col-span-3",
                item.span === "sm" && "md:col-span-3 lg:col-span-3",
              )}
            >
              <p className="kicker">
                {item.role}
              </p>
              <h3 className="mt-3 text-2xl tracking-tight sm:text-3xl">{item.org}</h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--fg-muted)]">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
