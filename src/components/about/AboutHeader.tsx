import React from 'react';

const AboutHeader = () => {
  return (
    <div className="text-center mb-12 relative">
      {/* Glowing orb effect */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
      
      <h1 className="relative text-4xl md:text-5xl font-orbitron font-bold bg-gradient-to-r from-emerald-400 to-yellow-400 text-transparent bg-clip-text mb-4">
        About Shifu A.I.
      </h1>
      
      <p className="relative text-emerald-200 max-w-2xl mx-auto">
        Where ancient wisdom meets modern technology, creating a harmonious balance in the world of trading.
      </p>
    </div>
  );
};

export default AboutHeader;