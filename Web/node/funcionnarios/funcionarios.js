const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

axios.get(url).then((res)=>{
  const funcionarios = res.data
  // console.log(funcionarios)
// mulher chinesa com menor salário
// const chineses = f => f.pais ==="China"
// const mulher = f => f.genero ==="F"
// const menorsalario = (func,funcatual) => {return func.salario <funcatual.salario ? func:funcatual  } 
// const func = funcionarios
//   .filter(chineses)
//   .filter(mulher)
//   .filter(menorsalario)
//   .reduce(menorsalario)
//   console.log(typeof func)
//   console.log("Essa é a funcionária de origem chinesa que possui o menor salário: ")
//   console.log(func)
  // funcionario que ganha o maior salário é de Belarus
  const usa = f => f.pais === "United States"
  const sexo = f => f.genero === "F"
  const maiorsalario = (funcMs,funcAtual) => {return funcAtual.salario <  funcMs.salario ? funcMs: funcAtual }
  const func = funcionarios
  .filter(usa) 
  .filter(sexo) 
  .reduce(maiorsalario)
  console.log("Teste")
  console.log(func)

})
