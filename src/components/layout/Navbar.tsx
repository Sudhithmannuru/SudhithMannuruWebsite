"use client";

import { navItems, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 backdrop-blur-xl transition-all sm:px-4 ${
          scrolled
            ? "border-[var(--line)] bg-[var(--bg-elevated)] shadow-[var(--shadow)]"
            : "border-transparent bg-[var(--bg-elevated)]/70"
        }`}
      >
        <Link
          href={{ pathname: "/", hash: "top" }}
          className="flex items-center gap-2 rounded-full pr-2"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--fg)] text-[13px] font-semibold tracking-tight text-[var(--bg)]">
            {siteConfig.shortName}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:inline">
            Sudhith
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={{ pathname: "/", hash: item.href.replace("/#", "") }}
                className="rounded-full px-2.5 py-1.5 text-[13px] text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={siteConfig.resumeHref}
            className="btn-primary hidden !px-3.5 !py-2 text-[13px] sm:inline-flex"
          >
            {siteConfig.resumeLabel}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            className="glass mt-2 rounded-[28px] p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={{ pathname: "/", hash: item.href.replace("/#", "") }}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-3 py-3 text-base font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.resumeHref}
              onClick={() => setOpen(false)}
              className="mt-3 flex w-full items-center justify-center rounded-full bg-[var(--fg)] px-4 py-3 text-sm font-medium text-[var(--bg)]"
            >
              {siteConfig.resumeLabel}
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
