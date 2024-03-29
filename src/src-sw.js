import { precacheAndRoute } from "workbox-precaching";

console.log("⚙️ Hello from Service Worker");

workbox.routing.registerRoute(
  // add the URL to be cached in as a regular expression, like:
  /https:\/\/jsonplaceholder\.typicode\.com/,
  new workbox.strategies.NetworkFirst()
);

// uncomment only when service worker should activate a.s.a.p.
// workbox.skipWaiting();

addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    skipWaiting();
  } 
});

precacheAndRoute(self.__WB_MANIFEST)