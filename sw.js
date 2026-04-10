// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — SERVICE WORKER
// Offline-Fähigkeit für PWA
// ═══════════════════════════════════════════════════════

const CACHE_NAME = 'reborn-v5.3';
const OFFLINE_FALLBACK_URL = './index.html';

const CACHE_FILES = [
  './',
  './index.html',
  './manifest.json',
  './src/engine.js',
  './src/data/prolog.js',
  './src/data/akt1.js',
  './src/data/akt2.js',
  './src/data/akt3.js',
  './src/data/akt4.js',
  './src/data/akt5.js',
  './src/data/akt6.js',
  './public/images/cottage-interior.png',
  './public/images/glitch-wolves.png',
  './public/images/boy-raven-shadows.png',
  './public/images/child-on-log-goblin.png',
  './public/images/cosmic-entity-digital-upheaval.png',
  './public/images/kaito-coding-darkness.png',
  './public/images/kaito-glowing-serverroom.png',
  './public/images/kaito-injured-father.png',
  './public/images/null-skill.png',
  './public/images/protagonist-kaito.png',
  './public/images/village-three-kids-well.png',
  './public/images/village-willowbrook.png',
  './public/images/void-entity.png',
  // Vollständig
];

// Installation: alle Dateien in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_FILES);
    }).then(() => self.skipWaiting())
  );
});

// Aktivierung: alten Cache löschen
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

async function putInCache(request, response) {
  if (!response || response.status !== 200 || response.type !== 'basic') return;
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response.clone());
}

async function networkFirst(request, fallbackToIndex = false) {
  try {
    const networkResponse = await fetch(request);
    await putInCache(request, networkResponse);
    return networkResponse;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    if (fallbackToIndex) {
      const appShell = await caches.match(OFFLINE_FALLBACK_URL);
      if (appShell) return appShell;
    }
    throw error;
  }
}

// Fetch: Online-first, Fallback zu Cache
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;
  const isNavigationRequest = event.request.mode === 'navigate';

  if (!isSameOrigin) {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
    return;
  }

  event.respondWith(networkFirst(event.request, isNavigationRequest));
});
