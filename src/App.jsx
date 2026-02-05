import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, 
  ChevronDown, ChevronUp, Code, Rocket, Zap, Sparkles, 
  Award, Briefcase, GraduationCap, Terminal, 
  Database, Globe, Phone, Search, Activity, Layers, Cpu,
  LineChart, Car, UserCheck, CheckCircle2, Shield, Brain
} from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Robot from './components/Robot';
import Cursor from './components/Cursor';
import BackgroundCanvas from './components/BackgroundCanvas';
import ScrollToTop from './components/ScrollToTop';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import { NAV_LINKS, WORDS } from './data/navLinks';

/**
 * SURYA MALLAMPALLI - MASTER PORTFOLIO v54.5 (SOLID-DIM OVERLAY)
 * -----------------------------------------------------------------------
 * - FIX: Solid background dimming for mobile menu (No bleed-through).
 * - LOGO: Restored animated Neural Lattice logic.
 * - MOBILE: One-page grid layout for menu items.
 * - ROBOT: Aero-Neural Drone v2.0 with responsive parallax.
 * -----------------------------------------------------------------------
 */

// Data constants moved to ./data and used within components/sections

// ==========================================================
// MODULE 2: REUSABLE ASSETS
// ==========================================================

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
    <path 
      d="M50 5 L89 27.5 V72.5 L50 95 L11 72.5 V27.5 L50 5Z" 
      stroke="white" 
      strokeWidth="2" 
      strokeOpacity="0.1" 
    />
    <path 
      d="M75 30 L40 45 L60 55 L25 70" 
      stroke="url(#neural-path-grad)" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      filter="url(#core-glow)"
    />
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


// ==========================================================
// MODULE 3: MAIN APPLICATION CORE
// ==========================================================

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("");
  const [typedTitle, setTypedTitle] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeText, setWelcomeText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorVariant, setCursorVariant] = useState('default'); 
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const [robotVisuals, setRobotVisuals] = useState({ 
    lookX: 0, lookY: 0, rotX: 0, rotY: 0, isBlinking: false, emotion: 'neutral' 
  });
  
  const canvasRef = useRef(null);
  const robotRef = useRef(null);
  const cursorRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetsRef = useRef({ lookX: 0, lookY: 0, rotX: 0, rotY: 0 });
  const currentsRef = useRef({ lookX: 0, lookY: 0, rotX: 0, rotY: 0 });

  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  // 1. BOOT SEQUENCE & TAB ICON LOGIC
  useEffect(() => {
    const setFavicon = () => {
      let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/svg+xml';
      const svgString = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#A855F7' /><stop offset='100%' stop-color='#EC4899' /></linearGradient><path d='M75 30 L40 45 L60 55 L25 70' stroke='url(#g)' stroke-width='12' stroke-linecap='round' stroke-linejoin='round'/><circle cx='50' cy='50' r='8' fill='white'/><circle cx='75' cy='30' r='5' fill='#A855F7'/><circle cx='25' cy='70' r='5' fill='#EC4899'/></svg>`.replace(/"/g, "'").replace(/\s+/g, " ");
      link.href = `data:image/svg+xml,${encodeURIComponent(svgString)}`;
      document.head.appendChild(link);
      document.title = "Surya Mallampalli | Portfolio";
    };
    setFavicon();

    const messages = ["> INITIALIZING_SYSTEM_CORE...","> SYNCING_RESUME_DATA...","> GENERATING_IDENTITY_LOGOS...","> CLONING_PROJECT_REPOS...","> AUTHENTICATING_SURYA_M...","> SYSTEMS_ONLINE.","> SYSTEM_READY."];
    let mI = 0, cI = 0, cur = "";
    const timer = setInterval(() => {
      if (mI < messages.length) {
        if (cI < messages[mI].length) { cur += messages[mI][cI++]; setLoadingText(cur); }
        else { cur += "\n"; setLoadingText(cur); mI++; cI = 0; }
      } else {
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 400);
      }
    }, 20);
    return () => clearInterval(timer);
  }, []);

  // 2. ROBOT WELCOME
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setShowWelcome(true), 800);
      let i = 0; const txt = "Welcome!";
      const timer = setInterval(() => {
        if (i <= txt.length) setWelcomeText(txt.slice(0, i++));
        else { clearInterval(timer); setTimeout(() => setShowWelcome(false), 4000); }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isLoading]);

  // 2.1 LOCK SCROLL WHEN MOBILE MENU OPEN
  useEffect(() => {
    const el = document.documentElement;
    if (isMenuOpen) {
      const prevHtml = el.style.overflow;
      const prevBody = document.body.style.overflow;
      el.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      return () => {
        el.style.overflow = prevHtml;
        document.body.style.overflow = prevBody;
      };
    }
  }, [isMenuOpen]);

  // 3. ROBUST TYPEWRITER ENGINE
  useEffect(() => {
    if (isLoading || isWaiting) return;
    const currentWord = WORDS[wordIndex];
    const tick = () => {
      if (!isDeleting) {
        setTypedTitle(prev => {
          const next = currentWord.substring(0, prev.length + 1);
          if (next === currentWord) {
            setIsWaiting(true);
            setTimeout(() => { setIsWaiting(false); setIsDeleting(true); }, 2000);
          }
          return next;
        });
      } else {
        setTypedTitle(prev => {
          const next = currentWord.substring(0, prev.length - 1);
          if (next === "") {
            setIsDeleting(false);
            setWordIndex(idx => (idx + 1) % WORDS.length);
          }
          return next;
        });
      }
    };
    const timeout = setTimeout(tick, isDeleting ? 50 : 120);
    return () => clearTimeout(timeout);
  }, [isLoading, isDeleting, isWaiting, wordIndex, typedTitle]);

  // 4. MOUSE & PARALLAX
  useEffect(() => {
    if (isLoading) return;
    let frame;
    const animate = () => {
      const l = 0.08; 
      currentsRef.current.lookX += (targetsRef.current.lookX - currentsRef.current.lookX) * l;
      currentsRef.current.lookY += (targetsRef.current.lookY - currentsRef.current.lookY) * l;
      currentsRef.current.rotX += (targetsRef.current.rotX - currentsRef.current.rotX) * l;
      currentsRef.current.rotY += (targetsRef.current.rotY - currentsRef.current.rotY) * l;
      setRobotVisuals(v => ({ ...v, ...currentsRef.current }));
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [isLoading]);

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX: cx, clientY: cy, target } = e;
      mouseRef.current = { x: cx, y: cy };
      if (cursorRef.current) {
        cursorRef.current.style.setProperty('--x', `${cx}px`);
        cursorRef.current.style.setProperty('--y', `${cy}px`);
      }
      document.querySelectorAll('.project-card, .cert-card, .edu-card').forEach(card => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${cx - r.left}px`);
        card.style.setProperty('--mouse-y', `${cy - r.top}px`);
      });
      if (robotRef.current) {
        const r = robotRef.current.getBoundingClientRect();
        const dx = cx - (r.left + r.width / 2), dy = cy - (r.top + r.height / 2);
        targetsRef.current = { 
          lookX: (dx/800)*15, lookY: (dy/800)*15,
          rotY: Math.max(-30, Math.min(30, dx/12)),
          rotX: Math.max(-20, Math.min(20, -dy / 12))
        };
        const click = target.closest('a') || target.closest('button') || target.closest('.clickable');
        setRobotVisuals(v => ({ ...v, emotion: click ? 'happy' : 'neutral' }));
        if (click) setCursorVariant('hover'); else if (['P', 'H1', 'H2', 'H3', 'SPAN'].includes(target.tagName)) setCursorVariant('text'); else setCursorVariant('default');
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // 5. OBSERVER & PARTICLES
  useEffect(() => {
    if (isLoading) return;
    const obs = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) e.target.classList.add('reveal-visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((window.scrollY / h) * 100);
      
      const scrollPos = window.scrollY + 200;
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(link.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext('2d'); if (!ctx) return;
    let cf; const setS = () => { if(c) { c.width = window.innerWidth; c.height = window.innerHeight; } };
    setS();
    const ps = Array.from({length: 80}, () => ({
      x: Math.random()*c.width, y: Math.random()*c.height,
      vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
      size: Math.random()*2+0.5, op: Math.random()*0.3+0.1
    }));
    const anim = () => {
      if (!ctx || !c) return;
      ctx.clearRect(0,0,c.width,c.height);
      ps.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        const dx = mouseRef.current.x - p.x, dy = mouseRef.current.y - p.y;
        const d = Math.sqrt(dx*dx+dy*dy);
        if (d < 150) { const frc = (150-d)/150; p.x -= (dx/d)*frc*3; p.y -= (dy/d)*frc*3; }
        if (p.x > c.width) p.x=0; if (p.x < 0) p.x=c.width;
        if (p.y > c.height) p.y=0; if (p.y < 0) p.y=c.height;
        ctx.fillStyle = `rgba(168, 85, 247, ${p.op})`;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill();
      });
      cf = requestAnimationFrame(anim);
    };
    anim();
    window.addEventListener('resize', setS);
    return () => { obs.disconnect(); window.removeEventListener('scroll', handleScroll); window.removeEventListener('resize', setS); cancelAnimationFrame(cf); };
  }, [isLoading]);

  // ==========================================================
  // MODULE 4: UI COMPONENTS
  // ==========================================================

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[300] font-mono p-6 text-left">
        <div className="w-full max-w-lg border border-white/10 p-10 bg-black/50 backdrop-blur-md rounded-2xl shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2"><div className="w-3 h-3 rounded-full bg-[#ff5f56]" /><div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /><div className="w-3 h-3 rounded-full bg-[#27c93f]" /></div>
            <span className="text-purple-500 text-[10px] font-black uppercase tracking-widest">BOOT_SEQUENCE_v54.5</span>
          </div>
          <pre className="text-purple-400 text-xs sm:text-sm whitespace-pre-wrap leading-relaxed h-48 overflow-hidden font-bold">{loadingText}<span className="animate-pulse">_</span></pre>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-x-hidden font-sans">
      <Robot robotRef={robotRef} robotVisuals={robotVisuals} showWelcome={showWelcome} welcomeText={welcomeText} />

      <Cursor cursorRef={cursorRef} cursorVariant={cursorVariant} />

      <ScrollToTop show={showScrollTop} />

      <BackgroundCanvas canvasRef={canvasRef} />

      <Navbar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <Hero typedTitle={typedTitle} />

      <About />

      <Skills />

      <Certifications />

      <Education />

      <Services />

      <Projects />

      <Experience />

      <Contact />

      <footer className="py-16 border-t border-white/5 text-center text-gray-700 font-mono text-[10px] tracking-[0.5em] uppercase font-bold relative z-10 px-6 tracking-tighter">© 2026 Surya Mallampalli // NEURAL_SOLID_DIM_v54.5 // Hyderabad, IN</footer>

      <style>{`
        html { scroll-behavior: smooth; cursor: none; }
        * { cursor: none !important; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #9333ea; border-radius: 10px; }
        @keyframes float-robot { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .animate-float-robot { animation: float-robot 4s ease-in-out infinite; }
        @keyframes shadow-pulse { 0%, 100% { transform: scale(1); opacity: 0.15; } 50% { transform: scale(1.4); opacity: 0.05; } }
        .animate-shadow-pulse { animation: shadow-pulse 4s ease-in-out infinite; }
        @keyframes wave { 0%, 100% { height: 20%; } 50% { height: 100%; } }
        .animate-wave { animation: wave 1s ease-in-out infinite; }
        @media (hover: none) { html, * { cursor: auto !important; } }
        .reveal { opacity: 0; transform: translateY(40px); transition: all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1); filter: blur(8px); }
        .reveal-visible { opacity: 1; transform: translateY(0); filter: blur(0); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #9333ea; }
        @media (max-width: 400px) { .xs\:text-2xl { font-size: 1.5rem; line-height: 2rem; } }
      `}</style>
    </div>
  );
}
