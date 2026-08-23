import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/content';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      style={{
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 64px)',
        background: 'var(--bg-2)',
        position: 'relative',
      }}
    >
      <div className="container faq-inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px' }}
        >
          <p className="section-label">Common questions</p>
          <h2 className="section-title">Frequently Asked <span className="grad">Questions</span></h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq, index, isOpen, onClick }) => {
  return (
    <motion.div
      className="faq-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{
        marginBottom: '12px',
      }}
    >
      <motion.button
        className="faq-question"
        onClick={onClick}
        whileHover={{ borderColor: 'rgba(255,184,108,0.3)' }}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '20px 24px',
          background: 'var(--card)',
          border: `1px solid ${isOpen ? 'rgba(255,184,108,0.3)' : 'var(--border)'}`,
          borderRadius: 'var(--radius)',
          textAlign: 'left',
          cursor: 'pointer',
          transition: 'all var(--transition)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            flex: 1,
          }}
        >
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: '1.1rem',
            color: isOpen ? 'var(--accent)' : 'var(--text-secondary)',
            flexShrink: 0,
          }}
        >
          <i className="bx bx-chevron-down" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: '0 24px 20px',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;
