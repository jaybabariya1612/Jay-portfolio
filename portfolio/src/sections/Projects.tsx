import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData, Project } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'dotnet', label: '.NET' },
  { id: 'frontend', label: 'Frontend' },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="section bg-[#F5F5F4]">
      <div className="container">
        <SectionHeading 
          eyebrow="My work"
          title="Featured Projects"
          description="A curated selection of projects showcasing my full-stack development skills — from enterprise applications to elegant frontend experiences."
        />
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium font-display transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#D97706] text-white shadow-lg shadow-[#D97706]/30'
                  : 'bg-white text-[#44403C] hover:bg-[#D97706]/10 hover:text-[#D97706]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

import { AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-[#D97706] transition-colors"
              >
                <i className="bx bxl-github text-xl" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-[#D97706] transition-colors"
              >
                <i className="bx bx-link-external text-xl" />
              </a>
            )}
            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-[#D97706] transition-colors"
              >
                <i className="bx bx-book-open text-xl" />
              </a>
            )}
          </div>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#1C1917]">
          {project.category[0]}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-[#1C1917] mb-2 group-hover:text-[#D97706] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#78716C] text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#F5F5F4] text-[#44403C] text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 rounded-md bg-[#D97706]/10 text-[#D97706] text-xs font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
