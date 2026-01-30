import React from 'react';
import { EXPERIENCE } from '../../data/experience';
import { ExternalLink } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 px-6 max-w-4xl mx-auto relative z-10">
      <h2 className="text-center text-5xl font-black mb-20 reveal uppercase tracking-[0.4em] italic text-purple-400">Work.</h2>
      <div className="space-y-12">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="relative pl-12 border-l-2 border-purple-500/30 reveal">
            <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-purple-600 shadow-[0_0_15px_#A855F7]" />
            <div className="bg-white/5 p-8 sm:p-12 rounded-[2rem] border border-white/10 hover:bg-white/[0.08] transition-all group shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter group-hover:text-purple-400 transition-colors text-white">{exp.role}</h3>
                  <p className="text-purple-400 font-bold uppercase text-xs tracking-[0.2em] font-black">{exp.company}</p>
                </div>
                <span className="text-[10px] font-black uppercase bg-purple-600/10 px-4 py-2 rounded-full text-purple-400 border border-purple-600/20 self-start">{exp.duration}</span>
              </div>
              <p className="text-gray-400 text-sm font-medium italic leading-relaxed">{exp.description}</p>
              {exp.url && <a href={exp.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-6 text-[10px] text-purple-400 font-black uppercase tracking-widest border-b border-purple-400/30 hover:border-purple-400 transition-all">Live Platform <ExternalLink size={12}/></a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
