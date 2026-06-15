export type EntryType = "Project" | "Internship" | "Volunteering";

export type EntryLink = { label: string; href: string };

export type Entry = {
  slug: string;
  type: EntryType;
  /** Display title (concise, used on cards). */
  title: string;
  /** Longer headline used on the detail page. */
  headline: string;
  /** Role / position, primarily for experience entries. */
  role?: string;
  /** Organisation, for experience entries. */
  org?: string;
  location: string;
  /** Short, human period e.g. "2025" or "6 months · 2025". */
  period: string;
  /** One-line summary shown on cards and at the top of the detail page. */
  summary: string;
  /** Scannable outcome-oriented bullet points. */
  highlights: string[];
  /** Technologies used. */
  stack: string[];
  /** Optional external links (source, demo, write-up). */
  links?: EntryLink[];
};

export const projects: Entry[] = [
  {
    slug: "real-time-tracking",
    type: "Project",
    title: "Real-Time Position Tracking",
    headline: "Real-time position tracking with Kafka and FastAPI",
    location: "Pau, France",
    period: "2025",
    summary:
      "A low-latency geolocation pipeline streaming live positions onto an interactive map.",
    highlights: [
      "Designed a Kafka-based pipeline to ingest, stream and distribute continuous geolocation updates with minimal latency.",
      "Built a FastAPI backend exposing real-time positions to a dynamic mapping interface.",
      "Engineered for high throughput and fault tolerance to support live monitoring use cases.",
    ],
    stack: ["Kafka", "FastAPI", "Python", "Real-time"],
  },
  {
    slug: "messaging-platform",
    type: "Project",
    title: "Discord-like Messaging Platform",
    headline: "A full messaging platform built in Scala",
    location: "Pau, France",
    period: "2025",
    summary:
      "A complete real-time chat platform with private messaging and role-based servers.",
    highlights: [
      "Implemented private messaging and server-based communication with role-based administration in Scala.",
      "Built full account management — creation, updates, deletion — with structured access control.",
      "Developed a responsive Angular front-end with real-time messaging over WebSockets.",
    ],
    stack: ["Scala", "Angular", "WebSockets", "Real-time"],
  },
  {
    slug: "kubernetes-orchestration",
    type: "Project",
    title: "Kubernetes Game-Server Orchestration",
    headline: "Highly-available game servers orchestrated on Kubernetes",
    location: "Pau, France",
    period: "2025",
    summary:
      "Containerized Minecraft servers with automatic failover and persistent world state.",
    highlights: [
      "Orchestrated containerized game servers on Kubernetes for scalable, reliable operations.",
      "Implemented automatic pod failover so a replacement takes over without losing the running world.",
      "Used persistent volumes to preserve world data and player progress across pod restarts.",
    ],
    stack: ["Kubernetes", "Docker", "DevOps", "High Availability"],
  },
  {
    slug: "intelligent-assistant",
    type: "Project",
    title: "Intelligent Sustainability Assistant",
    headline: "An intelligent assistant for cost and CO₂ reduction (Kerdos)",
    location: "Pau, France",
    period: "2024",
    summary:
      "A chatbot delivering data-driven recommendations to cut operational costs and emissions.",
    highlights: [
      "Built an NLP-powered chatbot delivering tailored, environmentally responsible recommendations.",
      "Implemented intelligent search across relevant sustainability case studies.",
      "Paired a Python backend with an interactive Angular interface.",
    ],
    stack: ["Python", "Angular", "NLP", "Chatbot"],
  },
  {
    slug: "facial-recognition",
    type: "Project",
    title: "Facial Recognition Access Control",
    headline: "A facial-recognition security application",
    location: "Pau, France",
    period: "2022",
    summary:
      "Biometric authentication restricting access to authorized individuals.",
    highlights: [
      "Implemented detection, feature extraction and matching for user authentication.",
      "Applied computer-vision techniques to a real-world access-control scenario.",
    ],
    stack: ["Python", "OpenCV", "Computer Vision"],
  },
  {
    slug: "blackjack-c",
    type: "Project",
    title: "Blackjack Game in C",
    headline: "A fully functional Blackjack game built from scratch in C",
    location: "Pau, France",
    period: "2021",
    summary:
      "A complete Blackjack implementation exercising low-level programming.",
    highlights: [
      "Implemented full game logic: card dealing, score calculation and win/lose handling.",
      "Managed user input and game state with clean procedural design.",
      "Hands-on practice with memory management and low-level programming.",
    ],
    stack: ["C", "Algorithms", "Memory Management"],
  },
];

export const experience: Entry[] = [
  {
    slug: "irda",
    type: "Internship",
    title: "Cloud, AI & Web Development",
    headline: "Machine learning for agricultural yield prediction",
    role: "Software Engineering Intern",
    org: "IRDA",
    location: "Québec City, Canada",
    period: "6 months · 2025",
    summary:
      "Built and deployed an ML yield-prediction model across three cloud architectures on GCP.",
    highlights: [
      "Developed a machine-learning model predicting agricultural yields from environmental and crop variables.",
      "Deployed the solution three ways — VM, GKE (Kubernetes) and Cloud Run + Cloud SQL — and benchmarked cost, performance and maintainability.",
      "Enhanced a React front-end and FastAPI backend, and migrated an interactive map from Python Dash to React backed by MongoDB.",
    ],
    stack: ["Machine Learning", "GCP", "Kubernetes", "FastAPI", "React", "MongoDB"],
  },
  {
    slug: "safran",
    type: "Internship",
    title: "Data Engineer",
    headline: "Ergonomic data-interpretation app on Apache Zeppelin",
    role: "Data Engineering Intern",
    org: "Safran",
    location: "Bordes, France",
    period: "4 months · 2024",
    summary:
      "Made complex helicopter-engine material data accessible to non-technical teams.",
    highlights: [
      "Processed XML datasets and extracted key material properties in Python.",
      "Built interactive visualizations in Zeppelin notebooks for non-technical users.",
      "Bridged the gap between data specialists and operational teams.",
    ],
    stack: ["Python", "Apache Zeppelin", "XML", "Data Visualization"],
  },
  {
    slug: "axione",
    type: "Internship",
    title: "Full Stack Developer",
    headline: "Automated on-call work-hour and compensation calculations",
    role: "Full Stack Developer Intern",
    org: "Axione",
    location: "Pau, France",
    period: "3 months · 2023",
    summary:
      "A secure web app automating payroll calculations for on-call shifts.",
    highlights: [
      "Automated day/night pay calculations from the internal API with Flask and PostgreSQL.",
      "Reduced manual payroll errors with accurate, real-time computation.",
      "Secured the platform with authentication and role-based authorization.",
    ],
    stack: ["Python", "Flask", "PostgreSQL", "REST API"],
  },
  {
    slug: "tutoring",
    type: "Volunteering",
    title: "Academic Tutor",
    headline: "Academic tutoring in maths, sciences, French and English",
    role: "Volunteer Tutor",
    org: "Collège Jeanne d'Albret",
    location: "Pau, France",
    period: "12 months",
    summary:
      "Personalized tutoring for middle-school students across multiple subjects.",
    highlights: [
      "Delivered tailored sessions improving problem-solving skills and study habits.",
      "Built students' confidence across maths, sciences, French and English.",
    ],
    stack: ["Mentoring", "Teaching", "Communication"],
  },
];

export const allEntries: Entry[] = [...projects, ...experience];

export function getProject(slug: string): Entry | undefined {
  return projects.find((e) => e.slug === slug);
}

export function getExperience(slug: string): Entry | undefined {
  return experience.find((e) => e.slug === slug);
}
