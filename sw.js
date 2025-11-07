self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('gambatrans-cache').then(cache => {
      return cache.addAll([
        '/',
        '/p/entradas-en-bloques.html'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
