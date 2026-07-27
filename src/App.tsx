import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { JobSection } from './components/JobSection';
import { CampaignsSection } from './components/CampaignsSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { GrowthEngineSection } from './components/GrowthEngineSection';
import { OneShotSection } from './components/OneShotSection';
import { ViralCampaignsSection } from './components/ViralCampaignsSection';
import { Footer } from './components/Footer';
import { PortfolioItem } from './components/PortfolioSection';
import { ConsultationModal } from './components/ConsultationModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'job' | 'campaigns'>('home');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [activeVideoItem, setActiveVideoItem] = useState<PortfolioItem | null>(null);

  const defaultShowreelItem: PortfolioItem = {
    id: 'hero-showreel',
    title: 'ApexSocial Brand Liftoff & Campaign Showreel 2026',
    client: 'ApexSocial Agency',
    category: 'showreel',
    metricLabel: 'Global Views',
    metricValue: '50M+',
    secondaryMetric: '12.4x Average ROAS',
    thumbnail: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4',
    tags: ['Showreel', 'Brand Scale', 'High Impact'],
    description: 'A compilation of high-converting social media ad campaigns, viral short-form reels, and studio production shots created for leading DTC brands.',
  };

  const handleNavigate = (view: 'home' | 'about' | 'job' | 'campaigns', targetId?: string) => {
    setCurrentView(view);
    if (view === 'about' || view === 'job' || view === 'campaigns') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    setConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationModalOpen(false);
  };

  const handleWatchShowreel = () => {
    setActiveVideoItem(defaultShowreelItem);
  };

  const handleCloseVideoModal = () => {
    setActiveVideoItem(null);
  };

  return (
    <div className="min-h-screen bg-black text-[#0F172A] font-body selection:bg-[#ED1C24] selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Page Views */}
      <main>
        {currentView === 'home' && (
          <>
            {/* Frame 1 — Hero Section */}
            <HeroSection
              onOpenConsultation={handleOpenConsultation}
              onWatchShowreel={handleWatchShowreel}
            />

            {/* Frame 2 — What We Do Section */}
            <WhatWeDoSection onOpenConsultation={handleOpenConsultation} />

            {/* Frame 3 — 360° Growth Engine Bento Section */}
            <GrowthEngineSection onOpenConsultation={handleOpenConsultation} />

            {/* Frame 4 — One Shot Philosophy Section */}
            <OneShotSection onOpenConsultation={handleOpenConsultation} />

            {/* Frame 5 — Viral Campaigns Section */}
            <ViralCampaignsSection
              onOpenConsultation={handleOpenConsultation}
            />
          </>
        )}

        {currentView === 'about' && (
          <AboutSection onOpenConsultation={handleOpenConsultation} />
        )}

        {currentView === 'job' && (
          <JobSection onOpenConsultation={handleOpenConsultation} />
        )}

        {currentView === 'campaigns' && (
          <CampaignsSection onOpenConsultation={handleOpenConsultation} />
        )}
      </main>

      {/* Footer Section */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onNavigate={handleNavigate}
      />

      {/* Book a Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={handleCloseConsultation}
      />

      {/* Video Case Study Player Modal */}
      <VideoPlayerModal
        item={activeVideoItem}
        onClose={handleCloseVideoModal}
        onOpenConsultation={handleOpenConsultation}
      />
    </div>
  );
}
