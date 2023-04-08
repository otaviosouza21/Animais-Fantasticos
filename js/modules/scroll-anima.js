export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  //verifica a distancia de cada item em relacao ao ao topo 
  //do site e ocloca em um objeto
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  //verifica a distancia entre o top do elemento
  // e o scroll e add class ativo
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else {
        item.element.classList.remove('ativo');
      }
    });
  }

  //inicia ao carregar a animacao
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this
  }

  //remove o event de scroll
  stop(){
    window.removeEventListener('scroll', this.checkDistance);
  }
}
