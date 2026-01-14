
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import GeminiAssistant from './components/GeminiAssistant';
import FloatingActionButton from './components/FloatingActionButton';
import { TESTIMONIALS } from './constants';
import { Quote, Heart } from 'lucide-react';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <main>
        <Hero onScheduleClick={() => setIsBookingOpen(true)} />
        
        <Services />

        {/* Impactful Mid-page CTA */}
        <section className="py-24 bg-[#0057B7] relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/20 backdrop-blur-sm">
              <Heart className="w-10 h-10 fill-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Your Health is Our Purpose</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't wait until you're sick. Early checkups prevent 90% of chronic health issues. Join hundreds of healthy families in Johnsonville.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-white text-[#0057B7] px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl active:scale-95"
              >
                Schedule Checkup
              </button>
              <a 
                href="tel:0776237391"
                className="bg-transparent text-white border-2 border-white/30 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Call Clinic Now
              </a>
            </div>
          </div>
        </section>

        <Team />

        {/* Testimonials with enhanced visuals */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <div className="mb-20">
              <h2 className="text-[#0057B7] font-bold tracking-widest uppercase text-sm mb-4">Patient Stories</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Voices of our Community</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-white p-12 rounded-[48px] text-left relative shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                    <Quote className="w-8 h-8 text-[#0057B7]" />
                  </div>
                  <p className="text-2xl text-slate-700 italic font-medium mb-10 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center space-x-4 border-t border-slate-50 pt-8">
                    <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-400 text-xl">
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="font-extrabold text-xl text-slate-900">{t.author}</p>
                      <p className="text-[#0057B7] font-bold text-sm uppercase tracking-widest">{t.location}, Liberia</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Professional Trust Area */}
            <div className="mt-32 pt-20 border-t border-slate-200">
              <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-12">Proud Partners in Public Health</p>
              <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-slate-300 rounded-full mb-4"></div>
                    <span className="font-bold text-slate-600">MOH Liberia</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-slate-300 rounded-full mb-4"></div>
                    <span className="font-bold text-slate-600">WHO Africa</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-slate-300 rounded-full mb-4"></div>
                    <span className="font-bold text-slate-600">UNICEF Partner</span>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      
      <GeminiAssistant />
      <FloatingActionButton />
    </div>
  );
};

export default App;
