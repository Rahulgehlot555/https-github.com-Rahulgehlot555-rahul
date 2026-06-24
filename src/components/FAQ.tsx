import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do you only work with podcast creators?',
      a: 'No. I work across podcast editing, YouTube, short-form, UGC, and AI video production. Podcast editing is one of my core services, but it\'s not the only thing I do — and clients often need more than one type of content edited.',
    },
    {
      q: "What's your turnaround time?",
      a: 'For a standard podcast episode or YouTube video — 2–4 business days. Short-form clips — 24–48 hours. Retainer clients get priority turnaround by default.',
    },
    {
      q: "What if I don't like the style of the first edit?",
      a: "That's what the Discovery Call and style onboarding are for. I learn your preferences before I touch the timeline. Revisions are included in every project.",
    },
    {
      q: 'Do you work with clients outside India?',
      a: 'Yes — the majority of my clients are based in the US, UK, Canada, and Australia. I work fully remotely and asynchronously, and I\'m used to adapting to different time zones.',
    },
    {
      q: 'Can I start with just one video before committing to a retainer?',
      a: 'Absolutely. Most clients start with a single project to see how we work together. There\'s no pressure to commit upfront.',
    },
    {
      q: 'What software and tools do you use?',
      a: 'Adobe Premiere Pro as my primary NLE. After Effects for motion graphics. Photoshop for thumbnails. For AI video — Higgsfield for character-consistent video, ElevenLabs for AI voiceover, and various image and video generation tools depending on the project.',
    },
    {
      q: 'How do we share files and communicate?',
      a: 'Typically Google Drive or Dropbox for files, Loom for video feedback, and email or Notion for project tracking. I\'m flexible and adapt to whatever system you\'re already using.',
    },
    {
      q: 'Do you do AI video from scratch or just edit AI footage?',
      a: 'Both. I can handle end-to-end AI video production — scripting assistance, AI character generation, voiceover production, editing, and final delivery. Or I can edit AI footage you\'ve already generated. Depends on what you need.',
    },
  ];

  const handleToggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-brand-bg relative border-t border-[#161616] overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-brand-accent/2 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Header block */}
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
                FAQ
              </span>
            </div>
            <h2 id="faq-heading" className="font-display text-3xl sm:text-5xl leading-tight text-white mb-4 tracking-tight font-bold">
              Questions You Probably Have
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-muted max-w-lg mx-auto">
              Everything you need to know about working with a professional scale video editor.
            </p>
          </div>

          {/* Accordions stream */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-brand-card rounded-sm border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-brand-accent shadow-[0_0_20px_rgba(200,255,0,0.08)]'
                      : 'border-[#222222] hover:border-[#333333]'
                  }`}
                >
                  <button
                    onClick={() => handleToggle(idx)}
                    className="w-full text-left p-5 sm:p-6 flex justify-between items-center focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-display text-base sm:text-lg font-bold transition-colors duration-200 ${
                        isOpen ? 'text-brand-accent' : 'text-white group-hover:text-brand-accent/80'
                      }`}
                    >
                      {faq.q}
                    </span>
                    
                    {/* Chevron element */}
                    <div
                      className={`ml-4 w-7 h-7 rounded-sm border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-brand-accent/10 border-brand-accent text-brand-accent'
                          : 'bg-brand-bg border-[#2a2a2a] text-brand-muted group-hover:text-white'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Animated collapse helper */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#1e1e1e]">
                          <p className="font-sans text-brand-body text-sm sm:text-base leading-relaxed pt-4">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
