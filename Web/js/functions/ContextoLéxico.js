//qual valor de local será encontrado quando chamamos a função exec ? o valor mais "próximo" ou o mais distante ?

const valor = 'Global'
function minhaFuncao (){
  console.log(valor)
}

function exec () {
  const valor = 'Local'
  minhaFuncao()
}
// o mais distante é encontrado pois quando a função "minhaFuncao " foi declarada no contexto léxico do java script valor detinha o valor "Global"