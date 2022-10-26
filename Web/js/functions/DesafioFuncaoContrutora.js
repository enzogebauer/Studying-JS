// class Pessoa {
//   nome = 'Enzo';
//   falar = () => {
//     console.log(`meu nome é ${this.nome}`)
//   }
// }
// const p1 = new Pessoa()
// p1.falar()

// Desafio funcao construtora
function Pessoa (Nome){
  this.nome = Nome
  this.falar = () => console.log(`meu nome  é  ${nome}`);
}
 const p1 = new Pessoa("Enzo");
 p1.falar()
 console.log(p1.nome)