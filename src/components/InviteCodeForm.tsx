import React, { useState } from 'react';

interface InviteCodeFormProps {
  onSubmit: (code: string) => void;
}

const InviteCodeForm: React.FC<InviteCodeFormProps> = ({ onSubmit }) => {
  const [inviteCode, setInviteCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inviteCode);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="inviteCode" className="block text-sm font-medium text-emerald-300">
          Invite Code
        </label>
        <input
          type="text"
          id="inviteCode"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          placeholder="Enter your invite code"
          className="mt-1 block w-full rounded-md bg-black/50 border-emerald-700 text-emerald-100 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-black bg-gradient-to-r from-emerald-400 to-yellow-400 hover:from-emerald-500 hover:to-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default InviteCodeForm;