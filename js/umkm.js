// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Counter animation
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = 2000;
  const startTime = performance.now();
  const startValue = 0;

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
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

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Counter animation trigger
let counterAnimated = false;
window.addEventListener('scroll', function () {
  const statsSection = document.querySelector('.stats-umkm');
  if (statsSection) {
    const statsSectionTop = statsSection.getBoundingClientRect().top;

    if (statsSectionTop < window.innerHeight / 2 && !counterAnimated) {
      const allCounters = document.querySelectorAll('.stat-number');
      allCounters.forEach((counter, index) => {
        setTimeout(() => {
          animateCounter(counter);
        }, index * 200);
      });
      counterAnimated = true;
    }
  }
});

// Contact button functionality
document.querySelectorAll('.contact-btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    const card = this.closest('.umkm-card');
    const phoneElement = card.querySelector('.umkm-info span');
    const phoneNumber = phoneElement ? phoneElement.textContent.replace(/[^\d]/g, '') : '';
    const umkmName = card.querySelector('.umkm-title').textContent;

    if (phoneNumber) {
      const message = `Halo, saya tertarik dengan produk ${umkmName}. Mohon informasi lebih lanjut.`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  });
});

// Mobile navbar close
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
});

// Loading animation
window.addEventListener('load', function () {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease-in-out';

  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});
