import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-bg/80 backdrop-blur-md border-b border-[#222222] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            onClick={(e) => handleScrollTo('hero', e)}
            id="nav-logo"
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <span className="font-display text-2xl font-bold tracking-wider text-brand-accent transition-transform duration-300 group-hover:scale-105">
              RG
            </span>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-brand-muted group-hover:text-white transition-colors duration-300 hidden sm:inline-block">
              .studio
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8" id="nav-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(link.id, e)}
                className={`font-sans text-sm font-semibold tracking-wide uppercase transition-all duration-200 relative py-1 focus:outline-none ${
                  activeSection === link.id
                    ? 'text-brand-accent'
                    : 'text-brand-muted hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Nav CTA (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo('contact', e)}
              id="nav-cta-desktop"
              className="inline-flex items-center px-5 py-2.5 rounded-sm bg-brand-accent text-brand-bg font-sans font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(200,255,0,0.3)] transition-all duration-300"
            >
              Let's Talk
              <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburguer Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brand-body hover:text-brand-accent focus:outline-none"
            aria-label="Toggle Menu"
            id="nav-mobile-hamburger"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-brand-bg border-b border-[#222222]"
            id="nav-mobile-menu"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleScrollTo(link.id, e)}
                  className={`block py-2 font-sans text-base font-bold uppercase tracking-widest border-b border-[#181818] ${
                    activeSection === link.id
                      ? 'text-brand-accent'
                      : 'text-brand-muted hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo('contact', e)}
                className="w-full text-center inline-flex justify-center items-center py-3 rounded-sm bg-brand-accent text-brand-bg font-sans font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                Let's Talk
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
