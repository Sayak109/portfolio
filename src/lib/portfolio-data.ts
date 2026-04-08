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

export const projectItems = [
  {
    title: "Pink Paws - E-commerce Platform",
    period: "Nov 2024 - Dec 2025",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Elasticsearch", "Next.js"],
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
    title: "Pink Paws - Service Booking Platform",
    period: "May 2025 - Dec 2025",
    techStack: ["Node.js", "Express.js", "Next.js", "MongoDB"],
    details: [
      "Engineered the backend for a dedicated pet grooming service booking platform, enabling users to browse, schedule, and manage grooming appointments for dogs and cats in real time.",
      "Designed and built the slot management and appointment scheduling system, handling booking conflicts, time-zone logic, and groomer availability in a reliable, scalable manner.",
      "Developed admin modules for grooming session management, service configuration, and customer records through a centralized operational dashboard.",
    ],
  },
  {
    title: "PAR Enterprise",
    period: "Jan 2026 - Mar 2026",
    techStack: ["Node.js", "Nest.js", "PostgreSQL", "Prisma ORM", "Next.js", "Cloudflare R2"],
    details: [
      "Built a full-stack headless CMS enabling admins to manage the client-side from a single panel by creating dynamic pages, sliders, and menus without code changes.",
      "Implemented rate limiting and brute-force protection on all authentication endpoints using Nest.js guards to secure admin access.",
      "Integrated Cloudflare R2 for scalable cloud storage of images and files, decoupling media management from the application server and reducing infrastructure costs.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Web Technologies",
    items: ["Node.js", "Express.js", "Nest.js", "React.js", "Next.js", "REST APIs", "JWT", "HTML", "CSS"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Prisma ORM"],
  },
  {
    title: "Developer Tools",
    items: ["VS Code", "Git", "GitHub", "Postman"],
  },
  {
    title: "Core Concepts",
    items: ["Data Structures & Algorithms", "OOPs", "DBMS"],
  },
] as const;

export const educationItems = [
  {
    title: "B.Tech - Computer Science & Engineering",
    school: "Brainware University",
    period: "2020 - 2024",
    details: ["CGPA: 8.65 / 10", "Percentage: 81%"],
  },
  {
    title: "12th Grade (Science)",
    school: "",
    period: "",
    details: ["73.4%"],
  },
  {
    title: "10th Grade",
    school: "",
    period: "",
    details: ["84.8%"],
  },
] as const;

export type ExperienceItem = (typeof experienceItems)[number];
