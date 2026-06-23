'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import { dict, type Lang, type Dict } from '@/lib/i18n';

type Ctx = {
  lang: Lang;
  t: Dict;
  toggle: () => void;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = 'container-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start 'en' to match the server-rendered <html lang="en" dir="ltr">.
  // Reading localStorage during render would cause a hydration mismatch, so the
  // saved language is applied in an effect on mount instead (one-frame FOUC for
  // returning AR users is the accepted tradeoff for this static export).
  const [lang, setLangState] = useState<Lang>('en');

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === 'en' || saved === 'ar') {
        setLangState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Keep <html> lang/dir + persistence in sync with state.
  useEffect(() => {
    const d = dict[lang].dir;
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', d);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((p) => (p === 'en' ? 'ar' : 'en')),
    [],
  );

  return (
    <LanguageContext.Provider value={{ lang, t: dict[lang], toggle, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
