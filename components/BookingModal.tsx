import React, { useState } from 'react';
import { X, Calendar, User, Phone, CheckCircle } from 'lucide-react';
import { SERVICES, BRAND_COLOR } from '../constants';
import { BookingStep } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<BookingStep>(BookingStep.INITIAL);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(BookingStep.CONFIRMATION);
  };

  const renderContent = () => {
    switch (step) {
      case BookingStep.CONFIRMATION:
        return (
          <div className="text-center py-12" role="status" aria-live="polite">
            <div className="w-20 h-20 bg-blue-100 text-[#0057B7] rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
            <p className="text-slate-600 mb-8 px-6">
              Thank you, {formData.name}. We will call you at {formData.phone} shortly to confirm your appointment for {formData.date}.
            </p>
            <button 
              onClick={onClose}
              className="w-full py-4 bg-[#0057B7] text-white rounded-2xl font-bold hover:bg-[#004494] transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057B7] outline-none"
            >
              Close Window
            </button>
          </div>
        );

      default:
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="booking-name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                  <input 
                    id="booking-name"
                    required
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#0057B7] outline-none transition-all"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                  <input 
                    id="booking-phone"
                    required
                    type="tel" 
                    placeholder="077xxxxxxx"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#0057B7] outline-none transition-all"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-service" className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                <div className="relative">
                  <select 
                    id="booking-service"
                    required
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#0057B7] outline-none appearance-none cursor-pointer"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    aria-required="true"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="booking-date" className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                  <input 
                    id="booking-date"
                    required
                    type="date" 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#0057B7] outline-none transition-all"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    aria-required="true"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-[#0057B7] text-white rounded-2xl font-bold text-lg hover:bg-[#004494] transition-all shadow-xl active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057B7] outline-none"
            >
              Request Appointment
            </button>
            <p className="text-center text-xs text-slate-500">
              Browne Clinic prioritizes your data privacy.
            </p>
          </form>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div 
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="bg-white rounded-[40px] w-full max-w-lg relative z-10 overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white">
          <h2 id="modal-title" className="text-2xl font-bold text-slate-900">Book Appointment</h2>
          <button 
            onClick={onClose} 
            className="p-3 hover:bg-slate-100 rounded-full text-slate-500 transition-colors focus-visible:ring-2 focus-visible:ring-[#0057B7] outline-none"
            aria-label="Close Appointment Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;