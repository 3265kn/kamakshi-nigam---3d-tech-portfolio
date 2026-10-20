
import React, { useState } from 'react';
import { PROJECTS, SKILLS } from '../constants';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2, Award, ListChecks, ArrowRight, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 scroll-mt-32 bg-[#050505] relative overflow-hidden">
      {/* Decorative background grid for 3D context */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-purple-500" />
              <span className="text-purple-500 text-[10px] font-black uppercase tracking-[0.4em]">Selected Works</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black font-heading tracking-tighter uppercase leading-none mb-0">
              PROJECTS
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-gray-500 max-w-xs text-xs font-medium text-right uppercase tracking-widest leading-relaxed">
              Merging high-performance <br/> architecture with <br/> creative 3D interfaces.
            </p>
          </div>
        </div>

        {/* 3D Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative aspect-square"
              style={{ perspective: '1500px' }}
            >
              {/* Main 3D Card Body */}
              <div className="relative w-full h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d] group-hover:[transform:rotateX(10deg)_rotateY(-10deg)_translateY(-10px)]">
                
                {/* Background Shadow / Bloom */}
                <div className="absolute inset-4 bg-purple-600/0 blur-[40px] rounded-full transition-all duration-500 group-hover:bg-purple-600/20 group-hover:scale-110" />

                {/* The Square Glass Container */}
                <div className="absolute inset-0 glass-card rounded-[32px] overflow-hidden border border-white/10 flex flex-col [transform-style:preserve-3d]">
                  
                  {/* Image Layer (Recessed) */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-[0.6] transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Content Layer (Floating) */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-between [transform:translateZ(40px)]">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center border border-white/20 backdrop-blur-md">
                        <span className="text-xs font-black text-white">{project.id}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-end max-w-[120px]">
                        {project.tech.slice(0, 2).map(t => (
                          <span key={t} className="text-[7px] uppercase font-black tracking-widest px-2 py-1 bg-white/10 rounded-md border border-white/10 text-white/70 backdrop-blur-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-black font-heading leading-tight uppercase group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-[10px] leading-relaxed line-clamp-2 mt-2 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                          {project.description}
                        </p>
                      </div>
                      
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        Explore <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* Glass Shine Overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transform transition-transform duration-1000" />
                </div>

                {/* Subtle outer glow ring */}
                <div className="absolute inset-0 rounded-[32px] border border-purple-500/0 group-hover:border-purple-500/30 transition-colors pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal (Functionality Preserved) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 lg:p-10">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-500" 
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative bg-[#080808] border border-white/10 w-full max-w-6xl max-h-[90vh] rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-500 flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/5 bg-black/40 backdrop-blur-xl z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 border border-purple-500/20">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-purple-500 tracking-[0.4em] uppercase mb-1">Architecture Detail</h4>
                  <p className="text-white text-2xl font-black uppercase font-heading tracking-tight">{selectedProject.title}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-white transition-all backdrop-blur-md group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            <div className="overflow-y-auto custom-scrollbar flex-1 z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Main Content Area */}
                <div className="lg:col-span-8 p-8 md:p-16 space-y-16 border-r border-white/5">
                  <div className="rounded-[32px] overflow-hidden aspect-video relative shadow-2xl group/img">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                       <span className="px-4 py-2 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                         Live Project Preview
                       </span>
                    </div>
                  </div>

                  <div className="space-y-12">
                    <div className="max-w-2xl">
                      <h5 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-6">
                        <ListChecks className="w-4 h-4 text-purple-500" />
                        Strategic Vision
                      </h5>
                      <p className="text-gray-300 text-2xl font-medium leading-relaxed italic">
                        "{selectedProject.fullDescription}"
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <div>
                        <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">Technical Milestones</h5>
                        <ul className="space-y-6">
                          {selectedProject.keyFeatures.map((feature, i) => (
                            <li key={i} className="flex gap-5 items-start group/li">
                              <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/li:bg-purple-500 group-hover/li:text-white transition-all">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-gray-400 text-sm leading-relaxed group-hover/li:text-white transition-colors">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-12">
                        <div>
                          <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">Engineering Role</h5>
                          <p className="text-white text-xl font-black uppercase tracking-tight">{selectedProject.role}</p>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6">Technology Stack</h5>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.tech.map(t => (
                              <span key={t} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all cursor-default">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 p-8 md:p-12 bg-black/40 space-y-16">
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-10 flex items-center">
                      <span>Core Stack Performance</span>
                      <div className="h-px bg-white/5 flex-1 ml-6" />
                    </h5>
                    <div className="space-y-6">
                      {SKILLS.slice(0, 5).map(skill => (
                        <div key={skill.name} className="space-y-3">
                          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em]">
                            <span className="text-gray-500">{skill.name}</span>
                            <span className="text-purple-500">{skill.level}%</span>
                          </div>
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-1000 ease-out" 
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-10 flex items-center">
                      <span>Portfolio Matrix</span>
                      <div className="h-px bg-white/5 flex-1 ml-6" />
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      {PROJECTS.map(p => (
                        <button 
                          key={p.id}
                          onClick={() => setSelectedProject(p)}
                          className={`group/mini relative aspect-square rounded-2xl overflow-hidden border transition-all ${
                            p.id === selectedProject.id 
                            ? 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]' 
                            : 'border-white/5 grayscale hover:grayscale-0 hover:border-white/20'
                          }`}
                        >
                          <img src={p.imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover/mini:scale-110" />
                          {p.id === selectedProject.id && (
                            <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center backdrop-blur-[2px]">
                               <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button className="w-full py-5 bg-white text-black hover:bg-purple-600 hover:text-white rounded-[20px] font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-3 shadow-xl group">
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:rotate-12" /> Deploy Snapshot
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
