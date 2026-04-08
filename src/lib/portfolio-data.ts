export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
] as const;

export const profile = {
  name: "Sayak Panda",
  initials: "SP",
  role: "MERN Stack Developer",
  headline: "Building thoughtful web products with clean code, sharp UI, and product-first execution.",
  shortBio:
    "This portfolio is designed as a polished first-pass showcase for Sayak Panda's work, experience, and technical range across modern full-stack web development.",
  availability: "Open to internships, freelance work, and full-time opportunities.",
  location: "India",
};

export const heroStats = [
  { label: "Core stack", value: "MongoDB, Express, React, Node" },
  { label: "Focus", value: "Full-stack products and clean UX" },
  { label: "Current stage", value: "Portfolio foundation in active build" },
] as const;

export const aboutPoints = [
  "I enjoy turning ideas into production-ready interfaces that feel fast, clear, and reliable.",
  "My process leans on strong frontend structure, practical backend design, and components that are easy to extend.",
  "This version of the portfolio keeps a single visual language across every section so later page-specific redesigns can be layered in cleanly.",
] as const;

export const experienceItems = [
  {
    title: "Portfolio and Product-Focused MERN Development",
    period: "Current focus",
    description:
      "Working across responsive UI, reusable components, application structure, and end-to-end feature thinking for modern web experiences.",
    highlights: [
      "Reusable page systems and landing experiences",
      "Next.js and React-based interface development",
      "Full-stack thinking from visuals to delivery",
    ],
  },
  {
    title: "Independent Project Building",
    period: "Selected work",
    description:
      "Shipping project ideas that blend business context, structured frontends, and practical web architecture.",
    highlights: [
      "Product presentation and conversion-aware layouts",
      "Brand-aligned interfaces for service businesses",
      "Scalable section design for future feature growth",
    ],
  },
] as const;

export const projects = [
  {
    name: "Pink Paws",
    url: "https://www.pinkpaws.co.in",
    summary:
      "A branded web presence for Pink Paws, designed to highlight the service, business identity, and customer-facing experience.",
    tags: ["Brand Website", "Responsive UI", "Frontend Delivery"],
  },
  {
    name: "Pink Paws Grooming",
    url: "https://grooming.pinkpaws.co.in",
    summary:
      "A grooming-focused experience under the Pink Paws ecosystem with a more service-specific presentation flow.",
    tags: ["Service Landing", "User Journey", "Visual Consistency"],
  },
  {
    name: "Altis PAR",
    url: "https://par.altisinfonet.in/",
    summary:
      "A business-facing web experience that points toward structured information delivery and practical product communication.",
    tags: ["Product Interface", "Information Design", "Frontend Build"],
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Application Structure", "Authentication Flows"],
  },
  {
    title: "Data and Delivery",
    items: ["MongoDB", "Git", "UI Composition", "Component Reuse", "Deployment Readiness"],
  },
] as const;

export const educationItems = [
  {
    title: "Academic Background",
    description:
      "Education details from the resume will be slotted into this section cleanly once we map every line from the PDF into structured content.",
  },
  {
    title: "Continuous Learning",
    description:
      "The portfolio is already arranged to support certifications, coursework, hackathons, and specialized training as separate cards.",
  },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
] as const;

export const contactPrompts = [
  "Need a modern portfolio, landing page, or product UI?",
  "Want to collaborate on a React or Next.js build?",
  "Looking for someone who can carry design intent into code cleanly?",
] as const;
