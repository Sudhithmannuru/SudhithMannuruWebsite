import Image from "next/image";

export function HeroPortrait() {
  return (
    <div className="mx-auto mt-8 max-w-[1180px] px-5 sm:px-7">
      <div className="border border-[var(--line)] bg-[var(--card)] p-2.5">
        <div className="relative mx-auto h-[46vh] w-full max-w-[900px] sm:h-[62vh] sm:max-h-[620px] sm:min-h-[340px]">
          <Image
            src="/photos/sudhith-portrait.jpg"
            alt="Sudhith Mannuru on a bridge over the Thames in London, May 2026."
            fill
            sizes="(min-width: 1180px) 900px, 90vw"
            priority
            className="object-contain"
            style={{ objectPosition: "50% 22%" }}
          />
        </div>
      </div>
      <p className="mx-auto mt-5 max-w-[620px] text-center font-serif text-[1.05rem] leading-relaxed text-[var(--fg)] italic">
        May 2026. London.
      </p>
    </div>
  );
}
