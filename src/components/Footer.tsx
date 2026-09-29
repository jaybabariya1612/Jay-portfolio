import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playClick } from '../utils/sound';

export const Footer: React.FC = () => {
  const [showBtt, setShowBtt] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtt(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#04070e',
        borderTop: '1px solid rgba(108, 99, 255, 0.15)',
        padding: '60px 0 36px',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px',
            marginBottom: '40px'
          }}
        >
          {/* Logo & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '0.95rem'
                }}
              >
                JB
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>
                Jay Babariya
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', maxWidth: '420px', lineHeight: 1.6 }}>
              Full Stack .NET & React Engineer building reliable backend architectures, high-performance APIs, and reactive interfaces.
            </p>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {['About', 'Skills', 'Experience', 'Projects', 'Architecture', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => playClick()}
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--dim)',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dim)')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { icon: <Github size={16} />, href: personalInfo.socials.github, label: 'GitHub' },
              { icon: <Linkedin size={16} />, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
              { icon: <Twitter size={16} />, href: personalInfo.socials.twitter, label: 'Twitter' },
              { icon: <Instagram size={16} />, href: personalInfo.socials.instagram, label: 'Instagram' }
            ].map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                onClick={() => playClick()}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--dim)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cyan)';
                  e.currentTarget.style.color = 'var(--cyan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'var(--dim)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.8rem',
            color: 'var(--muted)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Jay Babariya. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Engineered with React + TypeScript & ASP.NET Core standards</span>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBtt && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(108, 99, 255, 0.5)',
            border: 'none',
            cursor: 'pointer',
            zIndex: 9999,
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};
