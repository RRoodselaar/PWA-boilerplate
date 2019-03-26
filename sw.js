// first run
self.addEventListener("install", event => {
  // prevent stopping before the cache is set
  event.waitUntil(
    caches.open("precache-v1").then(cache => {
      // add response at "/" and "app.js" to cache
      cache.addAll(["/", "app.js"]);
    })
  );
});

// intercept the fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // first serve from cache then fetch online
      return response || fetch(event.request);
    })
  );
});
