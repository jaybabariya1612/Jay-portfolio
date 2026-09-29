import React from 'react';
import { Compass, Cpu, Code, ShieldCheck, Rocket } from 'lucide-react';
import { processSteps } from '../data/portfolioData';

export const Process: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass size={22} />;
      case 'Cpu': return <Cpu size={22} />;
      case 'Code': return <Code size={22} />;
      case 'ShieldCheck': return <ShieldCheck size={22} />;
      case 'Rocket': return <Rocket size={22} />;
      default: return <Code size={22} />;
    }
  };

  return (
    <section id="process" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-tag">Methodology</span>
          <h2 className="section-title">
            Development <span className="grad-primary">Workflow & Lifecycle</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A disciplined, engineering-first approach from discovery and API contract drafting to testing and production deployment.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}
        >
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="glow-card"
              style={{
                padding: '28px',
                background: 'rgba(15, 23, 41, 0.75)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'rgba(108, 99, 255, 0.25)',
                  lineHeight: 1,
                  marginBottom: '16px'
                }}
              >
                {step.num}
              </div>

              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(0, 212, 255, 0.12)',
                  color: 'var(--cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                {getStepIcon(step.icon)}
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--bright)', marginBottom: '8px' }}>
                {step.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
