import { travel } from "@/data/content";
import Image from "next/image";

export function Places() {
  return (
    <section id="places" className="bg-[#f2a5c4] py-20 sm:py-24" aria-labelledby="places-title">
      <div className="world">
        <p className="meta">Postcards</p>
        <h2 id="places-title" className="display mt-3 text-[clamp(2.8rem,6vw,5.2rem)]">
          Places on the route
        </h2>
        <p className="mt-4 max-w-2xl text-lg font-medium">
          A few stops outside the lab notebook. Same curiosity, different light.
        </p>
        <ul className="mt-10 flex gap-5 overflow-x-auto pb-4">
          {travel.map((stop, index) => (
            <li
              key={stop.id}
              className="w-[min(78vw,320px)] shrink-0 rounded-[22px] border-[2.5px] border-[var(--ink)] bg-[var(--cloud)] p-3 shadow-[5px_6px_0_rgba(37,48,59,0.16)]"
              style={{ transform: `rotate(${index % 2 === 0 ? -1.5 : 1.5}deg)` }}
            >
              <Image
                src={stop.image}
                alt={stop.alt}
                width={640}
                height={480}
                className="h-52 w-full rounded-[14px] border-[2.5px] border-[var(--ink)] object-cover"
              />
              <p className="meta mt-3 text-[var(--ocean)]">{stop.region}</p>
              <h3 className="font-display text-3xl font-bold tracking-[-0.04em]">{stop.place}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{stop.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
