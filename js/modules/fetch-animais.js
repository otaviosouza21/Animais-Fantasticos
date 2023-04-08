import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  //cria a div contendo informacoes
  //com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  //preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
//anima os numeros de cada anumal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  //puxa um arquivo json e cria cada animail itulizando createAnmal
  async function criarAnimais() {
    try {
      //espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      //apos a transformacao de json, ativa as 
      //funcoes para preencher e animar os numeros
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
