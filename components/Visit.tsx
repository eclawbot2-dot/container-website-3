'use client';

import { useLang } from './LanguageContext';
import Reveal from './Reveal';
import { MAPS_URL, STATIC_MAP_URL } from '@/lib/config';
import { PHOTOS } from '@/lib/photos';

export default function Visit() {
  const { t } = useLang();

  const blocks = [
    { title: t.visit.addressTitle, body: t.visit.address },
    { title: t.visit.gettingThereTitle, body: t.visit.gettingThere },
    { title: t.visit.hoursTitle, body: t.visit.hours },
    { title: t.visit.entryTitle, body: t.visit.entry },
  ];

  return (
    <section
      id="visit"
      className="text-scrim grain relative w-full scroll-mt-10 overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PHOTOS.seaNight}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="duotone-img absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="font-body text-[0.72rem] font-medium uppercase tracking-mega text-amber-glow">
              {t.visit.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-none text-bone">
              {t.visit.title}
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {blocks.map((b, i) => (
              <Reveal key={i} delay={200 + i * 110}>
                <div className="border-s border-amber-stage/40 ps-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide2 text-bone">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-[0.97rem] leading-relaxed text-bone/75">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Map */}
        <Reveal delay={160} className="lg:pt-16">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-bone/15 bg-midnight/50 shadow-2xl"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={STATIC_MAP_URL}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-90 grayscale-[0.2] transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/55 to-transparent"
              />
            </div>
            <span className="flex items-center justify-between px-6 py-4 text-sm font-medium uppercase tracking-wide2 text-bone/85 transition-colors group-hover:text-amber-glow">
              {t.visit.mapCta}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              >
                →
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
