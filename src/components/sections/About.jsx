import React from 'react';
import { Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <h2 className="text-5xl sm:text-7xl font-black mb-10 tracking-tight uppercase italic relative inline-block">
            Identity.
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-purple-600 rounded-full" />
          </h2>
          <div className="space-y-6 text-gray-400 text-base sm:text-lg font-medium italic leading-relaxed">
            <p>I am Surya Mallampalli, a Neural Architect specialized in translating complex data noise into actionable intelligence.</p>
            <p>My work sits at the intersection of high-fidelity aesthetics and performance-critical full-stack logic.</p>
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl text-center group hover:bg-white/[0.08] transition-all shadow-inner">
                <p className="text-3xl sm:text-4xl font-black text-purple-500">8.0</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2 font-black">Current CGPA</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl text-center group hover:bg-white/[0.08] transition-all shadow-inner">
                <p className="text-3xl sm:text-4xl font-black text-pink-500">2026</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2 font-black">Graduation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-[3rem] relative overflow-hidden group reveal shadow-2xl">
          <Shield className="text-purple-500/10 absolute -right-6 -bottom-6" size={180} />
          <h3 className="text-2xl font-black uppercase mb-6 text-white tracking-tighter">Technical Core</h3>
          <p className="text-gray-400 text-sm sm:text-base italic font-medium leading-relaxed z-10 relative">Pushing the frontier of Deep Learning, Scalable Backend Infrastructure, and Interactive Web Visualizations.</p>
        </div>
      </div>
    </section>
  );
}
