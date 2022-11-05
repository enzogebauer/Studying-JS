// Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
// apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
// mesma.
// Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias
// de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas
// situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
// de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade
// especificada no segundo parâmetro.
const func = (obj,prop) => {
  const copia = Object.assign(obj)
  delete copia[prop]
  return copia

}
let produto = {
  a:2,
  b:3
}
console.log(func(produto,'a'))