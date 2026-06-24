import { motion } from 'motion/react';
import { Mail, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function ContactCTA() {
  const handleOpenLink = (type: 'whatsapp' | 'email') => {
    if (type === 'whatsapp') {
      const text = encodeURIComponent(
        'Hi Rahul, I saw your video editing portfolio and would love to connect for a video collaboration project! 🚀'
      );
      const whatsappUrl = `https://wa.me/919782507250?text=${text}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } else {
      const subject = encodeURIComponent('Video Editing Partnership Inquiry');
      const body = encodeURIComponent(
        'Hi Rahul,\n\n' +
        'I absolutely love your work profile and would love to partner with you for video editing.\n\n' +
        'Here are my project details:\n' +
        '- Project Style: [UGC / YT Intro / YouTube long-form / Other]\n' +
        '- My Channel or Brand Link: \n' +
        '- Expected video frequency: \n\n' +
        'Looking forward to discussing further!\n\n' +
        'Best regards,'
      );
      
      // Directly open the web-based Gmail Compose interface in a new window
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=gehlot.rahul2999@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="contact"
      className="bg-brand-accent py-20 sm:py-24 relative overflow-hidden text-brand-bg select-none"
      aria-labelledby="cta-heading"
    >
      {/* Dynamic Visual Accents / Grid overlays */}
      <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-black/10 blur-[60px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Tagline Indicator */}
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] bg-black/10 text-brand-bg px-4 py-1.5 rounded-sm mb-6 inline-block">
            Let's Collaborate
          </span>

          {/* Epic Main Heading */}
          <h2
            id="cta-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-bg tracking-tight max-w-3xl mb-8 leading-[1.1]"
          >
            Ready to Stop Fighting <br className="hidden sm:inline" />
            Your Edit Timeline?
          </h2>

          {/* Descriptive block matching original layout exactly */}
          <div className="font-sans text-base sm:text-lg text-brand-bg/90 leading-relaxed max-w-2xl space-y-4 mb-10">
            <p className="font-medium">
              Whether you're a creator looking for a reliable editing partner, a brand that needs UGC done right, 
              or a founder who wants to explore what AI video can do for your content strategy — I'd love to hear from you.
            </p>
            <p className="text-brand-bg/80 text-sm">
              Click the green WhatsApp button below to start an instant message chat or dial me directly.
            </p>
          </div>

          {/* Dynamic filled/outlined actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => handleOpenLink('whatsapp')}
              id="cta-btn-whatsapp"
              className="px-8 py-4 rounded-sm bg-brand-bg text-brand-accent font-sans font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-brand-bg hover:shadow-[0_0_20px_rgba(13,13,13,0.35)] transition-all duration-300 flex items-center justify-center group focus:outline-none cursor-pointer"
            >
              Contact Me on WhatsApp
              <MessageCircle className="ml-2 w-4.5 h-4.5 animate-pulse text-brand-accent group-hover:text-brand-bg group-hover:scale-105 transition-all" />
            </button>
            <button
              onClick={() => handleOpenLink('email')}
              id="cta-btn-message"
              className="px-8 py-4 rounded-sm border-2 border-brand-bg hover:bg-brand-bg hover:text-brand-accent text-brand-bg font-sans font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center group focus:outline-none cursor-pointer"
            >
              Send Me a Message
              <Mail className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Reassurance text */}
          <p className="font-sans text-xs text-brand-bg/70 italic mt-4">
            Direct Line: +91 9782507250 • No pitch. No pressure. Let's make some waves.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
