// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro
const funcao = (num) => {
  let resultado =''
  for(i=0;i<num;i++){
   resultado = `${resultado} +`
  }
  return resultado

}
console.log(funcao(5))