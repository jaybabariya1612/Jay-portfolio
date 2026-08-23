import { motion } from 'framer-motion';

const BackToTop = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.a
      href="#home"
      id="btt"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ 
        opacity: typeof window !== 'undefined' && window.scrollY > 400 ? 1 : 0,
        y: typeof window !== 'undefined' && window.scrollY > 400 ? 0 : 20,
        scale: typeof window !== 'undefined' && window.scrollY > 400 ? 1 : 0.8,
      }}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        boxShadow: '0 0 20px var(--accent-glow)',
        zIndex: 500,
        cursor: 'pointer',
        transition: 'all var(--transition)',
      }}
    >
      <i className="bx bx-up-arrow-alt" />
    </motion.a>
  );
};

export default BackToTop;
