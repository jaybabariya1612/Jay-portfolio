import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  BookOpen, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { Project } from '../types';
import { playClick } from '../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          playClick();
          onClose();
        }
      }}
    >
      <div
        className="modal-content"
        style={{
          padding: '0',
          maxHeight: '88vh',
          overflowY: 'auto',
          background: 'var(--surface)'
        }}
      >
        {/* Sticky Close button pinned to top right */}
        <button
          onClick={() => {
            playClick();
            onClose();
          }}
          aria-label="Close dialog"
          style={{
            position: 'sticky',
            top: '16px',
            float: 'right',
            marginRight: '16px',
            marginBottom: '-46px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(5, 8, 16, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 30,
            backdropFilter: 'blur(8px)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header Bar with Image Banner */}
        <div style={{ position: 'relative', height: '240px', background: 'var(--bg-2)', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(14, 22, 44, 0.95) 0%, rgba(14, 22, 44, 0.4) 60%, rgba(14, 22, 44, 0.8) 100%)'
            }}
          />

          {/* Title on banner */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '28px',
              right: '28px'
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '9999px',
                background: 'rgba(108, 99, 255, 0.25)',
                border: '1px solid rgba(108, 99, 255, 0.4)',
                color: 'var(--cyan)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                marginBottom: '8px'
              }}
            >
              {project.categoryLabel}
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', marginTop: '4px' }}>
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(20px, 4vw, 32px)' }}>
          {/* Summary description */}
          <p style={{ fontSize: '1rem', color: 'var(--bright)', lineHeight: 1.75, marginBottom: '24px' }}>
            {project.desc}
          </p>

          {/* Key highlights pill row */}
          {project.highlights && project.highlights.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                ARCHITECTURAL HIGHLIGHTS:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.highlights.map((h, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '6px 14px',
                      background: 'rgba(0, 212, 255, 0.08)',
                      border: '1px solid rgba(0, 212, 255, 0.25)',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--cyan)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Sparkles size={12} />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Engineering Implementation Points */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
              SYSTEM IMPLEMENTATION DETAILS:
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.details.map((detail, dIdx) => (
                <li
                  key={dIdx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '0.92rem',
                    color: 'var(--dim)',
                    lineHeight: 1.65
                  }}
                >
                  <CheckCircle2 size={16} color="var(--cyan)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
              TECH STACK & TOOLS:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.stack.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--dim)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '18px', borderTop: '1px solid var(--border)' }}>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClick()}
                className="btn-primary"
              >
                <span>Launch Live Application</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClick()}
                className="btn-secondary"
              >
                <Github size={16} />
                <span>View Source Code</span>
              </a>
            )}

            {project.docs && (
              <a
                href={project.docs}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClick()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '9999px',
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  fontSize: '0.9rem',
                  color: 'var(--dim)',
                  fontWeight: 600
                }}
              >
                <BookOpen size={16} />
                <span>Documentation / README</span>
              </a>
            )}

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              style={{
                marginLeft: 'auto',
                padding: '12px 20px',
                borderRadius: '9999px',
                color: 'var(--muted)',
                fontSize: '0.9rem'
              }}
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
