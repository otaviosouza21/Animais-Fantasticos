import outsideClick from "./outside-click.js";

export default function initAnimaNumeros() {

  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
  
    numeros.forEach((numero) => {
      const total = +numero.innerHTML;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerHTML = start;
        if (start > total) {
          numero.innerHTML = total;
          clearInterval(timer);
        }
      }, 20 * Math.random());
    });
  }
  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains("ativo")){
      oberver.disconnect()
      animaNumeros();
    };
  }
  
  const observerTarget = document.querySelector(".numeros");
  const oberver = new MutationObserver(handleMutation);
  oberver.observe(observerTarget, { attributes: true });
  
}

