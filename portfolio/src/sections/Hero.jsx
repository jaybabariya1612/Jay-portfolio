import { motion } from 'framer-motion';
import { personalInfo, socialLinks, typingPhrases } from '../data/content';
import { useTypingEffect } from '../hooks/useEffects';

const Hero = () => {
  const typedText = useTypingEffect(typingPhrases);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px clamp(20px, 4vw, 64px) 60px',
        overflow: 'hidden',
      }}
    >
      {/* Background mesh gradient */}
      <div
        className="hero-mesh"
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 60% at 65% 40%, rgba(255,184,108,0.08) 0%, transparent 65%),
            radial-gradient(ellipse 50% 50% at 20% 70%, rgba(77,182,172,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(255,138,101,0.05) 0%, transparent 55%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Grid pattern */}
      <div
        className="hero-grid"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,184,108,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,184,108,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container hero-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left Content */}
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="hero-badge"
            variants={itemVariants}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255,184,108,0.3)',
              background: 'rgba(255,184,108,0.08)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--accent)',
              marginBottom: '24px',
            }}
          >
            <span
              className="hero-badge-dot"
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--success)',
                boxShadow: '0 0 8px var(--success)',
                animation: 'pulse-dot 2s infinite',
              }}
            />
            Open to new opportunities
          </motion.div>

          {/* Greeting */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '8px',
            }}
          >
            Hello, I&apos;m
          </motion.h2>

          {/* Name */}
          <motion.h1
            className="hero-name"
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Jay<br /><span className="grad">Babariya</span>
          </motion.h1>

          {/* Typing role */}
          <motion.p
            className="hero-role"
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '20px',
              minHeight: '2em',
            }}
          >
            I build <span id="typed" style={{ color: 'var(--text-primary)' }}>{typedText}</span>
            <span
              id="cursor-blink"
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1.1em',
                background: 'var(--secondary)',
                verticalAlign: 'text-bottom',
                marginLeft: '2px',
                animation: 'blink 0.75s infinite',
              }}
            />
          </motion.p>

          {/* Description */}
          <motion.p
            className="hero-desc"
            variants={itemVariants}
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.75,
              maxWidth: '520px',
              marginBottom: '36px',
            }}
          >
            Full Stack Developer specializing in ASP.NET Core & React. I craft elegant, high-performance web applications from database to user interface — based in Ahmedabad, India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-actions"
            variants={itemVariants}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.03, y: -2, boxShadow: '0 0 40px var(--accent-glow)' }}
              whileTap={{ scale: 0.97 }}
              style={{
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
              Get In Touch
            </motion.a>
            <motion.a
              href="JayBabariya_Resume.pdf"
              download
              className="btn-outline"
              whileHover={{ scale: 1.03, y: -2, borderColor: 'var(--accent)', color: 'var(--accent)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.03)',
                cursor: 'pointer',
                transition: 'all var(--transition)',
              }}
            >
              <i className="bx bxs-download" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="hero-socials"
            variants={itemVariants}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.1, y: -2, color: 'var(--accent)', borderColor: 'var(--accent)' }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.15rem',
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition)',
                  background: 'rgba(255,255,255,0.02)',
                  cursor: 'pointer',
                }}
              >
                <i className={`bx ${social.icon}`} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="hero-img-wrap"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <div
            className="hero-img-outer"
            style={{
              position: 'relative',
              width: 'clamp(260px, 28vw, 360px)',
              aspectRatio: '1',
            }}
          >
            {/* Glow effect */}
            <div
              className="hero-img-glow"
              style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,184,108,0.2) 0%, transparent 65%)',
                animation: 'pulse-glow 3s ease-in-out infinite',
              }}
            />

            {/* Gradient ring */}
            <div
              className="hero-img-ring"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent), var(--secondary), var(--accent-2))',
                padding: '3px',
              }}
            >
              <div
                className="hero-img-ring-inner"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  overflow: 'hidden',
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
            </div>

            {/* Floating chips */}
            <div
              className="hero-chip"
              style={{
                position: 'absolute',
                bottom: '-12px',
                left: '-20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--card-2)',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                className="hero-chip-dot"
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--success)',
                  boxShadow: '0 0 8px var(--success)',
                }}
              />
              Full Stack Dev
            </div>

            <div
              className="hero-chip"
              style={{
                position: 'absolute',
                top: '-12px',
                right: '-16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--card-2)',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                whiteSpace: 'nowrap',
              }}
            >
              <i className="bx bx-code-alt" style={{ color: 'var(--secondary)' }} />
              .NET + React
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        <span>scroll</span>
        <div
          className="scroll-wheel"
          style={{
            width: '20px',
            height: '32px',
            border: '1.5px solid var(--border)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '5px',
          }}
        >
          <div
            className="scroll-wheel-dot"
            style={{
              width: '3px',
              height: '6px',
              background: 'var(--accent)',
              borderRadius: '2px',
              animation: 'scroll-bounce 1.8s infinite',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
