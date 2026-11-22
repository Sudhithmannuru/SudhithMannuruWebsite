export function Plane({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 88 88" className={className} fill="currentColor" aria-hidden>
      <path d="M14 40h42c10 0 18 2.2 24 5.2-6 3-14 5.2-24 5.2H14c-6 0-10-2.2-10-5.2S8 40 14 40Z" />
      <path d="M34 39 18 10h12l16 29Z" />
      <path d="M34 49 18 78h12L46 49Z" />
      <path d="M20 38 8 22h10l10 16Z" />
      <path d="M20 50 8 66h10L28 50Z" />
      <path d="M58 42.5h8v3h-8z" opacity="0.55" />
    </svg>
  );
}

export function Airliner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 140" className={className} fill="currentColor" aria-hidden>
      <path d="M118 58 74 16h30l42 42Z" />
      <path
        fillRule="evenodd"
        d="M86 56h156c40 0 68 8 86 18-18 10-50 18-90 18H86c-20 0-34-8-34-18s14-18 34-18zm78 10h7v5h-7zm18 0h7v5h-7zm18 0h7v5h-7zm18 0h7v5h-7zm18 0h7v5h-7zm18 0h7v5h-7z"
      />
      <path d="M210 80 156 124h36l52-42Z" />
      <path d="M172 98h46c7 0 12 4 12 9s-5 9-12 9h-46c-7 0-12-4-12-9s5-9 12-9Z" opacity="0.72" />
      <path d="M84 76 42 112h34l28-34Z" />
    </svg>
  );
}
