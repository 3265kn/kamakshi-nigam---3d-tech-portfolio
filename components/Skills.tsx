
import React from 'react';
import { SKILLS } from '../constants';

interface SkillsProps {
  scrollY?: number;
}

const Skills: React.FC<SkillsProps> = ({ scrollY = 0 }) => {
  return (
    <section id="expertise" className="py-32 px-6 bg-white text-black scroll-mt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-7xl md:text-9xl font-black font-heading tracking-tighter uppercase leading-none">
            EXPERTISE
          </h2>
        </div>

        {/* 4 columns with tight gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={skill.name} 
              className="flex flex-col p-6 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-purple-500/30 group cursor-default overflow-hidden relative"
              style={{ perspective: '1200px' }}
            >
              {/* Rotating Container */}
              <div 
                className="flex-1 flex flex-col transition-transform duration-300 ease-out group-hover:duration-[1200ms] group-hover:[transform:rotateY(360deg)] relative z-[2]" 
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-purple-600 transition-colors group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    {React.cloneElement(skill.icon as React.ReactElement, { size: 22 })}
                  </div>
                  <span className="text-[10px] font-black text-gray-300 tracking-widest">0{index + 1}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-black uppercase tracking-tight mb-4 transition-colors group-hover:text-purple-600">
                    {skill.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
                      <span className="group-hover:text-purple-400 transition-colors">Proficiency</span>
                      <span className="text-black group-hover:text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden relative">
                      <div 
                        className="h-full bg-black group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-500 transition-all duration-1000 ease-out origin-left relative" 
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Proficiency Bar Energy Pulse */}
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/40 blur-sm animate-[pulse-energy_1.5s_linear_infinite]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Aura Glow on Hover */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-500/0 blur-[40px] rounded-full group-hover:bg-purple-500/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-energy {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(300%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
