import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Dark base with noise texture */}
      <div className="absolute inset-0 bg-black opacity-90" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary rotating layer */}
        <div className="absolute -top-[25%] -left-[25%] w-[150%] h-[150%] animate-slow-spin">
          <div className="absolute top-[40%] left-[30%] w-[30rem] h-[30rem] rounded-full bg-emerald-500/20 blur-[128px]" />
          <div className="absolute top-[60%] left-[60%] w-[35rem] h-[35rem] rounded-full bg-yellow-500/20 blur-[128px]" />
          <div className="absolute top-[20%] left-[45%] w-[25rem] h-[25rem] rounded-full bg-emerald-400/20 blur-[128px]" />
        </div>
        
        {/* Counter-rotating layer */}
        <div className="absolute -top-[25%] -left-[25%] w-[150%] h-[150%] animate-slow-spin-reverse">
          <div className="absolute top-[35%] left-[40%] w-[28rem] h-[28rem] rounded-full bg-emerald-600/10 blur-[128px]" />
          <div className="absolute top-[55%] left-[50%] w-[32rem] h-[32rem] rounded-full bg-yellow-600/10 blur-[128px]" />
        </div>
      </div>

      {/* Mystical symbols layer */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-emerald-500/20 rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-24 h-24 border border-yellow-500/20 rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border-2 border-emerald-400/20 rounded-full animate-pulse" />
      </div>

      {/* Grid overlay with radial fade */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ 
          maskImage: 'radial-gradient(circle at center, transparent, black)',
          WebkitMaskImage: 'radial-gradient(circle at center, transparent, black)'
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }}
      />
    </div>
  );
};

export default Background;