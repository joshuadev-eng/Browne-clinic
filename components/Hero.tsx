
import React from 'react';
import { ChevronRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  onScheduleClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScheduleClick }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0057B7]/5 rounded-bl-[200px] -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex items-center">
          <div className="lg:w-3/5 reveal">
            <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-[#0057B7]/10 text-[#0057B7] text-sm font-bold tracking-wide uppercase mb-8 border border-[#0057B7]/20">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Trusted Community Healthcare
            </div>
            
            <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Quality Care at <br/>
              <span className="text-[#0057B7]">Pepper Wulu Market</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed font-medium">
              Browne Clinic provides compassionate, professional, and accessible medical services in the heart of Johnsonville, Liberia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button 
                onClick={onScheduleClick}
                className="bg-[#0057B7] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#004494] transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center min-h-[64px]"
              >
                Book Appointment
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <a 
                href="#services"
                className="bg-white text-slate-700 border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:border-[#0057B7] hover:text-[#0057B7] transition-all flex items-center justify-center min-h-[64px]"
              >
                View Services
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-xl mr-4">
                  <Clock className="w-6 h-6 text-[#0057B7]" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Always Ready</p>
                  <p className="text-sm text-slate-500">Mon-Fri: 8am - 5pm</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-xl mr-4">
                  <MapPin className="w-6 h-6 text-[#0057B7]" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Find Us</p>
                  <p className="text-sm text-slate-500">Opp. Orange Tower</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block lg:w-2/5 mt-12 lg:mt-0 relative reveal">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Modern Healthcare" 
                className="rounded-[40px] shadow-2xl w-full h-[600px] object-cover border-8 border-white"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-[280px]">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/pat${i}/48/48`} className="w-10 h-10 rounded-full border-2 border-white" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Trusted by locals</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 leading-tight">Expert Doctors and Loving Staff</h4>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
