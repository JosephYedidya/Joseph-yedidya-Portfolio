// Navigation active state
const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const navToggler = document.getElementById('navToggler');
const sidebar = document.getElementById('sidebar');

navToggler.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    navToggler.classList.toggle('active');
});

// Close sidebar when clicking on a link (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 991) {
            sidebar.classList.remove('open');
        }
    });
});

// Style switcher toggle
const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
const styleSwitcher = document.getElementById('styleSwitcher');

styleSwitcherToggler.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});

// Day/Night mode toggle
const dayNight = document.getElementById('dayNight');

dayNight.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = dayNight.querySelector('i');
    
    if (document.body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        dayNight.querySelector('i').classList.remove('fa-moon');
        dayNight.querySelector('i').classList.add('fa-sun');
    }

    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--skin-color', savedColor);
        // Set portfolio overlay gradient based on saved theme color
        const hex = savedColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        document.documentElement.style.setProperty('--portfolio-overlay-gradient', 
            `linear-gradient(135deg, rgba(${r}, ${g}, ${b}, 0.95), rgba(48, 46, 77, 0.9))`);
    } else {
        // Default gradient with #ec1839
        document.documentElement.style.setProperty('--portfolio-overlay-gradient', 
            'linear-gradient(135deg, rgba(236, 24, 57, 0.95), rgba(48, 46, 77, 0.9))');
    }
});

// Change theme color
function setActiveStyle(color) {
    document.documentElement.style.setProperty('--skin-color', color);
    localStorage.setItem('themeColor', color);
    
    // Convert hex to rgba for portfolio overlay gradient
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    document.documentElement.style.setProperty('--portfolio-overlay-gradient', 
        `linear-gradient(135deg, rgba(${r}, ${g}, ${b}, 0.95), rgba(48, 46, 77, 0.9))`);
}


// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hide style switcher on scroll
let scrollTimer;
window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains('open')) {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            styleSwitcher.classList.remove('open');
        }, 1000);
    }
});

// Typing effect
const typingText = document.querySelector('.typing');
const textArray = ['Software Engineer', 'Web Developer', 'Full Stack Developer', 'UI/UX Enthusiast'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Start typing effect
setTimeout(typeEffect, 1000);

// Animate progress bars on scroll - VERSION CORRIGÉE
const progressBars = document.querySelectorAll('.progress-in');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const targetWidth = progressBar.getAttribute('data-width');
            
            // Ajouter un petit délai pour l'animation
            setTimeout(() => {
                progressBar.style.width = targetWidth + '%';
            }, 100);
            
            // Arrêter d'observer une fois animé
            progressObserver.unobserve(progressBar);
        }
    });
}, observerOptions);

// Observer toutes les barres de progression
progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Alerte visuelle simple
function showAlert() {
const box = document.getElementById("alertBox");
box.style.display = "block";
setTimeout(() => { box.style.display = "none"; }, 2000);
return false;
}

// Back to top button functionality
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Hide loading screen after page load
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
});

// Obfuscation légère du JavaScript
(function(){
 const msg = ["Ce site appartient à Joseph Yedidya", "Toute copie est interdite 🚫"];
 console.log(msg[Math.floor(Math.random()*msg.length)]);
 })();

// GitHub Carousel
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('githubCarouselTrack');
    const prevBtn = document.getElementById('githubCarouselPrev');
    const nextBtn = document.getElementById('githubCarouselNext');
    const dotsContainer = document.getElementById('githubCarouselDots');
    
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;
    
    const cards = track.querySelectorAll('.github-card');
    const cardsPerView = getCardsPerView();
    const totalCards = cards.length;
    let currentIndex = 0;
    
    function getCardsPerView() {
        const width = window.innerWidth;
        if (width <= 767) return 1;
        if (width <= 1199) return 2;
        return 3;
    }
    
    function createDots() {
        dotsContainer.innerHTML = '';
        const totalDots = Math.ceil(totalCards / cardsPerView) - 1;
        for (let i = 0; i <= totalDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'github-carousel-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i * cardsPerView));
            dotsContainer.appendChild(dot);
        }
    }
    
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 25; // card width + gap
        const offset = currentIndex * cardWidth;
        track.style.transform = `translateX(-${offset}px)`;
        
        // Update dots
        const dots = dotsContainer.querySelectorAll('.github-carousel-dot');
        const activeDot = Math.floor(currentIndex / cardsPerView);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDot);
        });
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalCards - cardsPerView;
    }
    
    function goToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, totalCards - cardsPerView));
        updateCarousel();
    }
    
    function nextSlide() {
        if (currentIndex < totalCards - cardsPerView) {
            currentIndex++;
            updateCarousel();
        }
    }
    
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newCardsPerView = getCardsPerView();
            if (newCardsPerView !== cardsPerView) {
                currentIndex = 0;
                createDots();
            }
            updateCarousel();
        }, 250);
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Auto-play (optional - uncomment to enable)
    // let autoPlay = setInterval(nextSlide, 5000);
    // track.addEventListener('mouseenter', () => clearInterval(autoPlay));
    // track.addEventListener('mouseleave', () => autoPlay = setInterval(nextSlide, 5000));
    
    // Initialize
    createDots();
    updateCarousel();
});

// Languages Carousel
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('languagesCarouselTrack');
    const prevBtn = document.getElementById('languagesCarouselPrev');
    const nextBtn = document.getElementById('languagesCarouselNext');
    const dotsContainer = document.getElementById('languagesCarouselDots');

    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

    const cards = track.querySelectorAll('.languages-card');
    const cardsPerView = getCardsPerView();
    const totalCards = cards.length;
    let currentIndex = 0;
    let autoPlayInterval;

    function getCardsPerView() {
        const width = window.innerWidth;
        if (width <= 767) return 1;
        if (width <= 1199) return 2;
        return 3;
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        const totalDots = Math.ceil(totalCards / cardsPerView) - 1;
        for (let i = 0; i <= totalDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'languages-carousel-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i * cardsPerView));
            dotsContainer.appendChild(dot);
        }
    }

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 25; // card width + gap
        const offset = currentIndex * cardWidth;
        track.style.transform = `translateX(-${offset}px)`;

        // Update dots
        const dots = dotsContainer.querySelectorAll('.languages-carousel-dot');
        const activeDot = Math.floor(currentIndex / cardsPerView);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDot);
        });

        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalCards - cardsPerView;
    }

    function goToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, totalCards - cardsPerView));
        updateCarousel();
    }

    function nextSlide() {
        if (currentIndex < totalCards - cardsPerView) {
            currentIndex++;
            updateCarousel();
        } else {
            // Loop back to beginning
            currentIndex = 0;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else {
            // Loop to end
            currentIndex = totalCards - cardsPerView;
            updateCarousel();
        }
    }

    // Auto-play functionality
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay(); // Restart auto-play after manual interaction
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay(); // Restart auto-play after manual interaction
    });

    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newCardsPerView = getCardsPerView();
            if (newCardsPerView !== cardsPerView) {
                currentIndex = 0;
                createDots();
            }
            updateCarousel();
        }, 250);
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay(); // Pause auto-play during touch
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay(); // Resume auto-play after touch
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        }
    });

    // Pause auto-play on hover
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);

    // Initialize
    createDots();
    updateCarousel();
    startAutoPlay(); // Start auto-play when page loads
});

