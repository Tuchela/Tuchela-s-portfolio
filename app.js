let menuToggle = document.getElementById("menu-toggle");
// console.log(menuToggle)
let navItems = document.getElementById("nav-items");

menuToggle.addEventListener("click", function () {
  navItems.classList.toggle("show");
});
