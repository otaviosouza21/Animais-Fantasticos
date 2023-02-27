export default function initFaq() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const ativoClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);

    function activeAccordion(e) {
      this.classList.toggle(ativoClass);
      this.nextElementSibling.classList.toggle(ativoClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

