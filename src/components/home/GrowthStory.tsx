import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { icon: 'bi-globe-americas', value: '3', label: 'CONTINENTS', sub: 'Presence in the Americas & Caribbean' },
  { icon: 'bi-phone', value: '500K+', label: 'APP DOWNLOADS', sub: 'More than 500 thousand' },
  { icon: 'bi-person-badge', value: '300K+', label: 'REGISTERED DRIVERS', sub: 'More than 300 thousand' },
  { icon: 'bi-signpost-split', value: '300+', label: 'CITIES', sub: 'Operating in Brazil and Paraguay' },
];

export const GrowthStory: React.FC = () => {
  return (
    <section id="our-numbers" className="relative py-28 bg-midnight overflow-hidden border-t border-navy-border/50">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity brightness-75 contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/90 to-midnight" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            URBAN <span className="text-gradient-blue font-black">A STORY OF GROWTH</span>
          </h2>
          <p className="mt-6 text-lg text-ice/90 max-w-3xl mx-auto leading-relaxed">
            Throughout its journey, URBAN has established itself as a mobility platform in constant evolution,
            expanding its reach and connecting drivers and passengers through technology.
          </p>
        </motion.div>

        <div className="mt-16">
          <span className="text-xs font-bold uppercase tracking-widest text-urban-light">Our Numbers</span>
        </div>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-navy-border/60"
            >
              <div className="w-11 h-11 mx-auto rounded-lg bg-urban-blue/20 border border-urban-blue/40 flex items-center justify-center text-urban-light text-xl mb-4">
                <i className={`bi ${stat.icon}`}></i>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-urban-light">{stat.label}</div>
              <div className="mt-1 text-xs text-muted">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-sm sm:text-base text-muted max-w-3xl mx-auto leading-relaxed"
        >
          With this solid experience, URBAN begins a new cycle of international expansion, bringing its business
          model to the United States, with a strategic growth plan for the Americas and the Caribbean.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-2xl sm:text-4xl font-extrabold tracking-tight text-white"
        >
          TECHNOLOGY. MOBILITY. <span className="text-gradient-blue font-black">OPPORTUNITIES.</span>
        </motion.h3>
        <p className="mt-3 text-sm sm:text-base text-muted">A platform built by experience, prepared for the future.</p>
      </div>
    </section>
  );
};
