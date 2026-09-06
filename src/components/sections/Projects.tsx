"use client";

import { projects } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { externalRel } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function ProjectLinks({
  name,
  github,
  demo,
}: {
  name: string;
  github: string;
  demo: string | null;
}) {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <a
        href={github}
        {...externalRel()}
        aria-label={`${name} on GitHub (opens in a new tab)`}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-2.5 text-sm font-medium text-[var(--bg)]"
      >
        GitHub
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </a>
      {demo ? (
        <a
          href={demo}
          {...externalRel()}
          aria-label={`${name} live demo (opens in a new tab)`}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 text-sm font-medium"
        >
          Live demo
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      ) : (
        <span className="inline-flex items-center rounded-full border border-dashed border-[var(--line-strong)] px-5 py-2.5 text-sm text-[var(--fg-muted)]">
          Live demo coming soon
        </span>
      )}
    </div>
  );
}

function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--fg-muted)]"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectShot({
  src,
  alt,
  framed,
}: {
  src: string;
  alt: string;
  framed?: boolean;
}) {
  return (
    <div
      className={
        framed
          ? "overflow-hidden rounded-[32px] border border-[var(--line)] bg-[#f4f5f7] p-6 sm:p-10 dark:bg-[#111318]"
          : "overflow-hidden rounded-[32px] border border-[var(--line)]"
      }
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        className={
          framed
            ? "mx-auto h-auto max-h-[540px] w-auto object-contain"
            : "h-auto w-full object-cover object-top"
        }
        sizes="(min-width: 1024px) 56rem, 100vw"
      />
    </div>
  );
}

export function Projects() {
  const [nomae, civitas, anact] = projects;

  return (
    <section id="projects" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Featured projects"
          title="Built like products, not homework."
          description="Each project starts with a real constraint: rumor, access, or the limits of a single camera."
        />

        <article className="mt-16">
          <Reveal>
            <ProjectShot src={nomae.image} alt={nomae.imageAlt} framed />
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-blue)]">
                {nomae.kicker}
              </p>
              <h3 className="display mt-3 text-5xl sm:text-6xl">{nomae.name}</h3>
              <p className="mt-5 text-2xl leading-snug tracking-tight">{nomae.headline}</p>
            </Reveal>
            <Reveal>
              <p className="text-base leading-relaxed text-[var(--fg-muted)]">
                {nomae.description}
              </p>
              <p className="mt-3 text-sm text-[var(--fg-muted)]">{nomae.note}</p>
              <Tags tags={nomae.tags} />
              <ProjectLinks
                name={nomae.name}
                github={nomae.github}
                demo={nomae.demo}
              />
            </Reveal>
          </div>
        </article>

        <article className="mt-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-blue)]">
              {civitas.kicker}
            </p>
            <h3 className="display mt-3 text-5xl sm:text-7xl">{civitas.name}</h3>
            <p className="mt-5 max-w-3xl text-xl leading-snug sm:text-2xl">
              {civitas.headline}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="text-base leading-relaxed text-[var(--fg-muted)]">
                {civitas.description}
              </p>
              <p className="mt-3 text-sm text-[var(--fg-muted)]">{civitas.note}</p>
              <Tags tags={civitas.tags} />
              <ProjectLinks
                name={civitas.name}
                github={civitas.github}
                demo={civitas.demo}
              />
            </Reveal>
            <Reveal>
              <ProjectShot src={civitas.image} alt={civitas.imageAlt} />
            </Reveal>
          </div>
        </article>

        <article className="mt-28">
          <Reveal>
            <ProjectShot src={anact.image} alt={anact.imageAlt} />
          </Reveal>
          <Reveal>
            <div className="mt-8 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-blue)]">
                {anact.kicker}
              </p>
              <h3 className="display mt-3 text-5xl sm:text-6xl">{anact.name}</h3>
              <p className="mt-4 text-xl tracking-tight sm:text-2xl">{anact.headline}</p>
              <p className="mt-5 text-base leading-relaxed text-[var(--fg-muted)]">
                {anact.description}
              </p>
              <p className="mt-3 text-sm text-[var(--fg-muted)]">{anact.note}</p>
              <Tags tags={anact.tags} />
              <ProjectLinks
                name={anact.name}
                github={anact.github}
                demo={anact.demo}
              />
            </div>
          </Reveal>
        </article>
      </div>
    </section>
  );
}
