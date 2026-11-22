import { projects } from "@/data/content";

export const featuredIds = ["nomaetrust", "civitas", "anactortho"] as const;

export const projectScenes = {
  nomaetrust: {
    code: "NT-001",
    tone: "sky",
    year: "2025",
  },
  civitas: {
    code: "CV-002",
    tone: "lagoon",
    year: "2025",
  },
  anactortho: {
    code: "AO-003",
    tone: "court",
    year: "2025",
  },
  medmatch: {
    code: "MM-004",
    tone: "sky",
    year: "2025",
  },
  coachme2: {
    code: "CM-005",
    tone: "sun",
    year: "2025",
  },
  vastegunehuiyaan: {
    code: "VG-006",
    tone: "lagoon",
    year: "2025",
  },
  hearlearn: {
    code: "HL-007",
    tone: "court",
    year: "2023",
  },
  dreamhacks: {
    code: "DH-008",
    tone: "sun",
    year: "2024",
  },
  thinkneuro: {
    code: "TN-009",
    tone: "lagoon",
    year: "2024",
  },
  "georgia-science-fair": {
    code: "GS-010",
    tone: "sky",
    year: "2024",
  },
} as const;

export type SceneTone = (typeof projectScenes)[keyof typeof projectScenes]["tone"];

export const regions = [
  {
    id: "models",
    index: "01",
    name: "Machine learning",
    blurb: "Claims, courts, and trials read by models.",
    color: "#ffd3c8",
    count: "03",
    ids: ["nomaetrust", "anactortho", "medmatch"],
  },
  {
    id: "access",
    index: "02",
    name: "Access",
    blurb: "Benefits, hearing, and a coach within reach.",
    color: "#c9ebc9",
    count: "03",
    ids: ["civitas", "hearlearn", "coachme2"],
  },
  {
    id: "research",
    index: "03",
    name: "Research",
    blurb: "Neuroscience and genetics, traced carefully.",
    color: "#fff1b6",
    count: "02",
    ids: ["thinkneuro", "georgia-science-fair"],
  },
  {
    id: "community",
    index: "04",
    name: "Community",
    blurb: "Hackathons, cohorts, and rooms opened for other students.",
    color: "#d9d3ff",
    count: "02",
    ids: ["dreamhacks", "vastegunehuiyaan"],
  },
] as const;

export const interests = [
  {
    id: "machine-learning",
    title: "Machine learning",
    body: "How computers learn from mistakes, and where a model should stay quiet.",
    projectId: "nomaetrust",
    swatch: "#ffd75e",
    mark: "spark",
  },
  {
    id: "computer-vision",
    title: "Computer vision",
    body: "One camera, a court, and a game that can explain itself.",
    projectId: "anactortho",
    swatch: "#f49a54",
    mark: "lens",
  },
  {
    id: "neuroscience",
    title: "Computational neuroscience",
    body: "How drugs and genes show up across neural systems, read from the literature.",
    projectId: "thinkneuro",
    swatch: "#a995e8",
    mark: "node",
  },
  {
    id: "misinformation",
    title: "Misinformation",
    body: "Text, images, and the gap between the loudest claim and a credible one.",
    projectId: "nomaetrust",
    swatch: "#f47f6b",
    mark: "flag",
  },
  {
    id: "access",
    title: "Accessible technology",
    body: "Benefits, hearing, and coaching that do not begin with a maze of paperwork.",
    projectId: "civitas",
    swatch: "#5dae72",
    mark: "leaf",
  },
  {
    id: "community",
    title: "Building with other students",
    body: "Clubs, hackathons, and tools that give someone else a place to start.",
    projectId: "dreamhacks",
    swatch: "#70bde4",
    mark: "plane",
  },
] as const;

export const trail = [
  {
    n: "01",
    title: "Curiosity",
    body: "A question about how something actually works.",
  },
  {
    n: "02",
    title: "Learn",
    body: "Follow it until the mechanism is clear.",
  },
  {
    n: "03",
    title: "Build",
    body: "Turn the idea into something a person can open.",
  },
  {
    n: "04",
    title: "Test",
    body: "Check whether it holds up past the demo.",
  },
  {
    n: "05",
    title: "Research",
    body: "Posters, papers, and claims kept careful.",
  },
  {
    n: "06",
    title: "Impact",
    body: "Useful work that leaves the laptop.",
  },
] as const;

export function projectById(id: string) {
  const project = projects.find((item) => item.id === id);
  if (!project) throw new Error(`Missing project ${id}`);
  return project;
}

export function sceneFor(id: string) {
  return projectScenes[id as keyof typeof projectScenes];
}
