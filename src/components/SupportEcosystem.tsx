import React from 'react';
import { motion } from 'framer-motion';

export const SupportEcosystem: React.FC = () => {
  const flowNodes = [
    { title: 'Technology', desc: 'Turnkey mobile platforms & dispatch core', icon: 'bi-cpu' },
    { title: 'Training', desc: 'Operator onboarding & homologation', icon: 'bi-mortarboard' },
    { title: 'Operations', desc: 'Playbooks & fleet management setup', icon: 'bi-gear' },
    { title: 'Marketing', desc: 'Local driver & passenger acquisition funnels', icon: 'bi-megaphone' },
    { title: 'Support', desc: 'Dedicated 24/7 technical & operational assistance', icon: 'bi-headset' },
    { title: 'Growth', desc: 'Territorial scaling & network expansion', icon: 'bi-graph-up-arrow' },
  ];

  return (
    <section className="py-24 relative bg-midnight overflow-hidden border-t border-navy-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-urban-light bg-urban-blue/10 px-3 py-1 rounded border border-urban-blue/30">
            End-to-End Partnership
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white">
            YOU BUILD THE REGION. <br />
            <span className="text-gradient-blue">URBAN SUPPORTS THE JOURNEY.</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
            Urban regional operators gain access to the platform, operational guidance, growth resources and continuous support needed to develop their market.
          </p>
        </div>

        {/* Ecosystem Flow Diagram */}
        <div className="mt-16 relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-urban-blue via-urban-electric to-urban-light -translate-y-1/2 opacity-40 z-0" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {flowNodes.map((node, idx) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center text-center justify-between min-h-[200px]"
              >
                <div className="w-12 h-12 rounded-xl bg-midnight border border-urban-electric/40 flex items-center justify-center text-urban-light text-2xl group-hover:scale-110 group-hover:bg-urban-blue group-hover:text-white transition-all shadow-lg mb-4">
                  <i className={`bi ${node.icon}`}></i>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-urban-light font-bold">STAGE 0{idx + 1}</span>
                  <h3 className="text-sm font-extrabold text-white mt-1 group-hover:text-urban-light transition-colors">
                    {node.title}
                  </h3>
                  <p className="mt-2 text-[11px] text-muted leading-relaxed">
                    {node.desc}
                  </p>
                </div>

                {idx < flowNodes.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-urban-light text-xs z-20">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
