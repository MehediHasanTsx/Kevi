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
// Pricing switcher (monthly / yearly)
// =========================================================
const pricingButtons = document.querySelectorAll('.toggle-option');
const priceAmounts = document.querySelectorAll('.amount');

pricingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const billing = button.dataset.billing;

    pricingButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    priceAmounts.forEach((amount) => {
      amount.textContent = amount.dataset[billing];
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
    threshold: 0.15,
  }
);

revealElements.forEach((element) => observer.observe(element));

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

    alert(`Thanks! ${value} has been added to the list.`);
    newsletterForm.reset();
  });
}
