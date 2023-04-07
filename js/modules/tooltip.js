export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bindo do objeto da classe aos callback
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }


  //move a tooltip com base em seus estilos
  //de acordo com a posicao do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if( event.pageX+240 > window.innerWidth){
      this.tooltipBox.style.left = `${event.pageX -180 + 20}px`;
    } else{
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
   
  }

  //remove os eventos e a tooltips
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

 
  createTootipBox(element) {
  //cria tootlip e coloca no body
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

 // cria a tooltip e adiciona os eventos ao target
  onMouseOver({ currentTarget }) {
    //cria tooltip e coloca em uma propriedade
    this.createTootipBox(currentTarget);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
  }


  //add os eventos de mouseover a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
