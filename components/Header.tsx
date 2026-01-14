
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CLINIC_NAME, PHONE_NUMBERS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'
    }`} aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-[#0057B7] flex items-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057B7] rounded-lg p-1">
              <span className="bg-[#0057B7]/10 p-2 rounded-lg mr-3" aria-hidden="true">
                <div className="w-6 h-6 border-4 border-[#0057B7] rounded-sm"></div>
              </span>
              {CLINIC_NAME}
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8" role="list">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                role="listitem"
                className="text-slate-600 hover:text-[#0057B7] font-semibold text-sm uppercase tracking-wider transition-colors py-2 focus-visible:text-[#0057B7] outline-none"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${PHONE_NUMBERS[0]}`}
              className="flex items-center bg-[#0057B7] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#004494] transition-all shadow-lg active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057B7] outline-none"
              aria-label={`Call us at ${PHONE_NUMBERS[0]}`}
            >
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
              Call Now
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[#0057B7] p-3 rounded-lg focus-visible:ring-2 focus-visible:ring-[#0057B7]"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-[72px] bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-10 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-2xl font-bold text-slate-800 hover:text-[#0057B7] border-b border-slate-100 pb-4 focus-visible:text-[#0057B7] outline-none"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6">
            <a
              href={`tel:${PHONE_NUMBERS[0]}`}
              className="flex items-center justify-center w-full bg-[#0057B7] text-white py-5 rounded-2xl font-bold text-xl shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057B7] outline-none"
            >
              <Phone className="w-6 h-6 mr-3" aria-hidden="true" />
              Emergency: {PHONE_NUMBERS[0]}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
