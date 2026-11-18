import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[80vh] place-items-center bg-[var(--sky)] px-6 pt-28">
      <div className="max-w-xl text-center">
        <p className="meta">Off the map</p>
        <h1 className="display mt-3 text-6xl sm:text-7xl">This page is not on the route.</h1>
        <Link href="/" className="btn-coral mt-8">
          Return home
        </Link>
      </div>
    </main>
  );
}
