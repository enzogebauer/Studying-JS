const pai = {
  nome:'Pedro',
  corCabelo:'Preto'
}
const filha = Object.create(pai)
filha.nome = 'Ana'
console.log(filha.corCabelo)

const filha2 = Object.create(pai,{
  nome:{
    value:'Bia',
    writable:false,
    enumerable:true //visibilidade dos valores true aparece por notação ponto, false n aparece
  }
})
console.log(filha2.nome)
filha2.nome = 'carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log(Object.keys(filha))
console.log(Object.keys(filha2))
for(let key in filha2){
  filha2.hasOwnProperty(key) ?
  console.log(`posui essa propriedade ${key}`) : console.log(`Por herança ${key}`)
}