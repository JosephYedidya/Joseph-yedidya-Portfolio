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

