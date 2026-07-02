import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EventDetail from '@/components/EventDetail';
import { EVENT_PAGES, getEvent, VENUE_COORDS } from '@/lib/config';
import { dict } from '@/lib/i18n';
import { EVENT_PHOTOS, PHOTOS, PHOTO_DIMS } from '@/lib/photos';

const SITE_URL = 'https://container3.jahdev.com';

// Pre-render one static page per confirmed show into `out/events/<slug>`.
export function generateStaticParams() {
  return EVENT_PAGES.map((e) => ({ slug: e.id }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const ev = getEvent(params.slug);
  if (!ev) return {};
  const title = `${ev.artist} at The Container — Jeddah`;
  const desc =
    dict.en.bios[ev.id]?.[0] ??
    `${ev.artist} live at The Container, Shams Container Terminal, Jeddah.`;
  const url = `${SITE_URL}/events/${ev.id}/`;
  // Share image = the same cinematic backdrop the page hero uses, with its
  // real intrinsic dimensions (previously hardcoded to a wrong 1200x630).
  const photo = EVENT_PHOTOS[ev.id] ?? PHOTOS.crowdLights;
  const dims = PHOTO_DIMS[photo] ?? { width: 1920, height: 1280 };
  return {
    title,
    description: desc,
    alternates: { canonical: `/events/${ev.id}/` },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: 'The Container',
      type: 'website',
      images: [{ url: photo, width: dims.width, height: dims.height, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [photo],
    },
  };
}

const venueAddress = {
  '@type': 'PostalAddress',
  streetAddress:
    'Shams Container Terminal, Al Moulysaa district, Jeddah port area',
  addressLocality: 'Jeddah',
  addressRegion: 'Makkah Province',
  addressCountry: 'SA',
};

export default function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const ev = getEvent(params.slug);
  if (!ev || !ev.hasPage) notFound();

  const photo = EVENT_PHOTOS[ev.id] ?? PHOTOS.crowdLights;
  const startDate = ev.time ? `${ev.dateISO}T${ev.time}:00+03:00` : ev.dateISO;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: `${ev.artist} at The Container`,
    description:
      dict.en.bios[ev.id]?.[0] ??
      `${ev.artist} live at The Container, Jeddah.`,
    startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: `${SITE_URL}/events/${ev.id}/`,
    image: `${SITE_URL}${photo}`,
    performer: { '@type': 'PerformingGroup', name: ev.artist },
    location: {
      '@type': 'MusicVenue',
      name: 'The Container',
      address: venueAddress,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: VENUE_COORDS.lat,
        longitude: VENUE_COORDS.lng,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventDetail slug={params.slug} />
    </>
  );
}
