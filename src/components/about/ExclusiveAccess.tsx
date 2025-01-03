import React from 'react';
import { Lock } from 'lucide-react';

const ExclusiveAccess = () => {
  return (
    <div className="mb-12 relative group">
      {/* Hover effect background */}
      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/10 to-yellow-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
      
      <div className="relative bg-black/30 rounded-lg p-6 border border-emerald-500/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <Lock className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-emerald-400">Exclusive Access</h2>
        </div>
        <p className="text-emerald-200">
          Shifu A.I. operates on an exclusive, invite-only basis. Our carefully curated community ensures
          focused guidance and personalized attention for each member's trading journey.
        </p>
      </div>
    </div>
  );
};

export default ExclusiveAccess;