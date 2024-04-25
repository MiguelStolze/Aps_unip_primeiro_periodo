let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let imgToggle = document.querySelector(".toggle img");
let itensMenu = document.querySelectorAll(".menu-item");
let itemSelecionado = null;
function alterarMenu() {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
  imgToggle.classList.toggle("active");
  removerSeleção();
}

function secLi(elemento) {
  removerSeleção();
  elemento.classList.add("activeLi");
  itemSelecionado = elemento;
}

function removerSeleção() {
  if (itemSelecionado !== null) {
    itemSelecionado.classList.remove("activeLi");
  }
}
