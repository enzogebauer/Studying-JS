//usando destructuring em uma função
function rand({min =100 ,max=200}){
          const valor = Math.random()* (max - min) +min
          return Math.floor(valor)
}





const objeto  = {max:50,min:0}
console.log(rand(objeto))


console.log(rand({min:5}))
console.log(rand({}))
console.log(rand());