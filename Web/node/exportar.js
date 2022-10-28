console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)
console.log(typeof exports)
// exports é um obj

this.a = 1
exports.b = 2
module.exports.c = 3
exports === null
console.log(module.exports)
exports = {
  nome:'Teste' // não dá pra mudar a referênia do obj exports
}
module.exports= {publico:true} // sempre que você precisar um novo obj ao exports, utilize module.exports
//já se você quiser adicionar chaves/valores ao objeto criado desde a criação do file, utilize as duas formas que foram apresentadas na linha 6, this e exports.X que são duas referências para o objeto que module.exports aponta
console.log(module.exports)
