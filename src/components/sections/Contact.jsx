import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 px-6 max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-6xl md:text-8xl font-black mb-12 reveal tracking-tighter uppercase italic text-center">Connect.</h2>
      <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 sm:p-16 relative overflow-hidden group reveal shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] group-hover:bg-purple-600/20 transition-all duration-1000" />
        <p className="text-lg sm:text-xl font-black text-gray-300 mb-12 italic underline decoration-purple-600 underline-offset-8 decoration-4 font-medium uppercase leading-snug tracking-tighter">Engineering success through technical mastery.</p>
        <div className="flex flex-col gap-8 items-center uppercase font-black tracking-widest">
          <a href="mailto:suryamallampalli2005@gmail.com" className="text-base sm:text-xl md:text-2xl hover:text-purple-500 transition-colors flex flex-wrap justify-center items-center gap-3 clickable lowercase font-bold transition-all"><Mail size={24} /> suryamallampalli2005@gmail.com</a>
          <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-black uppercase tracking-widest"><Phone size={20} className="text-purple-500" /><p className="text-sm font-mono tracking-widest">+91 70321 60277</p></div>
        </div>
        <div className="flex justify-center gap-8 sm:gap-12 mt-16">
          <a href="https://linkedin.com/in/surya-mallampalli-b33a73383/" target="_blank" rel="noreferrer" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/5 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all clickable shadow-lg text-white hover:scale-110"><Linkedin size={32}/></a>
          <a href="https://github.com/SuryaMVN07" target="_blank" rel="noreferrer" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/5 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all clickable shadow-lg text-white hover:scale-110"><Github size={32}/></a>
        </div>
      </div>
    </section>
  );
}
