import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const list = [
    {
      quote: "Working with Rahul changed how our podcast looks. Our audience immediately noticed the difference in quality.",
      author: "— [Client Name]",
      role: "Podcast Host, [Show Name]",
    },
    {
      quote: "I was spending hours editing my own content every week. Now I send the raw file and get back something better than I could have produced myself.",
      author: "— [Client Name]",
      role: "Business Coach, [Location]",
    },
    {
      quote: "Our UGC performance improved significantly after Rahul started editing our content. He understands what makes UGC actually convert.",
      author: "— [Client Name]",
      role: "Brand / Agency, [Location]",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-brand-bg relative border-t border-[#161616] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-brand-accent/2 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Label and Header */}
        <div className="mb-12">
          <div className="mb-4">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
              Testimonials
            </span>
          </div>
          <h2 id="testimonials-heading" className="font-display text-3xl sm:text-5xl leading-tight text-white mb-4 tracking-tight font-bold">
            What Clients Say
          </h2>
        </div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-brand-card p-6 sm:p-8 rounded-sm border border-[#222222] hover:border-brand-accent/30 hover:shadow-[0_0_20px_rgba(200,255,0,0.05)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Quote bubble decor */}
              <div className="mb-6 flex justify-between">
                <Quote className="w-8 h-8 text-[#2a2a2a] group-hover:text-brand-accent/20 transition-colors duration-300" />
                <span className="font-mono text-[10px] text-brand-muted/30">Verified feedback</span>
              </div>

              {/* Quote Text */}
              <p className="font-sans text-brand-body text-base italic leading-relaxed mb-8 flex-grow">
                "{item.quote}"
              </p>

              {/* Signature Block */}
              <div className="pt-4 border-t border-[#1a1a1a]">
                <h4 className="font-sans text-sm font-bold text-brand-accent uppercase tracking-wider mb-0.5">
                  {item.author}
                </h4>
                <p className="font-sans text-xs text-brand-muted">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
