const tecnologias = new Map()
tecnologias.set('react', {framework:false})
tecnologias.set('angula', {framework:true})
console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
  [function () { },"função"],
  [{},'obj'],
  [123,'numero']])

  chavesVariadas.forEach((vl,ch)=>{
    console.log(vl,ch)
  })
  console.log(chavesVariadas)
  chavesVariadas.delete(123)
  console.log(chavesVariadas.has(123))
  console.log(chavesVariadas.size)
  chavesVariadas.set(123,'a')
  chavesVariadas.set(123,'n') //sobreescreveu o valor n no a, pois nao aceita repetição de chaves
  chavesVariadas.set(456,'b')
  console.log(chavesVariadas)