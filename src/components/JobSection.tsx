import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Sparkles,
  Rocket,
  HeartHandshake,
  Zap,
  GraduationCap,
  Globe,
  ArrowRight,
  MapPin,
  Clock,
  Layers,
  X,
  Send,
  CheckCircle2,
  FileText,
  User,
  Mail,
  Link as LinkIcon
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  category: 'Strategy' | 'Creative' | 'Production' | 'Media Buying';
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const JOB_POSITIONS: JobPosition[] = [
  {
    id: 'social-strategist',
    title: 'Senior Social Media Strategist',
    department: 'Strategy',
    location: 'Remote / NYC',
    type: 'Full-time',
    category: 'Strategy',
    description: 'Architect 30-day viral content frameworks, positioning directions, and narrative message structures for scaling DTC & lifestyle brands.',
    responsibilities: [
      'Analyze industry trends and platform algorithms to design viral content strategies.',
      'Develop monthly content calendars and positioning frameworks for tier-1 client accounts.',
      'Collaborate directly with creative directors and video editors to ensure high story retention.'
    ],
    requirements: [
      '3+ years of agency or brand experience leading social strategy.',
      'Proven track record of scaling short-form organic views (Reels/TikTok).',
      'Strong analytical mindset with ability to translate metric insights into creative pivots.'
    ]
  },
  {
    id: 'video-editor',
    title: 'Short-Form Video Editor & Animator',
    department: 'Creative',
    location: 'Remote / LA',
    type: 'Full-time',
    category: 'Creative',
    description: 'Craft thumb-stopping Reels, TikToks, and high-impact motion graphics that hook human attention within the first 2 seconds.',
    responsibilities: [
      'Edit high-definition short-form reels with kinetic typography and sound design.',
      'Experiment with visual hooks, pacing, and color grading for maximum watch time.',
      'Deliver multi-platform variations optimized for Instagram, TikTok, and Meta Ads.'
    ],
    requirements: [
      'Proficiency in Adobe Premiere Pro, After Effects, and DaVinci Resolve.',
      'Strong portfolio showcasing short-form video edits with 100k+ organic views.',
      'Obsessive attention to pacing, sound design, and graphic overlays.'
    ]
  },
  {
    id: 'media-buyer',
    title: 'Senior Performance Media Buyer',
    department: 'Media Buying',
    location: 'Hybrid / NYC',
    type: 'Full-time',
    category: 'Media Buying',
    description: 'Manage and scale $100k+/mo Meta & TikTok ad budgets with data-driven creative testing and relentless ROAS optimization.',
    responsibilities: [
      'Structure, launch, and optimize high-budget Meta & TikTok ad campaigns.',
      'Conduct rapid A/B creative testing to identify high-performing ad concepts.',
      'Provide granular weekly performance reports to clients with actionable insights.'
    ],
    requirements: [
      '3+ years managing $50k+/month in Meta or TikTok advertising.',
      'Deep understanding of attribution, conversion rate optimization (CRO), and ROAS scaling.',
      'Experience working closely with creative teams on ad iteration.'
    ]
  },
  {
    id: 'creative-director',
    title: 'Creative Director & Storyteller',
    department: 'Creative',
    location: 'On-site / Remote',
    type: 'Full-time',
    category: 'Creative',
    description: 'Lead visual direction, concept hooks, and video production for multi-channel brand campaigns that drive massive viral reach.',
    responsibilities: [
      'Oversee visual aesthetic, campaign concepts, and brand messaging across all deliverables.',
      'Direct on-set video shoots and collaborate with talent, creators, and animators.',
      'Pitch creative proposals directly to founders and marketing leaders.'
    ],
    requirements: [
      '5+ years leading creative direction for social-first agencies or high-growth brands.',
      'Exceptional storytelling skills with a keen eye for visual pacing and typography.',
      'Strong leadership and mentorship capabilities for junior creatives.'
    ]
  },
  {
    id: 'influencer-manager',
    title: 'Influencer & Creator Manager',
    department: 'Production',
    location: 'Remote',
    type: 'Full-time',
    category: 'Production',
    description: 'Discover, negotiate with, and direct top-tier UGC creators and influencers to deliver authentic high-converting brand integrations.',
    responsibilities: [
      'Source, vet, and contract high-aligning UGC creators and social influencers.',
      'Write detailed creative briefs and direct content production to hit brand goals.',
      'Manage campaign budgets, timelines, and creator relationship pipelines.'
    ],
    requirements: [
      '2+ years managing influencer marketing campaigns and creator networks.',
      'Strong negotiation skills and familiarity with creator contract standards.',
      'Passion for viral content trends and emerging talent.'
    ]
  },
  {
    id: 'vfx-specialist',
    title: 'Motion Graphics & VFX Specialist',
    department: 'Creative',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    category: 'Creative',
    description: 'Elevate campaign visuals with dynamic 2D/3D animations, custom typography effects, and ultra-polished post-production effects.',
    responsibilities: [
      'Create custom 2D/3D motion graphics, lower thirds, and transition animations.',
      'Enhance raw video footage with visual effects, tracking, and cleanups.',
      'Maintain agency asset library and motion design style guides.'
    ],
    requirements: [
      'Expert skills in After Effects, Cinema 4D, Blender, or Maya.',
      'Eye for sleek, modern visual design aligned with luxury and tech aesthetics.',
      'Ability to turn complex brand ideas into eye-catching visual animations.'
    ]
  }
];

const BENEFITS = [
  {
    icon: Rocket,
    title: 'High-Impact Work',
    desc: 'Build campaigns for top global brands reaching over 100M+ organic views.'
  },
  {
    icon: Sparkles,
    title: 'Creative Autonomy',
    desc: 'Full freedom to pitch, experiment, and execute bold storytelling ideas.'
  },
  {
    icon: Zap,
    title: 'Fast-Paced Growth',
    desc: 'Work alongside elite strategists, animators, and media buyers scaling at 10x speed.'
  },
  {
    icon: HeartHandshake,
    title: 'Competitive Pay & Perks',
    desc: 'Premium compensation, performance bonuses, and continuous equipment upgrades.'
  },
  {
    icon: Globe,
    title: 'Flexible Work Culture',
    desc: 'Hybrid and fully remote options designed for maximum creative flow.'
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    desc: 'Dedicated education stipends, masterclasses, and mentorship from industry leaders.'
  }
];

interface JobSectionProps {
  onOpenConsultation: () => void;
}

export const JobSection: React.FC<JobSectionProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [appliedRoleTitle, setAppliedRoleTitle] = useState<string>('General Application');
  const [submitted, setSubmitted] = useState(false);

  // Application form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    portfolioUrl: '',
    experience: '1-3 years',
    message: ''
  });

  const categories = ['All', 'Strategy', 'Creative', 'Production', 'Media Buying'];

  const filteredJobs = activeFilter === 'All'
    ? JOB_POSITIONS
    : JOB_POSITIONS.filter(job => job.category === activeFilter);

  const handleOpenJobDetails = (job: JobPosition) => {
    setSelectedJob(job);
  };

  const handleCloseJobDetails = () => {
    setSelectedJob(null);
  };

  const handleOpenApplication = (roleTitle: string) => {
    setAppliedRoleTitle(roleTitle);
    setSelectedJob(null);
    setSubmitted(false);
    setApplyModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="job-top" className="relative min-h-screen pt-28 sm:pt-36 pb-24 px-4 sm:px-8 lg:px-14 overflow-hidden bg-black text-white selection:bg-[#ED1C24] selection:text-white">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#ED1C24]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[400px] h-[400px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 1. HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-28">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ED1C24]/10 border border-[#ED1C24]/30 text-[#ED1C24] text-xs font-semibold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(237,28,36,0.3)] font-body"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>We're Hiring</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Join Our{' '}
            <span className="font-heading italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-[#ED1C24] drop-shadow-[0_0_25px_rgba(237,28,36,0.5)]">
              Creative
            </span>{' '}
            Team
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base sm:text-xl font-body font-light leading-relaxed max-w-2xl mx-auto"
          >
            We're a fast-growing social agency on a mission to build high-converting content and viral campaigns. Join us to reshape how top global brands connect with audiences.
          </motion.p>
        </div>

        {/* 2. BENEFITS SECTION ("Why Join Us?") */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 sm:mb-32"
        >
          {/* Centered Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-tight">
              Why Join Us?
            </h2>
            <p className="mt-3 text-white/60 text-sm sm:text-base font-body font-light">
              We empower our team with the tools, culture, and creative freedom to build work that matters.
            </p>
          </div>

          {/* 3-column x 2-row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {BENEFITS.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative rounded-2xl p-7 bg-black/70 border border-white/10 backdrop-blur-xl shadow-xl hover:border-[#ED1C24]/50 hover:shadow-[0_0_30px_rgba(237,28,36,0.25)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top-left Graphic Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#ED1C24]/10 border border-[#ED1C24]/30 flex items-center justify-center text-[#ED1C24] mb-5 group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(237,28,36,0.2)]">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-red-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base font-body font-light leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 3. JOB LISTINGS SECTION ("Open Positions") */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 sm:mb-32"
        >
          {/* Centered Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-tight">
              Open Positions
            </h2>
            <p className="mt-3 text-white/60 text-sm sm:text-base font-body font-light">
              Explore available opportunities to accelerate your career with ONESHOT.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-body transition-all duration-300 cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#ED1C24] text-white shadow-[0_0_22px_rgba(237,28,36,0.6)] border border-red-400/60 scale-105'
                      : 'bg-white/5 text-white/70 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 2-column Grid of Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl p-7 sm:p-8 bg-black/80 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-[#ED1C24]/60 hover:shadow-[0_0_35px_rgba(237,28,36,0.3)] transition-all duration-300"
              >
                <div>
                  {/* Top: Job Title */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-red-400 transition-colors">
                      {job.title}
                    </h3>
                  </div>

                  {/* Middle: Mini Pill Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ED1C24]/15 border border-[#ED1C24]/30 text-[#ED1C24] text-xs font-semibold font-body">
                      <Layers className="w-3 h-3" />
                      {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium font-body">
                      <MapPin className="w-3 h-3 text-white/50" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium font-body">
                      <Clock className="w-3 h-3 text-white/50" />
                      {job.type}
                    </span>
                  </div>

                  {/* Body Description */}
                  <p className="text-white/70 text-sm sm:text-base font-body font-light leading-relaxed mb-6">
                    {job.description}
                  </p>
                </div>

                {/* Bottom: Text Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenJobDetails(job)}
                    className="inline-flex items-center gap-2 text-[#ED1C24] hover:text-red-400 text-sm font-bold font-body group/link cursor-pointer transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1.5" />
                  </button>

                  <button
                    onClick={() => handleOpenApplication(job.title)}
                    className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-[#ED1C24] text-white/80 hover:text-white border border-white/10 hover:border-red-400/50 text-xs font-semibold font-body transition-all cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-white/60 text-lg font-body">No open positions found in this category.</p>
            </div>
          )}
        </motion.div>

        {/* 4. CALL-TO-ACTION (CTA) SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-14 md:p-16 text-center overflow-hidden liquid-glass border border-white/15 shadow-[0_0_80px_rgba(237,28,36,0.2)]"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ED1C24]/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Bold Heading */}
            <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Don't See Your Role?
            </h2>

            {/* Short Paragraph */}
            <p className="text-white/75 text-base sm:text-lg font-body font-light leading-relaxed mb-8 max-w-xl">
              We are always searching for extraordinary talent, visionaries, and storytellers. Send us a general application and tell us how you can make an impact.
            </p>

            {/* Solid Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05, shadow: '0 0 40px rgba(237,28,36,0.8)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleOpenApplication('General Application')}
              className="bg-[#ED1C24] text-white hover:bg-red-600 transition-all duration-300 px-9 py-4 rounded-full text-base sm:text-lg font-bold font-body inline-flex items-center gap-3 shadow-[0_0_30px_rgba(237,28,36,0.6)] border border-red-400/50 cursor-pointer group"
            >
              <span>Send General Application</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* JOB DETAILS MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0F172A] border border-white/15 rounded-3xl p-6 sm:p-10 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={handleCloseJobDetails}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#ED1C24]/15 border border-[#ED1C24]/30 text-[#ED1C24] text-xs font-semibold font-body mb-3">
                  {selectedJob.department}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  {selectedJob.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs sm:text-sm text-white/60 font-body">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#ED1C24]" />{selectedJob.location}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#ED1C24]" />{selectedJob.type}</span>
                </div>
              </div>

              <div className="space-y-6 font-body text-white/80 text-sm sm:text-base leading-relaxed">
                <div>
                  <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wider text-xs text-[#ED1C24]">About the Role</h4>
                  <p>{selectedJob.description}</p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wider text-xs text-[#ED1C24]">Key Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-white/75">
                    {selectedJob.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wider text-xs text-[#ED1C24]">Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-white/75">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={handleCloseJobDetails}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold font-body cursor-pointer transition-all"
                >
                  Close
                </button>
                <button
                  onClick={() => handleOpenApplication(selectedJob.title)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ED1C24] hover:bg-red-600 text-white text-sm font-bold font-body cursor-pointer shadow-[0_0_25px_rgba(237,28,36,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply for this Position</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* JOB APPLICATION MODAL */}
      <AnimatePresence>
        {applyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#0F172A] border border-white/15 rounded-3xl p-6 sm:p-10 text-white shadow-2xl"
            >
              <button
                onClick={() => setApplyModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#ED1C24]/15 border border-[#ED1C24]/30 text-[#ED1C24] text-xs font-semibold font-body mb-2">
                      Application
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                      Apply for {appliedRoleTitle}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm font-body mt-1">
                      Complete the form below and our recruitment team will reach out shortly.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 font-body">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-3.5 text-white/40" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#ED1C24] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-white/40" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#ED1C24] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                        Portfolio / Reel / LinkedIn URL *
                      </label>
                      <div className="relative">
                        <LinkIcon className="w-4 h-4 absolute left-3.5 top-3.5 text-white/40" />
                        <input
                          type="url"
                          required
                          value={formData.portfolioUrl}
                          onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                          placeholder="https://vimeo.com/your-reel"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#ED1C24] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                        Relevant Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0F172A] border border-white/15 text-white text-sm focus:outline-none focus:border-[#ED1C24] transition-all"
                      >
                        <option value="Entry Level (< 1 yr)">Entry Level (&lt; 1 yr)</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                        Why ONESHOT? / Cover Note
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us briefly about your best work or why you want to join..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#ED1C24] transition-all"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-[#ED1C24] hover:bg-red-600 text-white font-bold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(237,28,36,0.6)] transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8 font-body">
                  <div className="w-16 h-16 rounded-full bg-[#ED1C24]/20 border border-[#ED1C24] text-[#ED1C24] flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(237,28,36,0.5)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">Application Received!</h3>
                  <p className="text-white/70 text-sm max-w-md mx-auto mb-6">
                    Thank you for applying for <span className="text-white font-semibold">{appliedRoleTitle}</span>. Our hiring team will review your application and reel shortly.
                  </p>
                  <button
                    onClick={() => setApplyModalOpen(false)}
                    className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
