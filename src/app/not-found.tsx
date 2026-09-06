import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="section-pad flex min-h-[80vh] flex-col justify-center py-32">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-blue)]">404</p>
      <h1 className="display mt-4 text-5xl sm:text-7xl">This page is not on the map.</h1>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-full bg-[var(--fg)] px-5 py-3 text-sm font-medium text-[var(--bg)]"
      >
        Return home
      </Link>
    </main>
  );
}
