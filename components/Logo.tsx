
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", iconOnly = false }) => {
  const [imgError, setImgError] = useState(false);

  // High-quality SVG Fallback (A stylized Eye + Shield hybrid for Sahasrakshi)
  const SvgLogo = () => (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-full h-full drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
    >
      <path 
        d="M50 5L15 20V45C15 66.5 30 86.5 50 95C70 86.5 85 66.5 85 45V20L50 5Z" 
        className="fill-slate-900 stroke-cyan-500" 
        strokeWidth="4"
      />
      <circle cx="50" cy="45" r="18" className="stroke-cyan-400" strokeWidth="3" />
      <circle cx="50" cy="45" r="8" className="fill-cyan-500 animate-pulse" />
      <path 
        d="M32 45C32 45 38 35 50 35C62 35 68 45 68 45" 
        className="stroke-cyan-300" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <path 
        d="M32 45C32 45 38 55 50 55C62 55 68 45 68 45" 
        className="stroke-cyan-300" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
    </svg>
  );

  return (
    <div className={`flex items-center gap-3 ${iconOnly ? '' : 'group cursor-pointer'}`}>
      <div className={`${className} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
        {!imgError ? (
          <img 
            src="Images/logo.png" 
            alt="Sahasrakshi Logo" 
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <SvgLogo />
        )}
      </div>
      {!iconOnly && (
        <div className="flex flex-col">
          <span className="text-white font-bold tracking-tighter text-xl leading-none group-hover:text-cyan-400 transition-colors uppercase">
            SAHASRAKSHI
          </span>
          <span className="text-cyan-500 text-[10px] tracking-[0.3em] font-bold uppercase opacity-80">
            Global Services
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
