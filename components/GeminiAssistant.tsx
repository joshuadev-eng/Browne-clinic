import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { healthAssistant } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: 'Hello! I am your Browne Clinic assistant. How can I help you today? You can ask about our location, hours, or specific services.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await healthAssistant.getResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'bot', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      {isOpen ? (
        <div 
          className="bg-white w-[350px] sm:w-[420px] h-[600px] rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-10 duration-500"
          role="dialog"
          aria-labelledby="assistant-title"
        >
          <div className="bg-[#0057B7] p-6 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm" aria-hidden="true">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <p id="assistant-title" className="font-bold text-lg">Health Assistant</p>
                <div className="flex items-center text-xs text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></div>
                  Online Now
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none"
              aria-label="Close Health Assistant"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div 
            ref={scrollRef} 
            className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50"
            role="log"
            aria-live="polite"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#0057B7] text-white rounded-br-none shadow-md' 
                    : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-none'
                }`}>
                  <span className="sr-only">{msg.role === 'user' ? 'You said: ' : 'Assistant said: '}</span>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 rounded-bl-none">
                  <div className="flex space-x-1.5" aria-label="Assistant is typing">
                    <div className="w-2.5 h-2.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-2.5 h-2.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2.5 h-2.5 bg-slate-300 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-100 flex space-x-3">
            <input 
              type="text"
              placeholder="How can we help you?"
              className="flex-1 bg-slate-100 rounded-2xl px-5 py-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0057B7] transition-all"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              aria-label="Type your message for the Health Assistant"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim()}
              className="bg-[#0057B7] text-white p-4 rounded-2xl hover:bg-[#004494] transition-all shadow-lg active:scale-95 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057B7] outline-none"
              aria-label="Send Message"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#0057B7] text-white p-5 rounded-full shadow-2xl hover:bg-[#004494] hover:scale-110 transition-all active:scale-95 flex items-center space-x-3 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057B7] outline-none"
          aria-label="Open Health Assistant Chat"
          aria-expanded="false"
        >
          <div className="relative" aria-hidden="true">
            <MessageSquare className="w-7 h-7" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-[#0057B7] rounded-full"></div>
          </div>
          <span className="font-bold hidden sm:block pr-2">Health Assistant</span>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;