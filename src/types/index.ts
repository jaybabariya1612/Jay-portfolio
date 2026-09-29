export interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  details: string[];
  category: 'enterprise' | 'full-stack' | 'dotnet' | 'frontend' | 'automation';
  categoryLabel: string;
  stack: string[];
  image: string;
  github?: string;
  live?: string;
  docs?: string;
  featured?: boolean;
  highlights?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  current: boolean;
  points: string[];
  skills: string[];
  badge?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  details: string[];
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  desc: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  subtitle: string;
  color: string;
  icon: string;
  skills: SkillItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
  tags: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface AchievementItem {
  year: string;
  title: string;
  desc: string;
  icon: string;
  glow: string;
}
