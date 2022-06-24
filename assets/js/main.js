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

// FORMULÁRIO
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let button = document.querySelector("button");
let pattern = /\S+@\S+\.\S+/;


button.addEventListener("click", (event)=>{
  let count = [];
  if(name.value.length < 3) {
    count.push("name")
    name.nextElementSibling.innerText = "Por favor, me diga seu nome"
  } else {
    name.nextElementSibling.innerText = ""
  };

  if(!pattern.test(email.value)){
    count.push("email")
    email.nextElementSibling.innerText = "Preencha com um e-mail válido"
  } else {
    email.nextElementSibling.innerText = "";
  };

  if(subject.value == ""){
    count.push("subject")
    subject.nextElementSibling.innerText = "Do que se trata seu contato"
  } else {
    subject.nextElementSibling.innerText = "";
  };

  if(message.value.length < 10) {
    count.push("message")
    message.nextElementSibling.innerText = "Tem algo para me falar?"
  } else {
    message.nextElementSibling.innerText = "";
  };

  if (count.length > 0) {
    event.preventDefault();
  };

  console.log(count);

});