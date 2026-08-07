import React from 'react';
import { motion } from 'framer-motion';

export const FounderCounty: React.FC = () => {
  const highlights = [
    { label: 'LIMITED TERRITORIES', desc: 'County rights granted exclusively on a first-approved operator basis.' },
    { label: 'FOUNDING OPERATOR STATUS', desc: 'Direct access to leadership forums & priority operational features.' },
    { label: 'PRIORITY OPPORTUNITIES', desc: 'First right of refusal for adjacent expansion zones within state boundaries.' },
    { label: 'FOUNDING CERTIFICATION', desc: 'Official credentialing seal as an inaugurated Urban Founding Operator.' },
    { label: 'EARLY MARKET POSITIONING', desc: 'Establish early local brand presence before national mass market saturation.' },
  ];

  return (
    <section id="founder-county" className="py-24 relative bg-navy-deep overflow-hidden border-t border-navy-border/50">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-urban-blue/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Scarcity Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <i className="bi bi-award-fill"></i>
              <span>INAVGURAL PROGRAM</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
              FOUNDING <span className="text-gradient-blue">COUNTY.</span>
            </h2>

            <p className="mt-2 text-xl font-bold text-urban-light tracking-wide">
              THE FIRST OPERATORS WILL BUILD THE FOUNDATION.
            </p>

            <div className="mt-6 space-y-4 text-muted leading-relaxed text-sm sm:text-base">
              <p>
                Initial Urban territories may receive special conditions, founding-operator advantages, and dedicated rollout assistance.
              </p>
              <p className="text-ice/90 font-medium">
                Each territory can only be licensed once according to Urban's territorial availability and rigorous approval process.
              </p>
            </div>

            {/* Highlights List */}
            <div className="mt-8 space-y-3">
              {highlights.map((hl) => (
                <div key={hl.label} className="flex items-start gap-3 p-3 rounded-lg bg-midnight/60 border border-navy-border/60">
                  <div className="w-5 h-5 rounded-full bg-urban-blue/20 text-urban-light flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{hl.label}: </span>
                    <span className="text-xs text-muted">{hl.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#territories"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-urban-blue to-urban-electric text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-urban-blue/30 hover:scale-[1.02] transition-all inline-flex items-center gap-2"
              >
                <span>CHECK MY COUNTY</span>
                <i className="bi bi-geo-alt-fill"></i>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium Certification Seal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-navy-card via-midnight to-navy-card p-1 border-2 border-urban-electric/40 shadow-[0_0_50px_rgba(10,77,255,0.3)] flex flex-col items-center justify-center text-center group hover:border-urban-light transition-all duration-500">
              
              {/* Outer Glowing Ring Animation */}
              <div className="absolute inset-2 rounded-full border border-dashed border-urban-blue/40 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-urban-electric/20" />

              {/* Inner Crest Badge */}
              <div className="relative z-10 flex flex-col items-center p-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-urban-blue to-urban-electric flex items-center justify-center text-white text-3xl shadow-lg mb-3">
                  <i className="bi bi-shield-lock-fill"></i>
                </div>

                <div className="text-[11px] font-mono tracking-widest text-urban-light uppercase font-bold">
                  OFFICIAL PROGRAM
                </div>

                <div className="text-2xl font-black tracking-widest text-white mt-1">
                  URBAN
                </div>

                <div className="text-xs font-extrabold tracking-wider text-gradient-blue uppercase mt-0.5">
                  FOUNDING COUNTY
                </div>

                <div className="text-[10px] font-bold text-muted uppercase tracking-widest mt-1">
                  UNITED STATES
                </div>

                <div className="mt-4 px-3 py-1 rounded-full bg-navy-card border border-urban-electric/30 text-[9px] font-bold text-emerald-400 tracking-wider">
                  TERRITORIAL EXCLUSIVITY SEAL
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
