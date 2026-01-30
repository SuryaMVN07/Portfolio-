import React from 'react';
import { PROJECTS } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 px-6 max-w-7xl mx-auto relative z-10">
      <h2 className="text-5xl sm:text-7xl font-black mb-16 sm:mb-20 reveal tracking-tighter uppercase italic text-center">Projects.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className={`project-card group bg-[#080808] border border-white/10 p-10 rounded-[2.5rem] hover:border-purple-500/50 transition-all flex flex-col justify-between min-h-[500px] clickable relative overflow-hidden reveal reveal-delay-${i % 3}`} style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.08), transparent 40%)` }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-8 text-white group-hover:rotate-6 transition-transform shadow-lg`}><Icon size={24} /></div>
                <h4 className="text-2xl font-black mb-4 uppercase leading-tight group-hover:text-purple-400 transition-colors tracking-tight text-white">{p.title}</h4>
                <p className="text-gray-400 text-sm font-medium italic mb-6 leading-relaxed">{p.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 uppercase font-black text-[9px] opacity-60 group-hover:opacity-100 transition-opacity tracking-widest text-white">
                {p.tags.map(t => <span key={t} className="px-3 py-1 bg-white/5 rounded-full border border-white/5">{t}</span>)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
