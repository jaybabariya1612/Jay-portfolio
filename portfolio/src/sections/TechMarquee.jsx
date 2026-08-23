import { motion } from 'framer-motion';
import { techStack } from '../data/content';

const TechMarquee = () => {
  return (
    <div
      className="tech-orbit-section"
      style={{
        padding: '40px 0',
        background: 'var(--surface)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Gradient masks */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(90deg, var(--surface) 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(-90deg, var(--surface) 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Marquee Track */}
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <motion.div
          className="tech-scroll-track"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexShrink: 0,
            minWidth: 'max-content',
          }}
        >
          {/* Original items */}
          {techStack.map((tech, index) => (
            <TechPill key={`${tech.name}-${index}`} tech={tech} />
          ))}
          {/* Duplicate for seamless loop */}
          {techStack.map((tech, index) => (
            <TechPill key={`dup-${tech.name}-${index}`} tech={tech} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const TechPill = ({ tech }) => {
  return (
    <div
      className="tech-pill"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 18px',
        borderRadius: 'var(--radius-full)',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        fontFamily: 'var(--font-display)',
        fontSize: '0.8rem',
        fontWeight: 600,
        color: 'var(--text-secondary)',
        whiteSpace: 'nowrap',
      }}
    >
      <i className={`bx ${tech.icon}`} style={{ fontSize: '1.1rem', color: tech.color }} />
      {tech.name}
    </div>
  );
};

export default TechMarquee;
