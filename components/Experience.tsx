
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tight sticky top-32">
              JOURNEY <br /> <span className="text-purple-500">& LOGS</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent opacity-30" />
            
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-12 group">
                {/* Dot */}
                <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] group-hover:scale-150 transition-transform" />
                
                <div className="glass-card p-8 md:p-12 rounded-[40px] hover:border-purple-500/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black font-heading mb-1">{exp.company}</h3>
                      <p className="text-purple-400 font-bold text-sm uppercase tracking-widest">{exp.role}</p>
                    </div>
                    <span className="text-xs font-bold px-4 py-2 glass-card rounded-full border-white/10 uppercase tracking-widest whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-gray-400 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-10 flex gap-4">
                    <span className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-xs font-bold text-purple-400">Next.js</span>
                    <span className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-xs font-bold text-blue-400">TypeScript</span>
                    <span className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-xs font-bold text-cyan-400">Redux</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
