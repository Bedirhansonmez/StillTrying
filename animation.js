// ===========================
// INTRO ANIMATION & LOADER
// ===========================

document.addEventListener('DOMContentLoaded', function() {
  // Intro button functionality
  const enterBtn = document.getElementById('enterBtn');
  
  enterBtn.addEventListener('click', function() {
    skipIntro();
  });

  // Skip intro after 3.5 seconds
  setTimeout(() => {
    // User can click to skip
  }, 3500);
});

function skipIntro() {
  const introSection = document.getElementById('introSection');
  introSection.style.animation = 'slideUp 0.5s ease-in-out forwards';
}

// ===========================
// NAVIGATION & SCROLL EFFECTS
// ===========================

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
  }
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===========================
// SERVICE CARDS ANIMATION
// ===========================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  card.style.opacity = '0';
  observer.observe(card);
});

// Observe project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.style.opacity = '0';
  observer.observe(card);
});

// ===========================
// CTA BUTTON ANIMATION
// ===========================

const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
  ctaButton.addEventListener('click', function(e) {
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      left: ${x}px;
      top: ${y}px;
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;
    
    this.appendChild(ripple);
    
    // Scroll to services
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  });
}

// ===========================
// CONTACT FORM HANDLING
// ===========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    const inputs = this.querySelectorAll('input, textarea');
    
    // Add success message animation
    const submitBtn = this.querySelector('.submit-button');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '✓ Message Sent!';
    submitBtn.style.background = '#33cc00';
    
    // Reset form
    this.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = 'var(--primary-red)';
    }, 3000);
  });
}

// ===========================
// ADD FADE-IN-UP ANIMATION
// ===========================

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ===========================
// PARALLAX EFFECT
// ===========================

window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero::before');
  const scrolled = window.pageYOffset;
  
  // Parallax for hero section
  const heroSection = document.querySelector('.hero');
  if (heroSection && scrolled < window.innerHeight) {
    heroSection.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
  }
});

// ===========================
// COUNTER ANIMATION
// ===========================

function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

const statsObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      const stat = entry.target.querySelector('h4');
      const text = stat.textContent;
      const number = parseInt(text);
      
      animateCounter(stat, number);
      entry.target.dataset.animated = 'true';
    }
  });
}, { threshold: 0.5 });

const statElements = document.querySelectorAll('.stat');
statElements.forEach(stat => {
  statsObserver.observe(stat);
});

// ===========================
// MENU TOGGLE FOR MOBILE
// ===========================

// Add mobile menu functionality if needed
const navMenu = document.querySelector('.nav-menu');
const navContainer = document.querySelector('.nav-container');

if (window.innerWidth <= 768) {
  // Add hamburger menu functionality here if needed
}

// ===========================
// MOUSE MOVE EFFECT
// ===========================

document.addEventListener('mousemove', function(e) {
  const cards = document.querySelectorAll('.service-card, .project-card');
  
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create subtle light effect on hover
    if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
      // Optional: Add glow effect
    }
  });
});

// ===========================
// PRELOAD ANIMATIONS
// ===========================

window.addEventListener('load', function() {
  // Fade in main content after loader
  const mainContent = document.querySelector('nav');
  if (mainContent) {
    mainContent.style.opacity = '0';
    mainContent.style.animation = 'fadeIn 0.5s ease-in-out 3.2s forwards';
  }
});

console.log('%cHepha Website Loaded', 'color: #cc0000; font-size: 20px; font-weight: bold;');
