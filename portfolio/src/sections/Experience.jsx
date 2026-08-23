import { motion } from 'framer-motion';
import { experiences, education } from '../data/content';

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 64px)',
        background: 'var(--bg-2)',
        position: 'relative',
      }}
    >
      <div className="container exp-inner" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '60px' }}
        >
          <p className="section-label">My journey</p>
          <h2 className="section-title">Work <span className="grad">Experience</span></h2>
        </motion.div>

        {/* Two Columns */}
        <div
          className="exp-cols"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}
              >
                💼
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                Experience
              </span>
            </div>

            <div className="timeline">
              {experiences.map((exp, index) => (
                <TimelineItem key={index} item={exp} isEducation={false} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--secondary), var(--accent))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}
              >
                🎓
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                Education
              </span>
            </div>

            <div className="timeline">
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} isEducation={true} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, isEducation, index }) => {
  const title = isEducation ? item.degree : item.title;
  const company = isEducation ? item.school : item.company;
  const period = item.period;
  const tags = item.tags || [];
  const description = item.description || [];

  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        position: 'relative',
        paddingLeft: '36px',
        paddingBottom: '32px',
      }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: isEducation ? 'var(--secondary)' : 'var(--accent)',
          boxShadow: `0 0 0 4px ${isEducation ? 'rgba(77,182,172,0.15)' : 'rgba(255,184,108,0.15)'}`,
        }}
      />

      {/* Card */}
      <motion.div
        className="exp-card"
        whileHover={{ borderColor: 'rgba(255,184,108,0.3)', y: -4 }}
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '28px',
          transition: 'all var(--transition)',
        }}
      >
        {/* Header */}
        <div
          className="exp-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '8px',
            flexWrap: 'wrap',
          }}
        >
          <div
            className="exp-title"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </div>
          <span
            className="exp-badge"
            style={{
              padding: '5px 12px',
              borderRadius: 'var(--radius-full)',
              background: item.isCurrent 
                ? 'rgba(74,222,128,0.1)' 
                : isEducation 
                  ? 'rgba(77,182,172,0.1)' 
                  : 'rgba(255,255,255,0.05)',
              border: item.isCurrent 
                ? '1px solid rgba(74,222,128,0.25)' 
                : isEducation 
                  ? '1px solid rgba(77,182,172,0.25)' 
                  : '1px solid var(--border)',
              color: item.isCurrent 
                ? 'var(--success)' 
                : isEducation 
                  ? 'var(--secondary)' 
                  : 'var(--text-secondary)',
              fontSize: '0.68rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            {item.isCurrent && (
              <span
                style={{
                  display: 'inline-block',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: 'var(--success)',
                }}
              />
            )}
            {period}
          </span>
        </div>

        <div
          className="exp-company"
          style={{
            fontSize: '0.82rem',
            color: isEducation ? 'var(--secondary)' : 'var(--text-secondary)',
            marginBottom: '16px',
          }}
        >
          {company}
        </div>

        {/* Description List */}
        <ul
          className="exp-list"
          style={{
            listStyle: 'none',
            marginBottom: '16px',
          }}
        >
          {description.map((desc, i) => (
            <li
              key={i}
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '6px',
                paddingLeft: '16px',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '8px',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: isEducation ? 'var(--secondary)' : 'var(--accent)',
                }}
              />
              {desc}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div
          className="exp-tags"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {tags.map((tag, i) => (
            <span
              key={i}
              className="exp-tag"
              style={{
                padding: '5px 12px',
                borderRadius: 'var(--radius-full)',
                background: isEducation 
                  ? 'rgba(77,182,172,0.07)' 
                  : 'rgba(255,184,108,0.07)',
                border: isEducation 
                  ? '1px solid rgba(77,182,172,0.2)' 
                  : '1px solid rgba(255,184,108,0.2)',
                color: isEducation ? 'var(--secondary)' : 'var(--accent)',
                fontSize: '0.7rem',
                fontWeight: 600,
                fontFamily: 'var(--font-mono)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
