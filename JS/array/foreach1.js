const aprovados = ["Agatha","jennifer","Janet","Alex"]
aprovados.forEach(function(nome,indice){
  console.log(`${indice + 1} ${nome}`)

})

aprovados.forEach((nome)=>console.log(nome))
const exibiraprovados= aprovado => console.log(aprovado)
aprovados.forEach(exibiraprovados)