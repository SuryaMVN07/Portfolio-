import React from 'react';
import { SKILLS } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32 px-6 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-7xl font-black mb-16 tracking-tighter uppercase italic text-center reveal text-purple-500">Expertise.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="skill-card group bg-[#080808] border border-white/10 p-10 rounded-[2.5rem] hover:border-purple-500 transition-all reveal relative overflow-hidden"
                 style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.08), transparent 40%)` }}>
              <div className={`mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-purple-600/20 transition-colors ${skill.color}`}>
                <skill.icon size={32} />
              </div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-white">{skill.category}</h3>
              <div className="flex flex-wrap gap-2 uppercase">
                {skill.items.map(item => (
                  <span key={item} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-black text-gray-500 group-hover:text-white border border-white/5 transition-colors">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
