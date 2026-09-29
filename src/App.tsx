import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectureVisualizer } from './components/ArchitectureVisualizer';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Achievements } from './components/Achievements';
import { FunFacts } from './components/FunFacts';
import { FAQ } from './components/FAQ';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DevTerminal } from './components/DevTerminal';

const PortfolioContent: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg)', color: 'var(--bright)' }}>
      {/* Top Reading Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Cyber Grid & Ambient Auroras */}
      <div className="cyber-grid" />
      <div className="aurora-glow-1" />
      <div className="aurora-glow-2" />

      {/* Interactive Particles & Cursor */}
      <CursorGlow />

      {/* Header Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />
        <About onOpenResume={() => setResumeOpen(true)} />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <ArchitectureVisualizer />
        <Services />
        <Process />
        <Achievements />
        <GithubSection />
        <FunFacts />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Developer CLI Terminal Modal */}
      <DevTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => {
          setTerminalOpen(false);
          setResumeOpen(true);
        }}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default App;
