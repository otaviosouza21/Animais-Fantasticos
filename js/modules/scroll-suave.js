
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrolltoSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    //Forma Alternativa de Scroll
    /*  window.scrollTo({
    top: topo,
    behavior: "smooth"
  }) */

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrolltoSection);
  });
}
 //O CODIGO ACIMA É EM RELAÇÃO AO SCROLL SUAVE DOS LINKS INTERNOS