"use client";

import { coursework } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";

export function Coursework() {
  return (
    <section id="coursework" className="py-24 md:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          kicker="Coursework"
          title="A curriculum chosen for range, not a transcript dump."
          description="Mathematics, computing, science, and the humanities — kept in conversation with each other."
        />
      </div>
      <Reveal className="mt-12">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:px-10 xl:px-16">
          {coursework.map((group) => (
            <article
              key={group.id}
              className="glass w-[min(86vw,22rem)] shrink-0 snap-start rounded-[28px] p-6 sm:p-7"
            >
              <h3 className="text-2xl tracking-tight">{group.title}</h3>
              <ul className="mt-6 space-y-3">
                {group.courses.map((course) => (
                  <li
                    key={course}
                    className="border-t border-[var(--line)] pt-3 text-sm leading-relaxed text-[var(--fg-muted)] first:border-t-0 first:pt-0"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
