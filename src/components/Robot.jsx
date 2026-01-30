import React from 'react';

export default function Robot({ robotRef, robotVisuals, showWelcome, welcomeText }) {
  return (
    <div ref={robotRef} className="fixed top-24 right-4 sm:right-12 z-[100] pointer-events-none hidden lg:block" style={{ perspective: '1200px' }}>
      <div className="relative animate-float-robot" style={{ transformStyle: 'preserve-3d' }}>
        <div className={`absolute -left-48 top-0 bg-white/10 backdrop-blur-2xl border border-white/20 px-5 py-3 rounded-2xl transition-all duration-700 ${showWelcome ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'}`}>
          <div className="flex flex-col gap-2">
            <span className="text-purple-400 font-black text-sm font-mono tracking-tighter">{welcomeText}</span>
            <div className="flex gap-1 items-end h-4">
              {[1,2,3,4,5,4,3,2,1].map((h, i) => (
                <div key={i} className="w-[2px] bg-purple-400/60 rounded-full animate-wave" style={{ height: `${h * 20}%`, animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
          <div className="absolute top-6 -right-1 w-3 h-3 bg-white/20 rotate-45 border-r border-t border-white/20" />
        </div>

        <div style={{ transform: `rotateX(${robotVisuals.rotX}deg) rotateY(${robotVisuals.rotY}deg)`, transformStyle: 'preserve-3d' }}>
          <svg width="130" height="140" viewBox="-10 -10 60 70" fill="none" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="drone-met" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2A2A2A"/><stop offset="100%" stopColor="#0A0A0A"/></linearGradient>
              <linearGradient id="vis-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#111"/><stop offset="100%" stopColor="#000"/></linearGradient>
            </defs>
            <g style={{ transform: `translate(${-robotVisuals.lookX}px, 0)` }}>
              <rect x="-10" y="15" width="5" height="25" rx="2.5" fill="#111" stroke="#A855F7" strokeWidth="0.5" />
              <circle cx="-7.5" cy="27" r="2" fill="#A855F7"><animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" /></circle>
            </g>
            <g style={{ transform: `translate(${robotVisuals.lookX}px, 0)` }}>
              <rect x="55" y="15" width="5" height="25" rx="2.5" fill="#111" stroke="#A855F7" strokeWidth="0.5" />
              <circle cx="57.5" cy="27" r="2" fill="#A855F7"><animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" /></circle>
            </g>
            <rect x="5" y="5" width="40" height="40" rx="14" fill="url(#drone-met)" stroke="#444" strokeWidth="1" />
            <rect x="8" y="12" width="34" height="18" rx="7" fill="url(#vis-glass)" />
            <rect x="8" y="12" width="34" height="2" fill="#A855F7" opacity="0.5">
              <animate attributeName="y" values="12;28;12" dur="4s" repeatCount="indefinite" />
            </rect>
            <g style={{ transform: `translate(${robotVisuals.lookX * 1.2}px, ${robotVisuals.lookY * 1.2}px)` }}>
              <circle cx="18" cy="21" r="3.5" fill="#A855F7" filter="url(#core-glow)" />
              <circle cx="32" cy="21" r="3.5" fill="#A855F7" filter="url(#core-glow)" />
            </g>
            <path d="M10 50 L40 50 L45 58 L5 58 Z" fill="#0A0A0A" stroke="#A855F7" strokeWidth="0.5" />
            <circle cx="25" cy="54" r="2.5" fill="#EC4899" filter="url(#core-glow)"><animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" /></circle>
          </svg>
        </div>
        <div className="w-28 h-3 bg-purple-900/10 blur-2xl rounded-full mx-auto mt-6 animate-shadow-pulse" />
      </div>
    </div>
  );
}
