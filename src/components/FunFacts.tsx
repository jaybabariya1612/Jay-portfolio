import React from 'react';
import { Coffee, Database, Layers, Zap } from 'lucide-react';
import { funFacts } from '../data/portfolioData';

export const FunFacts: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee size={24} color="#F59E0B" />;
      case 'Database': return <Database size={24} color="#00FFB3" />;
      case 'Layers': return <Layers size={24} color="#6C63FF" />;
      default: return <Zap size={24} color="#00D4FF" />;
    }
  };

  return (
    <section id="fun-facts" style={{ padding: '80px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">Beyond The Code</span>
          <h2 className="section-title">
            Fun Facts & <span className="grad-primary">Engineering Mindset</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {funFacts.map((fact, idx) => (
            <div
              key={idx}
              className="glow-card"
              style={{
                padding: '26px',
                background: 'rgba(15, 23, 41, 0.75)'
              }}
            >
              <div style={{ marginBottom: '16px' }}>{getIcon(fact.icon)}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--bright)', marginBottom: '8px' }}>
                {fact.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                {fact.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
