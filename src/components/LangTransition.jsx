import React, { useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';

// ──────────────────────────────────────────────────────────
// Config
// ──────────────────────────────────────────────────────────
const LANG_DATA = {
  en: { main: 'English',  sub: 'LANGUAGE SWITCHED', flag: '🇺🇸' },
  ja: { main: '日本語',   sub: '言語が切り替わりました', flag: '🇯🇵' },
};

// Mixed EN + JP character pool for the matrix rain
const POOL =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモラリルレロ' +
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ0101日本語英語SWITCH語言01';

// ──────────────────────────────────────────────────────────
// Matrix rain (canvas)
// ──────────────────────────────────────────────────────────
function useMatrixCanvas(canvasRef, active) {
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width  = W;
    canvas.height = H;

    const FS   = 14;
    const COLS = Math.ceil(W / FS);
    const drops = Array.from({ length: COLS }, () => Math.random() * -(H / FS));
    let raf;

    const draw = () => {
      // Faint trail
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, 0, W, H);
      ctx.font = `bold ${FS}px monospace`;

      for (let i = 0; i < COLS; i++) {
        const char = POOL[Math.floor(Math.random() * POOL.length)];
        // Interpolate purple → pink based on column position
        const t   = i / COLS;
        const r   = Math.round(168 + 68  * t);
        const g   = Math.round(85  - 13  * t);
        const b   = Math.round(247 - 94  * t);
        const a   = 0.35 + Math.random() * 0.65;
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.fillText(char, i * FS, drops[i] * FS);

        if (drops[i] * FS > H && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.75;
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [active, canvasRef]);
}

// ──────────────────────────────────────────────────────────
// Main component
// ──────────────────────────────────────────────────────────
export default function LangTransition() {
  const { transitionPhase, targetLang, lang } = useLang();
  const canvasRef = useRef(null);

  const isVisible  = transitionPhase !== 'idle';
  const isCovering = transitionPhase === 'covering';
  const isRevealing= transitionPhase === 'revealing';

  useMatrixCanvas(canvasRef, isVisible);

  // The language we want to SHOW in the overlay center is always the TARGET
  // targetLang is set during 'covering'; after the switch it's null so fall back to current lang
  const displayLang = targetLang ?? lang;
  const data = LANG_DATA[displayLang] ?? LANG_DATA.en;

  if (!isVisible) return null;

  return (
    <>
      {/* ── Keyframes injected once ── */}
      <style>{`
        @keyframes lt-coverIn {
          0%   { clip-path: circle(0%   at 50% 50%); }
          100% { clip-path: circle(150% at 50% 50%); }
        }
        @keyframes lt-coverOut {
          0%   { clip-path: circle(150% at 50% 50%); }
          100% { clip-path: circle(0%   at 50% 50%); }
        }

        /* Horizontal scan line sweeps top → bottom */
        @keyframes lt-scan {
          0%   { top: -3px; opacity: 0; }
          3%   { opacity: 1; }
          97%  { opacity: 1; }
          100% { top: 100vh; opacity: 0; }
        }

        /* Subtle glitch burst on the big text */
        @keyframes lt-glitch {
          0%, 87%, 100% { transform: translate(0) skewX(0deg); }
          89% { transform: translate(-5px, 1px) skewX(-1.5deg); }
          91% { transform: translate( 5px,-1px) skewX( 1.5deg); }
          93% { transform: translate(-3px) skewX(0deg); }
          95% { transform: translate( 2px) skewX(0.5deg); }
        }

        /* Chromatic aberration ghost */
        @keyframes lt-ghost {
          0%, 86%, 100% { opacity: 0; transform: translate(0); }
          88% { opacity: 0.3; transform: translate(-6px, 2px); }
          92% { opacity: 0.2; transform: translate( 6px,-2px); }
          96% { opacity: 0; }
        }

        /* Entrance: fade + scale up from slightly below */
        @keyframes lt-fadeUp {
          from { opacity: 0; transform: translateY(28px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }

        /* Loading dots pulse one-by-one */
        @keyframes lt-dot {
          0%, 70%, 100% { transform: scale(1);   opacity: 0.25; }
          35%            { transform: scale(1.6); opacity: 1;    }
        }

        /* Corner brackets pulse in opacity */
        @keyframes lt-corner {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 1;    }
        }

        /* Vignette ring pulse */
        @keyframes lt-ring {
          0%, 100% { opacity: 0.15; transform: scale(1);    }
          50%       { opacity: 0.35; transform: scale(1.04); }
        }
      `}</style>

      {/* ── Iris overlay wrapper ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          overflow: 'hidden',
          background: 'rgb(2, 0, 10)',
          animation: isCovering
            ? 'lt-coverIn  480ms cubic-bezier(0.55, 0, 1, 0.45) forwards'
            : isRevealing
            ? 'lt-coverOut 480ms cubic-bezier(0, 0.55, 0.45, 1) forwards'
            : 'none',
        }}
      >
        {/* Layer 1 — Matrix rain canvas */}
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, opacity: 0.55 }}
        />

        {/* Layer 2 — Dark radial vignette so center is readable */}
        <div style={{
          position: 'absolute', inset: 0,
          background:
            'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(2,0,14,0.93) 0%, rgba(0,0,0,0.55) 100%)',
        }} />

        {/* Layer 3 — Sweeping horizontal scan line */}
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 2,
          background:
            'linear-gradient(90deg, transparent 0%, #A855F7 25%, #EC4899 75%, transparent 100%)',
          boxShadow: '0 0 18px 4px rgba(168,85,247,0.55)',
          animation: 'lt-scan 0.55s linear infinite',
          zIndex: 1,
        }} />

        {/* Layer 4 — Center content */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 14,
          animation: 'lt-fadeUp 280ms ease 60ms both',
        }}>

          {/* Flag */}
          <div style={{
            fontSize: 52, lineHeight: 1,
            filter: 'drop-shadow(0 0 24px rgba(168,85,247,0.9))',
          }}>
            {data.flag}
          </div>

          {/* Big language label — with glitch + chromatic ghost */}
          <div style={{ position: 'relative' }}>
            {/* Ghost copy (chromatic aberration) */}
            <div aria-hidden="true" style={{
              position: 'absolute', inset: 0,
              fontSize: 'clamp(56px, 9.5vw, 116px)',
              fontWeight: 900,
              fontFamily: '"Courier New", Courier, monospace',
              color: '#EC4899',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              userSelect: 'none',
              animation: 'lt-ghost 2s ease infinite',
              opacity: 0,
              pointerEvents: 'none',
            }}>
              {data.main}
            </div>

            {/* Main text */}
            <div style={{
              fontSize: 'clamp(56px, 9.5vw, 116px)',
              fontWeight: 900,
              fontFamily: '"Courier New", Courier, monospace',
              background: 'linear-gradient(130deg, #C084FC 0%, #A855F7 40%, #EC4899 75%, #818CF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              filter: 'drop-shadow(0 0 32px rgba(168,85,247,0.75))',
              animation: 'lt-glitch 2s ease infinite',
            }}>
              {data.main}
            </div>
          </div>

          {/* Subtitle */}
          <div style={{
            color: 'rgba(168,85,247,0.65)',
            fontSize: 10,
            fontFamily: 'monospace',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
          }}>
            {data.sub}
          </div>

          {/* Loading dots */}
          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{
                width: 5, height: 5, borderRadius: '50%',
                background: i % 2 === 0 ? '#A855F7' : '#EC4899',
                animation: `lt-dot 0.9s ease ${i * 0.14}s infinite`,
              }} />
            ))}
          </div>
        </div>

        {/* Layer 5 — Pulsing ring behind the center text */}
        <div style={{
          position: 'absolute',
          left: '50%', top: '50%',
          width: 340, height: 340,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          border: '1px solid rgba(168,85,247,0.25)',
          boxShadow: '0 0 60px 8px rgba(168,85,247,0.12), inset 0 0 60px 8px rgba(236,72,153,0.08)',
          animation: 'lt-ring 1.6s ease infinite',
          zIndex: 1,
          pointerEvents: 'none',
        }} />

        {/* Layer 6 — Corner bracket decorations */}
        {[
          { top: 20, left: 20,  d: 'M0 44 L0 0 L44 0',  delay: '0s'    },
          { top: 20, right: 20, d: 'M44 44 L44 0 L0 0', delay: '0.2s'  },
          { bottom: 20, left: 20,  d: 'M0 0 L0 44 L44 44', delay: '0.4s' },
          { bottom: 20, right: 20, d: 'M44 0 L44 44 L0 44', delay: '0.6s' },
        ].map(({ d, delay, ...pos }, idx) => (
          <svg
            key={idx}
            width={44} height={44} viewBox="0 0 44 44" fill="none"
            style={{
              position: 'absolute', zIndex: 3,
              animation: `lt-corner 1.4s ease ${delay} infinite`,
              ...pos,
            }}
          >
            <path
              d={d}
              stroke="url(#lt-g)"
              strokeWidth="1.8"
              strokeLinecap="square"
            />
            <defs>
              <linearGradient id="lt-g" x1="0" y1="0" x2="44" y2="44">
                <stop stopColor="#A855F7" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        ))}
      </div>
    </>
  );
}
