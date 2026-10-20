
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white text-black relative overflow-hidden scroll-mt-32">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-7xl md:text-9xl font-black font-heading tracking-tighter uppercase leading-[0.85] mb-12">
              GET IN <br /> TOUCH
            </h2>
            <div className="space-y-8">
              {/* <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Location</p>
                <p className="text-xl font-bold">Jaipur, Rajasthan, India</p>
              </div> */}
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Email</p>
                <p className="text-xl font-bold">kamakshi.ngm@gmail.com</p>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-all transform hover:scale-110">in</a>
                <a href="#" className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-all transform hover:scale-110">Git</a>
                {/* <a href="#" className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-all transform hover:scale-110">Tw</a> */}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-purple-500 focus:bg-white transition-all text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email</label>
                  <input 
                    type="email" 
                    placeholder="hello@example.com" 
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-purple-500 focus:bg-white transition-all text-sm font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Project Type</label>
                <select className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-purple-500 focus:bg-white transition-all text-sm font-medium">
                  <option>Web Application</option>
                  <option>3D Frontend Development</option>
                  {/* <option>UI/UX Design</option> */}
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-purple-500 focus:bg-white transition-all text-sm font-medium resize-none"
                />
              </div>
              <button className="w-full py-5 bg-black text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-purple-600 transition-all transform active:scale-[0.98] shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
