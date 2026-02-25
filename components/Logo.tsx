import React from 'react';

interface LogoProps {
  className?: string;
  isSmall?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", isSmall = false }) => {
  return (
    <div className={`flex items-center ${className} group select-none`}>
      <div className="relative">
        <svg 
          width={isSmall ? "42" : "64"} 
          height={isSmall ? "42" : "64"} 
          viewBox="0 0 160 160" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
        >
          {/* Base */}
          <rect x="10" y="10" width="140" height="140" rx="35" fill="#8F7BC8" />
          
          {/* Network Elements */}
          <circle cx="45" cy="45" r="22" fill="#8F7BC8" />
          <circle cx="115" cy="45" r="22" fill="#8F7BC8" />
          <circle cx="45" cy="115" r="22" fill="#8F7BC8" />
          
          <rect x="45" y="32" width="70" height="26" fill="#8F7BC8" />
          <rect x="32" y="45" width="26" height="70" fill="#8F7BC8" />
          
          {/* Visual Accents */}
          <path 
            d="M150 50V125C150 138.807 138.807 150 125 150H50C70 145 95 125 105 100C115 75 130 60 150 50Z" 
            fill="white" 
            fillOpacity="0.2"
          />

          <path 
            d="M150 50C130 60 115 75 105 100C95 125 70 145 50 150" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinecap="round"
            strokeOpacity="0.4"
          />
        </svg>
      </div>
      
      <div className="ml-3 flex flex-col justify-center leading-[0.85]">
        <div className="text-2xl md:text-3xl font-black tracking-tighter text-white">
          <span className="text-white">AdNex</span>
          <span className="block mt-0.5 text-[#8F7BC8]">PRO</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;