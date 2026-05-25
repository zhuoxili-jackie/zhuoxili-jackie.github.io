/* ============================================================
   Zhuoxi Li — Personal Homepage  ·  interactions
   ============================================================ */
(function () {
  "use strict";

  var body = document.body;

  /* ---------- Language toggle (persisted) ---------- */
  var langBtn = document.getElementById("langBtn");

  function applyLang(lang) {
    if (lang === "zh") {
      body.classList.add("lang-zh");
      document.documentElement.lang = "zh-CN";
    } else {
      body.classList.remove("lang-zh");
      document.documentElement.lang = "en";
    }
    try { localStorage.setItem("site-lang", lang); } catch (e) {}
  }

  var saved = "en";
  try { saved = localStorage.getItem("site-lang") || "en"; } catch (e) {}
  applyLang(saved);

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      applyLang(body.classList.contains("lang-zh") ? "en" : "zh");
    });
  }

  /* ---------- Mobile menu ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { navLinks.classList.remove("open"); });
    });
  }

  /* ---------- Navbar shadow + back-to-top on scroll ---------- */
  var navbar = document.getElementById("navbar");
  var toTop = document.getElementById("toTop");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (navbar) navbar.classList.toggle("scrolled", y > 10);
    if (toTop) toTop.classList.toggle("show", y > 480);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Lightbox ---------- */
  var lbOverlay = document.createElement("div");
  lbOverlay.className = "lightbox-overlay";
  lbOverlay.innerHTML =
    '<button class="lightbox-close" aria-label="close">&#x2715;</button>' +
    '<img class="lightbox-img" src="" alt="" />';
  document.body.appendChild(lbOverlay);

  var lbImg = lbOverlay.querySelector(".lightbox-img");
  var lbClose = lbOverlay.querySelector(".lightbox-close");

  function lbOpen(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lbOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function lbHide() {
    lbOverlay.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(function () {
      if (!lbOverlay.classList.contains("active")) lbImg.src = "";
    }, 260);
  }

  lbOverlay.addEventListener("click", function (e) {
    if (e.target === lbOverlay) lbHide();
  });
  lbClose.addEventListener("click", lbHide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") lbHide();
  });

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-zoom]");
    if (el && el.tagName === "IMG") {
      lbOpen(el.src, el.alt);
    }
  });

  /* ---------- Scholarship Carousel ---------- */
  (function () {
    var carousel = document.getElementById("scCarousel");
    if (!carousel) return;

    var track = carousel.querySelector(".sc-track");
    var slides = carousel.querySelectorAll(".sc-slide");
    var dotsWrap = document.getElementById("scDots");
    var prev = carousel.querySelector(".sc-prev");
    var next = carousel.querySelector(".sc-next");
    var current = 0;
    var total = slides.length;

    // Build dots
    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.className = "sc-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", "slide " + (i + 1));
      dot.addEventListener("click", function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });

    function goTo(idx) {
      current = (idx + total) % total;
      track.style.transform = "translateX(-" + (current * 100) + "%)";
      dotsWrap.querySelectorAll(".sc-dot").forEach(function (d, i) {
        d.classList.toggle("active", i === current);
      });
    }

    prev.addEventListener("click", function () { goTo(current - 1); });
    next.addEventListener("click", function () { goTo(current + 1); });

    // Swipe support
    var startX = 0;
    carousel.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX;
    }, { passive: true });
    carousel.addEventListener("touchend", function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });
  })();

  /* ---------- Current year ---------- */
  var y = new Date().getFullYear();
  var ey = document.getElementById("year");
  var zy = document.getElementById("year-zh");
  if (ey) ey.textContent = y;
  if (zy) zy.textContent = y;
})();
