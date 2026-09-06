import { socialLinks, siteConfig } from "@/data/site";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { externalRel } from "@/lib/utils";

const icons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-[var(--line)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--fg-muted)]">
          Designed and built by {siteConfig.name}. © {year}
        </p>
        <ul className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = icons[link.id];
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  {...externalRel()}
                  aria-label={`${link.label} (opens in a new tab)`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--fg)] transition-colors hover:border-[var(--line-strong)]"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
