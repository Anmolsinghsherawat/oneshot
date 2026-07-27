import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight, Sparkles } from 'lucide-react';

interface WhatWeDoSectionProps {
  onOpenConsultation: () => void;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  previewImage: string;
  subServices: string[];
}

// You can easily change any preview image URL below in this SERVICES_DATA array:
const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'social-media',
    number: '01',
    title: 'Social Media Management',
    description:
      'End-to-end community architecture, platform strategy, viral content calendars, and daily execution across TikTok, Instagram, and YouTube. We scale organic reach and turn passive scrollers into hyper-loyal brand advocates.',
    previewImage:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    subServices: [
      'Content Strategy',
      'Community Management',
      'Organic Growth',
      'Platform Audits',
      'Viral Scriptwriting',
      'Account Scaling',
    ],
  },
  {
    id: 'video-production',
    number: '02',
    title: 'Video Production',
    description:
      'High-velocity commercial video ads, studio cinematography, direct-response hooks, and automated UGC scaling. Designed to stop the scroll in under 1.5 seconds and convert cold traffic.',
    previewImage:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    subServices: [
      'Commercial Directing',
      'High-ROAS Video Ads',
      'UGC Directing',
      'Scriptwriting & Storyboards',
      'Drone & FPV Videography',
      'Post-Production',
    ],
  },
  {
    id: 'photography',
    number: '03',
    title: 'Photography',
    description:
      'Bespoke studio product photography, lifestyle & e-commerce editorials, architectural space capture, and high-impact brand campaign imagery crafted to elevate legacy presence in a digital-first world.',
    previewImage:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    subServices: [
      'Product Photography',
      'Lifestyle & E-Commerce',
      'Food & Beverage',
      'Spaces & Ambience',
      'Brand Campaigns',
      'Retouching & Grading',
    ],
  },
  {
    id: 'graphic-motion',
    number: '04',
    title: 'Graphic Design & motion',
    description:
      '3D motion graphics, brand identity systems, typography architecture, interactive ad overlays, and high-converting static creative suites built for modern digital channels.',
    previewImage:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    subServices: [
      '3D Motion Design',
      'Brand Identity',
      'Ad Creatives',
      'Typography Systems',
      'Micro-Animations',
      'Vector Illustration',
    ],
  },
  {
    id: 'influencer-pr',
    number: '05',
    title: 'Influencer Marketing and PR',
    description:
      'Tier-1 creator seeding, handle whitelisting campaigns, talent contract negotiation, viral challenge orchestration, and premier digital media placements.',
    previewImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    subServices: [
      'Creator Seeding',
      'Handle Whitelisting',
      'Contract & Usage Rights',
      'Press & Media PR',
      'Gifting Campaigns',
      'KOL Partnerships',
    ],
  },
  {
    id: 'performance-marketing',
    number: '06',
    title: 'Performance Marketing',
    description:
      'Precision media buying, AI-driven audience modeling, landing page conversion rate optimization (CRO), and multi-touch attribution to guarantee maximum ROAS.',
    previewImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    subServices: [
      'Meta & TikTok Ads',
      'Funnel Optimization',
      'Conversion Rate (CRO)',
      'A/B Hook Testing',
      'Retargeting Architectures',
      'ROAS Analytics',
    ],
  },
];

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ onOpenConsultation }) => {
  // Expanded item state (all items start collapsed by default)
  const [expandedId, setExpandedId] = useState<string>('');

  // Hover state for inline preview image on collapsed items
  const [hoveredItem, setHoveredItem] = useState<ServiceItem | null>(null);

  // Active selected tag inside expanded section
  const [selectedTagMap, setSelectedTagMap] = useState<Record<string, string>>({
    photography: 'Product Photography',
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  const handleSelectTag = (serviceId: string, tag: string) => {
    setSelectedTagMap((prev) => ({ ...prev, [serviceId]: tag }));
  };

  return (
    <section
      id="what-we-do"
      className="relative bg-black text-white py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/10"
    >
      {/* Background Subtle Red Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none mix-blend-screen opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(237, 28, 36, 0.6) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-full inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/10 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ED1C24]" />
            <span className="text-xs uppercase tracking-widest font-semibold font-body text-white/90">
              02 / WHAT WE DO
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <h2 className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-white tracking-[-2px] leading-[1.05]">
                Architecting Relevance & Scale
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 liquid-glass border border-white/15 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/[0.05] via-black/40 to-transparent shadow-[0_0_35px_rgba(237,28,36,0.12)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ED1C24]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#ED1C24]/25 transition-all duration-500" />
              <p className="font-body text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed relative z-10">
                We simplify your social presence and turn it into a consistent, high performing growth engine. From refining your brand positioning to planning your monthly content blueprint to executing the strategy, we ensure your brand looks premium, communicates clearly and reaches the right audience.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stacked Vertically Numbered Service List */}
        <div
          className="relative border-t border-white/15"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {SERVICES_DATA.map((item) => {
            const isExpanded = expandedId === item.id;
            const isHovered = hoveredItem?.id === item.id;

            return (
              <div
                key={item.id}
                className="border-b border-white/15 transition-colors duration-300 relative"
                onMouseEnter={() => !isExpanded && setHoveredItem(item)}
              >
                {/* List Header Row (Clickable) */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className={`w-full flex items-center justify-between py-8 sm:py-10 px-3 sm:px-6 cursor-pointer transition-colors duration-300 group select-none relative ${
                    isExpanded
                      ? 'bg-white/[0.04]'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-8 md:gap-10 min-w-0 pr-4">
                    {/* Item Number */}
                    <span
                      className={`font-body text-sm sm:text-base font-medium tracking-wider transition-colors shrink-0 ${
                        isExpanded ? 'text-[#ED1C24]' : 'text-white/50 group-hover:text-[#ED1C24]'
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Item Title */}
                    <h3
                      className={`font-heading italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-300 tracking-tight ${
                        isExpanded
                          ? 'text-white'
                          : 'text-white/85 group-hover:text-white group-hover:translate-x-1.5'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Absolute Tilted Preview Image - No Layout Shift */}
                  <div className="absolute right-20 sm:right-24 lg:right-28 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                    <AnimatePresence mode="wait">
                      {isHovered && !isExpanded && (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="hidden md:block rotate-[35deg]"
                        >
                          <div className="w-32 h-20 sm:w-36 sm:h-22 rounded-xl overflow-hidden border-2 border-white/60 shadow-[0_0_25px_rgba(237,28,36,0.5)] bg-black relative flex items-center justify-center">
                            <img
                              src={item.previewImage}
                              alt={item.title}
                              className="w-[220%] h-[220%] max-w-none max-h-none object-cover -rotate-[35deg] shrink-0"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Plus / Minus Action Button */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 z-10 ${
                      isExpanded
                        ? 'bg-[#ED1C24] text-white shadow-[0_0_20px_rgba(237,28,36,0.6)] rotate-180'
                        : 'liquid-glass text-white/80 group-hover:text-white group-hover:border-[#ED1C24]/50 group-hover:bg-[#ED1C24]/20'
                    }`}
                  >
                    {isExpanded ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </div>
                </div>

                {/* EXPANDED STATE CONFIGURATION */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-white/[0.03] border-t border-white/10 rounded-b-2xl"
                    >
                      <div className="p-6 sm:p-8 md:p-12 space-y-8">
                        {/* Detailed Description Paragraph */}
                        <p className="font-body text-white/90 text-lg sm:text-xl md:text-[22px] font-light leading-relaxed max-w-4xl">
                          {item.description}
                        </p>

                        {/* Sub-Services Pill Buttons Grid */}
                        <div>
                          <span className="text-xs uppercase tracking-widest font-semibold text-[#ED1C24] font-body block mb-4">
                            Core Capabilities & Deliverables
                          </span>

                          <div className="flex flex-wrap gap-2.5 sm:gap-3">
                            {item.subServices.map((subService) => (
                              <div
                                key={subService}
                                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium font-body bg-[#ED1C24] text-white border border-red-500 shadow-[0_0_12px_rgba(237,28,36,0.4)]"
                              >
                                <span>{subService}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Quick Link inside expanded item */}
                        <div className="pt-2 flex items-center gap-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenConsultation();
                            }}
                            className="liquid-glass-red rounded-full px-6 py-3 text-sm font-semibold text-white inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-[0_0_25px_rgba(237,28,36,0.5)]"
                          >
                            <span>Book Call for {item.title}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

