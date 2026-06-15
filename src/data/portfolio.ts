import type { Locale } from "@/i18n/config";

export type EntryType = "Project" | "Internship" | "Volunteering";
export type EntryLink = { label: string; href: string };

type L = Record<Locale, string>;
type LA = Record<Locale, string[]>;

// Raw entry with localized text fields. Non-text fields (slug, type, org,
// stack, links) are shared across locales.
type RawEntry = {
  slug: string;
  type: EntryType;
  title: L;
  headline: L;
  role?: L;
  org?: string;
  location: L;
  period: L;
  summary: L;
  highlights: LA;
  stack: string[];
  links?: EntryLink[];
};

// Resolved entry passed to components (plain strings for the active locale).
export type Entry = {
  slug: string;
  type: EntryType;
  title: string;
  headline: string;
  role?: string;
  org?: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links?: EntryLink[];
};

const rawProjects: RawEntry[] = [
  {
    slug: "real-time-tracking",
    type: "Project",
    title: {
      en: "Real-Time Position Tracking",
      fr: "Suivi de position en temps réel",
    },
    headline: {
      en: "Real-time position tracking with Kafka and FastAPI",
      fr: "Suivi de position en temps réel avec Kafka et FastAPI",
    },
    location: { en: "Pau, France", fr: "Pau, France" },
    period: { en: "2025", fr: "2025" },
    summary: {
      en: "A low-latency geolocation pipeline streaming live positions onto an interactive map.",
      fr: "Un pipeline de géolocalisation à faible latence diffusant les positions en direct sur une carte interactive.",
    },
    highlights: {
      en: [
        "Designed a Kafka-based pipeline to ingest, stream and distribute continuous geolocation updates with minimal latency.",
        "Built a FastAPI backend exposing real-time positions to a dynamic mapping interface.",
        "Engineered for high throughput and fault tolerance to support live monitoring use cases.",
      ],
      fr: [
        "Conçu un pipeline basé sur Kafka pour ingérer, diffuser et distribuer des mises à jour de géolocalisation continues avec une latence minimale.",
        "Développé un backend FastAPI exposant les positions en temps réel à une interface cartographique dynamique.",
        "Pensé pour un débit élevé et la tolérance aux pannes afin de supporter des cas de supervision en direct.",
      ],
    },
    stack: ["Kafka", "FastAPI", "Python", "Real-time"],
  },
  {
    slug: "messaging-platform",
    type: "Project",
    title: {
      en: "Discord-like Messaging Platform",
      fr: "Plateforme de messagerie type Discord",
    },
    headline: {
      en: "A full messaging platform built in Scala",
      fr: "Une plateforme de messagerie complète développée en Scala",
    },
    location: { en: "Pau, France", fr: "Pau, France" },
    period: { en: "2025", fr: "2025" },
    summary: {
      en: "A Dockerized, Discord-like chat platform with private messaging and role-based servers.",
      fr: "Une plateforme de chat type Discord, dockerisée, avec messagerie privée et serveurs gérés par rôles.",
    },
    highlights: {
      en: [
        "Built a Scala backend handling accounts, servers and role-based administration with structured access control.",
        "Delivered real-time communication via Kafka, supporting both private and server-based messaging.",
        "Developed a responsive Angular front-end and containerized the whole application with Docker.",
      ],
      fr: [
        "Développé un backend Scala gérant comptes, serveurs et administration par rôles avec un contrôle d'accès structuré.",
        "Assuré la communication temps réel via Kafka, pour la messagerie privée comme par serveurs.",
        "Réalisé un front-end Angular réactif et conteneurisé l'ensemble de l'application avec Docker.",
      ],
    },
    stack: ["Scala", "Angular", "Kafka", "Docker"],
  },
  {
    slug: "kubernetes-orchestration",
    type: "Project",
    title: {
      en: "Kubernetes Game-Server Orchestration",
      fr: "Orchestration de serveurs de jeu sur Kubernetes",
    },
    headline: {
      en: "Highly-available game servers orchestrated on Kubernetes",
      fr: "Serveurs de jeu hautement disponibles orchestrés sur Kubernetes",
    },
    location: { en: "Pau, France", fr: "Pau, France" },
    period: { en: "2025", fr: "2025" },
    summary: {
      en: "Containerized Minecraft servers with automatic failover and persistent world state.",
      fr: "Serveurs Minecraft conteneurisés avec bascule automatique et état du monde persistant.",
    },
    highlights: {
      en: [
        "Orchestrated containerized game servers on Kubernetes for scalable, reliable operations.",
        "Implemented automatic pod failover and persistent volumes to preserve world data and player progress across restarts.",
        "Integrated a GitLab CI pipeline to automate production releases.",
      ],
      fr: [
        "Orchestré des serveurs de jeu conteneurisés sur Kubernetes pour une exploitation scalable et fiable.",
        "Mis en place une bascule automatique des pods et des volumes persistants pour préserver le monde et la progression des joueurs lors des redémarrages.",
        "Intégré un pipeline GitLab CI pour automatiser les mises en production.",
      ],
    },
    stack: ["Kubernetes", "Docker", "GitLab CI", "High Availability"],
  },
  {
    slug: "intelligent-assistant",
    type: "Project",
    title: {
      en: "Intelligent Sustainability Assistant",
      fr: "Assistant intelligent pour la durabilité",
    },
    headline: {
      en: "An intelligent chatbot and search engine for a startup (Kerdos)",
      fr: "Un chatbot intelligent et un moteur de recherche pour une startup (Kerdos)",
    },
    location: { en: "Pau, France", fr: "Pau, France" },
    period: { en: "2024", fr: "2024" },
    summary: {
      en: "A data-driven assistant delivering eco-responsible recommendations to cut costs and emissions.",
      fr: "Un assistant orienté données fournissant des recommandations écoresponsables pour réduire coûts et émissions.",
    },
    highlights: {
      en: [
        "Built an intelligent assistant in Python performing data analysis and delivering eco-responsible recommendations.",
        "Implemented a chatbot and a search engine to explore relevant sustainability case studies.",
        "Developed the interface in React, paired with a Python backend.",
      ],
      fr: [
        "Développé un assistant intelligent en Python réalisant l'analyse de données et délivrant des recommandations écoresponsables.",
        "Implémenté un chatbot et un moteur de recherche pour explorer des études de cas pertinentes sur la durabilité.",
        "Développé l'interface en React, associée à un backend Python.",
      ],
    },
    stack: ["Python", "React", "NLP", "Search"],
  },
  {
    slug: "facial-recognition",
    type: "Project",
    title: {
      en: "Facial Recognition Access Control",
      fr: "Contrôle d'accès par reconnaissance faciale",
    },
    headline: {
      en: "A facial-recognition security application",
      fr: "Une application de sécurité par reconnaissance faciale",
    },
    location: { en: "Pau, France", fr: "Pau, France" },
    period: { en: "2022", fr: "2022" },
    summary: {
      en: "Biometric authentication restricting access to authorized individuals.",
      fr: "Authentification biométrique réservant l'accès aux personnes autorisées.",
    },
    highlights: {
      en: [
        "Implemented detection, feature extraction and matching for user authentication.",
        "Applied computer-vision techniques to a real-world access-control scenario.",
      ],
      fr: [
        "Implémenté la détection, l'extraction de caractéristiques et la mise en correspondance pour authentifier les utilisateurs.",
        "Appliqué des techniques de vision par ordinateur à un scénario réel de contrôle d'accès.",
      ],
    },
    stack: ["Python", "OpenCV", "Computer Vision"],
  },
  {
    slug: "blackjack-c",
    type: "Project",
    title: { en: "Blackjack Game in C", fr: "Jeu de Blackjack en C" },
    headline: {
      en: "A fully functional Blackjack game built from scratch in C",
      fr: "Un jeu de Blackjack entièrement fonctionnel développé de zéro en C",
    },
    location: { en: "Pau, France", fr: "Pau, France" },
    period: { en: "2021", fr: "2021" },
    summary: {
      en: "A complete Blackjack implementation exercising low-level programming.",
      fr: "Une implémentation complète du Blackjack mettant en pratique la programmation bas niveau.",
    },
    highlights: {
      en: [
        "Implemented full game logic: card dealing, score calculation and win/lose handling.",
        "Managed user input and game state with clean procedural design.",
        "Hands-on practice with memory management and low-level programming.",
      ],
      fr: [
        "Implémenté toute la logique du jeu : distribution des cartes, calcul des scores et gestion des conditions de victoire/défaite.",
        "Géré les entrées utilisateur et l'état du jeu avec une conception procédurale soignée.",
        "Mise en pratique concrète de la gestion mémoire et de la programmation bas niveau.",
      ],
    },
    stack: ["C", "Algorithms", "Memory Management"],
  },
];

const rawExperience: RawEntry[] = [
  {
    slug: "irda",
    type: "Internship",
    title: { en: "Cloud & DevOps", fr: "Cloud & DevOps" },
    headline: {
      en: "Cloud deployment & DevOps for agricultural yield prediction",
      fr: "Déploiement cloud & DevOps pour la prédiction des rendements agricoles",
    },
    role: { en: "DevOps Intern", fr: "Stagiaire DevOps" },
    org: "IRDA",
    location: { en: "Québec City, Canada", fr: "Québec, Canada" },
    period: { en: "Apr – Oct 2025 · 6 months", fr: "Avr. – Oct. 2025 · 6 mois" },
    summary: {
      en: "Cleaned agricultural data and deployed a prediction app across three GCP architectures with CI/CD.",
      fr: "Nettoyage de données agricoles et déploiement d'une app de prédiction sur trois architectures GCP, avec CI/CD.",
    },
    highlights: {
      en: [
        "Cleaned and prepared agricultural datasets to improve the predictive models' accuracy.",
        "Deployed the application three ways on GCP — VM, Kubernetes (GKE) and Cloud Run + Cloud SQL — and compared cost, performance and maintainability.",
        "Set up the VPC, Cloud SQL databases and domain names underpinning the infrastructure.",
        "Configured and managed CI/CD pipelines with GitLab CI to automate deployments.",
      ],
      fr: [
        "Nettoyé et préparé des jeux de données agricoles pour améliorer la précision des modèles prédictifs.",
        "Déployé l'application de trois façons sur GCP — VM, Kubernetes (GKE) et Cloud Run + Cloud SQL — et comparé coût, performance et maintenabilité.",
        "Mis en place le VPC, les bases de données Cloud SQL et les noms de domaine de l'infrastructure.",
        "Configuré et géré des pipelines CI/CD avec GitLab CI pour automatiser les déploiements.",
      ],
    },
    stack: ["GCP", "Kubernetes", "Cloud Run", "Cloud SQL", "GitLab CI", "Machine Learning"],
  },
  {
    slug: "safran",
    type: "Internship",
    title: { en: "Data Analyst", fr: "Data Analyst" },
    headline: {
      en: "Python app to interpret helicopter-engine material data",
      fr: "Application Python d'interprétation des données matériaux de moteurs d'hélicoptères",
    },
    role: { en: "Data Analyst Intern", fr: "Stagiaire Data Analyst" },
    org: "Safran",
    location: { en: "Bordes, France", fr: "Bordes, France" },
    period: { en: "Apr – Aug 2024 · 4 months", fr: "Avr. – Août 2024 · 4 mois" },
    summary: {
      en: "Made complex helicopter-engine material data accessible to non-technical teams.",
      fr: "Rendu accessibles aux équipes non techniques des données matériaux complexes de moteurs d'hélicoptères.",
    },
    highlights: {
      en: [
        "Developed a Python application to process XML files holding helicopter-engine material data.",
        "Automated the analysis and interpretation of complex technical datasets.",
        "Delivered an interface for non-technical users, improving data accessibility across teams.",
      ],
      fr: [
        "Développé une application Python pour traiter des fichiers XML de données matériaux de moteurs d'hélicoptères.",
        "Automatisé l'analyse et l'interprétation de jeux de données techniques complexes.",
        "Mis à disposition une interface pour des utilisateurs non techniques, améliorant l'accessibilité des données.",
      ],
    },
    stack: ["Python", "Apache Zeppelin", "XML", "Data Visualization"],
  },
  {
    slug: "axione",
    type: "Internship",
    title: { en: "Full Stack Developer", fr: "Développeur full-stack" },
    headline: {
      en: "Automated on-call work-hour and compensation calculations",
      fr: "Automatisation du calcul des heures d'astreinte et des indemnités",
    },
    role: { en: "Full Stack Developer Intern", fr: "Stagiaire développeur full-stack" },
    org: "Axione",
    location: { en: "Pau, France", fr: "Pau, France" },
    period: { en: "Jun – Aug 2023 · 3 months", fr: "Juin – Août 2023 · 3 mois" },
    summary: {
      en: "A secure web app automating payroll calculations for on-call shifts.",
      fr: "Une application web sécurisée automatisant les calculs de paie pour les astreintes.",
    },
    highlights: {
      en: [
        "Automated day/night pay calculations from the internal API with Flask and PostgreSQL.",
        "Reduced manual payroll errors with accurate, real-time computation.",
        "Secured the platform with authentication and role-based authorization.",
      ],
      fr: [
        "Automatisé les calculs de rémunération jour/nuit à partir de l'API interne avec Flask et PostgreSQL.",
        "Réduit les erreurs de paie manuelles grâce à un calcul précis en temps réel.",
        "Sécurisé la plateforme avec authentification et autorisation basée sur les rôles.",
      ],
    },
    stack: ["Python", "Flask", "PostgreSQL", "REST API"],
  },
  {
    slug: "tutoring",
    type: "Volunteering",
    title: { en: "Academic Tutor", fr: "Tuteur scolaire" },
    headline: {
      en: "Academic tutoring in maths, sciences, French and English",
      fr: "Soutien scolaire en mathématiques, sciences, français et anglais",
    },
    role: { en: "Volunteer Tutor", fr: "Tuteur bénévole" },
    org: "Collège Jeanne d'Albret",
    location: { en: "Pau, France", fr: "Pau, France" },
    period: { en: "Sep 2022 – Jun 2023", fr: "Sept. 2022 – Juin 2023" },
    summary: {
      en: "Personalized tutoring for middle-school students across multiple subjects.",
      fr: "Soutien personnalisé pour des collégiens dans plusieurs matières.",
    },
    highlights: {
      en: [
        "Delivered tailored sessions improving problem-solving skills and study habits.",
        "Built students' confidence across maths, sciences, French and English.",
      ],
      fr: [
        "Animé des séances sur mesure améliorant la résolution de problèmes et les méthodes de travail.",
        "Renforcé la confiance des élèves en mathématiques, sciences, français et anglais.",
      ],
    },
    stack: ["Mentoring", "Teaching", "Communication"],
  },
];

function resolve(raw: RawEntry, locale: Locale): Entry {
  return {
    slug: raw.slug,
    type: raw.type,
    title: raw.title[locale],
    headline: raw.headline[locale],
    role: raw.role?.[locale],
    org: raw.org,
    location: raw.location[locale],
    period: raw.period[locale],
    summary: raw.summary[locale],
    highlights: raw.highlights[locale],
    stack: raw.stack,
    links: raw.links,
  };
}

export function getProjects(locale: Locale): Entry[] {
  return rawProjects.map((e) => resolve(e, locale));
}

export function getExperience(locale: Locale): Entry[] {
  return rawExperience.map((e) => resolve(e, locale));
}

export function getProject(slug: string, locale: Locale): Entry | undefined {
  const raw = rawProjects.find((e) => e.slug === slug);
  return raw ? resolve(raw, locale) : undefined;
}

export function getExperienceEntry(slug: string, locale: Locale): Entry | undefined {
  const raw = rawExperience.find((e) => e.slug === slug);
  return raw ? resolve(raw, locale) : undefined;
}

// Slugs for static generation (locale-independent).
export const projectSlugs = rawProjects.map((e) => e.slug);
export const experienceSlugs = rawExperience.map((e) => e.slug);
