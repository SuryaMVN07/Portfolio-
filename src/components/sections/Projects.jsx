import React from 'react';
import { PROJECTS } from '../../data/projects';
import { ExternalLink } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { T } from '../../data/translations';

export default function Projects() {
  const { lang } = useLang();
  const tProjects = T[lang].projects; // renamed to avoid shadowing in tags.map

  return (
    <section id="projects" className="py-20 sm:py-32 px-6 max-w-7xl mx-auto relative z-10">
      <h2 className="text-5xl sm:text-7xl font-black mb-16 sm:mb-20 reveal tracking-tighter uppercase italic text-center">{tProjects.heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => {
          const Icon = p.icon;
          const translated = tProjects.items[i];

          return (
            <div key={i} className={`project-card group bg-[#080808] border border-white/10 p-10 rounded-[2.5rem] hover:border-purple-500/50 transition-all flex flex-col justify-between min-h-[500px] relative overflow-hidden reveal reveal-delay-${i % 3}`} style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.08), transparent 40%)` }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-8 text-white group-hover:rotate-6 transition-transform shadow-lg`}><Icon size={24} /></div>
                <h4 className="text-2xl font-black mb-4 uppercase leading-tight group-hover:text-purple-400 transition-colors tracking-tight text-white">
                  {translated?.title ?? p.title}
                </h4>
                <p className="text-gray-400 text-sm font-medium italic mb-6 leading-relaxed">
                  {translated?.description ?? p.description}
                </p>
              </div>
              <div className="flex flex-col gap-6 mt-auto">
                {/* tags use 'tag' param — no shadowing of tProjects */}
                <div className="flex flex-wrap gap-2 uppercase font-black text-[9px] opacity-60 group-hover:opacity-100 transition-opacity tracking-widest text-white">
                  {p.tags.map(tag => <span key={tag} className="px-3 py-1 bg-white/5 rounded-full border border-white/5">{tag}</span>)}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#c084fc] hover:text-[#d8b4fe] font-black text-[11px] tracking-widest uppercase transition-colors w-fit border-b border-[#c084fc]/40 hover:border-[#d8b4fe] pb-1 mt-2 z-20">
                    {tProjects.live} <ExternalLink size={14} strokeWidth={2.5} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
