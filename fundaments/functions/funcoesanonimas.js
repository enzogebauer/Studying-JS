const soma = function (x,y){
  return x+y
}
console.log(soma (3,4))
const ImprimirResultado = function(a, b, operacao = soma) {
  console.log(operacao (a,b) )

}
ImprimirResultado(5,4)
ImprimirResultado(3,7, function (z,x)  {
  return z-x
})
ImprimirResultado(3,7 ,(a,f) => a * f)
const Pessoa = {
  falar:  () =>  console.log("OLá"),
  idade: 12,
}
Pessoa.falar()
console.log(Pessoa.idade)