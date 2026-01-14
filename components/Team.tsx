
import React from 'react';
import { TEAM } from '../constants';
import { User } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-[#0057B7] font-bold tracking-widest uppercase text-sm mb-4">The People Behind the Care</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Clinic Staff</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our qualified professionals are chosen for their deep commitment to the health and well-being of the Johnsonville community.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 reveal">
          {TEAM.map((member, index) => (
            <div key={index} className="group bg-slate-50 rounded-[40px] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] max-w-sm">
              <div className="h-96 overflow-hidden relative bg-slate-200">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                    <User className="w-32 h-32" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-10 text-center relative bg-white">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#0057B7] text-white px-6 py-2 rounded-full font-bold shadow-xl border-4 border-white whitespace-nowrap">
                  {member.role}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mt-2 mb-4">{member.name}</h4>
                <p className="text-slate-600 leading-relaxed font-medium italic">
                  "{member.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
