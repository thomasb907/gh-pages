// sw.js

// install event
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('mouscache')
        .then((cache) => {
          return cache.addAll([
            './',
            'pwa.html',
            'styles.css',
            'sw.js',
            './imgs/a.jpg',
            './imgs/b.jpg',
            './imgs/c.jpg',
            './imgs/d.jpg',
         ]);
        })
        .then(() => {
          return self.skipWaiting();
        })
    );
  });
  
  // fetch event
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  