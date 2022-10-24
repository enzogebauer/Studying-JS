const nums = [1,2,3,4,5,6]
let resultado = nums.map(function(number){ // resultado é um novo array de mesmo tamanho com as alterações mapeadas
  return number*2
})
resultado.forEach(function(number,index){
  console.log(`${index + 1}) ${number}`)
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinherio = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
resultado = nums.map(soma10).map(triplo).map(paraDinherio)
console.log(resultado)