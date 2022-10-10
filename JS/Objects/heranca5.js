console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//como prototype de uma função como temos no exemplo String, que no js é uma função, é sempre um objeto, podemos acessar o objeto da função string passando nele a função reverse que consegue acessar os atributos do pai e desmemembra-los e reverte-los

String.prototype.reverse = function () { //adionando no objeto pai de String o método que se chama reverse e que faz intercala os caracteres e retorna-os interpolados e em ordem inversa 
  return this.split('').reverse().join()
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () { 
  return this[0] 
}
console.log([1,2,3,4,5,6].first())
console.log(['a','b','c','d','e','f'].first())
String.prototype.toString = function () { //substituindo o método toString padrão pela String "Lascou tudo"
  return 'Lascou tudo'
}
console.log('Escola Cod3r'.reverse())