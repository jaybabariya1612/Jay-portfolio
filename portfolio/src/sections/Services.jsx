import { motion } from 'framer-motion';
import { services } from '../data/content';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section
      id="services"
      style={{
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 64px)',
        background: 'var(--bg-2)',
        position: 'relative',
      }}
    >
      <div className="container services-inner" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-label">What I offer</p>
          <h2 className="section-title">Services I <span className="grad">Provide</span></h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
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
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
              }}
              whileHover={{ 
                borderColor: 'rgba(255,184,108,0.35)', 
                boxShadow: '0 8px 48px rgba(255,184,108,0.1)',
                y: -6,
              }}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '32px',
                transition: 'all var(--transition)',
                cursor: 'default',
              }}
            >
              {/* Icon */}
              <div
                className="service-icon"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                  marginBottom: '20px',
                  background: service.iconBg,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <div
                className="service-title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                }}
              >
                {service.title}
              </div>

              {/* Description */}
              <div
                className="service-desc"
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {service.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
