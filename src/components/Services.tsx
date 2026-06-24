import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      num: '01',
      title: 'Podcast Video Editing',
      tagline: 'Turn Your Podcast Into a Show Worth Watching',
      desc: "You've already done the hard part — the conversation. I turn it into a polished, professional video podcast that looks like it belongs on a major network.",
      deliverables: [
        'Multi-cam cuts and dynamic camera switching',
        'Audio cleanup, leveling, and noise reduction',
        'Branded lower thirds and name titles',
        'Chapter-based editing with clean transitions',
        'Intro/outro integration',
        'Short highlight clips from key moments',
        'Captions (auto-generated + proofed)',
      ],
      perfect: 'Podcast hosts, coaches, consultants, and founders running a show',
      featured: false,
    },
    {
      num: '02',
      title: 'YouTube Video Editing',
      tagline: 'Long-Form YouTube Videos That People Actually Finish',
      desc: 'Retention is everything on YouTube. I edit your videos to keep viewers locked in — from a hook that grabs attention in the first 5 seconds to a CTA that converts at the end.',
      deliverables: [
        'Story-first editing structure',
        'B-roll sourcing and integration',
        'Motion graphics and on-screen text',
        'Color grading and audio polish',
        'Rewatch-worthy pacing and energy',
        'Chapters and timestamps',
      ],
      perfect: 'YouTubers, educators, coaches, SaaS brands, and personal brands',
      featured: false,
    },
    {
      num: '03',
      title: 'Short-Form Video Editing',
      subTitle: '(Reels, Shorts, LinkedIn)',
      tagline: 'Reels, Shorts & LinkedIn Clips That Stop the Scroll',
      desc: "Short-form is where the attention is. But most short videos look exactly the same. Mine don't. Whether it's a punchy 30-second insight from your podcast, a talking-head Reel, or a LinkedIn video — I edit short-form that performs.",
      deliverables: [
        'Hook-first editing structure',
        'Dynamic captions (full-screen, word-by-word, custom styled)',
        'Music and sound design',
        'Text overlays, zoom cuts, and rhythm-based pacing',
        'Platform-optimized formats (9:16 · 1:1 · 16:9)',
        'Batch repurposing from long-form content',
      ],
      perfect: 'Creators, coaches, consultants, and brands on Instagram, TikTok, Shorts, LinkedIn',
      featured: false,
    },
    {
      num: '04',
      title: 'UGC Video Editing',
      tagline: 'UGC That Converts, Not Just Looks Good',
      desc: 'User-generated content is one of the most powerful formats in modern marketing — when it\'s edited well. I understand UGC structure: the hook, the problem, the product moment, the social proof, the CTA. I edit UGC that feels native, authentic, and compelling — without losing the raw energy that makes UGC work.',
      deliverables: [
        'Hook-optimized opening cuts',
        'Product moment framing',
        'Captions and dynamic text overlays',
        'Sound design and music that fits the vibe',
        'Multiple aspect ratio exports',
        'A/B variation cuts for testing',
      ],
      perfect: 'E-commerce brands, DTC products, agencies running UGC campaigns, UGC creators',
      featured: false,
    },
    {
      num: '05',
      title: 'AI Video Production & Editing',
      tagline: 'The Future of Video Is Already Here. Are You Using It?',
      desc: 'AI video is no longer experimental — it\'s a serious production format. But most AI video looks cheap, unpolished, and obvious. I specialize in making AI video look premium, intentional, and brand-worthy. Whether you want to build faceless content channels, produce AI character-driven videos, or integrate AI footage into your existing content strategy — I bring the editing expertise to make it actually work.',
      deliverables: [
        'AI Character Videos — consistent AI personas with realistic motion & lip sync',
        'AI Voiceover Integration — ElevenLabs & similar, synced seamlessly to visuals',
        'Faceless YouTube & Shorts — script-to-screen AI video production',
        'AI + Real Footage Hybrid — cinematic blending of AI and real content',
        'AI B-Roll & Scene Generation — elevate production value without a camera crew',
        'End-to-end AI video workflow with platform-ready exports',
      ],
      perfect: 'Founders, educators, agencies, and brands scaling content without scaling filming time',
      featured: true,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-brand-bg relative border-t border-[#161616] overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-accent/3 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="mb-4">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
              Services
            </span>
          </div>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-5xl leading-tight text-white mb-6 tracking-tight font-bold"
          >
            What I Help You With
          </h2>
          <p className="font-sans text-lg sm:text-xl text-brand-body leading-relaxed">
            Five types of content. One editor who knows how to make them all work.
          </p>
        </div>

        {/* Services List/Grid */}
        <div className="space-y-10">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 sm:p-10 rounded-sm relative transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 ${
                service.featured
                  ? 'bg-brand-card/90 border-2 border-brand-accent shadow-[0_0_30px_rgba(200,255,0,0.15)] hover:shadow-[0_0_45px_rgba(200,255,0,0.3)]'
                  : 'bg-brand-card/60 border border-[#222222] hover:border-brand-accent hover:bg-brand-card/85 hover:shadow-[0_0_25px_rgba(200,255,0,0.15)]'
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-brand-accent text-brand-bg font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 fill-brand-bg" />
                  Premium Specialization
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Large index */}
                <div className="lg:col-span-2 flex items-baseline justify-between lg:justify-start lg:gap-4">
                  <span className="font-display text-5xl sm:text-7xl font-bold text-[#222222] select-none leading-none">
                    {service.num}
                  </span>
                  <span className="lg:hidden font-sans text-xs font-bold text-brand-accent tracking-widest uppercase">
                    Core Offer
                  </span>
                </div>

                {/* Main Content Info */}
                <div className="lg:col-span-5">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                    {service.title}{' '}
                    {service.subTitle && (
                      <span className="block sm:inline text-brand-muted text-lg sm:text-xl font-normal">
                        {service.subTitle}
                      </span>
                    )}
                  </h3>
                  
                  <p className="font-sans text-sm text-brand-accent italic font-medium mb-4">
                    "{service.tagline}"
                  </p>

                  <p className="font-sans text-sm sm:text-base text-brand-body leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="pt-4 border-t border-[#1e1e1e]">
                    <span className="font-sans text-xs uppercase tracking-wider text-brand-muted block mb-1">
                      Perfect For:
                    </span>
                    <p className="font-sans text-sm text-white font-medium">
                      {service.perfect}
                    </p>
                  </div>
                </div>

                {/* Deliverables List (with custom en-dashes styled in accent!) */}
                <div className="lg:col-span-5 lg:pl-6">
                  <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-muted mb-4 font-bold">
                    What You Get / Scope of Edit
                  </h4>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, id) => (
                      <li key={id} className="flex items-start text-sm text-brand-body leading-relaxed">
                        <span className="text-brand-accent font-bold mr-3 select-none flex-shrink-0">—</span>
                        <span className="font-sans">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
