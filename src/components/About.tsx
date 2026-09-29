import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  FileText, 
  Download
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playClick } from '../utils/sound';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" style={{ padding: 'clamp(70px, 8vw, 120px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 32px)' }}>
        <div className="about-grid">
          {/* Left Column: Image Card with stats & badge */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                background: 'var(--card)'
              }}
              className="glow-card"
            >
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: 'clamp(360px, 50vw, 480px)',
                  objectFit: 'cover'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5, 8, 16, 0.9) 0%, rgba(5, 8, 16, 0.25) 50%, transparent 100%)'
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px'
                }}
              >
                <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(0, 212, 255, 0.15)', border: '1px solid var(--border-2)', borderRadius: '9999px', fontSize: '0.75rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                  Full Stack Engineer
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                  Jay Babariya
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '4px' }}>
                  Building robust .NET Core solutions & reactive interfaces with clean code ethics.
                </p>
              </div>
            </div>

            {/* Float Card: Experience */}
            <div
              style={{
                position: 'absolute',
                top: '-16px',
                right: 'clamp(-10px, -2vw, -16px)',
                padding: '14px 20px',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)'
              }}
            >
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--cyan)', lineHeight: 1 }}>
                2+
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '2px' }}>
                Years Industry Experience
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Info */}
          <div>
            <span className="section-tag">About Me</span>
            <h2 className="section-title">
              Crafting Resilient Systems from <span className="grad-primary">Backend to Browser</span>
            </h2>

            <p style={{ color: 'var(--dim)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '22px' }}>
              {personalInfo.summary}
            </p>

            <p style={{ color: 'var(--muted)', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '32px' }}>
              I thrive on transforming complex business requirements into intuitive digital workflows. Beyond code, I bring strong collaboration, disciplined version control, proactive communication, and a genuine passion for clean architecture.
            </p>

            {/* Quick Info Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '16px',
                marginBottom: '24px'
              }}
            >
              {/* Email */}
              <div className="about-info-card">
                <div className="about-info-icon" style={{ background: 'rgba(108, 99, 255, 0.15)', color: 'var(--violet)' }}>
                  <Mail size={18} />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="about-info-label">EMAIL</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="about-info-value"
                    title={personalInfo.email}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="about-info-card">
                <div className="about-info-icon" style={{ background: 'rgba(0, 212, 255, 0.15)', color: 'var(--cyan)' }}>
                  <Phone size={18} />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="about-info-label">PHONE</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="about-info-value"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="about-info-card">
                <div className="about-info-icon" style={{ background: 'rgba(0, 255, 179, 0.15)', color: 'var(--green)' }}>
                  <MapPin size={18} />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="about-info-label">LOCATION</div>
                  <div className="about-info-value">
                    Ahmedabad, Gujarat
                  </div>
                </div>
              </div>

              {/* Current Role */}
              <div className="about-info-card">
                <div className="about-info-icon" style={{ background: 'rgba(255, 107, 157, 0.15)', color: 'var(--pink)' }}>
                  <Briefcase size={18} />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="about-info-label">CURRENT ROLE</div>
                  <div className="about-info-value">
                    Junior Software Developer
                  </div>
                </div>
              </div>
            </div>

            {/* Resume CTAs - Perfectly Aligned Matching Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '16px'
              }}
            >
              <button
                onClick={() => {
                  playClick();
                  onOpenResume();
                }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <FileText size={18} />
                <span>See Complete Resume</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Jay's Resume.pdf"
                onClick={() => playClick()}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Download size={18} />
                <span>Download PDF Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
