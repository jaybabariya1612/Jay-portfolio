import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '60px clamp(20px, 4vw, 64px) 30px',
      }}
    >
      <div className="container footer-inner" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          className="footer-top"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            paddingBottom: '40px',
            borderBottom: '1px solid var(--border)',
            marginBottom: '30px',
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              className="footer-logo"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '12px',
              }}
            >
              JB.
            </div>
            <p
              className="footer-desc"
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '260px',
              }}
            >
              Full Stack Developer building elegant, high-performance web applications from Ahmedabad, India.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    transition: 'all var(--transition)',
                    cursor: 'pointer',
                  }}
                >
                  <i className={`bx ${social.icon}`} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4
              className="footer-col-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              Navigation
            </h4>
            {['Home', 'About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="footer-link"
                whileHover={{ x: 4, color: 'var(--accent)' }}
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '10px',
                  transition: 'all var(--transition)',
                  cursor: 'pointer',
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Sections Column */}
          <div>
            <h4
              className="footer-col-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              Sections
            </h4>
            {['Services', 'Achievements', 'FAQ', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="footer-link"
                whileHover={{ x: 4, color: 'var(--accent)' }}
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '10px',
                  transition: 'all var(--transition)',
                  cursor: 'pointer',
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Resources Column */}
          <div>
            <h4
              className="footer-col-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              Resources
            </h4>
            {[
              { label: 'Download CV', href: 'JayBabariya_Resume.pdf', download: true },
              { label: 'GitHub Profile', href: personalInfo.email.replace('@', '') },
              { label: 'Send Email', href: `mailto:${personalInfo.email}` },
              { label: 'Call Me', href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="footer-link"
                whileHover={{ x: 4, color: 'var(--accent)' }}
                download={item.download || undefined}
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '10px',
                  transition: 'all var(--transition)',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p
            className="footer-copy"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-secondary)',
            }}
          >
            © {currentYear} Jay Babariya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
