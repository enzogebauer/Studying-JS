class Avo {
  constructor(sobrenome){
    this.sobrenome = sobrenome
  }
 
}
class Pai extends Avo {
  constructor( profissão = "Professor"){
    super("Neto")
    this.profissão = profissão

  }
  getNome = () =>{
    return console.log(this.sobrenome)
  }
}
const Helmut = new Avo("Gebauer")
const Carlos = new Pai ("Engenheiro")
Carlos.getNome()
console.log(Carlos)