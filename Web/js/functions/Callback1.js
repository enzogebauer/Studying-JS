const fabricantes = ["Mercedes","Audi", "Bmw","Ford"];
function imprimir(nome,indice){
  console.log(`${indice +1} . ${nome}`)
}
fabricantes.forEach(imprimir) // imprime o indice e o nome para cada indice do vetor
 // se chama callback pq a função é chamada assim que o foreach percorre um novo índice do vetor

fabricantes.forEach(function (fabricantes){ //imprime os nomes presentes no vetor
  console.log(fabricantes)
})
fabricantes.forEach(fabricante =>
  console.log(fabricante)
)