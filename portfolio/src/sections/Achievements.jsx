import { motion } from 'framer-motion';
import { achievements, currentlyLearning, funFacts } from '../data/content';

const Achievements = () => {
  return (
    <section
      id="achievements"
      style={{
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 64px)',
        background: 'var(--bg)',
        position: 'relative',
      }}
    >
      <div className="container ach-inner" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-label">Milestones & growth</p>
          <h2 className="section-title">Achievements & <span className="grad">Learning</span></h2>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="ach-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
            marginBottom: '60px',
          }}
        >
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.title}
              className="ach-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ borderColor: ach.glowColor.replace('var(', 'rgba(').replace(')', ',0.3)'), boxShadow: `0 8px 48px ${ach.glowColor.replace(')', ',0.12)')}` }}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '28px',
                transition: 'all var(--transition)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glow effect on hover */}
              <div
                className="ach-glow"
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${ach.glowColor.replace(')', ',0.08)')} 0%, transparent 70%)`,
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              />

              {/* Icon */}
              <div
                className="ach-icon"
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '16px',
                }}
              >
                {ach.icon}
              </div>

              {/* Year Badge */}
              <span
                className="ach-year"
                style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  marginBottom: '12px',
                }}
              >
                {ach.year}
              </span>

              {/* Title */}
              <div
                className="ach-title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}
              >
                {ach.title}
              </div>

              {/* Description */}
              <div
                className="ach-desc"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {ach.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          className="learning-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '60px' }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            Currently <span className="grad-2">Learning</span>
          </h3>

          <div
            className="learning-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {currentlyLearning.map((item, index) => (
              <motion.div
                key={item.title}
                className="learning-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ borderColor: 'rgba(255,184,108,0.3)' }}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '24px',
                  transition: 'all var(--transition)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      flexShrink: 0,
                      background: item.iconBg,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {item.status}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '3px',
                    background: 'rgba(255,255,255,0.05)',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{
                      height: '100%',
                      borderRadius: '3px',
                      background: 'linear-gradient(90deg, var(--accent), var(--secondary))',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          className="fun-facts-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            Fun <span className="grad-3">Facts</span>
          </h3>

          <div
            className="fun-facts-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                className="fun-fact"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
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
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '12px',
                  }}
                >
                  {fact.emoji}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  {fact.title}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {fact.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
