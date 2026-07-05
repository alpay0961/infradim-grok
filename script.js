// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe about features
const aboutFeatures = document.querySelectorAll('.about-feature');
aboutFeatures.forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateX(-30px)';
    feature.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(feature);
});

// Observe visual cards
const visualCards = document.querySelectorAll('.visual-card');
visualCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(card);
});

// Observe info cards
const infoCards = document.querySelectorAll('.info-card');
infoCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(card);
});

// ============================================
// CONTACT FORM
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Wird gesendet\u2026';

        try {
            const response = await fetch('mail.php', {
                method: 'POST',
                body: new FormData(contactForm),
            });

            const data = await response.json();

            if (data.success) {
                showNotification(data.message, 'success');
                contactForm.reset();
            } else {
                showNotification(data.message, 'error');
            }
        } catch {
            showNotification(
                'Verbindungsfehler. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@infradim.de.',
                'error'
            );
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const duration = type === 'success' ? 4000 : 6000;

    // Build notification using DOM — never innerHTML with user-supplied text (XSS)
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'assertive');

    const content = document.createElement('div');
    content.className = 'notification-content';

    const icon = document.createElement('span');
    icon.className = 'notification-icon';
    icon.textContent = type === 'success' ? '✓' : '✕';

    const msg = document.createElement('span');
    msg.className = 'notification-message';
    msg.textContent = message; // textContent — safe, no HTML parsed

    content.appendChild(icon);
    content.appendChild(msg);
    notification.appendChild(content);

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        max-width: 360px;
        animation: slideInRight 0.4s ease, fadeOut 0.4s ease ${(duration - 400) / 1000}s forwards;
    `;

    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), duration);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 500;
    }
    
    .notification-icon {
        font-size: 20px;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// PARALLAX EFFECT FOR HERO PARTICLES
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const particles = document.querySelector('.hero-particles');
    const circuitBoard = document.querySelector('.circuit-board');
    
    if (particles) {
        particles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Circuit board rotation based on scroll (0-90 degrees)
    if (circuitBoard) {
        const maxScroll = 800; // Maximum scroll distance for full rotation
        const rotation = Math.min((scrolled / maxScroll) * 90, 90); // Cap at 90 degrees
        circuitBoard.style.transform = `rotate(${rotation}deg)`;
    }
});

// ============================================
// LAZY LOADING FOR PERFORMANCE
// ============================================
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// PREVENT CONTEXT MENU ON MOBILE (OPTIONAL)
// ============================================
if (window.matchMedia('(max-width: 768px)').matches) {
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
}

// ============================================
// INITIALIZE ON LOAD
// ============================================
window.addEventListener('load', () => {
    // Add loaded class to body for any CSS animations
    document.body.classList.add('loaded');
});

// ============================================
// RESIZE HANDLER
// ============================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize to desktop
        const hamburgerEl = document.querySelector('.hamburger');
        const navMenuEl = document.querySelector('.nav-menu');
        
        if (window.innerWidth > 768 && hamburgerEl && navMenuEl) {
            hamburgerEl.classList.remove('active');
            navMenuEl.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);
});


