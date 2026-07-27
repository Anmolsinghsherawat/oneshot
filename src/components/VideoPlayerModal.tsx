import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, TrendingUp, Sparkles, Play } from 'lucide-react';
import { PortfolioItem } from './PortfolioSection';

interface VideoPlayerModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  item,
  onClose,
  onOpenConsultation,
}) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-4xl bg-[#0F172A] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#ED1C24] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Container */}
          <div className="relative aspect-video bg-black overflow-hidden">
            <video
              src={item.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>

          {/* Video Meta Info */}
          <div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#0F172A] text-white">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-[#ED1C24] uppercase tracking-wider font-body">
                  {item.client}
                </span>
                <span className="text-white/40">•</span>
                <span className="bg-white/10 text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-white/10">
                  {item.metricLabel}: {item.metricValue}
                </span>
              </div>
              <h3 className="font-heading italic text-3xl text-white">
                {item.title}
              </h3>
              <p className="font-body text-white/80 text-sm mt-2 font-light max-w-2xl">
                {item.description}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="shrink-0 bg-[#ED1C24] hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold font-body text-sm flex items-center gap-2 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(237,28,36,0.5)] cursor-pointer"
            >
              <span>Replicate This ROAS</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
