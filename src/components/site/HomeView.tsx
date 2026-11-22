import { LondonSky } from "@/components/site/LondonSky";
import { MessageForm } from "@/components/site/MessageForm";
import { Airliner, Plane } from "@/components/site/Plane";
import { SkillRoll } from "@/components/site/SkillRoll";
import { projects } from "@/data/content";
import { siteConfig, socialLinks } from "@/data/site";
import Image from "next/image";

const projectOrder = [
  "civitas",
  "anactortho",
  "nomaetrust",
  "medmatch",
  "coachme2",
  "georgia-science-fair",
  "thinkneuro",
  "dreamhacks",
  "hearlearn",
  "vastegunehuiyaan",
] as const;

const containIds = new Set(["nomaetrust", "medmatch", "hearlearn", "dreamhacks", "georgia-science-fair", "thinkneuro"]);

const skills = [
  {
    title: "Machine learning",
    line: "Claims, trials, and posters. NoMaeTrust and MedMatch are the ones I talk about first.",
    tone: "bg-[#1d3d73]",
  },
  {
    title: "Computer vision",
    line: "AnactOrtho reads a basketball game from one camera: court, ball, score.",
    tone: "bg-[#7a3b2e]",
  },
  {
    title: "Web apps",
    line: "Next.js and React. Civitas and the CoachMe2 site are the ones people actually open.",
    tone: "bg-[#1f5c45]",
  },
] as const;

function byId(id: string) {
  const project = projects.find((item) => item.id === id);
  if (!project) throw new Error(`Missing project ${id}`);
  return project;
}

function FlightLane() {
  return (
    <div className="flight-lane relative h-28 overflow-hidden" aria-hidden>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 112" preserveAspectRatio="none">
        <path
          d="M0 78 C 180 36, 340 96, 600 58 S 960 28, 1200 64"
          fill="none"
          stroke="rgba(240,195,106,0.45)"
          strokeWidth="2"
          strokeDasharray="8 10"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="flight-plane contrail absolute top-6 block h-9 w-32 text-white">
        <Airliner className="h-full w-full" />
      </span>
      <span className="flight-plane flight-plane-far contrail absolute top-1 block h-6 w-20 text-white/45">
        <Airliner className="h-full w-full" />
      </span>
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-3.5">
        {Array.from({ length: 32 }, (_, index) => (
          <span
            key={index}
            className={index % 2 === 0 ? "runway-light" : "runway-light runway-light-amber"}
            style={{ animationDelay: `${(index % 6) * 0.18}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function openLabel(project: (typeof projects)[number]) {
  return "linkLabel" in project ? project.linkLabel : "Live site";
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M4.7 3.3A2.2 2.2 0 1 0 4.7 7.7 2.2 2.2 0 0 0 4.7 3.3ZM3 9h3.4v12H3V9Zm6 0h3.2v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.3V21H16.4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9V9Z" />
    </svg>
  );
}

function IconDiscord() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M19.3 5.2A17 17 0 0 0 15 4l-.4.8a15 15 0 0 1 3.6 1.4 16 16 0 0 0-12.4 0A12 12 0 0 1 9.4 4.8L9 4a17 17 0 0 0-4.3 1.2C2.1 8.4 1.4 11.5 1.6 14.6A17.4 17.4 0 0 0 7 17l.6-.9a11 11 0 0 1-1.6-.8l.4-.3c3.1 1.4 6.5 1.4 9.6 0l.4.3c-.5.3-1 .6-1.6.8l.6.9a17.4 17.4 0 0 0 5.4-2.4c.4-3.6-.6-6.6-2.5-9.4ZM9.2 13.3c-.8 0-1.5-.8-1.5-1.7s.6-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7Zm5.6 0c-.8 0-1.5-.8-1.5-1.7s.6-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7Z" />
    </svg>
  );
}

export function HomeView() {
  const work = projectOrder.map((id) => byId(id));
  const year = new Date().getFullYear();

  return (
    <>
      <main id="main">
        <section className="relative overflow-hidden" aria-labelledby="intro-title">
          <div className="relative">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-35" />
          <div className="hero-wash pointer-events-none absolute inset-0" />
          <LondonSky />
          <div className="frame relative z-10 grid items-center gap-12 py-16 md:grid-cols-[1.15fr_.85fr] md:py-24">
            <div>
              <p className="text-sm font-semibold text-[var(--accent)]">Machine learning and software</p>
              <h1 id="intro-title" className="mt-3 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Sudhith Mannuru
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                Senior at South Forsyth, class of 2027. I build things people can open: a claim checker, a benefits guide, and a camera that reads a basketball game.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#1a1408]">
                  See the work
                </a>
                <a href={`mailto:${siteConfig.email}`} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#121826]">
                  Email me
                </a>
              </div>
              <ul className="mt-8 flex items-center gap-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    aria-label="Email"
                    className="grid h-11 w-11 place-items-center rounded-xl bg-[#24365c] text-[var(--accent)]"
                  >
                    <IconMail />
                  </a>
                </li>
                {socialLinks.map((link) => {
                  const icon =
                    link.id === "instagram" ? <IconInstagram /> : link.id === "linkedin" ? <IconLinkedIn /> : <IconDiscord />;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        aria-label={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-11 w-11 place-items-center rounded-xl bg-[#24365c] text-[var(--accent)]"
                      >
                        {icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <figure className="justify-self-center">
              <div className="relative h-72 w-72 sm:h-80 sm:w-80">
                <div className="absolute -top-3 -right-3 h-full w-full rounded-full bg-[#d64532]/80" />
                <span className="absolute -bottom-1 -left-1 z-10 grid h-12 w-12 place-items-center rounded-full bg-[var(--accent)] text-[#1a1408] shadow-lg">
                  <Plane className="h-7 w-7" />
                </span>
                <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-[#0b1220]">
                  <Image
                    src="/photos/sudhith-portrait.jpg"
                    alt="Sudhith Mannuru"
                    fill
                    priority
                    className="object-cover"
                    style={{ objectPosition: "center 72%" }}
                    sizes="20rem"
                  />
                </div>
              </div>
              <figcaption className="mt-4 text-center text-sm text-[var(--muted)]">London</figcaption>
            </figure>
          </div>
          </div>
          <FlightLane />
        </section>

        <SkillRoll />

        <section id="about" className="border-t border-white/10" aria-labelledby="about-title">
          <div className="frame py-16">
            <h2 id="about-title" className="text-3xl font-semibold text-white">
              What I work on
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {skills.map((skill) => (
                <article key={skill.title} className={`rounded-2xl p-6 ${skill.tone}`}>
                  <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/80">{skill.line}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-2xl leading-relaxed text-[var(--muted)]">
              I started the Machine Learning Club at South Forsyth. DreamHacks, a free hackathon I co-founded, brought 127 students and got a write-up in Forsyth County News. The posters below are from ThinkNeuro and the 2024 Georgia Science Fair, with Mukund G.
            </p>
          </div>
        </section>

        <section id="work" className="border-t border-white/10" aria-labelledby="work-title">
          <div className="frame py-16">
            <h2 id="work-title" className="text-3xl font-semibold text-white">
              Projects
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {work.map((project) => {
                const contain = containIds.has(project.id);
                return (
                  <article key={project.id} id={`project-${project.id}`} className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--paper)]">
                    <div className={`relative aspect-[16/10] ${contain ? "bg-white" : "bg-black"}`}>
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className={contain ? "object-contain p-3" : "object-cover object-top"}
                        sizes="(min-width: 768px) 36rem, 100vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                      <p className="mt-2 leading-relaxed text-[var(--muted)]">{project.description}</p>
                      <p className="mt-3 text-sm text-white/50">{project.tags.join(" · ")}</p>
                      <div className="mt-4 flex gap-4 text-sm font-medium">
                        <a
                          href={project.demo}
                          className="text-[var(--accent)]"
                          target={project.demo.startsWith("/") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                        >
                          {openLabel(project)}
                        </a>
                        {"github" in project && project.github ? (
                          <a href={project.github} className="text-white/70" target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10">
          <div className="frame grid gap-10 py-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white">Write me</h2>
              <a href={`mailto:${siteConfig.email}`} className="mt-4 block text-xl text-[var(--accent)]">
                {siteConfig.email}
              </a>
              <p className="mt-3 max-w-sm text-[var(--muted)]">
                You can also reach out at{" "}
                <a href={`mailto:${siteConfig.alsoEmail}`} className="text-white">
                  {siteConfig.alsoEmail}
                </a>. The form sends to Gmail.
              </p>
            </div>
            <MessageForm />
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="frame flex flex-wrap justify-between gap-3 py-6 text-sm text-[var(--muted)]">
          <p>© {year} Sudhith Mannuru</p>
          <p className="flex items-center gap-2">
            <Plane className="h-5 w-5 text-[var(--accent)]" />
            South Forsyth · Class of 2027
          </p>
        </div>
      </footer>
    </>
  );
}
