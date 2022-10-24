// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:

const carrinho = [
  '{"nome":"Borracha","preco":"3.45"}',
  '{"nome":"caderno","preco":"13.90"}',
  '{"nome":"Kit de Lapis","preco":"41.22"}',
  '{"nome":"Caneta","preco":"7.50"}',
]

const arrayOfArrays = (obj) => {
  const resultado = []
  for(let chave in obj){
    resultado.push(chave,obj[chave])
  }
  return resultado

}
let resultado = arrayOfArrays(carrinho)
console.log(resultado)