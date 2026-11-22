const rowA = [
  { name: "Python", mark: "Py", color: "#3776ab" },
  { name: "TypeScript", mark: "TS", color: "#3178c6" },
  { name: "Java", mark: "Ja", color: "#e76f00" },
  { name: "JavaScript", mark: "JS", color: "#f7df1e" },
  { name: "R", mark: "R", color: "#276dc3" },
  { name: "SQL", mark: "SQL", color: "#336791" },
  { name: "React", mark: "Re", color: "#61dafb" },
  { name: "Next.js", mark: "N", color: "#111111" },
  { name: "React Native", mark: "RN", color: "#61dafb" },
  { name: "Node.js", mark: "No", color: "#3c873a" },
  { name: "Express", mark: "Ex", color: "#444444" },
  { name: "Tailwind", mark: "Tw", color: "#38bdf8" },
] as const;

const rowB = [
  { name: "PyTorch", mark: "Pt", color: "#ee4c2c" },
  { name: "TensorFlow", mark: "TF", color: "#ff6f00" },
  { name: "OpenCV", mark: "CV", color: "#5c6bc0" },
  { name: "MediaPipe", mark: "Mp", color: "#00a3a1" },
  { name: "NumPy", mark: "Np", color: "#4dabcf" },
  { name: "pandas", mark: "pd", color: "#150458" },
  { name: "Whisper", mark: "Wh", color: "#10a37f" },
  { name: "GPT-4o mini", mark: "4o", color: "#10a37f" },
  { name: "MongoDB", mark: "Mg", color: "#47a248" },
  { name: "MySQL", mark: "My", color: "#00758f" },
  { name: "Git", mark: "Git", color: "#f05032" },
  { name: "Vercel", mark: "▲", color: "#111111" },
  { name: "Expo", mark: "Ex", color: "#4630eb" },
] as const;

function Pill({ name, mark, color }: { name: string; mark: string; color: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-black/5 bg-white px-4 py-2.5 text-[15px] font-medium whitespace-nowrap text-[#1c1c1c] shadow-[0_1px_0_rgba(20,28,46,0.04)]">
      <span
        className="grid h-6 min-w-6 place-items-center rounded-md px-1 text-[11px] font-bold text-white"
        style={{ background: color, color: color === "#f7df1e" ? "#1c1c1c" : "#fff" }}
      >
        {mark}
      </span>
      {name}
    </span>
  );
}

function Track({ items, reverse }: { items: readonly { name: string; mark: string; color: string }[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`marquee gap-3 px-1.5 ${reverse ? "marquee-reverse" : ""}`}>
        {loop.map((item, index) => (
          <Pill key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export function SkillRoll() {
  return (
    <section className="skill-grid overflow-hidden border-y border-white/10 py-8" aria-label="Skills">
      <div className="flex flex-col gap-3">
        <Track items={rowA} />
        <Track items={rowB} reverse />
      </div>
    </section>
  );
}
