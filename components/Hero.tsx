
import React from 'react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="order-2 lg:order-1 relative z-10">
          <div className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
             Frontend Developer
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tight leading-none mb-8">
            HI, I'M <br />
            <span className="gradient-text">KAMAKSHI</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed">
Frontend Developer with a strong foundation in building responsive, user-focused web interfaces using modern technologies          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-purple-600 rounded-2xl font-bold hover:bg-purple-500 transition-all shadow-[0_0_40px_rgba(147,51,234,0.3)] transform hover:scale-105">
              Explore My Work
            </a>
            <a href="#contact" className="px-8 py-4 glass-card rounded-2xl font-bold hover:bg-white/10 transition-all">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Content - Profile Visual */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative h-[450px] lg:h-[650px]">
          {/* Glowing Background Orbs */}
          <div 
            className="absolute w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-purple-600/30 blur-[120px] rounded-full"
            style={{ transform: `scale(${1 + scrollY * 0.0003})` }}
          />
          <div 
            className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-600/20 blur-[100px] rounded-full translate-x-12 translate-y-12"
          />

          {/* Floating Round Image Container */}
          <div 
            className="relative w-full max-w-[320px] md:max-w-[480px] transition-transform duration-300 ease-out z-10"
            style={{ 
              transform: `translateY(${scrollY * -0.05}px) rotate(${scrollY * 0.01}deg)` 
            }}
          >
            <div className="relative group">
               {/* Animated Outer Ring */}
               <div className="absolute -inset-6 border border-white/10 rounded-full animate-[spin_30s_linear_infinite]" />
               <div className="absolute -inset-10 border border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
               
               {/* Main Round Image */}
               <div className="relative aspect-square rounded-full overflow-hidden border-[6px] border-white/10 glass-card p-1.5 shadow-[0_0_80px_rgba(168,85,247,0.2)]">
                 <img 
                   src="https://i.pinimg.com/1200x/f2/a7/36/f2a736a7053c91d716a07c651e778636.jpg" 
                   alt="Kamakshi Nigam - Portfolio Illustration" 
                   className="w-full h-full object-cover rounded-full transform transition-transform duration-1000 group-hover:scale-110"
                   style={{ objectPosition: 'center 15%' }}
                 />
                 {/* Subtle lighting overlay for depth - kept light for visibility */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none" />
               </div>

               {/* Decorative Badge */}
               <div className="absolute -bottom-4 -left-4 glass-card px-5 py-3 rounded-full transform -rotate-12 hover:rotate-0 transition-transform shadow-2xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
                    <span className="text-[9px] font-black uppercase tracking-tighter text-white">Active Developer</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Text Decor */}
      <div className="absolute -bottom-10 left-0 text-[20vw] font-black opacity-[0.02] font-heading whitespace-nowrap pointer-events-none select-none">
        KAMAKSHI NIGAM
      </div>
    </section>
  );
};

export default Hero;
