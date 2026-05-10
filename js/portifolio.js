// ===== TABS =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById('panel-' + target).classList.add('active');
    });
});

// ===== ANIMATED COUNTERS =====
function animateCounter(el, target, duration = 1200) {
    let start = 0;
    const step = target / (duration / 16);

    const tick = () => {
        start += step;
        if (start < target) {
            el.textContent = Math.floor(start);
            requestAnimationFrame(tick);
        } else {
            el.textContent = target + '+';
        }
    };
    tick();
}

const counterEls = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            animateCounter(el, parseInt(el.dataset.count));
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

counterEls.forEach(el => counterObserver.observe(el));

// ===== FILTER SYSTEM =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const emptyState = document.getElementById('empty-state');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        let visibleCount = 0;

        projectCards.forEach((card, i) => {
            const category = card.dataset.category;
            const matches = filter === 'all' || category === filter;

            if (matches) {
                card.classList.remove('hidden');
                // Re-trigger animation
                card.classList.remove('visible');
                setTimeout(() => card.classList.add('visible'), 60 * visibleCount);
                visibleCount++;
            } else {
                card.classList.add('hidden');
                card.classList.remove('visible');
            }
        });

        if (emptyState) {
            emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    });
});

// ===== SCROLL-IN ANIMATIONS FOR CARDS =====
const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.dataset.delay || 0);
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay * 1000);
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

projectCards.forEach(card => cardObserver.observe(card));