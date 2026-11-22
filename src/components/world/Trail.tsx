import { trail } from "@/data/adventure";

const marks = ["□", "●", "{ }", "◇", "▮", "⚑"];

export function Trail() {
  return (
    <section className="bg-[#a995e8] py-20 sm:py-28" aria-labelledby="trail-title">
      <div className="world">
        <p className="meta text-[#25303b]">Trail 05</p>
        <h2 id="trail-title" className="display mt-3 text-[clamp(2.8rem,6vw,5.4rem)]">
          The build trail
        </h2>
        <p className="mt-4 max-w-xl text-lg font-medium">
          Not a checklist. One route that changes shape as the work develops.
        </p>
        <ol className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <svg className="pointer-events-none absolute top-24 right-10 left-10 hidden h-40 w-auto lg:block" viewBox="0 0 900 160" aria-hidden>
            <path d="M40 40 C 220 140, 380 10, 560 90 S 820 20, 860 70" fill="none" stroke="#f47f6b" strokeWidth="10" strokeLinecap="round" />
          </svg>
          {trail.map((step, index) => (
            <li
              key={step.n}
              className="relative flex min-h-64 flex-col items-center justify-center rounded-[50%] border-[2.5px] border-[var(--ink)] bg-[var(--paper)] px-8 py-8 text-center shadow-[5px_6px_0_rgba(37,48,59,0.16)]"
            >
              <span className="meta text-[var(--ocean)]">{step.n}</span>
              <span className="mt-3 grid h-16 w-16 place-items-center rounded-full border-[2.5px] border-[var(--ink)] bg-[#ffd75e] text-xl font-bold">
                {marks[index]}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] uppercase">{step.title}</h3>
              <p className="mt-1 max-w-[14rem] text-[var(--muted)]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
