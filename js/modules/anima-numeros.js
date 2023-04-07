export default class AnimaNumeros{
constructor(numeros,observerTarget,observerClass){
  this.numeros = document.querySelectorAll(numeros);
  this.observerClass = observerClass;
  this.observerTarget = document.querySelector(observerTarget);

  // bind o this do objeto ao callback da mutação
  this.handleMutation = this.handleMutation.bind(this)
}

//recebe um elemento do dom com numero em seu texto/
//incrementa a a partir de 0 até o numero final
static incrementaNumero(numero){
  const total = +numero.innerHTML;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerHTML = total;
          clearInterval(timer);
        }
      }, 20 * Math.random());
}

//ativa incrementas numero para cada numero selecionado no dom
 animaNumeros() {
    this.numeros.forEach(numero => this.constructor.incrementaNumero(numero))
    }
  
//evento que ocorre quando a mutação ocorrer
handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // adiciona a observerMutatio para verificar
  //quando a classe ativo é adicinado eo elemento target
  addMutationObserver(){
   this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

init(){
  if(this.numeros.length && this.observerClass){
    this.addMutationObserver()
  }
 return this
}

}

