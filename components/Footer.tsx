
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <div className="text-3xl font-black font-heading tracking-tighter mb-4 uppercase">
              KAMAKSHI <span className="text-purple-500">NIGAM</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Pushing the boundaries of the web with high-performance 3D visual frontend architectures.
            </p>
          </div>
          
          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest">
            <div className="space-y-4">
              <p className="text-gray-600 text-[10px] mb-6">Menu</p>
              <a href="#about" className="block hover:text-purple-400 transition-colors">About</a>
              <a href="#projects" className="block hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="block hover:text-purple-400 transition-colors">Contact</a>
            </div>
            {/* <div className="space-y-4">
              <p className="text-gray-600 text-[10px] mb-6">Social</p>
              <a href="#" className="block hover:text-purple-400 transition-colors">LinkedIn</a>
              <a href="#" className="block hover:text-purple-400 transition-colors">GitHub</a>
              <a href="#" className="block hover:text-purple-400 transition-colors">Behance</a>
            </div> */}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
          <p>© 2024 Kamakshi Nigam. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Footer Visual Decor */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
