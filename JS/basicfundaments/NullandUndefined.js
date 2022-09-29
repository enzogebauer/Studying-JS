//Tipos de atribuição
// por valor e
// por referência
let valor // não incialzida
console.log(valor) // undefined, pois nunca foi atribuido alguma valor para a variavel valor
valor = null// a variável não tem nenhum VALOR e nenhum ENDEREÇO DE MEMÓRIA//variável vazia
console.log(valor) //null é usado por nós programadores qunado queremos zerar variáveis de referência
//console.log(valor.toString())// erro ao tentar acessar variável nula
const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preço = 3.50
console.log(produto)
produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)
produto.preco = null // sem preço
console.log(produto)
