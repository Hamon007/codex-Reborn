// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — SERVICE WORKER
// Offline-Fähigkeit für PWA
// ═══════════════════════════════════════════════════════

const CACHE_NAME = 'reborn-v3.8';

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

// Fetch: Cache-first Strategie
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        // Erfolgreiche Responses in Cache speichern
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      }).catch(() => {
        // Offline-Fallback
        return caches.match('./index.html');
      });
    })
  );
});
