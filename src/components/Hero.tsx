import React, { useState } from 'react';
import TypewriterText from './TypewriterText';
import Modal from './Modal';
import InviteCodeForm from './InviteCodeForm';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInviteSubmit = (code: string) => {
    console.log('Invite code submitted:', code);
    setIsModalOpen(false);
  };

  return (
    <div className="relative bg-black min-h-[90vh]">
      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-extrabold">
            <TypewriterText 
              text="Welcome to Shifu A.I."
              className="block bg-gradient-to-r from-emerald-400 to-yellow-400 text-transparent bg-clip-text"
            />
          </h1>
          <div className="mt-4 text-emerald-400 text-lg">
            <TypewriterText text="Where your trading bots are trained under the guidance of Master Shifu" />
          </div>

          {/* Quote Section */}
          <div className="mt-8 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-yellow-400/20 rounded-lg blur-sm"></div>
            <blockquote className="relative bg-black/50 rounded-lg p-6 border border-emerald-500/30">
              <p className="text-lg md:text-xl italic text-emerald-200">
                "To create is to understand. Begin with a clear vision, and the path will reveal itself"
              </p>
              <footer className="mt-2 text-sm text-emerald-400">— Master Shifu</footer>
            </blockquote>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 px-8 py-3 text-black bg-gradient-to-r from-emerald-400 to-yellow-400 hover:from-emerald-500 hover:to-yellow-500 rounded-md font-medium transition-all duration-300 hover:scale-105"
          >
            Get Started
          </button>

          <div className="mt-12 max-w-[300px] mx-auto relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-yellow-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            {/* Main image */}
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img 
                src="/mystical-circle.jpg"
                alt="Mystical AI Circle"
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">Early Access</h2>
          <p className="text-emerald-200 mb-6">Enter your invite code to get started</p>
          <InviteCodeForm onSubmit={handleInviteSubmit} />
        </div>
      </Modal>
    </div>
  );
};

export default Hero;