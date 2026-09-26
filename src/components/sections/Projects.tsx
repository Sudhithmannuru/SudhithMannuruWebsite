"use client";

import { projects } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { cn, externalRel } from "@/lib/utils";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="section-pad py-20 md:py-28">
      <div className="mx-auto max-w-[760px] text-center">
        <Reveal>
          <h2 className="display text-[clamp(2.1rem,5vw,3rem)]">Projects</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[0.98rem] leading-[1.75] text-[var(--fg-muted)]">
            Things I built for rumor, trials, access, and a single camera. Click a
            card to open it.
          </p>
          <dl className="mx-auto mt-8 flex items-center justify-center gap-8 sm:gap-12">
            <div>
              <dt className="text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--fg-muted)] uppercase">
                Weighted GPA
              </dt>
              <dd className="display mt-1 text-4xl text-[var(--fg)]">4.6415</dd>
            </div>
            <div className="h-10 w-px bg-[var(--accent)]" aria-hidden />
            <div>
              <dt className="text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--fg-muted)] uppercase">
                SAT
              </dt>
              <dd className="display mt-1 text-4xl text-[var(--fg)]">1520</dd>
            </div>
          </dl>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1180px] grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-8">
        {projects.map((project) => {
          const href =
            "github" in project ? (project.demo ?? project.github) : project.demo;
          const contain = "imageFit" in project && project.imageFit === "contain";
          return (
            <Reveal key={project.id}>
              <a
                href={href}
                {...externalRel()}
                aria-label={`${project.name} (opens in a new tab)`}
                className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[var(--accent)] bg-linear-to-br from-[#5c3d22] to-[#2a1c12] text-inherit no-underline shadow-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_18px_4px_rgba(138,90,43,0.35),0_0_46px_10px_rgba(196,137,74,0.2)]"
              >
                <div className="px-2.5 pt-2.5">
                  <div
                    className={cn(
                      "relative aspect-16/9 overflow-hidden rounded-lg",
                      contain ? "bg-[#f4f1ea] p-2.5" : "bg-[#3d2a1c]",
                    )}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 768px) 36vw, 100vw"
                        className={
                          contain ? "object-contain" : "object-cover object-top"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="px-[18px] pt-3 pb-6 text-center">
                  <h3 className="font-serif text-[1.05rem] font-semibold text-[#fff8ef]">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 text-[0.83rem] leading-[1.6] text-[#f4eadc]">
                    {project.description}
                  </p>
                  <span className="mt-3.5 inline-block rounded-full bg-white/18 px-3.5 py-1.5 text-[0.68rem] font-semibold tracking-[0.16em] text-white uppercase">
                    {"linkLabel" in project
                      ? project.linkLabel
                      : project.demo
                        ? "Open project"
                        : "View on GitHub"}
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
