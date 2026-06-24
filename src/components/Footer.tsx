import { Instagram, Linkedin, Youtube, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-brand-bg pt-20 pb-12 border-t border-[#161616] relative overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top bar with back to top */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-[#181818] mb-12">
          {/* Logo Brand Title */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <span className="font-display text-2xl font-black tracking-wider text-white">
              RAHUL GEHLOT
            </span>
            <p className="font-sans text-xs text-brand-muted uppercase tracking-[0.2em] mt-1">
              Premium Freelance Video Studio
            </p>
          </div>

          {/* Quick jump to top */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-sm bg-brand-card border border-[#222222] hover:border-brand-accent text-brand-body hover:text-brand-accent flex items-center justify-center transition-all duration-300 focus:outline-none group shadow-md"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Middle Meta Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Tagline Column */}
          <div className="md:col-span-5 text-center md:text-left">
            <h4 className="font-sans text-xs text-brand-accent font-bold uppercase tracking-[0.2em] mb-3">
              Craft Philosophy
            </h4>
            <p className="font-sans text-sm text-brand-body leading-relaxed max-w-sm">
              Your content deserves to look as good as your ideas. Working with elite creators, 
              brands, and agency campaigns worldwide to bypass cheap edits and build massive audiences.
            </p>
          </div>

          {/* Direct Address Column */}
          <div className="md:col-span-4 text-center md:text-left">
            <h4 className="font-sans text-xs text-brand-muted font-bold uppercase tracking-[0.2em] mb-3">
              HQ Location
            </h4>
            <p className="font-sans text-sm text-brand-body mb-1">
              Based in Jodhpur, India
            </p>
            <p className="font-sans text-xs text-brand-muted uppercase tracking-wide">
              Working with Clients Worldwide
            </p>
          </div>

          {/* Contact Actions Column */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="font-sans text-xs text-brand-muted font-bold uppercase tracking-[0.2em] mb-3">
              Get in Touch
            </h4>
            <button
              onClick={() => {
                const subject = encodeURIComponent('Video Editing Partnership Inquiry');
                const body = encodeURIComponent(
                  'Hi Rahul,\n\n' +
                  'I absolutely love your work profile and would love to partner with you for video editing.\n\n' +
                  'Here are my project details:\n' +
                  '- Project Style: [UGC / YT Intro / CGI Ad / YouTube long-form / Other]\n' +
                  '- My Channel or Brand Link: \n' +
                  '- Expected video frequency: \n\n' +
                  'Looking forward to discussing further!\n\n' +
                  'Best regards,'
                );
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=gehlot.rahul2999@gmail.com&su=${subject}&body=${body}`;
                window.open(gmailUrl, '_blank', 'noopener,noreferrer');
              }}
              className="font-sans text-base text-white hover:text-brand-accent font-semibold transition-colors duration-200 flex items-center justify-center md:justify-start gap-2 cursor-pointer focus:outline-none"
            >
              <Mail className="w-4 h-4 text-brand-accent" />
              gehlot.rahul2999@gmail.com
            </button>
          </div>
        </div>

        {/* Footer Sub-Info */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#141414] text-xs text-brand-muted tracking-wide text-center md:text-left gap-6">
          
          {/* Services Pilar labels */}
          <div className="uppercase tracking-widest font-sans text-[10px] space-x-2 sm:space-x-4">
            <span className="text-white">Podcast</span>
            <span>·</span>
            <span className="text-white">YouTube</span>
            <span>·</span>
            <span className="text-white">Short-Form</span>
            <span>·</span>
            <span className="text-white">UGC</span>
            <span>·</span>
            <span className="text-brand-accent">AI Video</span>
          </div>

          {/* Social Icons mapping */}
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-brand-card rounded-sm border border-[#222222] hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-brand-card rounded-sm border border-[#222222] hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-brand-card rounded-sm border border-[#222222] hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright notice */}
          <div>
            <p className="font-mono text-[10px]">
              &copy; {new Date().getFullYear()} rahulgehlot.studio. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
