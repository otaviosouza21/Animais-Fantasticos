export default function outsideClick(element,evento,callback)
{
    const html = document.documentElement;
    const outside = 'data-outside';
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
    if(!element.hasAttribute(outside)){
    evento.forEach((userEvent) =>{
      setTimeout(()=>{
        html.addEventListener(userEvent,handleOutsideCLick);
      })
    })
    element.setAttribute(outside,'');
  
  }
  
    
  }



