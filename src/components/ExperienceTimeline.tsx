import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';
import { experiences, educations, certifications } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" style={{ padding: 'clamp(70px, 8vw, 120px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 32px)' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-tag">Career Milestones</span>
          <h2 className="section-title">
            Work Experience & <span className="grad-primary">Education</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A proven track record of software engineering excellence, scalable API construction, and academic foundation.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(32px, 5vw, 56px)',
            alignItems: 'start'
          }}
          className="timeline-grid"
        >
          {/* Left Column: Work Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(108, 99, 255, 0.15)',
                  color: 'var(--violet)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Briefcase size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--bright)' }}>
                  Work Experience
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                  Hands-on engineering in production systems
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="glow-card timeline-card"
                  style={{
                    padding: 'clamp(20px, 3vw, 28px)',
                    borderLeft: exp.current ? '4px solid var(--green)' : '4px solid var(--violet)'
                  }}
                >
                  {/* Top Role & Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--bright)' }}>
                        {exp.role}
                      </h4>
                      <div style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--cyan)', marginTop: '2px' }}>
                        {exp.company}
                      </div>
                    </div>

                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        background: exp.current ? 'rgba(0, 255, 179, 0.12)' : 'rgba(108, 99, 255, 0.12)',
                        color: exp.current ? 'var(--green)' : 'var(--violet)',
                        border: exp.current ? '1px solid rgba(0, 255, 179, 0.3)' : '1px solid rgba(108, 99, 255, 0.3)'
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '18px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={13} color="var(--dim)" /> {exp.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={13} color="var(--dim)" /> {exp.type}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                    {exp.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '0.9rem',
                          color: 'var(--dim)',
                          lineHeight: 1.65
                        }}
                      >
                        <CheckCircle2 size={16} color="var(--cyan)" style={{ flexShrink: 0, marginTop: '4px' }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="tech-tag"
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {/* Education */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(0, 212, 255, 0.15)',
                    color: 'var(--cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--bright)' }}>
                    Education
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                    Academic curriculum & fundamentals
                  </p>
                </div>
              </div>

              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="glow-card timeline-card"
                  style={{
                    padding: 'clamp(20px, 3vw, 28px)',
                    borderLeft: '4px solid var(--cyan)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--bright)' }}>
                        {edu.degree}
                      </h4>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--cyan)', marginTop: '2px' }}>
                        {edu.institution}
                      </div>
                    </div>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        background: 'rgba(0, 212, 255, 0.12)',
                        color: 'var(--cyan)',
                        border: '1px solid rgba(0, 212, 255, 0.3)'
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', marginTop: '14px' }}>
                    {edu.details.map((d, dIdx) => (
                      <li
                        key={dIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '0.88rem',
                          color: 'var(--dim)',
                          lineHeight: 1.6
                        }}
                      >
                        <span style={{ color: 'var(--cyan)', fontSize: '0.8rem', marginTop: '2px' }}>▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {edu.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="tech-tag"
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 107, 157, 0.15)',
                    color: 'var(--pink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--bright)' }}>
                    Certifications
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                    Professional accreditations
                  </p>
                </div>
              </div>

              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glow-card timeline-card"
                  style={{
                    padding: 'clamp(20px, 3vw, 24px)',
                    borderLeft: '4px solid var(--pink)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--bright)' }}>
                      {cert.title}
                    </h4>
                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        background: 'rgba(255, 107, 157, 0.12)',
                        color: 'var(--pink)',
                        border: '1px solid rgba(255, 107, 157, 0.3)'
                      }}
                    >
                      {cert.year}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--pink)', marginBottom: '10px' }}>
                    {cert.issuer}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--dim)', lineHeight: 1.65 }}>
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
