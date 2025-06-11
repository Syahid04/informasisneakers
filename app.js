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


registerSW(); // Memanggil fungsi untuk mendaftarkan service worker

// Fungsi untuk mendaftarkan service worker
async function registerSW() {
  // Mengecek apakah browser mendukung Service Worker
  if ('serviceWorker' in navigator) {
    try {
      // Mencoba untuk mendaftarkan service worker dengan file "sw.js"
      // Anda bisa mengubah nama file untuk melihat apa yang terjadi jika file tidak ditemukan
      const registration = await navigator.serviceWorker.register("sw.js");       
    } catch (error) {
      // Menangani kesalahan jika pendaftaran gagal
      showResult("Error while registering: " + error.message);
    }    
  } else {
      // Jika browser tidak mendukung service worker
      showResult("Service workers API not available");
  }
}; 

// Fungsi untuk menampilkan hasil ke elemen <output>
function showResult(text) {
  document.querySelector("output").innerHTML = text;
}
