export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const profile = {
  name: "Sayak Panda",
  initials: "Sayak Panda",
  role: "MERN Stack Developer",
  headline: "Results-driven MERN Stack Developer building production-grade web applications.",
  shortBio:
    "Results-driven MERN Stack Developer with hands-on experience building and scaling production-grade web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL. Proven ability to design high-performance backend architectures, integrate third-party payment gateways and logistics APIs, and deliver responsive, user-centric frontends.",
  availability: "",
  email: "sayakpanda123@gmail.com",
  phone: "+91 8670036964",
  resumeDriveUrl: "https://drive.google.com/file/d/1p3SrvjyjO1JR1CpTII5FHMw7vma0wVQZ/view",
  resumeDownloadUrl: "/Sayak_Panda_Resume.pdf",
  location: "India",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sayak-panda-ba0859263/" },
  { label: "GitHub", href: "https://github.com/Sayak109" },
] as const;

export const aboutStats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "6", label: "Projects Delivered" },
  { value: "1,000+", label: "Users Secured" },
  { value: "10+", label: "Technologies" },
] as const;

export const experienceItems = [
  {
    start: "Nov 2024",
    end: "Mar 2026",
    location: "Kolkata, India",
    company: "Altis Infonet Pvt Ltd",
    logoSrc: "/experience1_logo.png",
    role: "MERN Stack Developer",
    employmentType: "Full-time",
    summary:
      "Led roughly 80% of the backend architecture across production MERN applications, delivering secure REST APIs, payment and logistics integrations, responsive dashboards, and a 20% database performance improvement.",
    ctaLabel: "Click to view details",
    details: [
      "Designed and implemented 80% of a scalable backend architecture using Node.js, Express.js, MongoDB, and PostgreSQL, ensuring high availability, clean data flow, and optimal performance across services.",
      "Built and maintained RESTful APIs powering core business modules including product management, order lifecycle, user authentication, and analytics dashboards.",
      "Developed responsive frontend modules and interactive dashboards using React.js and Next.js, improving client-side performance and user experience.",
      "Integrated Razorpay and PayPal payment gateways end-to-end, implementing webhook event handling for real-time payment confirmation, automated refund flows, and tamper-proof transaction processing.",
      "Connected multiple third-party services including WhatsApp Business API, email notification systems, DTDC, and Shiprocket to automate customer communication and streamline logistics workflows across projects.",
      "Implemented JWT-based authentication with role-based access control, protecting application endpoints and managing secure access for 1,000+ registered user accounts.",
      "Boosted database performance by 20% through targeted query optimization, strategic indexing, and schema restructuring, while partnering with QA to resolve critical production bugs and maintain release quality.",
    ],
  },
] as const;

export type ProjectIconKey = "store" | "calendar" | "layout";

export interface ProjectItem {
  id: number;
  shortTitle: string;
  title: string;
  period: string;
  summary: string;
  role: string;
  category: string;
  iconKey: ProjectIconKey;
  logoSrc?: string;
  relatedIds: readonly number[];
  energy: number;
  techStack: readonly string[];
  details: readonly string[];
  sourceUrl?: string;
  liveUrl?: string;
}

export const projectItems = [
  {
    id: 1,
    shortTitle: "Pink Paws",
    title: "Pink Paws",
    period: "Nov 2024 - Dec 2025",
    summary:
      "Scalable pet-commerce platform combining intelligent search, secure payments, wallet flows, automated logistics, and a role-based admin workspace.",
    role: "Backend Developer & Architect",
    category: "E-commerce",
    iconKey: "store",
    logoSrc: "/pinkpaws_logo.png",
    relatedIds: [2, 3],
    energy: 96,
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Elasticsearch", "JWT", "DTDC", "Firebase", "Next.js"],
    liveUrl: "https://www.pinkpaws.co.in/",
    details: [
      "Architected and optimized the backend infrastructure for a production pet e-commerce platform with Elasticsearch-powered search, instant results, fuzzy matching, and relevance-ranked filtering.",
      "Integrated Razorpay payment gateway with secure webhook handling for real-time payment confirmation, refund processing, and transaction status updates.",
      "Built a Gift Card and Wallet system enabling users to redeem codes, accumulate store credits, and manage transaction history.",
      "Integrated DTDC courier API for automated order dispatch, shipment tracking, and live delivery status updates.",
      "Implemented Firebase Cloud Messaging for real-time notifications covering order updates, promotions, and personalized alerts across mobile and web users.",
      "Built a full-featured Admin Dashboard with role-based access control for product listings, order management, user administration, and sales analytics.",
    ],
  },
  {
    id: 2,
    shortTitle: "Pink Paws Grooming",
    title: "Pink Paws Grooming",
    period: "May 2025 - Dec 2025",
    summary:
      "Real-time grooming booking platform with reliable slot orchestration, groomer availability handling, and centralized service operations.",
    role: "Backend Developer",
    category: "Service Booking",
    iconKey: "calendar",
    logoSrc: "/pinkpaws_logo.png",
    relatedIds: [1, 3],
    energy: 88,
    techStack: ["Node.js", "Express.js", "Next.js", "MongoDB", "JWT", "Microservice", "Razorpay"],
    liveUrl: "https://grooming.pinkpaws.co.in/",
    details: [
      "Engineered the backend for a dedicated pet grooming service booking platform, enabling users to browse, schedule, and manage grooming appointments for dogs and cats in real time.",
      "Designed and built the slot management and appointment scheduling system, handling booking conflicts, time-zone logic, and groomer availability in a reliable, scalable manner.",
      "Developed admin modules for grooming session management, service configuration, and customer records through a centralized operational dashboard.",
    ],
  },
  {
    id: 3,
    shortTitle: "PAR Enterprise",
    title: "PAR Enterprise",
    period: "Jan 2026 - Mar 2026",
    summary:
      "Secure headless CMS that lets teams manage dynamic pages, media, and navigation from one admin panel.",
    role: "Lead Backend Developer & Architect",
    category: "Headless CMS",
    iconKey: "layout",
    logoSrc: "/par_logo.png",
    relatedIds: [1, 2],
    energy: 84,
    techStack: ["Node.js", "Nest.js", "PostgreSQL", "Prisma ORM", "JWT", "Next.js", "Cloudflare R2"],
    liveUrl: "https://par.altisinfonet.in/",
    details: [
      "Built a full-stack headless CMS enabling admins to manage the client-side from a single panel by creating dynamic pages, sliders, and menus without code changes.",
      "Implemented rate limiting and brute-force protection on all authentication endpoints using Nest.js guards to secure admin access.",
      "Integrated Cloudflare R2 for scalable cloud storage of images and files, decoupling media management from the application server and reducing infrastructure costs.",
    ],
  },
  {
    id: 4,
    shortTitle: "FinMitra",
    title: "FinMitra",
    period: "Nov 2025 - Feb 2026",
    summary:
      "SaaS-based agent CRM platform built for managing financial product records, recurring subscriptions, secure APIs, and scalable document storage.",
    role: "Backend Developer & Architect",
    category: "SaaS Platform",
    iconKey: "layout",
    logoSrc: "/finmitra_logo.png",
    relatedIds: [5, 6],
    energy: 89,
    techStack: ["Nest.js", "Express.js", "Prisma ORM", "Razorpay", "Cloudflare R2", "Redis", "JWT", "Rate Limiting", "REST APIs", "Firebase"],
    liveUrl: "",
    details: [
      "Designed the backend architecture for a SaaS-based agent CRM platform that helps agents manage customer financial product records across loans, insurance, fixed deposits, and real estate services.",
      "Implemented subscription-based access using Razorpay recurring billing APIs to support controlled plan activation and recurring monetization workflows.",
      "Integrated Cloudflare R2 for scalable document storage and delivery across customer records, uploaded documents, and platform assets.",
      "Secured platform APIs using authentication guards and rate-limiting strategies to harden access control and protect high-traffic endpoints.",
      "Successfully deployed the application and production backend infrastructure, ensuring the platform was stable, accessible, and ready for real-world agent operations.",
    ],
  },
  {
    id: 5,
    shortTitle: "Yumdut",
    title: "Yumdut | Era shop",
    period: "Aug 2025 - Nov 2025",
    summary:
      "Multi-vendor fashion commerce platform with seller onboarding, reels-based discovery, payment flows, logistics integrations, and secure admin operations.",
    role: "Backend Developer & Architect",
    category: "E-commerce",
    iconKey: "store",
    logoSrc: "/yumdut-logo.webp",
    relatedIds: [4, 6],
    energy: 91,
    techStack: ["Nest.js", "Express.js", "Next.js", "Razorpay", "Shiprocket", "JWT", "RBAC", "REST APIs", "Firebase",],
    liveUrl: "https://yumdut.com/",
    details: [
      "Designed and developed backend services for a multi-vendor fashion e-commerce platform that enables sellers to onboard and manage products dynamically.",
      "Implemented reels-based product discovery with hashtag tagging and direct product linking to create a more engaging content-led shopping experience.",
      "Integrated Razorpay payment workflows and Shiprocket logistics APIs to streamline order processing, fulfillment, and delivery operations.",
      "Built secure admin modules for managing sellers, products, and platform operations through role-based access control.",
      "Successfully deployed the application and backend services, helping the platform transition smoothly from development to a stable live environment for everyday usage.",
    ],
  },
  {
    id: 6,
    shortTitle: "PremiumInRupees",
    title: "PremiumInRupees",
    period: "Mar 2025 - Jul 2025",
    summary:
      "Digital product marketplace supporting multi-flow payments, admin approval operations, automated delivery, and secure scalable commerce APIs.",
    role: "Backend Developer & Architect",
    category: "Digital Marketplace",
    iconKey: "store",
    logoSrc: "/premiuminrupees_logo.webp",
    relatedIds: [4, 5],
    energy: 87,
    techStack: ["Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "Razorpay", "PayPal"],
    liveUrl: "https://premiuminrupees.com/",
    details: [
      "Developed the backend architecture for a digital product marketplace supporting Razorpay, PayPal, and manual bank transfer verification workflows.",
      "Implemented admin-controlled order approval flows to support payment review and operational verification before fulfillment.",
      "Automated email-based credential delivery after payment confirmation to streamline digital order fulfillment.",
      "Designed secure authentication flows and scalable REST APIs using Prisma ORM and PostgreSQL.",
    ],
  },
] as const satisfies readonly ProjectItem[];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "SQL", "HTML/CSS"],
  },
  {
    title: "Web Technologies",
    items: ["Node.js", "Express.js", "Nest.js", "REST APIs", "JWT", "React.js", "Next.js", "Material-UI"],
  },
  {
    title: "Databases & Caching",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Prisma ORM", "Supabase"],
  },
  {
    title: "Developer Tools",
    items: ["VS Code", "Git & GitHub", "Postman", "ChatGPT Codex", "Cursor AI", "Claude Code"],
  },
  {
    title: "Core Concepts",
    items: ["Data Structures & Algorithms", "OOP", "DBMS"],
  },
] as const;

export const educationItems = [
  {
    start: "Aug 2020",
    end: "Jul 2024",
    location: "Barasat, West Bengal",
    school: "Brainware University",
    title: "Bachelors in Technology (B.Tech)",
    department: "Computer Science & Engineering",
    performance: "CGPA 8.65 / 10 • 81%",
    highlights: ["C", "Java", "Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP"],
  },
  {
    start: "Jun 2019",
    end: "Jul 2020",
    location: "Nandigram, West Bengal, India",
    school: "Debipur Milan Vidyapith",
    title: "Class XII (Senior Secondary)",
    department: "West Bengal Council of Higher Secondary Education (WBCHSE)",
    performance: "73.4%",
    highlights: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    start: "Jan 2017",
    end: "May 2018",
    location: "Nandigram, West Bengal, India",
    school: "Debipur Milan Vidyapith",
    title: "Class X (Secondary)",
    department: "West Bengal Board of Secondary Education (WBBSE)",
    performance: "84.8%",
    highlights: [],
  },
] as const;

export type ExperienceItem = (typeof experienceItems)[number];
export type PortfolioProjectItem = (typeof projectItems)[number];
export type EducationItem = (typeof educationItems)[number];
