import { about } from "@/data/content";
import { siteConfig } from "@/data/site";
import { Plane } from "@/components/world/art";
import Image from "next/image";
import Link from "next/link";

export function AboutBand() {
  return (
    <section className="bg-[#4e2fa3] py-16 sm:py-24" aria-labelledby="about-title">
      <div className="world">
        <p className="meta text-[#f3e8ff]">Travel journal / About</p>
        <h2 id="about-title" className="hero-title mt-3 text-[clamp(3rem,7vw,6rem)] text-[#fff7ef] [text-shadow:4px_4px_0_#2c2144]">
          Hey, I&apos;m
          <span className="block text-[#ffe14d]">Sudhith.</span>
        </h2>
        <div id="about" className="mt-8 grid scroll-mt-28 gap-4 rounded-[32px] border-[2.5px] border-[var(--ink)] bg-[var(--paper)] p-4 shadow-[6px_7px_0_rgba(44,33,68,0.18)] lg:grid-cols-[280px_1fr] lg:p-6">
          <div>
            <div className="overflow-hidden rounded-[22px] border-[2.5px] border-[var(--ink)]">
              <Image
                src="/photos/sudhith-portrait.jpg"
                alt="Portrait of Sudhith Mannuru"
                width={768}
                height={1024}
                className="h-80 w-full object-cover"
                style={{ objectPosition: "center 64%" }}
              />
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <dt className="meta text-[var(--muted)]">Focus</dt>
                <dd className="mt-1 font-bold">Machine learning, access, research</dd>
              </div>
              <div>
                <dt className="meta text-[var(--muted)]">Status</dt>
                <dd className="mt-1 font-bold">Class of 2027</dd>
              </div>
            </dl>
            <Plane className="mt-4 h-12 w-16" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="rounded-[24px] border-[2.5px] border-[var(--ink)] bg-[var(--cloud)] p-5 sm:p-7">
              <p className="text-xl leading-relaxed font-medium text-[var(--muted)] sm:text-2xl">
                {about.text}
              </p>
              <div className="my-5 border-t-2 border-dashed border-[color-mix(in_srgb,var(--ink)_30%,transparent)]" />
              <p className="text-lg leading-relaxed text-[var(--muted)]">{siteConfig.heroQuote}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/#places" className="btn-coral">
                Places
                <span aria-hidden>→</span>
              </Link>
              <Link href="/#experience" className="btn-ghost">
                Experience
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
