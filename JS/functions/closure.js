// Closure é o escopo criado quando ua função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função
const x = 'global'
function fora(){
  const x = 'Local'
  function dentro(){
    return x
  }
  return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())
// por estarmos utiizando a palavra reservada return, o interpretador vai ser obrigado a ler o closure que é a função para poder retornar o valor da variavel x local. Toda função em JS é um closure