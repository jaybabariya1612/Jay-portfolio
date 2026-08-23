export interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  isCurrent: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface SkillCategory {
  id: number;
  name: string;
  subtitle: string;
  icon: string;
  iconBg: string;
  skills: { name: string; iconClass: string }[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  glowColor: string;
  year: string;
}

export interface LearningItem {
  id: number;
  title: string;
  status: string;
  progress: number;
  icon: string;
  iconBg: string;
}

export interface FunFact {
  id: number;
  emoji: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  description: string;
  profileImage: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
  contactInfo: ContactInfo;
  stats: { label: string; value: number }[];
  aboutDescription: string[];
  skillCategories: SkillCategory[];
  techStack: string[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  services: Service[];
  whyHireMe: { icon: string; title: string; description: string }[];
  process: { step: string; icon: string; title: string; description: string }[];
  achievements: Achievement[];
  learning: LearningItem[];
  funFacts: FunFact[];
  faq: FAQItem[];
  githubUsername: string;
}

export const portfolioData: PortfolioData = {
  name: "Jay Babariya",
  firstName: "Jay",
  lastName: "Babariya",
  role: "Full Stack Developer",
  tagline: "Open to new opportunities",
  description: "Full Stack Developer specializing in ASP.NET Core & React. I craft elegant, high-performance web applications from database to user interface — based in Ahmedabad, India.",
  profileImage: "images/Jay_Babariya_Profile_Picture.jpg",
  resumeUrl: "JayBabariya_Resume.pdf",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/jaybabariya1612", icon: "bxl-github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/jay-babariya-81564b357", icon: "bxl-linkedin" },
    { platform: "Twitter", url: "https://x.com/JayBabariya18", icon: "bxl-twitter" },
    { platform: "Instagram", url: "https://www.instagram.com/jaybabariya_01", icon: "bxl-instagram-alt" },
  ],
  contactInfo: {
    location: "Ahmedabad, Gujarat — 382350",
    email: "jaybabariya01@gmail.com",
    phone: "+91 94082 71133",
  },
  stats: [
    { label: "Year of Experience", value: 1 },
    { label: "Projects Completed", value: 8 },
    { label: "Technologies Mastered", value: 10 },
    { label: "Companies Worked With", value: 2 },
  ],
  aboutDescription: [
    "I'm a passionate Full Stack Developer with a strong foundation in building robust, scalable web applications. Currently working as a Junior Software Developer at Destiny Solutions Pvt. Ltd., I specialize in the .NET ecosystem combined with modern React frontends.",
    "I thrive on transforming complex problems into intuitive digital solutions. Beyond code, I bring strong communication, collaborative spirit, and a genuine passion for clean architecture and exceptional user experiences.",
  ],
  skillCategories: [
    {
      id: 1,
      name: "Frontend",
      subtitle: "Interfaces & experiences",
      icon: "🎨",
      iconBg: "rgba(0,212,255,0.12)",
      skills: [
        { name: "HTML5", iconClass: "bxl-html5" },
        { name: "CSS3", iconClass: "bxl-css3" },
        { name: "JavaScript", iconClass: "bxl-javascript" },
        { name: "React.js", iconClass: "bxl-react" },
        { name: "Bootstrap", iconClass: "bxl-bootstrap" },
        { name: "Tailwind CSS", iconClass: "bxl-tailwind-css" },
        { name: "jQuery", iconClass: "bxl-jquery" },
      ],
    },
    {
      id: 2,
      name: "Backend",
      subtitle: "APIs & data layers",
      icon: "⚙️",
      iconBg: "rgba(108,99,255,0.12)",
      skills: [
        { name: "ASP.NET Core", iconClass: "bxl-visual-studio" },
        { name: "C#", iconClass: "bx-code" },
        { name: "MVC Pattern", iconClass: "bx-layer" },
        { name: "REST APIs", iconClass: "bxl-git" },
        { name: "Entity Framework", iconClass: "bx-link" },
        { name: "Node.js", iconClass: "bxl-nodejs" },
      ],
    },
    {
      id: 3,
      name: "Database & DevOps",
      subtitle: "Data & collaboration",
      icon: "🗄️",
      iconBg: "rgba(0,255,179,0.1)",
      skills: [
        { name: "SQL Server", iconClass: "bx-data" },
        { name: "Git", iconClass: "bxl-git" },
        { name: "GitHub", iconClass: "bxl-github" },
        { name: "Postman", iconClass: "bx-code-curly" },
      ],
    },
  ],
  techStack: [
    "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind", "Bootstrap",
    ".NET Core", "C#", "SQL Server", "Git", "Node.js", "jQuery",
  ],
  experience: [
    {
      id: 1,
      title: "Junior Software Developer",
      company: "Destiny Solutions Pvt. Ltd.",
      period: "Jul 2025 – Present",
      isCurrent: true,
      responsibilities: [
        "Full-stack development with ASP.NET Core, C#, SQL Server, and modern frontend technologies.",
        "Building scalable enterprise features in a collaborative, agile environment.",
        "Code reviews, architecture discussions, and continuous learning in a production setting.",
      ],
      technologies: ["ASP.NET Core", "C#", "MVC", "SQL Server"],
    },
    {
      id: 2,
      title: "Full-Stack Intern",
      company: "Patel Web Solution, Ahmedabad",
      period: "Oct 2024 – Jun 2025",
      isCurrent: false,
      responsibilities: [
        "Developed full-stack features using ASP.NET Core MVC, C#, and Entity Framework Core.",
        "Database schema design and optimized SQL Server query writing.",
        "Responsive frontends using HTML, CSS, Bootstrap, JavaScript, and React.",
        "Agile ceremonies, code reviews, debugging, and Git version control workflows.",
      ],
      technologies: ["React", "Node Js", "Bootstrap", "Git"],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Computer Applications",
      school: "Silver Oak University, Ahmedabad",
      period: "2023 – 2026",
      description: [
        "Core coursework: OOP, DBMS, Data Structures, Web Development, Software Engineering.",
        "Built multiple real-world projects applying classroom concepts to production-ready code.",
        "Active participation in university tech events and coding workshops.",
      ],
      tags: ["OOP", "DBMS", "Web Dev", "JAVA"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Rosier Chocolate Shop",
      description: "A full-featured e-commerce platform for a chocolate brand with product catalog, cart, and order management.",
      category: ["full-stack", "dotnet"],
      image: "images/Rosier-Chocolate-Shop.webp",
      technologies: ["ASP.NET MVC", "SQL Server", "Bootstrap", "Ajax"],
      githubUrl: "https://github.com/jaybabariya1612/Rosier-Chocolate-Shop",
      docsUrl: "https://github.com/jaybabariya1612/Rosier-Chocolate-Shop/blob/main/README.md",
    },
    {
      id: 2,
      title: "MCBS — Mini Core Banking",
      description: "A comprehensive banking system simulation with accounts, transactions, and reporting dashboards.",
      category: ["full-stack", "dotnet"],
      image: "images/MCBS.png",
      technologies: ["ASP.NET Core 6", "Razor", "Bootstrap 5", "SQL"],
      githubUrl: "https://github.com/jaybabariya1612/MCBS",
      docsUrl: "https://github.com/jaybabariya1612/MCBS/blob/main/README.md",
    },
    {
      id: 3,
      title: "Expense Management System",
      description: "Desktop application for personal and business expense tracking with visual analytics.",
      category: ["dotnet"],
      image: "images/EMS.png",
      technologies: ["C#", ".NET Framework", "WinForms", "SQL Server"],
      githubUrl: "https://github.com/jaybabariya1612/Expense-Management-System",
      docsUrl: "https://github.com/jaybabariya1612/Expense-Management-System/blob/main/README.md",
    },
    {
      id: 4,
      title: "E-Commerce — Yogi Engineering",
      description: "Production e-commerce store for an engineering business with React frontend and Node.js backend.",
      category: ["full-stack"],
      image: "images/Yogi_Eng.png",
      technologies: ["React.js", "Node.js", "Express", "SQL Server"],
      liveUrl: "https://yogi-eng-ecommarce.vercel.app/",
      docsUrl: "https://github.com/jaybabariya1612/YOGI-ENG-ECOMMARCE/blob/main/README.md",
    },
    {
      id: 5,
      title: "Quantum LIC Calculator",
      description: "An elegant premium calculator for LIC insurance policies with detailed breakdown and PDF export.",
      category: ["frontend"],
      image: "images/lic-calculator-project-preview.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/jaybabariya1612/Quantum-LIC-Premium-Calculator",
      liveUrl: "https://quantum-lic-premium-calculator.vercel.app/",
    },
    {
      id: 6,
      title: "Global Currency Converter",
      description: "Real-time currency conversion tool with interactive charts, history graphs, and PDF export.",
      category: ["frontend"],
      image: "images/GLOBAL_CURRENCY_CONVERTER.png",
      technologies: ["Vanilla JS", "Chart.js", "jsPDF", "Frankfurter API"],
      githubUrl: "https://github.com/jaybabariya1612/Global-Currency-Converter",
      liveUrl: "https://jaybabariya1612.github.io/Global-Currency-Converter/",
    },
    {
      id: 7,
      title: "Luxury Hotel Stay Calculator",
      description: "A premium hotel booking cost calculator with animated UI, room comparison, and cost breakdown.",
      category: ["frontend"],
      image: "images/Ultimate_Luxury_Hotel_Stay_Calculator.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
      githubUrl: "https://github.com/jaybabariya1612/Hotel-Stay-Calculator",
      liveUrl: "https://hotel-stay-calculator.vercel.app/",
    },
    {
      id: 8,
      title: "Layer Shop Clone",
      description: "A pixel-perfect UI clone of a modern e-commerce design, demonstrating advanced CSS and layout skills.",
      category: ["frontend"],
      image: "images/Layer_Shop_Clone.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/jaybabariya1612/layers-shop-clone",
      liveUrl: "https://layers-shop-clone.vercel.app/",
    },
  ],
  services: [
    {
      id: 1,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development with ASP.NET Core APIs and React frontends — from architecture to deployment.",
      icon: "🌐",
      iconBg: "rgba(108,99,255,0.12)",
    },
    {
      id: 2,
      title: "Backend API Development",
      description: "Robust, secure RESTful APIs built with ASP.NET Core, C#, Entity Framework, and SQL Server with clean architecture principles.",
      icon: "⚙️",
      iconBg: "rgba(0,212,255,0.1)",
    },
    {
      id: 3,
      title: "Responsive UI/UX Design",
      description: "Pixel-perfect, mobile-first user interfaces with React, Tailwind CSS, and Bootstrap that look great on every device.",
      icon: "🎨",
      iconBg: "rgba(0,255,179,0.08)",
    },
    {
      id: 4,
      title: "Database Design & Optimization",
      description: "Schema design, query optimization, stored procedures, and data modeling for SQL Server databases.",
      icon: "🗄️",
      iconBg: "rgba(255,107,157,0.08)",
    },
    {
      id: 5,
      title: "Code Review & Debugging",
      description: "Thorough code reviews, performance profiling, bug hunting, and refactoring to improve code quality and maintainability.",
      icon: "🔧",
      iconBg: "rgba(108,99,255,0.12)",
    },
    {
      id: 6,
      title: "Web App Consultation",
      description: "Technical guidance on architecture decisions, tech stack selection, and best practices for your web project.",
      icon: "📱",
      iconBg: "rgba(0,212,255,0.1)",
    },
  ],
  whyHireMe: [
    { icon: "🚀", title: "Fast Learner", description: "Picks up new technologies quickly and adapts to project requirements with minimal ramp-up time." },
    { icon: "🏗️", title: "Clean Architecture", description: "Writes maintainable, well-structured code following industry best practices and design patterns." },
    { icon: "🤝", title: "Team Player", description: "Collaborative, communicative, and experienced in Agile workflows and code review culture." },
    { icon: "⚡", title: "Performance First", description: "Optimizes for speed, scalability, and user experience from the first line of code." },
  ],
  process: [
    { step: "01", icon: "🎯", title: "Discovery & Planning", description: "Understanding your requirements, goals, and constraints before writing a single line of code." },
    { step: "02", icon: "🖌️", title: "Design & Architecture", description: "Crafting the system design, data models, and UI wireframes to ensure scalability from day one." },
    { step: "03", icon: "⚙️", title: "Development", description: "Iterative development with clean code, regular commits, and transparent progress updates." },
    { step: "04", icon: "🧪", title: "Testing & QA", description: "Thorough testing across browsers and devices to ensure a bug-free, reliable product." },
    { step: "05", icon: "🚀", title: "Delivery & Support", description: "Smooth deployment and post-launch support to ensure everything continues running perfectly." },
  ],
  achievements: [
    {
      id: 1,
      title: "Junior Software Developer",
      description: "Transitioned from intern to full-time Junior Developer at Destiny Solutions — recognition of consistent performance and technical growth.",
      icon: "🏆",
      glowColor: "var(--violet)",
      year: "2025",
    },
    {
      id: 2,
      title: "Full-Stack Internship Certificate",
      description: "Completed a 9-month intensive full-stack development internship at Patel Web Solution, Ahmedabad.",
      icon: "📜",
      glowColor: "var(--cyan)",
      year: "Jun 2025",
    },
    {
      id: 3,
      title: "BCA Academic Excellence",
      description: "Maintaining strong academic performance at Silver Oak University while simultaneously working on real-world projects.",
      icon: "🎓",
      glowColor: "var(--green)",
      year: "2023–2026",
    },
    {
      id: 4,
      title: "Production Deployment",
      description: "Successfully deployed multiple live applications including the Yogi Engineering e-commerce platform serving real customers.",
      icon: "🚀",
      glowColor: "var(--pink)",
      year: "2025",
    },
    {
      id: 5,
      title: "8+ Projects Shipped",
      description: "Completed and published 8+ diverse projects spanning full-stack web apps, desktop applications, and frontend tools.",
      icon: "📦",
      glowColor: "var(--violet)",
      year: "2023–2025",
    },
    {
      id: 6,
      title: "Open Source Contributions",
      description: "Actively maintaining open-source repositories on GitHub with detailed documentation and clean codebases.",
      icon: "🔗",
      glowColor: "var(--cyan)",
      year: "Ongoing",
    },
  ],
  learning: [
    { id: 1, title: "Next.js 14", status: "Server components & App Router", progress: 55, icon: "⚡", iconBg: "rgba(0,212,255,0.1)" },
    { id: 2, title: "Docker & Containers", status: "Containerizing .NET apps", progress: 40, icon: "🐳", iconBg: "rgba(108,99,255,0.1)" },
    { id: 3, title: "Azure Cloud Services", status: "Deployment & App Services", progress: 30, icon: "☁️", iconBg: "rgba(0,255,179,0.08)" },
    { id: 4, title: "Clean Architecture", status: "CQRS & Domain-driven design", progress: 65, icon: "📐", iconBg: "rgba(255,107,157,0.08)" },
  ],
  funFacts: [
    { id: 1, emoji: "☕", title: "Coffee-Powered", description: "Best code written after a strong cup of chai. My IDE theme and my chai are both dark." },
    { id: 2, emoji: "🐛", title: "Bug Whisperer", description: "I've spent more hours debugging than sleeping. The semicolon had it coming." },
    { id: 3, emoji: "🎮", title: "Gamer at Heart", description: "Gaming taught me persistence, strategic thinking, and the importance of a good save point." },
    { id: 4, emoji: "📚", title: "Eternal Student", description: "There's always a new framework to learn, a pattern to explore, or a YouTube rabbit hole to fall into." },
    { id: 5, emoji: "🌙", title: "Night Owl Coder", description: "Peak productivity hits after 10 PM. The best commits are timestamped past midnight." },
    { id: 6, emoji: "🎯", title: "Detail Obsessed", description: "I'll spend 2 hours perfecting a 2px border-radius. Pixel-perfect or nothing." },
  ],
  faq: [
    { id: 1, question: "Are you available for freelance projects?", answer: "Yes! I'm open to freelance opportunities alongside my full-time role. Feel free to reach out to discuss your project requirements, timeline, and budget." },
    { id: 2, question: "What's your preferred tech stack?", answer: "My go-to stack is ASP.NET Core + React.js + SQL Server. For frontend-only projects, I love React with Tailwind CSS. I'm always willing to work with the stack that best fits your project's needs." },
    { id: 3, question: "Do you work with international clients?", answer: "Absolutely! I'm comfortable working remotely across time zones. I communicate effectively in English and ensure transparent, regular updates throughout the project." },
    { id: 4, question: "How long does a typical project take?", answer: "Project timelines vary based on complexity. A simple landing page might take 1-2 weeks, while a full-stack web application could take 4-12 weeks. I provide detailed estimates after understanding your requirements." },
    { id: 5, question: "What industries have you worked in?", answer: "I've built solutions for e-commerce, fintech (banking systems), insurance, engineering/manufacturing, and hospitality industries. I'm adaptable to any domain with the right discovery process." },
  ],
  githubUsername: "jaybabariya1612",
};
