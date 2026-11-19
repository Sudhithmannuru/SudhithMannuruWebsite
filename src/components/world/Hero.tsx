import { Cloud, Plane, Sun } from "@/components/world/art";
import Link from "next/link";

const signs = [
  { href: "/#projects", label: "Explore projects", color: "var(--coral)", tilt: "-rotate-2 ml-6" },
  { href: "/#about", label: "About me", color: "var(--sun)", tilt: "rotate-1" },
  { href: "/#exploring", label: "Currently exploring", color: "var(--jungle)", tilt: "-rotate-1 ml-3" },
];

export function Hero() {
  return (
    <section className="relative z-0 min-h-[100svh] overflow-hidden bg-[var(--sky)] pt-28" aria-labelledby="arrival-title">
      <Cloud className="pointer-events-none absolute top-24 left-[6%] z-0 hidden h-14 w-28 lg:block" />
      <Cloud className="pointer-events-none absolute top-32 right-[6%] z-0 h-12 w-24" />
      <Sun className="pointer-events-none absolute top-24 right-[18%] z-0 h-16 w-16 sm:h-20 sm:w-20" />
      <Plane className="pointer-events-none absolute top-[34%] right-[28%] z-0 hidden h-12 w-16 rotate-[-8deg] xl:block" />

      <div className="world relative z-10 grid items-end gap-8 pb-10 lg:grid-cols-[1.15fr_.85fr] lg:pb-24">
        <div>
          <p className="mb-5 inline-flex rounded-full border-[2.5px] border-[var(--ocean)] px-4 py-1 text-xs font-bold tracking-[0.18em] text-[var(--ocean)] uppercase">
            Portfolio arrival
          </p>
          <h1 id="arrival-title" className="hero-title text-[clamp(3.4rem,8.4vw,7.4rem)] text-[var(--ink)]">
            Welcome to
            <span className="mt-1 block text-[var(--deep)]">my world.</span>
          </h1>
          <div className="relative z-10 mt-6 max-w-xl rounded-[22px] border-[2.5px] border-[var(--ink)] bg-[var(--paper)] px-5 py-4 shadow-[5px_6px_0_rgba(44,33,68,0.16)]">
            <span className="absolute top-4 bottom-4 left-0 w-1.5 rounded-full bg-[var(--ocean)]" />
            <p className="pl-3 text-lg leading-snug font-medium sm:text-xl">
              Projects, experiments, research, and the problems I want to make easier for someone else.
            </p>
          </div>
        </div>

        <nav aria-label="Homepage destinations" className="relative z-10 flex flex-col gap-3 pb-6 lg:pt-24">
          {signs.map((sign) => (
            <Link
              key={sign.href}
              href={sign.href}
              className={`flex items-center justify-between rounded-[18px] border-[2.5px] border-[var(--ink)] px-5 py-4 font-display text-lg font-bold tracking-[0.04em] uppercase shadow-[4px_5px_0_rgba(44,33,68,0.2)] ${sign.tilt}`}
              style={{ background: sign.color }}
            >
              {sign.label}
              <span aria-hidden>→</span>
            </Link>
          ))}
        </nav>
      </div>

      <svg
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-[42%] w-full"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 220l180-90 120 50 160-130 140 80 150-70 170 90 140-60 180 70 200-110v270H0z" fill="#b089d4" stroke="#2c2144" strokeWidth="6" />
        <path d="M210 180l70-70 70 70-20 90h-100z" fill="#fffdf9" stroke="#2c2144" strokeWidth="5" />
        <path d="M520 150l90-90 80 90-18 100H540z" fill="#fffdf9" stroke="#2c2144" strokeWidth="5" />
        <path d="M900 190l60-70 70 70-16 80H920z" fill="#fffdf9" stroke="#2c2144" strokeWidth="5" />
        <path d="M0 300c180 70 280-20 460 30s250-10 390 40 280-30 590-10v70H0z" fill="#3dbe86" stroke="#2c2144" strokeWidth="6" />
        <path d="M0 360c220 40 320-30 520 10s300 20 920-20v80H0z" fill="#1c8f68" />
        <path d="M80 250c40 10 70-8 110 6" fill="none" stroke="#ff5d73" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </section>
  );
}
