const navLink = document.querySelectorAll(".nav-link");
const navButton = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-collapse");

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    navButton.classList.add("collapsed");
    navButton.setAttribute("aria-expanded", "false");
    navbar.classList.add("collapsed");
    navbar.classList.remove("show");
  });
}
