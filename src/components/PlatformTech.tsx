import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const PlatformTech: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'passenger' | 'driver' | 'ops'>('driver');

  const tabs = [
    { id: 'driver', label: 'DRIVER NETWORK', icon: 'bi-car-front' },
    { id: 'passenger', label: 'PASSENGER EXPERIENCE', icon: 'bi-person' },
    { id: 'ops', label: 'REGIONAL OPERATIONS', icon: 'bi-speedometer2' },
  ];

  return (
    <section className="py-24 relative bg-navy-deep/40 overflow-hidden border-t border-navy-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-urban-light bg-urban-blue/10 px-3 py-1 rounded border border-urban-blue/30">
            Proprietary Architecture
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white">
            TECHNOLOGY BUILT <br />
            <span className="text-gradient-blue">FOR MOBILITY GROWTH.</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
            Urban delivers an enterprise-grade mobile software suite engineered to connect passengers, empower drivers, and manage regional territories.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-midnight border border-navy-border max-w-full overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-urban-blue text-white shadow-lg shadow-urban-blue/30'
                    : 'text-muted hover:text-white'
                }`}
              >
                <i className={`bi ${tab.icon}`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mockup Showcase Panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl glass-panel border border-navy-border p-6 sm:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-6">
              {activeTab === 'driver' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-urban-blue/15 text-urban-light text-xs font-bold uppercase">
                    Driver-Centric Platform
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Empowering Fleet & Driver Partners
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Designed around driver needs with transparent trip dispatch, optimized routing, clear earnings breakdowns, and regional support connectivity.
                  </p>
                  <ul className="space-y-3 text-xs text-ice">
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-urban-light"></i>
                      <span>Real-time intelligent order matching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-urban-light"></i>
                      <span>Local territory fleet analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-urban-light"></i>
                      <span>In-app safety and direct dispatch communication</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 'passenger' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-urban-blue/15 text-urban-light text-xs font-bold uppercase">
                    Rider Experience
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Premium Rideshare Journey
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Sleek, intuitive mobile interface allowing passengers to book rides seamlessly, track arrivals in real time, and enjoy dependable regional transportation.
                  </p>
                  <ul className="space-y-3 text-xs text-ice">
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-urban-light"></i>
                      <span>Instant & scheduled ride booking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-urban-light"></i>
                      <span>Secure digital payments and receipts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-urban-light"></i>
                      <span>Live GPS tracking & emergency safety features</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 'ops' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-urban-blue/15 text-urban-light text-xs font-bold uppercase">
                    Operator Dashboard
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Regional Operations Control
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Comprehensive administration portal giving regional operators insight into local supply, demand metrics, fleet status, and growth funnels.
                  </p>
                  <ul className="space-y-3 text-xs text-ice">
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-urban-light"></i>
                      <span>County territory analytics overview</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-urban-light"></i>
                      <span>Driver onboarding and homologation tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-urban-light"></i>
                      <span>Marketing performance monitoring</span>
                    </li>
                  </ul>
                </>
              )}
            </div>

            {/* Right Visual Frame Mockup */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-midnight border border-navy-border p-2 shadow-2xl">
                <img
                  src={
                    activeTab === 'driver'
                      ? 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop'
                      : activeTab === 'passenger'
                      ? 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop'
                      : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
                  }
                  alt="Urban Technology Interface"
                  className="w-full h-full object-cover rounded-xl mix-blend-luminosity brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />

                {/* Layered Status Label Cards (No fake numbers!) */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 p-4 rounded-xl bg-midnight/90 backdrop-blur-md border border-urban-electric/30">
                  <div className="flex items-center gap-3">
                    <i className="bi bi-broadcast text-urban-electric text-xl animate-pulse"></i>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">REAL-TIME TECHNOLOGY</div>
                      <div className="text-[10px] text-muted">Cloud Infrastructure • USA Active</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-urban-blue/20 text-urban-light border border-urban-blue/30 font-bold">
                    CONNECTED
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
