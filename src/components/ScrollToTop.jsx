import React from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop({ show }) {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-[140] w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:border-purple-500 group clickable shadow-[0_0_20px_rgba(168,85,247,0.1)] ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}`}
    >
      <ChevronUp className="text-white group-hover:text-purple-400 transition-colors" size={24} />
      <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
