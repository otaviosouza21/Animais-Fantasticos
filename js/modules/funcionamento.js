export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diasAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberta = diasSemana.indexOf(diasAgora) !== -1;

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add('aberto');
    funcionamento.classList.remove('fechado');
  } else {
    funcionamento.classList.remove('aberto');
    funcionamento.classList.add('fechado');
  }
}
