import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { NAV_LINKS } from '../data/navLinks';

const MeaningfulLogo = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="neural-path-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
      <filter id="core-glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <path d="M50 5 L89 27.5 V72.5 L50 95 L11 72.5 V27.5 L50 5Z" stroke="white" strokeWidth="2" strokeOpacity="0.1" />
    <path d="M75 30 L40 45 L60 55 L25 70" stroke="url(#neural-path-grad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" filter="url(#core-glow)" />
    <circle cx="50" cy="50" r="4" fill="white" filter="url(#core-glow)">
      <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </circle>
    {/* Moving data packets along the lattice */}
    <circle r="2.5" fill="white">
      <animateMotion path="M75 30 L40 45 L60 55 L25 70" dur="2.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
    </circle>
    {/* Anchor glow points */}
    <circle cx="75" cy="30" r="3.5" fill="#A855F7" filter="url(#core-glow)" />
    <circle cx="25" cy="70" r="3.5" fill="#EC4899" filter="url(#core-glow)" />
  </svg>
);

export default function Navbar({ scrolled, isMenuOpen, setIsMenuOpen, activeSection, scrollProgress, onLogoClick }) {
  return (
    <nav className={`fixed w-full z-[150] transition-all duration-500 ${scrolled || isMenuOpen ? 'bg-black/95 backdrop-blur-3xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <div className="group flex items-center gap-3 cursor-pointer clickable" onClick={onLogoClick}>
          <MeaningfulLogo className="w-10 h-10 transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-110" />
          <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block tracking-tighter uppercase font-mono">Surya Mallampalli</span>
        </div>
        <div className="hidden lg:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={`text-[10px] uppercase tracking-[0.2em] font-black transition-colors ${activeSection === link.id ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}>{link.name}</a>
          ))}
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-purple-400 p-2 relative z-[170]">
          {isMenuOpen ? <X size={28}/> : <Menu size={28} />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-black/95 backdrop-blur-[50px] backdrop-brightness-75 backdrop-contrast-75 transition-all duration-500 lg:hidden flex flex-col z-[160] px-8 pt-24 pb-12 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex-1 flex flex-col justify-between items-center text-center">
          <button onClick={onLogoClick} className="mb-8 flex items-center gap-3 clickable">
            <MeaningfulLogo className="w-8 h-8" />
            <span className="text-xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-tighter font-mono">Surya Mallampalli</span>
          </button>
          {NAV_LINKS.map((link, i) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              style={{ transitionDelay: `${i * 50}ms` }}
              className={`text-2xl sm:text-3xl font-black uppercase tracking-tighter transition-all hover:scale-110 ${activeSection === link.id ? 'text-purple-400 scale-110' : 'text-white'}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-8 mt-4">
            <a href="https://github.com/SuryaMVN07" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors"><Github size={24}/></a>
            <a href="https://linkedin.com/in/surya-mallampalli-b33a73383/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors"><Linkedin size={24}/></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
