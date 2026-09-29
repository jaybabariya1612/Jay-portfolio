import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  Github, 
  Eye
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { playClick } from '../utils/sound';
import { TiltCard3D } from './TiltCard3D';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects (13)' },
    { id: 'enterprise', label: 'Enterprise & Cloud' },
    { id: 'full-stack', label: 'Full-Stack' },
    { id: 'dotnet', label: '.NET & Desktop' },
    { id: 'automation', label: 'Automation & Services' },
    { id: 'frontend', label: 'Frontend & Tools' }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCat =
        selectedCategory === 'all' ||
        p.category === selectedCategory ||
        (selectedCategory === 'dotnet' && (p.category === 'dotnet' || p.category === 'enterprise')) ||
        (selectedCategory === 'full-stack' && p.category === 'full-stack');

      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" style={{ padding: 'clamp(70px, 8vw, 120px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 32px)' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">
            Engineered <span className="grad-primary">Software & Systems</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Production enterprise platforms, high-throughput .NET APIs, intelligent automation daemons, and modern React web applications.
          </p>
        </div>

        {/* Filter Row & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px'
          }}
        >
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((c) => {
              const isActive = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    playClick();
                    setSelectedCategory(c.id);
                  }}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: isActive ? '1px solid var(--cyan)' : '1px solid var(--border)',
                    background: isActive ? 'rgba(0, 212, 255, 0.15)' : 'var(--card)',
                    color: isActive ? 'var(--cyan)' : 'var(--muted)',
                    boxShadow: isActive ? '0 0 16px var(--cyan-glow)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '320px'
            }}
          >
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--muted)'
              }}
            />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 40px',
                borderRadius: '9999px',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                color: 'var(--bright)',
                fontSize: '0.86rem',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
            gap: 'clamp(20px, 3vw, 32px)'
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <TiltCard3D key={project.id} maxTilt={6} style={{ height: '100%', borderRadius: '22px' }}>
              <div
                className="glow-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '22px',
                  background: 'var(--card)',
                  overflow: 'hidden',
                  height: '100%'
                }}
              >
              {/* Image banner with overlay actions */}
              <div
                style={{
                  position: 'relative',
                  height: '210px',
                  background: 'var(--bg-2)',
                  overflow: 'hidden'
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
                    transition: 'transform 0.4s ease'
                  }}
                  className="project-cover-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 41, 0.95) 0%, rgba(15, 23, 41, 0.2) 60%, transparent 100%)'
                  }}
                />

                {/* Top Badge: Category */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    background: 'rgba(5, 8, 16, 0.85)',
                    border: '1px solid rgba(108, 99, 255, 0.3)',
                    color: 'var(--cyan)',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  {project.categoryLabel}
                </div>

                {/* Quick inspect button */}
                <button
                  onClick={() => {
                    playClick();
                    setActiveModalProject(project);
                  }}
                  title="Quick View Details"
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(5, 8, 16, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cyan)';
                    e.currentTarget.style.color = 'var(--cyan)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  <Eye size={16} />
                </button>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: 'clamp(20px, 3vw, 26px)',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.22rem',
                      fontWeight: 800,
                      color: 'var(--bright)',
                      marginBottom: '6px'
                    }}
                  >
                    {project.title}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                    {project.subtitle}
                  </div>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--muted)',
                      lineHeight: 1.65,
                      marginBottom: '18px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {project.desc}
                  </p>

                  {/* Stack pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.stack.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'var(--bg-2)',
                          border: '1px solid var(--border)',
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--dim)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span
                        style={{
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'rgba(108, 99, 255, 0.1)',
                          border: '1px solid rgba(108, 99, 255, 0.25)',
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--cyan)'
                        }}
                      >
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border)'
                  }}
                >
                  <button
                    onClick={() => {
                      playClick();
                      setActiveModalProject(project);
                    }}
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: 'var(--cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>View System Details</span>
                    <span>→</span>
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub Repository"
                        onClick={() => playClick()}
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          background: 'var(--bg-2)',
                          border: '1px solid var(--border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--dim)'
                        }}
                      >
                        <Github size={15} />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Deployment"
                        onClick={() => playClick()}
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          background: 'rgba(0, 212, 255, 0.1)',
                          border: '1px solid rgba(0, 212, 255, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--cyan)'
                        }}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            </TiltCard3D>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      <style>{`
        .project-cover-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
