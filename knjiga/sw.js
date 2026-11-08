// Minimal service worker. Its only job is to let phones treat Knjiga as an installable app (Chrome needs one
// for its "Install" button). It caches nothing and answers no request itself, so the page and the data always
// come straight from the network and there is never an old version stuck on a phone.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
