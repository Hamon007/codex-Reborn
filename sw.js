// =======================================================
// REBORN IN SHADOW - SERVICE WORKER
// Offline support for PWA
// =======================================================

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
  './src/data/en/prolog_en.js',
  './src/data/en/akt1_en.js',
  './src/data/en/akt2_en.js',
  './src/data/en/akt3_en.js',
  './src/data/en/akt4_en.js',
  './src/data/en/akt5_en.js',
  './src/data/en/akt6_en.js',
  './public/images/boy-raven-shadows.png',
  './public/images/chaos-village-apocalypse.png',
  './public/images/child-on-log-goblin.png',
  './public/images/city-grand-gate.png',
  './public/images/cosmic-entity-digital-upheaval.png',
  './public/images/cottage-interior.png',
  './public/images/dungeon-dark-inquisition.png',
  './public/images/elena-lullaby-night.png',
  './public/images/family-daily-montage.png',
  './public/images/family-first-night-watch.png',
  './public/images/glitch-wolves.png',
  './public/images/gregor-farewell-bedside.png',
  './public/images/gregor-mentor-triptych.png',
  './public/images/inquisition-shadow-arrest.png',
  './public/images/kaito-birth-family.png',
  './public/images/kaito-coding-darkness.png',
  './public/images/kaito-exit-stairwell.png',
  './public/images/kaito-family-after-conflict.png',
  './public/images/kaito-family-scan.png',
  './public/images/kaito-first-code-read.png',
  './public/images/kaito-first-word-kitchen.png',
  './public/images/kaito-glowing-serverroom.png',
  './public/images/kaito-injured-father.png',
  './public/images/kaito-night-archive-coding.png',
  './public/images/kaito-post-battle-night.png',
  './public/images/kaito-server-death-burst.png',
  './public/images/mira-birth-intro.png',
  './public/images/mira-scan-field.png',
  './public/images/null-skill.png',
  './public/images/protagonist-kaito.png',
  './public/images/roland-training-village.png',
  './public/images/sera-fire-outburst.png',
  './public/images/swamp-river-encounter.png',
  './public/images/village-three-kids-well.png',
  './public/images/village-willowbrook.png',
  './public/images/void-entity.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

const CACHE_NAME = `reborn-${hashCacheFiles(CACHE_FILES)}`;

function hashCacheFiles(files) {
  const input = files.join('|');
  let hash = 5381;

  for (let i = 0; i < input.length; i += 1) {
    hash = ((hash << 5) + hash) + input.charCodeAt(i);
    hash &= 0xffffffff;
  }

  return (hash >>> 0).toString(16);
}

// Installation: pre-cache all app shell files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CACHE_FILES))
      .then(() => self.skipWaiting())
  );
});

// Activation: delete old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys
        .filter((key) => key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
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

function isImageRequest(request) {
  if (request.destination === 'image') return true;
  const path = new URL(request.url).pathname.toLowerCase();
  return (
    path.endsWith('.png') ||
    path.endsWith('.jpg') ||
    path.endsWith('.jpeg') ||
    path.endsWith('.webp') ||
    path.endsWith('.avif') ||
    path.endsWith('.gif') ||
    path.endsWith('.svg')
  );
}

async function imageCacheFirst(request, event) {
  const cached = await caches.match(request);
  if (cached) {
    event.waitUntil(
      fetch(request)
        .then((response) => putInCache(request, response))
        .catch(() => null)
    );
    return cached;
  }

  try {
    const networkResponse = await fetch(request);
    await putInCache(request, networkResponse);
    return networkResponse;
  } catch (error) {
    const fallback = await caches.match(request);
    if (fallback) return fallback;
    throw error;
  }
}

// Fetch: online-first for most content, cache-first for images
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;
  const isNavigationRequest = event.request.mode === 'navigate';

  if (!isSameOrigin) {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
    return;
  }

  if (isImageRequest(event.request)) {
    event.respondWith(imageCacheFirst(event.request, event));
    return;
  }

  event.respondWith(networkFirst(event.request, isNavigationRequest));
});
