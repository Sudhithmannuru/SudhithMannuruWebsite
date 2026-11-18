import type { Metadata } from "next";
import { siteConfig, socialLinks } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé for ${siteConfig.name}. Computer science, machine learning, and software engineering.`,
};

export default function ResumePage() {
  const linkedin = socialLinks.find((link) => link.id === "linkedin");

  return (
    <main id="main" className="bg-[var(--sky)] pt-32 pb-16">
      <div className="world">
        <p className="meta">Résumé ticket</p>
        <h1 className="display mt-3 text-[clamp(3rem,7vw,6rem)]">{siteConfig.name}</h1>
        <p className="mt-4 max-w-2xl text-lg font-medium">{siteConfig.schoolLine}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={siteConfig.resumePdfHref} download className="btn-coral">
            Download PDF
          </a>
          <a href={siteConfig.resumePdfHref} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Open résumé
          </a>
          {linkedin ? (
            <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              LinkedIn
            </a>
          ) : null}
          <Link href="/" className="btn-sun">
            Back to the map
          </Link>
        </div>
        <div className="mt-8 overflow-hidden rounded-[28px] border-[2.5px] border-[var(--ink)] bg-white shadow-[6px_7px_0_rgba(37,48,59,0.16)]">
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
      </div>
    </main>
  );
}
