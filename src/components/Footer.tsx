import React from 'react';
import { ArrowUpRight, Sparkles, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { OneShotLogo } from './OneShotLogo';

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigate?: (view: 'home' | 'about' | 'job' | 'campaigns', targetId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent, view: 'home' | 'about' | 'job' | 'campaigns', targetId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view, targetId);
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-12 px-6 md:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={(e) => handleNavClick(e, 'home', 'hero')}
              className="group cursor-pointer inline-block text-left"
              aria-label="ONESHOT ANIMATION Home"
            >
              <OneShotLogo className="h-16 sm:h-20 md:h-22 w-auto max-w-[280px] sm:max-w-[380px] object-contain group-hover:drop-shadow-[0_0_20px_rgba(237,28,36,0.8)] transition-all duration-300" />
            </button>
            <p className="font-body text-white/70 text-sm font-light leading-relaxed max-w-sm">
              The premier social media content creation agency and ad campaign scaling engine. We bridge high-craft video storytelling with data-driven paid advertising.
            </p>
            <div className="pt-2 flex items-center gap-3 text-white/80">
              <a href="#instagram" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ED1C24] transition-colors flex items-center justify-center text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ED1C24] transition-colors flex items-center justify-center text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ED1C24] transition-colors flex items-center justify-center text-white">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ED1C24] transition-colors flex items-center justify-center text-white">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-body">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#ED1C24]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button
                  onClick={(e) => handleNavClick(e, 'home', 'hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNavClick(e, 'about', 'about-top')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNavClick(e, 'home', 'what-we-do')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNavClick(e, 'home', 'growth-engine')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  360° Engine
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNavClick(e, 'campaigns', 'campaigns-top')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Campaigns
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNavClick(e, 'job', 'job-top')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Careers</span>
                  <span className="text-[10px] uppercase font-bold text-[#ED1C24] bg-[#ED1C24]/10 border border-[#ED1C24]/30 px-1.5 py-0.5 rounded-full">Hiring</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Consultation Callout (4 cols) */}
          <div className="md:col-span-4 bg-white/5 rounded-3xl p-6 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#ED1C24] font-semibold font-body uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Scale?</span>
              </div>
              <h4 className="font-heading italic text-2xl text-white">
                Claim your consultation spot before month-end slots close.
              </h4>
            </div>

            <button
              onClick={onOpenConsultation}
              className="mt-6 w-full bg-[#ED1C24] hover:bg-red-600 text-white font-semibold font-body py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-[0_0_20px_rgba(237,28,36,0.5)] cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-body gap-4">
          <p>© {new Date().getFullYear()} ONESHOT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-white transition-colors">Ad Rights & Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
