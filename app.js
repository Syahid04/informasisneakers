// // app.js - File JavaScript utama untuk aplikasi web sneakers

// // Pendaftaran Service Worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js')
//     .then(function(registration) {
//       console.log('Service Worker berhasil didaftarkan:', registration.scope);
//     })
//     .catch(function(error) {
//       console.error('Pendaftaran Service Worker gagal:', error);
//     });
// }

// // Fungsi tambahan bisa dimasukkan di sini jika diperlukan


registerSW();

// Registers a service worker
async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      // Change the service worker URL to see what happens when the SW doesn't exist
      const registration = await navigator.serviceWorker.register("sw.js");       
    } catch (error) {
      showResult("Error while registering: " + error.message);
    }    
  } else {
      showResult("Service workers API not available");
  }
}; 

function showResult(text) {
  document.querySelector("output").innerHTML = text;
}