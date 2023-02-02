///////////////////////////////////////////////////////////
// Current Year

const yearEl = document.querySelector(".copyright-year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Sticky Nav

const heroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
      // heroEl.classList.add("sticky")
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
      // heroEl.classList.remove("sticky")
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-95px",
  }
);

obs.observe(heroEl);

//////////////////////////////////////////////
// Mobile Nav

const btnNav = document.querySelector(".main-nav-icon");
const headerEl = document.querySelector(".header-top");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("open-nav");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link") && href !== "#get-start") {
      headerEl.classList.toggle("open-nav");
    }
  });
});
