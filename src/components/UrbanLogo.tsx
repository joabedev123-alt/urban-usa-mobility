import React from 'react';

interface UrbanLogoProps {
  className?: string;
  sizeCm?: string;
}

export const UrbanLogo: React.FC<UrbanLogoProps> = ({ 
  className = "", 
  sizeCm = "3cm"
}) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Official Urban Logo Image Only */}
      <div 
        className="relative flex items-center justify-center overflow-hidden rounded-xl border border-urban-electric/40 shadow-lg shadow-urban-blue/20 bg-midnight shrink-0 group hover:border-urban-light transition-all"
        style={{ width: sizeCm, height: 'auto', maxHeight: sizeCm }}
      >
        <img 
          src="/logo.jpeg"
          alt="URBAN Logo" 
          className="w-full h-full object-contain brightness-105 contrast-105"
        />
      </div>
    </div>
  );
};
