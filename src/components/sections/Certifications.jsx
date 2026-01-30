import React from 'react';
import { Award } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-32 px-6 sm:px-8 bg-white/[0.01] relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-7xl font-black mb-16 tracking-tighter uppercase italic text-center reveal text-pink-500">Credentials.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="cert-card group bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] hover:border-purple-500/40 transition-all reveal relative overflow-hidden"
                 style={{ background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.05), transparent 60%)` }}>
              <Award className="text-purple-500 mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" size={24} />
              <h3 className="text-lg font-black text-white leading-tight uppercase group-hover:text-purple-400 transition-colors">{cert.title}</h3>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black">{cert.issuer}</p>
                <p className="text-[9px] font-black text-white/20 uppercase italic">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
