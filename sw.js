importScripts("precache-manifest.cbd4a1f51a9f4931d7ff80303d9b1149.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

console.log("⚙️ Hello from Service Worker");

workbox.routing.registerRoute(
  // add the URL to be cached in as a regular expression, like:
  /https:\/\/jsonplaceholder\.typicode\.com/,
  new workbox.strategies.NetworkFirst()
);

// uncomment only when service worker should activate a.s.a.p.
// workbox.skipWaiting();

//add in src-sw.js
addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    skipWaiting();
  } 
});

workbox.precaching.precacheAndRoute(self.__precacheManifest);
