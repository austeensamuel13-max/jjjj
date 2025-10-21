document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Toggle the navigation menu on mobile click
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close the menu when a link is clicked (on mobile)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
});
