import React from 'react';
import { motion } from 'framer-motion';

export const OpportunityIntro: React.FC = () => {
  const pillars = [
    {
      title: 'OWN',
      subtitle: 'Exclusive Territorial Rights',
      description: 'Acquire the right to develop and operate the Urban mobility platform within your assigned regional market.',
      icon: 'bi-key-fill',
      color: 'from-urban-blue to-urban-electric',
    },
    {
      title: 'BUILD',
      subtitle: 'Local Community Base',
      description: 'Establish your local driver fleet, engage passenger networks, and manage regional operations with Urban technology.',
      icon: 'bi-buildings-fill',
      color: 'from-urban-electric to-urban-light',
    },
    {
      title: 'GROW',
      subtitle: 'Long-Term Value',
      description: 'Expand mobility footprint across your county, generating scalable operations backed by national brand support.',
      icon: 'bi-graph-up-arrow',
      color: 'from-urban-light to-white',
    },
  ];

  return (
    <section id="opportunity" className="py-24 relative bg-midnight overflow-hidden border-t border-navy-border/40">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-urban-blue/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-urban-blue/10 border border-urban-blue/30 text-urban-light text-xs font-bold uppercase tracking-wider mb-4">
              Strategic Paradigm Shift
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              FROM DRIVER TO <br />
              <span className="text-gradient-blue">REGIONAL OPERATOR.</span>
            </h2>

            <div className="mt-6 space-y-4 text-muted leading-relaxed text-base">
              <p>
                For years, drivers helped build some of the world's largest mobility platforms without participating in the ownership of the local business they helped create.
              </p>
              <p className="text-ice/90 font-medium">
                Urban introduces a different path.
              </p>
              <p>
                Qualified drivers and local entrepreneurs can apply to operate exclusive regional territories and develop the Urban ecosystem inside their communities.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-border/60 flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold text-white">USA</div>
                <div className="text-xs text-muted">Nationwide Scope</div>
              </div>
              <div className="w-px h-8 bg-navy-border"></div>
              <div>
                <div className="text-2xl font-bold text-urban-light">100%</div>
                <div className="text-xs text-muted">Territorial Focus</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Core Pillars (OWN, BUILD, GROW) */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative rounded-2xl p-6 sm:p-8 glass-panel glass-panel-hover"
              >
                {/* Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl bg-gradient-to-b from-urban-blue to-urban-light opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-card border border-urban-electric/30 flex items-center justify-center text-urban-light text-2xl group-hover:scale-110 transition-transform">
                      <i className={`bi ${pillar.icon}`}></i>
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-widest text-urban-light uppercase">Pillar 0{idx + 1}</span>
                      <h3 className="text-2xl font-extrabold text-white group-hover:text-urban-light transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-xs font-semibold px-3 py-1 rounded-full bg-midnight border border-navy-border text-muted">
                    {pillar.subtitle}
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted leading-relaxed pl-0 sm:pl-16">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
