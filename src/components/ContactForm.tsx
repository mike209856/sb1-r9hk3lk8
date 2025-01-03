import React, { useState } from 'react';
import ShifuMessageModal from './ShifuMessageModal';

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    subject: '',
    message: ''
  });
  const [isShifuMessageVisible, setIsShifuMessageVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Show Shifu's message
    setIsShifuMessageVisible(true);
    // Reset form
    setFormData({ email: '', subject: '', message: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-emerald-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full rounded-md bg-black/50 border-emerald-700 text-emerald-100 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20"
            required
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-emerald-300">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="mt-1 block w-full rounded-md bg-black/50 border-emerald-700 text-emerald-100 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-emerald-300">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-1 block w-full rounded-md bg-black/50 border-emerald-700 text-emerald-100 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-black bg-gradient-to-r from-emerald-400 to-yellow-400 hover:from-emerald-500 hover:to-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 transition-colors"
        >
          Send Message
        </button>
      </form>

      <ShifuMessageModal 
        isOpen={isShifuMessageVisible} 
        onClose={() => setIsShifuMessageVisible(false)} 
      />
    </>
  );
};

export default ContactForm;