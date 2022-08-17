const notas = [6.7,5,7,5.3,2.3,1.2]
for(let i in notas){
          console.log(i, notas[i])
}
const pessoa = {
          nome:'Ana',
          idade: 18,
          peso: '54 kgs'
}
for( let atributo in pessoa){
          console.log(`${atributo} = ${pessoa[atributo]}`)
}