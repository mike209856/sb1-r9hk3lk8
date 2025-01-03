import React from 'react';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import WalletButton from '../WalletButton';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onContactClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle, onContactClick }) => {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-emerald-300 hover:text-emerald-400 transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-emerald-900/50 shadow-lg animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-4">
            <Navigation 
              onContactClick={onContactClick} 
              isMobile={true} 
              onItemClick={onToggle}
            />
            <div className="pt-2">
              <WalletButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;