const CACHE_NAME = 'mobwik-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/offline',
  '/branding/favicon-96x96.png',
  '/branding/logo_master.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      return caches.match('/offline');
    })
  );
});
