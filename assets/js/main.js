// MENU MOBILE OK
const menu = document.querySelector(".menu");
const ulMenu = document.querySelector(".ul-menu");

menu.addEventListener("click", showMenu);

function showMenu() {
  ulMenu.classList.toggle("show");
}

ulMenu.addEventListener("click", takeTarget);
function takeTarget(event) {
  if(event.target.tagName == "A") {
    showMenu();
  }
}

// ROLAGEM DA PÁGINA
const header = document.querySelector("header");
const logoImage = document.querySelector("#logo-image");
window.addEventListener("scroll", decreaseHeader);
function decreaseHeader() {
  if(window.pageYOffset > 100 && header.classList.contains("header-max")) {
    header.classList.remove("header-max");
    header.classList.add("header-min");
    logoImage.style.width = "150px";
  }else if(window.pageYOffset == 0 && header.classList.contains("header-min")){
    header.classList.add("header-max")
    header.classList.remove("header-min");
    logoImage.style.width = "180px";
  };
}
