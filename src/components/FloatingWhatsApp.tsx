import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const message = encodeURIComponent(
    'Hello Urban team! I would like more information about regional licensing opportunities in the United States.'
  );
  const whatsappUrl = `https://wa.me/14077261547?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Tooltip */}
      <div className="hidden sm:flex items-center px-3 py-1.5 rounded-lg bg-midnight/90 backdrop-blur-md border border-emerald-500/30 text-white text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Talk to Urban</span>
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Urban team on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all hover:scale-110 focus:outline-none"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
        <i className="bi bi-whatsapp text-2xl relative z-10"></i>
      </a>
    </div>
  );
};
