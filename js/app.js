// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth',
  });
}

// Navbar links smooth scroll
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToSection(targetId);

    // Close mobile menu if open
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
});

// Counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number, .demo-number, .mini-stat-number');
  const speed = 200;

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-count'));
    let current = parseInt(counter.innerText) || 0;
    const increment = target / speed;

    if (current < target) {
      current += increment;
      counter.innerText = Math.ceil(current);
      setTimeout(() => {
        if (Math.ceil(current) < target) {
          counter.innerText = Math.ceil(current + 1);
        }
      }, 10);
    } else {
      counter.innerText = target;
    }
  });
}

// Enhanced counter animation with easing
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = 2000;
  const startTime = performance.now();
  const startValue = 0;

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(startValue + (target - startValue) * easeOut);

    element.innerText = currentValue;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.innerText = target;
    }
  }

  requestAnimationFrame(updateCounter);
}

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animated');
    }
  });
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Initialize animations on scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Counter animation trigger
let counterAnimated = false;
window.addEventListener('scroll', function () {
  const statsSection = document.querySelector('.stats-section');
  const statsSectionTop = statsSection.getBoundingClientRect().top;

  if (statsSectionTop < window.innerHeight / 2 && !counterAnimated) {
    // Animate all counters with staggered delay
    const allCounters = document.querySelectorAll('.stat-number, .demo-number, .mini-stat-number');
    allCounters.forEach((counter, index) => {
      setTimeout(() => {
        animateCounter(counter);
      }, index * 200);
    });
    counterAnimated = true;
  }
});

// Gallery lightbox effect (simple)
document.querySelectorAll('.gallery-img').forEach((img) => {
  img.addEventListener('click', function () {
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = 'scale(1.05)';
    }, 100);
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 200);
  });
});

// Add hover effect for cards
document.querySelectorAll('.card-custom').forEach((card) => {
  card.addEventListener('mouseenter', function () {
    this.style.background = 'linear-gradient(145deg, #ffffff 0%, #f0f8f0 100%)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.background = 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)';
  });
});

// Add typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function () {
  const heroTitle = document.querySelector('.hero-title');
  const originalText = heroTitle.innerText;
  setTimeout(() => {
    typeWriter(heroTitle, originalText, 50);
  }, 1000);
});

// Add parallax effect to hero section
window.addEventListener('scroll', function () {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.floating-elements div');

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Form validation (if contact form is added later)
function validateForm() {
  // Add form validation logic here
  return true;
}

// Add loading animation
window.addEventListener('load', function () {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease-in-out';

  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Mobile menu enhancement
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function () {
  setTimeout(() => {
    if (navbarCollapse.classList.contains('show')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, 300);
});

// Add search functionality (placeholder for future enhancement)
function searchContent(query) {
  // Add search functionality here
  console.log('Searching for:', query);
}

// Add print-friendly styles
window.addEventListener('beforeprint', function () {
  document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', function () {
  document.body.classList.remove('print-mode');
});
