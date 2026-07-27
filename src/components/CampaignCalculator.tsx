import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, DollarSign, Layers, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CampaignCalculatorProps {
  onOpenConsultation: () => void;
}

export const CampaignCalculator: React.FC<CampaignCalculatorProps> = ({ onOpenConsultation }) => {
  const [adSpend, setAdSpend] = useState<number>(15000);
  const [videoCount, setVideoCount] = useState<number>(20);
  const [platform, setPlatform] = useState<'meta' | 'tiktok' | 'omni'>('omni');

  // Calculation formulas
  const estimatedImpressions = Math.round((adSpend / 8) * 1000 + videoCount * 125000);
  const minRoas = (3.2 + (videoCount > 20 ? 1.4 : 0.8)).toFixed(1);
  const maxRoas = (minRoas === '4.6' ? '8.8' : '7.6');
  const projectedRevenueMin = Math.round(adSpend * parseFloat(minRoas));
  const projectedRevenueMax = Math.round(adSpend * parseFloat(maxRoas));

  return (
    <section id="calculator" className="bg-[#FFFFFF] text-[#0F172A] py-24 px-6 md:px-12 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F3F4F6] text-[#0F172A] px-4 py-1.5 rounded-full text-xs font-semibold font-body border border-gray-200 mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#ED1C24]" />
            <span>Interactive Campaign Scaler</span>
          </div>
          <h2 className="font-heading italic text-5xl md:text-6xl text-[#0F172A] tracking-[-2px] leading-tight">
            Calculate Your Ad & Content Scaling Growth
          </h2>
          <p className="font-body text-[#2B2D42] text-base md:text-lg mt-3 font-normal">
            Adjust your estimated monthly ad budget and video output to forecast impressions, hook variations, and projected ROAS multiplier.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#F3F4F6] rounded-3xl p-8 md:p-10 border border-gray-200 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-heading italic text-3xl text-[#0F172A] mb-8">
                Campaign Inputs
              </h3>

              {/* Slider 1: Monthly Ad Spend */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold font-body text-[#0F172A] flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#ED1C24]" />
                    <span>Monthly Ad Spend</span>
                  </label>
                  <span className="text-xl font-heading italic text-[#0F172A] bg-white px-4 py-1 rounded-full border border-gray-200 font-bold">
                    ${adSpend.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#ED1C24]"
                />
                <div className="flex justify-between text-xs text-[#2B2D42] font-body mt-2">
                  <span>$2,000/mo</span>
                  <span>$50,000/mo</span>
                  <span>$100,000+/mo</span>
                </div>
              </div>

              {/* Slider 2: Monthly Video Creative Assets */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold font-body text-[#0F172A] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#ED1C24]" />
                    <span>Monthly Video Creative Volume</span>
                  </label>
                  <span className="text-xl font-heading italic text-[#0F172A] bg-white px-4 py-1 rounded-full border border-gray-200 font-bold">
                    {videoCount} Videos
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={videoCount}
                  onChange={(e) => setVideoCount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#ED1C24]"
                />
                <div className="flex justify-between text-xs text-[#2B2D42] font-body mt-2">
                  <span>5 Shorts</span>
                  <span>20 Videos (Recommended)</span>
                  <span>60+ Batch Assets</span>
                </div>
              </div>

              {/* Platform Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold font-body text-[#0F172A] mb-3">
                  Target Scaling Channels
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'meta', label: 'Meta Ads (IG/FB)' },
                    { id: 'tiktok', label: 'TikTok & Shorts' },
                    { id: 'omni', label: 'Omnichannel Scale' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPlatform(item.id as any)}
                      className={`p-3 rounded-2xl text-xs font-semibold font-body border transition-all cursor-pointer text-center ${
                        platform === item.id
                          ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                          : 'bg-white text-[#2B2D42] border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Included Deliverables checklist */}
            <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-body text-[#2B2D42]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ED1C24] shrink-0" />
                <span>Custom Hook Scripting & Trend Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ED1C24] shrink-0" />
                <span>Creator UGC & In-House Studio Shoot</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ED1C24] shrink-0" />
                <span>Multi-Variation Batch Editing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ED1C24] shrink-0" />
                <span>Ad Account Media Buying Integration</span>
              </div>
            </div>
          </div>

          {/* Forecast Results Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#0F172A] text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-xl border border-white/10">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-wider font-semibold font-body text-[#ED1C24] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Estimated Output
                </span>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full font-body">
                  Data-Driven Forecast
                </span>
              </div>

              {/* Result 1: Projected ROAS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                <span className="text-xs font-body text-white/70 block mb-1">Projected ROAS Range</span>
                <div className="font-heading italic text-5xl text-white font-bold tracking-tight">
                  {minRoas}x – {maxRoas}x
                </div>
                <p className="text-xs font-body text-white/80 mt-2 font-light">
                  Based on historical brand client benchmarks using our batch hook testing framework.
                </p>
              </div>

              {/* Stats Breakdown */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm font-body">
                  <span className="text-white/70">Est. Monthly Impressions:</span>
                  <span className="font-semibold text-white font-heading italic text-xl">
                    {(estimatedImpressions / 1000000).toFixed(1)}M Views
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm font-body">
                  <span className="text-white/70">Creative Hook Variations:</span>
                  <span className="font-semibold text-white font-heading italic text-xl">
                    {videoCount * 3} Hooks
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm font-body">
                  <span className="text-white/70">Forecasted Monthly Revenue:</span>
                  <span className="font-semibold text-[#ED1C24] font-heading italic text-2xl">
                    ${projectedRevenueMin.toLocaleString()} – ${projectedRevenueMax.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button in Brand Red */}
            <button
              onClick={onOpenConsultation}
              className="w-full bg-[#ED1C24] hover:bg-red-600 text-white py-4 px-6 rounded-full font-semibold font-body text-base flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(237,28,36,0.6)] cursor-pointer group"
            >
              <span>Lock In This Scaling Plan</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
