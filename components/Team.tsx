
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-[#0057B7] font-bold tracking-widest uppercase text-sm mb-4">The People Behind the Care</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Dedicated Experts</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our qualified professionals are chosen for their skill and their deep commitment to the Liberian people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 reveal">
          {TEAM.map((member, index) => (
            <div key={index} className="group bg-slate-50 rounded-[40px] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="h-96 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-10 text-center relative bg-white">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#0057B7] text-white px-6 py-2 rounded-full font-bold shadow-xl border-4 border-white">
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
