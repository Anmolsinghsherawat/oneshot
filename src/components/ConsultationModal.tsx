import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0F172A] text-white rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {step === 'form' ? (
            <div>
              <div className="inline-flex items-center gap-2 bg-[#ED1C24]/20 text-[#ED1C24] px-3.5 py-1 rounded-full text-xs font-semibold font-body border border-[#ED1C24]/30 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Strategy Call Booking</span>
              </div>

              <h3 className="font-heading italic text-4xl text-white tracking-tight mb-2">
                Book a 1-on-1 Growth Consultation
              </h3>
              <p className="font-body text-white/80 text-sm font-light mb-8">
                Lock in a 30-minute campaign audit with our senior creative directors. We’ll review your brand assets and map out a custom video ad roadmap.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold font-body text-white/80 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-white/40 font-body focus:outline-none focus:border-[#ED1C24]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold font-body text-white/80 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@yourbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-white/40 font-body focus:outline-none focus:border-[#ED1C24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold font-body text-white/80 uppercase tracking-wider mb-1.5">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-white/40 font-body focus:outline-none focus:border-[#ED1C24]"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#ED1C24] hover:bg-red-600 text-white font-semibold font-body py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(237,28,36,0.6)] cursor-pointer"
                  >
                    <span>Confirm Consultation Booking</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-white/60 font-body pt-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Confidential · Free Strategy Blueprint Included</span>
                </div>
              </form>
            </div>
          ) : (
            /* Success View */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-heading italic text-4xl text-white mb-2">
                Consultation Confirmed!
              </h3>
              <p className="font-body text-white/80 text-base max-w-md mx-auto font-light mb-8">
                Thank you, <strong className="text-white font-bold">{formData.name}</strong>. A calendar invite & custom strategy audit link has been dispatched to <strong className="text-white font-bold">{formData.email}</strong>.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left max-w-md mx-auto mb-8 space-y-3 text-sm font-body">
                <div className="flex justify-between text-white/80">
                  <span>Contact Number:</span>
                  <strong className="text-white">{formData.phone}</strong>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Email:</span>
                  <strong className="text-white">{formData.email}</strong>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Strategy Lead:</span>
                  <strong className="text-[#ED1C24]">Senior Creative Director</strong>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="bg-[#ED1C24] hover:bg-red-600 text-white font-semibold font-body py-3 px-8 rounded-full transition-all cursor-pointer shadow-lg"
              >
                Return to Site
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
