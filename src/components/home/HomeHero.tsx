import React from 'react';
import { motion } from 'framer-motion';

const DRIVER_APP_STORE_URL = 'https://apps.apple.com/us/app/urban-driver-for-drivers/id1515298608';
const DRIVER_GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=production.urban.driver&hl=en-US';

const StoreBadge: React.FC<{ icon: string; eyebrow: string; label: string; href: string }> = ({ icon, eyebrow, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 hover:border-urban-electric/50 hover:bg-white/10 transition-all"
  >
    <i className={`bi ${icon} text-xl text-white`}></i>
    <div className="text-left leading-tight">
      <div className="text-[9px] text-muted uppercase tracking-wider">{eyebrow}</div>
      <div className="text-sm font-bold text-white">{label}</div>
    </div>
  </a>
);

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-midnight">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-[center_top_60%] sm:bg-center"
          style={{ backgroundImage: `url('/hero-bg.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-card/80 border border-urban-electric/30 backdrop-blur-md mb-6 shadow-xl"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-urban-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-urban-light"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-urban-light uppercase">
                Now expanding across the United States
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
            >
              DRIVE. EARN. <br />
              <span className="text-gradient-blue font-black">OWN YOUR TIME.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-ice/90 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              The URBAN app: fair rates, transparent earnings, and real human support — every ride, every day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#driver-first"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-urban-blue to-urban-electric text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-urban-blue/30 hover:shadow-urban-blue/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>JOIN AS A DRIVER</span>
                <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <StoreBadge icon="bi-apple" eyebrow="Download on the" label="App Store" href={DRIVER_APP_STORE_URL} />
              <StoreBadge icon="bi-google-play" eyebrow="Get it on" label="Google Play" href={DRIVER_GOOGLE_PLAY_URL} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-6 text-xs text-muted/80 flex items-center justify-center lg:justify-start gap-2"
            >
              <i className="bi bi-shield-check text-urban-light"></i>
              <span>Rated 4.8+ by drivers already on the road with URBAN.</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative mx-auto w-full max-w-[280px] lg:max-w-[340px]"
          >
            <img
              src="/hero-phone.png"
              alt="URBAN driver app dashboard showing today's earnings"
              className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(10,77,255,0.25)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
