import React from 'react';
import { Award, FileCheck, GraduationCap, Rocket, Layers, GitBranch } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award size={22} />;
      case 'FileCheck': return <FileCheck size={22} />;
      case 'GraduationCap': return <GraduationCap size={22} />;
      case 'Rocket': return <Rocket size={22} />;
      case 'Layers': return <Layers size={22} />;
      default: return <GitBranch size={22} />;
    }
  };

  return (
    <section id="achievements" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-tag">Key Milestones</span>
          <h2 className="section-title">
            Achievements & <span className="grad-primary">Recognitions</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Tangible benchmarks of continuous improvement, commercial deployments, and professional growth.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glow-card"
              style={{
                padding: '28px',
                background: 'rgba(15, 23, 41, 0.75)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: `3px solid ${item.glow}`
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: `${item.glow}18`,
                      color: item.glow,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getIcon(item.icon)}
                  </div>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: item.glow,
                      fontWeight: 700
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--bright)', marginBottom: '8px' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--dim)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
