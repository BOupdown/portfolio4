import type { Locale } from "./config";

// All user-facing UI strings. Content (projects/experience) is localized
// separately in src/data/portfolio.ts.
export type Messages = {
  availability: string;
  tagline: string;
  taglineExtra: string;
  location: string;
  nav: { projects: string; experience: string; contact: string };
  actions: {
    viewProjects: string;
    getInTouch: string;
    downloadCV: string;
    allProjects: string;
    allExperience: string;
  };
  types: { Project: string; Internship: string; Volunteering: string };
  card: { viewDetails: string };
  home: {
    selectedWork: string;
    projects: string;
    whereIveWorked: string;
    experience: string;
    toolbox: string;
    techStack: string;
    ctaHeading: string;
    ctaTail: string;
  };
  projectsPage: { kicker: string; title: string; intro: string };
  experiencePage: { kicker: string; title: string; intro: string };
  detail: {
    backToProjects: string;
    backToExperience: string;
    highlights: string;
    stack: string;
  };
  contact: {
    kicker: string;
    title: string;
    introA: string;
    introB: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    send: string;
    sending: string;
    success: string;
    errorPrefix: string;
    errorGeneric: string;
    errorTail: string;
  };
  notFound: { kicker: string; title: string; text: string; back: string };
  stackGroups: Record<string, string>;
  about: {
    kicker: string;
    educationTitle: string;
    degree: string;
    languagesTitle: string;
    languages: string;
  };
  language: string;
};

const en: Messages = {
  availability: "Open to software engineering roles & internships",
  tagline:
    "DevOps & cloud engineer specializing in cloud infrastructure, CI/CD automation and data-driven backends.",
  taglineExtra: " I turn complex problems into clean, reliable, maintainable systems.",
  location: "Pau, France · open to relocation",
  nav: { projects: "Projects", experience: "Experience", contact: "Contact" },
  actions: {
    viewProjects: "View projects",
    getInTouch: "Get in touch",
    downloadCV: "Download CV",
    allProjects: "All projects",
    allExperience: "All experience",
  },
  types: { Project: "Project", Internship: "Internship", Volunteering: "Volunteering" },
  card: { viewDetails: "View details" },
  home: {
    selectedWork: "Selected work",
    projects: "Projects",
    whereIveWorked: "Where I've worked",
    experience: "Experience",
    toolbox: "Toolbox",
    techStack: "Tech stack",
    ctaHeading: "Let's build something together",
    ctaTail: "The fastest way to reach me is by email or LinkedIn.",
  },
  projectsPage: {
    kicker: "Work",
    title: "Projects",
    intro:
      "A selection of personal and academic projects spanning cloud infrastructure, real-time systems, applied AI and low-level programming.",
  },
  experiencePage: {
    kicker: "Career",
    title: "Experience",
    intro:
      "Internships and volunteering across cloud, AI, data engineering and full-stack development.",
  },
  detail: {
    backToProjects: "Back to projects",
    backToExperience: "Back to experience",
    highlights: "Highlights",
    stack: "Stack",
  },
  contact: {
    kicker: "Contact",
    title: "Get in touch",
    introA:
      "Send a message below — it reaches me directly, no email app required. You can also write to ",
    introB: ".",
    nameLabel: "Name or company",
    emailLabel: "Email address",
    messageLabel: "Message",
    send: "Send message",
    sending: "Sending…",
    success: "Thanks — your message has been sent. I'll reply soon.",
    errorPrefix: "Couldn't send",
    errorGeneric: "Something went wrong while sending",
    errorTail: "Please try again, or reach me at",
  },
  notFound: {
    kicker: "404",
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has moved.",
    back: "Back home",
  },
  stackGroups: {
    Languages: "Languages",
    Backend: "Backend",
    "Cloud & DevOps": "Cloud & DevOps",
    Frontend: "Frontend",
    Databases: "Databases",
    "Data & AI": "Data & AI",
  },
  about: {
    kicker: "Background",
    educationTitle: "Education",
    degree: "Engineering degree (Master's level) in Computer Science — Cloud Computing track",
    languagesTitle: "Languages",
    languages: "English (C1) · French (native) · Italian (B1)",
  },
  language: "Language",
};

const fr: Messages = {
  availability: "Ouvert aux postes et stages en ingénierie logicielle",
  tagline:
    "Ingénieur DevOps & cloud, spécialisé en infrastructure cloud, automatisation CI/CD et backends orientés données.",
  taglineExtra:
    " Je transforme des problèmes complexes en systèmes clairs, fiables et maintenables.",
  location: "Pau, France · ouvert à la mobilité",
  nav: { projects: "Projets", experience: "Expérience", contact: "Contact" },
  actions: {
    viewProjects: "Voir les projets",
    getInTouch: "Me contacter",
    downloadCV: "Télécharger le CV",
    allProjects: "Tous les projets",
    allExperience: "Toute l'expérience",
  },
  types: { Project: "Projet", Internship: "Stage", Volunteering: "Bénévolat" },
  card: { viewDetails: "Voir le détail" },
  home: {
    selectedWork: "Sélection",
    projects: "Projets",
    whereIveWorked: "Mon parcours",
    experience: "Expérience",
    toolbox: "Boîte à outils",
    techStack: "Stack technique",
    ctaHeading: "Construisons quelque chose ensemble",
    ctaTail: "Le plus simple pour me joindre est par email ou LinkedIn.",
  },
  projectsPage: {
    kicker: "Réalisations",
    title: "Projets",
    intro:
      "Une sélection de projets personnels et académiques couvrant l'infrastructure cloud, les systèmes temps réel, l'IA appliquée et la programmation bas niveau.",
  },
  experiencePage: {
    kicker: "Parcours",
    title: "Expérience",
    intro:
      "Stages et bénévolat dans le cloud, l'IA, l'ingénierie des données et le développement full-stack.",
  },
  detail: {
    backToProjects: "Retour aux projets",
    backToExperience: "Retour à l'expérience",
    highlights: "Points clés",
    stack: "Stack",
  },
  contact: {
    kicker: "Contact",
    title: "Me contacter",
    introA:
      "Envoyez un message ci-dessous — il me parvient directement, sans ouvrir d'application mail. Vous pouvez aussi écrire à ",
    introB: ".",
    nameLabel: "Nom ou entreprise",
    emailLabel: "Adresse email",
    messageLabel: "Message",
    send: "Envoyer le message",
    sending: "Envoi…",
    success: "Merci — votre message a bien été envoyé. Je vous réponds vite.",
    errorPrefix: "Échec de l'envoi",
    errorGeneric: "Une erreur est survenue lors de l'envoi",
    errorTail: "Réessayez, ou écrivez-moi à",
  },
  notFound: {
    kicker: "404",
    title: "Page introuvable",
    text: "La page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
  stackGroups: {
    Languages: "Langages",
    Backend: "Backend",
    "Cloud & DevOps": "Cloud & DevOps",
    Frontend: "Frontend",
    Databases: "Bases de données",
    "Data & AI": "Data & IA",
  },
  about: {
    kicker: "Profil",
    educationTitle: "Formation",
    degree: "Diplôme d'ingénieur en informatique — spécialité Cloud Computing",
    languagesTitle: "Langues",
    languages: "Anglais (C1) · Français (natif) · Italien (B1)",
  },
  language: "Langue",
};

export const messages: Record<Locale, Messages> = { en, fr };
