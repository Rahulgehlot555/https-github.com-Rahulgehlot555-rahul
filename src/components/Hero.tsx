import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col justify-center bg-brand-bg pt-28 pb-12 overflow-hidden"
    >
      {/* Editorial Decorative Grids */}
      <div className="absolute inset-x-0 top-0 h-96 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#C8FF00_1px,transparent_1px),linear-gradient(to_bottom,#C8FF00_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Subtle Glow Background Accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left copy column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Section Marker */}
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center space-x-2">
              <span className="h-[2px] w-8 bg-brand-accent"></span>
              <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-brand-accent">
                STUDIO HEADQUARTERS
              </span>
            </motion.div>

            {/* Core Statement */}
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="font-display text-4xl sm:text-6xl lg:text-[68px] leading-[1.05] tracking-tight text-white mb-6 font-bold"
            >
              Your Content Deserves to <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-accent">
                Look as Good as Your Ideas
              </span>
            </motion.h1>

            {/* Professional Narrative Subhead */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-brand-body leading-relaxed mb-6 max-w-2xl"
            >
              Professional video editing for creators, coaches, and personal brands growing on{' '}
              <span className="text-white font-semibold">YouTube</span>,{' '}
              <span className="text-white font-semibold">Podcasts</span>,{' '}
              <span className="text-white font-semibold">Instagram</span>,{' '}
              <span className="text-white font-semibold">LinkedIn</span> — and the new frontier of{' '}
              <span className="text-brand-accent font-semibold">AI video</span>.
            </motion.p>

            {/* One-Liner Promise Accent */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-brand-accent italic font-medium mb-8 border-l-2 border-brand-accent pl-4"
            >
              "You record. You share. I make it impossible to scroll past."
            </motion.p>

            {/* Actions Block */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-10"
            >
              <button
                onClick={() => handleScrollTo('contact')}
                id="hero-cta-primary"
                className="px-8 py-4 rounded-sm bg-brand-accent text-brand-bg font-sans font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(200,255,0,0.4)] transition-all duration-300 flex items-center justify-center group focus:outline-none"
              >
                Let's Work Together
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScrollTo('work')}
                id="hero-cta-secondary"
                className="px-8 py-4 rounded-sm border border-white text-white font-sans font-bold text-sm uppercase tracking-wider hover:bg-white/10 hover:border-brand-accent hover:text-brand-accent transition-all duration-300 flex items-center justify-center focus:outline-none"
              >
                See My Work
                <Play className="ml-2 w-3.5 h-3.5 animate-pulse" />
              </button>
            </motion.div>

            {/* Divider */}
            <motion.hr
              variants={itemVariants}
              className="border-t border-[#1F1F1F] w-full mb-6"
            />

            {/* Trust and capabilities bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-start gap-y-3 gap-x-5 text-brand-muted text-xs font-medium tracking-wide uppercase py-1"
            >
              <span className="text-white hover:text-brand-accent transition-colors duration-200">
                4+ Years Experience
              </span>
              <span className="text-[#333333]">•</span>
              <span className="flex items-center space-x-1">
                <span>US</span> · <span>UK</span> · <span>Canada</span> · <span>Australia</span>
              </span>
              <span className="text-[#333333]">•</span>
              <span className="text-white/80">
                YouTube · Podcast · UGC · CGI Ads
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Stylized interactive Creator Person graphic */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Ambient Background Glow for the card image */}
            <div className="absolute inset-0 bg-brand-accent/5 rounded-full blur-2xl -z-10 animate-pulse duration-5000"></div>

            {/* Core Artwork Card */}
            <div className="w-full max-w-[370px] bg-brand-card/70 border border-[#222222] p-4 rounded-sm relative shadow-2xl group hover:border-brand-accent/30 transition-all duration-500">
              
              {/* Top Cybernetic Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-accent/50 -translate-x-1 -translate-y-1"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-accent/50 translate-x-1 -translate-y-1"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-accent/50 -translate-x-1 translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-accent/50 translate-x-1 translate-y-1"></div>

              {/* Main portrait image of the professional creative person */}
              <div className="aspect-[4/5] relative bg-black overflow-hidden rounded-xs border border-white/5">
                <img 
                  src="https://i.postimg.cc/fLmn12q4/image.png" 
                  alt="Lead Creative Video Editor Portfolio Headshot" 
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Left Floating Neon Badges: Editor Status */}
                <div className="absolute top-3 left-3 bg-[#0a0a0a]/90 backdrop-blur-md border border-[#333333] px-2.5 py-1 rounded-sm flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent absolute top-2.5 left-3"></span>
                  <span className="font-mono text-[9px] font-bold text-white uppercase tracking-wider">
                    EDITOR ONLINE
                  </span>
                </div>

                {/* Middle Flare Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-80" />


              </div>

              {/* Dynamic Retention Widget block underneath the image */}
              <div className="mt-3.5 p-3 rounded-xs bg-[#111111] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-display font-bold text-sm text-white block uppercase tracking-wider">
                    Rahul Gehlot
                  </span>
                  <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest mt-0.5 block">
                    Professional video editor
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-brand-accent/10 px-2 py-1 rounded-xs border border-brand-accent/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
                  <span className="text-[8px] font-mono text-brand-accent font-bold uppercase tracking-wider">AVAILABLE</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Editorial bottom visual decoration */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-300" onClick={() => handleScrollTo('pain-points')}>
        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-brand-muted mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-brand-accent" />
        </motion.div>
      </div>
    </section>
  );
}
