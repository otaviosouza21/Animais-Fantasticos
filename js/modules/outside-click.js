export default function outsideClick(element,evento,callback)
{
    const html = document.documentElement;
    const outside = 'data-outside';
    if(!element.hasAttribute(outside)){
    evento.forEach(userEvent =>{
      html.addEventListener(userEvent,handleOutsideCLick);
    })
    element.setAttribute(outside,'');
  
  }
  
    function handleOutsideCLick(e){
      if(!element.contains(e.target)){ 
        console.log(true)
        element.removeAttribute(outside);
        callback();
        evento.forEach(userEvent =>{
          html.removeEventListener(userEvent,handleOutsideCLick);
        })
      }
    }
  }



