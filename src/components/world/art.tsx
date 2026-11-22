export function Compass({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="28" fill="#fffdf6" stroke="#25303b" strokeWidth="3" />
      <circle cx="32" cy="32" r="18" fill="none" stroke="#287f9a" strokeWidth="2" />
      <path d="M32 10v6M32 48v6M10 32h6M48 32h6" stroke="#25303b" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 16l6 16-6 4-6-4 6-16z" fill="#f47f6b" stroke="#25303b" strokeWidth="2" />
      <path d="M32 48l-6-12 6-2 6 2-6 12z" fill="#5dae72" stroke="#25303b" strokeWidth="2" />
    </svg>
  );
}

export function Plane({ className = "h-12 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 92 56" className={className} aria-hidden>
      <path
        d="M6 34l28-6 10-16 8 2-6 16 22 4 8-8 7 2-8 12 8 6-7 2-10-8-22 2-8 12-8-2 6-14L8 40z"
        fill="#287f9a"
        stroke="#25303b"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Cloud({ className = "h-12 w-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 70" className={className} aria-hidden>
      <path
        d="M34 54h74c12 0 20-8 20-18s-8-16-18-16c-2-10-12-16-24-14-8-8-22-8-30 2-10-2-20 6-20 16 0 1 0 2 .2 3C24 28 14 36 14 46c0 8 8 14 18 14h2z"
        fill="#fffdf6"
        stroke="#25303b"
        strokeWidth="3"
      />
    </svg>
  );
}

export function Sun({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <circle cx="40" cy="40" r="22" fill="#ffd75e" stroke="#25303b" strokeWidth="3" />
    </svg>
  );
}
