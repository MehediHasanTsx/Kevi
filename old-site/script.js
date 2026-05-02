// =========================================================
// Mobile navigation toggle
// =========================================================
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.classList.toggle('is-active');
    mobileNav.classList.toggle('is-open');
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('is-active');
      mobileNav.classList.remove('is-open');
    });
  });
}

// =========================================================
// Pricing switcher (monthly / yearly) with animation
// =========================================================
const pricingButtons = document.querySelectorAll('.toggle-option');
const priceAmounts = document.querySelectorAll('.amount');

pricingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const billing = button.dataset.billing;

    pricingButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    priceAmounts.forEach((amount) => {
      // Quick fade effect on price change
      amount.style.opacity = '0';
      setTimeout(() => {
        amount.textContent = amount.dataset[billing];
        amount.style.opacity = '1';
      }, 180);
    });
  });
});

// =========================================================
// FAQ accordion interaction
// =========================================================
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const trigger = item.querySelector('.accordion-trigger');
  const icon = item.querySelector('.accordion-icon');

  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    accordionItems.forEach((accordion) => {
      accordion.classList.remove('active');
      accordion.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      accordion.querySelector('.accordion-icon').textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
      icon.textContent = '−';
    }
  });
});

// =========================================================
// Use case tabs
// =========================================================
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

if (tabButtons.length && tabPanels.length) {
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.tab;

      tabButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      tabPanels.forEach((panel) => panel.classList.remove('active'));

      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

// =========================================================
// Scroll reveal animation using Intersection Observer
// =========================================================
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealElements.forEach((element) => observer.observe(element));

// =========================================================
// Smooth scroll for anchor links (enhanced)
// =========================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// =========================================================
// Demo newsletter interaction
// =========================================================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = newsletterForm.querySelector('input');
    const value = input.value.trim();

    if (!value) {
      input.focus();
      return;
    }

    // Create a success message
    const btn = newsletterForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = '✓ Subscribed!';
    btn.style.pointerEvents = 'none';
    input.value = '';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.pointerEvents = '';
    }, 2500);
  });
}

// =========================================================
// Header scroll shadow enhancement
// =========================================================
const header = document.querySelector('.site-header');

if (header) {
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 60) {
      header.style.boxShadow = '0 8px 40px rgba(35, 18, 24, 0.12)';
    } else {
      header.style.boxShadow = '';
    }

    lastScroll = currentScroll;
  }, { passive: true });
}
