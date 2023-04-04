export default function initTooltip() {
  /*  
  
const tooltips = document.querySelectorAll('[data-tooltip]')

tooltips.forEach((item)=>{
  item.addEventListener('mouseover',onMouseOver)
})

function onMouseOver(e){
  const tooltipBox = criarTooltipBox(this)

  onMouseMove.tooltipBox = tooltipBox
  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this
  this.addEventListener('mouseleave',onMouseLeave);
  this.addEventListener('mousemove',onMouseMove)
}

const onMouseLeave = {
 handleEvent(){
  this.tooltipBox.remove()
  this.element.removeEventListener('mouseleave',onMouseLeave)
  this.element.removeEventListener('mousemove',onMouseMove)
 }
}

const onMouseMove = {
  handleEvent(e){
    this.tooltipBox.style.top = e.pageY+20+'px';
    this.tooltipBox.style.left = e.pageX+20+'px';
  }
}

function criarTooltipBox(element){
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute('aria-label')
  tooltipBox.classList.add("tooltip");
  tooltipBox.innerText = text;
 document.body.appendChild(tooltipBox);
 return tooltipBox

} */
}

const tooltips = document.querySelectorAll('[data-tooltip]');

function createTootipBox(element) {
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}



const onMouseMove = {
  handleEvent(event) {
    this.tooltipBox.style.top = `${event.pageY+20}px`;
    this.tooltipBox.style.left = `${event.pageX+20}px`;
  },
};

const onMouseLeave = {
  handleEvent() {
    this.tooltipBox.remove();
    this.element.removeEventListener('mouseleave', onMouseLeave);
    this.element.removeEventListener('mousemove', onMouseMove);
  },
};

function onMouseOver() {
  const tooltipBox = createTootipBox(this);
  onMouseLeave.element = this;
  onMouseLeave.tooltipBox = tooltipBox;
  onMouseMove.tooltipBox = tooltipBox;
  this.addEventListener('mouseleave', onMouseLeave);
  this.addEventListener('mousemove', onMouseMove);
}

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver);
});





