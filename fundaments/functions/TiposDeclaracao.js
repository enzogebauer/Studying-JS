//primeiro o interpretador do JS carrega todas as funções para só depois ler o resto por isso o console.log(da linha 1 funciona)
//já no caso da função sub, o interpretador do java script carrega primeiro as funções declaradas pra só depois carregar as variáveis
console.log(soma(3,4))
console.log(sub(3,5))  // erro
console.log(mult(3,5)) //erro tbm
// function declaration
function soma (x,y) {
  return x + y
}
// function expression
const sub = function (x,y) {
  return x-y 
}
console.log(sub(3,5)) // Na seguinte ordem funciona
//named function expression
const mult = function mult (x,y) {
  return x + y
}

