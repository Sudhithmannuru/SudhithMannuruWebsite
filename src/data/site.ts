export const siteConfig = {
  name: "Sudhith Mannuru",
  shortName: "SM",
  title: "Sudhith Mannuru — Student. Builder. Machine Learning Enthusiast.",
  description:
    "Sudhith Mannuru builds technology that questions information, expands access, and solves problems that matter. High school senior, machine learning enthusiast, and founder.",
  url: "https://sudhithmannuru.com",
  locale: "en_US",
  schoolLine:
    "South Forsyth High School • Class of 2027 • Intended Computer Science Major",
  resumeHref: "/resume",
  resumeLabel: "View Résumé",
  email: "sudhithmannuru@gmail.com",
  emailIsPlaceholder: false,
  showFamilySection: true,
  rotatingPhrases: [
    "Building with intelligence",
    "Designing for impact",
    "Learning without limits",
  ],
  heroLabel: "CS • AI • HUMAN-CENTERED TECHNOLOGY",
  heroEyebrow: "Student. Builder. Machine Learning Enthusiast.",
  heroQuote: "I build intelligent technology for problems that matter.",
  heroTicker: "1520 SAT  ·  4.64 GPA  ·  Rank 12/656  ·  USAII Finalist",
  resumePdfHref: "/resume/Sudhith_Mannuru_Resume.pdf",
} as const;

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Coursework", href: "/#coursework" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Travel", href: "/#travel" },
  { label: "Contact", href: "/#contact" },
] as const;

export const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sudhith-mannuru-173325243/",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Sudhithmannuru",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/sudhith1/",
  },
] as const;
