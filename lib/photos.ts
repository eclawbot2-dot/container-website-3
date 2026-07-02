// Self-hosted, duotone-graded photographic panels.
// All files verified > 15kB JPEG in /public/photos. Unsplash-sourced, royalty-free.
export const PHOTOS = {
  hero: '/photos/hero-port.jpg',
  containers: '/photos/containers.jpg',
  warehouseCrowd: '/photos/warehouse-crowd.jpg',
  djDecks: '/photos/dj-decks.jpg',
  seaNight: '/photos/sea-night.jpg',
  crowdSilhouette: '/photos/crowd-silhouette.jpg',
  steelConcrete: '/photos/steel-concrete.jpg',
  portDusk: '/photos/port-dusk.jpg',
  lightsWarehouse: '/photos/lights-warehouse.jpg',
  turntables: '/photos/turntables.jpg',
  containerStack: '/photos/container-stack.jpg',
  crowdLights: '/photos/crowd-lights.jpg',
} as const;

// Per-event cinematic backdrop, keyed by EventItem.id.
export const EVENT_PHOTOS: Record<string, string> = {
  'anja-schneider': PHOTOS.djDecks,
  cassy: PHOTOS.turntables,
  'tba-1': PHOTOS.crowdSilhouette,
};

// Intrinsic pixel dimensions of the photos used in OpenGraph/Twitter metadata
// (verified from the JPEG headers — keep in sync if a file is replaced).
export const PHOTO_DIMS: Record<string, { width: number; height: number }> = {
  [PHOTOS.hero]: { width: 1920, height: 1280 },
  [PHOTOS.djDecks]: { width: 1920, height: 1281 },
  [PHOTOS.turntables]: { width: 2000, height: 1333 },
  [PHOTOS.crowdSilhouette]: { width: 2000, height: 1335 },
  [PHOTOS.crowdLights]: { width: 2000, height: 1335 },
};
