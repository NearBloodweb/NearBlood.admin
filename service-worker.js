const CACHE_NAME = "nearblood-admin-cache-v1";
const urlsToCache = [
  "/NearBlood.admin/",
  "/NearBlood.admin/index.html",
  "/NearBlood.admin/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
