import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Film, Target, Cpu, Users, ArrowUpRight, Check, X, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'services' | 'comparison'>('services');

  const servicesList = [
    {
      icon: Film,
      title: 'Viral Short-Form Content Engine',
      description: 'Done-for-you scriptwriting, professional filming, trend audits, and high-velocity editing tailored specifically for TikTok, Reels, and Shorts.',
      deliverables: ['3-5 Viral Hooks per Video', 'Native Sound Design & Captions', 'Daily Account Posting & Optimization'],
    },
    {
      icon: Target,
      title: 'Paid Social Ad Creative Suite',
      description: 'Performance-driven video ads engineered to stop the scroll, lower Customer Acquisition Cost (CAC), and maximize ROAS on Meta and TikTok Ads.',
      deliverables: ['A/B Creative Hook Testing', 'Direct-Response Storyboarding', 'Media Buyer Creative Briefs'],
    },
    {
      icon: Cpu,
      title: 'AI Production & Batch Scenery',
      description: 'Leveraging cutting-edge AI visual synthesis to place your product in unlimited studio settings, Icelandic cliffs, or lifestyle locations in minutes.',
      deliverables: ['Photorealistic 3D Product Relighting', 'Instant Global Scene Generation', 'Unlimited Catalog Variations'],
    },
    {
      icon: Users,
      title: 'Creator Network & UGC Whitelisting',
      description: 'Direct access to hundreds of vetted content creators. We manage rights, contracts, shipments, and handle ad account whitelisting.',
      deliverables: ['Custom Creator Matching', 'Turnkey Product Seeding', 'Ad Rights & Handle Whitelisting'],
    },
  ];

  const comparisonData = [
    { feature: 'Production Turnaround', traditional: '3-6 Weeks per shoot', apex: '72 Hours for Batch Assets' },
    { feature: 'Creative Hook Testing', traditional: '1-2 Static Variations', apex: '20+ Video Hook Iterations' },
    { feature: 'Cost per Video Asset', traditional: '$1,500 – $5,000 / video', apex: 'Fractional Batch Scale' },
    { feature: 'Trend & Algorithm Sync', traditional: 'Outdated by launch', apex: 'Real-Time Trend Engine' },
    { feature: 'Ad Performance Guarantee', traditional: 'No performance accountability', apex: 'ROAS & CPA Target Focus' },
  ];

  return (
    <section id="services" className="bg-[#F3F4F6] text-[#0F172A] py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-3.5 py-1 text-xs font-semibold rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#ED1C24]" />
              <span>Full-Stack Content & Ad Capabilities</span>
            </div>
            <h2 className="font-heading italic text-5xl md:text-6xl lg:text-7xl text-[#0F172A] tracking-[-2px] leading-tight">
              Engineered for Social Dominance
            </h2>
          </div>

          {/* Toggle Tab */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-full border border-gray-200 self-start md:self-auto shadow-sm">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-5 py-2 rounded-full text-xs font-semibold font-body transition-all cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-[#0F172A] text-white'
                  : 'text-[#2B2D42] hover:text-[#0F172A]'
              }`}
            >
              Production Services
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2 rounded-full text-xs font-semibold font-body transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-[#0F172A] text-white'
                  : 'text-[#2B2D42] hover:text-[#0F172A]'
              }`}
            >
              Agency vs Traditional
            </button>
          </div>
        </div>

        {/* Content View */}
        {activeTab === 'services' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, index) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center mb-6 group-hover:bg-[#ED1C24] transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading italic text-3xl text-[#0F172A] group-hover:text-[#ED1C24] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-body text-[#2B2D42] text-sm md:text-base mt-3 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider font-body block mb-3">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs font-body text-[#2B2D42]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Comparison Table */
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200 text-xs uppercase tracking-wider font-body text-[#2B2D42]">
                  <th className="py-4 px-4">Feature / Metric</th>
                  <th className="py-4 px-4 text-gray-400">Traditional Agency / In-House</th>
                  <th className="py-4 px-4 text-[#ED1C24] font-bold">ApexSocial Engine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-body">
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-4 font-semibold text-[#0F172A]">{row.feature}</td>
                    <td className="py-5 px-4 text-gray-500 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="py-5 px-4 text-[#0F172A] font-bold flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#ED1C24] shrink-0" />
                      <span>{row.apex}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* CTA Footer Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold font-body text-base shadow-lg hover:shadow-[0_0_25px_rgba(237,28,36,0.6)] transition-all cursor-pointer group"
          >
            <span>Book a Consultation with Our Strategists</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
