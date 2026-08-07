import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-midnight">
      {/* Background Graphic & Light Effects */}
      <div className="absolute inset-0 z-0">
        {/* Deep blue radial light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-urban-blue/20 via-urban-electric/5 to-transparent blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-urban-light/10 blur-3xl rounded-full pointer-events-none" />

        {/* Abstract Metropolitan Grid / Vector Art Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1677FF_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Cinematic Backdrop Image Representation with Blue Grading */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-30 scale-105 transition-transform duration-10000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        {/* Dark Gradient Mask Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* High Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-card/80 border border-urban-electric/30 backdrop-blur-md mb-8 shadow-xl"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-urban-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-urban-light"></span>
          </span>
          <span className="text-xs font-semibold tracking-wider text-urban-light uppercase">
            U.S. REGIONAL LICENSING PROGRAM • NOW ACCEPTING APPLICATIONS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08]"
        >
          OWN THE PLATFORM <br />
          <span className="text-gradient-blue font-black">YOU DRIVE.</span>
        </motion.h1>

        {/* Subhead Paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-2xl text-ice/90 font-medium max-w-3xl mx-auto leading-relaxed"
        >
          A regional mobility licensing model built by drivers, for drivers and local entrepreneurs.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-3 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Build your own local Urban operation, develop your driver and passenger network, and lead mobility growth in your region.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <a
            href="#lead-form"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-urban-blue to-urban-electric text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-urban-blue/30 hover:shadow-urban-blue/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
          >
            <span>RESERVE YOUR REGION</span>
            <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>

          <a
            href="#opportunity"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy-card/90 text-ice font-semibold text-sm tracking-wider uppercase border border-navy-border hover:border-urban-electric/50 hover:bg-navy-card transition-all flex items-center justify-center gap-2"
          >
            <span>DISCOVER THE OPPORTUNITY</span>
          </a>
        </motion.div>

        {/* Small Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 text-xs text-muted/80 flex items-center justify-center gap-2"
        >
          <i className="bi bi-shield-check text-urban-light"></i>
          <span>Regional licensing opportunities available across selected U.S. markets.</span>
        </motion.p>

        {/* Floating Interactive Visual Preview Cards (Vehicle + Tech Emblem) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 relative max-w-4xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-navy-border/60 to-navy-card/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="relative rounded-xl overflow-hidden aspect-[16/8] sm:aspect-[21/9]">
            <img 
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop" 
              alt="Urban Mobility Premium Vehicle USA"
              className="w-full h-full object-cover mix-blend-luminosity brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-transparent to-midnight/80" />

            {/* Overlay UI Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-midnight/80 backdrop-blur-md border border-urban-electric/30">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-lg bg-urban-blue/20 border border-urban-blue/40 flex items-center justify-center text-urban-light text-xl">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">EXCLUSIVE REGIONAL TERRITORY</div>
                  <div className="text-[11px] text-muted">United States Territorial Operations & Expansion</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-md border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Applications Open</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <a href="#opportunity" aria-label="Scroll to opportunity section" className="flex flex-col items-center gap-2 text-xs text-muted tracking-widest uppercase">
            <span>Scroll</span>
            <i className="bi bi-chevron-down text-urban-light animate-bounce"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
