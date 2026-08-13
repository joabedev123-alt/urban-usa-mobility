import React from 'react';
import { motion } from 'framer-motion';

export const PartnershipModel: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 bg-midnight overflow-hidden border-t border-navy-border/50">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity brightness-75 contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1494522358652-f30e61a60313?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/85 to-midnight" />
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-urban-blue/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1677FF_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 rounded-3xl glass-panel border border-urban-electric/40 shadow-2xl shadow-urban-blue/20 relative border-glow"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-urban-blue/20 text-urban-light border border-urban-blue/40 text-xs font-bold uppercase tracking-wider mb-6 animate-glow">
                <i className="bi bi-stars text-amber-400"></i>
                <span>DISCOVER</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
                THE WORLD'S MOST INNOVATIVE <br />
                <span className="text-gradient-blue font-black">MOBILITY PARTNERSHIP MODEL</span>
              </h2>

              <p className="mt-8 text-lg sm:text-xl text-ice/90 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                The world's first Regional Licensing model designed by drivers, for drivers.
              </p>

              <p className="mt-4 text-base sm:text-lg text-urban-light font-bold uppercase tracking-wide">
                Be the owner of the platform you drive.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-card/80 border border-navy-border text-xs font-semibold text-ice/90">
                  <i className="bi bi-patch-check-fill text-urban-light"></i> First-of-its-kind licensing model
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-card/80 border border-navy-border text-xs font-semibold text-ice/90">
                  <i className="bi bi-geo-alt-fill text-urban-light"></i> Exclusive territory rights
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-card/80 border border-navy-border text-xs font-semibold text-ice/90">
                  <i className="bi bi-graph-up-arrow text-urban-light"></i> Built-in growth playbook
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[300px]"
            >
              <img
                src="/partner-dashboard.png"
                alt="URBAN Partner dashboard showing revenue, active drivers and regional coverage"
                className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(10,77,255,0.25)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
