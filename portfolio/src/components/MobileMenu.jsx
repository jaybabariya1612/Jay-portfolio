import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10,10,11,0.97)',
              backdropFilter: 'blur(30px)',
              zIndex: 999,
            }}
          />
          
          {/* Menu Content */}
          <motion.div
            className="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              pointerEvents: 'auto',
            }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="mob-link"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.05, color: 'var(--accent)' }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--text-secondary)',
                  transition: 'color var(--transition)',
                  cursor: 'pointer',
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
