import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LeadFormData } from '../types';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export const LeadCaptureForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    cityCounty: '',
    state: 'Florida',
    worksWithDriverGroups: 'No',
    investor: 'No',
    experience: '',
    agreeToContact: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.cityCounty.trim()) newErrors.cityCounty = 'City or County is required';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted to submit';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildMailtoUrl = () => {
    const subject = `Territorial Application — ${formData.cityCounty}, ${formData.state}`;
    const body = [
      `Full Name: ${formData.fullName}`,
      `Email Address: ${formData.email}`,
      `Phone Number: ${formData.phone}`,
      `Address: ${formData.address}`,
      `City / County: ${formData.cityCounty}`,
      `State: ${formData.state}`,
      `Works With Groups of Drivers: ${formData.worksWithDriverGroups}`,
      `Investor: ${formData.investor}`,
      `Experience: ${formData.experience || 'N/A'}`,
    ].join('\n');

    return `mailto:licensing@urbanusaapp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    window.location.href = buildMailtoUrl();

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="lead-form" className="py-24 relative bg-midnight overflow-hidden border-t border-navy-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl glass-panel border border-urban-electric/40 p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Accent Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-urban-blue/20 blur-3xl rounded-full pointer-events-none" />

          {/* Form Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-urban-light bg-urban-blue/15 px-3 py-1 rounded border border-urban-blue/30">
              Territorial Application
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
              REQUEST <span className="text-gradient-blue">YOUR REGION</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Submit your information below to check regional availability and begin your evaluation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ice mb-2">
                  Full Name <span className="text-urban-light">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. John Mitchell"
                  className={`w-full px-4 py-3.5 rounded-xl bg-navy-card/90 border ${
                    errors.fullName ? 'border-rose-500' : 'border-navy-border focus:border-urban-electric'
                  } text-white placeholder-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-urban-electric/40 transition-all`}
                />
                {errors.fullName && <p className="mt-1 text-[11px] text-rose-400 font-medium">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ice mb-2">
                  Email Address <span className="text-urban-light">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3.5 rounded-xl bg-navy-card/90 border ${
                    errors.email ? 'border-rose-500' : 'border-navy-border focus:border-urban-electric'
                  } text-white placeholder-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-urban-electric/40 transition-all`}
                />
                {errors.email && <p className="mt-1 text-[11px] text-rose-400 font-medium">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ice mb-2">
                  Phone Number <span className="text-urban-light">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full px-4 py-3.5 rounded-xl bg-navy-card/90 border ${
                    errors.phone ? 'border-rose-500' : 'border-navy-border focus:border-urban-electric'
                  } text-white placeholder-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-urban-electric/40 transition-all`}
                />
                {errors.phone && <p className="mt-1 text-[11px] text-rose-400 font-medium">{errors.phone}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ice mb-2">
                  Address <span className="text-urban-light">*</span>
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Street address"
                  className={`w-full px-4 py-3.5 rounded-xl bg-navy-card/90 border ${
                    errors.address ? 'border-rose-500' : 'border-navy-border focus:border-urban-electric'
                  } text-white placeholder-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-urban-electric/40 transition-all`}
                />
                {errors.address && <p className="mt-1 text-[11px] text-rose-400 font-medium">{errors.address}</p>}
              </div>
            </div>

            {/* Section Header */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-urban-light">
                Inquiries &amp; Opportunities
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* City / County */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ice mb-2">
                  City / County <span className="text-urban-light">*</span>
                </label>
                <input
                  type="text"
                  value={formData.cityCounty}
                  onChange={(e) => setFormData({ ...formData, cityCounty: e.target.value })}
                  placeholder="e.g. Orange County"
                  className={`w-full px-4 py-3.5 rounded-xl bg-navy-card/90 border ${
                    errors.cityCounty ? 'border-rose-500' : 'border-navy-border focus:border-urban-electric'
                  } text-white placeholder-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-urban-electric/40 transition-all`}
                />
                {errors.cityCounty && <p className="mt-1 text-[11px] text-rose-400 font-medium">{errors.cityCounty}</p>}
              </div>

              {/* State */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ice mb-2">
                  State <span className="text-urban-light">*</span>
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-navy-card/90 border border-navy-border focus:border-urban-electric text-white text-sm focus:outline-none focus:ring-2 focus:ring-urban-electric/40 transition-all"
                >
                  {US_STATES.map((st) => (
                    <option key={st} value={st} className="bg-midnight text-white">
                      {st}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Works With Driver Groups */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ice mb-2">
                  Do You Work With Groups of Drivers?
                </label>
                <select
                  value={formData.worksWithDriverGroups}
                  onChange={(e) => setFormData({ ...formData, worksWithDriverGroups: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-navy-card/90 border border-navy-border focus:border-urban-electric text-white text-sm focus:outline-none focus:ring-2 focus:ring-urban-electric/40 transition-all"
                >
                  <option value="Yes" className="bg-midnight text-white">Yes</option>
                  <option value="No" className="bg-midnight text-white">No</option>
                </select>
              </div>

              {/* Investor */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ice mb-2">
                  Investor
                </label>
                <select
                  value={formData.investor}
                  onChange={(e) => setFormData({ ...formData, investor: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-navy-card/90 border border-navy-border focus:border-urban-electric text-white text-sm focus:outline-none focus:ring-2 focus:ring-urban-electric/40 transition-all"
                >
                  <option value="Yes" className="bg-midnight text-white">Yes</option>
                  <option value="No" className="bg-midnight text-white">No</option>
                </select>
              </div>
            </div>

            {/* Experience (Optional) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-ice mb-2">
                Tell us about your experience in mobility or business <span className="text-muted font-normal">(Optional)</span>
              </label>
              <textarea
                rows={3}
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="Share relevant rideshare, logistics, fleet, or entrepreneurial background..."
                className="w-full px-4 py-3 rounded-xl bg-navy-card/90 border border-navy-border focus:border-urban-electric text-white placeholder-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-urban-electric/40 transition-all resize-none"
              />
            </div>

            {/* Consent Checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeToContact}
                  onChange={(e) => setFormData({ ...formData, agreeToContact: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-navy-border bg-navy-card text-urban-blue focus:ring-urban-electric"
                />
                <span className="text-xs text-muted leading-relaxed">
                  I agree to be contacted by Urban regarding regional licensing opportunities, territorial availability, and official program details.
                </span>
              </label>
              {errors.agreeToContact && <p className="mt-1 text-[11px] text-rose-400 font-medium">{errors.agreeToContact}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-urban-blue via-urban-electric to-urban-light text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-urban-blue/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <i className="bi bi-arrow-repeat animate-spin text-lg"></i>
                    <span>PROCESSING APPLICATION...</span>
                  </>
                ) : (
                  <>
                    <span>CHECK MY REGION</span>
                    <i className="bi bi-arrow-right"></i>
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>

      {/* Success Modal Modal Overlay */}
      <AnimatePresence>
        {submitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-md w-full p-8 rounded-3xl glass-panel border border-urban-electric text-center shadow-2xl relative"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-3xl flex items-center justify-center mx-auto mb-4">
                <i className="bi bi-check-circle-fill"></i>
              </div>

              <h3 className="text-xl font-bold text-white">APPLICATION READY TO SEND</h3>

              <p className="mt-3 text-sm text-ice/90 leading-relaxed font-medium">
                Your email app should have opened with your application addressed to our team. If it didn't
                open automatically, please email us directly at{' '}
                <a href="mailto:licensing@urbanusaapp.com" className="text-urban-light underline">
                  licensing@urbanusaapp.com
                </a>.
              </p>

              <div className="mt-6 pt-4 border-t border-navy-border/60">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-urban-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-urban-electric transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
