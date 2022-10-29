const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")
const contadorC = require("./instanciaNova")()
const contadorD = require("./instanciaNova")()
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // tudo que eu faço em contador a faz também em b
contadorC.inc()
contadorC.inc() // como o módulo instanciaNova 
console.log(contadorD.valor) // o caching que o node faz depende do retorno da função que está sendo salva no objeto
//no caso de uma factory, o node salva dentro do objeto uma função que tem um obj de retorno diferente para cada chamada de função
console.log(contadorC.valor) 