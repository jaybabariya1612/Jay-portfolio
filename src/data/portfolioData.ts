import { Project, Experience, Education, Certification, SkillCategory, ServiceItem, FAQItem, AchievementItem } from '../types';

export const getAssetUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};

export const personalInfo = {
  name: "Jay Babariya",
  role: "Full Stack .NET & React Developer",
  summary: "Full Stack .NET Developer with around 2 years of professional experience building web applications and backend systems using C#, ASP.NET (MVC/Core), ASP.NET Core Web API, SQL Server and React.js. Skilled in developing RESTful APIs with Repository/Service architecture, stored procedures, SignalR real-time features and JWT authentication, along with responsive interfaces using HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS and jQuery. Also experienced in C# console applications, Windows Services and WinForms desktop systems with SQL Server, Crystal Reports and QuickBooks integration.",
  location: "Ahmedabad, Gujarat, India — 382350",
  email: "jaybabariya01@gmail.com",
  phone: "+91 9408271133",
  status: "Available for Full-Time & Freelance",
  resumeUrl: getAssetUrl("Jay's Resume.pdf"),
  avatar: getAssetUrl("images/Jay_Babariya_Profile_Picture.jpg"),
  logo: getAssetUrl("images/JB.png"),
  socials: {
    github: "https://github.com/jaybabariya1612",
    linkedin: "https://www.linkedin.com/in/jay-babariya-81564b357",
    twitter: "https://x.com/JayBabariya18",
    instagram: "https://www.instagram.com/jaybabariya_01",
    email: "mailto:jaybabariya01@gmail.com",
    phone: "tel:+919408271133"
  },
  stats: [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Production & Client Projects", value: 12, suffix: "+" },
    { label: "Backend APIs & Microservices", value: 35, suffix: "+" },
    { label: "Code Commits & Repos", value: 250, suffix: "+" }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend Development",
    subtitle: "Robust architectures & high-throughput APIs",
    color: "#6C63FF",
    icon: "Server",
    skills: [
      { name: "C#", highlight: true },
      { name: "ASP.NET Core Web API", highlight: true },
      { name: "ASP.NET MVC", highlight: true },
      { name: "RESTful APIs", highlight: true },
      { name: "Repository & Service Pattern", highlight: true },
      { name: "JWT Authentication" },
      { name: "SignalR (Real-Time)" },
      { name: "DTO Architecture" },
      { name: "Entity Framework Core" },
      { name: "Node.js & Express" }
    ]
  },
  {
    category: "Frontend Development",
    subtitle: "Modern, responsive & reactive user interfaces",
    color: "#00D4FF",
    icon: "Layout",
    skills: [
      { name: "React.js", highlight: true },
      { name: "TypeScript / JavaScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5 & Modern CSS3" },
      { name: "Bootstrap 5" },
      { name: "Razor Views" },
      { name: "jQuery / AJAX" },
      { name: "Flexbox & CSS Grid" },
      { name: "Mobile-First Design" },
      { name: "State Management" }
    ]
  },
  {
    category: "Database & Storage",
    subtitle: "Relational modeling, procedures & optimization",
    color: "#00FFB3",
    icon: "Database",
    skills: [
      { name: "Microsoft SQL Server (MSSQL)", highlight: true },
      { name: "SSMS", highlight: true },
      { name: "Stored Procedures & Triggers", highlight: true },
      { name: "Query Optimization & Indexing" },
      { name: "ADO.NET" },
      { name: "Database Schema Design" },
      { name: "Cloudflare R2 Storage" },
      { name: "Firebase Firestore" }
    ]
  },
  {
    category: "API, Tools & DevOps",
    subtitle: "Workflow, testing & cloud deployment",
    color: "#FF6B9D",
    icon: "Cpu",
    skills: [
      { name: "Visual Studio 2022", highlight: true },
      { name: "VS Code & Cursor", highlight: true },
      { name: "Google Antigravity AI", highlight: true },
      { name: "Swagger / OpenAPI" },
      { name: "Postman API Testing" },
      { name: "Git & GitHub Workflows" },
      { name: "Vercel / Netlify / GitHub Pages" },
      { name: "CI/CD & Cloud Hosting" }
    ]
  },
  {
    category: "Systems & Enterprise Integrations",
    subtitle: "Background services, desktop & 3rd-party tools",
    color: "#F59E0B",
    icon: "Boxes",
    skills: [
      { name: "Windows Services (.NET)", highlight: true },
      { name: "C# WinForms Desktop", highlight: true },
      { name: "Console Automation Apps" },
      { name: "Amazon Textract (OCR)" },
      { name: "QuickBooks API Sync" },
      { name: "Crystal Reports" },
      { name: "ZXing Barcode Generation" },
      { name: "Zoho CRM Integration" }
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: "destiny-solutions",
    role: "Junior Software Developer",
    company: "Destiny Solutions Pvt. Ltd.",
    location: "Ahmedabad, Gujarat | On-site",
    type: "Full-Time",
    period: "July 2025 – Present",
    current: true,
    points: [
      "Develop and maintain enterprise-grade ASP.NET Core Web API, C#, and SQL Server solutions featuring clean Repository/Service-based architectural patterns.",
      "Build mission-critical business applications and automation tools spanning web platforms, Windows Services, console daemons, and WinForms desktop systems.",
      "Integrate SignalR for real-time online-user status monitoring, event notifications, and instantaneous dashboard telemetry.",
      "Design complex stored procedures, multi-table joins, paging, and indexing strategies to achieve sub-100ms API response times across millions of records.",
      "Collaborate in cross-functional agile sprints, conducting code reviews, unit testing via Swagger/Postman, and ensuring high code maintainability."
    ],
    skills: ["ASP.NET Core", "C#", "SQL Server", "SignalR", "Windows Services", "REST APIs", "Repository Pattern", "WinForms"],
    badge: "Current Role"
  },
  {
    id: "patel-web-solution",
    role: "Full-Stack Intern",
    company: "Patel Web Solution",
    location: "Ahmedabad, Gujarat | On-site & Hybrid",
    type: "Internship (9 Months)",
    period: "Oct 2024 – June 2025",
    current: false,
    points: [
      "Engineered end-to-end full-stack web applications utilizing ASP.NET MVC, ASP.NET Core, and MSSQL (SQL Server) with high-efficiency stored procedures.",
      "Assisted in developing modular React.js UI components and smoothly integrated them with backend RESTful endpoints.",
      "Crafted responsive user interfaces using React.js, jQuery, Bootstrap, and Tailwind CSS following mobile-first design principles.",
      "Participated actively in cross-browser compatibility testing, code reviews, database schema refinements, and debugging sessions.",
      "Managed version control with Git and participated in CI/CD pipeline deployments across Vercel, Netlify, and GitHub Pages."
    ],
    skills: ["React.js", "ASP.NET MVC", "ASP.NET Core", "MSSQL", "Tailwind CSS", "Bootstrap", "RESTful APIs", "Git"],
    badge: "9-Month Intensive"
  }
];

export const educations: Education[] = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Silver Oak University",
    location: "Ahmedabad, Gujarat",
    period: "Dec 2023 – Dec 2026",
    status: "Final Year (Pursuing)",
    details: [
      "Core Coursework: Object-Oriented Programming (OOP), Database Management Systems (DBMS), Data Structures & Algorithms, Web Technologies, Software Engineering.",
      "Balanced rigorous academics with 2 years of real-world production software engineering and company internships.",
      "Active participant in technical symposiums, hackathons, and software engineering workshops."
    ],
    tags: ["OOP & Design Patterns", "DBMS / SQL", "Data Structures", "Software Engineering", "C# / Java"]
  }
];

export const certifications: Certification[] = [
  {
    title: "Full-Stack Development Professional Certificate",
    issuer: "Patel Web Solution",
    year: "2025",
    desc: "Comprehensive 9-month professional certification covering full-stack web development with ASP.NET Core, React.js, MSSQL Server, and Agile SDLC methodologies.",
    badge: "Verified"
  }
];

export const projects: Project[] = [
  {
    id: "zoag-enterprise",
    title: "Zoag: Enterprise Business Application",
    subtitle: "Enterprise Resource & Commercial Operations Platform",
    desc: "A mission-critical enterprise web backend powering high-volume Quotes, Sales Orders, Inventory, Customer Management, and financial reporting.",
    details: [
      "Built and maintained REST APIs for modules like Quotes, Sales Orders, Inventory, Customers and Reports, using a Repository/Service architecture with token-based security.",
      "Wrote stored procedures and implemented SignalR for real-time online-user tracking and status synchronization across multi-tenant clients.",
      "Developed DTOs and standardized API response structures for consistent, type-safe integration across modules.",
      "Implemented granular user assignment/unassignment features and handled API enhancements, database schema migrations, and business-logic updates tested in Swagger & Postman."
    ],
    category: "enterprise",
    categoryLabel: "Enterprise .NET",
    stack: ["ASP.NET Core Web API", "C#", "SQL Server", "SignalR", "Swagger", "Postman", "JWT"],
    image: getAssetUrl("images/zoag-enterprise.jpg"),
    featured: true,
    highlights: ["Repository/Service Pattern", "SignalR Real-Time Tracking", "JWT Token Auth", "Optimized Stored Procedures"]
  },
  {
    id: "disploy-signage",
    title: "Disploy: Digital Signage Platform",
    subtitle: "Multi-Tenant Screen Management & Broadcast Platform",
    desc: "Cloud-connected digital signage system managing distributed screens with dynamic schedule layouts, emergency broadcasts, and media caching.",
    details: [
      "Developed REST APIs for display scheduling, dashboard widgets, emergency broadcast interruptions, weather-based scheduling, and white-label branding.",
      "Implemented multi-tenant database routing, Cloudflare R2 asset storage, 2FA/OTP verification, and role-based user access controls.",
      "Designed optimized stored procedures with multi-table joins, custom filtering, pagination, and data aggregation for analytics modules.",
      "Built resilient offline fallback and default media features for uninterrupted screen content playback, plus SignalR-based real-time screen heartbeat telemetry."
    ],
    category: "enterprise",
    categoryLabel: "Cloud & Real-time",
    stack: ["ASP.NET Core Web API", "C#", "SQL Server", "JWT", "SignalR", "Cloudflare R2"],
    image: getAssetUrl("images/disploy-signage.jpg"),
    featured: true,
    highlights: ["Multi-Tenant Routing", "Cloudflare R2 Integration", "SignalR Screen Heartbeat", "Weather & Emergency Triggers"]
  },
  {
    id: "synthesis-automation",
    title: "Synthesis: PDF Invoice & Payroll Automation",
    subtitle: "Intelligent OCR Document Extraction Engine",
    desc: "Automated OCR ingestion pipeline extracting complex vendor invoices and payroll documents directly into structured SQL Server databases.",
    details: [
      "Automated data extraction from multi-page vendor invoices and payroll PDFs using Amazon Textract, with vendor-specific parsing logic.",
      "Added multi-stage PDF validation, comprehensive error logging, and duplicate entry prevention before storing parsed data in SQL Server.",
      "Built a vendor-routing mechanism that automatically detects format layout and dispatches each invoice to its custom extraction handler.",
      "Developed a dedicated payroll processing module to calculate and extract Check Date, Net Pay, and Employer Liabilities directly into financial ledgers."
    ],
    category: "automation",
    categoryLabel: "Automation / OCR",
    stack: ["C# Console App", "Amazon Textract", "iTextSharp", "Aspose.Pdf", "SQL Server", "ADO.NET"],
    image: getAssetUrl("images/synthesis-automation.jpg"),
    featured: true,
    highlights: ["Amazon Textract OCR", "Dynamic Vendor Router", "Payroll Computation Engine", "High Accuracy Extraction"]
  },
  {
    id: "txparts-sync",
    title: "TxPartsSync: POS & TxParts Synchronization Service",
    subtitle: "Enterprise Windows Service for High-Reliability Sync",
    desc: "Autonomous background Windows Service orchestrating bidirectional customer, inventory, item, and order synchronization between POS and cloud APIs.",
    details: [
      "Built a resilient .NET Windows Service syncing customers, items, orders, and credit memos between on-premise POS and TxParts REST API.",
      "Integrated automatic retry mechanisms with exponential backoff and exhaustive sync history telemetry.",
      "Generated invoice barcodes using ZXing and formatted high-density printable reports with Crystal Reports.",
      "Implemented distributed interval locking to strictly prevent overlapping sync threads, and maintained POS-to-TxParts ID mapping using stored procedures."
    ],
    category: "automation",
    categoryLabel: "Windows Service",
    stack: ["C#", ".NET Windows Service", "REST APIs", "SQL Server", "Crystal Reports", "ZXing"],
    image: getAssetUrl("images/txparts-sync.png"),
    featured: false,
    highlights: ["Background Daemon", "Concurrency Lock Guard", "ZXing Barcode Support", "Auto Retry with History"]
  },
  {
    id: "sales-pos",
    title: "SalesPOS: Sales & Inventory Management System",
    subtitle: "Complete Point of Sale & ERP Accounting Sync",
    desc: "Robust desktop retail management platform featuring live barcode scanning, QuickBooks financial sync, invoice history, and customer center.",
    details: [
      "Developed modular desktop architecture for customers, orders, invoices, shipping, returns, and credit memos with barcode-driven verification.",
      "Implemented gross profit calculations, margin reports, and direct QuickBooks integration for automated accounting journal synchronization.",
      "Engineered comprehensive invoice editing, receipt printing, refund auditing, and a dedicated customer center for tracking open credit balances.",
      "Optimized query performance for massive inventory lookups using SQL Server indexed views and stored procedures."
    ],
    category: "dotnet",
    categoryLabel: "Desktop / WinForms",
    stack: ["C#", ".NET WinForms", "SQL Server", "Crystal Reports", "ZXing", "QuickBooks"],
    image: getAssetUrl("images/sales-pos.png"),
    featured: true,
    highlights: ["QuickBooks Accounting Sync", "Barcode Scanning", "Real-Time Profit Analytics", "Customer Center"]
  },
  {
    id: "rosier-chocolate",
    title: "Rosier Chocolate Shop",
    subtitle: "Artisan Confectionery E-Commerce Platform",
    desc: "Full-featured online store with rich product catalog, shopping basket, checkout workflow, invoice generation, and comprehensive administrative portal.",
    details: [
      "E-commerce web application built with ASP.NET MVC where customers explore handcrafted chocolate assortments, place custom orders, and generate invoices.",
      "Built an intuitive admin dashboard enabling product inventory management, order cancellation requests, invoice printing, and customer tracking.",
      "Designed fluid Razor views coupled with Bootstrap and jQuery AJAX for seamless cart updates without full page reloads."
    ],
    category: "full-stack",
    categoryLabel: "ASP.NET MVC",
    stack: ["ASP.NET MVC 5 (C#)", "SQL Server", "Razor Views", "Bootstrap", "jQuery", "AJAX"],
    image: getAssetUrl("images/Rosier-Chocolate-Shop.webp"),
    github: "https://github.com/jaybabariya1612/Rosier-Chocolate-Shop",
    docs: "https://github.com/jaybabariya1612/Rosier-Chocolate-Shop/blob/main/README.md",
    featured: true,
    highlights: ["Product Catalog & Cart", "Admin Control Dashboard", "Order Cancellation Workflow", "Invoice Generation"]
  },
  {
    id: "mcbs-banking",
    title: "MCBS (Mini Core Banking System)",
    subtitle: "Secure Core Banking Architecture Simulation",
    desc: "Robust banking platform featuring multi-tier user authentication, account creation, real-time fund transfers, transaction histories, and administrative controls.",
    details: [
      "Secure core banking application built with ASP.NET Core MVC featuring KYC verification, customer login, fund transfers, and ledger tracking.",
      "Administrative portal allowing bank officers to audit user activity, freeze/unfreeze customer balances, and oversee system transactions.",
      "Engineered SQL Server stored procedures enforcing ACID atomicity for fund transfers, ensuring zero balance inconsistencies even under simulated network failures."
    ],
    category: "dotnet",
    categoryLabel: "ASP.NET Core",
    stack: ["ASP.NET Core 6.0 MVC", "Razor Views", "Bootstrap 5", "SQL Server", "Session Auth"],
    image: getAssetUrl("images/MCBS.png"),
    github: "https://github.com/jaybabariya1612/MCBS",
    docs: "https://github.com/jaybabariya1612/MCBS/blob/main/README.md",
    featured: true,
    highlights: ["ACID Transaction Safety", "Session-Based Security", "Admin Control Center", "Audit Log Ledger"]
  },
  {
    id: "yogi-engineering",
    title: "Yogi Engineering E-Commerce",
    subtitle: "Production Industrial Machine Parts Marketplace",
    desc: "Full-stack production marketplace serving commercial engineering clients with real-time product catalogs, inquiry systems, and automated invoices.",
    details: [
      "Designed and deployed a responsive React.js storefront integrated with Node.js/Express and SQL Server backend.",
      "Built structured machinery catalog categories, quotation requests, and lightning-fast search filters for industrial components.",
      "Delivered high-performance SEO-optimized pages deployed live on Vercel."
    ],
    category: "full-stack",
    categoryLabel: "React & Node.js",
    stack: ["React.js", "Node.js", "Express", "SQL Server", "Tailwind CSS", "Vercel"],
    image: getAssetUrl("images/Yogi_Eng.png"),
    live: "https://yogi-eng-ecommarce.vercel.app/",
    github: "https://github.com/jaybabariya1612/YOGI-ENG-ECOMMARCE/blob/main/README.md",
    featured: true,
    highlights: ["Live Production App", "React Modern Frontend", "Industrial Machinery Catalog", "Instant Quote Inquiries"]
  },
  {
    id: "expense-management",
    title: "Expense Management System (EMS)",
    subtitle: "Desktop Personal & Corporate Expense Tracking",
    desc: "High-performance desktop financial application built with C# and WinForms to monitor budgets, category-wise spending, and generate visual analytics.",
    details: [
      "Track daily expenditures, categorizations, budget thresholds, and recurring bills with intuitive WinForms interface.",
      "Visual charts and monthly financial statements generated using SQL Server stored procedures.",
      "Export reports to PDF and Excel spreadsheets for audit and accounting documentation."
    ],
    category: "dotnet",
    categoryLabel: "Desktop / WinForms",
    stack: ["C#", ".NET Framework", "WinForms", "SQL Server", "Guna UI"],
    image: getAssetUrl("images/EMS.png"),
    github: "https://github.com/jaybabariya1612/Expense-Management-System",
    docs: "https://github.com/jaybabariya1612/Expense-Management-System/blob/main/README.md",
    featured: false,
    highlights: ["Desktop Financial Tracker", "Category Breakdown", "Visual Analytics", "Export Reporting"]
  },
  {
    id: "quantum-lic-calculator",
    title: "Quantum LIC Premium Calculator",
    subtitle: "Insurance Valuation & Quote Generator",
    desc: "Sleek financial estimation tool designed for insurance professionals and policyholders to compute maturity benefits and print instant PDF quotes.",
    details: [
      "Accurate actuarial calculations supporting multiple insurance plans, bonus accruals, and age-indexed premiums.",
      "One-click client-ready PDF quote generation formatted with crisp professional layout.",
      "Fast, responsive client-side interface built with pure JavaScript and glassmorphism styling."
    ],
    category: "frontend",
    categoryLabel: "Frontend Tool",
    stack: ["HTML5", "CSS3", "JavaScript", "jsPDF", "Glassmorphism"],
    image: getAssetUrl("images/lic-calculator-project-preview.png"),
    live: "https://quantum-lic-premium-calculator.vercel.app/",
    github: "https://github.com/jaybabariya1612/Quantum-LIC-Premium-Calculator",
    featured: false,
    highlights: ["Actuarial Formulas", "One-Click PDF Export", "Zero Latency", "Mobile Optimized"]
  },
  {
    id: "global-currency-converter",
    title: "Global Currency Converter",
    subtitle: "Real-Time Exchange Rate & Analytics Tool",
    desc: "Real-time multi-currency calculator featuring live foreign exchange rates, interactive historical trend charts, and conversion receipt generation.",
    details: [
      "Connects to the Frankfurter open-source FX rate API to fetch authoritative real-time currency ratios.",
      "Interactive Chart.js visualizations showing 7-day, 30-day, and 1-year historical trends between any currency pair.",
      "Instant PDF conversion receipt generation with clean tabular breakdown."
    ],
    category: "frontend",
    categoryLabel: "Frontend Tool",
    stack: ["Vanilla JS", "Chart.js", "jsPDF", "Frankfurter FX API"],
    image: getAssetUrl("images/GLOBAL_CURRENCY_CONVERTER.png"),
    live: "https://jaybabariya1612.github.io/Global-Currency-Converter/",
    github: "https://github.com/jaybabariya1612/Global-Currency-Converter",
    featured: false,
    highlights: ["Live Forex API", "Interactive Chart.js", "PDF Receipt Export", "Offline Fallback Cache"]
  },
  {
    id: "luxury-hotel-calculator",
    title: "Luxury Hotel Stay Calculator",
    subtitle: "Interactive Reservation Cost Estimator",
    desc: "Premium hospitality pricing calculator featuring room tier comparisons, customizable guest options, seasonal surcharge sliders, and dynamic invoice summaries.",
    details: [
      "Dynamic cost breakdowns taking into account room tier, guest count, weekend pricing, and luxury add-ons.",
      "Animated interface built with modern CSS and Tailwind animations for fluid user interaction.",
      "Instant calculation updates with zero latency."
    ],
    category: "frontend",
    categoryLabel: "Frontend Tool",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    image: getAssetUrl("images/Ultimate_Luxury_Hotel_Stay_Calculator.png"),
    live: "https://hotel-stay-calculator.vercel.app/",
    github: "https://github.com/jaybabariya1612/Hotel-Stay-Calculator",
    featured: false,
    highlights: ["Dynamic Surcharge Sliders", "Room Tier Comparison", "Animated Total Breakdown"]
  },
  {
    id: "layer-shop-clone",
    title: "Layer Shop UI Clone",
    subtitle: "Modern Luxury E-Commerce Experience",
    desc: "Pixel-perfect frontend recreation of a world-class lifestyle eCommerce store highlighting complex CSS layouts, micro-interactions, and responsive design.",
    details: [
      "Extensive implementation of advanced Flexbox and CSS Grid layouts with buttery smooth hover effects.",
      "Demonstrates high attention to typography, spacing, visual rhythm, and responsive mobile adaptations.",
      "Zero external bloated UI libraries — pure handcrafted HTML, CSS, and modern JavaScript."
    ],
    category: "frontend",
    categoryLabel: "UI / UX Clone",
    stack: ["HTML5", "CSS3", "JavaScript", "Advanced Layouts"],
    image: getAssetUrl("images/Layer_Shop_Clone.png"),
    live: "https://layers-shop-clone.vercel.app/",
    github: "https://github.com/jaybabariya1612/layers-shop-clone",
    featured: false,
    highlights: ["Pixel-Perfect Craftsmanship", "Micro-Interactions", "Custom CSS Grid Architecture"]
  }
];

export const services: ServiceItem[] = [
  {
    id: "full-stack",
    title: "Full-Stack Web Engineering",
    desc: "End-to-end web applications crafted with ASP.NET Core Web APIs and React.js frontends — from relational data models and API security to responsive user experiences.",
    icon: "Layers",
    color: "#6C63FF",
    tags: ["React.js", "ASP.NET Core", "SQL Server", "REST APIs"]
  },
  {
    id: "backend-api",
    title: "Backend API & Microservices",
    desc: "High-throughput, secure RESTful APIs engineered using C#, ASP.NET Core, Entity Framework, Repository/Service architecture, and JWT authentication.",
    icon: "Server",
    color: "#00D4FF",
    tags: ["C#", "Web API", "JWT Auth", "Swagger", "Postman"]
  },
  {
    id: "realtime-systems",
    title: "Real-Time & Event Systems",
    desc: "Real-time communication engines utilizing SignalR and WebSockets for live status tracking, user presence, automated alerts, and instant dashboard telemetry.",
    icon: "Zap",
    color: "#00FFB3",
    tags: ["SignalR", "WebSockets", "Push Alerts", "Heartbeats"]
  },
  {
    id: "database-optimization",
    title: "Database Architecture & Optimization",
    desc: "MSSQL Server schema modeling, complex stored procedures, multi-table joins, indexing optimization, and ADO.NET integration for lightning-fast queries.",
    icon: "Database",
    color: "#FF6B9D",
    tags: ["MSSQL", "Stored Procedures", "Query Tuning", "SSMS"]
  },
  {
    id: "automation-windows",
    title: "Automation Daemons & Services",
    desc: "Autonomous background .NET Windows Services, console automation tools, Amazon Textract OCR document processing, and QuickBooks accounting synchronization.",
    icon: "Cpu",
    color: "#F59E0B",
    tags: ["Windows Services", "Textract OCR", "QuickBooks", "WinForms"]
  },
  {
    id: "ui-ux-engineering",
    title: "Modern UI/UX & Responsive Frontends",
    desc: "Pixel-perfect, mobile-first web applications built with React.js, Tailwind CSS, TypeScript, and modern animation standards that delight users across all screen sizes.",
    icon: "Sparkles",
    color: "#A78BFA",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Animations"]
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Architecture",
    desc: "Analyzing domain constraints, data schemas, API contracts, and user flows before writing a single line of code.",
    icon: "Compass"
  },
  {
    num: "02",
    title: "System Design & Prototyping",
    desc: "Drafting Repository/Service boundaries, relational database schemas, DTO structures, and component hierarchies.",
    icon: "Cpu"
  },
  {
    num: "03",
    title: "Agile Development",
    desc: "Writing clean, maintainable, self-documenting code with iterative sprint commits, SignalR handlers, and modular components.",
    icon: "Code"
  },
  {
    num: "04",
    title: "Testing & Validation",
    desc: "Exhaustive endpoint verification in Swagger/Postman, SQL query profiling, cross-device responsiveness, and edge-case handling.",
    icon: "ShieldCheck"
  },
  {
    num: "05",
    title: "Deployment & Observability",
    desc: "Seamless production rollout with CI/CD, cloud asset optimization, error telemetry, and ongoing post-launch support.",
    icon: "Rocket"
  }
];

export const achievements: AchievementItem[] = [
  {
    year: "2025 – Present",
    title: "Junior Software Developer Promotion",
    desc: "Promoted to full-time Junior Software Developer at Destiny Solutions following demonstrated technical excellence in backend systems.",
    icon: "Award",
    glow: "#6C63FF"
  },
  {
    year: "2025",
    title: "Full-Stack Internship Certification",
    desc: "Completed rigorous 9-month professional development internship at Patel Web Solution mastering ASP.NET Core & React.",
    icon: "FileCheck",
    glow: "#00D4FF"
  },
  {
    year: "2023 – 2026",
    title: "BCA Academic Excellence",
    desc: "Consistently excelling in Bachelor of Computer Applications curriculum at Silver Oak University while building production systems.",
    icon: "GraduationCap",
    glow: "#00FFB3"
  },
  {
    year: "2025",
    title: "Production System Deployments",
    desc: "Successfully deployed enterprise and commercial systems including Yogi Engineering e-commerce serving real-world customers.",
    icon: "Rocket",
    glow: "#FF6B9D"
  },
  {
    year: "2024 – 2026",
    title: "13+ Applications Shipped",
    desc: "Shipped 13+ production, enterprise, desktop, and web applications spanning diverse engineering disciplines.",
    icon: "Layers",
    glow: "#F59E0B"
  },
  {
    year: "Ongoing",
    title: "Open Source Contributor",
    desc: "Actively contributing to open-source software, releasing developer tooling and well-documented architectural templates on GitHub.",
    icon: "GitBranch",
    glow: "#6C63FF"
  }
];

export const currentlyLearning = [
  {
    title: "Next.js 15 & Server Components",
    status: "App Router, Server Actions & Streaming SSR",
    progress: 75,
    color: "#00D4FF"
  },
  {
    title: "Docker & Container Orchestration",
    status: "Containerizing ASP.NET Core & SQL Microservices",
    progress: 60,
    color: "#6C63FF"
  },
  {
    title: "Azure Cloud & Serverless",
    status: "Azure App Services, Blob Storage & Azure Functions",
    progress: 50,
    color: "#00FFB3"
  },
  {
    title: "Clean Architecture & CQRS",
    status: "MediatR, Domain-Driven Design & Eventual Consistency",
    progress: 80,
    color: "#FF6B9D"
  }
];

export const funFacts = [
  {
    title: "Early Morning Coder",
    desc: "My sharpest problem-solving and architectural breakthroughs happen in quiet morning hours with strong coffee.",
    icon: "Coffee"
  },
  {
    title: "SQL Performance Nerd",
    desc: "I genuinely enjoy taking execution plans with table scans and rewriting queries with composite indices to drop query times by 95%.",
    icon: "Database"
  },
  {
    title: "Clean Architecture Fanatic",
    desc: "I strongly believe that clean separation of concerns between Controllers, Services, Repositories, and DTOs saves hundreds of maintenance hours.",
    icon: "Layers"
  },
  {
    title: "Continuous Learner",
    desc: "Always exploring cutting-edge tech — from AI-assisted development tools like Google Antigravity to cloud containerization.",
    icon: "Zap"
  }
];

export const faqs: FAQItem[] = [
  {
    q: "Are you available for freelance projects or full-time roles?",
    a: "Yes! I am actively available for full-time software engineering roles as well as freelance contract opportunities. Whether you need an end-to-end full-stack web application, a robust ASP.NET Core Web API, or a desktop POS/automation service, feel free to reach out!"
  },
  {
    q: "What is your primary tech stack?",
    a: "My core specialty is ASP.NET Core (C#) Web API + Microsoft SQL Server on the backend, paired with React.js / TypeScript and modern Tailwind CSS on the frontend. I also have deep expertise with Windows Services, WinForms, SignalR real-time systems, and Amazon Textract OCR automation."
  },
  {
    q: "How do you ensure code quality and system performance?",
    a: "I adhere to clean architecture patterns (Repository/Service layer, DTOs, strict input validation). For databases, I write optimized stored procedures with targeted indexing, and I thoroughly validate all API endpoints using Swagger and Postman before deployment."
  },
  {
    q: "Do you work with international or remote clients?",
    a: "Yes! I am fully comfortable working with distributed teams and international clients across varying time zones. I maintain clear, frequent communication via Slack, Teams, or GitHub, and deliver regular milestone updates."
  },
  {
    q: "How can we get started working together?",
    a: "You can send me a message through the contact form on this site, email me directly at jaybabariya01@gmail.com, or connect with me on LinkedIn / GitHub. I typically reply within 24 hours to discuss project scope and milestones."
  }
];
