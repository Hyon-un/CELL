const CACHE = 'qr-sound-v1';
const ASSETS = [
  '/mnt/data/qr_sound_pwa/index.html',
  '/mnt/data/qr_sound_pwa/player.html',
  '/mnt/data/qr_sound_pwa/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
