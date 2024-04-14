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

<<<<<<< HEAD
// Ambil elemen navbar
var navbar = document.querySelector("nav");

// Atur event saat halaman di-scroll
window.addEventListener("scroll", function() {
  // Jika posisi scroll > 50, maka atur top navbar menjadi 0
  if (window.scrollY > 50) {
    navbar.style.top = "0";
  } else {
    // Jika tidak, atur top navbar menjadi -50px (di luar layar)
    navbar.style.top = "-50px";
  }
});
=======
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
>>>>>>> 129cb8404b781ae7fb49c4f297b1dc6db4e2ad84
