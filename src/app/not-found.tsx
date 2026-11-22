import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="frame grid min-h-[70vh] place-items-center py-24">
      <div className="max-w-lg">
        <p className="font-mono text-xs text-[var(--accent)]">404</p>
        <h1 className="mt-3 font-serif text-5xl tracking-[-0.03em]">This page is not here.</h1>
        <Link href="/" className="mt-8 inline-block bg-[var(--fg)] px-4 py-2.5 text-sm text-[var(--bg)]">
          Back home
        </Link>
      </div>
    </main>
  );
}
