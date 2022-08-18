// estrategia 1 para gerar valor padrão
function soma1(a,b,c){
          a = a || 1
          b = b || 1
          c = c || 1
          return a + b + c
}
console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
// cuidado 0 retorna falso então 0 + 0 + 0 dá 3 =(
console.log(soma1(0,0,0))
function soma2 (a,b,c){
          a = a !== undefined ? a : 1 // corrige o problema de passar um nulo ou um 0
          b = 1 in arguments ? b : 1
          c = isNaN(c) ? 1 : c
          return a + b + c;
}
console.log(soma2(0,0,0))
console.log(soma2(null,null,null))
console.log(soma2(undefined,undefined,undefined))
// Usando o valor padrão do es2015
function soma3(a=1,b=1,c=1){ // passa como parâmetros padrão o valor 1
          return a+b+c
}
console.log(soma3(0,0,0))
console.log(soma3(null,null,null))
console.log(soma3(undefined,undefined,undefined))