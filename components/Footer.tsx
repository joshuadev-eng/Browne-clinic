
import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { CLINIC_NAME, CLINIC_LOCATION, CLINIC_LANDMARK, PHONE_NUMBERS, CLINIC_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          <div className="reveal">
            <h3 className="text-white text-3xl font-bold mb-8 flex items-center">
              <div className="w-8 h-8 border-4 border-[#0057B7] rounded-sm mr-3"></div>
              {CLINIC_NAME}
            </h3>
            <p className="text-lg leading-relaxed text-slate-400">
              Transforming community health in Johnsonville through excellence, compassion, and innovation. Every patient is family at Browne Clinic.
            </p>
          </div>

          <div className="reveal">
            <h4 className="text-white font-bold text-xl mb-8 uppercase tracking-widest text-sm">Quick Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 text-[#0057B7] mr-4 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-300">
                  {CLINIC_LOCATION}
                  <br/>
                  <span className="text-[#0057B7] text-sm font-bold uppercase tracking-tight">{CLINIC_LANDMARK}</span>
                </span>
              </li>
              {PHONE_NUMBERS.map(num => (
                <li key={num} className="flex items-center group">
                  <div className="p-2 bg-slate-900 rounded-lg mr-4 group-hover:bg-[#0057B7]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#0057B7]" />
                  </div>
                  <a href={`tel:${num}`} className="text-lg text-slate-300 hover:text-white transition-colors">{num}</a>
                </li>
              ))}
              <li className="flex items-center group">
                <div className="p-2 bg-slate-900 rounded-lg mr-4 group-hover:bg-[#0057B7]/20 transition-colors">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#0057B7]" />
                  </div>
                </div>
                <a href={`mailto:${CLINIC_EMAIL}`} className="text-lg text-slate-300 hover:text-white transition-colors">{CLINIC_EMAIL}</a>
              </li>
            </ul>
          </div>

          <div className="reveal">
            <h4 className="text-white font-bold text-xl mb-8 uppercase tracking-widest text-sm">Visit Us</h4>
            <div className="rounded-3xl overflow-hidden h-64 bg-slate-900 relative shadow-inner group">
              <div className="absolute inset-0 bg-[#0057B7]/5 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-12 h-12 bg-[#0057B7] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                   <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="font-bold text-white text-xl mb-2">Pepper Wulu Market</p>
                <p className="text-slate-400">Across from the Orange Tower</p>
                <a 
                  href="https://www.google.com/maps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-xl text-sm font-bold hover:bg-[#0057B7] hover:text-white transition-all shadow-lg active:scale-95"
                >
                  Open Directions
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium">© {new Date().getFullYear()} {CLINIC_NAME}. Excellence in Healthcare.</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4 text-sm uppercase tracking-widest font-bold">
            <a href="#portal" className="text-[#0057B7] hover:text-blue-400 transition-colors">Patient Portal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
