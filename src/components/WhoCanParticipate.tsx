import React from 'react';
import { motion } from 'framer-motion';

export const WhoCanParticipate: React.FC = () => {
  const audiences = [
    {
      title: 'RIDESHARE DRIVERS',
      subtitle: 'From Wheels to Equity',
      description: 'Experienced drivers looking to transition from per-trip driving to owning and operating their regional territory.',
      icon: 'bi-car-front-fill',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'LOCAL ENTREPRENEURS',
      subtitle: 'Tech-Enabled Business',
      description: 'Visionary local business leaders seeking a scalable mobility platform model to lead in their local city.',
      icon: 'bi-briefcase-fill',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'FLEET MANAGERS',
      subtitle: 'Asset Optimization',
      description: 'Vehicle fleet owners interested in integrating vehicle groups into a dedicated regional Urban network.',
      icon: 'bi-truck-front-fill',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'REGIONAL INVESTORS',
      subtitle: 'Strategic Expansion',
      description: 'Investors aiming to secure exclusive territorial rights and back founding operator groups in key U.S. markets.',
      icon: 'bi-bank2',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-24 relative bg-midnight overflow-hidden border-t border-navy-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-urban-light bg-urban-blue/10 px-3 py-1 rounded border border-urban-blue/30">
            Target Operator Profile
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white">
            WHO CAN BECOME <br />
            <span className="text-gradient-blue">AN URBAN OPERATOR?</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
            Urban is designed for people who want to do more than participate in mobility — they want to help build it.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, idx) => (
            <motion.div
              key={aud.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={aud.image}
                  alt={aud.title}
                  className="w-full h-full object-cover mix-blend-luminosity brightness-75 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
                
                <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-midnight/80 backdrop-blur-md border border-urban-electric/30 flex items-center justify-center text-urban-light text-xl">
                  <i className={`bi ${aud.icon}`}></i>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-urban-light uppercase tracking-wider">
                    {aud.subtitle}
                  </span>
                  <h3 className="text-base font-extrabold text-white mt-1 group-hover:text-urban-light transition-colors">
                    {aud.title}
                  </h3>
                  <p className="mt-3 text-xs text-muted leading-relaxed">
                    {aud.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-border/40 flex items-center justify-between text-xs font-semibold text-white group-hover:text-urban-light">
                  <span>Apply for Licensing</span>
                  <i className="bi bi-chevron-right text-xs"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
