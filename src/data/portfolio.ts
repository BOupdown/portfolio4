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
      en: "A complete real-time chat platform with private messaging and role-based servers.",
      fr: "Une plateforme de chat temps réel complète, avec messagerie privée et serveurs gérés par rôles.",
    },
    highlights: {
      en: [
        "Implemented private messaging and server-based communication with role-based administration in Scala.",
        "Built full account management — creation, updates, deletion — with structured access control.",
        "Developed a responsive Angular front-end with real-time messaging over WebSockets.",
      ],
      fr: [
        "Implémenté la messagerie privée et la communication par serveurs avec une administration basée sur les rôles, en Scala.",
        "Développé une gestion complète des comptes — création, mise à jour, suppression — avec un contrôle d'accès structuré.",
        "Réalisé un front-end Angular réactif avec messagerie temps réel via WebSockets.",
      ],
    },
    stack: ["Scala", "Angular", "WebSockets", "Real-time"],
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
        "Implemented automatic pod failover so a replacement takes over without losing the running world.",
        "Used persistent volumes to preserve world data and player progress across pod restarts.",
      ],
      fr: [
        "Orchestré des serveurs de jeu conteneurisés sur Kubernetes pour une exploitation scalable et fiable.",
        "Mis en place une bascule automatique des pods : un pod de remplacement prend le relais sans perdre le monde en cours.",
        "Utilisé des volumes persistants pour préserver les données du monde et la progression des joueurs lors des redémarrages.",
      ],
    },
    stack: ["Kubernetes", "Docker", "DevOps", "High Availability"],
  },
  {
    slug: "intelligent-assistant",
    type: "Project",
    title: {
      en: "Intelligent Sustainability Assistant",
      fr: "Assistant intelligent pour la durabilité",
    },
    headline: {
      en: "An intelligent assistant for cost and CO₂ reduction (Kerdos)",
      fr: "Un assistant intelligent de réduction des coûts et du CO₂ (Kerdos)",
    },
    location: { en: "Pau, France", fr: "Pau, France" },
    period: { en: "2024", fr: "2024" },
    summary: {
      en: "A chatbot delivering data-driven recommendations to cut operational costs and emissions.",
      fr: "Un chatbot fournissant des recommandations fondées sur les données pour réduire coûts et émissions.",
    },
    highlights: {
      en: [
        "Built an NLP-powered chatbot delivering tailored, environmentally responsible recommendations.",
        "Implemented intelligent search across relevant sustainability case studies.",
        "Paired a Python backend with an interactive Angular interface.",
      ],
      fr: [
        "Développé un chatbot basé sur le NLP délivrant des recommandations personnalisées et écoresponsables.",
        "Implémenté une recherche intelligente parmi des études de cas pertinentes sur la durabilité.",
        "Associé un backend Python à une interface interactive en Angular.",
      ],
    },
    stack: ["Python", "Angular", "NLP", "Chatbot"],
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
    title: { en: "Cloud, AI & Web Development", fr: "Cloud, IA & développement web" },
    headline: {
      en: "Machine learning for agricultural yield prediction",
      fr: "Machine learning pour la prédiction des rendements agricoles",
    },
    role: { en: "Software Engineering Intern", fr: "Stagiaire ingénierie logicielle" },
    org: "IRDA",
    location: { en: "Québec City, Canada", fr: "Québec, Canada" },
    period: { en: "6 months · 2025", fr: "6 mois · 2025" },
    summary: {
      en: "Built and deployed an ML yield-prediction model across three cloud architectures on GCP.",
      fr: "Conçu et déployé un modèle ML de prédiction de rendements sur trois architectures cloud GCP.",
    },
    highlights: {
      en: [
        "Developed a machine-learning model predicting agricultural yields from environmental and crop variables.",
        "Deployed the solution three ways — VM, GKE (Kubernetes) and Cloud Run + Cloud SQL — and benchmarked cost, performance and maintainability.",
        "Enhanced a React front-end and FastAPI backend, and migrated an interactive map from Python Dash to React backed by MongoDB.",
      ],
      fr: [
        "Développé un modèle de machine learning prédisant les rendements agricoles à partir de variables environnementales et culturales.",
        "Déployé la solution de trois façons — VM, GKE (Kubernetes) et Cloud Run + Cloud SQL — et comparé coût, performance et maintenabilité.",
        "Amélioré un front-end React et un backend FastAPI, et migré une carte interactive de Python Dash vers React adossée à MongoDB.",
      ],
    },
    stack: ["Machine Learning", "GCP", "Kubernetes", "FastAPI", "React", "MongoDB"],
  },
  {
    slug: "safran",
    type: "Internship",
    title: { en: "Data Engineer", fr: "Ingénieur données" },
    headline: {
      en: "Ergonomic data-interpretation app on Apache Zeppelin",
      fr: "Application ergonomique d'interprétation de données sur Apache Zeppelin",
    },
    role: { en: "Data Engineering Intern", fr: "Stagiaire ingénierie des données" },
    org: "Safran",
    location: { en: "Bordes, France", fr: "Bordes, France" },
    period: { en: "4 months · 2024", fr: "4 mois · 2024" },
    summary: {
      en: "Made complex helicopter-engine material data accessible to non-technical teams.",
      fr: "Rendu accessibles aux équipes non techniques des données matériaux complexes de moteurs d'hélicoptères.",
    },
    highlights: {
      en: [
        "Processed XML datasets and extracted key material properties in Python.",
        "Built interactive visualizations in Zeppelin notebooks for non-technical users.",
        "Bridged the gap between data specialists and operational teams.",
      ],
      fr: [
        "Traité des jeux de données XML et extrait les propriétés matériaux clés en Python.",
        "Construit des visualisations interactives dans des notebooks Zeppelin pour des utilisateurs non techniques.",
        "Fait le lien entre les spécialistes de la donnée et les équipes opérationnelles.",
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
    period: { en: "3 months · 2023", fr: "3 mois · 2023" },
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
    period: { en: "12 months", fr: "12 mois" },
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
