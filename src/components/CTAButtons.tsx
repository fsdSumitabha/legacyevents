'use client';

import { Phone, MessageCircle } from 'lucide-react';

const CTAButtons = () => {
  const phoneNumber = '+91 62916 06302';
  const phoneNumberClean = '916291606302';
  const whatsappMessage = 'Hi! I would like to know more about your services.';

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumberClean}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact via WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Phone Call Button */}
      <a
        href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
        className="flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Call us"
        title="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default CTAButtons;
