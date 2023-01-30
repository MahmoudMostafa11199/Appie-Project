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
