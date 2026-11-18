import { siteConfig, socialLinks } from "@/data/site";
import Link from "next/link";

const destinations = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Places", href: "/#places" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
  { label: "Résumé", href: "/resume" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const linkedin = socialLinks.find((link) => link.id === "linkedin");

  return (
    <footer className="bg-[var(--cream)] text-[var(--ink)]">
      <div className="world grid gap-10 py-14 md:grid-cols-[1.3fr_.8fr_.8fr]">
        <div>
          <p className="font-display text-3xl font-bold tracking-[-0.04em]">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-[var(--muted)]">
            Designed and built by Sudhith.
          </p>
          <p className="mt-2 text-[var(--muted)]">Still exploring.</p>
        </div>
        <div>
          <p className="meta">Destinations</p>
          <ul className="mt-4 space-y-2">
            {destinations.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-semibold hover:text-[var(--ocean)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="meta">Elsewhere</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a className="font-semibold hover:text-[var(--ocean)]" href={`mailto:${siteConfig.email}`}>
                Send a postcard
              </a>
            </li>
            {linkedin ? (
              <li>
                <a
                  className="font-semibold hover:text-[var(--ocean)]"
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="border-t-[2.5px] border-[var(--ink)]">
        <div className="world flex flex-col gap-2 py-5 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Sudhith</p>
          <p className="meta">Machine learning · Access · Research · Curiosity</p>
        </div>
      </div>
    </footer>
  );
}
