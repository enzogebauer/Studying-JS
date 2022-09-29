const sequencia = {
  _valor:1, //convencao variavel so é pra ser usada internamente
  get valor(){return this._valor++},
  set valor(valor){if(valor > this._valor) {this._valor = valor}}
}
console.log(sequencia.valor,sequencia.valor)

sequencia.valor = 1000

console.log(sequencia.valor,sequencia.valor)
//deu certo
sequencia.valor = 900
//ignorado =(
console.log(sequencia.valor,sequencia.valor)

