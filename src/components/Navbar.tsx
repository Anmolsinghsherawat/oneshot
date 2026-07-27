import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OneShotLogo } from './OneShotLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
  currentView: 'home' | 'about' | 'job' | 'campaigns';
  onNavigate: (view: 'home' | 'about' | 'job' | 'campaigns', targetId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  currentView,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentView === 'about') {
      setActiveTab('About');
    } else if (currentView === 'job') {
      setActiveTab('Job');
    } else if (currentView === 'campaigns') {
      setActiveTab('Campaigns');
    } else if (currentView === 'home' && (activeTab === 'About' || activeTab === 'Job' || activeTab === 'Campaigns')) {
      setActiveTab('Home');
    }
  }, [currentView]);

  const navLinks = [
    { name: 'Home', view: 'home' as const, targetId: 'hero' },
    { name: 'About', view: 'about' as const, targetId: 'about-top' },
    { name: 'Services', view: 'home' as const, targetId: 'what-we-do' },
    { name: 'Job', view: 'job' as const, targetId: 'job-top' },
    { name: 'Campaigns', view: 'campaigns' as const, targetId: 'campaigns-top' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent,
    linkName: string,
    view: 'home' | 'about' | 'job' | 'campaigns',
    targetId?: string
  ) => {
    e.preventDefault();
    setActiveTab(linkName);
    setMobileMenuOpen(false);
    onNavigate(view, targetId);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out pointer-events-auto ${
        scrolled
          ? 'py-1.5 sm:py-2.5 bg-gradient-to-b from-slate-300/60 via-slate-400/35 to-transparent backdrop-blur-md'
          : 'py-3.5 sm:py-5 bg-gradient-to-b from-slate-300/50 via-slate-400/25 to-transparent'
      }`}
    >
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        {/* Left: Official ONE SHOT ANIMATION Logo (far left corner) */}
        <div className="flex-1 flex items-center justify-start min-w-0">
          <div
            onClick={(e) => handleLinkClick(e, 'Home', 'home', 'hero')}
            id="nav-logo"
            className="flex items-center cursor-pointer group select-none flex-shrink-0"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleLinkClick(e as unknown as React.MouseEvent, 'Home', 'home', 'hero');
              }
            }}
            aria-label="ONESHOT ANIMATION Home"
          >
            <OneShotLogo
              variant="full"
              className={`${
                scrolled ? 'h-12 sm:h-16 lg:h-18' : 'h-20 sm:h-28 lg:h-32'
              } w-auto max-w-[300px] sm:max-w-[480px] lg:max-w-[650px] transition-all duration-500 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]`}
            />
          </div>
        </div>

        {/* Center: Navigation Links Pill (sleek & compact) */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div
            id="nav-center-pill"
            className={`flex items-center gap-1 bg-black/85 backdrop-blur-xl border border-white/20 rounded-full transition-all duration-500 shadow-2xl ${
              scrolled ? 'p-1' : 'p-1 sm:p-1.5'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;

              return (
                <button
                  key={link.name}
                  onClick={(e) => handleLinkClick(e, link.name, link.view, link.targetId)}
                  className={`relative ${
                    scrolled ? 'px-3 sm:px-4 py-1.5 text-xs' : 'px-3.5 sm:px-4.5 py-1.5 sm:py-2 text-xs sm:text-sm'
                  } font-semibold font-body transition-all duration-300 rounded-full cursor-pointer select-none whitespace-nowrap ${
                    isActive ? 'text-white font-bold' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {/* Sliding Background Tab */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-slider"
                      className="absolute inset-0 bg-gradient-to-r from-[#ED1C24] to-red-600 rounded-full -z-10 shadow-[0_0_15px_rgba(237,28,36,0.6)] border border-red-400/50"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Let's Talk CTA Button (far right corner) */}
        <div className="hidden md:flex flex-1 items-center justify-end">
          <button
            id="nav-claim-spot-btn"
            onClick={onOpenConsultation}
            className={`bg-[#ED1C24] text-white hover:bg-[#d0151c] transition-all duration-500 ${
              scrolled ? 'px-4 sm:px-5 py-2 text-xs' : 'px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm'
            } font-bold rounded-full flex items-center gap-2 whitespace-nowrap shadow-[0_0_20px_rgba(237,28,36,0.6)] hover:shadow-[0_0_30px_rgba(237,28,36,0.9)] border border-red-400/40 cursor-pointer group hover:scale-105`}
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white cursor-pointer hover:bg-white/10 transition-all"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mt-3 bg-black/85 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 flex flex-col gap-3 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleLinkClick(e, link.name, link.view, link.targetId)}
                className={`text-left text-base font-semibold font-body py-2 px-3 rounded-lg border-b border-white/5 transition-colors cursor-pointer ${
                  activeTab === link.name
                    ? 'text-[#ED1C24] bg-white/5'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              id="mobile-claim-spot-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-2 w-full bg-[#ED1C24] text-white hover:bg-red-600 font-bold py-3 px-5 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(237,28,36,0.6)]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

