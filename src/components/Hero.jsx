import React from 'react';
import { ChevronDown, Github } from 'lucide-react';

export default function Hero({ typedTitle }) {
  return (
    <section id="home" className="min-h-[100svh] flex items-center justify-center relative px-6 text-center">
      <div className="z-10 reveal w-full max-w-6xl">
        <div className="inline-block mb-8 px-5 py-2 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-md">
          <span className="text-purple-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">CSE (Data Science) | JNTU 2022-2026</span>
        </div>
        <div className="h-20 sm:h-32 md:h-40 lg:h-52 flex items-center justify-center overflow-hidden mb-8">
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter uppercase italic select-none">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">{typedTitle}</span>
            <span className="animate-pulse border-r-4 sm:border-r-[12px] border-purple-500 ml-1 h-[0.9em]"></span>
          </h1>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg md:text-xl font-medium leading-relaxed italic uppercase tracking-widest px-4">Architecting intelligent full-stack systems with 8.0 CGPA precision.</p>
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-12">
          <a href="#projects" className="px-10 py-5 bg-purple-600 hover:bg-purple-700 rounded-full font-black text-xs uppercase transition-all hover:scale-105 shadow-xl shadow-purple-900/40 clickable">Inventory</a>
          <a href="https://github.com/SuryaMVN07" target="_blank" rel="noreferrer" className="px-10 py-5 border border-white/20 hover:border-purple-500 rounded-full font-black text-xs uppercase flex items-center gap-3 hover:scale-105 transition-all clickable shadow-xl"><Github size={18} /> GitHub</a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 animate-bounce text-purple-400 clickable p-4"><ChevronDown size={32} /></a>
    </section>
  );
}
