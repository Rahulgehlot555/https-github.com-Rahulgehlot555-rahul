import { motion } from 'motion/react';
import { Award, Globe, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Award className="w-5 h-5 text-brand-accent" />, title: '4+ Years', desc: 'Crafting premium edits' },
    { icon: <Globe className="w-5 h-5 text-brand-accent" />, title: 'Global Scope', desc: 'US, UK, CA, AU clients' },
    { icon: <Users className="w-5 h-5 text-brand-accent" />, title: 'Audiences Won', desc: 'Thinking like a marketer' },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-brand-bg relative border-t border-[#161616] overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] rounded-full bg-brand-accent/3 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Textual Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            {/* Label */}
            <div className="mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
                About
              </span>
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-5xl leading-tight text-white mb-8 tracking-tight font-bold"
            >
              A Video Editor Who{' '}
              <span className="text-brand-accent">Thinks Like a Marketer</span>
            </h2>

            {/* Paragraphs of Philosophy */}
            <div className="space-y-6 text-brand-body text-base leading-relaxed">
              <p className="font-semibold text-white text-lg">
                I don't just cut footage. I edit with your audience in mind.
              </p>
              <p>
                After 4+ years of editing content for creators, educators, and personal brands, I've learned one thing:{' '}
                <span className="text-white font-medium">the edit is where content either wins or dies</span>.
              </p>
              <p>
                The right cut at the right moment keeps someone watching. The wrong one sends them to the next video. 
                My job is to make sure your content earns every second of your audience's attention — whether it's a 
                60-minute podcast episode, a 10-minute YouTube video, a 30-second Reel that stops someone mid-scroll, 
                a UGC ad that converts, or an AI-generated video that feels genuinely human.
              </p>
              <p className="text-brand-muted">
                I work with coaches, consultants, entrepreneurs, YouTubers, UGC creators, and brands — mostly from the 
                US, UK, and Canada — who want premium editing without the overhead of hiring in-house.
              </p>
            </div>

            {/* Feature quick stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-brand-card p-5 rounded-sm border border-[#1f1f1f] flex flex-col justify-between">
                  <div className="mb-3">{stat.icon}</div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-1">{stat.title}</h4>
                    <p className="font-sans text-xs text-brand-muted">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Placeholder Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-sm bg-brand-card border-2 border-[#1f1f1f] flex flex-col justify-between p-8 overflow-hidden group hover:border-brand-accent/40 transition-colors duration-500">
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-muted/40 group-hover:border-brand-accent/60 transition-colors duration-300"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-muted/40 group-hover:border-brand-accent/60 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-brand-muted/40 group-hover:border-brand-accent/60 transition-colors duration-300"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-brand-muted/40 group-hover:border-brand-accent/60 transition-colors duration-300"></div>

              {/* Decorative top timeline scale */}
              <div className="flex justify-between text-[9px] font-mono text-brand-muted/40 tracking-widest uppercase">
                <span>00:00:00:00</span>
                <span>REC</span>
                <span>24FPS</span>
              </div>

              {/* Center Play Icon + Waveform style graphic */}
              <div className="my-auto flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-[#222222] bg-brand-bg flex items-center justify-center group-hover:border-brand-accent/40 group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-brand-accent border-b-8 border-b-transparent ml-1"></div>
                </div>
                <span className="font-display text-xs font-bold text-white uppercase tracking-[0.2em] mt-5">
                  RAHUL GEHLOT
                </span>
                <span className="font-sans text-[10px] text-brand-muted mt-1 uppercase tracking-widest">
                  freelance studio
                </span>
              </div>

              {/* Bottom Metadata */}
              <div className="flex justify-between items-end">
                <div className="text-[10px] font-sans text-brand-muted tracking-wide uppercase">
                  <p>Client: Global creators</p>
                  <p className="text-brand-accent/80">Est. 2022</p>
                </div>
                <div className="text-[10px] font-mono text-brand-muted/60">
                  <span>JODHPUR, IN</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
