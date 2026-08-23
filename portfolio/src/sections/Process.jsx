import { motion } from 'framer-motion';
import { processSteps } from '../data/content';

const Process = () => {
  return (
    <section
      id="process"
      style={{
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 64px)',
        background: 'var(--bg-2)',
        position: 'relative',
      }}
    >
      <div className="container process-inner" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-label">How I work</p>
          <h2 className="section-title">My Development <span className="grad">Process</span></h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="process-steps"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.num}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ borderColor: 'rgba(255,184,108,0.35)', y: -6 }}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '28px',
                textAlign: 'center',
                transition: 'all var(--transition)',
                position: 'relative',
              }}
            >
              {/* Step Number */}
              <div
                className="process-num"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, rgba(255,184,108,0.1), rgba(77,182,172,0.1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                className="process-icon"
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '16px',
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <div
                className="process-title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}
              >
                {step.title}
              </div>

              {/* Description */}
              <div
                className="process-desc"
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {step.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
