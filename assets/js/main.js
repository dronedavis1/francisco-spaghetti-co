(function () {
  "use strict";

  var nav = document.getElementById("siteNav");
  var navLinks = document.getElementById("navLinks");
  var navToggle = document.getElementById("navToggle");
  var progressBar = document.getElementById("progressBar");
  var heroSection = document.getElementById("hero");
  var heroMedia = document.querySelector(".hero-media");
  var heroContent = document.querySelector(".hero-content");
  var yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky nav blur + scroll progress + Apple-style hero parallax/fade-out
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (y > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";

    if (heroSection) {
      var heroHeight = heroSection.offsetHeight || 1;
      var progress = Math.min(y / heroHeight, 1);

      if (heroMedia) {
        heroMedia.style.transform = "scale(" + (1 + progress * 0.12) + ")";
        heroMedia.style.backgroundPosition = "center " + progress * 60 + "px";
      }
      if (heroContent) {
        heroContent.style.opacity = String(Math.max(1 - progress * 1.4, 0));
        heroContent.style.transform =
          "translateY(" + progress * -50 + "px) scale(" + (1 - progress * 0.06) + ")";
      }
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal-up, .reveal-fade");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in-view");
    });
  }
})();
