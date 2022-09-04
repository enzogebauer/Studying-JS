

const pessoa = {
  saudacao:'Bom dia',
   falar (){
     console.log(this.saudacao)

  }
}

pessoa.falar()
const falar = pessoa.falar
falar()
// conflito entre paradigmas que compoe o js,o paradigma oo e o funcional
// como resolver esse tipo de conflito e atriubuir o this dentro da função falar sempre ao obj pesspa
const  falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()
// falar de pessoa
