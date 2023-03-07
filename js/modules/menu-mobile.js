 import outsideClick from "./outside-click.js";
 
export default function initMenuMobile(){
  const menuButton = document.querySelector("[data-menu='button']")
const menuList = document.querySelector('[data-menu="list"]');

if(menuButton){
function openMenu(event){
  menuList.classList.add("ativo");
  menuButton.classList.add("ativo");
  outsideClick(menuList,['click',"touchstart"],()=>{
    menuList.classList.remove("ativo");
    menuButton.classList.remove("ativo");
  })

}



['click',"touchstart"].forEach(userEvent=>{
  menuButton.addEventListener(userEvent,openMenu);
})
}
}


