import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig, personalInfo } from '../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  useEffect(() => {
    if (!firebaseConfig.apiKey) return;
    // Initialize Firebase only on client side
    try {
      const app = initializeApp(firebaseConfig);
      window.db = getFirestore(app);
    } catch (e) {
      console.log('Firebase already initialized');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const db = window.db;
      if (!db) throw new Error('Database not initialized');

      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: new Date().toISOString(),
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 64px)',
        background: 'var(--bg)',
        position: 'relative',
      }}
    >
      <div className="container contact-inner" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Let&apos;s Work <span className="grad">Together</span></h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '24px',
              }}
            >
              Contact Information
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginBottom: '32px',
              }}
            >
              {[
                { icon: 'bx-envelope', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: 'bx-phone', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
                { icon: 'bx-map', label: 'Location', value: personalInfo.location },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(255,184,108,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      color: 'var(--accent)',
                      flexShrink: 0,
                    }}
                  >
                    <i className={`bx ${item.icon}`} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        marginBottom: '2px',
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          transition: 'color var(--transition)',
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                }}
              >
                Follow Me
              </h4>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                }}
              >
                {[
                  { platform: 'GitHub', icon: 'bxl-github', url: 'https://github.com/jaybabariya1612' },
                  { platform: 'LinkedIn', icon: 'bxl-linkedin', url: 'https://www.linkedin.com/in/jay-babariya-81564b357' },
                  { platform: 'Twitter', icon: 'bxl-twitter', url: 'https://x.com/JayBabariya18' },
                  { platform: 'Instagram', icon: 'bxl-instagram-alt', url: 'https://www.instagram.com/jaybabariya_01' },
                ].map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3, color: 'var(--accent)' }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      color: 'var(--text-secondary)',
                      transition: 'all var(--transition)',
                      cursor: 'pointer',
                    }}
                  >
                    <i className={`bx ${social.icon}`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '16px',
                  marginBottom: '16px',
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      transition: 'all var(--transition)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(255,184,108,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      transition: 'all var(--transition)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(255,184,108,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    transition: 'all var(--transition)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255,184,108,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    resize: 'vertical',
                    transition: 'all var(--transition)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255,184,108,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                style={{
                  width: '100%',
                  padding: '15px 32px',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  background: isSubmitting
                    ? 'var(--surface)'
                    : 'linear-gradient(135deg, var(--accent), var(--secondary))',
                  color: isSubmitting ? 'var(--text-muted)' : '#fff',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all var(--transition)',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '16px',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(74,222,128,0.1)',
                    border: '1px solid rgba(74,222,128,0.3)',
                    color: 'var(--success)',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                  }}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '16px',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(251,113,133,0.1)',
                    border: '1px solid rgba(251,113,133,0.3)',
                    color: 'var(--error)',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                  }}
                >
                  ✕ Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
