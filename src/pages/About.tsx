import React from 'react';
import AboutHeader from '../components/about/AboutHeader';
import ExclusiveAccess from '../components/about/ExclusiveAccess';
import PersonalAgents from '../components/about/PersonalAgents';
import SpecialAgents from '../components/about/SpecialAgents';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <AboutHeader />
        
        {/* Mystical Quote */}
        <div className="mb-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-yellow-400/20 rounded-lg blur-sm"></div>
          <blockquote className="relative bg-black/50 rounded-lg p-6 border border-emerald-500/30">
            <p className="text-lg md:text-xl italic text-emerald-200">
              "In the dance of algorithms and wisdom, we find the path to enlightened trading."
            </p>
            <footer className="mt-2 text-sm text-emerald-400">— Master Shifu</footer>
          </blockquote>
        </div>

        <div className="space-y-12">
          <ExclusiveAccess />
          <PersonalAgents />
          <SpecialAgents />
          
          <div className="text-center text-emerald-200 mt-16 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/5 to-yellow-400/5 rounded-xl blur-lg"></div>
            <p className="italic relative">
              Embark on your AI bot trading journey with Shifu A.I., where the wisdom of Master Shifu 
              and the spirit of Kung Fu Panda empower your trading endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;