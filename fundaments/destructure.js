// um operador que tira de uma estrutura alguma coisa introduzido no ES215
//usando em um objeto
const pessoa = {
          nome: 'Ana',
          idade:5,
          endereço:{
                    logradouro: 'Rua ABC',
                    numero: 100,
                    cep:4271-40

          }
}
// console.log(pessoa.nome);

const { nome: n, idade:i,endereço:{logradouro}} = pessoa;
console.log(n,i,logradouro);






// const { nome, idade} = pessoa
// const {nome:n, idade:i} = pessoa
// const {endereço:{logradouro:l,numero:n}} = pessoa
// console.log (l,n)