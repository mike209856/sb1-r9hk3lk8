import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import ContactForm from './ContactForm';
import WalletButton from './WalletButton';
import Logo from './header/Logo';
import Navigation from './header/Navigation';
import MobileMenu from './header/MobileMenu';

const Header: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-emerald-900/20' : 'bg-transparent'
    }`}>
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            
            <div className="hidden md:flex items-center space-x-8">
              <Navigation onContactClick={() => setIsContactModalOpen(true)} />
              <WalletButton />
            </div>

            <MobileMenu 
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onContactClick={() => setIsContactModalOpen(true)}
            />
          </div>
        </div>
      </div>

      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-emerald-400">Contact Us</h2>
          <p className="text-emerald-200 mt-2">Your words are valued; speak with clarity</p>
        </div>
        <ContactForm />
      </Modal>
    </header>
  );
};

export default Header;