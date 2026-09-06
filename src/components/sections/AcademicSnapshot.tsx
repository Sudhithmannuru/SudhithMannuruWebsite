"use client";

import { stats } from "@/data/content";
import { siteConfig } from "@/data/site";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function AcademicSnapshot() {
  return (
    <section id="academics" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Academic snapshot"
          title="Measured by rigor, not noise."
          description={siteConfig.schoolLine}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.id}
              delay={index * 0.05}
              className={cn(
                "glass rounded-[24px] p-6 sm:p-7",
                stat.featured ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2",
              )}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                {stat.label}
              </p>
              <p
                className={cn(
                  "display mt-4 text-[var(--fg)]",
                  stat.featured ? "text-6xl sm:text-7xl" : "text-5xl",
                )}
              >
                <AnimatedCounter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-3 text-sm text-[var(--fg-muted)]">{stat.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
