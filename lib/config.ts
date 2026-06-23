// ── Venue config — single place to confirm/swap real values ────────────────
// TODO: confirm real handle
export const INSTAGRAM_HANDLE = 'thecontainer.jed';
// TODO: confirm real contact email
export const CONTACT_EMAIL = 'info@container.jahdev.com';

export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

// Venue geo (Al Moulysaa district, Jeddah port, Red Sea coast)
export const VENUE_COORDS = { lat: 21.2727, lng: 39.1935 };

// Open the location in Google Maps
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${VENUE_COORDS.lat},${VENUE_COORDS.lng}`;
// Static map (OpenStreetMap-based, no API key needed)
export const STATIC_MAP_URL = `https://staticmap.openstreetmap.de/staticmap.php?center=${VENUE_COORDS.lat},${VENUE_COORDS.lng}&zoom=13&size=900x500&maptype=mapnik&markers=${VENUE_COORDS.lat},${VENUE_COORDS.lng},red-pushpin`;

export type EventItem = {
  id: string;
  dateISO: string; // for sorting / datetime attr
  artist: string;
  tba?: boolean;
};

// Real confirmed lineup (verified via Bandsintown/Shazam). Lineup subject to change.
export const EVENTS: EventItem[] = [
  { id: 'anja-schneider', dateISO: '2026-08-21', artist: 'Anja Schneider' },
  { id: 'cassy', dateISO: '2026-09-11', artist: 'Cassy' },
  { id: 'tba-1', dateISO: '2026-10-16', artist: 'TBA', tba: true },
];
