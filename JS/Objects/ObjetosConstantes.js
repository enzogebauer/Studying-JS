//pessoa aponta para o endereço de memória em que nome: 'João' está guardado
const pessoa = {nome:'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa vai receber um novo objeto que está em um outro endereço de memória
//!!!!! pzessoa = {nome:'Ana'}
//impossível atribuir novos endereços de memória para o ponteiro pessoa
Object.freeze(pessoa) //? congela o objeto =)
pessoa.nome = 'Maria'