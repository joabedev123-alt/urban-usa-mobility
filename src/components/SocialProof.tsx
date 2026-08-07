import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 relative bg-navy-deep/30 overflow-hidden border-t border-navy-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-urban-light bg-urban-blue/10 px-3 py-1 rounded border border-urban-blue/30">
            Regional Network Spotlight
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
            WHAT FOUNDING <span className="text-gradient-blue">OPERATORS ARE BUILDING.</span>
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base">
            As Urban inaugural regional licensing unfolds across the United States, verified operator spotlights and inaugural case studies will be featured here.
          </p>
        </div>

        {/* Structured Placeholder Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-8 rounded-2xl glass-panel border border-dashed border-navy-border/80 flex flex-col items-center justify-center text-center min-h-[220px]"
            >
              <div className="w-12 h-12 rounded-full bg-navy-card border border-navy-border flex items-center justify-center text-muted text-xl mb-4">
                <i className="bi bi-person-fill-gear"></i>
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                FOUNDER STORY COMING SOON
              </h3>
              <p className="mt-2 text-xs text-muted max-w-xs">
                Inaugural regional operator profiles will be published following official market launch approval.
              </p>
              <span className="mt-4 text-[10px] font-mono text-urban-light uppercase tracking-widest">
                VERIFIED URBAN USA COUNTY OPERATOR
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
