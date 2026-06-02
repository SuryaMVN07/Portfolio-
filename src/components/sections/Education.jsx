import React from 'react';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../../data/education';
import { useLang } from '../../context/LanguageContext';
import { T } from '../../data/translations';

export default function Education() {
  const { lang } = useLang();
  const t = T[lang].education;

  return (
    <section id="education" className="py-20 sm:py-32 px-6 max-w-7xl mx-auto relative z-10">
      <h2 className="text-5xl sm:text-7xl font-black mb-16 tracking-tighter uppercase italic reveal text-center text-indigo-500">{t.heading}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {EDUCATION.map((item, idx) => {
          const translated = t.items[idx];
          return (
            <div key={idx} className="edu-card group bg-[#080808] border border-white/10 p-10 rounded-[2.5rem] hover:border-purple-500/50 transition-all reveal relative overflow-hidden"
                 style={{ background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.05), transparent 60%)` }}>
              <GraduationCap className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              {/* Duration stays in original format (numbers/dates are universal) */}
              <h4 className="text-[10px] text-purple-400 font-black uppercase tracking-widest mb-2">{item.duration}</h4>
              {/* Institution is a proper noun — kept in English */}
              <h3 className="text-xl font-black text-white mb-2 uppercase">{item.institution}</h3>
              <p className="text-sm font-bold text-gray-400 mb-4 leading-tight">
                {translated?.degree ?? item.degree}
              </p>
              <div className="py-2 px-4 bg-white/5 rounded-xl border border-white/10 inline-block mb-6">
                <span className="text-[10px] font-black text-pink-500 uppercase">{item.status}</span>
              </div>
              <p className="text-xs text-gray-500 italic leading-relaxed">
                {translated?.details ?? item.details}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
