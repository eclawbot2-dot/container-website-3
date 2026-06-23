'use client';

import Link from 'next/link';
import { useLang } from './LanguageContext';
import LangToggle from './LangToggle';
import Reveal from './Reveal';
import Footer from './Footer';
import {
  getEvent,
  TICKETS_URL,
  MAPS_URL,
  mapEmbedUrl,
} from '@/lib/config';
import { formatEventDate, formatEventTime } from '@/lib/i18n';
import { EVENT_PHOTOS, PHOTOS } from '@/lib/photos';

export default function EventDetail({ slug }: { slug: string }) {
  const { t, lang } = useLang();
  const ev = getEvent(slug);

  if (!ev || ev.tba) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-abyss px-6 text-center">
        <p className="font-display text-3xl text-bone">{t.event.notFound}</p>
        <Link
          href="/"
          className="rounded-full bg-amber-stage px-6 py-3 text-sm font-semibold uppercase tracking-wide2 text-abyss transition-colors hover:bg-amber-glow"
        >
          {t.event.backHome}
        </Link>
      </main>
    );
  }

  const photo = EVENT_PHOTOS[ev.id] ?? PHOTOS.crowdLights;
  const bio = t.bios[ev.id] ?? [];
  const time = formatEventTime(ev.time);
  const arrow = (
    <span
      aria-hidden
      className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
    >
      →
    </span>
  );

  return (
    <main className="relative bg-abyss">
      {/* ── Full-bleed cinematic hero ───────────────────────────── */}
      <section className="text-scrim duotone-wash grain relative flex min-h-screen w-full flex-col overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          className="duotone-img animate-slowZoom absolute inset-0 h-full w-full object-cover"
        />

        {/* Top bar: brand + back + language */}
        <header className="animate-fadeIn relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-6 sm:px-10">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-wide2 text-bone/90 transition-colors hover:text-amber-glow"
          >
            {lang === 'ar' ? 'ذا كونتينر' : 'THE CONTAINER'}
          </Link>
          <LangToggle />
        </header>

        <div className="relative z-10 mx-auto mt-auto flex w-full max-w-7xl flex-col px-6 pb-20 sm:px-10 sm:pb-28">
          <Link
            href="/#lineup"
            className="group animate-fadeUp mb-7 inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-wide2 text-bone/70 opacity-0 transition-colors [animation-delay:80ms] hover:text-amber-glow"
          >
            <span aria-hidden className="rtl:rotate-180">
              ←
            </span>
            {t.event.backToEvents}
          </Link>

          <p className="animate-fadeUp font-body text-[0.72rem] font-medium uppercase tracking-mega text-amber-glow opacity-0 [animation-delay:120ms]">
            {t.event.eyebrow}
          </p>

          <h1 className="animate-fadeUp font-display text-[clamp(3rem,11vw,9rem)] font-semibold leading-[0.92] text-bone opacity-0 [animation-delay:240ms]">
            {ev.artist}
          </h1>

          <p className="animate-fadeUp mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-bone/85 opacity-0 [animation-delay:420ms] sm:text-lg">
            <time dateTime={ev.dateISO} className="font-medium">
              {formatEventDate(ev.dateISO, lang)}
            </time>
            {time && (
              <>
                <span aria-hidden className="text-amber-glow/70">
                  ·
                </span>
                <span>{time}</span>
              </>
            )}
            {ev.genre && (
              <>
                <span aria-hidden className="text-amber-glow/70">
                  ·
                </span>
                <span>{ev.genre}</span>
              </>
            )}
          </p>

          <div className="animate-fadeUp mt-9 opacity-0 [animation-delay:560ms]">
            {TICKETS_URL ? (
              <a
                href={TICKETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-stage px-7 py-3.5 text-sm font-semibold uppercase tracking-wide2 text-abyss transition-all duration-300 hover:bg-amber-glow"
              >
                {t.event.ticketsCta}
                {arrow}
              </a>
            ) : (
              <span className="inline-flex cursor-default items-center gap-2 rounded-full border border-bone/25 px-7 py-3.5 text-sm font-medium uppercase tracking-wide2 text-bone/50 backdrop-blur-sm">
                {t.event.ticketsSoon}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── Details ─────────────────────────────────────────────── */}
      <section className="relative w-full bg-abyss py-24 sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(16,71,79,0.45)_0%,rgba(4,9,12,0)_60%)]"
        />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: bio + facts */}
          <div>
            {bio.length > 0 && (
              <Reveal>
                <h2 className="text-sm font-semibold uppercase tracking-wide2 text-amber-glow">
                  {t.event.bioTitle}
                </h2>
                <div className="mt-4 space-y-4">
                  {bio.map((p, i) => (
                    <p
                      key={i}
                      className="text-lg leading-relaxed text-bone/80"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal delay={120}>
              <div className="mt-10 space-y-8">
                <div className="border-s border-amber-stage/40 ps-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide2 text-bone">
                    {t.event.whenTitle}
                  </h3>
                  <p className="mt-2 text-[0.97rem] leading-relaxed text-bone/75">
                    {formatEventDate(ev.dateISO, lang)}
                  </p>
                  <p className="mt-1 text-[0.97rem] leading-relaxed text-bone/75">
                    {time
                      ? `${t.event.timeApprox} ${time}`
                      : t.event.timeTba}
                  </p>
                </div>

                {ev.genre && (
                  <div className="border-s border-amber-stage/40 ps-5">
                    <h3 className="text-sm font-semibold uppercase tracking-wide2 text-bone">
                      {t.event.genreTitle}
                    </h3>
                    <p className="mt-2 text-[0.97rem] leading-relaxed text-bone/75">
                      {ev.genre}
                    </p>
                  </div>
                )}

                <div className="border-s border-amber-stage/40 ps-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide2 text-bone">
                    {t.event.whereTitle}
                  </h3>
                  <p className="mt-2 text-[0.97rem] leading-relaxed text-bone/75">
                    {t.visit.address}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-bone/55">
                  {t.event.lineupNote}
                </p>
              </div>
            </Reveal>

            {/* Tickets block */}
            <Reveal delay={200}>
              <div className="mt-10 rounded-2xl border border-bone/12 bg-midnight/40 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide2 text-amber-glow">
                  {t.event.ticketsTitle}
                </h3>
                {TICKETS_URL ? (
                  <a
                    href={TICKETS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-2 rounded-full bg-amber-stage px-6 py-3 text-sm font-semibold uppercase tracking-wide2 text-abyss transition-all duration-300 hover:bg-amber-glow"
                  >
                    {t.event.ticketsCta}
                    {arrow}
                  </a>
                ) : (
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-bone/65">
                    {t.event.ticketsSoonNote}
                  </p>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right: map */}
          <Reveal delay={160} className="lg:pt-1">
            <div className="overflow-hidden rounded-2xl border border-bone/15 bg-midnight/50 shadow-2xl">
              <div className="map-frame relative aspect-[4/3] w-full overflow-hidden">
                <iframe
                  key={lang}
                  title={t.event.mapTitle}
                  src={mapEmbedUrl(lang)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/45 via-teal-deep/10 to-transparent mix-blend-multiply"
                />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[48px] items-center justify-between px-6 py-4 text-sm font-medium uppercase tracking-wide2 text-bone/85 transition-colors hover:text-amber-glow"
              >
                {t.event.mapCta}
                {arrow}
              </a>
            </div>

            <Link
              href="/#lineup"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide2 text-bone/70 transition-colors hover:text-amber-glow"
            >
              <span aria-hidden className="rtl:rotate-180">
                ←
              </span>
              {t.event.backToEvents}
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
