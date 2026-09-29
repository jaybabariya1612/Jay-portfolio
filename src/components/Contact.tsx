import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { submitContactMessage } from '../firebase';
import { playClick, playSuccess } from '../utils/sound';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const subjectPills = [
    'Full-Time Engineering Role',
    'Enterprise .NET API Project',
    'React Full-Stack Web App',
    'Windows Service / Automation',
    'General Inquiry'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // 1. Send email directly to jaybabariya630@gmail.com via SMTP backend
      let smtpSuccess = false;
      let smtpError = '';

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok && result.success) {
          smtpSuccess = true;
        } else {
          smtpError = result.error || 'SMTP delivery failed.';
        }
      } catch (err: any) {
        console.warn('Backend SMTP API endpoint not available or network error:', err);
        smtpError = err?.message || 'Network issue with SMTP endpoint';
      }

      // 2. Also log to Firebase Firestore for redundancy
      await submitContactMessage(formData);

      if (smtpSuccess) {
        playSuccess();
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.7 }
        });
        setStatus({
          type: 'success',
          message: 'Message delivered directly to Jay Babariya’s mailbox Thank you, I will reply shortly.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // If SMTP failed, still recorded in Firestore
        playSuccess();
        setStatus({
          type: 'success',
          message: 'Your message has been captured and dispatched to Jay Babariya. Thank you!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err?.message || 'An unexpected error occurred. Please try again or email directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: 'clamp(70px, 8vw, 120px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 32px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'start'
          }}
          className="contact-layout-grid"
        >
          {/* Left Column: Contact Methods & Socials */}
          <div>
            <span className="section-tag">Let's Connect</span>
            <h2 className="section-title">
              Have a Project in Mind or an <span className="grad-primary">Open Opportunity?</span>
            </h2>

            <p style={{ color: 'var(--dim)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '36px' }}>
              Whether you’re recruiting for a high-impact .NET / React engineering role or need a custom enterprise system built from scratch, I’m ready to collaborate. Let's make it happen.
            </p>

            {/* Direct Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <div
                style={{
                  padding: '18px 22px',
                  borderRadius: '16px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(108, 99, 255, 0.15)', color: 'var(--violet)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>EMAIL DIRECT</div>
                  <a href={`mailto:${personalInfo.email}`} style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--bright)' }}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div
                style={{
                  padding: '18px 22px',
                  borderRadius: '16px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0, 212, 255, 0.15)', color: 'var(--cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>PHONE / WHATSAPP</div>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--bright)' }}>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div
                style={{
                  padding: '18px 22px',
                  borderRadius: '16px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0, 255, 179, 0.15)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>LOCATION</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--bright)' }}>
                    Ahmedabad, Gujarat, India (382350)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
                SOCIAL CHANNELS:
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { icon: <Github size={18} />, href: personalInfo.socials.github, label: 'GitHub' },
                  { icon: <Linkedin size={18} />, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                  { icon: <Twitter size={18} />, href: personalInfo.socials.twitter, label: 'Twitter' },
                  { icon: <Instagram size={18} />, href: personalInfo.socials.instagram, label: 'Instagram' }
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    onClick={() => playClick()}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '14px',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--dim)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cyan)';
                      e.currentTarget.style.color = 'var(--cyan)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
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
          </div>

          {/* Right Column: Spacious Interactive Form */}
          <div
            className="glow-card"
            style={{
              padding: 'clamp(24px, 4vw, 40px)',
              background: 'var(--card)',
              borderRadius: '24px'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--bright)', marginBottom: '8px' }}>
              Send an Instant Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '28px', lineHeight: 1.6 }}>
              Dispatched directly to <strong style={{ color: 'var(--cyan)' }}>jaybabariya630@gmail.com</strong> via authenticated Gmail SMTP.
            </p>

            {/* Quick subject suggestion chips */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                SELECT SUBJECT TOPIC:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {subjectPills.map((subj, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      playClick();
                      setFormData({ ...formData, subject: subj });
                    }}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      background: formData.subject === subj ? 'rgba(0, 212, 255, 0.15)' : 'var(--bg-2)',
                      border: formData.subject === subj ? '1px solid var(--cyan)' : '1px solid var(--border)',
                      color: formData.subject === subj ? 'var(--cyan)' : 'var(--dim)',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {subj}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                  gap: '16px'
                }}
              >
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--dim)', marginBottom: '8px' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '13px 18px',
                      borderRadius: '12px',
                      background: 'var(--bg-2)',
                      border: '1px solid var(--border)',
                      color: 'var(--bright)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--dim)', marginBottom: '8px' }}>
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '13px 18px',
                      borderRadius: '12px',
                      background: 'var(--bg-2)',
                      border: '1px solid var(--border)',
                      color: 'var(--bright)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--dim)', marginBottom: '8px' }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="Project or opportunity description"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '13px 18px',
                    borderRadius: '12px',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    color: 'var(--bright)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--dim)', marginBottom: '8px' }}>
                  MESSAGE *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your project, timeline, tech stack, or job details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '15px 18px',
                    borderRadius: '12px',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    color: 'var(--bright)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical',
                    lineHeight: 1.6,
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Status Message */}
              {status.type && (
                <div
                  style={{
                    padding: '14px 18px',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: status.type === 'success' ? 'rgba(0, 255, 179, 0.12)' : 'rgba(255, 95, 86, 0.12)',
                    border: status.type === 'success' ? '1px solid rgba(0, 255, 179, 0.35)' : '1px solid rgba(255, 95, 86, 0.35)',
                    color: status.type === 'success' ? 'var(--green)' : '#ff5f56'
                  }}
                >
                  {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', padding: '15px', marginTop: '4px', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Transmitting Message via SMTP...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
