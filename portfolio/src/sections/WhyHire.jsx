import { motion } from 'framer-motion';
import { whyHireMe, processSteps } from '../data/content';

const WhyHire = () => {
  return (
    <section
      id="why-hire"
      style={{
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 64px)',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,184,108,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container why-inner" style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Why work with me</p>
            <h2 className="section-title">Why <span className="grad">Hire Me</span>?</h2>
            
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                marginBottom: '28px',
              }}
            >
              I&apos;m not just a developer — I&apos;m a partner in building your vision. I bring technical depth, strong work ethic, and a genuine passion for creating software that makes a difference.
            </p>
            
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
              }}
            >
              Whether you need a reliable full-stack developer for a complex enterprise project or a creative frontend engineer for a standout product — I&apos;m ready to deliver exceptional results.
            </p>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            className="why-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '16px',
            }}
          >
            {whyHireMe.map((item, index) => (
              <motion.div
                key={item.title}
                className="why-card"
                whileHover={{ borderColor: 'rgba(255,184,108,0.3)', y: -4 }}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '24px',
                  textAlign: 'center',
                  transition: 'all var(--transition)',
                }}
              >
                <div
                  className="why-card-icon"
                  style={{
                    fontSize: '2rem',
                    marginBottom: '12px',
                  }}
                >
                  {item.icon}
                </div>
                <div
                  className="why-card-title"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </div>
                <div
                  className="why-card-desc"
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyHire;
