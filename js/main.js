document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        // Toggle class 'active' pada tombol hamburger
        menuToggle.classList.toggle('active');

        // Toggle class 'show' pada daftar menu
        navUl.classList.toggle('show');
    });
});

// Ambil elemen teks welcome
var welcomeText = document.querySelector('.welcome-text');

// Fungsi untuk menentukan apakah teks welcome harus ditampilkan atau disembunyikan
function toggleWelcomeText() {
  if (window.scrollY > 50) {
    welcomeText.style.display = 'none'; // Jika pengguna menggulir halaman, sembunyikan teks welcome
  } else {
    welcomeText.style.display = 'block'; // Jika pengguna berada di bagian atas halaman, tampilkan teks welcome
  }
}

// Tambahkan event listener untuk mengaktifkan fungsi ketika halaman digulir
window.addEventListener('scroll', toggleWelcomeText);
