export const courseAreas = [
  {
    slug: "business-and-marketing",
    title: "Business and Marketing",
    icon: "office",
    description:
      "Explore courses in business strategy, entrepreneurship, digital marketing, analytics, and more to build a strong commercial foundation.",
  },
  {
    slug: "building-and-construction-trades",
    title: "Building and Construction Trades",
    icon: "tools",
    description:
      "Hands‑on training for construction management, carpentry, plumbing, electrical, and site safety across residential and commercial builds.",
  },
  {
    slug: "accounting-and-finance",
    title: "Accounting and Finance",
    icon: "bank",
    description:
      "Programs covering financial reporting, auditing, taxation, corporate finance, and fintech skills for modern finance roles.",
  },
  {
    slug: "information-and-communication-technology",
    title: "Information and Communication Technology",
    icon: "network",
    description:
      "Software engineering, data science, cybersecurity, networks, and cloud—develop practical, in‑demand ICT skills.",
  },
  {
    slug: "education-and-training",
    title: "Education and Training",
    icon: "graduation",
    description:
      "Early childhood, primary/secondary education, TESOL, instructional design, and vocational training pathways.",
  },
  {
    slug: "community-and-youth-services",
    title: "Community and Youth Services",
    icon: "people",
    description:
      "Social work, counseling, disability support, youth work, and community development to create positive impact.",
  },
  {
    slug: "environment-and-sustainability",
    title: "Environment and Sustainability",
    icon: "leaf",
    description:
      "Environmental science, sustainability management, renewable energy, and conservation programs.",
  },
  {
    slug: "screen-media-and-games",
    title: "Screen, Media and Games",
    icon: "media",
    description:
      "Film, television, digital media, animation, VFX, game design, and interactive content creation.",
  },
];

export function renderIcon(name) {
  const stroke = "#0f172a";
  switch (name) {
    case "office":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
        >
          <rect x="3" y="3" width="8" height="18" rx="1.5" />
          <rect x="13" y="8" width="8" height="13" rx="1.5" />
          <path d="M6 6h2M6 10h2M6 14h2M16 11h2M16 15h2" />
        </svg>
      );
    case "tools":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
        >
          <path d="M7 7l10 10M14 7l3-3 3 3-3 3zM4 20l5-5" />
        </svg>
      );
    case "bank":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
        >
          <path d="M3 10h18M5 10v8M9 10v8M15 10v8M19 10v8M3 18h18M12 4l8 4H4z" />
        </svg>
      );
    case "network":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="3" />
          <circle cx="4" cy="12" r="2" />
          <circle cx="20" cy="12" r="2" />
          <path d="M6 12h4M14 12h4" />
        </svg>
      );
    case "graduation":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
        >
          <path d="M2 9l10-5 10 5-10 5-10-5z" />
          <path d="M6 11v4c0 1.7 3.6 3 6 3s6-1.3 6-3v-4" />
        </svg>
      );
    case "people":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
        >
          <circle cx="8" cy="10" r="3" />
          <circle cx="16" cy="12" r="3" />
          <path d="M2 20c1.5-3 5-4 8-4M14 16c3 0 6 1 8 4" />
        </svg>
      );
    case "leaf":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
        >
          <path d="M20 4s-7 0-11 4-4 11-4 11 7 0 11-4 4-11 4-11z" />
        </svg>
      );
    case "media":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
        >
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M10 9l6 4-6 4V9z" />
        </svg>
      );
    default:
      return null;
  }
}
