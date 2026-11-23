
/* Дополнительные эффекты. Исходный script.js остаётся нетронутым. */
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const updateHeader = () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 35);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    // Плавное появление содержимого по мере прокрутки.
    const candidates = document.querySelectorAll(
        '.section-title, .about-content, .planet-card, .stat-item, ' +
        '.timeline-item, .gallery-item, .video-item, .contact-form, .contact-info'
    );
    candidates.forEach((el, i) => {
        el.classList.add('cosmic-reveal');
        if (el.classList.contains('planet-card')) {
            el.style.transitionDelay = `${(i % 4) * 65}ms`;
        }
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
        candidates.forEach(el => observer.observe(el));
    } else {
        candidates.forEach(el => el.classList.add('is-visible'));
    }

    // Закрытие окна планеты кликом по затемнённому фону и клавишей Escape.
    const modal = document.querySelector('.planet-modal');
    if (modal) {
        modal.addEventListener('click', event => {
            if (event.target === modal) modal.style.display = 'none';
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') modal.style.display = 'none';
        });
    }

    // Подсветка активного пункта меню по текущей странице.
    const currentFile = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const target = (link.getAttribute('href') || '').split('#')[0];
        if (target === currentFile) link.setAttribute('aria-current', 'page');
    });
});
