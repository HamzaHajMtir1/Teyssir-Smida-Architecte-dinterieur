export const profile = {
  name: "Teyssir Smida",
  title: "Architecte d'intérieur",
  email: "teyssirsmida96@gmail.com",
  phone: "+216 92 310 499",
  phoneHref: "tel:+21692310499",
  emailHref: "mailto:teyssirsmida96@gmail.com",
  location: "Tunisie",
  bio: "Architecte d'intérieur diplômée, titulaire d'un Master de recherche en Théories de la création. Formée en conception et modélisation 2D/3D, aménagement d'espaces résidentiels et commerciaux et traitement graphique. Mes expériences acquises lors de stages professionnels et pédagogiques m'ont permis de développer mes compétences en conception, suivi de projets, présentation visuelle ainsi qu'en enseignement et transmission des connaissances.",
  shortBio:
    "Je conçois des espaces résidentiels et commerciaux — du plan technique au rendu 3D — avec une attention particulière aux matériaux, au mobilier et à la présentation visuelle.",
};

export const skills = {
  conception: [
    "AutoCAD, 3ds Max, SketchUp",
    "Conception d'espaces résidentiels et commerciaux",
    "Plans d'aménagement, choix des matériaux et du mobilier",
    "Perspectives et croquis",
    "Gestion et suivi de projets d'aménagement intérieur",
  ],
  graphique: ["Photoshop", "Illustrator"],
  bureautique: ["Word", "Excel", "PowerPoint"],
  pedagogie: "Sens pédagogique et capacité à transmettre les connaissances",
  langues: [
    { name: "Arabe", level: "Maternelle" },
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Intermédiaire" },
    { name: "Italien", level: "Débutant" },
  ],
};

export const education = [
  {
    id: "master",
    period: "2026",
    title: "Master de recherche — Théories de la création",
    school: "Institut Supérieur des Beaux-Arts de Nabeul",
  },
  {
    id: "diplome",
    period: "2023",
    title: "Diplôme en Design d'Intérieur — Architecture d'intérieur",
    school: "Institut Supérieur des Arts et Métiers de Kairouan (ISAMK)",
  },
  {
    id: "bac",
    period: "2020",
    title: "Bac scientifique (spécialité mathématiques)",
    school: "Bekalta",
  },
];

export const diplomas = [
  "Diplôme en Marketing Digital",
  "Diplôme en Photoshop et Illustrator",
  "Diplôme en AutoCAD 2D et 3D",
];

export const certificates = [
  "Certificat de participation aux ateliers de recherche du Forum ÉcoSophia 2026",
  "Certificat de Team Building",
  "Certificat de Graphic Design",
  "Certificat de Prise de Parole en Public",
  "Certificat de Leadership et Intégration dans la Vie Associative",
  "Certificat de participation au SPRING 2022 (ISAMK)",
  "Certificat de participation à un colloque, workshops et expositions (ISAMK)",
];

export const experiences = [
  {
    id: "creative-design",
    role: "Stagiaire en architecture d'intérieur",
    company: "Bureau de décoration « Creative Design »",
    place: "Sousse",
    period: "17/07/2023 — 01/09/2023",
    duration: "2 mois",
    tasks: [
      "Élaboration de plans d'aménagement et de plans techniques (coupes, élévations)",
      "Réalisation de bordereaux quantitatifs",
      "Organisation des prises de mesures sur site et création de plans techniques sous supervision",
      "Réalisation de rendus 3D pour la visualisation des projets",
      "Traitement d'images et de plans avec Photoshop pour les présentations finales",
      "Préparation de présentations visuelles clients (croquis, planches de matériaux, échantillons)",
      "Suivi de chantier pour s'assurer du respect de la conception",
      "Assistance à la conception de projets pour résidences privées et bureaux",
      "Recherche de tendances décoratives pour intégrer des styles actuels",
    ],
  },
  {
    id: "daridesign",
    role: "Stagiaire en architecture d'intérieur",
    company: "Bureau « Daridesign »",
    place: "Tebolba — Bekalta",
    period: "15/02/2023 — 26/05/2023",
    duration: "3 mois",
    tasks: [
      "Assistance à la conception de projets pour des résidences privées et des bureaux professionnels",
      "Réalisation de recherches de tendances pour intégrer des styles actuels dans les propositions de décoration",
      "Préparation de présentations visuelles destinées aux clients, incluant des croquis, des planches de matériaux et des échantillons",
      "Organisation des prises de mesure sur site et création de plans techniques sous la supervision de la décoratrice principale",
    ],
  },
];

/** Placeholder projects until real photos & PDFs are provided */
export const projects = [
  {
    id: "residence-contemporaine",
    title: "Résidence contemporaine",
    category: "Résidentiel",
    year: "2023",
    description:
      "Aménagement d'un salon et d'espaces de vie — plans, matériaux et visualisation 3D. Contenu provisoire en attendant vos images et PDF.",
    images: [
      { src: "/image/living.jpg", alt: "Placeholder salon" },
      { src: "/image/drowing.jpg", alt: "Placeholder pièce de vie" },
    ],
    pdf: null,
    placeholder: true,
  },
  {
    id: "cuisine-ouverte",
    title: "Cuisine ouverte",
    category: "Résidentiel",
    year: "2023",
    description:
      "Étude d'aménagement cuisine — circulations, mobilier et rendu. Images et dossier PDF à remplacer.",
    images: [
      { src: "/image/kitchen1.jpg", alt: "Placeholder cuisine" },
      { src: "/image/kitchen.png", alt: "Placeholder cuisine 2" },
    ],
    pdf: null,
    placeholder: true,
  },
  {
    id: "suite-parentale",
    title: "Suite parentale",
    category: "Résidentiel",
    year: "2023",
    description:
      "Conception d'une chambre et d'un espace nuit — atmosphère, matériaux, éclairage. Visuels temporaires.",
    images: [
      { src: "/image/badroom.jpg", alt: "Placeholder chambre" },
      { src: "/image/project3.jpg", alt: "Placeholder chambre 2" },
    ],
    pdf: null,
    placeholder: true,
  },
  {
    id: "bureau-professionnel",
    title: "Bureau professionnel",
    category: "Commercial",
    year: "2023",
    description:
      "Aménagement d'un espace de travail — ergonomie, planches matériaux et présentation client. PDF à venir.",
    images: [
      { src: "/image/project2.jpg", alt: "Placeholder bureau" },
      { src: "/image/gallery11.jpg", alt: "Placeholder bureau 2" },
    ],
    pdf: null,
    placeholder: true,
  },
];
