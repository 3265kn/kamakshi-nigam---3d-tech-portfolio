
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Round Avatar Small */}
          <div className="mb-10 w-28 h-28 rounded-full border-2 border-purple-500/40 overflow-hidden glass-card p-1 shadow-2xl">
            <img
              src="https://i.pinimg.com/1200x/f2/a7/36/f2a736a7053c91d716a07c651e778636.jpg"
              alt="About Me Avatar"
              className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
              style={{ objectPosition: 'center 15%' }}
            />
          </div>

          <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tight mb-8">
            ABOUT  <span className="text-purple-500">ME 🦋</span>
          </h2>
          <div className="space-y-6 text-xl text-gray-400 leading-relaxed max-w-lg">
            <p>
              I am a passionate Frontend Developer with a strong interest in building clean, responsive, and user-focused web experiences. I completed my BCA from Manipal University Jaipur and began my professional journey as a trainee in 2022, gradually growing into a Frontend Developer Intern through consistent learning and hands-on development.

              I enjoy turning ideas and designs into functional interfaces using modern frontend technologies. My work focuses on creating scalable components, maintaining visual consistency, and ensuring smooth user interactions. I value clean code, thoughtful UI/UX, and continuous improvement in everything I build.

              My growth and dedication were recognized with the Best Intern of the Year (2024) award, which motivated me to further refine my skills and take greater ownership of my work. I am driven by curiosity, problem-solving, and a desire to create meaningful digital experiences that combine aesthetics with functionality.             </p>
           
            <div className="pt-6">
              <div className="h-1 w-20 bg-purple-500 rounded-full mb-8" />
              <button className="text-sm font-bold uppercase tracking-widest text-white hover:text-purple-400 transition-colors">
                View Full CV → 
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 relative">
          <div className="space-y-6 pt-12">
            <div className="glass-card p-10 rounded-[40px] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                ❤️
              </div>
              <h4 className="font-bold mb-2">Passion</h4>
              <p className="text-xs text-gray-500">Passionate about frontend development and continuous learning.
                I love creating reliable, elegant interfaces that balance design and functionality</p>
            </div>
            <div className="glass-card p-10 rounded-[40px] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                🌸
              </div>
              <h4 className="font-bold mb-2">Details</h4>
              <p className="text-xs text-gray-500">Detail-driven in design, logic, and execution.
                Every pixel and interaction matters.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass-card p-10 rounded-[40px] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h4 className="font-bold mb-2">Scale</h4>
              <p className="text-xs text-gray-500">Focused on building scalable, maintainable, and high-performance frontend solutions.
                I design interfaces that grow smoothly with product and user needs.</p>
            </div>
            <div className="glass-card p-10 rounded-[40px] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                💎
              </div>
              <h4 className="font-bold mb-2">Quality</h4>
              <p className="text-xs text-gray-500">Focused on precision in both design and development.
                I refine details to deliver smooth, high-quality interfaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
