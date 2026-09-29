import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Download, 
  Clock, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles,
  Terminal,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playClick } from '../utils/sound';
import { CyberHologram3D } from './CyberHologram3D';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [visualMode, setVisualMode] = useState<'3d' | 'photo'>('3d');

  const phrases = [
    'Enterprise .NET Core APIs',
    'Scalable C# Architectures',
    'Modern React & TypeScript',
    'Optimized MSSQL Procedures',
    'Real-Time SignalR Services'
  ];

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setTypedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: 'clamp(110px, 14vw, 160px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 32px)',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: 'clamp(36px, 5vw, 64px)',
          alignItems: 'center'
        }}
        className="hero-grid"
      >
        {/* Left Column: Info & Headlines */}
        <div className="hero-text-col">
          {/* Top Status & Live Clock Pill */}
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(0, 255, 179, 0.08)',
                border: '1px solid rgba(0, 255, 179, 0.28)',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--green)'
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--green)',
                  boxShadow: '0 0 10px var(--green)',
                  animation: 'pulse 1.8s infinite'
                }}
              />
              Available for Full-Time & Freelance
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                background: 'rgba(108, 99, 255, 0.1)',
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--dim)'
              }}
            >
              <Clock size={13} color="var(--cyan)" />
              <span>Ahmedabad, IN ({currentTime || 'IST'})</span>
            </div>
          </div>

          {/* Main Title - Fixed Min-Height to eliminate layout shift */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.3rem, 4.8vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              minHeight: 'clamp(145px, 14vw, 210px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}
          >
            <span style={{ display: 'block' }}>Engineering</span>
            <div style={{ minHeight: '2.35em', display: 'inline-block' }}>
              <span className="grad-primary">{typedText || '\u00A0'}</span>
              <span className="cursor-blink" />
            </div>
          </h1>

          {/* Subtitle / Bio */}
          <p
            style={{
              color: 'var(--muted)',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.75,
              maxWidth: '620px',
              marginBottom: '36px'
            }}
          >
            Hi, I’m <strong style={{ color: 'var(--bright)' }}>Jay Babariya</strong> — a Full Stack .NET & React Engineer with ~2 years of professional experience building enterprise RESTful APIs, Windows Services, SQL Server stored procedures, and modern responsive React web applications.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              alignItems: 'center',
              marginBottom: '40px'
            }}
            className="hero-cta-group"
          >
            <a
              href="#projects"
              onClick={() => playClick()}
              className="btn-primary"
            >
              <span>Explore Projects</span>
              <ArrowRight size={17} />
            </a>

            <button
              onClick={() => {
                playClick();
                onOpenResume();
              }}
              className="btn-secondary"
            >
              <FileText size={17} />
              <span>See Resume</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download="Jay's Resume.pdf"
              onClick={() => playClick()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '9999px',
                border: '1px solid var(--border)',
                color: 'var(--dim)',
                fontSize: '0.9rem',
                fontWeight: 600,
                background: 'var(--card)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--cyan)';
                e.currentTarget.style.color = 'var(--bright)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--dim)';
              }}
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => {
                playClick();
                onOpenTerminal();
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 18px',
                borderRadius: '9999px',
                border: '1px solid var(--border)',
                color: 'var(--violet)',
                fontSize: '0.88rem',
                fontWeight: 600,
                background: 'rgba(108, 99, 255, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(108, 99, 255, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(108, 99, 255, 0.08)';
              }}
            >
              <Terminal size={15} />
              <span>CLI Mode</span>
            </button>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
              CONNECT:
            </span>
            {[
              { icon: <Github size={16} />, href: personalInfo.socials.github, label: 'GitHub' },
              { icon: <Linkedin size={16} />, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
              { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}`, label: 'Email' }
            ].map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                onClick={() => playClick()}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--dim)',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cyan)';
                  e.currentTarget.style.color = 'var(--cyan)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--dim)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Holographic 3D Interactive Canvas or Photo Card */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 0',
            width: '100%',
            minHeight: '440px'
          }}
          className="hero-avatar-wrap"
        >
          {/* Mode Switcher Tabs */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '20px',
              padding: '4px',
              borderRadius: '9999px',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
              zIndex: 10
            }}
          >
            <button
              onClick={() => {
                playClick();
                setVisualMode('3d');
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                borderRadius: '9999px',
                border: visualMode === '3d' ? '1px solid var(--cyan)' : '1px solid transparent',
                background: visualMode === '3d' ? 'rgba(0, 212, 255, 0.18)' : 'transparent',
                color: visualMode === '3d' ? 'var(--cyan)' : 'var(--muted)',
                fontWeight: 700,
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: visualMode === '3d' ? '0 0 14px var(--cyan-glow)' : 'none'
              }}
            >
              <Sparkles size={14} />
              <span>⚡ 3D Cyber Core</span>
            </button>
            <button
              onClick={() => {
                playClick();
                setVisualMode('photo');
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                borderRadius: '9999px',
                border: visualMode === 'photo' ? '1px solid var(--violet)' : '1px solid transparent',
                background: visualMode === 'photo' ? 'rgba(108, 99, 255, 0.18)' : 'transparent',
                color: visualMode === 'photo' ? 'var(--violet)' : 'var(--muted)',
                fontWeight: 700,
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: visualMode === 'photo' ? '0 0 14px var(--violet-glow)' : 'none'
              }}
            >
              <span>📸 Portrait</span>
            </button>
          </div>

          {visualMode === '3d' ? (
            <div style={{ width: '100%', maxWidth: '440px', position: 'relative' }}>
              <CyberHologram3D />
            </div>
          ) : (
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
              }}
            >
              {/* Ambient Glowing Rings */}
              <div
                style={{
                  position: 'absolute',
                  width: 'clamp(280px, 40vw, 360px)',
                  height: 'clamp(280px, 40vw, 360px)',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, var(--violet-glow) 0%, var(--cyan-glow) 50%, transparent 70%)',
                  filter: 'blur(40px)',
                  pointerEvents: 'none'
                }}
              />

              <div
                style={{
                  position: 'relative',
                  width: 'clamp(260px, 35vw, 320px)',
                  height: 'clamp(260px, 35vw, 320px)',
                  borderRadius: '32px',
                  padding: '6px',
                  background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.6), rgba(0, 212, 255, 0.4), rgba(0, 255, 179, 0.2))',
                  boxShadow: '0 20px 50px -10px var(--violet-glow)',
                  transform: 'rotate(-2deg)',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotate(-2deg) scale(1)';
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '26px',
                    overflow: 'hidden',
                    background: 'var(--bg-2)',
                    position: 'relative'
                  }}
                >
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(5, 8, 16, 0.75) 0%, transparent 50%)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      right: '16px'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>Jay Babariya</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>
                      Junior Software Dev @ Destiny Solutions
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: .NET Specialist */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: 'clamp(-10px, -2vw, -20px)',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(12px)',
                  padding: '10px 16px',
                  borderRadius: '14px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  animation: 'floatOrb 6s ease-in-out infinite alternate'
                }}
                className="hero-badge"
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(108, 99, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--violet)'
                  }}
                >
                  <Code2 size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>Backend Core</div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--bright)' }}>
                    ASP.NET Core & C#
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: React UI */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '15px',
                  right: 'clamp(-10px, -2vw, -20px)',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(12px)',
                  padding: '10px 16px',
                  borderRadius: '14px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  animation: 'floatOrb 7s ease-in-out infinite alternate-reverse'
                }}
                className="hero-badge"
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(0, 212, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cyan)'
                  }}
                >
                  <Sparkles size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>Frontend Core</div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--bright)' }}>
                    React.js & TypeScript
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats Counter Row */}
      <div
        style={{
          maxWidth: '1240px',
          margin: 'clamp(40px, 6vw, 70px) auto 0',
          padding: '0 clamp(16px, 4vw, 32px)',
          width: '100%'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: 'clamp(16px, 3vw, 24px)',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            padding: 'clamp(20px, 3vw, 32px) clamp(24px, 4vw, 40px)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'
          }}
        >
          {personalInfo.stats.map((st, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
                  fontWeight: 800,
                  lineHeight: 1
                }}
                className={i % 2 === 0 ? 'grad-primary' : 'grad-emerald'}
              >
                {st.value}{st.suffix}
              </div>
              <div
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--muted)',
                  fontWeight: 500
                }}
              >
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Marquee Runner */}
      <div style={{ marginTop: 'clamp(36px, 5vw, 56px)', width: '100%' }}>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[
              'C#', 'ASP.NET Core Web API', 'React.js', 'SQL Server (MSSQL)', 
              'SignalR', 'JWT Authentication', 'TypeScript', 'Tailwind CSS',
              'Windows Services', 'WinForms Desktop', 'Amazon Textract OCR', 
              'Entity Framework Core', 'Repository Pattern', 'QuickBooks API',
              'Cloudflare R2', 'Swagger', 'Postman', 'Git & CI/CD',
              // Loop duplicate
              'C#', 'ASP.NET Core Web API', 'React.js', 'SQL Server (MSSQL)', 
              'SignalR', 'JWT Authentication', 'TypeScript', 'Tailwind CSS',
              'Windows Services', 'WinForms Desktop', 'Amazon Textract OCR', 
              'Entity Framework Core', 'Repository Pattern', 'QuickBooks API',
              'Cloudflare R2', 'Swagger', 'Postman', 'Git & CI/CD'
            ].map((tech, idx) => (
              <span key={idx} className="tech-pill">
                <span style={{ color: 'var(--cyan)' }}>✦</span> {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
        @media (max-width: 900px) {
          .hero-text-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .hero-cta-group {
            justify-content: center;
          }
        }
        @media (max-width: 500px) {
          .hero-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
