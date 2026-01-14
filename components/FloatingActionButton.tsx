
import React from 'react';
import { Phone } from 'lucide-react';
import { PHONE_NUMBERS } from '../constants';

const FloatingActionButton: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-6 z-[80]">
      <a 
        href={`tel:${PHONE_NUMBERS[0]}`}
        className="flex items-center justify-center w-14 h-14 bg-[#0057B7] text-white rounded-full shadow-2xl active:scale-90 transition-transform hover:bg-[#004494]"
        aria-label="Call Clinic"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingActionButton;
