import React from 'react';
import { motion } from 'framer-motion';

export const PartnershipModel: React.FC = () => {
  return (
    <section className="relative py-28 bg-midnight overflow-hidden border-t border-navy-border/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-urban-blue/15 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 rounded-3xl glass-panel border border-urban-electric/30 shadow-2xl relative"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-urban-blue/20 text-urban-light border border-urban-blue/40 text-xs font-bold uppercase tracking-wider mb-6">
            <i className="bi bi-stars text-amber-400"></i>
            <span>DISCOVER</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight">
            THE WORLD'S MOST INNOVATIVE <br />
            <span className="text-gradient-blue font-black">MOBILITY PARTNERSHIP MODEL</span>
          </h2>

          <p className="mt-8 text-lg sm:text-2xl text-ice/90 max-w-3xl mx-auto font-medium leading-relaxed">
            The world's first Regional Licensing model designed by drivers, for drivers.
          </p>

          <p className="mt-4 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Be the owner of the platform you drive.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
