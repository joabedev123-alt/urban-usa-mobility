import React from 'react';
import { motion } from 'framer-motion';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-20 bg-midnight overflow-hidden border-t border-navy-border/50">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-urban-blue/20 via-urban-electric/5 to-transparent blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl glass-panel border border-urban-electric/30 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-urban-blue/20 text-urban-light border border-urban-blue/40 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-urban-light animate-ping" />
            <span>TERRITORIAL AVAILABILITY CHECK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            YOUR REGION MAY BE <br />
            <span className="text-gradient-blue">AVAILABLE TODAY.</span>
          </h2>

          <p className="mt-4 text-base sm:text-xl text-ice/90 max-w-2xl mx-auto font-medium">
            The first step is finding out whether your county is currently open for licensing.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-muted max-w-xl mx-auto">
            Submit your information and our team will contact you with details about the Urban regional licensing program.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <a
              href="#lead-form"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-urban-blue to-urban-electric text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-urban-blue/40 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <span>RESERVE MY REGION</span>
              <i className="bi bi-arrow-down-circle-fill"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
