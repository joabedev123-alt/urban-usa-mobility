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
        className="relative flex items-center justify-center overflow-hidden rounded-xl bg-midnight shrink-0"
        style={{ width: sizeCm, height: 'auto', maxHeight: sizeCm }}
      >
        <img 
          src="/logo.png"
          alt="URBAN Logo" 
          className="w-full h-full object-contain brightness-105 contrast-105"
        />
      </div>
    </div>
  );
};
