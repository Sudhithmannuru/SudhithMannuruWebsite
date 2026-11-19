"use client";

import { siteConfig } from "@/data/site";
import { Compass } from "@/components/world/art";
import Link from "next/link";
import { useEffect, useState } from "react";

const destinations = [
  { n: "01", label: "Projects", href: "/#projects" },
  { n: "02", label: "About", href: "/#about" },
  { n: "03", label: "Experience", href: "/#experience" },
  { n: "04", label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-3 left-1/2 z-[90] w-[min(92rem,calc(100%-1rem))] -translate-x-1/2 sm:top-4">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between rounded-[28px] border-[2.5px] border-[var(--ink)] bg-[var(--cream)] px-3 py-2.5 shadow-[6px_7px_0_rgba(37,48,59,0.18)] sm:px-4"
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`${siteConfig.name} home`}
            onClick={() => setOpen(false)}
          >
            <Compass className="h-11 w-11" />
            <span className="font-display text-lg font-bold tracking-[0.16em]">
              SUDHITH
            </span>
          </Link>
          <button
            type="button"
            className="grid h-14 w-14 place-items-center rounded-[18px] border-[2.5px] border-[var(--ink)] bg-[var(--sun)] shadow-[3px_4px_0_rgba(37,48,59,0.22)]"
            aria-expanded={open}
            aria-controls="adventure-map"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close adventure map" : "Open adventure map"}</span>
            {open ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                <path d="M5 5l14 14M19 5L5 19" fill="none" stroke="#25303b" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="#25303b" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {open ? (
        <div
          id="adventure-map"
          className="fixed inset-0 z-[80] overflow-auto bg-[var(--sky)]"
        >
          <div className="world relative pt-28 pb-16 sm:pt-32">
            <div className="mb-6 flex items-end justify-between gap-4">
              <p className="meta">Choose a destination</p>
              <p className="meta hidden sm:block">Sudhith&apos;s world</p>
            </div>
            <div className="mb-6 h-[2.5px] bg-[var(--ink)]" />
            <ul className="relative space-y-4">
              <svg
                className="pointer-events-none absolute top-6 right-8 hidden h-[28rem] w-64 sm:block"
                viewBox="0 0 200 420"
                aria-hidden
              >
                <path
                  d="M160 10c40 70-80 110-20 180s80 90 10 160"
                  fill="none"
                  stroke="#f47f6b"
                  strokeWidth="4"
                  strokeDasharray="10 10"
                  strokeLinecap="round"
                />
              </svg>
              {destinations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 rounded-[22px] border-[2.5px] border-[var(--ink)] bg-[var(--paper)] px-5 py-3 shadow-[4px_5px_0_rgba(37,48,59,0.16)] sm:px-7 sm:py-4"
                  >
                    <span className="meta text-[var(--ocean)]">{item.n}</span>
                    <span className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                      {item.label}
                    </span>
                    <span className="ml-auto grid h-5 w-5 place-items-center rounded-full border-[2.5px] border-[var(--ink)]">
                      <span className="h-2 w-2 rounded-full bg-[var(--coral)]" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" className="btn-ghost" onClick={() => setOpen(false)}>
                Close map
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
