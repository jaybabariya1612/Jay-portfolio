import { motion } from 'framer-motion';

const Navbar = ({ activeSection, onNavigate }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      id="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 clamp(20px, 4vw, 64px)',
      }}
    >
      <div
        className="nav-inner"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
          transition: 'all var(--transition)',
        }}
      >
        <motion.a
          href="#home"
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          JB.
        </motion.a>

        {/* Desktop Nav Links */}
        <ul
          className="nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            listStyle: 'none',
          }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <motion.a
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.href);
                }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  color: activeSection === link.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  transition: 'all var(--transition)',
                  background: activeSection === link.href.slice(1) ? 'rgba(255,184,108,0.12)' : 'transparent',
                }}
              >
                {link.name}
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="nav-cta"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--accent-glow)' }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            onNavigate('#contact');
          }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.82rem',
            fontWeight: 700,
            padding: '9px 22px',
            borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
            color: '#fff',
            boxShadow: '0 0 20px var(--accent-glow)',
            cursor: 'pointer',
            transition: 'all var(--transition)',
          }}
        >
          Hire Me
        </motion.a>

        {/* Mobile Hamburger - TODO: implement mobile menu toggle */}
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '6px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'var(--text-primary)',
              borderRadius: '1px',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'var(--text-primary)',
              borderRadius: '1px',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'var(--text-primary)',
              borderRadius: '1px',
            }}
          />
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
