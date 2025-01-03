import React from 'react';
import Modal from './Modal';

interface ShifuMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const shifuQuotes = [
  "Your message travels like a leaf on the wind. Trust in its journey, for wisdom flows both ways.",
  "In reaching out, you have shown readiness. The path of knowledge begins with a single question.",
  "Patience, young trader. Your inquiry has been received with the same care as morning dew on bamboo leaves.",
  "To seek guidance is to show wisdom. I shall meditate upon your words with the attention they deserve."
];

const ShifuMessageModal: React.FC<ShifuMessageModalProps> = ({ isOpen, onClose }) => {
  const randomQuote = shifuQuotes[Math.floor(Math.random() * shifuQuotes.length)];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center p-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-400 to-yellow-400 p-[2px]">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <span className="text-2xl">🐼</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-yellow-400 text-transparent bg-clip-text mb-4">
          Master Shifu Says
        </h2>
        <p className="text-emerald-200 italic text-lg">
          "{randomQuote}"
        </p>
      </div>
    </Modal>
  );
};

export default ShifuMessageModal;