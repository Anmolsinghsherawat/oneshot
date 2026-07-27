import React from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  TrendingUp,
  Video,
  Sparkles,
  Users,
  BarChart3,
  ArrowUpRight,
  Check,
  Zap,
} from 'lucide-react';

interface GrowthEngineSectionProps {
  onOpenConsultation: () => void;
}

interface BentoCardData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  spanClasses: string;
  frontTag: string;
  description: string;
  deliverables: string[];
  stats: string;
  hasCustomArt?: boolean;
}

const BENTO_CARDS: BentoCardData[] = [
  {
    id: 'digital-flagship',
    category: 'Ecosystem',
    title: 'Digital Flagship & CRO Architecture',
    subtitle: 'High-converting interactive web environments built for speed and sales.',
    icon: Globe,
    spanClasses: 'lg:col-span-1 lg:row-span-2 md:col-span-1',
    frontTag: '01 / WEB FLAGSHIP',
    description:
      'We architect high-speed digital storefronts with custom checkout flows and headless Shopify infrastructure built to maximize AOV.',
    deliverables: [
      'Headless Storefronts',
      'UX Conversion Audits',
      'Custom Checkout Funnels',
      'Speed Optimization',
    ],
    stats: '+142% Avg Conversion Rate',
  },
  {
    id: 'paid-media',
    category: 'Performance',
    title: 'Paid Media & High-ROAS Scaling',
    subtitle: 'AI-assisted audience targeting across Meta, TikTok, and Google Ads.',
    icon: TrendingUp,
    spanClasses: 'lg:col-span-2 md:col-span-2',
    frontTag: '02 / MEDIA BUYING',
    description:
      'Multi-touch media buying with custom predictive bidding models. We construct resilient paid acquisition engines that scale monthly spend cleanly.',
    deliverables: [
      'Meta & TikTok Ad Scaling',
      'Predictive Audience Modeling',
      'Omni-Channel Attribution',
    ],
    stats: '4.8x Blended ROAS Benchmark',
  },
  {
    id: 'studio-creative',
    category: 'Production',
    title: '3D Motion & Studio Creative',
    subtitle: 'Hypnotic visual ad assets engineered to stop the scroll in 1.5s.',
    icon: Sparkles,
    spanClasses: 'lg:col-span-1 md:col-span-1',
    frontTag: '03 / MOTION STUDIO',
    description:
      'High-velocity 3D product renders, dynamic visual effects, and bespoke studio imagery crafted to command instant attention.',
    deliverables: [
      '3D CGI Animation',
      'Direct-Response Hooks',
      'High-Converting Ad Suites',
    ],
    stats: '< 1.5s Scroll-Stop Rate',
  },
  {
    id: 'viral-social',
    category: 'Organic Reach',
    title: 'Viral Short-Form Video Engine',
    subtitle: 'Daily UGC scaling, creator seeding, and TikTok & Reels dominance.',
    icon: Video,
    spanClasses: 'lg:col-span-1 md:col-span-1',
    frontTag: '04 / VIRAL REELS',
    description:
      'End-to-end short-form video production engine. We deploy high-converting UGC creator networks and viral organic calendars.',
    deliverables: [
      'TikTok & Instagram Reels',
      'Automated UGC Pipeline',
      'Viral Trend Hijacking',
    ],
    stats: '120M+ Organic Views',
  },
  {
    id: 'creator-whitelisting',
    category: 'PR & Talent',
    title: 'Creator Seeding & Whitelisting',
    subtitle: 'Tier-1 creator partnerships with direct handle access and whitelisting.',
    icon: Users,
    spanClasses: 'lg:col-span-2 md:col-span-2',
    frontTag: '05 / INFLUENCER PR',
    description:
      'Turn high-authority creator accounts into direct media assets. We contract top creators, whitelist social channels, and amplify trust.',
    deliverables: [
      'Creator Handle Whitelisting',
      'Gifting & Seeding Campaigns',
      'Talent Contract Negotiation',
    ],
    stats: '500+ Creator Network',
    hasCustomArt: true, // Featuring the red diagonal liquid capsule art on the right side!
  },
  {
    id: 'growth-analytics',
    category: 'Intelligence',
    title: 'Real-Time Growth & AI Analytics',
    subtitle: 'Deep data infrastructure for full transparency into every dollar spent.',
    icon: BarChart3,
    spanClasses: 'lg:col-span-1 md:col-span-1',
    frontTag: '06 / GROWTH DATA',
    description:
      'Custom real-time reporting dashboards with multi-touch attribution, customer LTV modeling, and profit tracking.',
    deliverables: [
      'Custom Live Dashboards',
      'LTV & Churn Modeling',
      'First-Party Data Setup',
      'Automated Profit Tracking',
    ],
    stats: '100% Data Transparency',
  },
];

export const GrowthEngineSection: React.FC<GrowthEngineSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section
      id="growth-engine"
      className="relative bg-black text-white py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
    >
      {/* Background Subtle Ambient Red Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none mix-blend-screen opacity-15 blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgba(237,28,36,0.8) 0%, rgba(0,0,0,0) 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Motion Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/15 text-xs font-semibold tracking-widest text-[#ED1C24] uppercase font-body">
            <Zap className="w-3.5 h-3.5 text-[#ED1C24]" />
            <span>Proprietary Growth System</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            360° Growth Engine for Modern Brands
          </h2>

          <p className="font-body text-white/70 text-base sm:text-lg md:text-xl font-light leading-relaxed">
            An interconnected bento ecosystem where performance, creative, and digital infrastructure compound to scale revenue fast.
          </p>
        </motion.div>

        {/* Bento Box Grid with Staggered Slide-into-Place Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {BENTO_CARDS.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`w-full ${card.spanClasses}`}
              >
                {/* Clean Bento Card */}
                <div
                  className={`group relative w-full h-full rounded-3xl border border-white/12 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 md:p-7 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-[#ED1C24]/60 hover:shadow-[0_15px_40px_rgba(237,28,36,0.25)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden ${
                    card.id === 'digital-flagship' ? 'min-h-[460px] lg:min-h-[520px]' : 'min-h-[320px]'
                  }`}
                >
                  {/* Subtle Red Corner Accent Glow */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#ED1C24]/10 rounded-full blur-2xl group-hover:bg-[#ED1C24]/25 transition-all duration-500 pointer-events-none" />

                  {/* Main Card Grid / Flex Container */}
                  {card.hasCustomArt ? (
                    /* SPECIAL 2-COLUMN LAYOUT FOR CARD 05 (INFLUENCER PR) TO FILL RIGHT SPACE */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center relative z-10 my-auto">
                      {/* Left Column Text Content */}
                      <div className="lg:col-span-7 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-[11px] font-bold font-body uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 group-hover:text-[#ED1C24] group-hover:border-[#ED1C24]/40 transition-colors">
                            {card.frontTag}
                          </span>
                          <div className="w-9 h-9 rounded-xl liquid-glass flex items-center justify-center text-white border border-white/20 group-hover:border-[#ED1C24] group-hover:text-[#ED1C24] group-hover:scale-110 transition-all duration-300 shadow-md lg:hidden">
                            <IconComponent className="w-4 h-4" />
                          </div>
                        </div>

                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                          {card.title}
                        </h3>

                        <p className="font-body text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                          {card.description}
                        </p>

                        <div className="pt-1">
                          <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider block mb-1.5 font-body">
                            Key Capabilities:
                          </span>
                          <ul className="space-y-1.5">
                            {card.deliverables.map((item) => (
                              <li
                                key={item}
                                className="text-xs font-body text-white/90 flex items-center gap-2"
                              >
                                <div className="w-3.5 h-3.5 rounded-full bg-[#ED1C24]/20 border border-[#ED1C24]/60 flex items-center justify-center shrink-0">
                                  <Check className="w-2 h-2 text-[#ED1C24]" />
                                </div>
                                <span className="truncate">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column Featured Red Liquid Capsule Visual Art Box */}
                      <div className="lg:col-span-5 relative w-full h-[180px] sm:h-[200px] lg:h-[210px] rounded-2xl border border-white/15 overflow-hidden bg-black/60 shadow-2xl flex items-center justify-center group-hover:border-[#ED1C24]/50 transition-colors">
                        {/* SVG Red Fluid Capsules Visual Artwork */}
                        <svg
                          className="absolute inset-0 w-full h-full object-cover scale-125 -rotate-12 translate-x-2 -translate-y-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                          viewBox="0 0 400 400"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="redCapsuleGrad1"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#ED1C24" stopOpacity="0.95" />
                              <stop offset="50%" stopColor="#FF4D52" stopOpacity="0.75" />
                              <stop offset="100%" stopColor="#600508" stopOpacity="0.1" />
                            </linearGradient>
                            <linearGradient
                              id="redCapsuleGrad2"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#FF3B42" stopOpacity="1" />
                              <stop offset="100%" stopColor="#1A0203" stopOpacity="0.2" />
                            </linearGradient>
                            <filter
                              id="glowArtFilter"
                              x="-20%"
                              y="-20%"
                              width="140%"
                              height="140%"
                            >
                              <feGaussianBlur stdDeviation="10" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>

                          <g filter="url(#glowArtFilter)">
                            <rect
                              x="70"
                              y="-30"
                              width="42"
                              height="300"
                              rx="21"
                              fill="url(#redCapsuleGrad1)"
                              transform="rotate(-38 70 -30)"
                            />
                            <rect
                              x="160"
                              y="-10"
                              width="50"
                              height="380"
                              rx="25"
                              fill="url(#redCapsuleGrad2)"
                              transform="rotate(-38 160 -10)"
                            />
                            <rect
                              x="250"
                              y="60"
                              width="36"
                              height="340"
                              rx="18"
                              fill="url(#redCapsuleGrad1)"
                              transform="rotate(-38 250 60)"
                            />
                            <rect
                              x="330"
                              y="140"
                              width="46"
                              height="290"
                              rx="23"
                              fill="url(#redCapsuleGrad2)"
                              transform="rotate(-38 330 140)"
                            />
                          </g>
                        </svg>

                        {/* Dark Gradient Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                        {/* Floating Badge inside Art Box */}
                        <div className="relative z-10 text-center p-3 bg-black/50 backdrop-blur-md rounded-xl border border-white/20 shadow-xl max-w-[180px]">
                          <div className="w-8 h-8 rounded-lg liquid-glass flex items-center justify-center text-[#ED1C24] border border-[#ED1C24]/40 mx-auto mb-1.5 shadow-lg">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-bold text-white block tracking-wide font-heading">
                            Creators Network
                          </span>
                          <span className="text-[10px] text-white/70 font-body">
                            Whitelisted Access
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* STANDARD CARD LAYOUT */
                    <div className="relative z-10 space-y-3.5">
                      {/* Top Tag & Icon Row */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] font-bold font-body uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 group-hover:text-[#ED1C24] group-hover:border-[#ED1C24]/40 transition-colors">
                          {card.frontTag}
                        </span>
                        <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center text-white border border-white/20 group-hover:border-[#ED1C24] group-hover:text-[#ED1C24] group-hover:scale-110 transition-all duration-300 shadow-md">
                          <IconComponent className="w-4.5 h-4.5" />
                        </div>
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                        {card.title}
                      </h3>

                      <p className="font-body text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                        {card.description}
                      </p>

                      {/* Deliverables Bullet List */}
                      <div className="pt-1">
                        <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider block mb-1.5 font-body">
                          Key Capabilities:
                        </span>
                        <ul
                          className={`gap-1.5 ${
                            card.deliverables.length > 3 && card.spanClasses.includes('col-span-2')
                              ? 'grid grid-cols-1 sm:grid-cols-2'
                              : 'space-y-1.5'
                          }`}
                        >
                          {card.deliverables.map((item) => (
                            <li
                              key={item}
                              className="text-xs font-body text-white/90 flex items-center gap-2"
                            >
                              <div className="w-3.5 h-3.5 rounded-full bg-[#ED1C24]/20 border border-[#ED1C24]/60 flex items-center justify-center shrink-0">
                                <Check className="w-2 h-2 text-[#ED1C24]" />
                              </div>
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Card Footer: Metric & Cleanly Contained CTA Button */}
                  <div className="relative z-10 pt-4 mt-5 border-t border-white/10 flex items-center justify-between gap-2 w-full min-w-0">
                    <span className="text-[11px] sm:text-xs font-semibold text-[#ED1C24] font-body bg-[#ED1C24]/10 px-3 py-1 rounded-full border border-[#ED1C24]/30 truncate max-w-[55%] sm:max-w-none">
                      {card.stats}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenConsultation();
                      }}
                      className="liquid-glass-red rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-white inline-flex items-center gap-1.5 hover:scale-105 transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(237,28,36,0.35)] shrink-0"
                    >
                      <span>Activate</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

