import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';

interface OneShotSectionProps {
  onOpenConsultation: () => void;
}

export const OneShotSection: React.FC<OneShotSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="one-shot-section"
      className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden border-t border-white/10"
    >
      {/* Subtle Red Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[350px] bg-[#ED1C24]/12 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#ED1C24]/08 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full liquid-glass border border-white/15 text-xs font-semibold tracking-widest text-[#ED1C24] uppercase font-body">
            <Zap className="w-3.5 h-3.5 text-[#ED1C24]" />
            <span>The One Shot Philosophy</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            One Shot to Win Your Market. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-red-500">
              Zero Room for Error.
            </span>
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT COLUMN: Clean Image with rounded corners and subtle overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative group rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-[#ED1C24]/50 transition-all duration-300 h-full min-h-[320px] sm:min-h-[380px] flex flex-col justify-between p-6 sm:p-8">
              {/* Background Art - Reference Image Recreation: Glowing Red Twin Neon Light Pillars */}
              <div className="absolute inset-0 z-0 bg-black overflow-hidden">
                <svg
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  viewBox="0 0 500 800"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="neonBeamGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#FF1E27" stopOpacity="0.95" />
                      <stop offset="60%" stopColor="#FF4D52" stopOpacity="0.9" />
                      <stop offset="85%" stopColor="#FF8B3D" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ED1C24" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="coreBeamGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#FFB3B3" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FF3B42" stopOpacity="0.4" />
                    </linearGradient>
                    <radialGradient id="bottomGlow" cx="50%" cy="75%" r="55%">
                      <stop offset="0%" stopColor="#ED1C24" stopOpacity="0.85" />
                      <stop offset="40%" stopColor="#800A0E" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </radialGradient>
                    <filter id="neonBlurFilter" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="10" result="blur1" />
                      <feGaussianBlur stdDeviation="3" result="blur2" />
                      <feMerge>
                        <feMergeNode in="blur1" />
                        <feMergeNode in="blur2" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Dark Pitch Canvas */}
                  <rect width="500" height="800" fill="#040001" />

                  {/* Base Glow */}
                  <rect width="500" height="800" fill="url(#bottomGlow)" />

                  {/* Bottom Fanning Perspective Speed Lines */}
                  <g filter="url(#neonBlurFilter)">
                    <path d="M 250 480 C 250 600, 100 660, -50 760" stroke="#ED1C24" strokeWidth="20" fill="none" opacity="0.6" />
                    <path d="M 250 480 C 250 600, 400 660, 550 760" stroke="#ED1C24" strokeWidth="20" fill="none" opacity="0.6" />
                    
                    <path d="M 250 480 C 250 580, 120 640, -10 720" stroke="#FF3B42" strokeWidth="12" fill="none" opacity="0.8" />
                    <path d="M 250 480 C 250 580, 380 640, 510 720" stroke="#FF3B42" strokeWidth="12" fill="none" opacity="0.8" />

                    <path d="M 242 460 C 242 560, 160 620, 40 700" stroke="#FF6B6B" strokeWidth="8" fill="none" opacity="0.9" />
                    <path d="M 258 460 C 258 560, 340 620, 460 700" stroke="#FF6B6B" strokeWidth="8" fill="none" opacity="0.9" />

                    <path d="M 245 450 C 245 540, 200 630, 110 780" stroke="#FF8B3D" strokeWidth="6" fill="none" opacity="0.9" />
                    <path d="M 255 450 C 255 540, 300 630, 390 780" stroke="#FF8B3D" strokeWidth="6" fill="none" opacity="0.9" />
                  </g>

                  {/* Main Twin Vertical Beams */}
                  <g filter="url(#neonBlurFilter)">
                    {/* Ambient outer aura */}
                    <line x1="240" y1="0" x2="240" y2="500" stroke="#ED1C24" strokeWidth="24" opacity="0.5" strokeLinecap="round" />
                    <line x1="260" y1="0" x2="260" y2="500" stroke="#ED1C24" strokeWidth="24" opacity="0.5" strokeLinecap="round" />

                    {/* Gradient Beam Body */}
                    <line x1="240" y1="0" x2="240" y2="500" stroke="url(#neonBeamGrad)" strokeWidth="12" strokeLinecap="round" />
                    <line x1="260" y1="0" x2="260" y2="500" stroke="url(#neonBeamGrad)" strokeWidth="12" strokeLinecap="round" />

                    {/* Bright Core */}
                    <line x1="240" y1="0" x2="240" y2="500" stroke="url(#coreBeamGrad)" strokeWidth="4" strokeLinecap="round" />
                    <line x1="260" y1="0" x2="260" y2="500" stroke="url(#coreBeamGrad)" strokeWidth="4" strokeLinecap="round" />
                  </g>
                </svg>

                {/* Subtle Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
              </div>

              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-bold font-body uppercase tracking-wider text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  ONE SHOT APPROACH
                </span>
                <div className="w-9 h-9 rounded-xl liquid-glass border border-white/20 flex items-center justify-center text-[#ED1C24] shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Frosted Title Pill */}
              <div className="relative z-10 space-y-2 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 shadow-xl">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                  Calculated Growth. <br />
                  <span className="text-[#ED1C24]">Unapologetic Scale.</span>
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  Deployed with single-minded precision to drive verifiable compound ROAS.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Slightly wider Frosted Glass Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div
              id="oneshot-glass-box"
              className="relative rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-6 sm:space-y-8 hover:border-[#ED1C24]/40 transition-colors duration-300 overflow-hidden h-full flex flex-col justify-between"
            >
              {/* Subtle Corner Ambient Reflection */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#ED1C24]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 my-auto">
                {/* Text Section 1 */}
                <div className="relative z-10 space-y-2 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#ED1C24]/20 border border-[#ED1C24]/50 flex items-center justify-center text-[#ED1C24] font-bold text-xs shrink-0 font-body">
                      01
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                      Precision Execution, Zero Wasted Capital
                    </h3>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-white/80 font-normal leading-relaxed pl-10">
                    We don't test blindly. Every campaign strategy, creative hook, and storefront funnel is modeled against real customer acquisition data before a single dollar is deployed.
                  </p>
                </div>

                {/* Text Section 2 */}
                <div className="relative z-10 space-y-2 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#ED1C24]/20 border border-[#ED1C24]/50 flex items-center justify-center text-[#ED1C24] font-bold text-xs shrink-0 font-body">
                      02
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                      Speed-to-Market Meets High-End Craft
                    </h3>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-white/80 font-normal leading-relaxed pl-10">
                    From 3D motion assets to headless web development, our multi-disciplinary team deploys full-funnel growth engines in weeks, not quarters.
                  </p>
                </div>

                {/* Text Section 3 */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#ED1C24]/20 border border-[#ED1C24]/50 flex items-center justify-center text-[#ED1C24] font-bold text-xs shrink-0 font-body">
                      03
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                      Guaranteed Attribution & Scalable ROAS
                    </h3>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-white/80 font-normal leading-relaxed pl-10">
                    Eliminate marketing guesswork with multi-touch attribution and real-time profit telemetry designed to turn ad spend into compound growth.
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-medium text-white/70 font-body">
                  <ShieldCheck className="w-4 h-4 text-[#ED1C24]" />
                  <span>100% Performance Guarantee</span>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="bg-[#ED1C24] text-white hover:bg-[#d0151c] transition-all duration-300 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full flex items-center gap-2 shadow-[0_0_18px_rgba(237,28,36,0.4)] hover:shadow-[0_0_28px_rgba(237,28,36,0.7)] border border-red-400/30 cursor-pointer hover:scale-105 shrink-0"
                >
                  <span>Claim Your Spot</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


