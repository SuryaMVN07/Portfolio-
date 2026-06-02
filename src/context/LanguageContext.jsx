import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const LanguageContext = createContext();

const STORAGE_KEY = 'portfolio_lang';
const COVER_MS  = 480; // overlay expands in
const REVEAL_MS = 480; // overlay contracts out

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'ja' ? 'ja' : 'en';
    } catch { return 'en'; }
  });

  // 'idle' | 'covering' | 'revealing'
  const [transitionPhase, setTransitionPhase] = useState('idle');
  // Language we are switching TO (set during covering so the overlay can show it)
  const [targetLang, setTargetLang] = useState(null);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
    document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';
  }, [lang]);

  const toggle = useCallback(() => {
    if (transitionPhase !== 'idle') return; // prevent double-trigger
    const next = lang === 'en' ? 'ja' : 'en';
    setTargetLang(next);
    setTransitionPhase('covering');

    setTimeout(() => {
      // Switch language while overlay is fully covering the screen
      setLang(next);
      setTargetLang(null);
      setTransitionPhase('revealing');

      setTimeout(() => {
        setTransitionPhase('idle');
      }, REVEAL_MS);
    }, COVER_MS);
  }, [lang, transitionPhase]);

  const isTransitioning = transitionPhase !== 'idle';

  return (
    <LanguageContext.Provider value={{ lang, toggle, transitionPhase, targetLang, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
