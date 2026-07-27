import React from 'react';
import { motion } from 'motion/react';

export const CapabilitiesSection: React.FC = () => {
  const cards = [
    {
      title: 'AI Scenery',
      body: 'AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.',
      iconPath:
        'M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z',
      tags: ['Natural Context', 'Photo Realism', 'Infinite Settings', 'Eco-Vibe'],
    },
    {
      title: 'Batch Production',
      body: 'Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.',
      iconPath:
        'M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z',
      tags: ['Scale Fast', 'Visual Consistency', 'Time Saver', 'Ready to Post'],
    },
    {
      title: 'Smart Lighting',
      body: 'Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.',
      iconPath:
        'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z',
      tags: ['Ray Tracing', 'Physical Shadows', 'Studio Quality', 'Sunlight Sync'],
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between"
    >
      {/* Content relative z-10 */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-12 flex flex-col min-h-screen max-w-7xl mx-auto w-full justify-between">
        {/* Header (mb-auto) */}
        <div className="mb-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-body text-white/80 mb-6"
          >
            // Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]"
          >
            Production
            <br />
            evolved
          </motion.h2>
        </div>

        {/* Three cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pb-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col border border-white/10 hover:border-white/25 transition-all group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                {/* 44x44 nested liquid-glass square */}
                <div className="w-[44px] h-[44px] shrink-0 rounded-[0.75rem] liquid-glass flex items-center justify-center border border-white/10 group-hover:border-[#ED1C24] transition-colors">
                  <svg className="h-6 w-6 fill-current text-white group-hover:text-[#ED1C24] transition-colors" viewBox="0 0 24 24">
                    <path d={card.iconPath} />
                  </svg>
                </div>

                {/* Right pill tags */}
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Middle spacer */}
              <div className="flex-1 min-h-[60px]" />

              {/* Bottom of card */}
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none group-hover:text-[#ED1C24] transition-colors">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
