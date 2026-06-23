import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter, Cairo } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';
import { EVENTS, VENUE_COORDS } from '@/lib/config';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const arabic = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

const SITE_URL = 'https://container3.jahdev.com';
const SITE_TITLE = 'The Container — Jeddah · Red Sea Port';
const SITE_DESC =
  "Jeddah's raw industrial techno & house venue on the Red Sea port. Licensed live electronic-music events inside Shams Container Terminal.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESC,
  applicationName: 'The Container',
  keywords: [
    'The Container',
    'Jeddah',
    'techno',
    'house',
    'electronic music',
    'Red Sea',
    'live music venue',
    'Shams Container Terminal',
    'Saudi Arabia nightlife',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_TITLE,
    description:
      "Jeddah's raw industrial techno & house venue on the Red Sea port.",
    url: SITE_URL,
    siteName: 'The Container',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/photos/hero-port.jpg',
        width: 1920,
        height: 1280,
        alt: 'The Container — a packed night crowd and blazing stage at a live electronic-music event in the Jeddah Red Sea industrial port',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description:
      "Jeddah's raw industrial techno & house venue on the Red Sea port.",
    images: ['/photos/hero-port.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#04090c',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

// ── JSON-LD structured data ──────────────────────────────────────────────
// MusicVenue (Jeddah, Red Sea port). Events are derived directly from
// lib/config EVENTS (TBA/unconfirmed entries excluded) so the structured
// data can never drift from the displayed lineup. No fabricated data.
const venueAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Shams Container Terminal, Al Moulysaa district, Jeddah port area',
  addressLocality: 'Jeddah',
  addressRegion: 'Makkah Province',
  addressCountry: 'SA',
};
const venueGeo = {
  '@type': 'GeoCoordinates',
  latitude: VENUE_COORDS.lat,
  longitude: VENUE_COORDS.lng,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicVenue',
  name: 'The Container',
  description: SITE_DESC,
  url: SITE_URL,
  image: `${SITE_URL}/photos/hero-port.jpg`,
  address: venueAddress,
  geo: venueGeo,
  event: EVENTS.filter((e) => !e.tba).map((e) => ({
    '@type': 'MusicEvent',
    name: `${e.artist} at The Container`,
    startDate: e.dateISO,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    performer: { '@type': 'PerformingGroup', name: e.artist },
    location: {
      '@type': 'MusicVenue',
      name: 'The Container',
      address: venueAddress,
      geo: venueGeo,
    },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${display.variable} ${body.variable} ${arabic.variable} bg-abyss text-bone antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#lineup"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-amber-stage focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-abyss"
        >
          Skip to events
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
