import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../context/ModalContext';
import { useCursor } from '../context/CursorContext';
import { X, Check } from 'lucide-react';

export const ConsultationModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const { setCursorType } = useCursor();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    level: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleClose = () => {
    closeModal();
    // Reset state after animation finishes
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        level: '',
        message: '',
      });
    }, 300);
  };

  const destinations = [
    { value: 'usa', label: 'United States (USA)' },
    { value: 'uk', label: 'United Kingdom (UK)' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'germany', label: 'Germany' },
    { value: 'ireland', label: 'Ireland' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'other', label: 'Other' },
  ];

  const levels = [
    { value: 'bachelors', label: "Bachelor's Degree" },
    { value: 'masters', label: "Master's Degree (MS/MA)" },
    { value: 'mba', label: 'MBA' },
    { value: 'phd', label: 'PhD / Doctorate' },
    { value: 'diploma', label: 'Diploma / Foundation' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg overflow-y-auto"
          onClick={handleClose}
        >
          {/* Scrollable Container wrapper to prevent cutoff on small heights */}
          <div className="w-full max-w-lg my-auto py-8">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220, delay: 0.05 }}
              className="relative w-full bg-[#121212] border border-white/10 text-white rounded-3xl p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent light glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/5 hover:border-white/20 hover:bg-white/5 text-white/60 hover:text-white transition-all cursor-none"
                aria-label="Close modal"
                onMouseEnter={() => setCursorType('view')}
                onMouseLeave={() => setCursorType('default')}
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="mb-8 pr-8">
                      <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-white/40 block mb-2">
                        Get Started
                      </span>
                      <h3 className="font-heading font-medium text-3xl tracking-tight text-white mb-2">
                        Book Consultation
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed font-sans">
                        Provide your details below to schedule a free 1-on-1 session with our senior education advisors.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[11px] tracking-wider uppercase font-semibold text-white/50 block">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none cursor-none font-sans"
                          placeholder="e.g. Jane Doe"
                          onMouseEnter={() => setCursorType('view')}
                          onMouseLeave={() => setCursorType('default')}
                        />
                      </div>

                      {/* Contact row (Email + Phone) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="text-[11px] tracking-wider uppercase font-semibold text-white/50 block">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none cursor-none font-sans"
                            placeholder="e.g. jane@example.com"
                            onMouseEnter={() => setCursorType('view')}
                            onMouseLeave={() => setCursorType('default')}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="phone" className="text-[11px] tracking-wider uppercase font-semibold text-white/50 block">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none cursor-none font-sans"
                            placeholder="e.g. +91 98765 43210"
                            onMouseEnter={() => setCursorType('view')}
                            onMouseLeave={() => setCursorType('default')}
                          />
                        </div>
                      </div>

                      {/* Dropdowns row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label htmlFor="country" className="text-[11px] tracking-wider uppercase font-semibold text-white/50 block">
                            Target Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all rounded-xl px-4 py-3 text-sm text-white focus:outline-none cursor-none font-sans"
                            onMouseEnter={() => setCursorType('view')}
                            onMouseLeave={() => setCursorType('default')}
                          >
                            <option value="" disabled className="text-white/40">Select destination</option>
                            {destinations.map((dest) => (
                              <option key={dest.value} value={dest.value} className="bg-[#121212]">
                                {dest.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="level" className="text-[11px] tracking-wider uppercase font-semibold text-white/50 block">
                            Current Education / Goal
                          </label>
                          <select
                            id="level"
                            name="level"
                            required
                            value={formData.level}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all rounded-xl px-4 py-3 text-sm text-white focus:outline-none cursor-none font-sans"
                            onMouseEnter={() => setCursorType('view')}
                            onMouseLeave={() => setCursorType('default')}
                          >
                            <option value="" disabled className="text-white/40">Select level</option>
                            {levels.map((lvl) => (
                              <option key={lvl.value} value={lvl.value} className="bg-[#121212]">
                                {lvl.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Textarea */}
                      <div className="space-y-1.5">
                        <label htmlFor="message" className="text-[11px] tracking-wider uppercase font-semibold text-white/50 block">
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none cursor-none font-sans resize-none"
                          placeholder="Tell us about your courses, universities of interest, or past test scores..."
                          onMouseEnter={() => setCursorType('view')}
                          onMouseLeave={() => setCursorType('default')}
                        />
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-white text-black font-semibold text-xs tracking-widest uppercase py-4 rounded-xl transition-all duration-300 hover:bg-brand-bg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-none flex items-center justify-center gap-2"
                          onMouseEnter={() => setCursorType('view')}
                          onMouseLeave={() => setCursorType('default')}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Scheduling...
                            </>
                          ) : (
                            'Schedule My Consultation'
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    {/* Circle checkmark with clean glow */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-125" />
                      <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center relative z-10">
                        <Check className="w-8 h-8 stroke-[3]" />
                      </div>
                    </div>

                    <h3 className="font-heading font-medium text-3xl tracking-tight text-white mb-3">
                      Session Requested!
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed font-sans max-w-sm mb-8">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. One of our lead academic counsellors will contact you at <span className="text-white font-medium">{formData.email}</span> or <span className="text-white font-medium">{formData.phone}</span> within 24 hours to confirm your time.
                    </p>

                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-8 py-3.5 bg-white/10 hover:bg-white/25 text-white border border-white/10 hover:border-white/20 transition-all rounded-xl text-xs font-semibold tracking-widest uppercase cursor-none"
                      onMouseEnter={() => setCursorType('view')}
                      onMouseLeave={() => setCursorType('default')}
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
