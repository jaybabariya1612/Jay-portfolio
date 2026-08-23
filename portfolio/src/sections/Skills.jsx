import { motion } from 'framer-motion';
import { skills, techStack } from '../data/content';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 64px)',
        background: 'var(--bg)',
        position: 'relative',
      }}
    >
      <div className="container skills-inner" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '60px' }}
        >
          <p className="section-label">What I work with</p>
          <h2 className="section-title">My Tech <span className="grad">Arsenal</span></h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              maxWidth: '540px',
              margin: '0 auto',
            }}
          >
            Technologies I&apos;ve mastered across the full stack — from pixel-perfect interfaces to robust backend architectures.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              className="skill-category"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
              }}
              whileHover={{ borderColor: 'rgba(255,184,108,0.35)', boxShadow: '0 8px 48px rgba(255,184,108,0.1)' }}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '32px',
                transition: 'all var(--transition)',
                cursor: 'default',
              }}
            >
              {/* Category Header */}
              <div
                className="skill-cat-header"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                }}
              >
                <div
                  className="skill-cat-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    flexShrink: 0,
                    background: skillCategory.iconBg,
                  }}
                >
                  {skillCategory.icon}
                </div>
                <div>
                  <div
                    className="skill-cat-title"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {skillCategory.category}
                  </div>
                  <div
                    className="skill-cat-sub"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      marginTop: '2px',
                    }}
                  >
                    {skillCategory.subtitle}
                  </div>
                </div>
              </div>

              {/* Skill Tags */}
              <div
                className="skill-tags"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                {skillCategory.items.map((item) => (
                  <motion.span
                    key={item.name}
                    className="skill-tag"
                    whileHover={{ 
                      background: 'rgba(255,184,108,0.1)', 
                      borderColor: 'rgba(255,184,108,0.3)', 
                      color: 'var(--text-primary)',
                      y: -2,
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      transition: 'all var(--transition)',
                      cursor: 'default',
                    }}
                  >
                    <i className={`bx ${item.icon}`} style={{ fontSize: '1.05rem', color: item.color }} />
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
