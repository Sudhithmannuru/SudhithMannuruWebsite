export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--fg)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--bg)]"
    >
      Skip to content
    </a>
  );
}
