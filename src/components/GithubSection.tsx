import React from 'react';
import { Github, GitPullRequest, GitCommit, GitBranch, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playClick } from '../utils/sound';

export const GithubSection: React.FC = () => {
  return (
    <section id="github" style={{ padding: '80px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-tag">Open Source Activity</span>
          <h2 className="section-title">
            Continuous <span className="grad-primary">Code Commits</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Documenting architectural patterns, contributing to open-source software, and maintaining repositories on GitHub.
          </p>
        </div>

        <div
          className="glow-card"
          style={{
            padding: '36px',
            background: 'rgba(15, 23, 41, 0.8)',
            textAlign: 'center'
          }}
        >
          {/* GitHub Contributions Graphic */}
          <div
            style={{
              overflowX: 'auto',
              padding: '16px 0',
              marginBottom: '24px'
            }}
          >
            <img
              src="https://ghchart.rshah.org/6C63FF/jaybabariya1612"
              alt="Jay Babariya GitHub Contributions Chart"
              style={{
                margin: '0 auto',
                maxWidth: '100%',
                borderRadius: '8px'
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="btn-primary"
            >
              <Github size={18} />
              <span>Explore GitHub @jaybabariya1612</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
