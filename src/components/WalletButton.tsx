import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import Modal from './Modal';
import InviteCodeForm from './InviteCodeForm';

const WalletButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasInviteCode, setHasInviteCode] = useState(false);

  const handleInviteSubmit = (code: string) => {
    console.log('Invite code submitted:', code);
    setHasInviteCode(true);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full md:w-auto flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-yellow-400 text-black hover:from-emerald-500 hover:to-yellow-500 transition-all duration-300 hover:scale-105"
      >
        <Wallet className="h-5 w-5" />
        <span>Connect Wallet</span>
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          {!hasInviteCode ? (
            <>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Enter Invite Code</h2>
              <p className="text-emerald-200 mb-6">Share your code to proceed, if you are ready</p>
              <InviteCodeForm onSubmit={handleInviteSubmit} />
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Connect Your Wallet</h2>
              <p className="text-emerald-200 mb-6">Choose your preferred wallet to connect</p>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 bg-black/50 border border-emerald-700 hover:border-emerald-400 text-emerald-200 rounded-lg transition-colors">
                  MetaMask
                </button>
                <button className="w-full px-4 py-3 bg-black/50 border border-emerald-700 hover:border-emerald-400 text-emerald-200 rounded-lg transition-colors">
                  WalletConnect
                </button>
                <button className="w-full px-4 py-3 bg-black/50 border border-emerald-700 hover:border-emerald-400 text-emerald-200 rounded-lg transition-colors">
                  Coinbase Wallet
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default WalletButton;