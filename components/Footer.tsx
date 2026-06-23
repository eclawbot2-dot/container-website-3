'use client';

import { useLang } from './LanguageContext';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, CONTACT_EMAIL } from '@/lib/config';

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-bone/10 bg-abyss">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_120%,rgba(255,138,61,0.14)_0%,rgba(4,9,12,0)_55%)]"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl font-semibold tracking-wide2 text-bone">
              {lang === 'ar' ? 'ذا كونتينر' : 'THE CONTAINER'}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-bone/60">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide2 text-amber-glow">
                {t.footer.follow}
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-bone/80 transition-colors hover:text-amber-glow"
              >
                @{INSTAGRAM_HANDLE}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide2 text-amber-glow">
                {t.footer.contact}
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 block text-sm text-bone/80 transition-colors hover:text-amber-glow"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-bone/10 pt-6 text-xs text-bone/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.eventsNote}</p>
          <p>
            © {year} {lang === 'ar' ? 'ذا كونتينر' : 'The Container'}.{' '}
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
