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

