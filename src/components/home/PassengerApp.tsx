import React from 'react';
import { motion } from 'framer-motion';

const PASSENGER_APP_STORE_URL = 'https://apps.apple.com/br/app/urban-passenger/id1515298182?l=en-GB';
const PASSENGER_GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=production.urban.customer&hl=en';

const features = [
  { icon: 'bi-geo-alt-fill', label: 'Live ride tracking' },
  { icon: 'bi-credit-card-2-front-fill', label: 'Cashless in-app payments' },
  { icon: 'bi-patch-check-fill', label: 'Verified, rated drivers' },
  { icon: 'bi-shield-check', label: '24/7 safety support' },
];

const StoreBadge: React.FC<{ icon: string; eyebrow: string; label: string; href: string }> = ({ icon, eyebrow, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-navy-card border border-navy-border hover:border-urban-electric/50 hover:bg-navy-card/80 transition-all"
  >
    <i className={`bi ${icon} text-2xl text-white`}></i>
    <div className="text-left leading-tight">
      <div className="text-[10px] text-muted uppercase tracking-wider">{eyebrow}</div>
      <div className="text-sm font-bold text-white">{label}</div>
    </div>
  </a>
);

export const PassengerApp: React.FC = () => {
  return (
    <section id="ride-with-us" className="relative py-24 bg-midnight overflow-hidden border-t border-navy-border/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-urban-blue/10 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto w-full max-w-[300px]">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-urban-blue/20 glow-effect">
                <img
                  src="/passenger-app.jpg"
                  alt="URBAN passenger app tracking an active ride"
                  className="w-full h-auto object-contain"
                />
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
            <span className="text-xs font-bold uppercase tracking-widest text-urban-light">URBAN for Riders</span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              NEED A RIDE? <br />
              <span className="text-gradient-blue font-black">WE'VE GOT YOU COVERED.</span>
            </h2>
            <p className="mt-6 text-lg text-ice/90 max-w-xl leading-relaxed">
              Request a ride in seconds, track your driver in real time, and pay safely in the app —
              wherever you're headed, whenever you need it.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-urban-blue/20 border border-urban-blue/40 flex items-center justify-center text-urban-light text-sm">
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <span className="text-sm text-ice/90">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <StoreBadge icon="bi-apple" eyebrow="Download on the" label="App Store" href={PASSENGER_APP_STORE_URL} />
              <StoreBadge icon="bi-google-play" eyebrow="Get it on" label="Google Play" href={PASSENGER_GOOGLE_PLAY_URL} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
