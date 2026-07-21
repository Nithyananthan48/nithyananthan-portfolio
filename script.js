if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.addEventListener("load", () => window.scrollTo(0, 0));

const vantaTarget = document.querySelector("#vanta-bg");
if (vantaTarget && window.VANTA && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.VANTA.DOTS({
    el: vantaTarget,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    color: 0xc9ff6a,
    color2: 0x4e6555,
    backgroundColor: 0x101413,
    size: 2,
    spacing: 28,
    showLines: false,
  });
}

const emailAddress = "ananthan959794@gmail.com";
const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
const primaryEmailLink = document.querySelector(".mail");
if (primaryEmailLink) {
  primaryEmailLink.href = gmailCompose;
  primaryEmailLink.target = "_blank";
  primaryEmailLink.rel = "noreferrer";
  primaryEmailLink.innerHTML = "ananthan959794<br>@gmail.com <span>↗</span>";
}
document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  if (link.textContent.trim().toLowerCase() === "gmail") {
    link.href = gmailCompose;
    link.target = "_blank";
    link.rel = "noreferrer";
  }
});

const progress = document.querySelector(".progress");
const nav = document.querySelector(".nav-wrap");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${scrollY / max})`;
  nav.classList.toggle("scrolled", scrollY > 24);
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && window.anime) {
  anime({
    targets: ".hero h1, .hero .intro, .hero .hero-actions a, .hero-visual, .hero-index",
    opacity: [0, 1],
    translateY: [28, 0],
    duration: 950,
    easing: "easeOutExpo",
    delay: anime.stagger(110, { start: 120 }),
  });

  anime({
    targets: ".orb",
    translateY: [0, 16],
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
    duration: 4800,
    delay: anime.stagger(180),
  });
}

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (!el.classList.contains("animated")) {
          el.classList.add("animated");
          if (!prefersReducedMotion && window.anime) {
            anime({
              targets: el,
              opacity: [0, 1],
              translateY: [24, 0],
              scale: [0.98, 1],
              duration: 800,
              easing: "easeOutExpo",
              complete: () => el.classList.add("in-view"),
            });
          } else {
            el.classList.add("in-view");
          }
        }
        observer.unobserve(el);
      }
    }),
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((link) =>
  link.addEventListener("click", () => {
    document.querySelector(".menu").classList.remove("open");
    document.querySelector("nav").classList.remove("open");
  }),
);
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("open");
  document.querySelector("nav").classList.toggle("open");
});

const heroVisual = document.querySelector(".hero-visual");
const canAnimateImage = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (heroVisual && canAnimateImage && window.matchMedia("(pointer: fine)").matches) {
  heroVisual.addEventListener("pointermove", (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroVisual.style.setProperty("--mouse-x", `${x * 12}deg`);
    heroVisual.style.setProperty("--mouse-y", `${y * 12}deg`);
  });
  heroVisual.addEventListener("pointerleave", () => {
    heroVisual.style.setProperty("--mouse-x", "0deg");
    heroVisual.style.setProperty("--mouse-y", "0deg");
  });
}
