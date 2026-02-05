import { 
  LaptopMinimal, 
  Smartphone, 
  Paintbrush, 
  ShoppingCart, 
  Database, 
  Settings 
} from "lucide-react";

export const personalInfo = {
  name: "Dountio Joseph",
  title: "Software Engineer",
  tagline: "Développeur passionné spécialisé dans la création d'applications web modernes et performantes. Je transforme des idées innovantes en solutions digitales élégantes qui répondent aux besoins réels des utilisateurs.",
  birthDate: "21 Avril 2005",
  age: "20 ans",
  email: "dountioj14@gmail.com",
  phone: "+237 691129881",
  city: "Douala, Cameroun",
  degree: "Licence en Informatique",
  freelance: "Disponible",
  languages: "Français, Anglais",
  github: "https://github.com/dountiojoseph",
  linkedin: "https://linkedin.com/in/dountiojoseph",
  twitter: "https://twitter.com/dountiojoseph",
};

export const aboutText = {
  intro: "Étudiant en informatique de 20 ans, passionné par le développement web et les nouvelles technologies. Je me spécialise dans la création d'interfaces utilisateur intuitives et de solutions back-end robustes. Mon objectif est de créer des applications qui ont un impact positif et qui facilitent la vie des utilisateurs.",
  passion: "Toujours curieux d'apprendre, je me tiens constamment à jour avec les dernières tendances et technologies du développement web. J'aime relever des défis techniques et collaborer sur des projets innovants.",
};

export const skills = [
  { name: "HTML/CSS", percentage: 95, color: "#E34F26" },
  { name: "JavaScript", percentage: 35, color: "#f7df1e" },
  { name: "React.js", percentage: 30, color: "#61DAFB" },
  { name: "PHP/MySQL", percentage: 45, color: "#777BB4" },
  { name: "Node.js", percentage: 30, color: "#339933" },
  { name: "Swift/SwiftUI", percentage: 0, color: "#FA7343" },
];

export const education = [
  {
    period: "2023 - Présent",
    title: "Licence en Informatique",
    description: "Actuellement en formation universitaire, spécialisation en développement web et génie logiciel. Focus sur les technologies modernes et les méthodologies agiles.",
  },
  {
    period: "2022 - 2023",
    title: "Certification Développement Web",
    description: "Formation intensive en développement full-stack. Maîtrise de HTML, CSS, JavaScript, React, Node.js et bases de données.",
  },
  {
    period: "2020 - 2023",
    title: "GCE A Level",
    description: "Diplôme obtenu avec mention. Passion précoce pour l'informatique et la programmation développée durant cette période.",
  },
];

export const experience = [
  {
    period: "2024 - Présent",
    title: "Développeur Freelance",
    description: "Création de sites web et applications pour divers clients. Gestion complète des projets de la conception au déploiement.",
  },
  {
    period: "Été 2024",
    title: "Stage Développeur Web",
    description: "Participation au développement d'une plateforme e-commerce. Travail en équipe et apprentissage des bonnes pratiques du développement professionnel.",
  },
  {
    period: "2023 - 2024",
    title: "Projets Personnels",
    description: "Développement de plusieurs applications web pour consolider mes compétences. Portfolio, sites vitrines, et applications interactives.",
  },
];

export const services = [
  {
    icon: LaptopMinimal,
    title: "Développement Web",
    description: "Création de sites web modernes, responsives et performants avec les dernières technologies (React, Node.js, PHP).",
  },
  {
    icon: Smartphone,
    title: "Design Responsive",
    description: "Conception d'interfaces utilisateur adaptées à tous les appareils, garantissant une expérience optimale sur mobile, tablette et desktop.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Création d'interfaces intuitives et esthétiques centrées sur l'expérience utilisateur pour maximiser l'engagement.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Développement de boutiques en ligne complètes avec systèmes de paiement sécurisés et gestion des commandes.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Création d'APIs robustes et de bases de données optimisées pour des applications performantes et sécurisées.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Support technique continu, mises à jour régulières et optimisation de vos applications existantes.",
  },
];

export const projects = [
  {
    title: "Application de Gestion des finances",
    tech: "HTML • CSS • JavaScript",
    link: "https://josephyedidya.github.io/FinanceTracker/",
    image: "/placeholder.svg",
  },
  {
    title: "Emploi de temps étudiant",
    tech: "HTML • CSS • JS",
    link: "https://josephyedidya.github.io/Time-Table/",
    image: "/placeholder.svg",
  },
  {
    title: "Plateforme de e-commerce",
    tech: "HTML • CSS • JS",
    link: "https://josephyedidya.github.io/Hardware-e-commerce/",
    image: "/placeholder.svg",
  },
  {
    title: "Application de Gestion des Abonnements",
    tech: "HTML • CSS • JavaScript • PHP",
    link: "#",
    image: "/placeholder.svg",
  },
  {
    title: "Site Restaurant",
    tech: "HTML • CSS • JavaScript",
    link: "https://josephyedidya.github.io/Restauration-Website/",
    image: "/placeholder.svg",
  },
  {
    title: "Plateforme de Vente de Bijoux",
    tech: "HTML • CSS • JavaScript",
    link: "#",
    image: "/placeholder.svg",
  },
];

export const githubRepos = [
  {
    name: "FinanceTracker",
    description: "Application de gestion des finances personnelles avec suivi des dépenses et revenus.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/dountiojoseph/FinanceTracker",
  },
  {
    name: "Time-Table",
    description: "Application de gestion d'emploi du temps pour étudiants avec interface intuitive.",
    tags: ["HTML", "CSS", "JS"],
    link: "https://github.com/dountiojoseph/Time-Table",
  },
  {
    name: "Jewellery-Website",
    description: "Site e-commerce pour une bijouterie avec catalogue de produits elegant.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/dountiojoseph/Jewellery-Website",
  },
  {
    name: "Portfolio-v1",
    description: "Première version de mon portfolio personnel avec design moderne.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/dountiojoseph/Portfolio-v1",
  },
  {
    name: "Restaurant-App",
    description: "Application de restaurant avec menu interactif et système de réservation.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/dountiojoseph/Restaurant-App",
  },
  {
    name: "E-Commerce-Store",
    description: "Boutique en ligne complète avec gestion des produits et commandes.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/dountiojoseph/E-Commerce-Store",
  },
];

export const learningLanguages = [
  { name: "Python", progress: 15, color: "#3776AB", status: "En cours d'apprentissage" },
  { name: "Java", progress: 10, color: "#007396", status: "En cours d'apprentissage" },
  { name: "PostgreSQL", progress: 20, color: "#4479A1", status: "En cours d'apprentissage" },
  { name: "Docker", progress: 5, color: "#2496ED", status: "En cours d'apprentissage" },
  { name: "React Native", progress: 0, color: "#61DAFB", status: "À découvrir bientôt" },
  { name: "AWS", progress: 5, color: "#FF9900", status: "Cloud computing" },
];

export const testimonials = [
  {
    content: "Joseph est un développeur talented et passionné. Il a rapidement compris nos besoins et a livré un projet de qualité dans les délais impartis. Je recommande vivement ses services.",
    name: "Marie Dupont",
    role: "Cliente - Site E-commerce",
  },
  {
    content: "Travail exceptionnel ! Joseph fait preuve d'une grande rigueur professionnelle et d'une excellent communication tout au long du projet. Un plaisir de collaborer avec lui.",
    name: "Thomas Martin",
    role: "Mentor Technique",
  },
  {
    content: "Joseph a su transformer nos idées en une application web moderne et fonctionnelle. Son expertise technique et sa créativité ont fait la différence.",
    name: "Pierre Nguyen",
    role: "Co-Founder, Startup Locale",
  },
];

export const navItems = [
  { id: "home", label: "Accueil", icon: "Home" },
  { id: "about", label: "À propos", icon: "User" },
  { id: "services", label: "Services", icon: "Settings" },
  { id: "portfolio", label: "Portfolio", icon: "Briefcase" },
  { id: "github", label: "GitHub", icon: "Github" },
  { id: "languages", label: "Langages", icon: "Code" },
  { id: "testimonials", label: "Témoignages", icon: "MessageCircle" },
  { id: "contact", label: "Contact", icon: "Mail" },
];
