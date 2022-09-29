// Problema 1 
// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e
// com ponto de exclamação "!" no final.
const comprimentar = (string) =>{
  return (`Olá, ${string}!`)
} 
console.log(comprimentar("Maria"))
const comprimentarconcat = (nome)=>{
  return ("Olá, " + nome + "!")
} 
console.log(comprimentarconcat("Enzo"))
// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// 📕 Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere
// também dias decorridos desde o último aniversário.
const AgeinDays= (AgeInYears) =>{
  let ageinday
  ageinday = AgeInYears * 365
  return (console.log(`Você tem ${ageinday} dias de vida =)`))
}
AgeinDays(18)

// 3 - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
// num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
// da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
// 30%, relativo a impostos.
const salarioLiq = (qtdht, horatrab) => {
  let salarioliq = qtdht * horatrab
  salariosemimposto = salarioliq - salarioliq * 0.3
  return (console.log(`O seu salário líquido no final do mes será de R$${salariosemimposto} `))

}
salarioLiq(180,60);
// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
//   exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

const mesdoano = (num) =>{
switch(num){
  case 1:
    return "Janeiro";
  case 2:
    return "fevereiro";
  case 3:
    return "março";
  case 4:
    return "abril";
  case 5:
    return "maio";
  case 6:
    return "junho";
  case 7:
    return "julho";
  case 8:
    return "agosto";
  case 9:
    return "setembro";
  case 10:
    return "outubro";
  case 11:
    return "novembro";
  case 12:
    return "dezembro";
}
}
console.log(mesdoano(6))
