import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/content';

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 64px)',
        background: 'var(--bg-2)',
        position: 'relative',
      }}
    >
      <div
        className="container about-inner"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left Image */}
        <motion.div
          className="about-img-wrap"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative',
            width: 'clamp(240px, 25vw, 320px)',
            flexShrink: 0,
          }}
        >
          <div
            className="about-img-frame"
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--surface)',
              aspectRatio: '3/4',
            }}
          >
            <img
              src="images/Jay_Babariya_Profile_Picture.jpg"
              alt="Jay Babariya"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
          <div
            className="about-tag"
            style={{
              position: 'absolute',
              bottom: '-16px',
              right: '-16px',
              padding: '14px 18px',
              background: 'var(--card-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '1.4rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BCA
            </span>
            Silver Oak University
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About <span className="grad">Me</span></h2>
          
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              marginBottom: '16px',
            }}
          >
            I&apos;m a passionate Full Stack Developer with a strong foundation in building robust, scalable web applications. Currently working as a Junior Software Developer at Destiny Solutions Pvt. Ltd., I specialize in the .NET ecosystem combined with modern React frontends.
          </p>
          
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              marginBottom: '28px',
            }}
          >
            I thrive on transforming complex problems into intuitive digital solutions. Beyond code, I bring strong communication, collaborative spirit, and a genuine passion for clean architecture and exceptional user experiences.
          </p>

          {/* Info Grid */}
          <div
            className="about-info-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              margin: '28px 0',
            }}
          >
            {[
              { icon: 'bx-envelope', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: 'bx-phone', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
              { icon: 'bx-map', label: 'Location', value: personalInfo.location },
              { icon: 'bx-briefcase', label: 'Status', value: personalInfo.status, isStatus: true },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="about-info-item"
                whileHover={{ borderColor: 'rgba(255,184,108,0.3)', background: 'var(--card-2)' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 16px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all var(--transition)',
                  cursor: item.href ? 'pointer' : 'default',
                }}
              >
                <div
                  className="about-info-icon"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(255,184,108,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.05rem',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}
                >
                  <i className={`bx ${item.icon}`} />
                </div>
                <div>
                  <div
                    className="about-info-label"
                    style={{
                      fontSize: '0.68rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '2px',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="about-info-val"
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: item.isStatus ? 'var(--success)' : 'var(--text-primary)',
                      transition: 'color var(--transition)',
                    }}
                  >
                    {item.href ? (
                      <a href={item.href} style={{ color: 'inherit' }}>
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="JayBabariya_Resume.pdf"
            download
            className="btn-primary"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginTop: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 30px',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.88rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, var(--accent), var(--secondary))',
              color: '#fff',
              boxShadow: '0 0 24px var(--accent-glow)',
              cursor: 'pointer',
              transition: 'all var(--transition)',
            }}
          >
            <i className="bx bxs-file-pdf" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
