import { featuredIds, projectById, sceneFor, type SceneTone } from "@/data/adventure";
import { Compass, Plane, Sun } from "@/components/world/art";
import Image from "next/image";
import Link from "next/link";

const skies: Record<SceneTone, string> = {
  sky: "#a9ddf5",
  lagoon: "#4fc1c9",
  court: "#ffd75e",
  sun: "#f2a5c4",
};

export function Featured() {
  const featured = featuredIds.map((id) => ({
    project: projectById(id),
    scene: sceneFor(id),
  }));

  return (
    <section id="projects" className="bg-[var(--cream)] py-20 sm:py-28" aria-labelledby="featured-title">
      <div className="world">
        <p className="meta text-[var(--ocean)]">Route 01</p>
        <h2 id="featured-title" className="display mt-3 text-[clamp(3rem,7vw,6.2rem)]">
          Featured adventures
        </h2>
        <div className="relative mt-8 max-w-3xl">
          <div className="flex items-center gap-4 rounded-[40px] border-[2.5px] border-[var(--ink)] bg-[var(--paper)] px-6 py-5 shadow-[6px_7px_0_rgba(37,48,59,0.16)]">
            <Compass className="h-12 w-12 shrink-0" />
            <p className="text-xl font-semibold sm:text-2xl">A few things I&apos;ve been exploring.</p>
          </div>
          <Plane className="absolute -top-4 right-6 hidden h-10 w-14 sm:block" />
        </div>

        <div className="mt-12 space-y-12">
          {featured.map(({ project, scene }, index) => (
            <article key={project.id} className="ink-card overflow-hidden bg-[var(--paper)]">
              <div className="relative h-72 overflow-hidden border-b-[2.5px] border-[var(--ink)] sm:h-80" style={{ background: skies[scene.tone] }}>
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="h-10 w-1.5 rounded-sm bg-[var(--cloud)] shadow-[2px_0_0_var(--ink)]" />
                  <span className="rounded-md border-[2.5px] border-[var(--ink)] bg-[var(--sun)] px-3 py-1 font-mono text-sm font-bold">
                    {scene.code}
                  </span>
                </div>
                <Sun className="absolute top-6 right-8 h-16 w-16" />
                <svg className="absolute right-0 bottom-0 left-0 h-40 w-full" viewBox="0 0 800 180" preserveAspectRatio="none" aria-hidden>
                  <path d="M0 120c120-80 200-20 320-50s220 20 480-40v150H0z" fill="#f49a54" stroke="#25303b" strokeWidth="6" />
                  <path d="M40 130c80-70 140-10 180 10 30-60 90-20 140 8v32H40z" fill="#287f9a" stroke="#25303b" strokeWidth="5" />
                </svg>
                <div className="absolute right-[6%] bottom-5 w-[min(46%,280px)] rotate-[-3deg] overflow-hidden rounded-[16px] border-[2.5px] border-[var(--ink)] bg-white shadow-[5px_6px_0_rgba(37,48,59,0.2)]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={640}
                    height={400}
                    className={`h-36 w-full sm:h-44 ${"imageFit" in project && project.imageFit === "contain" ? "object-contain bg-white" : "object-cover object-top"}`}
                  />
                </div>
              </div>

              <div className="px-5 py-7 sm:px-8 sm:py-9">
                <p className="meta flex items-center gap-2 text-[var(--ocean)]">
                  <span aria-hidden>📍</span>
                  Destination {String(index + 1).padStart(2, "0")} · {scene.year} · Project
                </p>
                <h3 className="font-display mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                  {project.name}
                </h3>
                <p className="mt-4 border-l-4 border-[var(--ocean)] pl-4 text-xl leading-snug font-semibold sm:text-2xl">
                  {project.headline}
                </p>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-6 rounded-[18px] border-2 border-dashed border-[var(--ink)] bg-[#f3d59b] px-4 py-4">
                  <p className="meta text-[var(--jungle)]">Field note</p>
                  <p className="mt-1 font-semibold">{project.note}</p>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a className="btn-coral" href={project.demo} target="_blank" rel="noopener noreferrer">
                    {"linkLabel" in project && project.linkLabel ? project.linkLabel : "Explore this project"}
                    <span aria-hidden>↗</span>
                  </a>
                  {"github" in project && project.github ? (
                    <a className="btn-ghost" href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/#atlas" className="btn-sun">
            Open the project atlas
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
