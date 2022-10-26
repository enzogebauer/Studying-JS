function Aula (nome,videoID){
   this.nome = nome
   this.videoID = videoID

}
const aula1 = new Aula('Bem vindo',123) 
const aula2 = new Aula('Até Breve',456)
console.log(aula1,aula2)

//simulando o operador new

function novo(f,...params) {
  const obj = {}
  obj.__proto__ = f.prototype // o pai do objeto será igual ao pai do tipo de objeto que você deseja criar
                              // Por exemplo Aula é o tipo de objeto e aula3 e aula 4 recebem o mesmo pai que aula1 e aula2 
  f.apply(obj,params)
  return obj
}
const aula3 = new novo(Aula,'Bem vindo',123)
const  aula4 = new novo(Aula,'Até Breve',456)
console.log(aula3,aula4)
