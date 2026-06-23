// ── Venue config — single place to confirm/swap real values ────────────────

// Instagram: NO verified handle is known for The Container, Jeddah. We do NOT
// guess or link a profile that may not exist (that would be a fabricated link).
// Until a real handle is confirmed, the UI shows a clearly-labelled
// "coming soon" placeholder instead of an <a href>.
// TODO real IG unknown — set INSTAGRAM_HANDLE to the confirmed handle, then the
// UI will automatically render it as a live link.
export const INSTAGRAM_HANDLE: string | null = null;
export const INSTAGRAM_URL: string | null = INSTAGRAM_HANDLE
  ? `https://instagram.com/${INSTAGRAM_HANDLE}`
  : null;

// Tickets: NO verified ticketing URL is known. We never point "Tickets" at a
// guessed ticketer or at Instagram. Until a real URL is confirmed, the UI shows
// a visible "tickets coming soon" placeholder (no link).
// TODO real ticket URL unknown — set TICKETS_URL to enable live ticket links.
export const TICKETS_URL: string | null = null;

// Contact email: no live mailbox is provisioned at this address yet, so it is
// shown as a plain label rather than a mailto: link that would bounce.
// TODO confirm a real, monitored contact mailbox before linking.
export const CONTACT_EMAIL = 'info@container.jahdev.com';
export const CONTACT_EMAIL_LIVE = false;

// Venue geo (Shams Container Terminal, Jeddah port, Red Sea coast) — VERIFIED.
export const VENUE_COORDS = { lat: 21.2727, lng: 39.1935 };

// Open the location in Google Maps (new tab).
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${VENUE_COORDS.lat},${VENUE_COORDS.lng}`;

// Reliable, no-API-key Google Maps embed iframe. `hl` is set per active
// language at render time. Returns the embeddable map for the venue coords.
export function mapEmbedUrl(lang: 'en' | 'ar' = 'en'): string {
  return `https://www.google.com/maps?q=${VENUE_COORDS.lat},${VENUE_COORDS.lng}&z=15&hl=${lang}&output=embed`;
}

export type EventItem = {
  id: string;
  dateISO: string; // for sorting / datetime attr
  artist: string;
  /** Approx start time, 24h "HH:MM" local Jeddah, when verified. */
  time?: string;
  /** Genre tag, e.g. "House · Techno". */
  genre?: string;
  /** true when artist/details are not yet announced. */
  tba?: boolean;
  /** true when the show has a verified detail page (generateStaticParams). */
  hasPage?: boolean;
};

// Real confirmed lineup (verified via Bandsintown/Shazam). Lineup subject to
// change. Only entries with hasPage:true get a static /events/[slug] page.
export const EVENTS: EventItem[] = [
  {
    id: 'anja-schneider',
    dateISO: '2026-08-21',
    artist: 'Anja Schneider',
    time: '23:00',
    genre: 'House · Techno',
    hasPage: true,
  },
  {
    id: 'cassy',
    dateISO: '2026-09-11',
    artist: 'Cassy',
    genre: 'House · Techno',
    hasPage: true,
  },
  { id: 'tba-1', dateISO: '2026-10-16', artist: 'TBA', tba: true },
];

/** Look up an event by slug. Returns undefined for unknown ids (callers must guard). */
export function getEvent(id: string): EventItem | undefined {
  return EVENTS.find((e) => e.id === id);
}

// Events that get a static /events/[slug] page. With dynamicParams=false on the
// route, only these slugs are buildable — TBA/unconfirmed shows never render a page.
export const EVENT_PAGES = EVENTS.filter((e) => e.hasPage);
