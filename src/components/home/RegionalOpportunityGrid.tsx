import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { n: '01', icon: 'bi-graph-up-arrow', title: 'GROW YOUR REGION', desc: 'Create real opportunities and lasting impact.' },
  { n: '02', icon: 'bi-shield-check', title: 'PROVEN SUPPORT', desc: 'Technology, structure and continuous support.' },
  { n: '03', icon: 'bi-rocket-takeoff', title: 'LEAD THE FUTURE', desc: 'Drive mobility growth in your community.' },
  { n: '04', icon: 'bi-globe2', title: 'AMERICAS & BEYOND', desc: 'Be part of a movement that goes further.' },
];

export const RegionalOpportunityGrid: React.FC = () => {
  return (
    <section id="regional-opportunity" className="relative pb-28 bg-midnight overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl glass-panel glass-panel-hover border border-navy-border/60 text-center overflow-hidden group"
            >
              <span className="absolute top-4 right-5 text-4xl font-black text-white/5 group-hover:text-urban-electric/20 transition-colors">
                {item.n}
              </span>
              <div className="relative w-14 h-14 mx-auto rounded-xl bg-urban-blue/20 border border-urban-blue/40 flex items-center justify-center text-urban-light text-2xl mb-5 group-hover:bg-urban-blue/30 group-hover:scale-110 transition-all">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <h3 className="relative text-base font-extrabold uppercase tracking-wider text-white">{item.title}</h3>
              <p className="relative mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 relative rounded-3xl p-8 sm:p-12 glass-panel border border-urban-electric/30 shadow-2xl shadow-urban-blue/20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-urban-blue/10 via-transparent to-urban-light/10 pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-card/80 border border-urban-electric/30 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-urban-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-urban-light"></span>
              </span>
              <span className="text-[11px] font-bold tracking-wider text-urban-light uppercase">
                Now Accepting Regional Applications
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
              Ready to own the future of mobility in your region?
            </h3>

            <div className="mt-8">
              <a
                href="/regional-licensing"
                className="relative inline-flex group overflow-hidden rounded-xl p-[2px] font-bold text-sm uppercase tracking-wider"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-urban-blue via-urban-electric to-urban-light animate-pulse" />
                <span className="relative flex items-center gap-2 px-8 py-4 bg-midnight group-hover:bg-transparent rounded-[10px] text-white transition-all duration-300">
                  <span>BECOME A REGIONAL LICENSED OPERATOR</span>
                  <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
