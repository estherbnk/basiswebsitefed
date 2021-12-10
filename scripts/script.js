console.log ("hello");

var deButton = document.querySelector("header section button");
var deNav = document.querySelector("nav ul");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    deNav.classList.toggle("toonMenu");
    deButton.classList.toggle("toonMenu")
}