'use client';

import { useLang } from './LanguageContext';
import Reveal from './Reveal';
import { EVENTS, INSTAGRAM_URL } from '@/lib/config';
import { formatEventDate } from '@/lib/i18n';
import { EVENT_PHOTOS, PHOTOS } from '@/lib/photos';

export default function Lineup() {
  const { t, lang } = useLang();

  return (
    <section
      id="lineup"
      className="relative w-full scroll-mt-10 bg-abyss py-24 sm:py-32"
    >
      {/* subtle teal vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(16,71,79,0.45)_0%,rgba(4,9,12,0)_60%)]"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10">
        <header className="mb-14 max-w-3xl">
          <Reveal>
            <p className="font-body text-[0.72rem] font-medium uppercase tracking-mega text-amber-glow">
              {t.lineup.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-[1.0] text-bone">
              {t.lineup.title}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 text-lg text-bone/75">{t.lineup.subtitle}</p>
          </Reveal>
        </header>

        <div className="space-y-7">
          {EVENTS.map((ev, i) => {
            const photo = EVENT_PHOTOS[ev.id] ?? PHOTOS.crowdLights;
            const artist = ev.tba ? t.lineup.tba : ev.artist;
            return (
              <Reveal key={ev.id} delay={i * 130}>
                <article className="group relative overflow-hidden rounded-2xl border border-bone/12 bg-midnight/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    decoding="async"
                    className="duotone-img absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-abyss/92 via-abyss/70 to-abyss/35 rtl:bg-gradient-to-l"
                  />
                  <div className="relative z-10 flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
                    <div>
                      <time
                        dateTime={ev.dateISO}
                        className="font-body text-xs font-medium uppercase tracking-wide2 text-amber-glow"
                      >
                        {formatEventDate(ev.dateISO, lang)}
                      </time>
                      <h3 className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-none text-bone">
                        {artist}
                      </h3>
                    </div>
                    {!ev.tba ? (
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-amber-stage px-6 py-3 text-sm font-semibold uppercase tracking-wide2 text-abyss transition-all duration-300 hover:bg-amber-glow sm:self-auto"
                      >
                        {t.lineup.ticketsCta}
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    ) : (
                      <span className="inline-flex shrink-0 items-center self-start rounded-full border border-bone/25 px-6 py-3 text-sm font-medium uppercase tracking-wide2 text-bone/60 sm:self-auto">
                        {t.lineup.tba}
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-bone/55">
            {t.lineup.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
