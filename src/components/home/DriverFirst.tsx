import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { icon: 'bi-cash-coin', title: 'Fair Rates', desc: 'Competitive earnings on every ride, with no hidden cuts.' },
  { icon: 'bi-eye', title: 'Transparent Earnings', desc: 'Know exactly what you make, ride by ride, in real time.' },
  { icon: 'bi-headset', title: 'Real Human Support', desc: 'A support team that answers — 24 hours, every day.' },
  { icon: 'bi-clock-history', title: 'Flexible Schedule', desc: 'Drive when it works for you. Your time, your rules.' },
];

export const DriverFirst: React.FC = () => {
  return (
    <section id="driver-first" className="relative py-24 bg-midnight overflow-hidden border-t border-navy-border/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-urban-blue/10 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl p-1 bg-gradient-to-b from-navy-border/60 to-navy-card/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden order-2 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[4/3]">
              <img
                src="/driver-first.jpg"
                alt="URBAN driver ready to accept a ride"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-midnight/40 via-transparent to-transparent" />

              {/* Overlay UI Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 p-4 rounded-xl bg-midnight/80 backdrop-blur-md border border-urban-electric/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-urban-blue/20 border border-urban-blue/40 flex items-center justify-center text-urban-light text-xl">
                    <i className="bi bi-person-check-fill"></i>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Driver-First, Always</div>
                    <div className="text-[11px] text-muted">Real people. Real rides. Real earnings.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-urban-light">Built for Drivers</span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              A PLATFORM THAT <br />
              <span className="text-gradient-blue font-black">PUTS DRIVERS FIRST.</span>
            </h2>
            <p className="mt-6 text-lg text-ice/90 max-w-xl leading-relaxed">
              Fair rates, transparent earnings, and real human support — every ride, every day. URBAN was
              built so drivers keep more of what they earn and never drive alone.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl glass-panel glass-panel-hover border border-navy-border/60"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-urban-blue/20 border border-urban-blue/40 flex items-center justify-center text-urban-light text-lg">
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{f.title}</div>
                    <div className="text-xs text-muted mt-0.5 leading-relaxed">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#download-app"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-urban-blue to-urban-electric text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-urban-blue/30 hover:shadow-urban-blue/50 hover:scale-[1.02] transition-all"
              >
                <span>JOIN AS A DRIVER</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
