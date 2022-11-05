for(let letras of "cod3r"){
  console.log(letras)
}


const assuntosECMA = ['Map','Set','Promise']
for(let i in assuntosECMA){
  console.log(assuntosECMA)  
}

const assuntosMap = new Map([
  ['Map',{abordado:true}],
  ['Set',{abordado:true}],
  ['Promise',{abordado:false}]
])

for(let chave of assuntosMap.keys()){
  console.log(chave)
}
for(let values of assuntosMap.values()){
  console.log(values)
}
for(let [chave,valor] of assuntosMap.entries()){
  console.log(chave,valor)
}
const s = new Set(['a','b','c'])
for(let letra of s){
  console.log(letra)
}