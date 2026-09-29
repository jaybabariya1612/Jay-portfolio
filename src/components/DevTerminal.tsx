import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Play, CornerDownLeft, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, experiences, skillCategories, projects } from '../data/portfolioData';
import { playClick, playSuccess } from '../utils/sound';

interface DevTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const DevTerminal: React.FC<DevTerminalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div>
          <pre style={{ color: 'var(--cyan)', margin: 0, fontSize: '0.72rem', lineHeight: 1.2 }}>
{`
     ██╗ █████╗ ██╗   ██╗     ██████╗ ███████╗
     ██║██╔══██╗╚██╗ ██╔╝    ██╔═══██╗██╔════╝
     ██║███████║ ╚████╔╝     ██║   ██║███████╗
██   ██║██╔══██║  ╚██╔╝      ██║   ██║╚════██║
╚█████╔╝██║  ██║   ██║       ╚██████╔╝███████║
 ╚════╝ ╚═╝  ╚═╝   ╚═╝        ╚═════╝ ╚══════╝
`}
          </pre>
          <p style={{ marginTop: '8px', color: 'var(--bright)' }}>
            Welcome to <strong>JayOS Interactive Developer Terminal v2.6</strong>.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
            Type <span style={{ color: 'var(--cyan)' }}>help</span> to see available commands or click the chips below.
          </p>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    playClick();

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div><strong style={{ color: 'var(--cyan)' }}>help</strong> — List all available commands</div>
            <div><strong style={{ color: 'var(--cyan)' }}>skills</strong> — Print technical skills and arsenal</div>
            <div><strong style={{ color: 'var(--cyan)' }}>projects</strong> — List featured software systems & repositories</div>
            <div><strong style={{ color: 'var(--cyan)' }}>exp</strong> — Display professional experience timeline</div>
            <div><strong style={{ color: 'var(--cyan)' }}>resume</strong> — Launch curriculum vitae viewer</div>
            <div><strong style={{ color: 'var(--cyan)' }}>contact</strong> — Get direct email, phone and LinkedIn</div>
            <div><strong style={{ color: 'var(--cyan)' }}>sudo hire</strong> — Fast track inquiry & celebrate!</div>
            <div><strong style={{ color: 'var(--cyan)' }}>clear</strong> — Clear terminal screen history</div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {skillCategories.map((c, i) => (
              <div key={i}>
                <span style={{ color: c.color, fontWeight: 700 }}>{c.category}:</span>{' '}
                <span style={{ color: 'var(--dim)' }}>
                  {c.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {projects.map((p, i) => (
              <div key={i}>
                <span style={{ color: 'var(--green)' }}>[{p.categoryLabel}]</span>{' '}
                <strong style={{ color: 'var(--bright)' }}>{p.title}</strong> — {p.subtitle}
              </div>
            ))}
          </div>
        );
        break;

      case 'exp':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {experiences.map((exp, i) => (
              <div key={i}>
                <div style={{ color: 'var(--cyan)', fontWeight: 700 }}>
                  {exp.role} @ {exp.company} ({exp.period})
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>
                  {exp.points[0]}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'resume':
        onOpenResume();
        output = <div style={{ color: 'var(--green)' }}>✓ Launching interactive resume viewer modal...</div>;
        break;

      case 'contact':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div>Email: <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--cyan)' }}>{personalInfo.email}</a></div>
            <div>Phone: <span style={{ color: 'var(--green)' }}>{personalInfo.phone}</span></div>
            <div>Location: {personalInfo.location}</div>
            <div>GitHub: <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" style={{ color: 'var(--violet)' }}>github.com/jaybabariya1612</a></div>
            <div>LinkedIn: <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--cyan)' }}>linkedin.com/in/jay-babariya</a></div>
          </div>
        );
        break;

      case 'sudo hire':
      case 'hire':
        playSuccess();
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
        output = (
          <div style={{ color: 'var(--green)', fontWeight: 700 }}>
            🎉 ACCESS GRANTED! Thank you for considering Jay Babariya. Navigating to contact form...
          </div>
        );
        setTimeout(() => {
          onClose();
          const contactEl = document.getElementById('contact');
          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
        }, 1200);
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <div style={{ color: '#ff5f56' }}>
            Command not recognized: "{cmd}". Type <span style={{ color: 'var(--cyan)' }}>help</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          playClick();
          onClose();
        }
      }}
    >
      <div className="modal-content terminal-window" style={{ maxWidth: '780px' }}>
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              style={{ cursor: 'pointer', padding: 0 }}
            >
              <div className="terminal-dot dot-red" />
            </button>
            <div className="terminal-dot dot-yellow" />
            <div className="terminal-dot dot-green" />
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>
            jay@portfolio-workstation: ~ (zsh)
          </span>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            style={{ color: 'var(--muted)', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Command Quick Chips */}
        <div
          style={{
            padding: '10px 18px',
            background: 'rgba(11, 17, 32, 0.9)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto'
          }}
        >
          <span style={{ fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
            QUICK RUN:
          </span>
          {['help', 'skills', 'projects', 'exp', 'resume', 'contact', 'sudo hire', 'clear'].map((chip) => (
            <button
              key={chip}
              onClick={() => executeCommand(chip)}
              style={{
                padding: '3px 10px',
                borderRadius: '6px',
                background: 'rgba(108, 99, 255, 0.12)',
                border: '1px solid rgba(108, 99, 255, 0.28)',
                color: 'var(--cyan)',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="terminal-body" style={{ minHeight: '320px', maxHeight: '55vh' }}>
          {history.map((h, idx) => (
            <div key={idx} style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cyan)', fontWeight: 600 }}>
                <span style={{ color: 'var(--green)' }}>➜</span>
                <span style={{ color: 'var(--violet)' }}>jay@workstation</span>
                <span>$ {h.command}</span>
              </div>
              <div style={{ marginTop: '6px', paddingLeft: '18px' }}>
                {h.output}
              </div>
            </div>
          ))}

          {/* Active Input Line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cyan)' }}>
            <span style={{ color: 'var(--green)' }}>➜</span>
            <span style={{ color: 'var(--violet)' }}>jay@workstation</span>
            <span>$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                flexGrow: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem'
              }}
              autoFocus
              placeholder="Type command here..."
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
};
