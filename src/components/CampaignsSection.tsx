import React from 'react';
import { motion } from 'motion/react';
import {
  Flame,
  ArrowUpRight,
  Trophy,
  Eye,
} from 'lucide-react';

interface CampaignReel {
  id: string;
  reelNumber: string;
  title: string;
  brand: string;
  category: 'Fashion & Beauty' | 'Automotive' | 'Tech & SaaS' | 'FMCG' | 'Lifestyle';
  metric: string;
  roas: string;
  videoUrl: string;
  poster: string;
  description: string;
}

const CAMPAIGN_REELS: CampaignReel[] = [
  {
    id: 'reel-1',
    reelNumber: 'REEL 01',
    title: 'The Unstoppable DTC Launch Hook',
    brand: 'Aura Athletics',
    category: 'Fashion & Beauty',
    metric: '18.4M Views',
    roas: '12.4x ROAS',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4',
    poster: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    description: 'Viral organic-style UGC creative that scaled cold audience conversion by 340% in 14 days.',
  },
  {
    id: 'reel-2',
    reelNumber: 'REEL 02',
    title: '3D Hyper-Visual CGI Product Reveal',
    brand: 'NEXUS Audio',
    category: 'Tech & SaaS',
    metric: '24.1M Views',
    roas: '14.8x ROAS',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-neon-lighting-40019-large.mp4',
    poster: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    description: 'Photorealistic CGI studio motion asset breaking Instagram & TikTok engagement benchmarks.',
  },
  {
    id: 'reel-3',
    reelNumber: 'REEL 03',
    title: 'Founder-Led Raw Storytelling',
    brand: 'Lumina Skincare',
    category: 'Fashion & Beauty',
    metric: '12.8M Views',
    roas: '9.6x ROAS',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-posing-for-the-camera-in-a-studio-41559-large.mp4',
    poster: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    description: 'Unfiltered authentic storytelling formula that generated $1.8M in first-touch revenue.',
  },
  {
    id: 'reel-4',
    reelNumber: 'REEL 04',
    title: 'High-Velocity B2B SaaS Demo Reel',
    brand: 'Veloce AI',
    category: 'Tech & SaaS',
    metric: '9.2M Views',
    roas: '8.2x ROAS',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-a-green-screen-41528-large.mp4',
    poster: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    description: 'Fast-paced product UI motion reel that converted enterprise leads at 4.2x industry average.',
  },
  {
    id: 'reel-5',
    reelNumber: 'REEL 05',
    title: 'Street Culture & Fashion Takeover',
    brand: 'Vanguard Threads',
    category: 'Fashion & Beauty',
    metric: '31.5M Views',
    roas: '16.1x ROAS',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-model-walking-on-a-runway-41221-large.mp4',
    poster: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
    description: 'High-contrast cinematic short film reel that sold out the entire autumn collection in 3 hours.',
  },
  {
    id: 'reel-6',
    reelNumber: 'REEL 06',
    title: 'Royal Enfield Adventure Anthem',
    brand: 'Royal Enfield',
    category: 'Automotive',
    metric: '42.0M Views',
    roas: '15.2x ROAS',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-riding-a-motorcycle-on-the-highway-41135-large.mp4',
    poster: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
    description: 'Cinematic highway ride visual campaign capturing raw energy, freedom, and engine sounds.',
  }
];

// 30 Brand Showcase Cards (5x6 Grid) as explicitly specified
interface BrandItem {
  id: number;
  name: string;
  subtext?: string;
  logoType?: 'svg' | 'text';
  logoSvg?: string;
}

const BRAND_SHOWCASE_LOGOS: BrandItem[][] = [
  // Row 1
  [
    { id: 1, name: 'Nike', subtext: 'Athletics & Apparel' },
    { id: 2, name: 'PUMA', subtext: 'Sportswear' },
    { id: 3, name: 'Skechers', subtext: 'Footwear & Lifestyle' },
    { id: 4, name: "Levi's", subtext: 'Denim & Heritage' },
    { id: 5, name: 'Pepe Jeans', subtext: 'London Denim' },
  ],
  // Row 2
  [
    { id: 6, name: 'Jockey', subtext: 'Apparel Essentials' },
    { id: 7, name: 'Suzuki', subtext: 'Motors & Mobility' },
    { id: 8, name: 'Royal Enfield', subtext: 'Motorcycles & Lifestyle' },
    { id: 9, name: 'NEXA', subtext: 'Premium Automotive' },
    { id: 10, name: 'Toni&Guy', subtext: 'Hair & Beauty Care' },
  ],
  // Row 3
  [
    { id: 11, name: 'Livon', subtext: 'Hair Care & Styling' },
    { id: 12, name: 'True Value', subtext: 'Certified Automobiles' },
    { id: 13, name: 'Spotify', subtext: 'Music & Audio Streaming' },
    { id: 14, name: 'Bira 91', subtext: 'Craft Beverages' },
    { id: 15, name: 'Red Bull', subtext: 'Energy & Motorsports' },
  ],
  // Row 4
  [
    { id: 16, name: 'JDY', subtext: 'Fast Fashion & Apparel' },
    { id: 17, name: 'Urban Company', subtext: 'Home Services' },
    { id: 18, name: 'Typo', subtext: 'Stationery & Lifestyle' },
    { id: 19, name: 'Mahindra', subtext: 'SUV & Mobility' },
    { id: 20, name: 'Colorplus', subtext: 'Premium Casuals' },
  ],
  // Row 5
  [
    { id: 21, name: 'Harley-Davidson', subtext: 'Motorcycles' },
    { id: 22, name: 'Emporio Armani', subtext: 'Luxury Fashion' },
    { id: 23, name: 'Tommy Hilfiger', subtext: 'Designer Apparel' },
    { id: 24, name: 'Apple', subtext: 'Tech & Innovation' },
    { id: 25, name: 'Sephora', subtext: 'Global Beauty' },
  ],
  // Row 6
  [
    { id: 26, name: 'The Design Co', subtext: 'Studio Partner' },
    { id: 27, name: 'Zomato', subtext: 'Food Delivery' },
    { id: 28, name: 'OnePlus', subtext: 'Smartphones & Gear' },
    { id: 29, name: 'Starbucks', subtext: 'Premium Coffee' },
    { id: 30, name: 'ONESHOT Studio', subtext: 'Creative Agency' },
  ]
];

interface CampaignsSectionProps {
  onOpenConsultation: () => void;
}

export const CampaignsSection: React.FC<CampaignsSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="campaigns-top" className="relative min-h-screen pt-28 sm:pt-36 pb-24 px-4 sm:px-8 lg:px-14 overflow-hidden bg-black text-white selection:bg-[#ED1C24] selection:text-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#ED1C24]/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 1. BRAND SHOWCASE HEADER SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ED1C24]/10 border border-[#ED1C24]/30 text-[#ED1C24] text-xs font-semibold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(237,28,36,0.3)] font-body"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Brand Showcase</span>
          </motion.div>

          {/* Primary Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-3"
          >
            Brands
          </motion.h1>

          {/* Secondary Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading italic text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-[#ED1C24] mb-6 drop-shadow-[0_0_20px_rgba(237,28,36,0.4)]"
          >
            That Back Our Creative Energy
          </motion.h2>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 text-base sm:text-lg font-body font-light leading-relaxed max-w-2xl mx-auto"
          >
            Projects span global names, national staples, premium F&B and emerging businesses. A mix that keeps our creative range wide.
          </motion.p>
        </div>

        {/* 2. 5-COLUMN BRAND LOGO GRID SHOWCASE (30 Elevated Light/High-Contrast Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-28 sm:mb-36 rounded-3xl p-6 sm:p-10 md:p-12 bg-slate-100 text-slate-900 border border-slate-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* subtle header badge inside brand showcase container */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-300">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-body">
              Client & Partner Portfolio
            </span>
            <span className="text-xs font-medium text-slate-500 font-body">
              30 Featured Brands
            </span>
          </div>

          {/* 5-Column Grid */}
          <div className="space-y-4">
            {BRAND_SHOWCASE_LOGOS.map((row, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {row.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="relative rounded-2xl p-5 sm:p-6 bg-white border border-slate-200/90 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_10px_25px_rgba(237,28,36,0.25)] hover:border-[#ED1C24]/50 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-default min-h-[110px]"
                  >
                    <div className="font-heading font-black text-xl sm:text-2xl text-slate-900 tracking-tight group-hover:text-[#ED1C24] transition-colors">
                      {item.name}
                    </div>
                    {item.subtext && (
                      <span className="text-[11px] font-body text-slate-500 font-medium mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.subtext}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. FEATURED CAMPAIGNS & VIRAL REELS SHOWCASE (Continuous Infinite Loop) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 sm:mb-32 overflow-hidden"
        >
          {/* Section Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ED1C24]/10 border border-[#ED1C24]/30 text-[#ED1C24] text-xs font-semibold uppercase tracking-widest mb-4 font-body">
              <Flame className="w-3.5 h-3.5" />
              <span>Live Campaign Work</span>
            </div>
            <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-tight">
              Featured Campaign Reels
            </h2>
            <p className="mt-3 text-white/60 text-sm sm:text-base font-body font-light">
              Continuous stream of high-converting social campaigns and viral creative work.
            </p>
          </div>

          {/* Continuous Infinite Horizontal Reel Loop */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left and Right Fade Edge Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                ease: 'linear',
                duration: 40,
                repeat: Infinity,
              }}
              className="flex items-center gap-6 sm:gap-8 w-max"
            >
              {[...CAMPAIGN_REELS, ...CAMPAIGN_REELS].map((reel, idx) => (
                <div
                  key={`${reel.id}-${idx}`}
                  className="relative w-[280px] sm:w-[320px] rounded-3xl overflow-hidden bg-black/80 border border-white/15 backdrop-blur-xl shadow-2xl shrink-0 group hover:border-[#ED1C24]/60 hover:shadow-[0_0_40px_rgba(237,28,36,0.35)] transition-all duration-300 flex flex-col"
                >
                  {/* Video Container with Auto-play & Loop */}
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-zinc-900">
                    <video
                      src={reel.videoUrl}
                      poster={reel.poster}
                      playsInline
                      loop
                      muted
                      autoPlay
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 text-[11px] font-mono uppercase tracking-widest text-white/90 backdrop-blur-md">
                        {reel.reelNumber}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#ED1C24] text-white text-[11px] font-bold font-body shadow-[0_0_15px_rgba(237,28,36,0.8)]">
                        {reel.roas}
                      </span>
                    </div>

                    {/* Bottom Info Overlay inside Video */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                      <span className="inline-block text-[11px] font-bold font-heading uppercase tracking-wider text-[#ED1C24] bg-black/60 px-2.5 py-0.5 rounded-md border border-white/10 backdrop-blur-sm mb-1">
                        {reel.brand}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-white drop-shadow-md leading-tight">
                        {reel.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Info Footer */}
                  <div className="p-5 bg-black/90 flex items-center justify-between border-t border-white/10">
                    <span className="text-xs font-mono text-white/70 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#ED1C24]" />
                      {reel.metric}
                    </span>
                    <span className="text-[11px] font-body text-white/50 uppercase tracking-wider">
                      {reel.category}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* 4. CALL TO ACTION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-14 md:p-16 text-center overflow-hidden liquid-glass border border-white/15 shadow-[0_0_80px_rgba(237,28,36,0.2)]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#ED1C24]/15 rounded-full blur-[170px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="px-4 py-1.5 rounded-full bg-[#ED1C24]/15 border border-[#ED1C24]/30 text-[#ED1C24] text-xs font-semibold uppercase tracking-widest mb-4 font-body">
              Ready to Scale?
            </span>
            <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Let's Create Your Next Viral Campaign
            </h2>
            <p className="text-white/75 text-base sm:text-lg font-body font-light leading-relaxed mb-8 max-w-xl">
              Turn your brand vision into high-converting social assets, 3D product reveals, and measurable ROAS growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, shadow: '0 0 40px rgba(237,28,36,0.8)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenConsultation}
              className="bg-[#ED1C24] text-white hover:bg-red-600 transition-all duration-300 px-9 py-4 rounded-full text-base sm:text-lg font-bold font-body inline-flex items-center gap-3 shadow-[0_0_35px_rgba(237,28,36,0.65)] border border-red-400/50 cursor-pointer group"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
