import outsideClick from './outside-click.js';

export default function initDropMenu(){
  const dropmenu = document.querySelectorAll("[data-dropmenu]")

   
  function handleClick(e){
    e.preventDefault();
    this.classList.toggle("ativo");
    outsideClick(this,['touchstart','click'],()=>{
      this.classList.remove('ativo')
  
    })
  }
  
  dropmenu.forEach(menu =>{
    ['touchstart','click'].forEach((userEvent)=>{
      menu.addEventListener(userEvent,handleClick)
    })
  })
 
}



