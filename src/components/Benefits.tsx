import React from 'react';
import { motion } from 'framer-motion';
import { BenefitItem } from '../types';

export const Benefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      id: 'territory',
      title: 'EXCLUSIVE TERRITORY',
      description: 'Develop an assigned regional market with defined local growth potential and protected boundary scope.',
      icon: 'bi-geo-alt-fill',
      badge: 'Territorial Contract',
    },
    {
      id: 'tech',
      title: 'COMPLETE TECH PLATFORM',
      description: "Access Urban's enterprise mobility technology, dispatch engine, and automated operating ecosystem.",
      icon: 'bi-cpu-fill',
      badge: 'Cloud Infrastructure',
    },
    {
      id: 'apps',
      title: 'DRIVER & PASSENGER APPS',
      description: 'Native mobile software engineered to optimize rider conversion, driver retention, and dispatch density.',
      icon: 'bi-phone-fill',
      badge: 'iOS & Android',
    },
    {
      id: 'training',
      title: 'OPERATIONAL TRAINING',
      description: 'Receive comprehensive onboarding, leadership playbook guidance, and local operation setup training.',
      icon: 'bi-mortarboard-fill',
      badge: 'Operator Academy',
    },
    {
      id: 'support',
      title: 'ONGOING SUPPORT',
      description: 'Access continuous technical, operational, customer success, and strategic business development assistance.',
      icon: 'bi-headset',
      badge: '24/7 Ops Channel',
    },
    {
      id: 'marketing',
      title: 'LOCAL MARKETING STRATEGIES',
      description: 'Deploy localized promotional toolkits, driver recruitment funnels, and regional passenger campaigns.',
      icon: 'bi-megaphone-fill',
      badge: 'Growth Funnels',
    },
    {
      id: 'scalable',
      title: 'SCALABLE GROWTH',
      description: 'Expand your fleet footprint, scale passenger adoption, and develop long-term enterprise equity in your region.',
      icon: 'bi-graph-up-arrow',
      badge: 'Recurrent Scale',
    },
    {
      id: 'network',
      title: 'NATIONAL NETWORK',
      description: 'Connect and collaborate with a growing national coalition of executive Urban regional operators across America.',
      icon: 'bi-globe-americas',
      badge: 'US Operator Network',
    },
  ];

  return (
    <section id="benefits" className="py-24 relative bg-navy-deep/40 overflow-hidden border-t border-navy-border/40">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-urban-blue/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-urban-light bg-urban-blue/10 px-3 py-1 rounded border border-urban-blue/30">
            Ownership Value Drivers
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white">
            THE ADVANTAGES OF <br />
            <span className="text-gradient-blue">BEING AN OWNER.</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
            Urban provides the complete technology, framework, and support required to operate a successful regional mobility business.
          </p>
        </div>

        {/* Interactive Grid of 8 Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl p-6 glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Header row with icon & badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-midnight border border-urban-electric/30 flex items-center justify-center text-urban-light text-2xl group-hover:scale-110 group-hover:text-white transition-all shadow-md">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-urban-blue/15 text-urban-light border border-urban-blue/30">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-extrabold text-white group-hover:text-urban-light transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-border/50 flex items-center justify-between text-[11px] text-muted group-hover:text-ice transition-colors">
                <span>Urban Ecosystem</span>
                <i className="bi bi-arrow-right text-urban-light group-hover:translate-x-1 transition-transform"></i>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
