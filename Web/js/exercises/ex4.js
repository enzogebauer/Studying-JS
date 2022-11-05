// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
// o segundo será o número de vezes que haverá repetição. Um array será retornado.
  const repeticao = (elemento, num)=>{
    let resultado = []
    for(i=0;i<num;i++){
      resultado.push(elemento)
    }
    return console.log(resultado)
  }
  repeticao("oi",4)
  