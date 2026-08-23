import { motion } from 'framer-motion';
import { stats } from '../data/content';
import { useCounterAnimation } from '../hooks/useEffects';

const StatsStrip = () => {
  return (
    <div
      className="stats-strip"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '32px clamp(20px, 4vw, 64px)',
      }}
    >
      <div
        className="container stats-inner"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '24px',
        }}
      >
        {stats.map((stat, index) => (
          <StatItem key={index} stat={stat} delay={index * 0.1} />
        ))}
      </div>
    </div>
  );
};

const StatItem = ({ stat, delay }) => {
  const count = useCounterAnimation(stat.value, 2000, true);

  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      style={{
        textAlign: 'center',
        padding: '24px',
      }}
    >
      <span
        className="stat-num"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'block',
          lineHeight: 1,
          marginBottom: '6px',
        }}
      >
        {count}{stat.value >= 10 ? '+' : '+'}
      </span>
      <span
        className="stat-label"
        style={{
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          fontWeight: 500,
        }}
      >
        {stat.label}
      </span>
    </motion.div>
  );
};

export default StatsStrip;
