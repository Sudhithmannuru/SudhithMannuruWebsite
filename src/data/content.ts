export const about = {
  kicker: "About me",
  text: "I’m Sudhith, a high school senior who likes figuring out how things work—and building something with what I learn. A question about how computers learn from mistakes pulled me into machine learning. Since then, I’ve founded my school’s Machine Learning Club, explored computational neuroscience, and built tools to help people check information and find essential resources. I enjoy seeing an idea become something someone can actually use.",
} as const;

export const projects = [
  {
    id: "nomaetrust",
    name: "NoMaeTrust",
    kicker: "Misinformation, examined",
    headline: "A quieter way to test what the internet wants you to believe.",
    description:
      "You paste a claim or a screenshot. NoMaeTrust checks it and marks what it can support. Finalist at the USAII Global AI Hackathon.",
    note: "USAII Global AI Hackathon finalist.",
    tags: ["React", "Node.js", "OpenAI", "OCR", "RAG"],
    github: "https://github.com/SudhithMannuru/NomaeTrust",
    demo: "https://nomaetrust.vercel.app",
    image: "/projects/nomaetrust.jpg",
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
      "Pick a language. Civitas lists benefits you may qualify for, then the forms and the deadlines, in that language.",
    note: "Built to make public programs readable.",
    tags: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    github: "https://github.com/Sudhithmannuru/Civitas",
    demo: "https://civitas-now.vercel.app/",
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
      "One camera on a basketball game. The software calibrates the court, tracks the ball, and keeps score. There is also a film room and a recruiting view.",
    note: "Computer vision for every gym, not only the ones with a broadcast truck.",
    tags: ["React", "Computer Vision", "Python", "OpenCV"],
    github: "https://github.com/ArshiaBajaj/AnactOrtho",
    demo: "https://anact-ortho.vercel.app/",
    image: "/projects/anactortho.jpg",
    imageAlt:
      "AnactOrtho dark landing page with Live, Film, IQ, and Recruit courtside tools.",
    layout: "court",
  },
  {
    id: "medmatch",
    name: "MedMatch",
    kicker: "The trial that fits",
    headline: "The trial that fits, not the one that merely matches.",
    description:
      "Built for trial coordinators, not patients. Search recruiting cancer trials by condition, drug, or city, then check a de-identified note against the eligibility rules.",
    note: "For coordinators screening de-identified notes, not for patients.",
    tags: ["Clinical trials", "Accessibility"],
    demo: "https://medmatch-three.vercel.app/",
    image: "/projects/medmatch.png",
    imageAlt:
      "MedMatch on a phone, searching recruiting cancer trials by condition, drug or sponsor, and city.",
    layout: "trial",
  },
  {
    id: "coachme2",
    name: "CoachMe2",
    kicker: "A coach, not a waitlist",
    headline: "Everyone deserves a coach, including the teenager who would never ask.",
    description:
      "I interned on this site. CoachMe2 matches teenagers, ages 14 to 19, with a coach.",
    note: "Rebuilt the site and coaching-access tools as a software intern.",
    tags: ["Nonprofit", "Coaching"],
    github: "https://github.com/Sudhithmannuru/CoachMe2",
    demo: "https://www.coachme2.world/",
    image: "/projects/coachme2.jpg",
    imageAlt:
      "CoachMe2 homepage with the headline Everyone deserves a coach and portraits of the coaching team.",
    layout: "coach",
  },
  {
    id: "vastegunehuiyaan",
    name: "VasteGuneHuiyaan",
    kicker: "One workspace for the cohort",
    headline: "Internships, class resources, and research — in one place for IIT students.",
    description:
      "A student workspace built for IIT students: internships, class resources, and research in one place. I joined as a team member and helped ship the live demo.",
    note: "Built for IIT students; I helped with the demo.",
    tags: ["Internships", "Research", "Education"],
    demo: "https://vastegunehuiyaan.com/",
    image: "/projects/vastegunehuiyaan.jpg",
    imageAlt:
      "VasteGuneHuiyaan homepage with a graduate in a cap and the headline Your journey starts here.",
    layout: "cohort",
  },
  {
    id: "hearlearn",
    name: "HearLearn",
    kicker: "Sound through bone",
    headline: "A hearing device that does not need the ear.",
    description:
      "A bone-conduction device for people who cannot hear through the ear. Vibration carries sound through bone. I helped build the hardware and present it.",
    note: "T-Mobile Changemaker Challenge, 2023.",
    tags: ["Hardware", "Accessibility"],
    demo: "/projects/hearlearn.png",
    linkLabel: "View photo",
    image: "/projects/hearlearn.png",
    imageAlt:
      "HearLearn prototype: a bone-conduction transducer on a board beside an Alpine player with a USB drive.",
    imageFit: "contain",
    layout: "device",
  },
  {
    id: "dreamhacks",
    name: "DreamHacks",
    kicker: "A hackathon, opened",
    headline: "A free hackathon for students who would not have one otherwise.",
    description:
      "A free international virtual hackathon I co-founded. 127 students, more than 15 industry judges, and Infosys sponsorship. Featured on Forsyth County News.",
    note: "Featured on Forsyth County News.",
    tags: ["Hackathon", "Leadership"],
    demo: "https://www.forsythnews.com/life/events/these-forsyth-county-high-school-students-hosted-a-hackathon-event-for-local-kids/",
    linkLabel: "Read the article",
    image: "/projects/dreamhacks.png",
    imageAlt:
      "Forsyth County News feature on DreamHacks, with a photo of Sudhith Mannuru and Arshia Bajaj.",
    imageFit: "contain",
    layout: "hackathon",
  },
  {
    id: "thinkneuro",
    name: "ThinkNeuro",
    kicker: "How drugs reach a circuit",
    headline: "How do drugs impact neural systems?",
    description:
      "A ThinkNeuro poster. We read 100 papers on how drugs affect neural systems and charted the citations in R and Excel.",
    note: "ThinkNeuro research poster.",
    tags: ["Research", "Neuroscience"],
    demo: "/research/thinkneuro.jpg",
    linkLabel: "View poster",
    image: "/research/thinkneuro.jpg",
    imageAlt:
      "ThinkNeuro research poster titled How do drugs impact neural systems, with Sudhith Mannuru listed among the authors.",
    imageFit: "contain",
    layout: "poster",
  },
  {
    id: "georgia-science-fair",
    name: "Georgia Science Fair",
    kicker: "A genetics question",
    headline: "Shared gene functions, traced through schizophrenia phenotypes.",
    description:
      "Poster with Mukund G. at the Georgia Science Fair in 2024. We compared mouse phenotype data with human gene associations for schizophrenia, across behavior, neurology, and growth.",
    note: "Presented at the Georgia Science Fair in 2024.",
    tags: ["Research", "Genetics"],
    demo: "/research/georgia-science-fair.jpg",
    linkLabel: "View poster",
    image: "/research/georgia-science-fair.jpg",
    imageAlt:
      "Research poster titled Exploring Common Functions Associated with Genes: Unrevealing the Genetic Components of Schizophrenia, presented by Sudhith M. and Mukund G.",
    imageFit: "contain",
    layout: "poster",
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
      note: "A senior software developer at Verizon. His career showed me how technology can influence millions of people.",
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
