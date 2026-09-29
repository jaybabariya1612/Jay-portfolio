import React, { useState } from 'react';
import { 
  Server, 
  Layout, 
  Database, 
  Cpu, 
  Boxes, 
  Layers, 
  Sparkles, 
  Zap 
} from 'lucide-react';
import { skillCategories, currentlyLearning } from '../data/portfolioData';
import { playClick } from '../utils/sound';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.category.toLowerCase().includes(activeCategory));

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server size={20} />;
      case 'Layout': return <Layout size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'Boxes': return <Boxes size={20} />;
      default: return <Layers size={20} />;
    }
  };

  return (
    <section id="skills" style={{ padding: 'clamp(70px, 8vw, 120px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 32px)' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">Technical Arsenal</span>
          <h2 className="section-title">
            Skills & <span className="grad-primary">Core Competencies</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Production-tested technologies across the full stack — from high-throughput .NET Core APIs and SQL procedures to interactive React interfaces.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '44px'
          }}
        >
          {[
            { id: 'all', label: 'All Disciplines' },
            { id: 'backend', label: 'Backend (.NET & C#)' },
            { id: 'frontend', label: 'Frontend (React & UI)' },
            { id: 'database', label: 'Database & SQL' },
            { id: 'api', label: 'Tools & DevOps' },
            { id: 'systems', label: 'Enterprise & Automation' }
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playClick();
                  setActiveCategory(tab.id);
                }}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--cyan)' : '1px solid var(--border)',
                  background: isActive ? 'rgba(0, 212, 255, 0.15)' : 'var(--card)',
                  color: isActive ? 'var(--cyan)' : 'var(--muted)',
                  boxShadow: isActive ? '0 0 16px var(--cyan-glow)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
          className="skills-grid"
        >
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glow-card"
              style={{
                padding: 'clamp(22px, 3vw, 32px)',
                background: 'var(--card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: `${cat.color}18`,
                      color: cat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 15px ${cat.color}25`,
                      flexShrink: 0
                    }}
                  >
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--bright)' }}>
                      {cat.category}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '2px' }}>
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '18px' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: skill.highlight ? 700 : 500,
                        background: skill.highlight ? `${cat.color}18` : 'var(--bg-2)',
                        border: skill.highlight ? `1px solid ${cat.color}45` : '1px solid var(--border)',
                        color: skill.highlight ? cat.color : 'var(--dim)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = cat.color;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = skill.highlight ? `${cat.color}45` : 'var(--border)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {skill.highlight && <Sparkles size={12} color={cat.color} />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div
          style={{
            padding: 'clamp(24px, 4vw, 36px)',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <Zap size={22} color="var(--cyan)" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--bright)' }}>
              Currently Expanding & Continuous Learning
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '20px'
            }}
          >
            {currentlyLearning.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '20px',
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--bright)' }}>
                    {item.title}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: item.color, fontWeight: 700 }}>
                    {item.progress}%
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '14px' }}>
                  {item.status}
                </div>
                {/* Progress bar */}
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '9999px',
                    background: 'var(--card)',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      width: `${item.progress}%`,
                      height: '100%',
                      borderRadius: '9999px',
                      background: `linear-gradient(90deg, ${item.color}88, ${item.color})`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
