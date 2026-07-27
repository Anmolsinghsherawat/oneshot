import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, TrendingUp, Eye, Sparkles, ArrowUpRight, Zap } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenConsultation: () => void;
  onPlayVideoModal: (item: PortfolioItem) => void;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'reels' | 'ads' | 'ugc' | 'showreel';
  metricLabel: string;
  metricValue: string;
  secondaryMetric: string;
  thumbnail: string;
  videoUrl: string;
  tags: string[];
  description: string;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenConsultation,
  onPlayVideoModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'reels' | 'ads' | 'ugc'>('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'item-1',
      title: 'Aura Skincare - 0-100k TikTok Scaling',
      client: 'Aura Glow Labs',
      category: 'reels',
      metricLabel: 'Total Views',
      metricValue: '18.4M',
      secondaryMetric: '+320% Revenue',
      thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4',
      tags: ['Short-Form', 'TikTok Viral', 'Beauty'],
      description: 'Engineered 12 high-converting video hooks that went viral across TikTok and Instagram Reels in 30 days.',
    },
    {
      id: 'item-2',
      title: 'HyperDrive Energy - Meta Ads Campaign',
      client: 'HyperDrive Global',
      category: 'ads',
      metricLabel: 'Ad ROAS',
      metricValue: '9.4x',
      secondaryMetric: '$1.8M Ad Spend Scaled',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4',
      tags: ['Paid Meta Ads', 'Direct Response', 'Scaling'],
      description: 'Tested 40 batch video creative variations to unlock a 9.4x ROAS on Meta and TikTok Ads.',
    },
    {
      id: 'item-3',
      title: 'Veloce Footwear - UGC Creator Engine',
      client: 'Veloce Sports',
      category: 'ugc',
      metricLabel: 'UGC Content Created',
      metricValue: '250+',
      secondaryMetric: '14.2M Organic Impressions',
      thumbnail: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4',
      tags: ['Creator Network', 'UGC', 'E-Commerce'],
      description: 'Coordinated 35 creators to generate authentic unboxing and lifestyle content that slashed CPA by 44%.',
    },
    {
      id: 'item-4',
      title: 'Zenith Audio - Cinematic Brand Reels',
      client: 'Zenith Sound Co',
      category: 'reels',
      metricLabel: 'Average Watch Time',
      metricValue: '42.8s',
      secondaryMetric: '+180k Followers',
      thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4',
      tags: ['Cinematic', 'Audio Tech', 'Reels'],
      description: 'Studio-grade audio visualization and macro videography that captivated high-intent tech buyers.',
    },
    {
      id: 'item-5',
      title: 'LuxeLiving - High-Ticket Meta Ad Funnel',
      client: 'LuxeLiving Direct',
      category: 'ads',
      metricLabel: 'Conversions',
      metricValue: '$2.4M',
      secondaryMetric: '6.8x ROAS',
      thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4',
      tags: ['High Ticket', 'Paid Ads', 'Meta'],
      description: 'Full-funnel creative strategy pairing high-end product aesthetics with direct-response offer angles.',
    },
    {
      id: 'item-6',
      title: 'Pulse Wearables - Viral TikTok Campaign',
      client: 'Pulse Tech',
      category: 'ugc',
      metricLabel: 'Share Rate',
      metricValue: '12.4%',
      secondaryMetric: '8.9M Views',
      thumbnail: 'https://images.unsplash.com/photo-1510519138161-5844579d2d4f?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4',
      tags: ['Viral Hook', 'UGC Ads', 'Tech'],
      description: 'Utilized pattern-interrupt hooks and micro-trends to spark organic user sharing and sales spikes.',
    },
  ];

  const filteredItems =
    activeTab === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="bg-[#F3F4F6] text-[#0F172A] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-3.5 py-1 text-xs font-semibold rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#ED1C24]" />
              <span>Proven Campaign Results</span>
            </div>
            <h2 className="font-heading italic text-5xl md:text-6xl lg:text-7xl text-[#0F172A] tracking-[-2px] leading-tight">
              Crafted for Scale. Built to Convert.
            </h2>
            <p className="font-body text-[#2B2D42] text-base md:text-lg max-w-2xl mt-3 font-normal">
              Explore our portfolio of high-performing social video campaigns, viral reels, and ad creative suites generated for leading direct-to-consumer brands.
            </p>
          </div>

          {/* Consultation CTA button in Brand Red (#ED1C24) */}
          <button
            id="portfolio-header-cta"
            onClick={onOpenConsultation}
            className="shrink-0 bg-[#ED1C24] hover:bg-red-600 text-white px-6 py-3.5 rounded-full font-semibold font-body text-sm flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(237,28,36,0.4)] cursor-pointer group"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-gray-200 no-scrollbar">
          {[
            { id: 'all', label: 'All Campaign Works' },
            { id: 'reels', label: 'Viral Short-Form Reels' },
            { id: 'ads', label: 'Paid Meta & TikTok Ads' },
            { id: 'ugc', label: 'UGC Creator Campaigns' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium font-body transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#0F172A] text-white shadow-md'
                  : 'bg-white text-[#2B2D42] hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => onPlayVideoModal(item)}
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#ED1C24] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#ED1C24]">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Metric Badge */}
                  <div className="absolute top-4 left-4 bg-[#0F172A]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold font-body flex items-center gap-1.5 border border-white/10">
                    <TrendingUp className="w-3.5 h-3.5 text-[#ED1C24]" />
                    <span>{item.metricLabel}: <strong className="text-white font-bold">{item.metricValue}</strong></span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-4 flex gap-1.5 flex-wrap">
                    {item.tags.map((tag) => (
                      <span key={tag} className="bg-white/20 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#ED1C24] uppercase tracking-wider font-body">
                      {item.client}
                    </span>
                    <h3 className="font-heading italic text-2xl text-[#0F172A] mt-1 group-hover:text-[#ED1C24] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-body text-[#2B2D42] mt-2 font-light leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#2B2D42] font-body flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-[#ED1C24]" />
                      {item.secondaryMetric}
                    </span>
                    <span className="text-xs font-semibold text-[#0F172A] group-hover:text-[#ED1C24] transition-colors flex items-center gap-1 font-body">
                      Watch Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 bg-[#0F172A] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl">
          <div className="max-w-2xl">
            <h3 className="font-heading italic text-3xl md:text-4xl text-white">
              Ready to scale your social reach and ad ROAS?
            </h3>
            <p className="font-body text-white/80 text-sm md:text-base mt-2 font-light">
              We script, produce, edit, and optimize high-converting video campaigns tailored for Meta, TikTok, and YouTube Shorts.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-[#ED1C24] hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold font-body text-base flex items-center gap-2 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(237,28,36,0.6)] cursor-pointer group"
          >
            <span>Book Your Strategy Call</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
