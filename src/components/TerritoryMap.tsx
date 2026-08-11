import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerritoryState } from '../types';

export const TerritoryMap: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<TerritoryState | null>(null);

  const featuredStates: TerritoryState[] = [
    { 
      id: 'FL', 
      name: 'Florida', 
      code: 'FL', 
      status: 'Featured', 
      licensedCount: 4, 
      availableCount: 12, 
      highlighted: true,
      coords: { left: '79%', top: '78%' } 
    },
    { 
      id: 'TX', 
      name: 'Texas', 
      code: 'TX', 
      status: 'High Demand', 
      licensedCount: 8, 
      availableCount: 18, 
      highlighted: true,
      coords: { left: '47%', top: '68%' } 
    },
    { 
      id: 'GA', 
      name: 'Georgia', 
      code: 'GA', 
      status: 'Featured', 
      licensedCount: 3, 
      availableCount: 9, 
      highlighted: true,
      coords: { left: '74%', top: '62%' } 
    },
    { 
      id: 'NC', 
      name: 'North Carolina', 
      code: 'NC', 
      status: 'Available', 
      licensedCount: 2, 
      availableCount: 10, 
      highlighted: true,
      coords: { left: '79%', top: '48%' } 
    },
    { 
      id: 'TN', 
      name: 'Tennessee', 
      code: 'TN', 
      status: 'Available', 
      licensedCount: 1, 
      availableCount: 8, 
      highlighted: true,
      coords: { left: '67%', top: '52%' } 
    },
    { 
      id: 'CA', 
      name: 'California', 
      code: 'CA', 
      status: 'Under Review', 
      licensedCount: 5, 
      availableCount: 25,
      coords: { left: '16%', top: '45%' } 
    },
    { 
      id: 'NY', 
      name: 'New York', 
      code: 'NY', 
      status: 'Under Review', 
      licensedCount: 6, 
      availableCount: 14,
      coords: { left: '83%', top: '32%' } 
    },
    {
      id: 'MA',
      name: 'Massachusetts',
      code: 'MA',
      status: 'Available',
      licensedCount: 2,
      availableCount: 11,
      coords: { left: '86%', top: '27%' }
    },
  ];

  const filteredStates = featuredStates.filter(st => 
    st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    st.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="territories" className="py-24 relative bg-midnight overflow-hidden border-t border-navy-border/40">
      {/* Blue Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-urban-blue/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-urban-light bg-urban-blue/10 px-3 py-1 rounded border border-urban-blue/30">
            Real USA Territorial Satellite View
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white">
            CHOOSE <span className="text-gradient-blue">YOUR REGION.</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
            Explore regional mobility licensing availability across key United States markets on the real USA satellite grid.
          </p>
        </div>

        {/* Search / Selector Input */}
        <div className="mt-10 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <i className="bi bi-search absolute left-4 text-muted text-lg"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ENTER YOUR CITY OR COUNTY (e.g. Orlando, FL or Dallas, TX)..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-navy-card/90 border border-navy-border focus:border-urban-electric text-white placeholder-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-urban-electric/40 shadow-xl transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-muted hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Satellite Map Container */}
        <div className="mt-12 relative rounded-3xl glass-panel border border-navy-border p-4 sm:p-8 overflow-hidden shadow-2xl">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 px-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Focus States:</span>
              {['FL', 'TX', 'GA', 'NC', 'TN'].map(code => (
                <button
                  key={code}
                  onClick={() => {
                    const st = featuredStates.find(s => s.code === code);
                    if (st) setSelectedState(st);
                  }}
                  className="px-3 py-1 rounded bg-urban-blue/20 text-urban-light border border-urban-blue/40 text-xs font-bold hover:bg-urban-blue hover:text-white transition-colors"
                >
                  {code} - Open
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-urban-electric animate-ping"></span>
                <span className="text-white font-semibold">Active Territory Pin</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-midnight border border-navy-border text-[10px] font-mono text-urban-light">
                SATELLITE ORBIT VIEW
              </div>
            </div>
          </div>

          {/* Real US Satellite View Map Graphic */}
          <div className="relative aspect-[16/9] w-full min-h-[420px] rounded-2xl overflow-hidden border border-navy-border/80 shadow-2xl bg-midnight">
            
            {/* Real NASA / Unsplash Satellite US Background Image */}
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
              alt="United States Real Satellite View"
              className="w-full h-full object-cover mix-blend-luminosity brightness-75 contrast-125 scale-105"
            />

            {/* Dark Blue Oceanic & Atmospheric Color Grading Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-transparent to-midnight/80" />
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#1677FF_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Positioned State Pins with Illuminated Glowing Pulsing Markers */}
            {featuredStates.map((st) => (
              <div
                key={st.id}
                style={{ left: st.coords?.left || '50%', top: st.coords?.top || '50%' }}
                onClick={() => setSelectedState(st)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
              >
                {/* Outer Radar Glow Pulse */}
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-10 h-10 rounded-full bg-urban-electric/40 animate-ping" />
                  <span className="absolute w-6 h-6 rounded-full bg-urban-blue/60 group-hover:scale-150 transition-transform" />
                  <div className="w-4 h-4 rounded-full bg-urban-light border-2 border-white shadow-[0_0_15px_#1677FF] group-hover:bg-white transition-colors" />

                  {/* State Name Floating Label */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md bg-midnight/90 backdrop-blur-md border border-urban-electric/40 text-[10px] font-bold text-white shadow-xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <span>{st.name}</span>
                    <span className="ml-1 text-[9px] text-urban-light font-mono">({st.code})</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Satellite View HUD Overlay Badge */}
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-midnight/90 backdrop-blur-md border border-navy-border flex items-center gap-3">
              <i className="bi bi-globe-americas text-urban-electric text-xl animate-spin-slow"></i>
              <div>
                <div className="text-[10px] font-mono font-bold text-urban-light uppercase">U.S. SATELLITE GRID</div>
                <div className="text-[11px] font-bold text-white">TERRITORIAL MAPPING</div>
              </div>
            </div>

            {/* Selected State Modal/Card Popup */}
            <AnimatePresence>
              {selectedState && (
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  className="absolute inset-x-4 sm:inset-x-auto sm:right-6 bottom-6 p-6 rounded-2xl bg-midnight/95 border border-urban-electric shadow-2xl backdrop-blur-xl max-w-sm z-30"
                >
                  <div className="flex items-center justify-between border-b border-navy-border pb-3 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white flex items-center gap-2">
                        <span>{selectedState.name}</span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-urban-blue/20 text-urban-light border border-urban-blue/30">
                          {selectedState.code}
                        </span>
                      </h4>
                      <p className="text-xs text-urban-light font-semibold mt-0.5">Territorial Availability Active</p>
                    </div>
                    <button 
                      onClick={() => setSelectedState(null)} 
                      className="w-7 h-7 rounded-full bg-navy-card flex items-center justify-center text-muted hover:text-white transition-colors"
                    >
                      <i className="bi bi-x-lg text-xs"></i>
                    </button>
                  </div>
                  
                  <p className="text-xs text-muted leading-relaxed">
                    Exclusive county licensing opportunities in <strong>{selectedState.name}</strong> are currently accepting candidate applications.
                  </p>

                  <div className="mt-4 pt-3 border-t border-navy-border/60 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      Status: Contact Urban
                    </span>
                    <a
                      href="#lead-form"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-urban-blue to-urban-electric text-white text-xs font-bold uppercase transition-transform hover:scale-105 shadow-md shadow-urban-blue/30"
                    >
                      APPLY FOR {selectedState.code}
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Cards Grid for Filtered States */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {filteredStates.map((st) => (
              <div
                key={st.id}
                onClick={() => setSelectedState(st)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedState?.id === st.id || st.highlighted
                    ? 'bg-navy-card/90 border-urban-electric/60 hover:border-urban-light shadow-lg'
                    : 'bg-midnight/60 border-navy-border hover:border-urban-electric/30'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-extrabold text-white">{st.name}</span>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-urban-blue/20 text-urban-light">
                    {st.code}
                  </span>
                </div>
                <div className="text-[11px] text-muted">Licensing Status</div>
                <div className="text-xs font-semibold text-urban-light mt-1 flex items-center gap-1">
                  <i className="bi bi-geo-alt-fill text-urban-light text-[10px]"></i>
                  <span>{st.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-10 text-center">
            <a
              href="#lead-form"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-urban-blue via-urban-electric to-urban-light text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-urban-blue/30 hover:scale-[1.02] transition-all inline-flex items-center gap-2"
            >
              <span>CHECK TERRITORY AVAILABILITY</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
