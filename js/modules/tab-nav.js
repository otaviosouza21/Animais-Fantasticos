export default function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');

console.log(tabcontent)

  if (tabmenu && tabcontent) {
    tabcontent[0].classList.add("ativo");
    function ativaContent(index) {
      tabcontent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabcontent[index].dataset.anime
      tabcontent[index].classList.add("ativo",direcao);
    }

    tabmenu.forEach((img, index) => {
      img.addEventListener("click", function () {
        ativaContent(index);
      });
    });
  }
}
initTabNav(); // O CODIGO ACIMA SE REFERE A SELEÇÃO DE IMAGENS , ACOMPANHADAS DAS SEÇOES DE CADA ANIMAL

