import React from 'react';
import { 
  Layers, 
  Server, 
  Zap, 
  Database, 
  Cpu, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { services } from '../data/portfolioData';
import { playClick } from '../utils/sound';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers size={24} />;
      case 'Server': return <Server size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'Database': return <Database size={24} />;
      case 'Cpu': return <Cpu size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  return (
    <section id="services" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-tag">Value Proposition</span>
          <h2 className="section-title">
            Engineering <span className="grad-primary">Services & Solutions</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Comprehensive full-stack, backend, and desktop solutions tailored for reliability, security, and high performance.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px'
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.id}
              className="glow-card"
              style={{
                padding: '32px',
                background: 'rgba(15, 23, 41, 0.75)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: `${svc.color}15`,
                    color: svc.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    boxShadow: `0 4px 20px ${svc.color}25`
                  }}
                >
                  {getIcon(svc.icon)}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--bright)', marginBottom: '10px' }}>
                  {svc.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--dim)', lineHeight: 1.65, marginBottom: '24px' }}>
                  {svc.desc}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {svc.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '0.76rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--muted)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
