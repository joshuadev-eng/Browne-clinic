
import React, { useState } from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-[#0057B7] font-bold tracking-widest uppercase text-sm mb-4">Our Medical Specialties</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Care Designed for You</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Click on any service to reveal more details about our specialized approach to community health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.icon];
            const isActive = activeId === service.id;
            
            return (
              <div 
                key={service.id}
                className={`bg-white rounded-3xl transition-all duration-300 border-2 overflow-hidden ${
                  isActive ? 'border-[#0057B7] shadow-xl ring-4 ring-[#0057B7]/5' : 'border-transparent hover:border-slate-200 shadow-sm'
                }`}
              >
                <button 
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full p-8 text-left flex items-start gap-6 group"
                  aria-expanded={isActive}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isActive ? 'bg-[#0057B7] text-white' : 'bg-blue-50 text-[#0057B7] group-hover:bg-blue-100'
                  }`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div className="flex-grow pt-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-slate-500 line-clamp-2">{service.description}</p>
                  </div>
                  <div className={`mt-2 p-2 rounded-full transition-colors ${isActive ? 'bg-[#0057B7] text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                    {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="px-8 pb-8 pt-2 border-t border-slate-50">
                    <div className="bg-slate-50 rounded-2xl p-6">
                      <p className="text-slate-700 leading-relaxed text-lg mb-6">
                        {service.details}
                      </p>
                      <a 
                        href="#contact" 
                        className="inline-flex items-center font-bold text-[#0057B7] hover:underline"
                      >
                        Book an appointment for this service
                        <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
