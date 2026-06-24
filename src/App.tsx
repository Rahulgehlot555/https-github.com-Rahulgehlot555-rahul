import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import About from './components/About';
import WorkProfile from './components/WorkProfile';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset to trigger active state earlier

      const sections = ['work', 'services', 'faq', 'contact'];
      let currentSection = '';

      // Check if we're near the top of the page (Hero section)
      if (window.scrollY < 150) {
        setActiveSection('');
        return;
      }

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-brand-bg text-brand-body font-sans relative min-h-screen selection:bg-brand-accent selection:text-black overflow-x-hidden">
      {/* Custom interactive cursor tracking follower */}
      <CustomCursor />

      {/* Ambient background particle canvas */}
      <ParticleBackground />

      {/* Background radial spotlight that follows or rests near main interactions */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-gradient from-transparent to-brand-bg opacity-30"></div>

      {/* Navigation bar with dynamic highlight */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections Stream in Exact Order */}
      <main className="relative z-10">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. PAIN POINTS SECTION */}
        <PainPoints />

        {/* 3. ABOUT SECTION */}
        <About />

        {/* WORK PROFILE SECTION WITH INTEGRATED VIMEO MASTER REEL */}
        <WorkProfile />

        {/* 4. SERVICES SECTION */}
        <Services />

        {/* 5. FAQ SECTION */}
        <FAQ />

        {/* 6. TESTIMONIALS SECTION */}
        <Testimonials />

        {/* 7. CTA SECTION */}
        <ContactCTA />
      </main>

      {/* 11. FOOTER */}
      <Footer />
    </div>
  );
}
