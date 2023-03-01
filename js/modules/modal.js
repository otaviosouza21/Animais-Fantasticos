export default function initModal() {

const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="conteiner"]');

if (botaoAbrir && botaoFechar && containerModal) {
  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle("ativo");
  }
  function cliqueFora(e) {
    if (this === e.target) toggleModal(e);
  }

  botaoAbrir.addEventListener("click", toggleModal);
  botaoFechar.addEventListener("click", toggleModal);
  containerModal.addEventListener("click", cliqueFora);
}
}
