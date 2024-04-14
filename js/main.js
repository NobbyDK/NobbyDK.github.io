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
