import type { Metadata } from "next";
import { siteConfig, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé for ${siteConfig.name}. Computer science, machine learning, and software engineering.`,
};

export default function ResumePage() {
  const github = socialLinks.find((link) => link.id === "github");
  const linkedin = socialLinks.find((link) => link.id === "linkedin");

  return (
    <main id="main" className="section-pad mx-auto w-full max-w-5xl pt-28 pb-16">
      <p className="kicker">
        {siteConfig.heroLabel}
      </p>
      <h1 className="display mt-4 text-[clamp(2.4rem,6vw,4.8rem)]">{siteConfig.name}</h1>
      <p className="mt-4 max-w-2xl text-lg tracking-tight text-[var(--fg-muted)]">
        {siteConfig.heroQuote}
      </p>
      <p className="mt-3 text-sm text-[var(--fg-muted)]">{siteConfig.schoolLine}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={siteConfig.resumePdfHref} download className="btn-primary">
          Download PDF
        </a>
        <a
          href={siteConfig.resumePdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Open résumé
        </a>
        {github ? (
          <a
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        ) : null}
        {linkedin ? (
          <a
            href={linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        ) : null}
      </div>

      <div className="media-frame mt-10">
        <object
          data={`${siteConfig.resumePdfHref}#view=FitH`}
          type="application/pdf"
          className="h-[min(82vh,980px)] w-full"
          aria-label={`${siteConfig.name} résumé`}
        >
          <iframe
            title={`${siteConfig.name} résumé`}
            src={siteConfig.resumePdfHref}
            className="h-[min(82vh,980px)] w-full border-0"
          />
        </object>
      </div>
    </main>
  );
}
