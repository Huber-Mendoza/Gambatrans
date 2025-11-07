self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('gambatrans-cache').then(cache => {
      return cache.addAll([
        '/Gambatrans/', // Página raíz del proyecto
        '/Gambatrans/index.html', // tu index principal
        '/Gambatrans/manifest.json',
        '/Gambatrans/icon-192.png',
        '/Gambatrans/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
