function SkylineTile() {
  return (
    <svg viewBox="0 0 1040 220" className="h-40 w-auto shrink-0 md:h-52" fill="currentColor" aria-hidden>
      <rect x="0" y="190" width="1040" height="30" />
      <rect x="18" y="146" width="48" height="44" />
      <rect x="38" y="128" width="18" height="18" />
      <rect x="76" y="112" width="36" height="78" />
      <polygon points="168,22 150,58 186,58" />
      <rect x="154" y="56" width="28" height="10" />
      <rect x="160" y="66" width="16" height="124" />
      <circle cx="168" cy="96" r="6" fill="#0b1220" />
      <rect x="206" y="128" width="42" height="62" />
      <rect x="256" y="104" width="30" height="86" />
      <g fill="none" stroke="currentColor" strokeWidth="5">
        <circle cx="360" cy="128" r="50" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M360 78v100M310 128h100M325 93l70 70M395 93l-70 70" />
      </g>
      <circle cx="360" cy="128" r="5" />
      <rect x="352" y="174" width="16" height="16" />
      <rect x="430" y="118" width="34" height="72" />
      <rect x="472" y="96" width="40" height="94" />
      <polygon points="560,190 576,190 572,78 564,96" />
      <rect x="548" y="70" width="36" height="16" />
      <rect x="556" y="86" width="20" height="104" />
      <rect x="604" y="96" width="86" height="12" />
      <rect x="676" y="70" width="36" height="16" />
      <rect x="684" y="86" width="20" height="104" />
      <rect x="576" y="158" width="128" height="10" />
      <rect x="730" y="132" width="46" height="58" />
      <rect x="784" y="108" width="28" height="82" />
      <polygon points="860,190 900,190 886,36 874,72" />
      <rect x="918" y="120" width="40" height="70" />
      <rect x="966" y="138" width="52" height="52" />
      <g fill="#f0c36a">
        <rect className="city-window" x="28" y="156" width="5" height="7" />
        <rect className="city-window" x="40" y="156" width="5" height="7" />
        <rect className="city-window" x="86" y="126" width="5" height="7" />
        <rect className="city-window" x="96" y="126" width="5" height="7" />
        <rect className="city-window" x="86" y="142" width="5" height="7" />
        <rect className="city-window" x="216" y="142" width="5" height="7" />
        <rect className="city-window" x="228" y="142" width="5" height="7" />
        <rect className="city-window" x="216" y="158" width="5" height="7" />
        <rect className="city-window" x="266" y="120" width="5" height="7" />
        <rect className="city-window" x="440" y="132" width="5" height="7" />
        <rect className="city-window" x="482" y="112" width="5" height="7" />
        <rect className="city-window" x="494" y="112" width="5" height="7" />
        <rect className="city-window" x="482" y="128" width="5" height="7" />
        <rect className="city-window" x="740" y="146" width="5" height="7" />
        <rect className="city-window" x="752" y="146" width="5" height="7" />
        <rect className="city-window" x="928" y="134" width="5" height="7" />
        <rect className="city-window" x="940" y="134" width="5" height="7" />
        <rect className="city-window" x="976" y="150" width="5" height="7" />
      </g>
    </svg>
  );
}

export function LondonSky() {
  return (
    <div className="london-sky pointer-events-none absolute inset-x-0 bottom-0" aria-hidden>
      <div className="london-track">
        <SkylineTile />
        <SkylineTile />
      </div>
    </div>
  );
}
