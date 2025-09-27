const CACHE = 'qr-sound-v2';
const ASSETS = [
  './',            // 루트 문서
  './index.html',
  './player.html',
  './manifest.json',
  // 오디오를 미리 캐싱하고 싶다면 아래처럼 개별 추가:
  // './audio/demo.mp3',
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
