console.log(this === global)
console.log(this === module)


console.log(this === module.exports)
console.log(this === exports)
function logThis() {
  console.log("Dentro de uma função...")
  console.log(this === exports)
  console.log(this===module.exports)
  console.log(this=== global)

  this.perigo ="..." //aqui o this aponta pra global então vc adiciona a string perigo ao obj global
}
logThis();
// de uma função this não aponta para exports

this.ola = "ola" //fora de funções o this aponta para module.exports então você está adicionando isso ao module.exports
console.log(this === exports)
console.log(this===module.exports)