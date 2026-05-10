// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== CLOSE MOBILE NAV ON LINK CLICK =====
document.querySelectorAll('.nav_link, .page').forEach(link => {
    link.addEventListener('click', () => {
        const hamburger = document.getElementById('hamburger');
        if (hamburger) hamburger.checked = false;
    });
});

// ===== TYPING EFFECT FOR HERO =====
document.addEventListener('DOMContentLoaded', () => {
    const titleEl = document.getElementById('hero-title');
    if (!titleEl) return;

    const texts = ['Website para sua empresa', 'Sistemas Web sob medida', 'Landing Pages que convertem'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function type() {
        const current = texts[textIndex];

        if (isPaused) {
            isPaused = false;
            setTimeout(type, 1500);
            return;
        }

        if (!isDeleting) {
            titleEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                isDeleting = true;
                isPaused = true;
            }
        } else {
            titleEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }

        const speed = isDeleting ? 50 : 90;
        setTimeout(type, isPaused ? 1500 : speed);
    }

    // Delay initial typing
    setTimeout(type, 800);

    // ===== YEAR =====
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements that should animate on scroll
const revealEls = document.querySelectorAll(
    '.reveal-left, .reveal-right, .reveal-up, .service-card, .project-link-card, .botao'
);
revealEls.forEach(el => observer.observe(el));
