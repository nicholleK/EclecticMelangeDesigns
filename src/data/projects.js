// Central project data — used by the Designs gallery and each project detail page.
// TODO: replace the placeholder copy, clients, and years with real case-study content.

export const PROJECTS = [
  {
    slug: "lumen-loft",
    title: "Lumen Loft",
    category: "Interior",
    year: "2025",
    client: "Private residence",
    image: "/Images/Carousel/kam-idris-_HqHX3LBN18-unsplash (1).jpg",
    large: true,
    services: ["Interior Design", "3D Visualization", "Furniture Sourcing"],
    overview:
      "A warm, light-led renovation of a city loft — balancing raw architecture with soft, tactile living spaces.",
    challenge:
      "The client wanted an open, airy home that still felt intimate at night. We reworked the lighting plan and layered natural materials to give the space two distinct moods.",
    outcome:
      "A flexible interior that shifts from bright and social by day to calm and golden by evening.",
    gallery: [
      "/Images/Carousel/kam-idris-_HqHX3LBN18-unsplash (1).jpg",
      "/Images/ari-shojaei-paXwi9ewKOI-unsplash.jpg",
      "/Images/clay-banks-UEhjiKh63Ek-unsplash.jpg",
    ],
  },
  {
    slug: "prace-app",
    title: "Práçe App",
    category: "Web & App",
    year: "2025",
    client: "Práçe (startup)",
    image: "/Images/kobu-agency-3sszEuAA_Ks-unsplash.jpg",
    services: ["UX/UI Design", "Prototyping", "Design System"],
    overview:
      "A productivity app for creative teams — designed around focus, flow, and a distinctly human tone.",
    challenge:
      "Turning a broad feature set into a calm, uncluttered interface that new users could pick up in minutes.",
    outcome:
      "A cohesive design system and prototype that carried the product from concept to investor demo.",
    gallery: [
      "/Images/kobu-agency-3sszEuAA_Ks-unsplash.jpg",
      "/Images/Carousel/kelly-sikkema-io0ZLYbu31s-unsplash.jpg",
    ],
  },
  {
    slug: "mare-brand",
    title: "Maré Brand",
    category: "Branding",
    year: "2024",
    client: "Maré",
    image: "/Images/rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash.jpg",
    services: ["Brand Identity", "Logo Design", "Art Direction"],
    overview:
      "A coastal lifestyle brand identity built on movement, texture, and a hand-crafted colour story.",
    challenge:
      "Creating a mark that felt both artisanal and scalable across packaging, social, and print.",
    outcome:
      "A flexible identity system that reads as premium yet approachable.",
    gallery: [
      "/Images/rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash.jpg",
      "/Images/Carousel/anders-jilden-Sc5RKXLBjGg-unsplash.jpg",
    ],
  },
  {
    slug: "golden-hour",
    title: "Golden Hour",
    category: "Photography",
    year: "2025",
    client: "Editorial series",
    image: "/Images/Carousel/vinicius-amnx-amano-OHPdgstNFGs-unsplash.jpg",
    services: ["Art Direction", "Photography", "Retouching"],
    overview:
      "A colour-drenched photography series exploring light, texture, and material in motion.",
    challenge:
      "Capturing depth and richness of colour without losing the subtlety of natural light.",
    outcome:
      "A striking set of images used across the studio's editorial and social channels.",
    gallery: [
      "/Images/Carousel/vinicius-amnx-amano-OHPdgstNFGs-unsplash.jpg",
      "/Images/Carousel/rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash.jpg",
    ],
  },
  {
    slug: "terra-studio",
    title: "Terra Studio",
    category: "Interior",
    year: "2024",
    client: "Terra Studio",
    image: "/Images/Carousel/jonas-jacobsson-2xaF4TbjXT0-unsplash.jpg",
    large: true,
    services: ["Interior Design", "Space Planning", "Styling"],
    overview:
      "A creative studio and showroom designed to double as a working space and a brand statement.",
    challenge:
      "Designing one space that had to photograph beautifully and function for daily creative work.",
    outcome:
      "A versatile, editorial-worthy interior that clients love to shoot in.",
    gallery: [
      "/Images/Carousel/jonas-jacobsson-2xaF4TbjXT0-unsplash.jpg",
      "/Images/Carousel/anders-jilden-Sc5RKXLBjGg-unsplash.jpg",
    ],
  },
  {
    slug: "vex-poster",
    title: "Vex Poster",
    category: "Branding",
    year: "2024",
    client: "Vex Festival",
    image: "/Images/Carousel/anders-jilden-Sc5RKXLBjGg-unsplash.jpg",
    services: ["Event Branding", "Poster Design", "Social Kit"],
    overview:
      "A bold event identity and poster campaign for an independent arts festival.",
    challenge:
      "Standing out in a crowded event landscape while staying true to the festival's indie spirit.",
    outcome:
      "A recognisable campaign that lifted ticket sales and social engagement.",
    gallery: [
      "/Images/Carousel/anders-jilden-Sc5RKXLBjGg-unsplash.jpg",
      "/Images/Carousel/vinicius-amnx-amano-OHPdgstNFGs-unsplash.jpg",
    ],
  },
  {
    slug: "wireframe-kit",
    title: "Wireframe Kit",
    category: "Web & App",
    year: "2024",
    client: "Internal product",
    image: "/Images/Carousel/kelly-sikkema-io0ZLYbu31s-unsplash.jpg",
    services: ["UX Design", "Wireframing", "Documentation"],
    overview:
      "A reusable wireframing kit that sped up early-stage product design for the studio.",
    challenge:
      "Balancing flexibility with consistency so the kit worked across very different projects.",
    outcome:
      "A living toolkit that cut concept-to-prototype time significantly.",
    gallery: ["/Images/Carousel/kelly-sikkema-io0ZLYbu31s-unsplash.jpg"],
  },
  {
    slug: "atelier-portrait",
    title: "Atelier Portrait",
    category: "Photography",
    year: "2023",
    client: "Atelier collective",
    image: "/Images/annie-spratt-P_oXsnL4Hec-unsplash.jpg",
    services: ["Portrait Photography", "Art Direction"],
    overview:
      "An intimate portrait series celebrating makers and their craft.",
    challenge:
      "Capturing personality and process in a single, quiet frame.",
    outcome:
      "A warm, human series used across the collective's website and press.",
    gallery: ["/Images/annie-spratt-P_oXsnL4Hec-unsplash.jpg"],
  },
];

export const CATEGORIES = [
  "All",
  "Interior",
  "Web & App",
  "Branding",
  "Photography",
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
