// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the 'nav-active' class on nav-links when hamburger is clicked
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        
        // Animate the hamburger icon
        hamburger.classList.toggle('toggle');
    });

    // Close the mobile menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });
    });

});