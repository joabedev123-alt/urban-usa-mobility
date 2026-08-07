import React from 'react';
import { motion } from 'framer-motion';

export const Manifesto: React.FC = () => {
  return (
    <section className="relative py-28 bg-midnight overflow-hidden border-t border-navy-border/50">
      {/* Background Graphic & Night Highway Visual Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity brightness-75 contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/90 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-urban-blue/20 to-midnight" />
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
            <i className="bi bi-star-fill text-amber-400"></i>
            <span>URBAN USA OPERATOR MANIFESTO</span>
          </div>

          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
            DON'T JUST DRIVE THE MARKET. <br />
            <span className="text-gradient-blue font-black">BUILD IT.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-2xl text-ice/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Turn your experience in mobility into an opportunity to create long-term value in your own region.
          </p>

          <p className="mt-4 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Stop giving away 100% of your regional equity to distant platforms. Join the next generation of regional mobility operators taking ownership of their local cities across America.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <a
              href="#lead-form"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-urban-blue via-urban-electric to-urban-light text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-urban-blue/40 hover:scale-[1.03] transition-all flex items-center gap-2"
            >
              <span>CLAIM YOUR COUNTY</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
