import React from 'react';
import { motion } from 'framer-motion';

export const FounderStory: React.FC = () => {
  return (
    <section id="founder" className="relative py-24 bg-midnight overflow-hidden border-t border-navy-border/50">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center p-8 sm:p-12 rounded-3xl glass-panel border border-navy-border/60"
        >
          <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-urban-blue via-urban-electric to-urban-light flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-urban-blue/30">
              ALV
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl font-black text-gradient-blue leading-none">11</div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-muted mt-1">Years of Existence</div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-urban-blue/20 text-urban-light border border-urban-blue/40 text-xs font-bold uppercase tracking-wider mb-4">
              <i className="bi bi-award-fill text-amber-400"></i>
              <span>A Founder's Vision</span>
            </div>
            <p className="text-xl sm:text-2xl text-white font-semibold leading-relaxed">
              "Urban was born from the vision that drivers and entrepreneurs can lead the transformation of
              mobility in their regions, with cutting-edge technology, continuous support, and a scalable,
              sustainable business model."
            </p>
            <div className="mt-6">
              <div className="text-sm font-bold text-white">Andre Loreto Vivas</div>
              <div className="text-xs text-urban-light uppercase tracking-wider">Founder, URBAN Brasil</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
