const CACHE = 'paisa-v3';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.add('/Paisa/index.html')));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('script.google.com') || e.request.url.includes('googleapis')) return;
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
