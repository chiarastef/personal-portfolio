const navLink = document.querySelectorAll(".nav-link");
const navButton = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-collapse");

// Collapse navbar when user clicks on navbar links
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", collapseNav);
}

// Collapse navbar when user clicks outside of navbar
document.addEventListener("click", function (event) {
  if (navbar.classList.contains("show") && event.target != navbar) {
    collapseNav();
  }
});

// Collapse navbar
function collapseNav() {
  navButton.classList.add("collapsed");
  navButton.setAttribute("aria-expanded", "false");
  navbar.classList.add("collapsed");
  navbar.classList.remove("show");
}
