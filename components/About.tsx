'use client';

import { useLang } from './LanguageContext';
import Reveal from './Reveal';
import PhotoPanel from './PhotoPanel';
import { PHOTOS } from '@/lib/photos';

export default function About() {
  const { t } = useLang();

  return (
    <>
      {/* Identity panel over the container-stack photo */}
      <PhotoPanel src={PHOTOS.containerStack} alt={t.alt.containerStack} position="items-center" minH="min-h-screen">
        <div className="ms-auto max-w-2xl text-start">
          <Reveal>
            <p className="font-body text-[0.72rem] font-medium uppercase tracking-mega text-amber-glow">
              {t.about.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-[1.02] text-bone">
              {t.about.title}
            </h2>
          </Reveal>
          {t.about.body.map((para, i) => (
            <Reveal key={i} delay={240 + i * 120}>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-bone/80">
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </PhotoPanel>

      {/* Stats strip on steel/concrete */}
      <section className="text-scrim grain relative overflow-hidden border-y border-bone/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTOS.steelConcrete}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="duotone-img absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-px px-6 py-20 sm:grid-cols-3 sm:px-10">
          {t.about.stats.map((s, i) => (
            <Reveal key={i} delay={i * 140} className="px-2 text-center sm:px-6">
              <p className="font-display text-3xl font-semibold text-amber-glow sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-wide2 text-bone/70">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
