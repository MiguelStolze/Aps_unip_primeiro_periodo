let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let imgToggle = document.querySelector(".toggle img");

let menuItems = document.querySelectorAll(".menu.active li");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

function alterarMenu() {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
  imgToggle.classList.toggle("active");
}
