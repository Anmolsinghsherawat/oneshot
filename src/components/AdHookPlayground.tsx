import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Play, Copy, Check, ArrowUpRight, Wand2, Lightbulb, Zap } from 'lucide-react';

interface AdHookPlaygroundProps {
  onOpenConsultation: () => void;
}

export const AdHookPlayground: React.FC<AdHookPlaygroundProps> = ({ onOpenConsultation }) => {
  const [niche, setNiche] = useState<string>('E-Commerce Beauty');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const hookTemplates: Record<string, Array<{ id: string; hook: string; type: string; concept: string; cta: string }>> = {
    'E-Commerce Beauty': [
      {
        id: 'b1',
        type: 'Pattern Interrupt',
        hook: 'Stop throwing away money on skincare that only hydrates the surface layer.',
        concept: 'Macro close-up of skin texture dissolving into glowing serum visual.',
        cta: 'Claim your 30-day skin reset kit now.',
      },
      {
        id: 'b2',
        type: 'Negative Framing',
        hook: 'The #1 mistake 92% of people make when trying to clear stubborn breakouts.',
        concept: 'Founder pointing at camera with red X over standard cleanser bottle.',
        cta: 'Tap below to see the dermatologist breakdown.',
      },
      {
        id: 'b3',
        type: 'UGC Unboxing',
        hook: 'I tested this viral serum for 14 days so you don’t have to...',
        concept: 'Authentic mirror selfie clip with split-screen before and after.',
        cta: 'Shop the viral bundle before it sells out.',
      },
    ],
    'Fitness & Supplements': [
      {
        id: 'f1',
        type: 'Science Reveal',
        hook: 'Why drinking standard pre-workout is giving you energy crashes by 2 PM.',
        concept: 'Liquid dispersion animation comparing synthetic vs bio-available nutrients.',
        cta: 'Try clean focus fuel risk-free.',
      },
      {
        id: 'f2',
        type: 'Relatable Problem',
        hook: 'If you’ve been stuck at the same lift weight for 3 months, watch this.',
        concept: 'Gym athlete mid-set cutting directly to product scoop demo.',
        cta: 'Get your strength protocol breakdown.',
      },
    ],
    'SaaS & Digital Apps': [
      {
        id: 's1',
        type: 'Time Saving Hook',
        hook: 'How I replaced 5 expensive software subscriptions with one automated AI flow.',
        concept: 'Screen recording closing tabs rapidly into sleek 1-click dashboard.',
        cta: 'Start your free 14-day trial today.',
      },
      {
        id: 's2',
        type: 'Curiosity Spike',
        hook: 'This hidden browser setting cuts our team’s weekly meeting time in half.',
        concept: 'Over-the-shoulder video editing timeline speeding up by 4x.',
        cta: 'Unlock the workflow template.',
      },
    ],
  };

  const currentHooks = hookTemplates[niche] || hookTemplates['E-Commerce Beauty'];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="hook-generator" className="bg-[#FFFFFF] text-[#0F172A] py-24 px-6 md:px-12 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F3F4F6] text-[#0F172A] px-3.5 py-1 text-xs font-semibold rounded-full mb-4 border border-gray-200">
              <Wand2 className="w-3.5 h-3.5 text-[#ED1C24]" />
              <span>Viral Ad Creative Sandbox</span>
            </div>
            <h2 className="font-heading italic text-5xl md:text-6xl text-[#0F172A] tracking-[-2px] leading-tight">
              Test High-Converting Hook Angles
            </h2>
            <p className="font-body text-[#2B2D42] text-base md:text-lg max-w-2xl mt-2 font-normal">
              Select your industry below to preview tested direct-response video hooks and visual concepts created by our creative team.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-[#ED1C24] hover:bg-red-600 text-white px-6 py-3.5 rounded-full font-semibold font-body text-sm flex items-center gap-2 transition-all shadow-md hover:shadow-[0_0_20px_rgba(237,28,36,0.4)] cursor-pointer group"
          >
            <span>Custom Script Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Niche Selector Pills */}
        <div className="flex items-center gap-3 flex-wrap mb-10">
          {['E-Commerce Beauty', 'Fitness & Supplements', 'SaaS & Digital Apps'].map((item) => (
            <button
              key={item}
              onClick={() => setNiche(item)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold font-body transition-all cursor-pointer ${
                niche === item
                  ? 'bg-[#0F172A] text-white shadow-md'
                  : 'bg-[#F3F4F6] text-[#2B2D42] hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Hooks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {currentHooks.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-[#F3F4F6] rounded-3xl p-6 border border-gray-200 flex flex-col justify-between hover:border-[#ED1C24]/50 transition-all shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#0F172A] text-white text-[11px] font-semibold px-3 py-1 rounded-full font-body">
                      {item.type}
                    </span>
                    <button
                      onClick={() => handleCopy(item.id, item.hook)}
                      className="text-gray-500 hover:text-[#ED1C24] transition-colors p-1.5 rounded-full hover:bg-white cursor-pointer"
                      title="Copy Hook Text"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <h3 className="font-heading italic text-2xl text-[#0F172A] leading-snug mb-3 group-hover:text-[#ED1C24] transition-colors">
                    "{item.hook}"
                  </h3>

                  <div className="bg-white rounded-2xl p-4 border border-gray-200 mt-4">
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider font-body block mb-1 flex items-center gap-1">
                      <Lightbulb className="w-3 h-3 text-[#ED1C24]" />
                      Visual Storyboard Concept
                    </span>
                    <p className="text-xs font-body text-[#2B2D42] font-light leading-relaxed">
                      {item.concept}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-body text-[#2B2D42] flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#ED1C24]" />
                    CTA: <strong className="text-[#0F172A]">{item.cta}</strong>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
