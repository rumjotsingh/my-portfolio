export type ProjectStatus = "Production" | "Deployed" | "Completed" | "In Development";

export interface Project {
  id: string;
  name: string;
  icon: string;
  category: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  impact?: string[];
  architecture: string;
  challenges: string[];
  lessons: string[];
  image?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
  featured: boolean;
}

export const siteConfig = {
  name: "Rumjot Singh",
  title: "Frontend Engineer • Full Stack Developer • Product Builder",
  tagline:
    "Turning ideas into real web products — from polished interfaces to scalable full-stack applications used by real customers.",
  siteUrl: "https://rumjot.me",
  location: "Haryana, India",
  email: "rumjotsingh12345@gmail.com",
  linkedin: "https://www.linkedin.com/in/rumjot-singh-747129281/",
  github: "https://github.com/rumjotsingh",
  leetcode: "https://leetcode.com/u/Rumjot/",
  resumeUrl: "/rumjot.pdf",
  resumeFileName: "Rumjot_Singh_Resume.pdf",
  education: {
    degree: "B.Tech Computer Science Engineering",
    institution:
      "Seth Jai Parkash Mukand Lal Institute of Engineering and Technology",
    cgpa: "8.70",
    graduation: "2027",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const availabilityBadges = [
  "Open to Internships",
  "Open to Frontend Roles",
  "Open to Full Stack Roles",
];

export const heroTechBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "TailwindCSS",
  "ShadCN UI",
  "Express",
];

export const aboutContent = {
  intro:
    "I'm a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and AI-powered applications. I have experience building production-grade software used by 1000+ customers and managing platforms handling 1500+ bookings.",
  goals:
    "Aspiring Software Engineer focused on building products at scale — from SaaS CRM platforms to AI-powered applications that solve real-world problems.",
  interests:
    "Frontend architecture, Next.js optimization, component systems, SaaS product development, and full-stack engineering.",
};

export const highlightCards = [
  {
    title: "Production Experience",
    description:
      "Built CRM software serving 1000+ customers and 1500+ bookings at SortKaro.",
    icon: "code",
  },
  {
    title: "AI Builder",
    description:
      "Building intelligent workflows with OpenAI integrations, AI agents, and modern automation.",
    icon: "brain",
  },
  {
    title: "Problem Solver",
    description:
      "Reduced manual workflows by 90% and improved page load speed by 60%.",
    icon: "lightbulb",
  },
  {
    title: "Fast Learner",
    description:
      "500+ LeetCode problems solved. Quick to adopt new frameworks and ship fast.",
    icon: "zap",
  },
];

export const stats = [
  { label: "Projects Built", value: "12+", numeric: 12 },
  { label: "Customers Served", value: "1000+", numeric: 1000 },
  { label: "Bookings Managed", value: "1500+", numeric: 1500 },
  { label: "LeetCode Solved", value: "500+", numeric: 500 },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Redux", "TailwindCSS", "ShadCN UI", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "AI",
    skills: ["OpenAI", "AI Agents", "Prompt Engineering"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Postman", "Cloudinary", "Razorpay", "Cursor AI"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C++"],
  },
];

export const projects: Project[] = [
  {
    id: "sortkaro-crm",
    name: "SortKaro CRM Platform",
    icon: "layout-dashboard",
    category: "SaaS CRM",
    shortDescription: "Production CRM for customer & booking management",
    description:
      "Production-grade CRM platform used by internal teams to manage customers, bookings, and daily operations at SortKaro.",
    problem:
      "Manual customer and booking management was slow, error-prone, and couldn't scale with growing operations.",
    solution:
      "Built a full-featured CRM dashboard with reusable React components, optimized rendering, and automated workflows.",
    features: [
      "Customer management dashboard",
      "Booking workflow automation",
      "Razorpay payment integration",
      "Reusable component architecture",
      "Lazy loading & code splitting",
      "Role-based access control",
    ],
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "ShadCN UI", "Razorpay"],
    impact: [
      "1000+ customers managed",
      "1500+ bookings processed",
      "90% reduction in manual workflows",
      "60% improvement in page load speed",
    ],
    architecture:
      "Next.js frontend with component-driven architecture, REST API integration, memoized rendering, and modular folder structure for scalability.",
    challenges: [
      "Scaling UI for high-volume booking data",
      "Optimizing render performance across large dashboards",
      "Integrating secure payment flows",
    ],
    lessons: [
      "Component reusability dramatically speeds up feature delivery",
      "Performance optimization should be built in from day one",
      "Close collaboration with business teams improves product quality",
    ],
    image: "/images/sortkaro-crm-v2.png",
    status: "Production",
    featured: true,
  },
  {
    id: "autohood",
    name: "AUTOHOOD",
    icon: "car",
    category: "Marketplace Platform",
    shortDescription: "Full-stack automobile marketplace platform",
    description:
      "Production-ready automotive marketplace with multi-role authentication, dealer dashboards, and end-to-end vehicle buying experience.",
    problem:
      "Car buyers and dealers lacked a unified digital platform for listings, test drives, and transactions.",
    solution:
      "Built a full-stack marketplace with role-based dashboards for admins, dealers, and customers with secure payments.",
    features: [
      "Multi-role authentication",
      "Admin & dealer dashboards",
      "Vehicle listings management",
      "Test drive booking system",
      "Inventory & parts management",
      "Secure payment integration",
      "Order tracking",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    impact: [
      "End-to-end marketplace workflow",
      "Multi-dashboard architecture",
      "Production deployment on Vercel",
    ],
    architecture:
      "React/TypeScript frontend with Node.js/Express REST API, MongoDB for data persistence, and role-based routing for admin, dealer, and customer views.",
    challenges: [
      "Managing complex role-based permissions",
      "Building scalable inventory management",
      "Coordinating multi-step booking flows",
    ],
    lessons: [
      "Role-based architecture requires careful upfront planning",
      "Separating concerns between dashboards improves maintainability",
    ],
    image: "/images/autohood-v2.png",
    liveUrl: "https://auto-hood.vercel.app/",
    githubUrl: "https://github.com/rumjotsingh/AutoHood",
    status: "Deployed",
    featured: true,
  },
  {
    id: "wandurlust",
    name: "WANDURLUST",
    icon: "hotel",
    category: "Travel Platform",
    shortDescription: "Hotel discovery & booking platform inspired by Airbnb",
    description:
      "Full-stack hotel discovery platform with property listings, reviews, search filters, and cloud image uploads.",
    problem:
      "Travelers needed an intuitive platform to discover, compare, and book accommodations with trusted reviews.",
    solution:
      "Built an Airbnb-inspired platform with authentication, property listings, ratings, and Cloudinary-powered image management.",
    features: [
      "Property listings",
      "Authentication system",
      "Reviews & ratings",
      "Search & filtering",
      "Cloudinary image uploads",
      "Session management",
      "Responsive mobile UI",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Cloudinary"],
    impact: [
      "First full-stack project — foundation for backend skills",
      "Deployed on Render with live demo",
    ],
    architecture:
      "Server-rendered EJS views with Express.js backend, MongoDB Atlas for storage, Cloudinary for media, and session-based authentication.",
    challenges: [
      "Learning full-stack architecture from scratch",
      "Managing image uploads and storage",
      "Building responsive UI with Bootstrap",
    ],
    lessons: [
      "Starting with a complete full-stack project accelerates learning",
      "Session management is critical for user-facing apps",
    ],
    image: "/images/wandurlust-v2.png",
    liveUrl: "https://wandurlust.rumjot.me/",
    githubUrl: "https://github.com/rumjotsingh/WandurLust",
    status: "Deployed",
    featured: true,
  },
  {
    id: "my-zoom",
    name: "My Zoom",
    icon: "video",
    category: "Video Platform",
    shortDescription: "Real-time video conferencing application",
    description:
      "A Zoom-inspired video conferencing app with real-time communication features built with modern web technologies.",
    problem: "Need for accessible, browser-based video communication tools.",
    solution: "Built a real-time video chat platform with room management and modern UI.",
    features: ["Video conferencing", "Room management", "Real-time communication", "Modern UI"],
    tech: ["TypeScript", "React", "WebRTC", "Node.js"],
    architecture: "React frontend with WebRTC for peer connections and Node.js signaling server.",
    challenges: ["WebRTC connection reliability", "Cross-browser compatibility"],
    lessons: ["Real-time apps require careful state management"],
    liveUrl: "https://my-zoom-psi.vercel.app/",
    githubUrl: "https://github.com/rumjotsingh/my-zoom",
    status: "Deployed",
    featured: false,
  },
  {
    id: "linkdenclone",
    name: "LinkedIn Clone",
    icon: "users",
    category: "Social Platform",
    shortDescription: "Professional networking platform clone",
    description:
      "A LinkedIn-inspired social networking platform with profiles, connections, and feed functionality.",
    problem: "Learning social platform architecture and user interaction patterns.",
    solution: "Built a full-featured professional networking clone with modern React patterns.",
    features: ["User profiles", "Feed system", "Connections", "Post creation", "Responsive design"],
    tech: ["TypeScript", "React", "Next.js", "TailwindCSS"],
    architecture: "Next.js app with component-based architecture and API routes for data management.",
    challenges: ["Feed algorithm design", "Profile state management"],
    lessons: ["Social platforms need thoughtful UX for engagement"],
    liveUrl: "https://linkdenclone.vercel.app",
    githubUrl: "https://github.com/rumjotsingh/Linkdenclone",
    status: "Deployed",
    featured: false,
  },
  {
    id: "credmatrix",
    name: "CredMatrix",
    icon: "credit-card",
    category: "Fintech",
    shortDescription: "Credit and financial data management platform",
    description:
      "A financial platform for managing and visualizing credit-related data with a clean dashboard interface.",
    problem: "Complex financial data needs clear visualization and management tools.",
    solution: "Built a dashboard-focused fintech application with data visualization.",
    features: ["Financial dashboards", "Data visualization", "User management", "Responsive UI"],
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    architecture: "React dashboard with API-driven data layer and component-based visualization.",
    challenges: ["Presenting complex data clearly", "Dashboard performance"],
    lessons: ["Financial UIs demand clarity and trust"],
    liveUrl: "https://cred-matrix.vercel.app/",
    githubUrl: "https://github.com/rumjotsingh/CredMatrix",
    status: "Deployed",
    featured: false,
  },
  {
    id: "ecommerce",
    name: "E-Commerce Platform",
    icon: "shopping-cart",
    category: "E-Commerce",
    shortDescription: "Full-featured online shopping platform",
    description:
      "A complete e-commerce platform with product catalog, cart management, and checkout flow.",
    problem: "Businesses need affordable, customizable online storefronts.",
    solution: "Built a scalable e-commerce platform with product management and shopping cart.",
    features: ["Product catalog", "Shopping cart", "Checkout flow", "Responsive design"],
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    architecture: "React SPA with Express API and MongoDB for product and order management.",
    challenges: ["Cart state persistence", "Product search optimization"],
    lessons: ["E-commerce UX directly impacts conversion rates"],
    liveUrl: "https://ecommerce-one-green-34.vercel.app/",
    githubUrl: "https://github.com/rumjotsingh/Ecommerce",
    status: "Deployed",
    featured: false,
  },
  {
    id: "weather-app",
    name: "Weather App",
    icon: "cloud-sun",
    category: "Utility",
    shortDescription: "Global weather information application",
    description:
      "A weather application providing real-time weather data for locations worldwide with a clean interface.",
    problem: "Users need quick, reliable weather information for any location.",
    solution: "Built a weather app integrating external APIs with intuitive search and display.",
    features: ["Global weather data", "Location search", "Responsive UI", "API integration"],
    tech: ["JavaScript", "HTML", "CSS", "Weather API"],
    architecture: "Client-side JavaScript app consuming REST weather APIs with dynamic DOM updates.",
    challenges: ["API rate limiting", "Handling geolocation"],
    lessons: ["API integration is foundational for modern web apps"],
    liveUrl: "https://weather-app-theta-two-88.vercel.app/",
    githubUrl: "https://github.com/rumjotsingh/Weather-app",
    status: "Deployed",
    featured: false,
  },
  {
    id: "simonsays",
    name: "Simon Says",
    icon: "gamepad",
    category: "Game",
    shortDescription: "Interactive memory pattern game",
    description: "A classic Simon Says memory game built with JavaScript featuring progressive difficulty.",
    problem: "Creating engaging browser-based games to practice JavaScript fundamentals.",
    solution: "Built an interactive game with sound, animations, and score tracking.",
    features: ["Pattern matching", "Score tracking", "Progressive difficulty", "Sound effects"],
    tech: ["JavaScript", "HTML", "CSS"],
    architecture: "Vanilla JavaScript game loop with DOM manipulation and audio API.",
    challenges: ["Timing synchronization", "User feedback design"],
    lessons: ["Games are excellent for learning event-driven programming"],
    liveUrl: "https://simonsays-kappa-swart.vercel.app/",
    githubUrl: "https://github.com/rumjotsingh/simonsays",
    status: "Completed",
    featured: false,
  },
  {
    id: "country-flag",
    name: "Country Flag Quiz",
    icon: "globe",
    category: "Educational",
    shortDescription: "Interactive country flag identification game",
    description: "An educational quiz app for learning world flags with interactive gameplay.",
    problem: "Making geography learning engaging and interactive.",
    solution: "Built a quiz game with flag images, scoring, and progressive levels.",
    features: ["Flag identification", "Score system", "Multiple choice", "Responsive design"],
    tech: ["JavaScript", "HTML", "CSS"],
    architecture: "Client-side quiz application with dynamic question generation.",
    challenges: ["Image loading optimization", "Quiz randomization"],
    lessons: ["Educational apps benefit from immediate feedback loops"],
    liveUrl: "https://country-omega-nine.vercel.app/",
    githubUrl: "https://github.com/rumjotsingh/CountryFlag",
    status: "Completed",
    featured: false,
  },
  {
    id: "code-innovation",
    name: "Code Innovation",
    icon: "lightbulb",
    category: "Developer Tools",
    shortDescription: "Developer-focused innovation platform",
    description:
      "A platform showcasing coding innovations and developer resources with a modern interface.",
    problem: "Developers need a hub for sharing and discovering coding projects.",
    solution: "Built a developer platform with project showcases and resource management.",
    features: ["Project showcase", "Resource library", "Modern UI", "Responsive design"],
    tech: ["React", "TypeScript", "TailwindCSS"],
    architecture: "React SPA with component-based layout and Vercel deployment.",
    challenges: ["Content organization", "Performance with dynamic content"],
    lessons: ["Developer tools should prioritize clarity and speed"],
    liveUrl: "https://code-innovation.vercel.app",
    githubUrl: "https://github.com/rumjotsingh/Code-Innovation",
    status: "Deployed",
    featured: false,
  },
  {
    id: "code-arena",
    name: "CodeArena",
    icon: "code",
    category: "Coding Platform",
    shortDescription: "LeetCode-style coding platform with judge engine and dashboards",
    description:
      "A LeetCode-inspired coding platform with Google login, problem playlists, leaderboard rankings, dashboards, and an online judging workflow built around an open-source code box engine.",
    problem:
      "Competitive coding practice platforms need a focused editor experience, user accounts, and progress visibility that keeps learners engaged.",
    solution:
      "Built a LeetCode-style product with Google authentication, curated playlists, leaderboard tracking, and a dashboard-first learning flow around the online judge.",
    features: [
      "Google login",
      "Online code editor",
      "Open-source judge engine integration",
      "Problem playlists",
      "Leaderboard rankings",
      "User dashboard",
    ],
    tech: ["Next.js", "TypeScript", "Google Auth", "Monaco Editor", "Judge Engine"],
    impact: [
      "LeetCode-style practice experience",
      "Centralized coding dashboard",
      "Structured playlist-based learning",
    ],
    architecture:
      "Next.js application with authenticated user flows, playlist-driven problem organization, a browser-based code editor, and a judge integration layer for code evaluation.",
    challenges: [
      "Designing a smooth coding workflow inside the browser",
      "Keeping playlists and leaderboard data in sync",
      "Balancing editor usability with judge-engine constraints",
    ],
    lessons: [
      "Developer platforms succeed when the editing loop feels fast",
      "Progress visibility makes practice platforms more sticky",
    ],
    image: "/images/codearena-1.png",
    images: ["/images/codearena-1.png", "/images/codearena-2.png"],
    liveUrl: "https://leetcode-frontend-delta.vercel.app/",
    status: "Deployed",
    featured: true,
  },
  {
    id: "question-tracker",
    name: "Question Tracker",
    icon: "list-checks",
    category: "Productivity",
    shortDescription: "DSA question tracking and progress management tool",
    description:
      "A tool for tracking coding interview questions and DSA practice progress — aligned with LeetCode preparation.",
    problem: "Keeping track of solved problems and study progress across platforms is difficult.",
    solution: "Built a question tracker with progress visualization and categorization.",
    features: ["Question tracking", "Progress dashboard", "Category filtering", "Status management"],
    tech: ["React", "TypeScript", "TailwindCSS"],
    architecture: "React application with local state management and persistent tracking.",
    challenges: ["Data persistence", "Intuitive progress visualization"],
    lessons: ["Productivity tools should minimize friction"],
    liveUrl: "https://question-tracker-six.vercel.app",
    githubUrl: "https://github.com/rumjotsingh/question-tracker",
    status: "Deployed",
    featured: false,
  },
];

export const experience = [
  {
    type: "Internship",
    title: "Software Engineer Intern (Frontend)",
    company: "SortKaro",
    period: "May 2025 – Present",
    description:
      "Led redesign and development of the production CRM frontend. Built dashboards supporting 1000+ customers and 1500+ bookings. Reduced manual workflows by 90% and improved page load speed by 60%. Integrated Razorpay payments and built a reusable component system.",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "ShadCN UI", "Razorpay"],
  },
  {
    type: "Personal Project",
    title: "Full Stack Developer",
    company: "Independent",
    period: "2023 – Present",
    description:
      "Built 12+ production and deployed projects spanning marketplaces, SaaS platforms, e-commerce, and developer tools. Shipped applications serving real users with live demos on Vercel and Render.",
    tags: ["React", "Node.js", "MongoDB", "Next.js", "TypeScript"],
  },
];

export const achievements = [
  {
    title: "500+ LeetCode Problems",
    description:
      "Solved 500+ data structures and algorithms problems, building strong problem-solving fundamentals.",
    icon: "code",
  },
  {
    title: "3rd Rank Holder Twice",
    description:
      "Secured 3rd position twice in university semester examinations with CGPA of 8.70.",
    icon: "trophy",
  },
  {
    title: "₹5000 Science Quiz Winner",
    description:
      "Winner of state-level science quiz competition with ₹5000 prize.",
    icon: "medal",
  },
  {
    title: "1000+ Users Served",
    description:
      "Built production software actively used by 1000+ customers at SortKaro.",
    icon: "rocket",
  },
  {
    title: "90% Workflow Reduction",
    description:
      "Automated manual operations reducing workflow time by 90% through CRM development.",
    icon: "zap",
  },
  {
    title: "60% Performance Gain",
    description:
      "Improved application page load speed by 60% through optimization and code splitting.",
    icon: "certificate",
  },
];

export const professionalSnapshot = {
  roles: [
    "Full-Stack Developer",
    "AI Builder",
    "SaaS Product Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "OpenAI Integration Experience",
    "Database Design Experience",
    "API Development Experience",
  ],
  metrics: [
    { label: "Projects Built", value: "12+" },
    { label: "Tech Stack", value: "15+" },
    { label: "LeetCode Solved", value: "500+" },
    { label: "Deployment", value: "Production Ready" },
  ],
};

export const whyHireMe = [
  {
    title: "Product Mindset",
    description:
      "I think beyond code — focusing on user impact, business outcomes, and shipping features that matter.",
    icon: "target",
  },
  {
    title: "Production Experience",
    description:
      "Built software used by 1000+ real customers with measurable impact on operations and performance.",
    icon: "shield",
  },
  {
    title: "Strong Frontend Engineering",
    description:
      "Expert in React, Next.js, TypeScript with reusable component systems and performance optimization.",
    icon: "layout",
  },
  {
    title: "AI Development",
    description:
      "Building AI-powered features with OpenAI integrations, intelligent agents, and automation workflows.",
    icon: "brain",
  },
  {
    title: "Fast Learner",
    description:
      "500+ LeetCode problems, multiple deployed projects, and rapid adoption of new technologies.",
    icon: "zap",
  },
  {
    title: "Problem Solver",
    description:
      "Reduced manual workflows by 90% and consistently find elegant solutions to complex challenges.",
    icon: "lightbulb",
  },
];
