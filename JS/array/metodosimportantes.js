const pilotos = ["Vetel", "Alonso","Raikkonen","massa"]
pilotos.pop() //remove o último índice do vetor
console.log(pilotos)
pilotos.push("Massa") //insere no último índice do vetor
console.log(pilotos)
pilotos.shift() //remove o primeiro
console.log(pilotos)
// splice pode tanto adicionar como também remover elementos
 //adicionando
 pilotos.splice(2,0, "Botas","massa")
 console.log(pilotos)
 //remover
 pilotos.splice(3,1)
 console.log(pilotos)
 //novo Array 
 const algunsPilotos1 =  pilotos.slice(2) // a partir do índice 2 pega o resto do array
 console.log(algunsPilotos1)
 const algunsPilotos2 = pilotos.slice(1, 4) // pega do 1 até um antes do 44