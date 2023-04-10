export default class Funcionamento {
  constructor(funcionamento, abertoClass, fechadoClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.abertoClass = abertoClass;
    this.fechadoClass = fechadoClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(',')
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diasAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
    console.log(this.horarioAgora)
  }

  estaAberto() {
    const semanaAberta = this.diasSemana.indexOf(this.diasAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return semanaAberta && horarioAberto;
  }

  ativaAberto() {
 
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.abertoClass);
      this.funcionamento.classList.remove(this.fechadoClass);
    } else {
      this.funcionamento.classList.remove(this.abertoClass);
      this.funcionamento.classList.add(this.fechadoClass);
    }
  }


init(){
  if(this.funcionamento){
    this.dadosFuncionamento();
    this.dadosAgora();
    this.ativaAberto();
  }
  return this
}
}

