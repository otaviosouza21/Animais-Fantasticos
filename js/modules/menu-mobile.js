import outsideClick from './outside-click.js';

export default class initMenuMobile{
  constructor(button,list,events){
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.activeClass= 'ativo'
  
    if(events === undefined) this.events = ['click', 'touchstart'];
    else this.events = events

    this.openMenu = this.openMenu.bind(this)
  }

 openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

menuMobileEvent(){
   this.events.forEach(userEvent => this.menuButton.addEventListener(userEvent, this.openMenu));
}

init(){
  if(this.menuButton && this.menuList){
this.menuMobileEvent();
  }
  return this
}

}

