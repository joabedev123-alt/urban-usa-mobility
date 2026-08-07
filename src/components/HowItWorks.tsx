import React from 'react';
import { motion } from 'framer-motion';
import { StepItem } from '../types';

export const HowItWorks: React.FC = () => {
  const steps: StepItem[] = [
    {
      number: '01',
      title: 'Choose Your Region',
      description: 'Select your county or metropolitan area to verify regional licensing availability.',
      icon: 'bi-geo-alt',
    },
    {
      number: '02',
      title: 'Apply for Licensing',
      description: 'Submit your operational profile and territorial interest for evaluation.',
      icon: 'bi-file-earmark-check',
    },
    {
      number: '03',
      title: 'Build or Join a Founding Group',
      description: 'Operate individually or assemble key driver-investors for your regional market.',
      icon: 'bi-people',
    },
    {
      number: '04',
      title: 'Receive Training & Approval',
      description: 'Complete Urban operational homologation and platform initialization training.',
      icon: 'bi-mortarboard',
    },
    {
      number: '05',
      title: 'Launch Your Urban Operation',
      description: 'Activate your exclusive territory and roll out regional marketing & fleet recruitment.',
      icon: 'bi-rocket-takeoff',
    },
    {
      number: '06',
      title: 'Grow Your Local Network',
      description: 'Expand passenger acquisition, optimize local fleet density, and scale operations.',
      icon: 'bi-graph-up-arrow',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-midnight overflow-hidden border-t border-navy-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-urban-light bg-urban-blue/10 px-3 py-1 rounded border border-urban-blue/30">
            Step-by-Step Path
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white">
            HOW IT <span className="text-gradient-blue">WORKS</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
            A structured, clear roadmap to initialize, launch, and expand your regional Urban mobility operation.
          </p>
        </div>

        {/* Desktop Horizontal View */}
        <div className="hidden lg:block mt-20 relative">
          {/* Animated Connecting Blue Line */}
          <div className="absolute top-12 left-10 right-10 h-0.5 bg-navy-border">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-urban-blue via-urban-electric to-urban-light origin-left shadow-[0_0_12px_#1677FF]"
            />
          </div>

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-2xl bg-midnight border border-navy-border group-hover:border-urban-electric group-hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center shadow-xl relative glass-panel mb-6">
                  <span className="text-[10px] font-mono font-bold text-urban-light mb-1">
                    {step.number}
                  </span>
                  <i className={`bi ${step.icon} text-2xl text-white group-hover:text-urban-light transition-colors`}></i>
                </div>

                <h3 className="text-sm font-extrabold text-white group-hover:text-urban-light transition-colors line-clamp-2 h-10 flex items-center">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden mt-14 relative pl-6 border-l-2 border-navy-border space-y-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6"
            >
              {/* Dot Marker */}
              <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-midnight border-2 border-urban-electric flex items-center justify-center text-[10px] font-bold text-urban-light">
                {step.number}
              </div>

              <div className="p-5 rounded-xl glass-panel border border-navy-border">
                <div className="flex items-center gap-3 mb-2">
                  <i className={`bi ${step.icon} text-xl text-urban-light`}></i>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
