const peso1 = 1.0
const peso2 = Number('2.1')
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso1))
const avalicao1 = 9.8132
const avaliacao2 = 5.843
const total = avalicao1 * peso1 + avaliacao2 *peso2
const media = total/(peso1 + peso2)
console.log(media.toFixed(2))
console.log(media.toString(2)) // converte o valor ponto flutante para binário 2 para binario 8 para octal e 16 para hexadecimal