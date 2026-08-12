import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { icon: 'bi-graph-up-arrow', title: 'GROW YOUR REGION', desc: 'Create real opportunities and lasting impact.' },
  { icon: 'bi-shield-check', title: 'PROVEN SUPPORT', desc: 'Technology, structure and continuous support.' },
  { icon: 'bi-rocket-takeoff', title: 'LEAD THE FUTURE', desc: 'Drive mobility growth in your community.' },
  { icon: 'bi-globe2', title: 'AMERICAS & BEYOND', desc: 'Be part of a movement that goes further.' },
];

export const RegionalOpportunityGrid: React.FC = () => {
  return (
    <section id="regional-opportunity" className="relative py-28 bg-midnight overflow-hidden border-t border-navy-border/50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl glass-panel glass-panel-hover border border-navy-border/60 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-urban-blue/20 border border-urban-blue/40 flex items-center justify-center text-urban-light text-2xl mb-5">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <h3 className="text-base font-extrabold uppercase tracking-wider text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="/regional-licensing"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-urban-blue via-urban-electric to-urban-light text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-urban-blue/40 hover:scale-[1.03] transition-all flex items-center gap-2"
          >
            <span>BECOME A REGIONAL LICENSED OPERATOR</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
