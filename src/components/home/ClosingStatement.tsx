import React from 'react';
import { motion } from 'framer-motion';

export const ClosingStatement: React.FC = () => {
  return (
    <section className="relative py-28 bg-midnight overflow-hidden border-t border-navy-border/50">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity brightness-75 contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/90 to-midnight" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-urban-blue/15 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
        >
          THE FUTURE OF MOBILITY <br />
          <span className="text-gradient-blue font-black">IS BEING BUILT TODAY.</span>
        </motion.h2>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 text-xl sm:text-2xl text-ice/90 font-medium leading-relaxed italic"
        >
          "More than just an app, we are building an ecosystem of opportunities."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="/regional-licensing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-urban-blue via-urban-electric to-urban-light text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-urban-blue/40 hover:scale-[1.03] transition-all"
          >
            <span>EXPLORE THE OPPORTUNITY</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
