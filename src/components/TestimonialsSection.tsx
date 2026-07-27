import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, TrendingUp, ArrowUpRight } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenConsultation: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenConsultation }) => {
  const testimonials = [
    {
      quote: "ApexSocial scaled our TikTok presence from scratch to over 18.4 Million organic views and $1.2M in DTC revenue in under 90 days.",
      author: "Elena Rostova",
      title: "Founder & CEO, Aura Skincare",
      metrics: "+320% Revenue",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote: "Their batch video hook system allowed us to scale our Meta ad spend from $10k/mo to $80k/mo while maintaining an impressive 9.4x ROAS.",
      author: "Marcus Vance",
      title: "VP Growth, HyperDrive Energy",
      metrics: "9.4x ROAS Scaled",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote: "The visual quality of their short-form reels is unmatched. It gave our premium audio hardware the cinematic spotlight it deserved.",
      author: "Julian Mercer",
      title: "CMO, Zenith Audio Labs",
      metrics: "+180k Community",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#0F172A] text-white py-24 px-6 md:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-semibold font-body border border-white/10 mb-4">
            <Star className="w-3.5 h-3.5 text-[#ED1C24] fill-[#ED1C24]" />
            <span>Brand Founder Reviews</span>
          </div>
          <h2 className="font-heading italic text-5xl md:text-6xl text-white tracking-[-2px] leading-tight">
            Loved by Founders & Growth Teams
          </h2>
          <p className="font-body text-white/80 text-base md:text-lg mt-3 font-light">
            Here is what high-growth direct-to-consumer brand founders say about scaling with our agency.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-[#ED1C24] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="bg-[#ED1C24]/20 text-[#ED1C24] text-xs font-semibold px-3 py-1 rounded-full font-body flex items-center gap-1 border border-[#ED1C24]/30">
                    <TrendingUp className="w-3 h-3" />
                    {item.metrics}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-white/20 mb-4" />
                <p className="font-body text-white/90 text-sm md:text-base font-light leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#ED1C24]"
                />
                <div>
                  <h4 className="font-heading italic text-xl text-white group-hover:text-[#ED1C24] transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-xs font-body text-white/70 font-light">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold font-body text-base shadow-lg hover:shadow-[0_0_25px_rgba(237,28,36,0.6)] transition-all cursor-pointer group"
          >
            <span>Book Your Strategy Call Today</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
