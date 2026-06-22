// =========================
// TYPING ANIMATION
// =========================

const roles = [
  "AI & Data Science Student",
  "Machine Learning Enthusiast",
  "AI Application Developer",
  "Computer Vision Explorer",
  "Future AI Engineer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeRole() {

  if (charIndex < roles[roleIndex].length) {

    typingElement.textContent += roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeRole, 90);

  } else {

    setTimeout(eraseRole, 1800);
  }
}

function eraseRole() {

  if (charIndex > 0) {

    typingElement.textContent =
      roles[roleIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseRole, 45);

  } else {

    roleIndex++;

    if (roleIndex >= roles.length) {
      roleIndex = 0;
    }

    setTimeout(typeRole, 400);
  }
}

typeRole();


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
  ".card, .project-card, .experience-card, .leader-card"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });

  },
  {
    threshold: 0.1
  }
);

revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition = "all 0.7s ease";

  observer.observe(element);
});


// =========================
// ACTIVE NAVBAR LINKS
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (scrollY >= sectionTop) {

      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");
    }
  });

});


// =========================
// HERO IMAGE FLOAT EFFECT
// =========================

const heroImage = document.querySelector(".hero-image img");

let position = 0;
let direction = 1;

setInterval(() => {

  position += direction * 0.3;

  if (position > 10) direction = -1;
  if (position < -10) direction = 1;

  heroImage.style.transform =
    `translateY(${position}px)`;

}, 30);


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
  "Portfolio Successfully Loaded 🚀"
);