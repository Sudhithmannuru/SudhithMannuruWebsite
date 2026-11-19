"use client";

import { projectById, regions, sceneFor } from "@/data/adventure";
import { Compass, Plane } from "@/components/world/art";
import Image from "next/image";
import { useMemo, useState } from "react";

export function Atlas() {
  const [active, setActive] = useState<(typeof regions)[number]["id"]>("models");
  const region = regions.find((item) => item.id === active) ?? regions[0];
  const list = useMemo(() => {
    const seen = new Set<string>();
    const ordered = [...region.ids, ...regions.flatMap((item) => item.ids)];
    return ordered.flatMap((id) => {
      if (seen.has(id)) return [];
      seen.add(id);
      return [{
        project: projectById(id),
        scene: sceneFor(id),
      }];
    });
  }, [region]);

  return (
    <section id="atlas" className="bg-[var(--sky)] py-20 sm:py-28" aria-labelledby="atlas-title">
      <div className="world">
        <p className="meta">Map 02</p>
        <h2 id="atlas-title" className="display mt-3 max-w-4xl text-[clamp(2.8rem,6.5vw,5.6rem)]">
          Where I&apos;ve been exploring
        </h2>
        <div className="relative mt-8 max-w-3xl rounded-[28px] border-[2.5px] border-[var(--ink)] bg-[var(--paper)] px-6 py-5 shadow-[5px_6px_0_rgba(44,33,68,0.16)]">
          <span className="absolute top-0 bottom-0 left-0 w-2 rounded-l-[26px] bg-[var(--jungle)]" />
          <span className="absolute -top-3 right-8 rounded-full border-[2.5px] border-[var(--ink)] bg-[var(--sun)] px-3 py-0.5 text-xs font-bold tracking-[0.12em] uppercase">
            Field note
          </span>
          <p className="pl-3 text-lg font-medium sm:text-xl">
            Project categories become territories. Pick a region to open that route.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[36px_48px_40px_52px] border-[2.5px] border-[var(--ink)] bg-[#d4c4ff] p-4 shadow-[6px_7px_0_rgba(44,33,68,0.18)] sm:p-8">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 640" preserveAspectRatio="none" aria-hidden>
            <path d="M80 180 C 220 120, 340 260, 520 200 S 820 120, 940 240" fill="none" stroke="#fffdf9" strokeWidth="4" strokeDasharray="2 10" opacity="0.8" />
            <path d="M120 430 C 280 360, 420 500, 640 420 S 900 480, 960 390" fill="none" stroke="#ff5d73" strokeWidth="5" strokeDasharray="12 10" />
          </svg>
          <Plane className="absolute bottom-16 left-1/2 hidden h-12 w-16 -translate-x-1/2 md:block" />
          <Compass className="absolute top-6 right-6 hidden h-16 w-16 sm:block" />
          <div className="relative grid gap-4 sm:grid-cols-2">
            {regions.map((item) => {
              const selected = item.id === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  aria-pressed={selected}
                  aria-label={`${item.name}. ${item.blurb}`}
                  className="relative min-h-48 rounded-[50%] border-[2.5px] border-[var(--ink)] px-8 py-8 text-center shadow-[4px_5px_0_rgba(44,33,68,0.16)]"
                  style={{ background: item.color, outline: selected ? "4px solid #2c2144" : undefined, outlineOffset: selected ? "6px" : undefined }}
                >
                  <span className="absolute -top-3 -right-1 grid h-10 w-10 place-items-center rounded-full border-[2.5px] border-[var(--ink)] bg-[var(--sun)] text-sm font-bold">
                    {item.count}
                  </span>
                  <p className="meta">Region {item.index}</p>
                  <p className="font-display mt-2 text-3xl font-bold tracking-[-0.04em] uppercase">{item.name}</p>
                  <p className="mx-auto mt-2 max-w-[16rem] text-sm font-semibold uppercase tracking-wide">{item.blurb}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div id="atlas-list" className="mt-8">
          <p className="meta">
            Open route · {region.name}
          </p>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {list.map(({ project, scene }) => (
              <li
                id={`project-${project.id}`}
                key={project.id}
                className="ink-card overflow-hidden bg-[var(--cloud)]"
              >
                <div className="grid sm:grid-cols-[148px_1fr]">
                  <div className="relative min-h-36 border-b-[2.5px] border-[var(--ink)] sm:border-r-[2.5px] sm:border-b-0">
                    <Image src={project.image} alt="" width={320} height={220} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="meta text-[var(--ocean)]">{scene.code}</p>
                    <h3 className="font-display mt-1 text-2xl font-bold tracking-[-0.03em]">{project.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.kicker}. {project.note}</p>
                    <a className="mt-3 inline-flex font-bold text-[var(--ocean)]" href={project.demo} target="_blank" rel="noopener noreferrer">
                      {"linkLabel" in project && project.linkLabel ? project.linkLabel : "Open"} ↗
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
