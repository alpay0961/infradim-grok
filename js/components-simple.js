/**
 * Alternative Komponenten-Lösung mit Template Literals
 * Noch einfacher - keine separaten HTML-Dateien nötig!
 */

// Navbar Template
const navbarTemplate = () => `
<nav class="navbar" role="navigation" aria-label="Hauptnavigation">
    <div class="container">
        <div class="nav-wrapper">
            <div class="logo">
                <a href="/">
                    <h1 class="logo-text">INFRA<span class="logo-highlight">DIM</span></h1>
                    <p class="logo-subtitle">ELEKTRO- UND FERNMELDETECHNIK</p>
                </a>
            </div>
            <ul class="nav-menu">
                <li><a href="/index.html#home" class="nav-link" data-page="home">Home</a></li>
                <li class="has-dropdown">
                    <div class="nav-item-header">
                        <a href="/index.html#services" class="nav-link" data-page="services">Leistungen</a>
                        <button class="dropdown-toggle" aria-label="Menü umschalten">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                    </div>
                    <ul class="submenu">
                        <li><a href="/leistungen/energienetze.html" class="nav-link">Energienetze</a></li>
                        <li><a href="/leistungen/kabelmontage.html" class="nav-link">Kabelmontage</a></li>
                        <li><a href="/leistungen/netzwerktechnik.html" class="nav-link">Netzwerktechnik</a></li>
                        <li><a href="/leistungen/tiefbau.html" class="nav-link">Tiefbau</a></li>
                    </ul>
                </li>
                <li><a href="/index.html#about" class="nav-link" data-page="about">Über Uns</a></li>
                <li><a href="/karriere.html" class="nav-link" data-page="karriere">Karriere</a></li>
                <li><a href="/index.html#contact" class="nav-link" data-page="contact">Kontakt</a></li>
            </ul>
            <div class="hamburger" aria-label="Menü öffnen" role="button" tabindex="0">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</nav>
`;

// Footer Template
const footerTemplate = () => `
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-brand">
                <div class="logo">
                    <a href="/">
                        <span class="logo-text">INFRA<span class="logo-highlight">DIM</span></span>
                    </a>
                </div>
                <p>Ihr Partner für professionelle Infrastrukturlösungen</p>
                <p class="footer-location">📍 Nürnberg, Fürth, Erlangen, Schwabach & gesamte Metropolregion</p>
            </div>
            <div class="footer-links">
                <div class="footer-column">
                    <h4>Leistungen</h4>
                    <ul>
                        <li><a href="/leistungen/kabelmontage.html">Kabelmontage</a></li>
                        <li><a href="/leistungen/tiefbau.html">Tiefbau</a></li>
                        <li><a href="/leistungen/netzwerktechnik.html">LAN Datennetze</a></li>
                        <li><a href="/leistungen/energienetze.html">Energienetze</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Unternehmen</h4>
                    <ul>
                        <li><a href="/index.html#about">Über Uns</a></li>
                        <li><a href="/index.html#contact">Kontakt</a></li>
                        <li><a href="/karriere.html">Karriere</a></li>
                        <li><a href="/impressum.html">Impressum</a></li>
                        <li><a href="/datenschutz.html">Datenschutz</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Infradim. Alle Rechte vorbehalten. | Kabelmontage | Tiefbau | Netzwerktechnik | Elektroinstallation</p>
        </div>
    </div>
</footer>
`;

/**
 * Injiziert die Komponenten in die Seite
 */
function injectComponents() {
    // Navbar injizieren
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarTemplate();
    }
    
    // Footer injizieren
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerTemplate();
    }
    
    // Navigation initialisieren
    initNavigation();
    highlightActiveNavLink();
}

/**
 * Navigation initialisieren (Hamburger-Menü, Scroll-Effekt)
 */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Hamburger Menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // If it's an internal link on the same page, do smooth scroll
                const href = link.getAttribute('href');
                if (href && href.includes('#')) {
                    const targetId = href.substring(href.indexOf('#'));
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection && (window.location.pathname.endsWith('index.html') || window.location.pathname === '/')) {
                        e.preventDefault();
                        const offsetTop = targetSection.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        
                        // Close menu
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                        document.body.style.overflow = '';
                        return;
                    }
                }

                // Normal link click, close menu
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Dropdown Toggles for mobile
    if (dropdownToggles) {
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const parentLi = toggle.closest('.has-dropdown');
                if (parentLi) {
                    parentLi.classList.toggle('active');
                }
            });
        });
    }

    // Navbar Scroll Effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Update active link on scroll
            updateActiveNavLink();
        });
    }
    
    // Initial active link update
    updateActiveNavLink();
}

/**
 * Update active nav link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                
                const href = link.getAttribute('href');
                if (href.includes(`#${sectionId}`)) {
                    link.classList.add('active');
                }
            });
        }
    });
}

/**
 * Aktiven Nav-Link hervorheben beim Laden
 */
function highlightActiveNavLink() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    // Wenn wir auf einer Leistungsseite sind, markiere "Leistungen"
    if (currentPath.includes('/leistungen/')) {
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href').includes('#services')) {
                link.classList.add('active');
            }
        });
    }
    // Wenn wir auf der Karriereseite sind, markiere "Karriere"
    else if (currentPath.includes('/karriere')) {
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href').includes('/karriere')) {
                link.classList.add('active');
            }
        });
    } 
    // Wenn wir einen Hash haben, markiere den entsprechenden Link
    else if (currentHash) {
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href.includes(currentHash)) {
                link.classList.add('active');
            }
        });
    }
    // Standardmäßig "Home" markieren wenn auf Startseite
    else if (currentPath === '/index.html' || currentPath === '/') {
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href').includes('#home')) {
                link.classList.add('active');
            }
        });
    }
}

// Auto-Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
} else {
    injectComponents();
}
