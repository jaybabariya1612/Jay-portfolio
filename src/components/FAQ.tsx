import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqs } from '../data/portfolioData';
import { playClick } from '../utils/sound';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    playClick();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">
            Frequently Asked <span className="grad-primary">Questions</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Answers to common questions regarding tech stack, availability, communication, and process.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glow-card"
                style={{
                  background: isOpen ? 'rgba(15, 23, 41, 0.9)' : 'rgba(15, 23, 41, 0.65)',
                  border: isOpen ? '1px solid rgba(0, 212, 255, 0.35)' : '1px solid var(--border)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    color: isOpen ? 'var(--cyan)' : 'var(--bright)',
                    fontWeight: 700,
                    fontSize: '1.02rem',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ paddingRight: '16px' }}>{faq.q}</span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(0, 212, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? 'var(--cyan)' : 'var(--muted)',
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 22px',
                      color: 'var(--dim)',
                      fontSize: '0.94rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                      paddingTop: '14px'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
