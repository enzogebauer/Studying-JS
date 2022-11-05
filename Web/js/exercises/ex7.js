// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.
const func = (array) => {
  return array.filter ((item)=>typeof item === "number")
  
}
const vetor = ["enzo",14,13,34,'zoca']
console.log(func(vetor))