import React from 'react';

export default function Robot({ robotRef, robotVisuals, showWelcome, welcomeText }) {
  return (
    <div ref={robotRef} className="fixed top-24 right-4 sm:right-12 z-[100] pointer-events-none hidden lg:block" style={{ perspective: '1200px' }}>
      <div className="relative animate-float-robot" style={{ transformStyle: 'preserve-3d' }}>
        <div className={`absolute -left-48 top-0 bg-white/10 backdrop-blur-2xl border border-white/20 px-5 py-3 rounded-2xl transition-all duration-700 ${showWelcome ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'}`}>
          <div className="flex flex-col gap-2">
            <span className="text-purple-400 font-black text-sm font-mono tracking-tighter">{welcomeText}</span>
            <div className="flex gap-1 items-end h-4">
              {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((h, i) => (
                <div key={i} className="w-[2px] bg-purple-400/60 rounded-full animate-wave" style={{ height: `${h * 20}%`, animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
          <div className="absolute top-6 -right-1 w-3 h-3 bg-white/20 rotate-45 border-r border-t border-white/20" />
        </div>

        <div style={{ transform: `rotateX(${robotVisuals.rotX}deg) rotateY(${robotVisuals.rotY}deg)`, transformStyle: 'preserve-3d' }}>
          <svg width="180" height="190" viewBox="-30 -20 120 130" fill="none" style={{ overflow: 'visible', filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))' }}>
            <defs>
              <linearGradient id="drone-met" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2A2A2D" />
                <stop offset="50%" stopColor="#1A1A1C" />
                <stop offset="100%" stopColor="#0A0A0B" />
              </linearGradient>
              <linearGradient id="vis-glass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1C0F35" />
                <stop offset="50%" stopColor="#0B0515" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
              <linearGradient id="core-power" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
              <filter id="hyper-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Outer Rotating Energy Ring */}
            <g style={{ transformOrigin: '25px 30px' }}>
              <circle cx="25" cy="30" r="45" fill="none" stroke="url(#core-power)" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate" from="0 25 30" to="360 25 30" dur="20s" repeatCount="indefinite" />
              </circle>
              <circle cx="25" cy="30" r="55" fill="none" stroke="#A855F7" strokeWidth="0.2" strokeDasharray="1 12" opacity="0.3">
                <animateTransform attributeName="transform" type="rotate" from="360 25 30" to="0 25 30" dur="25s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Left Antenna */}
            <g style={{ transform: `translate(${-robotVisuals.lookX * 0.8}px, 0)` }}>
              <path d="M-8 15 L-12 5 L-10 2 L-6 10 Z" fill="#111" stroke="#A855F7" strokeWidth="0.5" />
              <rect x="-12" y="15" width="6" height="30" rx="3" fill="#151515" stroke="url(#core-power)" strokeWidth="0.5" />
              <circle cx="-9" cy="20" r="1.5" fill="#EC4899" filter="url(#hyper-glow)"><animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" /></circle>
              <circle cx="-9" cy="30" r="1.5" fill="#A855F7" filter="url(#hyper-glow)"><animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" /></circle>
              <circle cx="-9" cy="40" r="1.5" fill="#A855F7" filter="url(#hyper-glow)"><animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite" /></circle>
            </g>

            {/* Right Antenna */}
            <g style={{ transform: `translate(${robotVisuals.lookX * 0.8}px, 0)` }}>
              <path d="M58 15 L62 5 L60 2 L56 10 Z" fill="#111" stroke="#A855F7" strokeWidth="0.5" />
              <rect x="56" y="15" width="6" height="30" rx="3" fill="#151515" stroke="url(#core-power)" strokeWidth="0.5" />
              <circle cx="59" cy="20" r="1.5" fill="#EC4899" filter="url(#hyper-glow)"><animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" /></circle>
              <circle cx="59" cy="30" r="1.5" fill="#A855F7" filter="url(#hyper-glow)"><animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" /></circle>
              <circle cx="59" cy="40" r="1.5" fill="#A855F7" filter="url(#hyper-glow)"><animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite" /></circle>
            </g>

            {/* Main Head Chassis */}
            <rect x="0" y="5" width="50" height="48" rx="16" fill="url(#drone-met)" stroke="#555" strokeWidth="1" />

            {/* Crown Detail */}
            <path d="M 15 5 L 35 5 L 38 10 L 12 10 Z" fill="#111" stroke="#A855F7" strokeWidth="0.5" />
            <circle cx="25" cy="7" r="1.5" fill="#A855F7" />

            {/* Visor Area */}
            <rect x="5" y="14" width="40" height="22" rx="8" fill="url(#vis-glass)" stroke="#222" strokeWidth="1" />

            {/* Visor Grid Lines / Scanning effect */}
            <path d="M 5 25 L 45 25" stroke="#A855F7" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
            <path d="M 25 14 L 25 36" stroke="#A855F7" strokeWidth="0.5" opacity="0.2" />

            {/* Scanning Laser */}
            <rect x="5" y="14" width="40" height="1.5" fill="url(#core-power)" opacity="0.8" filter="url(#hyper-glow)">
              <animate attributeName="y" values="14;34.5;14" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
            </rect>

            {/* Eyes (Tracking Mouse) */}
            <g style={{ transform: `translate(${robotVisuals.lookX * 1.5}px, ${robotVisuals.lookY * 1.5}px)` }}>
              {/* Left Eye */}
              <rect x="12" y="21" width="10" height="6" rx="3" fill="#A855F7" filter="url(#hyper-glow)">
                {robotVisuals.emotion === 'happy' && <animate attributeName="height" values="6;2;6" dur="0.5s" repeatCount="1" />}
              </rect>
              <circle cx="17" cy="24" r="1.5" fill="#FFF" />

              {/* Right Eye */}
              <rect x="28" y="21" width="10" height="6" rx="3" fill="#A855F7" filter="url(#hyper-glow)">
                {robotVisuals.emotion === 'happy' && <animate attributeName="height" values="6;2;6" dur="0.5s" repeatCount="1" />}
              </rect>
              <circle cx="33" cy="24" r="1.5" fill="#FFF" />
            </g>

            {/* Cheeks (Blush effect when happy) */}
            <circle cx="10" cy="30" r="4" fill="#EC4899" opacity={robotVisuals.emotion === 'happy' ? 0.6 : 0} filter="url(#hyper-glow)" style={{ transition: 'opacity 0.3s' }} />
            <circle cx="40" cy="30" r="4" fill="#EC4899" opacity={robotVisuals.emotion === 'happy' ? 0.6 : 0} filter="url(#hyper-glow)" style={{ transition: 'opacity 0.3s' }} />

            {/* Neck / Lower Chassis */}
            <path d="M15 53 L35 53 L42 63 L8 63 Z" fill="#0A0A0A" stroke="#A855F7" strokeWidth="0.8" />
            <path d="M18 55 L32 55 L36 60 L14 60 Z" fill="#111" />

            {/* Power Core */}
            <circle cx="25" cy="58" r="3.5" fill="url(#core-power)" filter="url(#hyper-glow)">
              <animate attributeName="r" values="3.5;4.5;3.5" dur="1.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.6;1" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="25" cy="58" r="1" fill="#FFF" />
          </svg>
        </div>
        <div className="w-28 h-3 bg-purple-900/10 blur-2xl rounded-full mx-auto mt-6 animate-shadow-pulse" />
      </div>
    </div>
  );
}
