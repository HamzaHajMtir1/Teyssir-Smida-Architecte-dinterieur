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

/** Projects — 2 preview images each; full album on Google Drive */
export const projects = [
  {
    id: "1ere-annee",
    title: "1ère année",
    category: "Formation",
    year: "1ère année",
    description:
      "Travaux et projets réalisés en première année d'architecture d'intérieur.",
    images: [
      { src: "/image/gallery.jpg", alt: "Aperçu 1ère année" },
      { src: "/image/gallery1.jpg", alt: "Aperçu 1ère année 2" },
    ],
    driveUrl: "https://drive.google.com/drive/folders/1KepWDaw-ABEvPxV4C8dFNrkgmJrMFBsJ",
    placeholder: true,
  },
  {
    id: "2eme-annee",
    title: "2ème année",
    category: "Formation",
    year: "2ème année",
    description:
      "Travaux et projets réalisés en deuxième année d'architecture d'intérieur.",
    images: [
      { src: "/image/gallery2.jpg", alt: "Aperçu 2ème année" },
      { src: "/image/gallery3.jpg", alt: "Aperçu 2ème année 2" },
    ],
    driveUrl: "https://drive.google.com/drive/folders/16m9613grc4eEoPPzZ9hOh-o8UL2pc_1b",
    placeholder: true,
  },
  {
    id: "pfe",
    title: "PFE",
    category: "Diplôme",
    year: "PFE",
    description:
      "Projet de fin d'études — conception et présentation complète.",
    images: [
      { src: "/image/project.jpg", alt: "Aperçu PFE" },
      { src: "/image/project4.png", alt: "Aperçu PFE 2" },
    ],
    driveUrl: "https://drive.google.com/drive/folders/1pHn5gd3wNBrPyr9E-uL42rnLwZGkRIID",
    placeholder: true,
  },
  {
    id: "cafe",
    title: "Café",
    category: "Commercial",
    year: "Projet",
    description:
      "Aménagement d'un espace café — ambiance, circulation et mobilier.",
    images: [
      { src: "/image/living.jpg", alt: "Aperçu café" },
      { src: "/image/drowing.jpg", alt: "Aperçu café 2" },
    ],
    driveUrl: "https://drive.google.com/drive/folders/17PdjftskPTofnuutrZHm-PBE2QOBF2Z7",
    placeholder: true,
  },
  {
    id: "centre-coiffure",
    title: "Centre de coiffure",
    category: "Commercial",
    year: "Projet",
    description:
      "Conception d'un centre de coiffure — zones d'accueil, postes de travail et atmosphère.",
    images: [
      { src: "/image/gallery11.jpg", alt: "Aperçu centre de coiffure" },
      { src: "/image/gallery1123.jpg", alt: "Aperçu centre de coiffure 2" },
    ],
    driveUrl: "https://drive.google.com/drive/folders/1HxVbsV2qelVxZ9uuHGOFZa5sYcASHUpf",
    placeholder: true,
  },
  {
    id: "cuisine",
    title: "Cuisine",
    category: "Résidentiel",
    year: "Projet",
    description:
      "Aménagement cuisine — plans, matériaux et visualisation.",
    images: [
      { src: "/image/kitchen1.jpg", alt: "Aperçu cuisine" },
      { src: "/image/kitchen.png", alt: "Aperçu cuisine 2" },
    ],
    driveUrl: "https://drive.google.com/drive/folders/1NOnRYsUbvXQ1emYa6x4RL-4l41sZ1rTl",
    placeholder: true,
  },
  {
    id: "villa-1",
    title: "Villa 1",
    category: "Résidentiel",
    year: "Projet",
    description:
      "Aménagement intérieur d'une villa — espaces de vie et atmosphère.",
    images: [
      { src: "/image/gallery6.jpg", alt: "Aperçu villa 1" },
      { src: "/image/gallery7.jpg", alt: "Aperçu villa 1 — 2" },
    ],
    driveUrl: "https://drive.google.com/drive/folders/1eFE94LtZUmtwoFFwpFqX48agjsJ7A4Ny",
    placeholder: true,
  },
  {
    id: "villa-2",
    title: "Villa 2",
    category: "Résidentiel",
    year: "Projet",
    description:
      "Aménagement intérieur d'une villa — volumes, matériaux et lumière.",
    images: [
      { src: "/image/gallery8.jpg", alt: "Aperçu villa 2" },
      { src: "/image/gallery9.jpg", alt: "Aperçu villa 2 — 2" },
    ],
    driveUrl: "https://drive.google.com/drive/folders/1VaEgKIw-BuGuaqOqNW-_9FrMxKA7Qtxz",
    placeholder: true,
  },
  {
    id: "villa-3",
    title: "Villa 3",
    category: "Résidentiel",
    year: "Projet",
    description:
      "Aménagement intérieur d'une villa — conception et rendus.",
    images: [
      { src: "/image/gallery10.jpg", alt: "Aperçu villa 3" },
      { src: "/image/gallery12.jpg", alt: "Aperçu villa 3 — 2" },
    ],
    driveUrl: "https://drive.google.com/drive/folders/1cEXDmFUf0S197_cLMxwu9Tkd1EwNB20O",
    placeholder: true,
  },
];
