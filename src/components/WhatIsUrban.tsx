import React from 'react';
import { motion } from 'framer-motion';

export const WhatIsUrban: React.FC = () => {
  return (
    <section className="py-24 relative bg-navy-deep/60 overflow-hidden border-t border-navy-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-urban-electric bg-urban-blue/10 px-3 py-1 rounded border border-urban-blue/30">
              The Platform Concept
            </span>

            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              WHAT IS <span className="text-gradient-blue">URBAN?</span>
            </h2>

            <p className="mt-6 text-lg text-ice/90 leading-relaxed font-normal">
              Urban is a mobility technology platform designed to connect drivers and passengers while enabling qualified regional operators to build and grow local operations.
            </p>

            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
              Instead of simply driving on the platform, a licensed operator can help develop the Urban presence in an exclusive territory — building a structured business backed by comprehensive technology.
            </p>

            {/* Platform Highlights */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-midnight/80 border border-navy-border">
                <div className="w-10 h-10 rounded-lg bg-urban-blue/20 flex items-center justify-center text-urban-light text-xl shrink-0 mt-0.5">
                  <i className="bi bi-phone"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full Technology Suite</h4>
                  <p className="text-xs text-muted mt-1">Native iOS & Android apps for passengers and drivers with real-time dispatch and analytics.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-midnight/80 border border-navy-border">
                <div className="w-10 h-10 rounded-lg bg-urban-blue/20 flex items-center justify-center text-urban-light text-xl shrink-0 mt-0.5">
                  <i className="bi bi-[#1677FF] bi-shield-check"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Operational Empowerment</h4>
                  <p className="text-xs text-muted mt-1">Local operators maintain regional presence while leveraging Urban's national infrastructure.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Mockup + Floating UI Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-navy-border to-midnight shadow-2xl border border-navy-border">
              <img
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1400&auto=format&fit=crop"
                alt="Urban Mobility Platform Interface USA"
                className="w-full rounded-xl object-cover mix-blend-luminosity brightness-90 contrast-110 aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent rounded-xl" />

              {/* Floating UI Card specified in prompt */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-midnight/90 backdrop-blur-xl border border-urban-electric/40 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-navy-border pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-urban-electric animate-ping" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">REGIONAL LICENSE</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-urban-blue/20 text-urban-light border border-urban-blue/30">
                    STATUS: ACTIVE
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded bg-navy-card/60">
                    <div className="text-[10px] text-muted uppercase">Territory</div>
                    <div className="text-xs font-bold text-white mt-0.5">Exclusive</div>
                  </div>
                  <div className="p-2 rounded bg-navy-card/60">
                    <div className="text-[10px] text-muted uppercase">Technology</div>
                    <div className="text-xs font-bold text-urban-light mt-0.5">Platform</div>
                  </div>
                  <div className="p-2 rounded bg-navy-card/60">
                    <div className="text-[10px] text-muted uppercase">Support</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5">Operational</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
