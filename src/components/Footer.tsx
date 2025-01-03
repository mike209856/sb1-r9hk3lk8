import React, { useState } from 'react';
import { Twitter, BarChart2, LineChart, Coins, AlertCircle } from 'lucide-react';
import DisclaimerModal from './DisclaimerModal';

const Footer = () => {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a 
            href="https://x.com/MastershifuAi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a 
            href="https://www.dextools.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors"
          >
            <BarChart2 className="h-6 w-6" />
          </a>
          <a 
            href="https://dexscreener.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-400 transition-colors"
          >
            <LineChart className="h-6 w-6" />
          </a>
          <a 
            href="https://www.coingecko.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-yellow-400 transition-colors"
          >
            <Coins className="h-6 w-6" />
          </a>
        </div>
        
        <div className="mt-8 text-center text-gray-500">
          <p className="mb-4">© 2024 Shifu A.I.</p>
          <button
            onClick={() => setIsDisclaimerOpen(true)}
            className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <AlertCircle className="h-4 w-4" />
            <span>View Disclaimer</span>
          </button>
        </div>

        <DisclaimerModal 
          isOpen={isDisclaimerOpen} 
          onClose={() => setIsDisclaimerOpen(false)} 
        />
      </div>
    </footer>
  );
};

export default Footer;