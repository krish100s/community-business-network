(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (prefersReducedMotion.matches || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  function animateCountUp(el) {
    if (!el || el.dataset.gcbAnimated === "true") return;
    const targetText = el.dataset.countTarget || el.textContent.trim();
    const match = targetText.match(/[\d,.]+/);
    if (!match) return;
    const raw = match[0].replace(/,/g, "");
    const value = parseFloat(raw);
    if (Number.isNaN(value)) return;
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const suffix = targetText.replace(match[0], "");
    const state = { value: 0 };
    el.dataset.gcbAnimated = "true";
    el.textContent = `0${suffix}`;
    gsap.to(state, {
      value,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true
      },
      onUpdate: () => {
        const formatted = state.value.toFixed(decimals);
        el.textContent = `${formatted}${suffix}`;
      }
    });
  }

  window.GCBAnimateCountUp = animateCountUp;

  function watchCountTargets() {
    const watched = new WeakSet();
    const targets = ".stat-number, .stat-num, .summary-card .value";

    const process = (root) => {
      gsap.utils.toArray(root.querySelectorAll ? root.querySelectorAll(targets) : []).forEach((el) => {
        if (watched.has(el) || !el.dataset.countTarget) return;
        watched.add(el);
        animateCountUp(el);
      });
    };

    process(document);

    const observer = new MutationObserver(() => process(document));
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["data-count-target"]
    });
  }

  const heroSelectors = [
    ".hero",
    ".hero-strip",
    ".page-hero",
    ".post-hero",
    ".hero-inner",
    ".hero-content",
    ".hero-copy",
    ".hero-left",
    ".hero-right",
    ".auth-container",
    ".auth-panel",
    ".auth-aside",
    ".shell",
    ".page-wrap > .section:first-child"
  ].join(", ");

  gsap.utils.toArray(heroSelectors).forEach((el) => {
    gsap.fromTo(el, { autoAlpha: 0, y: 18, scale: 0.98 }, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  gsap.utils.toArray("header").forEach((el) => {
    gsap.fromTo(el, { autoAlpha: 0, y: -14 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  gsap.utils.toArray("h1, h2, h3, .section-header h2, .section-eyebrow, .eyebrow, .panel-title h2, .hero-tag, .hero-badge").forEach((el) => {
    gsap.fromTo(el, { autoAlpha: 0, x: -28 }, {
      autoAlpha: 1,
      x: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  const cardSelectors = [
    ".card",
    ".business-card",
    ".feature-card",
    ".mission-card",
    ".benefit-card",
    ".team-card",
    ".profile-card",
    ".stat-card",
    ".why-card",
    ".summary-card",
    ".how-card",
    ".panel",
    ".biz-item",
    ".post-card"
  ].join(", ");

  gsap.utils.toArray(cardSelectors).forEach((el) => {
    gsap.fromTo(el, { autoAlpha: 0, y: 40 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  gsap.utils.toArray(".business-grid, .feature-grid, .benefits-grid, .team-grid, .stats-grid, .why-grid, .how-grid, .grid-cards").forEach((grid) => {
    const items = grid.querySelectorAll(".card, .business-card, .feature-card, .mission-card, .benefit-card, .team-card, .profile-card, .stat-card, .why-card, .summary-card, .how-card, .biz-item, .post-card");
    if (!items.length) return;
    gsap.fromTo(items, { autoAlpha: 0, y: 40 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.75,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: grid,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  gsap.utils.toArray("img, .card-img-wrap, .hero-image, .hero-visual img, .avatar-inner img, .biz-logo img, .card-initials").forEach((el) => {
    gsap.fromTo(el, { autoAlpha: 0, scale: 0.95 }, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  watchCountTargets();

  gsap.utils.toArray("footer").forEach((el) => {
    gsap.fromTo(el, { autoAlpha: 0, y: 24 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 92%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });
})();
