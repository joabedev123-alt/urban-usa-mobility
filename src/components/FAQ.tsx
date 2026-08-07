import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'What is an Urban regional license?',
      answer: 'An Urban regional license grants qualified operators the right to operate and develop the Urban mobility technology ecosystem within an assigned exclusive county or metropolitan territory in the United States.',
      category: 'General',
    },
    {
      question: 'Who can apply?',
      answer: 'Rideshare drivers, local entrepreneurs, vehicle fleet managers, and regional investor groups who aim to build tech-enabled mobility operations in their communities can apply.',
      category: 'Eligibility',
    },
    {
      question: 'Do I need to be a current rideshare driver?',
      answer: 'No. While experienced rideshare drivers bring valuable operational insight, local business owners, fleet managers, and investors are equally eligible to apply for regional licensing rights.',
      category: 'Eligibility',
    },
    {
      question: 'Is the territory exclusive?',
      answer: 'Yes. Upon approval and execution of official licensing agreements, granted regional territories are exclusive to the assigned operator or operator group within specified county boundaries.',
      category: 'Territory',
    },
    {
      question: 'What support does Urban provide?',
      answer: 'Urban provides turnkey mobile passenger and driver applications, dispatch technology, operator training playbooks, localized marketing frameworks, and continuous 24/7 technical and strategic operational support.',
      category: 'Support',
    },
    {
      question: 'How does the application process work?',
      answer: 'The process begins by submitting your territorial request form. Our expansion team evaluates county availability, conducts initial candidate screening, and guides approved applicants through licensing presentation and homologation.',
      category: 'Process',
    },
    {
      question: 'Can a group acquire a regional license?',
      answer: 'Yes. Founding groups, driver co-ops, and investor syndicates can apply collectively to pool capabilities and jointly operate an assigned regional territory.',
      category: 'Ownership',
    },
    {
      question: 'Which U.S. territories are available?',
      answer: 'Initial priority territories are open across selected high-demand states including Florida, Texas, Georgia, North Carolina, and Tennessee, alongside expanding regional markets nationwide.',
      category: 'Territory',
    },
    {
      question: 'How do I learn about investment requirements?',
      answer: 'Specific terms and capital requirements are presented during the licensing process following territorial availability verification.',
      category: 'Investment',
    },
    {
      question: 'What happens after I submit my application?',
      answer: 'Our regional licensing team will review your requested county, verify territorial availability, and contact you directly to schedule an introductory briefing.',
      category: 'Process',
    },
  ];

  return (
    <section id="faq" className="py-24 relative bg-navy-deep/40 overflow-hidden border-t border-navy-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-urban-light bg-urban-blue/10 px-3 py-1 rounded border border-urban-blue/30">
            Clear Answers
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white">
            FREQUENTLY ASKED <span className="text-gradient-blue">QUESTIONS</span>
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base">
            Everything you need to know about the Urban USA regional mobility licensing model.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-14 space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="rounded-2xl glass-panel border border-navy-border overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-navy-card/50 transition-colors"
                >
                  <span className="text-base font-bold text-white flex items-center gap-3">
                    <span className="text-xs font-mono text-urban-light">0{idx + 1}.</span>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-midnight border border-navy-border flex items-center justify-center text-urban-light transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-urban-blue text-white' : ''
                  }`}>
                    <i className="bi bi-chevron-down text-sm"></i>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-muted leading-relaxed border-t border-navy-border/40">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
