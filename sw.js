// Gör att fickminnet fungerar utan nät.
// Strategi: svara direkt från cachen och hämta ny version i bakgrunden,
// så en uppdatering syns andra gången appen öppnas.
const CACHE = 'fickminne-v1';
const FILES = ['./', 'index.html', 'manifest.json', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const cache = caches.open(CACHE);
  const cached = cache.then(c => c.match(req, { ignoreSearch: true }));
  const fresh = fetch(req).then(async res => {
    if (res.ok) await (await cache).put(req, res.clone());
    return res;
  });
  e.respondWith(cached.then(hit => hit || fresh));
  // Låt uppdateringen bli klar även efter att svaret skickats
  e.waitUntil(fresh.catch(() => {}));
});
