// // sw.js - Service Worker

// // Nama cache yang digunakan untuk menyimpan file
// const CACHE_NAME = 'sneakpeek-cache-v1';

// // File yang ingin dicache saat instalasi
// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/detail.html',
//   '/sneaker1.jpg',
//   '/sneaker2.jpg',
//   '/sneaker3.jpg',
//   '/sneaker4.jpg',
//   '/style.css', // ubah ke path yang sesuai
//   'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
//   'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
//   'https://fonts.googleapis.com/css2?family=Segoe+UI&display=swap'
// ];



self.addEventListener("install", async event => {
  const cache = await caches.open("pwa-assets");
  // it stores all resources on first SW install
  cache.addAll(["/",
    "style,css", 
    "index.html", 
    "detail.html", 
    "sneaker1.jpg", 
    "sneaker2.png", 
    "sneaker3.png", 
    "sneaker4.png", 
    "https://fonts.googleapis.com/css2?family=Segoe+UI&display=swap"
  ]); 
});
 
self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request).then(cachedResponse => {
	   // It can update the cache to serve updated content on the next request
         return cachedResponse || fetch(event.request);
     }
   )
  )
});



// // Event saat service worker dipasang
// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function(cache) {
//       return cache.addAll(urlsToCache); // Cache semua file yang diperlukan
//     })
//   );
// });

// // Event fetch: mengambil dari cache jika offline
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       return response || fetch(event.request); // Ambil dari cache jika tersedia
//     })
//   );
// });

// // Event aktivasi: membersihkan cache lama jika ada
// self.addEventListener('activate', function(event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.filter(function(cacheName) {
//           return cacheName !== CACHE_NAME;
//         }).map(function(cacheName) {
//           return caches.delete(cacheName); // Hapus cache lama
//         })
//       );
//     })
//   );
// });
