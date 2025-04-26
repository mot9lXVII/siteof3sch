document.addEventListener('DOMContentLoaded', () => {
    // Fade-in on scroll
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    // Carousel
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let index = 0;

    if (carousel && items.length) {
        const moveCarousel = () => {
            carousel.style.transform = `translateX(-${index * 100}%)`;
        };

        prevBtn.addEventListener('click', () => {
            index = (index > 0) ? index - 1 : items.length - 1;
            moveCarousel();
        });

        nextBtn.addEventListener('click', () => {
            index = (index < items.length - 1) ? index + 1 : 0;
            moveCarousel();
        });

        setInterval(() => {
            index = (index < items.length - 1) ? index + 1 : 0;
            moveCarousel();
        }, 3000);
    }

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});