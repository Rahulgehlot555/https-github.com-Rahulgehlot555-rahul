import { motion } from 'motion/react';
import { X, TrendingDown, EyeOff, Clock, Sparkles, MessageSquare, Flame } from 'lucide-react';
import { useState } from 'react';

export default function PainPoints() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="pain-points"
      className="py-28 bg-brand-bg relative border-t border-[#121212] overflow-hidden"
      aria-labelledby="pain-heading"
    >
      {/* Premium ambient light glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 left-10 w-[300px] h-[300px] rounded-full bg-red-500/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-accent">
              The Reality Check
            </span>
          </motion.div>

          <motion.h2
            id="pain-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl leading-tight text-white tracking-tight font-bold"
          >
            You're Creating Great Content. <br />
            <span className="text-brand-muted font-medium">But Something Feels Off.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-brand-body text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            You have the ideas, the voice, and the raw footage. But if your editing doesn't capture 
            modern viewers immediately, you're leaving thousands of views and conversions on the table.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Card 1: Spans 7 cols - Retention Drop-off */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-[#111111] border border-white/5 rounded-xs p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-accent/30 transition-all duration-500 relative overflow-hidden"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/2 blur-2xl rounded-full pointer-events-none transition-all group-hover:bg-brand-accent/5 duration-500" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="bg-red-500/10 border border-red-500/20 p-2 rounded-xs text-red-400">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-red-400/80 uppercase tracking-widest bg-red-500/5 px-2.5 py-0.5 border border-red-500/10 rounded-full">
                  Critical Issue
                </span>
              </div>
              
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-white font-bold tracking-tight">
                  The 2-Minute Retention Cliff
                </h3>
                <p className="mt-2 text-brand-muted text-sm leading-relaxed max-w-xl">
                  Your long-form content loses up to 60% of viewers in the first two minutes. Without rhythmic pacing, pattern interrupts, and sound bridges, audiences click away.
                </p>
              </div>
            </div>

            {/* Micro Graphic Widget: Interactive SVG Chart */}
            <div className="mt-8 bg-[#090909] border border-white/5 rounded-xs p-4 relative overflow-hidden h-[150px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] font-mono text-brand-muted">
                <span>VIDEO TIME: 0:00 - 5:00 MINS</span>
                <span className="text-red-400 font-bold">RETENTION DROP</span>
              </div>
              
              <div className="relative w-full h-[80px] flex items-end">
                {/* SVG Curve */}
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Good retention trajectory */}
                  <motion.path
                    d="M 0 10 Q 30 15, 60 25 T 100 35"
                    fill="none"
                    stroke="#C8FF00"
                    strokeWidth="2"
                    strokeOpacity={hoveredCard === 1 ? "0.9" : "0.5"}
                    className="transition-all duration-500"
                  />
                  {/* Bad retention trajectory */}
                  <motion.path
                    d="M 0 10 Q 15 20, 25 75 T 100 85"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="2.5"
                    strokeDasharray="3 3"
                    className="animate-pulse"
                  />
                </svg>

                {/* Hotspot labels */}
                <div className="absolute top-1/4 left-[15%] flex flex-col items-start">
                  <span className="text-[8px] font-mono bg-red-500/90 text-white px-1.5 py-0.5 rounded-xs font-bold uppercase tracking-wider">
                    -65% Drop-off
                  </span>
                  <div className="w-0.5 h-6 bg-red-500/30 border-l border-dashed border-red-500/60" />
                </div>

                <div className="absolute bottom-[20%] right-[10%] hidden sm:flex flex-col items-end">
                  <span className="text-[8px] font-mono bg-brand-accent/90 text-black px-1.5 py-0.5 rounded-xs font-bold uppercase tracking-wider">
                    Edited Hook Track
                  </span>
                  <div className="w-0.5 h-8 bg-brand-accent/30 border-l border-dashed border-brand-accent/60" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[8px] font-mono text-brand-muted border-t border-white/5 pt-1.5">
                <span className="flex items-center gap-1"><X className="w-2.5 h-2.5 text-red-500" /> Standard Unedited Cut</span>
                <span className="flex items-center gap-1 text-brand-accent"><Sparkles className="w-2.5 h-2.5" /> Hook-Optimized Timeline</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Spans 5 cols - Scroll Stopper Failure */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-[#111111] border border-white/5 rounded-xs p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-accent/30 transition-all duration-500 relative overflow-hidden"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/2 blur-2xl rounded-full pointer-events-none transition-all group-hover:bg-brand-accent/5 duration-500" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="bg-orange-500/10 border border-orange-500/20 p-2 rounded-xs text-orange-400">
                  <EyeOff className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-orange-400/80 uppercase tracking-widest bg-orange-500/5 px-2.5 py-0.5 border border-orange-500/10 rounded-full">
                  Visibility Gap
                </span>
              </div>
              
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-white font-bold tracking-tight">
                  Invisible in the Feed
                </h3>
                <p className="mt-2 text-brand-muted text-sm leading-relaxed">
                  Your short clips lack scroll-stopping text hooks, custom sound cues, and visual contrast. Without an immediate frame anchor, audiences scroll right past your profile.
                </p>
              </div>
            </div>

            {/* Micro Graphic Widget: Dual Phone Comparison */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {/* Bad Version */}
              <div className="bg-[#090909] border border-white/5 rounded-xs p-2.5 relative flex flex-col justify-between h-[110px] opacity-50 group-hover:opacity-75 transition-all">
                <span className="text-[7px] font-mono text-brand-muted uppercase">Generic Clip</span>
                <div className="my-auto space-y-1">
                  <div className="h-1 bg-neutral-800 rounded-full w-full" />
                  <div className="h-1 bg-neutral-800 rounded-full w-[80%]" />
                </div>
                <div className="text-[8px] text-neutral-500 font-sans leading-tight">
                  Plain caption text.
                </div>
              </div>

              {/* Hook-Optimized Version */}
              <div className="bg-[#090909] border border-brand-accent/20 rounded-xs p-2.5 relative flex flex-col justify-between h-[110px] shadow-[0_0_15px_rgba(200,255,0,0.03)] group-hover:shadow-[0_0_20px_rgba(200,255,0,0.06)] transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-mono text-brand-accent uppercase font-bold tracking-wider">RETENTION UP</span>
                  <Sparkles className="w-2.5 h-2.5 text-brand-accent animate-pulse" />
                </div>
                
                {/* Visual Audio Wave */}
                <div className="flex items-center gap-0.5 justify-center h-5 my-1">
                  <span className="w-0.5 bg-brand-accent h-3 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                  <span className="w-0.5 bg-brand-accent h-5 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                  <span className="w-0.5 bg-brand-accent h-2 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-0.5 bg-brand-accent h-4 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  <span className="w-0.5 bg-brand-accent h-1 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                </div>

                <div className="text-[9px] font-sans font-bold leading-tight bg-brand-accent text-black px-1 rounded-xs inline-block text-center select-none">
                  STOP SCROLLING! 🚨
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Spans 5 cols - Editing Burnout */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-[#111111] border border-white/5 rounded-xs p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-accent/30 transition-all duration-500 relative overflow-hidden"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/2 blur-2xl rounded-full pointer-events-none transition-all group-hover:bg-brand-accent/5 duration-500" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="bg-yellow-500/10 border border-yellow-500/20 p-2 rounded-xs text-yellow-400">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-yellow-400/80 uppercase tracking-widest bg-yellow-500/5 px-2.5 py-0.5 border border-yellow-500/10 rounded-full">
                  Time Burn
                </span>
              </div>
              
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-white font-bold tracking-tight">
                  The 10-Hour Weekly Tax
                </h3>
                <p className="mt-2 text-brand-muted text-sm leading-relaxed">
                  Every hour spent cutting, keyframing, and sync-matching audio is an hour taken away from scripting, filming, or scaling your direct offer. You're bottlenecking your own growth.
                </p>
              </div>
            </div>

            {/* Micro Graphic Widget: Burnout Ratio */}
            <div className="mt-8 bg-[#090909] border border-white/5 rounded-xs p-4 space-y-3">
              <div className="flex justify-between items-center text-[9px] font-mono text-brand-muted">
                <span>YOUR CURRENT WEEKLY DISTRIBUTION</span>
                <span className="text-red-400 flex items-center gap-1"><Flame className="w-2.5 h-2.5" /> BURNOUT</span>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[8px] font-mono text-white mb-1">
                    <span>✂️ Cutting, Keyframing, & Syncing</span>
                    <span className="font-bold text-red-400">8.5 Hours</span>
                  </div>
                  <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[85%] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[8px] font-mono text-white mb-1">
                    <span>💡 Growth, Strategy, & Filming</span>
                    <span className="font-bold text-brand-accent">1.5 Hours</span>
                  </div>
                  <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent w-[15%] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Spans 7 cols - Brand Voice Mismatch */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-[#111111] border border-white/5 rounded-xs p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-accent/30 transition-all duration-500 relative overflow-hidden"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/2 blur-2xl rounded-full pointer-events-none transition-all group-hover:bg-brand-accent/5 duration-500" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="bg-[#1C1C1C] border border-[#2D2D2D] p-2 rounded-xs text-brand-body">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-brand-muted uppercase tracking-widest bg-white/5 px-2.5 py-0.5 border border-white/5 rounded-full">
                  Aesthetic Gap
                </span>
              </div>
              
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-white font-bold tracking-tight">
                  The Mismatched Agency Trap
                </h3>
                <p className="mt-2 text-brand-muted text-sm leading-relaxed max-w-xl">
                  You've probably worked with editors who don't capture your unique brand voice. They paste neon overlays onto professional podcasts, or make aesthetic reels look like random meme channels.
                </p>
              </div>
            </div>

            {/* Micro Graphic Widget: Brand Voice Alignment bubbles */}
            <div className="mt-8 bg-[#090909] border border-white/5 rounded-xs p-4 flex flex-col gap-3">
              {/* Row 1: Generic editor */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center text-[8px] text-neutral-500 font-mono">
                    AE
                  </div>
                  <span className="text-[9px] font-mono text-neutral-400">Automated Assembly-Line Editor</span>
                </div>
                <span className="text-[8px] font-mono text-red-400 uppercase tracking-widest">TEMPLATE FLOOD</span>
              </div>

              {/* Bubble contrast */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-2 bg-neutral-900 rounded-xs border border-white/5 space-y-1">
                  <span className="text-[7px] font-mono text-red-400 uppercase font-bold">Standard Formula</span>
                  <p className="text-[9px] font-sans text-neutral-400 leading-tight">
                    "Just cuts video every 1.5 seconds, adds massive distracting red captions, and drops stock sound effects everywhere."
                  </p>
                </div>

                <div className="p-2 bg-brand-accent/5 rounded-xs border border-brand-accent/20 space-y-1">
                  <span className="text-[7px] font-mono text-brand-accent uppercase font-bold">Rahul Gehlot Preset</span>
                  <p className="text-[9px] font-sans text-white leading-tight">
                    "Adapts transition curves to your voice, highlights key intellectual hooks cleanly, and builds cinematic sound design."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dynamic Transition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 text-center border-t border-[#121212] pt-12"
        >
          <p className="font-display text-lg sm:text-2xl font-bold text-white max-w-2xl mx-auto leading-relaxed">
            Stop losing views to dull pacing. <br className="hidden sm:inline" />
            <span className="text-brand-accent">Let's edit with actual intent.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
