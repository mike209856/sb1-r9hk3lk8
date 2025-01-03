import React from 'react';
import Modal from './Modal';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-top">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-yellow-400 text-transparent bg-clip-text mb-4">Risk Disclosure</h2>
        <div className="text-emerald-200 space-y-4 text-left">
          <p>
            Trading cryptocurrencies involves substantial risk and may result in the loss of your invested capital. Shifu A.I.'s trading bots, while designed with sophisticated algorithms, cannot guarantee profits or prevent losses.
          </p>
          <p>
            By using our trading bots and services, you acknowledge that:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Past performance does not guarantee future results</li>
            <li>Cryptocurrency markets are highly volatile and unpredictable</li>
            <li>Bot performance can be affected by market conditions, technical issues, or other factors</li>
            <li>You are solely responsible for your trading decisions and their outcomes</li>
          </ul>
          <p className="text-emerald-400 font-semibold">
            Shifu A.I. and its team are not responsible for any losses incurred while using our trading bots or following our trading signals.
          </p>
          <p>
            Always conduct your own research and never invest more than you can afford to lose.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default DisclaimerModal;