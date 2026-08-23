import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/content';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="projects"
      style={{
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 64px)',
        background: 'var(--bg)',
        position: 'relative',
      }}
    >
      <div className="container proj-inner" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px' }}
        >
          <p className="section-label">What I&apos;ve built</p>
          <h2 className="section-title">Featured <span className="grad">Projects</span></h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            A curated collection of projects that showcase my full-stack capabilities and problem-solving approach.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="filter-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'full-stack', label: 'Full-Stack' },
            { key: 'dotnet', label: '.NET' },
            { key: 'frontend', label: 'Frontend' },
          ].map((btn) => (
            <motion.button
              key={btn.key}
              className={`filter-btn ${filter === btn.key ? 'active' : ''}`}
              onClick={() => setFilter(btn.key)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 600,
                background: filter === btn.key 
                  ? 'linear-gradient(135deg, var(--accent), var(--secondary))' 
                  : 'rgba(255,255,255,0.04)',
                color: filter === btn.key ? '#fff' : 'var(--text-secondary)',
                border: filter === btn.key ? 'none' : '1px solid var(--border)',
                cursor: 'pointer',
                transition: 'all var(--transition)',
              }}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const catColors = {
    violet: { bg: 'rgba(255,184,108,0.1)', border: 'rgba(255,184,108,0.2)', text: 'var(--accent)' },
    pink: { bg: 'rgba(255,138,101,0.1)', border: 'rgba(255,138,101,0.2)', text: 'var(--accent-2)' },
    green: { bg: 'rgba(74,222,128,0.08)', border: 'rgba(74,222,128,0.2)', text: 'var(--success)' },
  };

  const colors = catColors[project.catColor] || catColors.violet;

  return (
    <motion.div
      className="proj-card"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        transition: 'all var(--transition)',
        cursor: 'default',
      }}
    >
      {/* Image */}
      <div
        className="proj-img"
        style={{
          position: 'relative',
          aspectRatio: '16/10',
          overflow: 'hidden',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
        />
        {/* Overlay */}
        <motion.div
          className="proj-img-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(10,10,11,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-overlay-btn gh"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
              }}
            >
              <i className="bx bxl-github" />
              Code
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-overlay-btn live"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-sm)',
                background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
              }}
            >
              <i className={project.liveLabel === 'Docs' ? 'bx bx-book' : 'bx bx-link-external'} />
              {project.liveLabel || 'Live'}
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Body */}
      <div
        className="proj-body"
        style={{
          padding: '24px',
        }}
      >
        {/* Category Badge */}
        <span
          className="proj-cat-badge"
          style={{
            display: 'inline-block',
            padding: '5px 12px',
            borderRadius: 'var(--radius-full)',
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            color: colors.text,
            fontSize: '0.68rem',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
            marginBottom: '12px',
          }}
        >
          {project.catBadge}
        </span>

        {/* Title */}
        <div
          className="proj-title"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '10px',
          }}
        >
          {project.title}
        </div>

        {/* Description */}
        <div
          className="proj-desc"
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '16px',
          }}
        >
          {project.description}
        </div>

        {/* Tech Stack */}
        <div
          className="proj-stack"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
          }}
        >
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="proj-tech"
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                fontSize: '0.68rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
