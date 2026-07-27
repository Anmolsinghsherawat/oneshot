import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  Flame,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface ReelCampaign {
  id: string;
  reelNumber: string;
  title: string;
  brand: string;
  metric: string;
  roas: string;
  videoUrl: string;
  poster: string;
  description: string;
}

const REEL_CAMPAIGNS: ReelCampaign[] = [
  {
    id: 'reel-1',
    reelNumber: 'REEL 01',
    title: 'The Unstoppable DTC Launch Hook',
    brand: 'Aura Athletics',
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
    metric: '31.5M Views',
    roas: '16.1x ROAS',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-[#ED1C24]-model-walking-on-a-runway-41221-large.mp4',
    poster: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
    description: 'High-contrast cinematic short film reel that sold out the entire autumn collection in 3 hours.',
  },
];

interface ViralCampaignsSectionProps {
  onOpenConsultation: () => void;
}

export const ViralCampaignsSection: React.FC<ViralCampaignsSectionProps> = ({
  onOpenConsultation,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(REEL_CAMPAIGNS[0].id);
  const [mutedVideoId, setMutedVideoId] = useState<string | null>(REEL_CAMPAIGNS[0].id);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollStep = 320;

      if (direction === 'right') {
        if (scrollLeft + clientWidth >= scrollWidth - 40) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft <= 40) {
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        }
      }
    }
  };

  const togglePlay = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = document.getElementById(`reel-video-${id}`) as HTMLVideoElement | null;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setPlayingVideoId(id)).catch(() => {});
    } else {
      video.pause();
      setPlayingVideoId(null);
    }
  };

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = document.getElementById(`reel-video-${id}`) as HTMLVideoElement | null;
    if (!video) return;

    video.muted = !video.muted;
    setMutedVideoId(video.muted ? id : null);
  };

  return (
    <section
      id="viral-campaigns-section"
      className="relative py-20 sm:py-28 md:py-32 bg-black overflow-hidden border-t-2 border-[#ED1C24]/40 shadow-[0_0_80px_rgba(237,28,36,0.15)]"
    >
      {/* High-Impact Ambient Neon Glow Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central Radial Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ED1C24]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#ED1C24]/12 rounded-full blur-[130px]" />
        
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ED1C24_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 mb-12 sm:mb-16"
        >
          {/* Glowing Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 liquid-glass border border-[#ED1C24]/50 text-xs sm:text-sm font-extrabold tracking-widest text-[#ED1C24] uppercase shadow-[0_0_20px_rgba(237,28,36,0.35)]">
            <Flame className="w-4 h-4 text-[#ED1C24] animate-pulse" />
            <span>VIRAL CAMPAIGNS</span>
            <Sparkles className="w-3.5 h-3.5 text-white/80" />
          </div>

          {/* Main Title */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            Viral Campaigns
          </h2>

          {/* Subtitle with strictly 25px font size */}
          <p className="font-body text-[25px] font-medium text-white/90 leading-relaxed max-w-4xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Case studies that broke the internet and redefined digital marketing
          </p>
        </motion.div>

        {/* Carousel Wrapper with Side Arrows */}
        <div className="relative group/carousel">
          {/* Left Navigation Arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous reel"
            className="absolute -left-3 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/25 hover:border-[#ED1C24] hover:bg-[#ED1C24] text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.9)] cursor-pointer active:scale-95 opacity-90"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Next reel"
            className="absolute -right-3 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/25 hover:border-[#ED1C24] hover:bg-[#ED1C24] text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.9)] cursor-pointer active:scale-95 opacity-90"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Horizontal Reel Slider Container */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto pb-8 pt-2 px-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {REEL_CAMPAIGNS.map((reel, index) => {
              const isPlaying = playingVideoId === reel.id;
              const isMuted = mutedVideoId === reel.id;

              return (
                <div
                  key={reel.id}
                  className="snap-start shrink-0 w-[270px] sm:w-[300px] h-[480px] sm:h-[530px] relative rounded-2xl overflow-hidden border border-white/20 bg-neutral-950 shadow-[0_15px_40px_rgba(0,0,0,0.85)] flex flex-col justify-between"
                >
                  {/* HTML Video Element (Clean Rectangle, No Zoom Effects) */}
                  <div className="absolute inset-0 z-0 bg-black">
                    <video
                      id={`reel-video-${reel.id}`}
                      src={reel.videoUrl}
                      poster={reel.poster}
                      playsInline
                      loop
                      muted={isMuted}
                      autoPlay={index === 0}
                      className="w-full h-full object-cover opacity-90"
                      onPlay={() => setPlayingVideoId(reel.id)}
                      onPause={() => setPlayingVideoId(null)}
                    />

                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 pointer-events-none" />
                  </div>

                  {/* Top Badge & Sound Control */}
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <span className="text-[10px] font-black font-body uppercase tracking-widest text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                      {reel.reelNumber}
                    </span>

                    <button
                      onClick={(e) => toggleMute(reel.id, e)}
                      title={isMuted ? 'Unmute sound' : 'Mute sound'}
                      className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:border-[#ED1C24] hover:bg-[#ED1C24] text-white flex items-center justify-center transition-all cursor-pointer"
                    >
                      {isMuted ? (
                        <VolumeX className="w-3.5 h-3.5 text-white/80" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-white" />
                      )}
                    </button>
                  </div>

                  {/* Center Play/Pause Control Button */}
                  <div className="relative z-10 my-auto flex items-center justify-center">
                    <button
                      onClick={(e) => togglePlay(reel.id, e)}
                      aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
                      className={`w-14 h-14 rounded-full bg-[#ED1C24]/90 hover:bg-[#ED1C24] border border-red-300/40 text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_25px_rgba(237,28,36,0.7)] cursor-pointer ${
                        isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-white fill-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Info Card inside Rectangle */}
                  <div className="relative z-10 p-5 space-y-2 bg-gradient-to-t from-black via-black/90 to-transparent pt-8">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold font-body text-[#ED1C24] uppercase tracking-wider">
                        {reel.brand}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                        {reel.roas}
                      </span>
                    </div>

                    <h3 className="font-heading text-base sm:text-lg font-extrabold text-white leading-snug line-clamp-2">
                      {reel.title}
                    </h3>

                    <div className="pt-1.5 flex items-center justify-between border-t border-white/10">
                      <span className="text-xs font-medium text-white/80 font-body">
                        ⚡ {reel.metric}
                      </span>
                      <span className="text-[11px] font-medium text-white/50 font-body">
                        In-Stream Reel
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ED1C24] hover:bg-[#d0151c] text-white text-sm sm:text-base font-bold shadow-[0_0_30px_rgba(237,28,36,0.6)] hover:shadow-[0_0_45px_rgba(237,28,36,0.9)] border border-red-300/40 transition-all duration-300 cursor-pointer"
          >
            <span>Launch Your Next Viral Campaign</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

