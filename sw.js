/**
 * Service Worker: Python Logic Visualizer (PWA Suite Offline Engine)
 * Network-First for HTML/Navigation, Cache-First for static assets
 */

const CACHE_NAME = 'logicvis-v3.1.0';

// Core assets required for complete offline operation
const PRECACHE_URLS = [
  './',
  './index.html',
  './variable_box.html',
  './pizzeria.html',
  './diverter.html',
  './loop_deck.html',
  './slicing.html',
  './manifest.json',
  './sw.js',
  './icon.svg'
];

// Installation event: Pre-cache core assets & activate immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return Promise.allSettled(
          PRECACHE_URLS.map((url) => cache.add(url).catch((err) => {
            console.warn(`[SW] Pre-caching asset failed: ${url}`, err);
          }))
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activation event: Purge all stale caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log(`[SW] Deleting stale cache: ${name}`);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event: Network-First for HTML navigations, Cache-First for static assets
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  if (!event.request.url.startsWith('http')) {
    return;
  }

  const isNavigation = event.request.mode === 'navigate' ||
    (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'));

  if (isNavigation) {
    // Network-First: Always fetch latest version when online, fallback to cache when offline
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, copy);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cached) => {
            if (cached) return cached;
            return caches.match('./index.html').then((indexCached) => {
              if (indexCached) return indexCached;
              return caches.match('./');
            });
          });
        })
    );
    return;
  }

  // Cache-First for static assets (icons, svg, fonts, etc.)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          (networkResponse.type === 'basic' || networkResponse.type === 'cors')
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch((err) => {
        console.warn('[SW] Offline asset fetch failed:', event.request.url);
        throw err;
      });
    })
  );
});

// Support manual skip-waiting trigger
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
