export const stats = [
  {
    id: "sat",
    value: 1520,
    suffix: "",
    label: "SAT",
    detail: "Composite",
    featured: true,
    decimals: 0,
  },
  {
    id: "math",
    value: 790,
    suffix: "",
    label: "Math",
    detail: "SAT section",
    featured: false,
    decimals: 0,
  },
  {
    id: "rw",
    value: 730,
    suffix: "",
    label: "Reading & Writing",
    detail: "SAT section",
    featured: false,
    decimals: 0,
  },
  {
    id: "gpa",
    value: 4.64,
    suffix: "",
    label: "Weighted GPA",
    detail: "Academic record",
    featured: true,
    decimals: 2,
  },
  {
    id: "rank",
    value: 12,
    suffix: "",
    label: "Class Rank",
    detail: "12 of 656",
    featured: false,
    decimals: 0,
  },
  {
    id: "percentile",
    value: 98,
    suffix: "th",
    label: "Percentile",
    detail: "National standing",
    featured: false,
    decimals: 0,
  },
] as const;

export const about = {
  kicker: "About",
  headline: "Curious enough to ask the hard question. Persistent enough to build the answer.",
  pullQuote: "How can a computer know it was wrong?",
  paragraphs: [
    "I am a high school senior drawn to computer science, machine learning, and tools that change someone’s day for the better. That curiosity started with a single question: how can a computer know it was wrong? Following it taught me Python, neural networks, and the discipline of turning an idea into something people can use.",
    "The same question led me to found my school’s first Machine Learning Club, join computational neuroscience research, ship software, and help organize an international hackathon. I care most about artificial intelligence, full-stack development, human-centered computing, and accessibility.",
    "I want to build systems that question information, open doors to essential resources, and treat people with clarity instead of complexity.",
  ],
};

export const projects = [
  {
    id: "nomaetrust",
    name: "NoMaeTrust",
    kicker: "Misinformation, examined",
    headline: "A quieter way to test what the internet wants you to believe.",
    description:
      "An AI-powered platform that evaluates text and image claims so people can separate rumor from credible information. Built for moments when the loudest story is not the truest one.",
    note: "USAII Global AI Hackathon finalist.",
    tags: ["React", "Node.js", "OpenAI", "OCR", "RAG"],
    github: "https://github.com/SudhithMannuru/NomaeTrust",
    demo: "https://nomaetrust.vercel.app",
    image: "/projects/nomaetrust.png",
    imageAlt:
      "NomaeTrust mobile feed showing a boil-water advisory in downtown Atlanta with claims marked as checking.",
    layout: "signal",
  },
  {
    id: "civitas",
    name: "Civitas",
    kicker: "Access, not paperwork",
    headline: "Guidance through twenty-seven programs, written for the person who needs the next step.",
    description:
      "A benefits-access assistant that helps refugees navigate assistance programs, eligibility rules, documents, deadlines, and what to do next — without asking them to become policy experts first.",
    note: "Built to make public programs readable.",
    tags: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    github: "https://github.com/Sudhithmannuru/Civitas",
    demo: "https://civitas-flame-five.vercel.app/",
    image: "/projects/civitas.png",
    imageAlt:
      "Civitas landing page with the headline A new home begins with knowing your way and a language picker.",
    layout: "path",
  },
  {
    id: "anactortho",
    name: "AnactOrtho",
    kicker: "The game, read in real time",
    headline: "An AI referee that sees the court the way a coach wishes every gym could.",
    description:
      "A basketball analysis platform that uses computer vision for court calibration, ball tracking, automated calls, scoring, commentary, and player insight — turning one camera into a full game staff.",
    note: "Computer vision for every gym, not only the ones with a broadcast truck.",
    tags: ["React", "Computer Vision", "Python", "OpenCV"],
    github: "https://github.com/ArshiaBajaj/AnactOrtho",
    demo: "https://anact-ortho.vercel.app/live",
    image: "/projects/anactortho.jpg",
    imageAlt:
      "AnactOrtho dark landing page with Live, Film, IQ, and Recruit courtside tools.",
    layout: "court",
  },
] as const;

export const experiences = [
  {
    id: "thinkneuro",
    org: "ThinkNeuro",
    role: "Cognitive and Computational Neuroscience Intern",
    period: "Research",
    points: [
      "Conducted bibliometric analysis in R and studied how the field maps its own questions.",
      "Co-authored and presented a neuroprosthetics research poster.",
      "Selected for a program with a 23% acceptance rate.",
    ],
  },
  {
    id: "coachme2",
    org: "CoachMe2",
    role: "Software Development Intern",
    period: "Internship",
    points: [
      "Helped rebuild a nonprofit website for clearer access to support.",
      "Contributed to mental-health screening and personalized coaching applications.",
      "Worked on tools that connect teenagers with appropriate care.",
    ],
  },
  {
    id: "icode",
    org: "iCode",
    role: "Coding Instructor",
    period: "Teaching",
    points: [
      "Taught Python, Java, and computer science fundamentals to K–8 students.",
      "Mentored students through hands-on projects, debugging, and problem-solving.",
    ],
  },
  {
    id: "hackunited",
    org: "HackUnited",
    role: "Community Engagement Director",
    period: "Community",
    points: [
      "Supported hackathon sponsors and coordinated community outreach.",
      "Helped connect free global hackathons with more than 5,000 students.",
    ],
  },
] as const;

export const leadership = [
  {
    id: "ml-club",
    org: "Machine Learning Club",
    role: "Founder and President",
    description:
      "Founded South Forsyth High School’s first Machine Learning Club. Taught neural networks, backpropagation, model training, and real-world applications through workshops, live coding, and student challenges.",
    span: "lg",
  },
  {
    id: "dreamhacks",
    org: "DreamHacks",
    role: "Co-Founder and Executive Director",
    description:
      "Co-founded a free international virtual hackathon serving 127 students. Recruited more than 15 industry judges and secured Infosys sponsorship.",
    span: "md",
  },
  {
    id: "scifye",
    org: "SciFye",
    role: "President; Former Vice President",
    description:
      "Led accessible STEM events for students with disabilities and earned the National Service Honor Gold Award after completing more than 250 service hours.",
    span: "md",
  },
  {
    id: "mu-alpha",
    org: "Mu Alpha Theta",
    role: "Math Tutor",
    description:
      "Tutored students in AP Statistics, Algebra I, Algebra II, Geometry, and SAT Math through clear step-by-step reasoning and confidence-building strategies.",
    span: "sm",
  },
  {
    id: "alzheimers",
    org: "Walk to End Alzheimer’s",
    role: "Team Founder and Captain",
    description:
      "Created a fundraising team, recruited supporters, and raised funds door-to-door for Alzheimer’s research, care, and community awareness.",
    span: "sm",
  },
] as const;

export const coursework = [
  {
    id: "math",
    title: "Advanced Mathematics",
    courses: [
      "AP Precalculus",
      "AP Statistics",
      "AP Calculus AB",
      "AP Calculus BC",
      "Georgia Tech MATH 1554: Linear Algebra",
    ],
  },
  {
    id: "cs",
    title: "Computer Science and Technology",
    courses: [
      "AP Computer Science Principles",
      "AP Computer Science A",
      "Georgia Tech CS 1301: Introduction to Computing",
      "Web Development",
      "Introduction to Software Technology",
    ],
  },
  {
    id: "science",
    title: "Science",
    courses: [
      "Honors Biology",
      "Honors Chemistry",
      "AP Environmental Science",
      "AP Psychology",
    ],
  },
  {
    id: "humanities",
    title: "Humanities and Social Sciences",
    courses: [
      "AP Human Geography",
      "AP World History",
      "AP United States History",
      "AP Macroeconomics",
      "American Government",
      "Dual Enrollment English Composition",
      "Dual Enrollment Spanish III",
    ],
  },
] as const;

export const awards = [
  {
    id: "usaii",
    title: "USAII Global AI Hackathon Finalist",
    context: "National recognition for NoMaeTrust",
  },
  {
    id: "nsh",
    title: "National Service Honor Gold",
    context: "250+ hours of service",
  },
  {
    id: "ap-scholar",
    title: "AP Scholar with Distinction",
    context: "College Board",
  },
  {
    id: "cbnrp",
    title: "College Board National Recognition Program",
    context: "School Recognition Award",
  },
  {
    id: "uga",
    title: "UGA Certificate of Merit",
    context: "University of Georgia",
  },
  {
    id: "rlc",
    title: "International RLC Hacks",
    context: "Top-five finish",
  },
] as const;

export const family = {
  headline: "The People Behind My Drive",
  quote:
    "Technology sparked my curiosity, but my family gave me the confidence to pursue it. I love my parents deeply. My brother earned a bachelor’s in computer science and is pursuing a master’s in CS at Georgia Tech. My father showed me the reach that thoughtful engineering can have, and mom’s constant care taught me the persistence behind every meaningful achievement.",
  people: [
    {
      name: "Mokshith Mannuru",
      relation: "Brother",
      note: "He graduated with a bachelor’s in computer science and is pursuing a master’s in CS at Georgia Tech. He worked at Dell in Austin and at Google in Sunnyvale, and helped me fall in love with CS along the way.",
      image: "/photos/family-selfie.jpg",
      alt: "Sudhith Mannuru with Mokshith Mannuru and Sravani Mannuru.",
    },
    {
      name: "Rama Mannuru",
      relation: "Father",
      note: "A senior software developer at Verizon, with earlier work at Google and Dell. His career showed me how technology can influence millions of people.",
      image: "/photos/rama-the-mall.jpg",
      alt: "Sudhith Mannuru standing with Rama Mannuru on a tree-lined boulevard in London.",
    },
    {
      name: "Sravani Mannuru",
      relation: "Mother",
      note: "She cherishes me, supports me through every ambition, and makes the work feel possible. I love her — and both of my parents — more than I can put into a résumé.",
      image: "/photos/sravani-garden.jpg",
      alt: "Sudhith Mannuru standing with Sravani Mannuru in a garden.",
    },
  ],
  gallery: [
    {
      image: "/photos/sravani-tower-bridge.jpg",
      alt: "Sudhith Mannuru and Sravani Mannuru on Tower Bridge in London.",
    },
    {
      image: "/photos/family-birthday.jpg",
      alt: "Sudhith Mannuru celebrating a birthday with Sravani Mannuru and Mokshith Mannuru.",
    },
  ],
};

export const travel = [
  {
    id: "puerto-rico",
    place: "Puerto Rico",
    region: "Old San Juan",
    caption:
      "Colonial streets in saturated blue, white ironwork, and a vanishing point that feels like an invitation.",
    image: "/travel/puerto-rico.jpg",
    alt: "A narrow sunlit street in Old San Juan lined with blue colonial buildings, white trim, and wrought-iron balconies.",
  },
  {
    id: "rome",
    place: "Rome",
    region: "Piazza di Spagna",
    caption:
      "Looking down the Spanish Steps into a city that still measures time in stone and ochre.",
    image: "/travel/rome.jpg",
    alt: "A high view from the Spanish Steps in Rome looking toward Via dei Condotti and the city skyline.",
  },
  {
    id: "banff",
    place: "Banff",
    region: "Alberta, Canada",
    caption:
      "Alpine light, terraced gardens, and a quiet walk through a landscape that does not hurry.",
    image: "/travel/banff.jpg",
    alt: "A sunlit botanical garden in Banff with flower beds, a wooden gazebo, evergreen trees, and a mountain peak.",
  },
  {
    id: "vellore",
    place: "Vellore",
    region: "Tamil Nadu",
    caption:
      "A gopuram rising in carved tiers — a reminder that craft and devotion can occupy the same structure.",
    image: "/travel/vellore.jpg",
    alt: "A multi-tiered Hindu temple entrance tower with intricate carvings and people gathered at the gateway.",
  },
  {
    id: "bengaluru",
    place: "Bengaluru",
    region: "Karnataka",
    caption:
      "Color, density, and new towers sharing one sky — a city that builds in layers.",
    image: "/travel/bengaluru.jpg",
    alt: "An orange apartment building in Bengaluru with cream neighbors and modern high-rises in the distance.",
  },
  {
    id: "miami",
    place: "Miami",
    region: "Florida",
    caption:
      "Dusk over water, a skyline just coming on, and the feeling of arriving somewhere larger than the day.",
    image: "/travel/miami.jpg",
    alt: "A dusk skyline across water with city lights beginning to appear under a cloudy evening sky.",
  },
  {
    id: "new-york",
    place: "New York",
    region: "United States",
    caption:
      "The first time a city introduces itself in letters large enough to stand beside.",
    image: "/travel/new-york.jpg",
    alt: "A young visitor and a family member standing in front of a large I Love NY sign in a bright terminal hall.",
  },
] as const;
