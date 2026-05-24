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

  /* ---------- Current year ---------- */
  var y = new Date().getFullYear();
  var ey = document.getElementById("year");
  var zy = document.getElementById("year-zh");
  if (ey) ey.textContent = y;
  if (zy) zy.textContent = y;
})();
