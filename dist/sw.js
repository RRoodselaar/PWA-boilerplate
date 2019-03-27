importScripts("precache-manifest.43f1c42db6a3208677977f74887d49f1.js", "https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js");

console.log("⚙️ Hello from Service Worker");

workbox.routing.registerRoute(
  // add the URL to be cached in as a regular expression, like:
  /https:\/\/jsonplaceholder\.typicode\.com/,
  new workbox.strategies.NetworkFirst()
);

// workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
