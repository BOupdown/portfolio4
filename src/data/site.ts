import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import type { IconType } from "react-icons";

export const site = {
  name: "Omar Benzeroual",
  role: "DevOps Engineer",
  // Short, recruiter-facing positioning line (English default; see i18n messages
  // for the displayed, localized version).
  tagline:
    "DevOps & cloud engineer focused on cloud infrastructure, CI/CD automation and data-driven backends.",
  location: "Pau, France · open to relocation",
  availability: "Open to software engineering roles & internships",
  email: "omar.benzeroual.pro@gmail.com",
  resume: "/Omar-Benzeroual-CV.pdf",
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

// Grouped technical stack — easy for recruiters to scan. Labels are keys
// translated via i18n (see messages.stackGroups).
export const stackGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "Java", "C", "C++", "Scala", "SQL"] },
  { label: "Cloud & DevOps", items: ["GCP", "AWS", "Kubernetes", "Docker", "Terraform", "Ansible", "GitLab CI"] },
  { label: "Backend", items: ["FastAPI", "Flask", "REST APIs", "Kafka"] },
  { label: "Frontend", items: ["React", "Angular", "Next.js"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
  { label: "Data & AI", items: ["Machine Learning", "Data Analysis", "OpenCV"] },
];

// Education and spoken languages (from CV) for the home "About" section.
export const education = {
  school: "CY-Tech, Pau",
  period: "2020 – 2025",
};
