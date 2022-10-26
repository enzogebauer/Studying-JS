function soma(){
          let soma = 0;
          for(i in arguments){
                    soma += arguments[i]
          }
          return soma;
}
console.log(soma(1,2,3.3,5,6,7,8)) // soma todos os parâmetros de todos os index do vetor que é criados dentro do for
console.log(soma('b','a','c'))     // Concatena os String params que são criados no for escrevendo 0 antes, afinal a variavel começa em 0
