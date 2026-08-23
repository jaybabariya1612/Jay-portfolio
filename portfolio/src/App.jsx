import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Services from './sections/Services'
import WhyHire from './sections/WhyHire'
import Process from './sections/Process'
import Achievements from './sections/Achievements'
import TechMarquee from './sections/TechMarquee'
import FunFacts from './sections/FunFacts'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import Preloader from './components/Preloader'
import './styles/theme.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Simulate preloader
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ParticleBackground />

          <Navbar 
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          <MobileMenu 
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          />

          <main id="main-content">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <WhyHire />
            <Process />
            <Achievements />
            <TechMarquee />
            <FunFacts />
            <FAQ />
            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </>
      )}
    </>
  )
}

export default App
