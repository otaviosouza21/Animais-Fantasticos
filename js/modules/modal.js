export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    //bind this ao callback para
    //fazer referencia ao  objeto da classe
    this.eventToglleModal = this.eventToglleModal.bind(this)
    this.cliqueFora = this.cliqueFora.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }


//abre ou fecha modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
    console.log(this)
  }

  //adiciona o evento de toggle
  eventToglleModal(e){
    e.preventDefault();
    this.toggleModal();
  }


  //fecha o modal ao clique do lado de fora
  cliqueFora(e) {
    if (this.containerModal === e.target) this.toggleModal();
  }

  //adiciona os eventos ao elemtntos do modal
  modalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToglleModal);
    this.botaoFechar.addEventListener('click', this.toggleModal);
    this.containerModal.addEventListener('click', this.cliqueFora);
  }

  // inicia se os elemtos forem **true**
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.modalEvent();
    }
    return this;
  }
}
