import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Film, Radio, Layers, Cpu, CheckCircle, Flame, Target, Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'podcast' | 'ugc' | 'cgi' | 'all';
  vimeoId: string;
  duration: string;
  client: string;
  description: string;
  role: string;
  tools: string[];
  metrics: string;
  thumbnailPlaceholderColor: string;
  fallbackThumbnail: string;
  isBestFor: string;
  recommendationReason: string;
  conversionScore: string;
}

export default function WorkProfile() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'podcast' | 'ugc' | 'cgi'>('all');
  const [activeProjectId, setActiveProjectId] = useState<string>('ugc-1103723092');
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({});

  const categories = [
    { id: 'all', name: 'All Work', icon: <Film className="w-3.5 h-3.5" /> },
    { id: 'ugc', name: 'UGC Video Ads', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'podcast', name: 'YT Podcast Intros', icon: <Radio className="w-3.5 h-3.5" /> },
    { id: 'cgi', name: 'CGI Ads & 3D', icon: <Cpu className="w-3.5 h-3.5" /> },
  ] as const;

  const projects: Project[] = [
    // UGC
    {
      id: 'ugc-1103723092',
      title: 'High-Converting Native UGC Video Ad',
      category: 'ugc',
      vimeoId: '1103723092',
      duration: '0:45',
      client: 'Brand Campaign Acquisition',
      description: 'A native, responsive UGC format styled specifically to grab attention in the first 3 seconds. Features native overlays and quick pacing appropriate for modern social channels.',
      role: 'UGC Post-Production & Strategy',
      tools: ['Adobe Premiere Pro', 'CapCut Pro', 'After Effects'],
      metrics: '3.8% CTR Improvement',
      thumbnailPlaceholderColor: 'bg-brand-accent/20',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=300&q=80',
      isBestFor: 'Direct-to-consumer e-commerce scaling on TikTok & Meta Ads',
      recommendationReason: 'Native visual flow builds instantaneous trust, keeping viewers engaged long enough to hit the outbound CTA.',
      conversionScore: '9.8 / 10'
    },
    // YT PODCAST INTROS
    {
      id: 'pod-1072135011',
      title: 'Premium Brand Launch (YT Podcast Intro #1)',
      category: 'podcast',
      vimeoId: '1072135011',
      duration: '1:12',
      client: 'Premium Podcast Show Host',
      description: 'A visually engaging dynamic intro sequence using highly stylized text transitions, audio ducking, and quick hook editing for premium business broadcasts.',
      role: 'Lead Sound Designer & Visual Lead',
      tools: ['Premiere Pro', 'After Effects', 'Audition'],
      metrics: '+45% Audience Retention Rate',
      thumbnailPlaceholderColor: 'bg-indigo-950/40',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=300&q=80',
      isBestFor: 'Podcast Creators & Show Hosts building instant visual authority',
      recommendationReason: 'Creates a consistent studio brand voice across long form YouTube releases.',
      conversionScore: '9.7 / 10'
    },
    {
      id: 'pod-1072132788',
      title: 'Rhythmic Frame Editor (YT Podcast Intro #2)',
      category: 'podcast',
      vimeoId: '1072132788',
      duration: '1:05',
      client: 'Tech Leader Video Broadcast',
      description: 'High energy, rhythmic pacing with background audio leveling and custom sound triggers. Builds immediate hype before the speaker introduction.',
      role: 'Post Production Lead Editor',
      tools: ['Premiere Pro', 'After Effects'],
      metrics: 'Over 85k launch-week impressions',
      thumbnailPlaceholderColor: 'bg-emerald-950/40',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=300&q=80',
      isBestFor: 'Solo YouTube consultants or thought-leaders wanting pristine hooks',
      recommendationReason: 'Perfect for hooking fast-scrolling mobile viewers before they skip away.',
      conversionScore: '9.5 / 10'
    },
    {
      id: 'pod-1072132739',
      title: 'Vibrant Sound Elements (YT Podcast Intro #3)',
      category: 'podcast',
      vimeoId: '1072132739',
      duration: '0:58',
      client: 'Educational Masterclass Channel',
      description: 'Clean visual editorial focusing on cinematic transitions, balanced text animations, and high frequency audio adjustments.',
      role: 'Podcast Post-Production Lead',
      tools: ['Adobe Premiere Pro', 'After Effects'],
      metrics: '+38% Higher Hook Duration',
      thumbnailPlaceholderColor: 'bg-violet-950/40',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&w=300&q=80',
      isBestFor: 'Educational content businesses needing an upscale visual presence',
      recommendationReason: 'Conveys instant premium production standards to match highly technical audio.',
      conversionScore: '9.4 / 10'
    },
    // CGI ADS
    {
      id: 'cgi-1091262837',
      title: 'Cinematic CGI Campaign (VFX AD #1)',
      category: 'cgi',
      vimeoId: '1091262837',
      duration: '0:45',
      client: 'Creative Brand Studio',
      description: 'A custom, surrealist 3D/CGI visual display combining high fidelity rendering, custom overlays, and custom voice design for creative products.',
      role: 'CGI Video Production & Visual Effects Designer',
      tools: ['Cinema 4D', 'Blender', 'After Effects'],
      metrics: 'Zero traditional physical filming costs',
      thumbnailPlaceholderColor: 'bg-rose-950/40',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
      isBestFor: 'Agencies wanting to construct eye-popping product launches fully digitally',
      recommendationReason: 'Eliminates traditional filming setups, enabling fast iterations of wild brand scenarios.',
      conversionScore: '9.6 / 10'
    },
    {
      id: 'cgi-1091262130',
      title: 'Ambient Surrealism (CGI Brand AD #2)',
      category: 'cgi',
      vimeoId: '1091262130',
      duration: '0:50',
      client: 'Global Watch Creator Label',
      description: 'An premium product rendering ad that integrates elegant custom background textures, slow dynamic orbits, and precise focus points.',
      role: 'VFX Director & Color Grading artist',
      tools: ['Blender', 'Premiere Pro', 'DaVinci Resolve'],
      metrics: 'Delivered in 4 business days',
      thumbnailPlaceholderColor: 'bg-teal-950/40',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=300&q=80',
      isBestFor: 'Premium luxury watch or lifestyle brands demanding high-end aesthetics',
      recommendationReason: 'Provides crisp close-up focus that highlights absolute product refinement.',
      conversionScore: '9.3 / 10'
    },
    {
      id: 'cgi-1091263262',
      title: 'High-Impact Brand Motion (CGI Trailer #3)',
      category: 'cgi',
      vimeoId: '1091263262',
      duration: '1:10',
      client: 'Interactive Brand Concept',
      description: 'Dynamic product rotation and high-energy cinematic background bass integration designed to present modern visual styles.',
      role: 'Creative VFX Lead Editor',
      tools: ['Cinema 4D', 'After Effects', 'Audition'],
      metrics: 'Perfect format compatibility inside workspaces',
      thumbnailPlaceholderColor: 'bg-amber-950/40',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=300&q=80',
      isBestFor: 'Modern disruptive streetwear/tech brands wanting energetic marketing',
      recommendationReason: 'Fast-paced, hyper-stimulating transitions sustain viewing attention right up to the end.',
      conversionScore: '9.5 / 10'
    }
  ];

  // Fetch Vimeo Live Thumbnails dynamically so they change based on active video IDs!
  useEffect(() => {
    projects.forEach((proj) => {
      fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${proj.vimeoId}`)
        .then((res) => {
          if (!res.ok) throw new Error('Vimeo API request failed');
          return res.json();
        })
        .then((data) => {
          if (data && data.thumbnail_url) {
            setThumbnails((prev) => ({
              ...prev,
              [proj.id]: data.thumbnail_url,
            }));
          }
        })
        .catch((err) => {
          console.warn(`Dynamic thumbnail skipped for project ${proj.id}:`, err);
        });
    });
  }, []);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];

  return (
    <section
      id="work"
      className="py-24 bg-brand-bg relative border-t border-[#161616] overflow-hidden"
      aria-labelledby="work-heading"
    >
      {/* Background Ambience highlights */}
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] rounded-full bg-brand-accent/3 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="mb-4">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
              Work Profile
            </span>
          </div>
          <h2
            id="work-heading"
            className="font-display text-4xl sm:text-5xl leading-tight text-white mb-6 tracking-tight font-bold"
          >
            Proof Is in the Timeline
          </h2>
          <p className="font-sans text-lg text-brand-body leading-relaxed">
            Take a look at the elite craft. Toggle between categories below to view live projects, podcast trailers, and converting UGC edits.
          </p>
        </motion.div>

        {/* Category filtering tags */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#1c1c1c]" id="work-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                const available = cat.id === 'all' ? projects : projects.filter(p => p.category === cat.id);
                if (available.length > 0 && !available.some(p => p.id === activeProjectId)) {
                  setActiveProjectId(available[0].id);
                }
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                selectedCategory === cat.id
                  ? 'bg-[#181818] text-brand-accent border border-brand-accent/40 shadow-[0_0_15px_rgba(200,255,0,0.1)]'
                  : 'bg-transparent text-brand-muted hover:text-white hover:bg-brand-card/30 border border-transparent'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Master Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Vimeo Player Embed Window */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-brand-card border border-[#222222] rounded-sm p-3 relative shadow-2xl group hover:border-[#333333] transition-colors duration-300">
              {/* Cinematic player ratio frame */}
              <div className="aspect-video w-full relative bg-black overflow-hidden rounded-sm border border-[#141414]">
                <iframe
                  title={`Vimeo Video Player - ${activeProject.title}`}
                  src={`https://player.vimeo.com/video/${activeProject.vimeoId}?color=C8FF00&title=0&byline=0&portrait=0`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  id="vimeo-embed-iframe"
                ></iframe>
              </div>

              {/* Status bar underneath the active video */}
              <div className="flex justify-between items-center mt-3 pt-2 px-1 text-[11px] font-mono text-brand-muted">
                <span className="flex items-center gap-1.5 text-brand-accent">
                  <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                  Active Playing: Vimeo Reel #{activeProject.vimeoId}
                </span>
                <span>Type: {activeProject.category.toUpperCase()} · Duration: {activeProject.duration}</span>
              </div>
            </div>

            {/* Dynamic Active Project Meta Information Card */}
            <div className="bg-brand-card p-6 sm:p-8 rounded-sm border border-[#1a1a1a] relative">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-sm">
                  {activeProject.category} PROJECT Showcase
                </span>
                <span className="font-mono text-xs text-brand-muted font-medium bg-[#1a1a1a] px-3 py-1 rounded-sm">
                  Client Focus: {activeProject.client}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4">
                {activeProject.title}
              </h3>

              <p className="font-sans text-brand-body text-sm sm:text-base mb-6 leading-relaxed">
                {activeProject.description}
              </p>

              {/* Grid Metadata details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#1e1e1e]">
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-muted block mb-1 font-semibold">My Role & Contribution</span>
                  <p className="text-sm text-white font-semibold">{activeProject.role}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-muted block mb-1 font-semibold">Software & Assets used</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {activeProject.tools.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono bg-[#1c1c1c] text-white px-2 py-0.5 rounded-sm border border-[#2a2a2a]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Indicator Strip */}
              <div className="mt-6 p-4 rounded-sm bg-brand-bg/50 border border-[#222222] flex items-center justify-between">
                <span className="text-xs font-sans text-brand-muted font-bold tracking-wide uppercase">Proven Metric:</span>
                <span className="text-brand-accent font-display text-sm font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  {activeProject.metrics}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Catalog List of other showcases/projects */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Direct Strategy Suggestion Card block (Advising the user of what's best based on selected video) */}
            <div className="p-5 rounded-sm bg-brand-card border border-brand-accent/20 relative overflow-hidden shadow-[0_0_20px_rgba(200,255,0,0.03)] focus:outline-none animate-fadeIn">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl pointer-events-none"></div>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-sm bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Flame className="w-3.5 h-3.5" />
                </div>
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-brand-accent">
                  Strategic Recommendation
                </span>
              </div>

              <div className="space-y-3 font-sans2">
                <div>
                  <span className="text-[10px] text-brand-muted uppercase tracking-wider block font-semibold">Suggested For:</span>
                  <p className="text-xs text-white leading-relaxed font-semibold flex items-start gap-1 mt-0.5">
                    <Target className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                    {activeProject.isBestFor}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#1e1e1e]">
                  <span className="text-[10px] text-brand-muted uppercase tracking-wider block font-semibold">Strategic Impact Rate:</span>
                  <p className="text-xs text-brand-body leading-relaxed mt-1">
                    {activeProject.recommendationReason}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#1e1e1e] text-xs">
                  <span className="text-brand-muted font-semibold">Target Efficacy Score:</span>
                  <span className="text-brand-accent font-bold font-mono bg-brand-accent/10 px-2 py-0.5 rounded-sm flex items-center gap-1.5 text-[11px]">
                    <Star className="w-3 h-3 fill-brand-accent" />
                    {activeProject.conversionScore}
                  </span>
                </div>
              </div>
            </div>

            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-2 pl-1">
              Select Video Segment
            </h4>

            <div className="space-y-3 lg:max-h-[350px] lg:overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-brand-card scrollbar-track-transparent" id="work-item-list">
              {filteredProjects.map((project) => {
                const isActive = project.id === activeProjectId;
                const activeThumb = thumbnails[project.id] || project.fallbackThumbnail;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProjectId(project.id)}
                    className={`w-full text-left p-4 rounded-sm border transition-all duration-300 flex items-start gap-4 focus:outline-none group/item ${
                      isActive
                        ? 'bg-brand-card border-brand-accent shadow-[0_0_20px_rgba(200,255,0,0.06)]'
                        : 'bg-brand-card/40 border-[#1a1a1a] hover:border-[#333333] hover:bg-brand-card/70'
                    }`}
                  >
                    {/* Tiny representation graphic box (Dynamic image representation) */}
                    <div className="w-14 h-14 rounded-sm flex-shrink-0 flex items-center justify-center relative overflow-hidden bg-black/50 border border-white/5">
                      <img 
                        src={activeThumb} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-65 group-hover/item:opacity-95 group-hover/item:scale-110 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Play overlay button */}
                      <span className="absolute inset-0 bg-brand-bg/20 flex items-center justify-center">
                        <Play className={`w-4 h-4 transition-transform duration-300 group-hover/item:scale-125 ${isActive ? 'text-brand-accent fill-brand-accent/20' : 'text-white'}`} />
                      </span>
                      
                      <span className="absolute bottom-1 right-1 text-[8px] font-mono bg-black/80 px-1 text-white rounded-sm">
                        {project.duration}
                      </span>
                    </div>

                    {/* Meta summary text */}
                    <div className="flex-grow min-w-0 font-sans">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-brand-muted">
                          {project.category}
                        </span>
                        {isActive && (
                          <span className="text-[10px] font-mono text-brand-accent uppercase font-bold tracking-widest">
                            PLAYING
                          </span>
                        )}
                      </div>
                      <h5 className="font-display text-xs sm:text-sm font-bold text-white truncate mb-1">
                        {project.title}
                      </h5>
                      <span className="text-[11px] font-mono text-brand-muted">
                        Metric: {project.metrics.split(' ')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quality Statement / Advisor notice instead of any raw external links */}
            <div className="p-4 rounded-sm bg-[#111111] border border-[#161616] text-center font-sans">
              <p className="text-[11px] text-brand-muted leading-relaxed">
                Need customized pacing? Tap any format above to select, analyze, and implement it with brand content.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
