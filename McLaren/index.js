const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileNav = document.querySelector(".mobile-nav");
const closeMenuBtn = document.getElementById("close-menu-btn");

if (mobileMenuIcon && mobileNav && closeMenuBtn) {
  mobileMenuIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  closeMenuBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });

  const navLinks = mobileNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 } // 0.2 = 20% din element trebuie să fie vizibil
  );

  hiddenElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden2");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show2");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 } // 0.2 = 20% din element trebuie să fie vizibil
  );

  hiddenElements.forEach((el) => observer.observe(el));
});
