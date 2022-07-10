const cacheName = "FindTune";
const filesToCache = [
  "/",
  // templates
  "/templates/404/pagenotfound.html",
  "/templates/FoundSong/FoundSong.html",
  "/templates/LoginAndRegestration/LoginAndRegestration.html",
  "/templates/UserProfile/Account.html",
  "/templates/Home.html",
  // Styles
  "/static/Script.js",
  "/static/offline.html",
  "/static/service-worker.js",
  "/static/manifest.json",

  "/static/JS/UserProfile/UserProfile.js",

  "/static/CSS/404/style.css",
  "/static/CSS/FoundSong/FoundSong.css",
  "/static/CSS/Home/Home.css",
  "/static/CSS/Home/LandingPagePreviews.css",
  "/static/CSS/LoginAndRegestration/LoginAndRegestration.css",
  "/static/CSS/Main.css",
];

self.addEventListener("install", (event) => {
  console.log("Service Worker : Installed!");

  event.waitUntil(
    (async () => {
      try {
        cache_obj = await caches.open(cache);
        cache_obj.addAll(caching_files);
      } catch {
        console.log("error occured while caching...");
      }
    })()
  );
});

self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== cacheName) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", function (e) {
  console.log("[ServiceWorker] Fetch", e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return (
        response ||
        fetch(e.request).catch((error) => {
          console.log("Fetch failed; returning offline page instead.", error);
          let url = e.request.url;
          let extension = url.split(".").pop();

          if (extension === "jpg" || extension === "png") {
            const FALLBACK_IMAGE = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="180" stroke-linejoin="round">
                <path stroke="#DDD" stroke-width="25" d="M99,18 15,162H183z"/>
                <path stroke-width="17" fill="#FFF" d="M99,18 15,162H183z" stroke="#eee"/>
                <path d="M91,70a9,9 0 0,1 18,0l-5,50a4,4 0 0,1-8,0z" fill="#aaa"/>
                <circle cy="138" r="9" cx="100" fill="#aaa"/>
                </svg>`;

            return Promise.resolve(
              new Response(FALLBACK_IMAGE, {
                headers: {
                  "Content-Type": "image/svg+xml",
                },
              })
            );
          }

          return caches.match("offline.html");
        })
      );
    })
  );
});
