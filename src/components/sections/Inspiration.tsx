"use client";

import { family } from "@/data/content";
import { siteConfig } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import Image from "next/image";

export function Inspiration() {
  if (!siteConfig.showFamilySection) return null;

  return (
    <section id="inspiration" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Personal inspiration" title={family.headline} />
        <Reveal>
          <blockquote className="mt-10 max-w-4xl text-2xl leading-snug tracking-tight sm:text-3xl md:text-4xl">
            “{family.quote}”
          </blockquote>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {family.people.map((person, index) => (
            <Reveal key={person.name} delay={index * 0.06}>
              <article className="h-full overflow-hidden rounded-[28px] border border-[var(--line)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 30vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                    {person.relation}
                  </p>
                  <h3 className="mt-3 text-2xl tracking-tight">{person.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {person.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {family.gallery.map((shot, index) => (
            <Reveal key={shot.image} delay={index * 0.06}>
              <div className="relative overflow-hidden rounded-[28px]">
                <Image
                  src={shot.image}
                  alt={shot.alt}
                  width={1400}
                  height={1750}
                  className="aspect-[5/4] w-full object-cover"
                  sizes="(min-width: 768px) 48vw, 100vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
