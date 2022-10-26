class Pessoa {
  nome = 'Enzo';
  falar= () => {
    console.log(`meu nome é ${this.nome}`)
  }
}
const p1 = new Pessoa()
p1.falar() 

// as duas funcionam mas a segunda acaba sendo melhor pois não tem necessidade de usar o this
// vantagens de java script ser tanto oo como procedure

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)

  }
}
const p2 = criarPessoa('Enzo')