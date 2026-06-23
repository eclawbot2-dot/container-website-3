'use client';

import { useLang } from './LanguageContext';
import Reveal from './Reveal';
import { MAPS_URL, mapEmbedUrl } from '@/lib/config';
import { PHOTOS } from '@/lib/photos';

export default function Visit() {
  const { t, lang } = useLang();

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
        alt={t.alt.seaNight}
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

        {/* Map — reliable no-API-key Google Maps embed, graded to the
            cinematic teal-night palette, with an "Open in Maps" CTA. */}
        <Reveal delay={160} className="lg:pt-16">
          <div className="overflow-hidden rounded-2xl border border-bone/15 bg-midnight/50 shadow-2xl">
            <div className="map-frame relative aspect-[4/3] w-full overflow-hidden">
              <iframe
                key={lang}
                title={t.visit.mapTitle}
                src={mapEmbedUrl(lang)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
              {/* Teal/amber wash to fuse the map into the cinematic look.
                  pointer-events-none so the live map stays pannable. */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/45 via-teal-deep/10 to-transparent mix-blend-multiply"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[48px] items-center justify-between px-6 py-4 text-sm font-medium uppercase tracking-wide2 text-bone/85 transition-colors hover:text-amber-glow focus-visible:text-amber-glow"
            >
              {t.visit.mapCta}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
