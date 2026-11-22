export const siteConfig = {
  name: "Sudhith Mannuru",
  shortName: "SM",
  title: "Sudhith Mannuru",
  description:
    "Sudhith Mannuru is a senior at South Forsyth High School. He builds machine learning and software projects.",
  url: "https://sudhithmannuru.org",
  locale: "en_US",
  schoolLine:
    "South Forsyth High School • Class of 2027 • Intended Computer Science Major",
  email: "sudhithmannuru@gmail.com",
  alsoEmail: "sudhithmannuru@gatech.edu",
  emailIsPlaceholder: false,
  showFamilySection: false,
  rotatingPhrases: [
    "Code. Cameras. Hard questions.",
    "Built for people, not demos.",
    "Machine learning with a spine.",
  ],
  heroLabel: "South Forsyth · Class of 2027",
  heroEyebrow: "Student. Builder. Machine Learning Enthusiast.",
  heroGreeting: "Hey.",
  heroQuote:
    "I’m Sudhith, a senior at South Forsyth High School. I like figuring out how things work and building things of my own, especially with machine learning and computer vision. Here, you’ll find my projects, places I’ve traveled, and ways to get in touch.",
  heroTicker: "USAII Finalist",
} as const;

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Travel", href: "/#travel" },
  { label: "Contact", href: "/#contact" },
] as const;

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/sudhith1/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sudhith-mannuru-173325243/",
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.com/users/897269148156051477",
  },
] as const;
