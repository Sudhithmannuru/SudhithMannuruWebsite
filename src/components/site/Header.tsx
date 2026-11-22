"use client";

import { Plane } from "@/components/site/Plane";
import { siteConfig } from "@/data/site";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1220]/80 backdrop-blur-md">
      <div className="frame flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
          <Plane className="h-6 w-6 text-[var(--accent)]" />
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[var(--muted)] hover:text-white">
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${siteConfig.email}`} className="rounded-full bg-[var(--accent)] px-4 py-2 font-medium text-[#1a1408]">
            Email
          </a>
        </nav>
        <button
          type="button"
          className="text-sm md:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav id="site-menu" className="frame flex flex-col gap-4 border-t border-white/10 py-5 md:hidden" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${siteConfig.email}`} className="text-[var(--accent)]">
            {siteConfig.email}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
