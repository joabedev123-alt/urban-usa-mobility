import React from 'react';

interface UrbanLogoProps {
  className?: string;
  sizeCm?: string;
}

export const UrbanLogo: React.FC<UrbanLogoProps> = ({
  className = "",
  sizeCm,
}) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Official Urban Logo Image Only */}
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-midnight shrink-0 ${
          sizeCm ? '' : 'w-10 h-10 sm:w-[2cm] sm:h-auto sm:max-h-[2cm]'
        }`}
        style={sizeCm ? { width: sizeCm, height: 'auto', maxHeight: sizeCm } : undefined}
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
