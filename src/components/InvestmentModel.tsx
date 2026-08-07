import React from 'react';
import { motion } from 'framer-motion';

export const InvestmentModel: React.FC = () => {
  const structureCards = [
    {
      title: 'INDIVIDUAL PARTICIPATION',
      description: 'Direct regional licensing application for qualified individual drivers and entrepreneurs seeking single-operator territory rights.',
      icon: 'bi-person-badge',
    },
    {
      title: 'GROUP STRUCTURE',
      description: 'Collaborative licensing structure allowing local driver groups, co-ops, or partners to pool resources and operate collectively.',
      icon: 'bi-people-fill',
    },
    {
      title: 'REGIONAL IMPLEMENTATION',
      description: 'Modular rollout framework designed for streamlined initial capital outlay and structured local setup timelines.',
      icon: 'bi-kanban',
    },
    {
      title: 'SCALABLE OPERATION',
      description: 'Operating model engineered to dynamically scale infrastructure as local driver adoption and passenger rides multiply.',
      icon: 'bi-graph-up',
    },
  ];

  const comparisons = [
    {
      category: 'Entry Structure',
      traditional: 'High rigid upfront franchise fees & legacy overhead',
      urban: 'Accessible territorial licensing model designed for operators',
    },
    {
      category: 'Technology',
      traditional: 'Costly third-party licensing or fragmented software',
      urban: 'Turnkey enterprise Urban driver & passenger platform',
    },
    {
      category: 'Territory',
      traditional: 'Non-protected overlapping retail zones',
      urban: 'Exclusive assigned county / regional operating scope',
    },
    {
      category: 'Operational Model',
      traditional: 'Top-down strict corporate mandates',
      urban: 'Local autonomy backed by national framework & support',
    },
    {
      category: 'Growth Potential',
      traditional: 'Limited to single physical location throughput',
      urban: 'Scalable regional digital network effect across full county',
    },
    {
      category: 'Community Development',
      traditional: 'Outsourced profits leave local economy',
      urban: 'Value recirculates directly within local driver & business ecosystem',
    },
  ];

  return (
    <section className="py-24 relative bg-navy-deep/60 overflow-hidden border-t border-navy-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-urban-light bg-urban-blue/10 px-3 py-1 rounded border border-urban-blue/30">
            Conceptual Business Framework
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white">
            ACCESSIBLE INVESTMENT. <br />
            <span className="text-gradient-blue">POWERFUL IMPACT.</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
            Urban structures regional licensing to lower barriers to entry while empowering operators with institutional platform technology.
          </p>
        </div>

        {/* 4 Premium Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {structureCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-midnight border border-urban-electric/30 flex items-center justify-center text-urban-light text-2xl mb-4">
                  <i className={`bi ${card.icon}`}></i>
                </div>
                <h3 className="text-sm font-extrabold text-white tracking-wide">
                  {card.title}
                </h3>
                <p className="mt-3 text-xs text-muted leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-border/40 text-[10px] font-mono text-urban-light">
                URBAN LICENSING MODULE
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table: Traditional Franchise vs Urban Licensing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-2xl glass-panel border border-navy-border overflow-hidden p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-border pb-6">
            <div>
              <h3 className="text-xl font-bold text-white">MODEL COMPARISON</h3>
              <p className="text-xs text-muted mt-1">Understanding the Urban Regional Licensing advantage</p>
            </div>

            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-urban-blue hover:bg-urban-electric text-white text-xs font-bold uppercase tracking-wider transition-colors self-start sm:self-auto"
            >
              <span>REQUEST LICENSING PRESENTATION</span>
              <i className="bi bi-file-earmark-pdf"></i>
            </a>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-navy-border text-xs uppercase tracking-wider text-muted">
                  <th className="py-4 px-4 font-semibold w-1/4">Category</th>
                  <th className="py-4 px-4 font-semibold w-5/12 text-muted">Traditional Franchise</th>
                  <th className="py-4 px-4 font-semibold w-5/12 text-urban-light">Urban Regional Licensing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-border/50 text-xs">
                {comparisons.map((row) => (
                  <tr key={row.category} className="hover:bg-midnight/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">{row.category}</td>
                    <td className="py-4 px-4 text-muted/80">{row.traditional}</td>
                    <td className="py-4 px-4 text-ice font-medium flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-urban-light text-sm shrink-0"></i>
                      <span>{row.urban}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
