import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Star } from 'lucide-react';
import { FadingVideo } from './FadingVideo';
import { BlurText } from './BlurText';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onWatchShowreel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onWatchShowreel,
}) => {
  const VIDEO_SRC =
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4';

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-black flex flex-col justify-between overflow-hidden"
    >
      {/* Background video with natural dark starry sky & dramatic volumetric red lighting overlays */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 z-0 pointer-events-none overflow-hidden"
        style={{ width: '120%', height: '120%' }}
      >
        <FadingVideo
          id="hero-bg-video"
          src={VIDEO_SRC}
          className="w-full h-full object-cover object-top"
          style={{
            filter: 'contrast(115%) brightness(1.05)',
          }}
        />

        {/* Volumetric Crimson Core & Neon Glow (Screen blend so dark stars show through) */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(237, 28, 36, 0.45) 0%, rgba(220, 20, 30, 0.2) 40%, transparent 75%)',
          }}
        />

        {/* Cinematic Red Rim Light & Backlight Accent (Bottom/Sides Glow) */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 50% 90%, rgba(255, 40, 50, 0.6) 0%, rgba(237, 28, 36, 0.2) 50%, transparent 80%)',
          }}
        />

        {/* Moody Red Edge Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-red-950/20 pointer-events-none" />
      </div>

      {/* Hero content layer z-10 */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center pt-36 sm:pt-44 md:pt-48 pb-12 px-4 max-w-5xl mx-auto w-full">
        {/* Top Rating Badge — 5 Stars + Trusted by 130+ brands */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="liquid-glass rounded-full inline-flex items-center gap-2.5 px-4 py-2 border border-white/10 mb-6 cursor-pointer hover:border-white/30 transition-all shadow-md"
          onClick={onOpenConsultation}
        >
          <div className="flex items-center gap-1 text-[#F59E0B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            ))}
          </div>
          <span className="text-sm font-medium text-white/95 font-body">
            Trusted by 130+ brands
          </span>
        </motion.div>

        {/* Headline — BlurText component */}
        <div className="w-full flex justify-center my-2">
          <BlurText
            id="hero-headline-blurtext"
            text="Helping you launch and scale social ads"
            className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[1.05] sm:leading-[0.95] max-w-4xl justify-center tracking-[-1px] sm:tracking-[-3px] break-words"
          />
        </div>

        {/* Subheading (delay 0.8s) formatted symmetrically with centered ONE SHOT ANIMATION badge */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-col items-center gap-3 text-center max-w-4xl mx-auto"
        >
          {/* Top Line */}
          <p className="text-[22px] sm:text-[28px] md:text-[32px] text-white/95 font-body font-light tracking-tight leading-snug">
            We don't just follow trends — we architect them.
          </p>

          {/* Center Line: ONE SHOT ANIMATION text with ambient gradient behind it */}
          <div className="relative my-2 inline-block">
            {/* Soft ambient red gradient glow behind text */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.65)_0%,rgba(237,28,36,0.2)_50%,transparent_80%)] blur-2xl scale-150 opacity-90 pointer-events-none" />
            <span className="font-heading italic font-extrabold text-white text-[24px] sm:text-[32px] md:text-[38px] tracking-wide bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(237,28,36,0.9)]">
              ONE SHOT ANIMATION
            </span>
          </div>

          {/* Bottom Line */}
          <p className="text-[18px] sm:text-[24px] md:text-[28px] text-white/80 font-body font-light tracking-tight leading-relaxed max-w-3xl">
            Bringing imagination to life with cutting-edge visual storytelling &amp; high-impact campaigns.
          </p>
        </motion.div>

        {/* CTAs & Agency Bar (delay 1.1s) */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
          className="flex flex-col items-center mt-10"
        >
          {/* Primary CTA: #ED1C24 red glass effect button */}
          <button
            id="hero-primary-cta"
            onClick={onOpenConsultation}
            className="liquid-glass-red rounded-full px-8 py-4 text-base md:text-lg font-semibold text-white flex items-center gap-2.5 hover:bg-[#ED1C24]/85 hover:shadow-[0_0_50px_rgba(237,28,36,0.85)] transition-all duration-300 cursor-pointer group hover:scale-105"
          >
            <span className="font-body">Book a 30 Min Call</span>
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Agency Bar shifted down below the button with increased spacing */}
          <div
            className="liquid-glass rounded-full inline-flex items-center gap-2.5 p-1.5 pr-4 border border-white/10 mt-9 cursor-pointer hover:border-white/30 transition-all shadow-md"
            onClick={onOpenConsultation}
          >
            <span className="bg-[#ED1C24] text-white px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider font-body">
              Agency
            </span>
            <span className="text-sm text-white/90 font-body font-normal">
              ONE SHOT ANIMATION • Bringing Imagination To Life
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
