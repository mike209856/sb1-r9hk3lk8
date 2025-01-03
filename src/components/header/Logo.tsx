import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400 to-yellow-400 animate-pulse opacity-50 blur-sm" />
        <div className="relative h-12 w-12 rounded-lg ring-2 ring-emerald-500 overflow-hidden transition-transform duration-300 group-hover:scale-105">
          <img 
            src="/shifu-logo.png"
            alt="Shifu Red Panda" 
            className="h-full w-full object-contain transform transition-transform group-hover:scale-110"
          />
        </div>
      </div>
      <span className="text-2xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-yellow-400 tracking-wider group-hover:opacity-80 transition-opacity">
        SHIFU A.I.
      </span>
    </Link>
  );
};

export default Logo;