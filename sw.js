importScripts(
  // keep version up-to-date with Workbox version
  "https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js"
);

console.log("⚙️ Hello from Service Worker");

workbox.routing.registerRoute(
  // add the URL to be cached in as a regular expression, like:
  /https:\/\/jsonplaceholder\.typicode\.com/,
  new workbox.strategies.NetworkFirst()
);

workbox.precaching.precacheAndRoute([
  {
    "url": "app.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "app.js",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "index.html",
    "revision": "546e8bc5e0f4eed03999d1292eb59cef"
  },
  {
    "url": "src-sw.js",
    "revision": "b3816cd0bc0c8fae98ba8af009994cd6"
  },
  {
    "url": "workbox-config.js",
    "revision": "636ce65a32df25a4b204746d4a15cb20"
  }
]);
