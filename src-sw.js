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

workbox.precaching.precacheAndRoute([]);
