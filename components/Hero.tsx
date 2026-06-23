'use client';

import { useLang } from './LanguageContext';
import LangToggle from './LangToggle';
import { INSTAGRAM_URL } from '@/lib/config';
import { PHOTOS } from '@/lib/photos';

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      id="top"
      className="text-scrim duotone-wash grain relative flex min-h-screen w-full flex-col overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PHOTOS.hero}
        alt={t.alt.hero}
        fetchPriority="high"
        decoding="async"
        className="duotone-img animate-slowZoom absolute inset-0 h-full w-full object-cover"
      />

      {/* Floating top bar: brand mark + language toggle */}
      <header className="animate-fadeIn relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <span className="font-display text-lg font-semibold tracking-wide2 text-bone/90">
          {lang === 'ar' ? 'ذا كونتينر' : 'THE CONTAINER'}
        </span>
        <LangToggle />
      </header>

      {/* Hero copy, anchored low for an editorial cinematic feel */}
      <div className="relative z-10 mx-auto mt-auto flex w-full max-w-7xl flex-col px-6 pb-20 sm:px-10 sm:pb-28">
        <p className="animate-fadeUp font-body text-[0.72rem] font-medium uppercase tracking-mega text-amber-glow opacity-0 [animation-delay:120ms]">
          {t.hero.kicker}
        </p>

        <h1 className="animate-fadeUp font-display text-[clamp(3.4rem,13vw,11rem)] font-semibold leading-[0.92] text-bone opacity-0 [animation-delay:240ms]">
          {t.hero.title}
        </h1>

        <p className="animate-fadeUp mt-6 max-w-2xl text-base leading-relaxed text-bone/80 opacity-0 [animation-delay:420ms] sm:text-lg">
          {t.hero.tagline}
        </p>

        <div className="animate-fadeUp mt-9 flex flex-wrap items-center gap-4 opacity-0 [animation-delay:560ms]">
          <a
            href="#lineup"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-stage px-7 py-3.5 text-sm font-semibold uppercase tracking-wide2 text-abyss transition-all duration-300 hover:bg-amber-glow"
          >
            {t.hero.cta}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
            >
              →
            </span>
          </a>
          {INSTAGRAM_URL ? (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-7 py-3.5 text-sm font-medium uppercase tracking-wide2 text-bone/90 backdrop-blur-sm transition-all duration-300 hover:border-amber-glow hover:text-amber-glow"
            >
              {t.hero.instagram}
            </a>
          ) : (
            <span className="inline-flex cursor-default items-center gap-2 rounded-full border border-bone/20 px-7 py-3.5 text-sm font-medium uppercase tracking-wide2 text-bone/45 backdrop-blur-sm">
              {t.igPlaceholder}
            </span>
          )}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <span className="animate-floatHint block text-bone/60" aria-hidden>
          ↓
        </span>
      </div>
    </section>
  );
}
