import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  onContactClick: () => void;
  isMobile?: boolean;
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onContactClick, isMobile, onItemClick }) => {
  const location = useLocation();
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ];

  const baseClasses = `text-emerald-300 hover:text-emerald-400 transition-colors`;
  const mobileClasses = `px-2 py-1 rounded-md`;

  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}`}>
      {navLinks.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          onClick={onItemClick}
          className={`
            ${baseClasses}
            ${isMobile ? mobileClasses : 'relative'}
            ${location.pathname === path ? 'text-emerald-400' : ''}
            ${isMobile && location.pathname === path ? 'bg-emerald-900/30' : ''}
          `}
        >
          {label}
          {!isMobile && location.pathname === path && (
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-emerald-400 to-yellow-400" />
          )}
        </Link>
      ))}
      <button
        onClick={() => {
          onContactClick();
          onItemClick?.();
        }}
        className={`${baseClasses} ${isMobile ? `${mobileClasses} text-left` : ''}`}
      >
        Contact
      </button>
    </nav>
  );
};

export default Navigation;