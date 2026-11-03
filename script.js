// Theme Toggle (Dark / Light Mode)
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// SVG Icons for Sun and Moon
const moonIcon =
  '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
const sunIcon =
  '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';

// 1. Check local storage for saved theme on page load
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
  body.classList.add("light-mode");
  themeToggleBtn.innerHTML = sunIcon;
} else {
  // Default to dark mode
  themeToggleBtn.innerHTML = moonIcon;
}

// 2. Toggle theme and save preference to local storage
themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  // Swap the icon and save the choice based on current mode
  if (body.classList.contains("light-mode")) {
    themeToggleBtn.innerHTML = sunIcon;
    localStorage.setItem("portfolio-theme", "light");
  } else {
    themeToggleBtn.innerHTML = moonIcon;
    localStorage.setItem("portfolio-theme", "dark");
  }
});

// Sticky Nav - Add blur class on scroll
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Fluid Scroll Animation via IntersectionObserver
const fadeElements = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.15, // Elements trigger when 15% visible
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target); // Stop watching once it appears
    }
  });
}, appearOptions);

fadeElements.forEach((el) => {
  appearOnScroll.observe(el);
});

// Simple Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "70px";
    navLinks.style.left = "0";
    navLinks.style.width = "100%";
    navLinks.style.backgroundColor = body.classList.contains("light-mode")
      ? "rgba(255,255,255,0.95)"
      : "rgba(0, 0, 0, 0.95)";
    navLinks.style.padding = "2rem 0";
    navLinks.style.alignItems = "center";
  }
});
