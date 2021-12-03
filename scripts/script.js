console.log ("hello");

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    deNav = even.target.parentNode;
    deNav.classList.toggle("toonMenu");
}