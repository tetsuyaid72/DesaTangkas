import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 animate-bounce-slow group"
      aria-label="Chat WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-slate-800 text-xs font-bold py-1 px-3 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Butuh bantuan? Chat kami!
      </div>
      <MessageCircle size={28} fill="white" className="text-white" />
    </a>
  );
};

export default FloatingWhatsApp;