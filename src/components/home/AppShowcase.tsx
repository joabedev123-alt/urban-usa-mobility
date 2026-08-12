import React from 'react';
import { motion } from 'framer-motion';

const StoreBadge: React.FC<{ icon: string; eyebrow: string; label: string }> = ({ icon, eyebrow, label }) => (
  <a
    href="#"
    className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-navy-card border border-navy-border hover:border-urban-electric/50 hover:bg-navy-card/80 transition-all"
  >
    <i className={`bi ${icon} text-2xl text-white`}></i>
    <div className="text-left leading-tight">
      <div className="text-[10px] text-muted uppercase tracking-wider">{eyebrow}</div>
      <div className="text-sm font-bold text-white">{label}</div>
    </div>
  </a>
);

const PhoneMockup: React.FC = () => (
  <div className="relative mx-auto w-full max-w-[380px]">
    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-urban-blue/20 glow-effect">
      <img
        src="/app-mockup.png"
        alt="URBAN Partner App Dashboard"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
);

export const AppShowcase: React.FC = () => {
  return (
    <section id="download-app" className="relative py-24 bg-midnight overflow-hidden border-t border-navy-border/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-urban-blue/10 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-urban-light">URBAN Mobility APP</span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              DOWNLOAD OUR APP <br />
              <span className="text-gradient-blue font-black">AND ENJOY OUR BEST SERVICE!</span>
            </h2>
            <p className="mt-6 text-lg text-ice/90 max-w-xl leading-relaxed uppercase tracking-wide font-semibold">
              Fast, safe and reliable rides anytime, anywhere.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <StoreBadge icon="bi-apple" eyebrow="Download on the" label="App Store" />
              <StoreBadge icon="bi-google-play" eyebrow="Get it on" label="Google Play" />
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted">
              <i className="bi bi-headset text-urban-light text-lg"></i>
              <span><span className="text-white font-semibold">Support 24 hours</span> — we're here for you, anytime!</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
