"use client";

import { navItems, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="border-b border-[var(--line)]">
      <nav
        aria-label="Primary"
        className="mx-auto flex items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
      >
        <Link
          href={{ pathname: "/", hash: "top" }}
          className="font-serif text-[1.05rem] font-semibold tracking-[-0.01em] text-[var(--fg)]"
          aria-label={`${siteConfig.name} home`}
        >
          Sudhith Mannuru
        </Link>

        <ul className="hidden items-center gap-0.5 sm:flex">
          <li>
            <Link
              href="/"
              className={cn(
                "rounded-full px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.08em] uppercase transition-colors",
                pathname === "/"
                  ? "bg-[var(--fg)] text-[var(--bg)]"
                  : "text-[var(--fg-muted)] hover:bg-[var(--bg-elevated)] hover:text-[var(--fg)]",
              )}
            >
              Home
            </Link>
          </li>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={{ pathname: "/", hash: item.href.replace("/#", "") }}
                className="rounded-full px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-[var(--fg-muted)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--fg)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] sm:hidden"
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
            className="border-t border-[var(--line)] px-5 py-3 sm:hidden"
          >
            <ul className="flex flex-col">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={{ pathname: "/", hash: item.href.replace("/#", "") }}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.resumeHref}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium"
                >
                  {siteConfig.resumeLabel}
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
