import React from 'react';
import { Users } from 'lucide-react';

const SpecialAgents = () => {
  const agents = [
    "Agent Po",
    "Agent Tigress",
    "Agent Monkey",
    "Agent Crane",
    "Agent Mantis"
  ];

  return (
    <div className="mb-12 relative group">
      {/* Hover effect background */}
      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/10 to-yellow-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
      
      <div className="relative bg-black/30 rounded-lg p-6 border border-emerald-500/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <Users className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-emerald-400">Special Agents</h2>
        </div>
        <p className="text-emerald-200 mb-4">
          Special Agents are tailored to execute specific tasks and are available to early access users.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="relative group/card"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-yellow-400 rounded-lg opacity-25 group-hover/card:opacity-100 transition-opacity duration-300 blur"></div>
              <div className="relative bg-black/50 border border-emerald-900 rounded-lg p-4 text-center text-emerald-300 group-hover/card:border-emerald-400 transition-colors">
                {agent}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialAgents;