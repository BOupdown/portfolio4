import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import type { IconType } from "react-icons";

export const site = {
  name: "Omar Benzeroual",
  role: "Software Engineer",
  // Short, recruiter-facing positioning line.
  tagline:
    "Software engineer focused on cloud infrastructure, backend systems and applied AI.",
  location: "France · open to relocation",
  availability: "Open to software engineering roles & internships",
  email: "omar.benzeroual.pro@gmail.com",
  resume: "/resumeWeb25.pdf",
  url: "https://boupdown.github.io/portfolio4",
  github: "https://github.com/BOupdown",
  linkedin: "https://www.linkedin.com/in/omar-benzeroual-50898921b/",
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  external: boolean;
  download?: boolean;
};

export const socials: SocialLink[] = [
  { label: "LinkedIn", href: site.linkedin, icon: FaLinkedin, external: true },
  { label: "GitHub", href: site.github, icon: FaGithub, external: true },
  { label: "Download CV", href: site.resume, icon: FiDownload, external: false, download: true },
];

// Grouped technical stack — easy for recruiters to scan.
export const stackGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "TypeScript", "Scala", "C", "SQL"] },
  { label: "Backend", items: ["FastAPI", "Flask", "REST APIs", "Kafka", "WebSockets"] },
  { label: "Cloud & DevOps", items: ["GCP", "Kubernetes", "Docker", "CI/CD"] },
  { label: "Frontend", items: ["React", "Next.js", "Angular"] },
  { label: "Data & AI", items: ["Machine Learning", "OpenCV", "PostgreSQL", "MongoDB"] },
];
