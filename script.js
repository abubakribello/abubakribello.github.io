// Portfolio Interactions

document.addEventListener('DOMContentLoaded', () => {

    // 1. Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Reveal Animations on Scroll
    const revealOptions = {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('section > .container, .work-card, .about-stat, .stack-group').forEach(el => {
        el.style.opacity = '0';
        revealObserver.observe(el);
    });

    // 4. Active Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 5. Mobile nav toggle
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const navLinksEl = document.querySelector('.nav-links');
    if (mobileToggle && navLinksEl) {
        mobileToggle.addEventListener('click', () => {
            const isVisible = navLinksEl.classList.contains('nav-open');
            navLinksEl.classList.toggle('nav-open', !isVisible);
        });
    }

});
