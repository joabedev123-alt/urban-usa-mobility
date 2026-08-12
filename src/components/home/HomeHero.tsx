import React from 'react';
import { motion } from 'framer-motion';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-midnight">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-urban-blue/20 via-urban-electric/5 to-transparent blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-urban-light/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1677FF_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-60 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/50 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/70 via-transparent to-midnight/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
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
            Now expanding across the United States
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08]"
        >
          NOW EXPANDING <br />
          <span className="text-gradient-blue font-black">ACROSS THE U.S.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-2xl text-ice/90 font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Driver-first platform with fair rates, transparent earnings, and real human support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <a
            href="#download-app"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-urban-blue to-urban-electric text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-urban-blue/30 hover:shadow-urban-blue/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
          >
            <span>JOIN AS A DRIVER</span>
            <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>

          <a
            href="/regional-licensing"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy-card/90 text-ice font-semibold text-sm tracking-wider uppercase border border-navy-border hover:border-urban-electric/50 hover:bg-navy-card transition-all flex items-center justify-center gap-2"
          >
            <span>BECOME AN OPERATOR</span>
          </a>
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <a href="#download-app" aria-label="Scroll to app section" className="flex flex-col items-center gap-2 text-xs text-muted tracking-widest uppercase">
            <span>Scroll</span>
            <i className="bi bi-chevron-down text-urban-light animate-bounce"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
