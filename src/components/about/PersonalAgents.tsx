import React from 'react';
import { UserCircle } from 'lucide-react';

const PersonalAgents = () => {
  const features = [
    "Design and oversee your own AI bots",
    "Adjust directives and update memory",
    "Delegate tasks to Special Agents (coming soon)",
    "Perform on-chain operations",
    "Access predefined set of actions"
  ];

  return (
    <div className="mb-12 relative group">
      {/* Hover effect background */}
      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/10 to-yellow-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
      
      <div className="relative bg-black/30 rounded-lg p-6 border border-emerald-500/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <UserCircle className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-emerald-400">Personal Agents</h2>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="text-emerald-200 flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonalAgents;