import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Terminal, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Sun,
  Moon
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { playClick, toggleSound, isSoundEnabled } from '../utils/sound';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    setSoundOn(isSoundEnabled());

    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'architecture', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Architecture', href: '#architecture', id: 'architecture' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '10px clamp(16px, 3vw, 28px)' : '16px clamp(16px, 3vw, 28px)',
          background: scrolled ? 'var(--glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 30px -10px rgba(0, 0, 0, 0.12)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          {/* Left: Brand Logo & Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <a
              href="#home"
              onClick={() => playClick()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  fontFamily: 'var(--font-display)',
                  boxShadow: '0 4px 14px var(--violet-glow)',
                  flexShrink: 0
                }}
              >
                JB
                {/* Embedded Pulsing Active Dot on Logo */}
                <span
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    background: 'var(--green)',
                    boxShadow: '0 0 8px var(--green)',
                    border: '1.5px solid var(--bg)'
                  }}
                />
              </div>

              <span
                className="grad-primary"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                  lineHeight: 1
                }}
              >
                Jay Babariya
              </span>
            </a>

            {/* Subtle Single-Line Status Pill (Strictly No-Wrap) */}
            <div
              className="status-badge-desktop"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                background: 'rgba(0, 255, 179, 0.08)',
                border: '1px solid rgba(0, 255, 179, 0.25)',
                borderRadius: '9999px',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--green)',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--green)',
                  boxShadow: '0 0 6px var(--green)'
                }}
              />
              Available for work
            </div>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav
            className="desktop-nav-menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              background: 'var(--card)',
              padding: '4px 8px',
              borderRadius: '9999px',
              border: '1px solid var(--border)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              flexShrink: 1
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => playClick()}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    color: isActive ? (isDark ? '#ffffff' : 'var(--violet)') : 'var(--muted)',
                    background: isActive ? 'rgba(108, 99, 255, 0.16)' : 'transparent',
                    border: isActive ? '1px solid var(--border-active)' : '1px solid transparent',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--bright)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--muted)';
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Quick Action Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexShrink: 0
            }}
          >
            {/* Theme Toggle (Dark / Light) */}
            <button
              onClick={() => {
                playClick();
                toggleTheme();
              }}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isDark ? 'var(--amber)' : 'var(--violet)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Sound FX Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Sound FX On (Click to Mute)' : 'Sound FX Muted'}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: soundOn ? 'var(--cyan)' : 'var(--muted)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              {soundOn ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            {/* Terminal CLI Modal Trigger */}
            <button
              onClick={() => {
                playClick();
                onOpenTerminal();
              }}
              title="Launch Developer CLI Terminal"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--violet)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              <Terminal size={15} />
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                playClick();
                onOpenResume();
              }}
              className="btn-primary btn-sm resume-header-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                fontSize: '0.84rem',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              style={{
                display: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--bright)',
                cursor: 'pointer',
                flexShrink: 0
              }}
              className="mobile-hamburger-btn"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '18px',
            padding: '40px 24px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: activeSection === link.id ? 'var(--cyan)' : 'var(--bright)',
                textDecoration: 'none'
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexDirection: 'column', width: '100%', maxWidth: '280px' }}>
            <button
              onClick={() => {
                playClick();
                toggleTheme();
              }}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              <span>{isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
            </button>

            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <FileText size={16} />
              <span>See Complete Resume</span>
            </button>

            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Terminal size={16} />
              <span>Launch Terminal CLI</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        /* Responsive Breakpoints */
        @media (min-width: 1240px) {
          .status-badge-desktop {
            display: inline-flex !important;
          }
        }
        @media (max-width: 1040px) {
          .desktop-nav-menu {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }
        @media (max-width: 480px) {
          .resume-header-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
