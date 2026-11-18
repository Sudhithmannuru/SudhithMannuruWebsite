import { siteConfig } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="bg-[var(--cream)] py-20 sm:py-28" aria-labelledby="experience-title">
      <div className="world">
        <p className="meta text-[var(--ocean)]">Trail markers</p>
        <h2 id="experience-title" className="display mt-3 text-[clamp(2.8rem,6vw,5.4rem)]">
          The route so far
        </h2>
        <p className="mt-4 max-w-2xl text-lg">{siteConfig.schoolLine}</p>
        <p className="mt-2 max-w-2xl text-lg text-[var(--muted)]">
          I founded my school&apos;s Machine Learning Club, then kept building: research posters, a hackathon, and tools meant to be used.
        </p>
      </div>
    </section>
  );
}
