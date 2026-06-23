'use client';

import { useLang } from './LanguageContext';

/**
 * Bilingual EN/AR toggle. Shows the language you can switch TO.
 * Updates html lang/dir + persists via LanguageContext.
 */
export default function LangToggle({
  className = '',
}: {
  className?: string;
}) {
  const { lang, t, toggle } = useLang();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.langToggle.switchTo}
      title={t.langToggle.switchTo}
      className={`group inline-flex items-center gap-2 rounded-full border border-bone/25 bg-abyss/40 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-wide2 text-bone/85 backdrop-blur-md transition-all duration-300 hover:border-amber-glow/70 hover:text-amber-glow ${className}`}
    >
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-full bg-amber-stage transition-transform duration-300 group-hover:scale-125"
      />
      <span className={lang === 'ar' ? 'font-body' : 'font-arabic'}>
        {t.langToggle.label}
      </span>
    </button>
  );
}
