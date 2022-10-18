class lancamento {
  constructor(nome = "generico", valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}
class cicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }
  addLancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }
  sumario() {
    let valorConsolidade = 0;
    this.lancamentos.forEach((l) => (valorConsolidade += l.valor));
    return valorConsolidade;
  }
}

const salario = new lancamento("Salario", 5000);
const contaDeLuz = new lancamento("luz", -159);
const contaDeAgua = new lancamento("Agua", -159);
const contaAbril = new cicloFinanceiro("abril", 2022);
contaAbril.addLancamentos(contaDeAgua, contaDeLuz, salario);
console.log(contaAbril.sumario());
