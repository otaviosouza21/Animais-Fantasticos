import outsideClick from './outside-click.js';

export default class DropMenu {
  constructor(dropmenu, events) {
    this.dropmenu = document.querySelectorAll(dropmenu);

    //define touchstar e click como argumento padrao
    //caso o usuario nao defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'ativo';
    this.activeDropMenu = this.activeDropMenu.bind(this);
  }

  //Ativa o dropmwnu e adiciona
  //a funcao que observe o clique fora dele
  activeDropMenu(e) {
    e.preventDefault();
    const element = e.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  //add os eventos no dropdown menu
  addDropMenuEvent() {
    this.dropmenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropMenu);
      });
    });
  }

  init() {
    if (this.dropmenu.length){
      this.addDropMenuEvent();
    } 
    return this;
  }
}
