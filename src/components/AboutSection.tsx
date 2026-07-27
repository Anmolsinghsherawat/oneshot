import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Target, Zap, ShieldAlert, CheckCircle2, ArrowUpRight, TrendingUp, Award, Eye,
  Briefcase, Layers, BarChart3, Film, Megaphone, Users, Shield, Compass, Building2,
  ShoppingBag, Utensils, HeartPulse, GraduationCap, Globe, Crown, Lightbulb, LineChart
} from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="about-top"
      className="relative bg-black text-white pt-36 pb-28 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Subtle Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none mix-blend-screen opacity-25 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(237, 28, 36, 0.65) 0%, transparent 70%)',
        }}
      />
      
      {/* Subtle Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* FIRST SECTION / HERO OF ABOUT US */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          
          {/* Small Icon at the top of ABOUT US */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass border border-white/15 mb-8 shadow-[0_0_20px_rgba(237,28,36,0.25)]"
          >
            <Sparkles className="w-4 h-4 text-[#ED1C24] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold font-body text-white/90">
              ABOUT US
            </span>
          </motion.div>

          {/* Middle Title: ONESHOT */}
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading italic text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-white tracking-tight leading-none mb-8 select-none drop-shadow-[0_0_35px_rgba(237,28,36,0.35)]"
          >
            ONESHOT
          </motion.h1>

          {/* H2 Heading below ONESHOT */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl font-light font-body text-white/90 leading-tight sm:leading-snug md:leading-relaxed max-w-3xl mx-auto tracking-normal"
          >
            Feeling like your brand is posting consistently but still not growing, not converting and not looking premium enough to compete?
          </motion.h2>

          {/* Decorative Red Accent Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ED1C24] to-transparent mx-auto mt-10 rounded-full shadow-[0_0_15px_rgba(237,28,36,0.8)]"
          />
        </div>

        {/* HIGH-RESOLUTION DARK MODE WEB INTERFACE: PROBLEM VS SOLUTION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-6 sm:p-10 md:p-12 mb-20 md:mb-28 overflow-hidden bg-gradient-to-br from-[#120507] via-[#09090b] to-[#030304] border border-white/10 shadow-[0_0_50px_rgba(237,28,36,0.15)]"
        >
          {/* Ambient Signature Red Background Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ED1C24]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Giant Semi-Transparent Ghost Text: ONESHOT */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
            <span className="font-heading italic text-[14rem] sm:text-[22rem] md:text-[28rem] lg:text-[32rem] text-white/[0.03] tracking-tighter uppercase whitespace-nowrap leading-none">
              ONESHOT
            </span>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Center-Aligned Subtitle Above Panels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-10 md:mb-14"
            >
              <p className="font-heading italic text-xl sm:text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto font-light leading-snug">
                Feeling like your brand is posting consistently but still not growing, not converting
              </p>
            </motion.div>

            {/* Two Side-by-Side Frosted Glass Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Left Panel: The Problem */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl p-7 sm:p-9 liquid-glass border border-red-500/20 shadow-[0_8px_32px_rgba(237,28,36,0.1)] overflow-hidden flex flex-col justify-between group hover:border-red-500/40 transition-colors"
              >
                {/* Soft Crimson Warning Glow */}
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-red-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/25 transition-all duration-500" />
                
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold font-body bg-red-500/15 text-red-300 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)] mb-6">
                    <span>⚠️ The Problem</span>
                  </div>

                  <p className="text-white/85 text-base sm:text-lg font-body font-light leading-relaxed">
                    Most businesses struggle not because they lack content, but because they lack a clear direction, execution discipline and a system that turns social media into actual ROI.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-body text-red-400/80">
                  <span>Traditional Content Traps</span>
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                </div>
              </motion.div>

              {/* Right Panel: Our Solution */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl p-7 sm:p-9 liquid-glass border border-[#ED1C24]/40 bg-gradient-to-br from-red-950/30 via-black/80 to-black/90 shadow-[0_8px_32px_rgba(237,28,36,0.2)] overflow-hidden flex flex-col justify-between group hover:border-[#ED1C24]/70 transition-colors"
              >
                {/* Soft ONESHOT Red Solution Glow */}
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#ED1C24]/25 rounded-full blur-3xl pointer-events-none group-hover:bg-[#ED1C24]/35 transition-all duration-500" />

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold font-body bg-[#ED1C24] text-white shadow-[0_0_15px_rgba(237,28,36,0.6)] mb-6">
                    <span>✨ Our Solution</span>
                  </div>

                  <p className="text-white/90 text-base sm:text-lg font-body font-light leading-relaxed">
                    At ONESHOT, we exist to fix exactly that. We are a performance focused and creatively sharp social media marketing agency based in the Heart of Punjab, trusted by national and global brands. Our work is built on clarity, execution and proof. Nothing vague, nothing fluffy.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-body text-white/80">
                  <span className="text-[#ED1C24] font-medium">Targeted ROAS System</span>
                  <Target className="w-4 h-4 text-[#ED1C24]" />
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* WHAT WE DO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-10 md:p-12 mb-20 md:mb-28 overflow-hidden liquid-glass border border-white/10 shadow-[0_0_50px_rgba(237,28,36,0.12)]"
        >
          {/* Subtle Red Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ED1C24]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Header Badge & Title */}
            <div className="text-center mb-10 md:mb-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ED1C24] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(237,28,36,0.2)] font-body"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Growth System</span>
              </motion.div>

              <h3 className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                What We Do
              </h3>
            </div>

            {/* 3 Glassmorphism Cards for the 3 key statements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-2xl p-6 sm:p-8 bg-black/60 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-[#ED1C24]/50 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 transition-opacity text-[#ED1C24]">
                  <Zap className="w-16 h-16" />
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ED1C24] to-red-800 flex items-center justify-center text-white font-bold mb-6 shadow-[0_0_20px_rgba(237,28,36,0.5)]">
                    01
                  </div>
                  <p className="text-white/90 text-base sm:text-lg font-body font-light leading-relaxed">
                    We simplify your social presence and turn it into a <span className="text-white font-semibold underline decoration-[#ED1C24]/60 decoration-2 underline-offset-4">consistent, high-performing growth engine</span>.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-2xl p-6 sm:p-8 bg-black/60 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-[#ED1C24]/50 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 transition-opacity text-[#ED1C24]">
                  <Target className="w-16 h-16" />
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ED1C24] to-red-800 flex items-center justify-center text-white font-bold mb-6 shadow-[0_0_20px_rgba(237,28,36,0.5)]">
                    02
                  </div>
                  <p className="text-white/90 text-base sm:text-lg font-body font-light leading-relaxed">
                    From refining your brand positioning to planning your <span className="text-white font-semibold underline decoration-[#ED1C24]/60 decoration-2 underline-offset-4">monthly content blueprint</span>, to executing the strategy.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-2xl p-6 sm:p-8 bg-black/60 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-[#ED1C24]/50 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 transition-opacity text-[#ED1C24]">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ED1C24] to-red-800 flex items-center justify-center text-white font-bold mb-6 shadow-[0_0_20px_rgba(237,28,36,0.5)]">
                    03
                  </div>
                  <p className="text-white/90 text-base sm:text-lg font-body font-light leading-relaxed">
                    We ensure your brand <span className="text-white font-semibold underline decoration-[#ED1C24]/60 decoration-2 underline-offset-4">looks more premium</span>, communicates clearly, and reaches the right audience.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* OUR STRATEGY SECTION (PARABOLIC FLOW) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 mb-20 md:mb-28 overflow-hidden liquid-glass border border-white/10 shadow-[0_0_60px_rgba(237,28,36,0.15)]"
        >
          {/* Ambient Background Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#ED1C24]/12 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ED1C24] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(237,28,36,0.2)] font-body"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Execution Blueprint</span>
              </motion.div>

              <h3 className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                Our Strategy
              </h3>
              <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-body font-light">
                A structured, transparent process designed to build predictable momentum and measurable impact.
              </p>
            </div>

            {/* Strategy Steps Container with Parabolic Curve Flow */}
            <div className="relative pt-6 pb-4">
              {/* Parabolic SVG Flowing Line (Desktop - Pure Glowing Red Flow) */}
              <svg
                className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                viewBox="0 0 1000 420"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="strategy-red-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ED1C24" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#FF4D4D" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ED1C24" stopOpacity="0.9" />
                  </linearGradient>

                  <linearGradient id="strategy-pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ED1C24" stopOpacity="0" />
                    <stop offset="50%" stopColor="#FF6B6B" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ED1C24" stopOpacity="0" />
                  </linearGradient>

                  <filter id="glow-red-filter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Base Parabolic Glow Track Line */}
                <path
                  d="M 165,100 Q 500,340 835,100"
                  fill="none"
                  stroke="#ED1C24"
                  strokeWidth="6"
                  strokeOpacity="0.18"
                  className="blur-sm"
                />

                {/* Main Animated Sequential Drawing Red Line (Traces 1 -> 2 -> 3) */}
                <motion.path
                  d="M 165,100 Q 500,340 835,100"
                  fill="none"
                  stroke="url(#strategy-red-gradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="url(#glow-red-filter)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 2.0, ease: "easeInOut" }}
                />

                {/* Subtle Red Flowing Light Pulse along the path (NO WHITE) */}
                <motion.path
                  d="M 165,100 Q 500,340 835,100"
                  fill="none"
                  stroke="url(#strategy-pulse-gradient)"
                  strokeWidth="3"
                  strokeDasharray="40 120"
                  initial={{ strokeDashoffset: 160 }}
                  animate={{ strokeDashoffset: -160 }}
                  transition={{ duration: 3.0, repeat: Infinity, ease: "linear" }}
                />

                {/* Red Pulse Nodes at Step 1, Step 2, Step 3 */}
                <circle cx="165" cy="100" r="5" fill="#ED1C24" className="drop-shadow-[0_0_8px_#ED1C24]" />
                <circle cx="500" cy="275" r="6" fill="#FF4D4D" className="drop-shadow-[0_0_12px_#ED1C24]" />
                <circle cx="835" cy="100" r="5" fill="#ED1C24" className="drop-shadow-[0_0_8px_#ED1C24]" />
              </svg>

              {/* 3 Steps arranged in Parabolic Symmetry */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10 items-start">
                
                {/* Step 1 (Top Left) */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative rounded-2xl p-7 bg-black/80 border border-white/15 backdrop-blur-xl shadow-2xl flex flex-col justify-between group hover:border-[#ED1C24] hover:shadow-[0_0_35px_rgba(237,28,36,0.35)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-heading italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                      01
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#ED1C24]/15 border border-[#ED1C24]/40 flex items-center justify-center text-[#ED1C24] shadow-[0_0_15px_rgba(237,28,36,0.3)]">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold font-heading text-white mb-3">
                    Clear Communication
                  </h4>
                  <p className="text-white/80 text-sm sm:text-base font-body font-light leading-relaxed">
                    We do not overload you with jargon.
                  </p>
                </motion.div>

                {/* Step 2 (Dip Center - Lowered on Desktop to form the Parabolic Dip) */}
                <motion.div
                  initial={{ opacity: 0, y: 55 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative rounded-2xl p-7 bg-black/90 border border-[#ED1C24]/60 backdrop-blur-xl shadow-[0_0_40px_rgba(237,28,36,0.25)] flex flex-col justify-between group hover:border-[#ED1C24] hover:shadow-[0_0_45px_rgba(237,28,36,0.45)] transition-all duration-300 lg:mt-16"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-heading italic text-[#ED1C24]">
                      02
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#ED1C24] text-white flex items-center justify-center shadow-[0_0_20px_rgba(237,28,36,0.6)]">
                      <Target className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold font-heading text-white mb-3">
                    Structured Roadmap
                  </h4>
                  <p className="text-white/90 text-sm sm:text-base font-body font-light leading-relaxed">
                    We build a foundation that works every single month. You get a clear strategy, a structured roadmap, and content that aligns with who you are as a brand.
                  </p>
                </motion.div>

                {/* Step 3 (Top Right) */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative rounded-2xl p-7 bg-black/80 border border-white/15 backdrop-blur-xl shadow-2xl flex flex-col justify-between group hover:border-[#ED1C24] hover:shadow-[0_0_35px_rgba(237,28,36,0.35)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-heading italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                      03
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#ED1C24]/15 border border-[#ED1C24]/40 flex items-center justify-center text-[#ED1C24] shadow-[0_0_15px_rgba(237,28,36,0.3)]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold font-heading text-white mb-3">
                    Traceable Intent
                  </h4>
                  <p className="text-white/80 text-sm sm:text-base font-body font-light leading-relaxed">
                    Every output comes with intention and data. Every decision is traceable and transparent.
                  </p>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* PROOF OF WORK SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 mb-20 md:mb-28 overflow-hidden liquid-glass border border-white/10 shadow-[0_0_60px_rgba(237,28,36,0.12)]"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#ED1C24]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ED1C24] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(237,28,36,0.2)] font-body"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Tier-1 Brand Portfolio</span>
              </motion.div>

              <h3 className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                Proof of Work
              </h3>
              <p className="mt-4 text-white/80 text-base sm:text-xl max-w-2xl mx-auto font-body font-light">
                Our team has delivered work for brands known across the country.
              </p>
            </div>

            {/* Brand Showcase Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {[
                { name: 'Garnier', tag: 'Beauty & Skincare', desc: 'High-converting video campaigns' },
                { name: 'Toni & Guy', tag: 'Haircare & Styling', desc: 'Premium visual brand storytelling' },
                { name: 'Maruti Suzuki', tag: 'Automotive Pioneer', desc: 'National launch campaign assets' },
                { name: 'Royal Enfield', tag: 'Motorcycles & Lifestyle', desc: 'Community & culture content' },
                { name: 'Nestlé', tag: 'Global FMCG Leader', desc: 'Digital product positioning' }
              ].map((brand, idx) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="relative group rounded-2xl p-6 bg-black/80 border border-white/10 backdrop-blur-xl shadow-lg flex flex-col items-center text-center justify-between hover:border-[#ED1C24]/60 hover:shadow-[0_0_30px_rgba(237,28,36,0.35)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-[#ED1C24]/15 border border-[#ED1C24]/30 flex items-center justify-center text-[#ED1C24] mb-4 group-hover:scale-110 transition-transform">
                    <Crown className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold font-heading text-white tracking-wide group-hover:text-red-400 transition-colors">
                    {brand.name}
                  </h4>
                  <span className="text-xs text-[#ED1C24] font-body font-semibold mt-1">
                    {brand.tag}
                  </span>
                  <p className="text-xs text-white/60 font-body font-light mt-2 line-clamp-2">
                    {brand.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Expertise Line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-white/10 text-center"
            >
              <p className="text-white/80 text-sm sm:text-base font-body font-light tracking-wide">
                And more across <span className="text-white font-medium italic underline decoration-[#ED1C24]/50 decoration-2 underline-offset-4">fashion, beauty, FMCG, hospitality, wellness, education, and lifestyle</span>.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* WHAT YOU RECEIVE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 mb-20 md:mb-28 overflow-hidden liquid-glass border border-white/10 shadow-[0_0_60px_rgba(237,28,36,0.12)]"
        >
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 right-0 w-[650px] h-[400px] bg-[#ED1C24]/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ED1C24] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(237,28,36,0.2)] font-body"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Tangible Deliverables</span>
              </motion.div>

              <h3 className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                What You Receive
              </h3>
              <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-body font-light">
                End-to-end execution assets designed to give your brand complete market clarity, consistency, and growth.
              </p>
            </div>

            {/* 6 Mini Boxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Monthly Strategy Blueprint',
                  icon: BarChart3,
                  desc: 'A comprehensive 30-day content calendar, positioning direction, and message hierarchy aligned directly with your growth KPIs.'
                },
                {
                  num: '02',
                  title: 'Content Execution',
                  icon: Film,
                  desc: 'High-definition video production, motion design, and thumb-stopping visual assets ready for immediate multi-platform publishing.'
                },
                {
                  num: '03',
                  title: 'Performance Reporting',
                  icon: TrendingUp,
                  desc: 'Clear, transparent monthly analytics breakdowns tracking audience retention, engagement rates, and ROI with zero jargon.'
                },
                {
                  num: '04',
                  title: 'Great Storytelling',
                  icon: Lightbulb,
                  desc: 'Authentic narrative concepts that hook human attention, build genuine emotional resonance, and turn casual viewers into brand advocates.'
                },
                {
                  num: '05',
                  title: 'Meta Ads',
                  icon: Megaphone,
                  desc: 'Data-driven ad campaigns across Instagram & Facebook, complete with A/B creative testing, audience targeting, and budget optimization.'
                },
                {
                  num: '06',
                  title: 'Influencer Marketing',
                  icon: Users,
                  desc: 'Strategic creator partnerships and campaign management that place your brand directly inside trusted, engaged communities.'
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="relative rounded-2xl p-7 bg-black/80 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-[#ED1C24]/60 hover:shadow-[0_0_30px_rgba(237,28,36,0.3)] transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-bold font-heading tracking-wider px-3 py-1 rounded-full bg-[#ED1C24]/15 border border-[#ED1C24]/30 text-[#ED1C24]">
                          {item.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(237,28,36,0.2)]">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h4 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-red-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-white/75 text-sm sm:text-base font-body font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* WHY BRANDS CHOOSE US SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 mb-20 md:mb-28 overflow-hidden liquid-glass border border-white/10 shadow-[0_0_60px_rgba(237,28,36,0.12)]"
        >
          {/* Ambient Background Glow */}
          <div className="absolute -bottom-20 -left-20 w-[550px] h-[550px] bg-[#ED1C24]/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ED1C24] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(237,28,36,0.2)] font-body"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Our Core Philosophy</span>
              </motion.div>

              <h3 className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                Why Brands Choose Us
              </h3>
              <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-body font-light">
                We bridge the gap between creative artistry and business ROI with clarity, consistency, and precision.
              </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: 'No Guesswork',
                  icon: Target,
                  desc: 'Every campaign, visual asset, and piece of copy is grounded in strategic market insights and clear objectives — zero random experiments.'
                },
                {
                  title: 'Brand Protection',
                  icon: Shield,
                  desc: 'We safeguard and elevate your core brand identity across every channel, maintaining absolute visual standards and messaging consistency.'
                },
                {
                  title: 'Long-Term Vision',
                  icon: LineChart,
                  desc: 'We build sustainable brand equity and repeatable growth engines that produce value month after month, rather than chasing short-lived viral hype.'
                }
              ].map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative rounded-2xl p-8 bg-black/85 border border-[#ED1C24]/30 backdrop-blur-xl shadow-2xl flex flex-col justify-between group hover:border-[#ED1C24] hover:shadow-[0_0_40px_rgba(237,28,36,0.4)] transition-all duration-300"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ED1C24] to-red-900 flex items-center justify-center text-white mb-6 shadow-[0_0_25px_rgba(237,28,36,0.5)] group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>

                      <h4 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-red-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-white/80 text-base font-body font-light leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* FULL-WIDTH CONTINUOUS LOOPING METRICS MARQUEE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-transparent py-6 sm:py-8 my-12 sm:my-16"
        >
          {/* Edge Blur / Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-black/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-black/90 to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex items-center gap-10 sm:gap-16 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear'
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {[
              { icon: Eye, value: '100M+', tag: 'Viral Impact', label: 'Organic Reel & Ad Views' },
              { icon: TrendingUp, value: '12.4x', tag: 'ROAS Scale', label: 'Average Campaign ROAS' },
              { icon: Zap, value: '24hr', tag: 'Speed', label: 'Batch Scene Turnaround' },
              { icon: Award, value: '100%', tag: 'Success', label: 'Custom Built Assets' },
              { icon: Film, value: '50+', tag: 'Track Record', label: 'Viral Campaigns Executed' },
              { icon: Target, value: '98%', tag: 'Trust', label: 'Client Retention Rate' },
              // Duplicate items for continuous infinite marquee
              { icon: Eye, value: '100M+', tag: 'Viral Impact', label: 'Organic Reel & Ad Views' },
              { icon: TrendingUp, value: '12.4x', tag: 'ROAS Scale', label: 'Average Campaign ROAS' },
              { icon: Zap, value: '24hr', tag: 'Speed', label: 'Batch Scene Turnaround' },
              { icon: Award, value: '100%', tag: 'Success', label: 'Custom Built Assets' },
              { icon: Film, value: '50+', tag: 'Track Record', label: 'Viral Campaigns Executed' },
              { icon: Target, value: '98%', tag: 'Trust', label: 'Client Retention Rate' },
            ].map((metric, idx) => {
              const IconComponent = metric.icon;
              return (
                <div key={idx} className="flex items-center shrink-0">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#ED1C24]/10 border border-[#ED1C24]/20 flex items-center justify-center text-[#ED1C24] shrink-0 group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(237,28,36,0.2)]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2.5">
                        <span className="font-heading italic font-bold text-3xl sm:text-4xl text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                          {metric.value}
                        </span>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#ED1C24] px-2.5 py-0.5 rounded-full bg-[#ED1C24]/10 border border-[#ED1C24]/20 font-body">
                          {metric.tag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70 font-body font-light whitespace-nowrap mt-0.5">
                        {metric.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* FINAL TRANSFORMATION CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-14 md:p-20 text-center overflow-hidden liquid-glass border border-white/15 shadow-[0_0_80px_rgba(237,28,36,0.2)] mt-20"
        >
          {/* Intense Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ED1C24]/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* Top Badge with 30px Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-red-500/20 via-red-500/10 to-red-500/20 border border-red-500/40 text-white text-sm sm:text-base font-semibold tracking-wide shadow-[0_0_20px_rgba(237,28,36,0.35)] backdrop-blur-md mb-8 font-body"
            >
              <Sparkles className="w-[30px] h-[30px] text-[#ED1C24] shrink-0 drop-shadow-[0_0_10px_rgba(237,28,36,0.8)]" />
              <span>Ready to transform your social presence</span>
            </motion.div>

            {/* Large 50px Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading italic font-bold text-3xl sm:text-4xl md:text-[50px] text-white leading-[1.18] tracking-tight max-w-3xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            >
              If you want social media that finally starts working for you, not against you, then you are in the right place.
            </motion.h3>

            {/* Action CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, shadow: '0 0 40px rgba(237,28,36,0.9)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenConsultation}
                className="bg-[#ED1C24] text-white hover:bg-red-600 transition-all duration-300 px-9 py-4.5 rounded-full text-base sm:text-lg font-bold font-body inline-flex items-center gap-3 shadow-[0_0_35px_rgba(237,28,36,0.65)] border border-red-400/50 cursor-pointer group"
              >
                <span>Let's Build Your Growth Engine</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
