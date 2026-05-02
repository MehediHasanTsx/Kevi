"use client";

import { useEffect } from "react";

export default function SiteScripts() {
  useEffect(() => {
    // =========================================================
    // Mobile navigation toggle
    // =========================================================
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    const handleMenuClick = () => {
      if (!menuToggle || !mobileNav) return;

      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      menuToggle.classList.toggle("is-active");
      mobileNav.classList.toggle("is-open");
    };

    const handleMobileLinkClick = () => {
      if (!menuToggle || !mobileNav) return;

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.classList.remove("is-active");
      mobileNav.classList.remove("is-open");
    };

    if (menuToggle && mobileNav) {
      menuToggle.addEventListener("click", handleMenuClick);

      mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", handleMobileLinkClick);
      });
    }

    // =========================================================
    // Pricing switcher
    // =========================================================
    const pricingButtons = document.querySelectorAll<HTMLElement>(".toggle-option");
    const priceAmounts = document.querySelectorAll<HTMLElement>(".amount");

    const pricingHandlers: Array<{
      button: HTMLElement;
      handler: () => void;
    }> = [];

    pricingButtons.forEach((button) => {
      const handler = () => {
        const billing = button.dataset.billing;

        pricingButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        priceAmounts.forEach((amount) => {
          amount.style.opacity = "0";

          setTimeout(() => {
            if (billing && amount.dataset[billing]) {
              amount.textContent = amount.dataset[billing] || "";
            }

            amount.style.opacity = "1";
          }, 180);
        });
      };

      button.addEventListener("click", handler);
      pricingHandlers.push({ button, handler });
    });

    // =========================================================
    // FAQ accordion
    // =========================================================
    const accordionItems = document.querySelectorAll<HTMLElement>(".accordion-item");

    const accordionHandlers: Array<{
      trigger: Element;
      handler: () => void;
    }> = [];

    accordionItems.forEach((item) => {
      const trigger = item.querySelector(".accordion-trigger");
      const icon = item.querySelector(".accordion-icon");

      if (!trigger || !icon) return;

      const handler = () => {
        const isOpen = item.classList.contains("active");

        accordionItems.forEach((accordion) => {
          accordion.classList.remove("active");

          const accordionTrigger = accordion.querySelector(".accordion-trigger");
          const accordionIcon = accordion.querySelector(".accordion-icon");

          accordionTrigger?.setAttribute("aria-expanded", "false");

          if (accordionIcon) {
            accordionIcon.textContent = "+";
          }
        });

        if (!isOpen) {
          item.classList.add("active");
          trigger.setAttribute("aria-expanded", "true");
          icon.textContent = "−";
        }
      };

      trigger.addEventListener("click", handler);
      accordionHandlers.push({ trigger, handler });
    });

    // =========================================================
    // Use case tabs
    // =========================================================
    const tabButtons = document.querySelectorAll<HTMLElement>(".tab-button");
    const tabPanels = document.querySelectorAll<HTMLElement>(".tab-panel");

    const tabHandlers: Array<{
      button: HTMLElement;
      handler: () => void;
    }> = [];

    if (tabButtons.length && tabPanels.length) {
      tabButtons.forEach((button) => {
        const handler = () => {
          const targetId = button.dataset.tab;

          tabButtons.forEach((btn) => {
            btn.classList.remove("active");
            btn.setAttribute("aria-selected", "false");
          });

          tabPanels.forEach((panel) => panel.classList.remove("active"));

          button.classList.add("active");
          button.setAttribute("aria-selected", "true");

          if (targetId) {
            const targetPanel = document.getElementById(targetId);

            if (targetPanel) {
              targetPanel.classList.add("active");
            }
          }
        };

        button.addEventListener("click", handler);
        tabHandlers.push({ button, handler });
      });
    }

    // =========================================================
    // Scroll reveal animation
    // =========================================================
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    // =========================================================
    // Smooth scroll for anchor links
    // =========================================================
    const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const smoothScrollHandlers: Array<{
      anchor: HTMLAnchorElement;
      handler: (e: MouseEvent) => void;
    }> = [];

    anchorLinks.forEach((anchor) => {
      const handler = (e: MouseEvent) => {
        const targetId = anchor.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      anchor.addEventListener("click", handler);
      smoothScrollHandlers.push({ anchor, handler });
    });

    // =========================================================
    // Newsletter form
    // =========================================================
    const newsletterForm = document.querySelector<HTMLFormElement>(".newsletter-form");

    const handleNewsletterSubmit = (event: Event) => {
      event.preventDefault();

      if (!newsletterForm) return;

      const input = newsletterForm.querySelector<HTMLInputElement>("input");
      const btn = newsletterForm.querySelector<HTMLButtonElement>("button");

      if (!input || !btn) return;

      const value = input.value.trim();

      if (!value) {
        input.focus();
        return;
      }

      const originalText = btn.textContent || "Subscribe";

      btn.textContent = "✓ Subscribed!";
      btn.style.pointerEvents = "none";
      input.value = "";

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.pointerEvents = "";
      }, 2500);
    };

    if (newsletterForm) {
      newsletterForm.addEventListener("submit", handleNewsletterSubmit);
    }

    // =========================================================
    // Header scroll shadow
    // =========================================================
    const header = document.querySelector<HTMLElement>(".site-header");

    const handleHeaderScroll = () => {
      if (!header) return;

      const currentScroll = window.scrollY;

      if (currentScroll > 60) {
        header.style.boxShadow = "0 8px 40px rgba(35, 18, 24, 0.12)";
      } else {
        header.style.boxShadow = "";
      }
    };

    if (header) {
      window.addEventListener("scroll", handleHeaderScroll, { passive: true });
    }

    // Cleanup to avoid duplicate event listeners
    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener("click", handleMenuClick);
      }

      if (mobileNav) {
        mobileNav.querySelectorAll("a").forEach((link) => {
          link.removeEventListener("click", handleMobileLinkClick);
        });
      }

      pricingHandlers.forEach(({ button, handler }) => {
        button.removeEventListener("click", handler);
      });

      accordionHandlers.forEach(({ trigger, handler }) => {
        trigger.removeEventListener("click", handler);
      });

      tabHandlers.forEach(({ button, handler }) => {
        button.removeEventListener("click", handler);
      });

      observer.disconnect();

      smoothScrollHandlers.forEach(({ anchor, handler }) => {
        anchor.removeEventListener("click", handler);
      });

      if (newsletterForm) {
        newsletterForm.removeEventListener("submit", handleNewsletterSubmit);
      }

      window.removeEventListener("scroll", handleHeaderScroll);
    };
  }, []);

  return null;
}