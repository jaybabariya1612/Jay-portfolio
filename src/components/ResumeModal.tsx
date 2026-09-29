import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Briefcase, 
  Code2, 
  GraduationCap, 
  Layers, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, experiences, skillCategories, projects, educations, certifications } from '../data/portfolioData';
import { playClick, playSuccess } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'skills' | 'projects' | 'education' | 'pdf'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    playSuccess();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

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
      <div className="modal-content" style={{ maxWidth: '960px', background: 'var(--surface)' }}>
        {/* Modal Topbar */}
        <div
          style={{
            padding: '20px 28px',
            background: 'var(--surface)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 4px 12px var(--violet-glow)'
              }}
            >
              <FileText size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--bright)' }}>
                Jay Babariya — Curriculum Vitae
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                Full Stack .NET & React Engineer • Ahmedabad, Gujarat
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Download PDF button */}
            <a
              href={personalInfo.resumeUrl}
              download="Jay's Resume.pdf"
              onClick={handleDownload}
              className="btn-primary btn-sm"
              style={{ display: 'inline-flex' }}
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            {/* Open in new tab */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="btn-secondary btn-sm"
              title="Open raw PDF in new browser tab"
            >
              <ExternalLink size={14} />
              <span>Open PDF</span>
            </a>

            {/* Close button */}
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                color: 'var(--bright)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '4px',
            padding: '10px 24px',
            background: 'var(--bg-2)',
            borderBottom: '1px solid var(--border)',
            overflowX: 'auto'
          }}
        >
          {[
            { id: 'overview', label: 'Summary & Contacts', icon: <FileText size={14} /> },
            { id: 'experience', label: 'Work Experience', icon: <Briefcase size={14} /> },
            { id: 'skills', label: 'Technical Arsenal', icon: <Code2 size={14} /> },
            { id: 'projects', label: 'Enterprise Projects', icon: <Layers size={14} /> },
            { id: 'education', label: 'Education & Certs', icon: <GraduationCap size={14} /> },
            { id: 'pdf', label: 'PDF Viewer', icon: <ExternalLink size={14} /> }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playClick();
                  setActiveTab(tab.id as any);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--cyan)' : '1px solid transparent',
                  background: isActive ? 'rgba(0, 212, 255, 0.12)' : 'transparent',
                  color: isActive ? 'var(--cyan)' : 'var(--muted)',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Area */}
        <div style={{ padding: 'clamp(20px, 3vw, 32px)', maxHeight: '68vh', overflowY: 'auto' }}>
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--bright)', marginBottom: '8px' }}>
                  Professional Summary
                </h4>
                <p style={{ color: 'var(--dim)', fontSize: '0.98rem', lineHeight: 1.75 }}>
                  {personalInfo.summary}
                </p>
              </div>

              {/* Contact Information Bar */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                  gap: '14px',
                  marginBottom: '28px',
                  padding: '18px',
                  borderRadius: '16px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color="var(--violet)" />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>EMAIL</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--bright)' }}>{personalInfo.email}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} color="var(--cyan)" />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>PHONE</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--bright)' }}>{personalInfo.phone}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={16} color="var(--green)" />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>LOCATION</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--bright)' }}>Ahmedabad, Gujarat</div>
                  </div>
                </div>
              </div>

              {/* Quick Resume Highlights */}
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--bright)', marginBottom: '14px' }}>
                Key Engineering Competencies
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '14px' }}>
                {[
                  'C#, ASP.NET Core Web API, RESTful APIs, JWT Authentication',
                  'Repository & Service Architecture, Stored Procedures, SignalR',
                  'React.js, Modern TypeScript, Tailwind CSS, Bootstrap 5',
                  'Microsoft SQL Server (MSSQL), Query Optimization, SSMS, ADO.NET',
                  'Windows Services, WinForms Desktop, QuickBooks Sync, Amazon Textract OCR',
                  'Git, GitHub, Postman API Testing, Swagger, CI/CD Deployments'
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '14px',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      fontSize: '0.88rem',
                      color: 'var(--dim)',
                      lineHeight: 1.55
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: EXPERIENCE */}
          {activeTab === 'experience' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  style={{
                    padding: '24px',
                    borderRadius: '16px',
                    background: 'var(--card)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--bright)' }}>{exp.role}</h4>
                      <div style={{ color: 'var(--cyan)', fontWeight: 600, fontSize: '0.95rem' }}>{exp.company}</div>
                    </div>
                    <span style={{ padding: '4px 12px', borderRadius: '9999px', background: 'rgba(108, 99, 255, 0.15)', color: 'var(--violet)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700 }}>
                      {exp.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '14px' }}>
                    {exp.location} • {exp.type}
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--dim)', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--cyan)' }}>•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.skills.map((s, idx) => (
                      <span key={idx} style={{ padding: '4px 10px', borderRadius: '6px', background: 'var(--bg-2)', border: '1px solid var(--border)', fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--dim)' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: SKILLS */}
          {activeTab === 'skills' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '22px',
                    borderRadius: '16px',
                    background: 'var(--card)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: cat.color, marginBottom: '12px' }}>
                    {cat.category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {cat.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '8px',
                          background: s.highlight ? `${cat.color}18` : 'var(--bg-2)',
                          border: s.highlight ? `1px solid ${cat.color}45` : '1px solid var(--border)',
                          fontSize: '0.82rem',
                          fontFamily: 'var(--font-mono)',
                          color: s.highlight ? cat.color : 'var(--bright)'
                        }}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: PROJECTS */}
          {activeTab === 'projects' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {projects.slice(0, 7).map((p) => (
                <div
                  key={p.id}
                  style={{
                    padding: '22px',
                    borderRadius: '16px',
                    background: 'var(--card)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--bright)' }}>{p.title}</h4>
                    <span style={{ padding: '3px 10px', borderRadius: '9999px', background: 'rgba(0, 212, 255, 0.1)', color: 'var(--cyan)', fontSize: '0.74rem', fontFamily: 'var(--font-mono)' }}>
                      {p.categoryLabel}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--dim)', marginBottom: '12px' }}>
                    <strong>Stack:</strong> {p.stack.join(', ')}
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {p.details.map((d, dIdx) => (
                      <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                        <span style={{ color: 'var(--cyan)' }}>▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: EDUCATION & CERTIFICATIONS */}
          {activeTab === 'education' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--bright)', marginBottom: '14px' }}>
                  Higher Education
                </h4>
                {educations.map((edu, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '22px',
                      borderRadius: '16px',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      marginBottom: '16px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                      <h5 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--bright)' }}>{edu.degree}</h5>
                      <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan)' }}>{edu.period}</span>
                    </div>
                    <div style={{ color: 'var(--cyan)', fontSize: '0.92rem', marginBottom: '12px' }}>{edu.institution}, {edu.location}</div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {edu.details.map((d, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '0.88rem', color: 'var(--dim)', lineHeight: 1.55 }}>
                          • {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--bright)', marginBottom: '14px' }}>
                  Professional Certifications
                </h4>
                {certifications.map((c, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '20px',
                      borderRadius: '16px',
                      background: 'var(--card)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <h5 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--bright)' }}>{c.title}</h5>
                      <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--pink)' }}>{c.year}</span>
                    </div>
                    <div style={{ color: 'var(--pink)', fontSize: '0.88rem', marginBottom: '8px' }}>{c.issuer}</div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--dim)', lineHeight: 1.6 }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: EMBEDDED PDF VIEWER */}
          {activeTab === 'pdf' && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '64vh', minHeight: '480px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={16} color="var(--cyan)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--bright)', fontFamily: 'var(--font-mono)' }}>
                    Jay's Resume.pdf
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a
                    href={personalInfo.resumeUrl}
                    download="Jay's Resume.pdf"
                    onClick={handleDownload}
                    className="btn-primary btn-sm"
                  >
                    <Download size={13} />
                    <span>Download File</span>
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary btn-sm"
                  >
                    <ExternalLink size={13} />
                    <span>Full Screen</span>
                  </a>
                </div>
              </div>
              <iframe
                src={`${personalInfo.resumeUrl}#toolbar=1`}
                title="Jay's Resume PDF Viewer"
                style={{
                  width: '100%',
                  flex: 1,
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  background: '#f8f9fa'
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
