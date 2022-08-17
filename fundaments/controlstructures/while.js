// const infinito = function (num){
//           while(true){
//                     num++
//                     console.log(num)
//           }
// }
// infinito(0);
                            // 1   10
function getInteiroAleatorio (min,max){
          const valor = Math.random() * (max-min)+ min
          return Math.floor(valor)
                                    // 0 ou 1  ou retorna o máximo ou o mínimo
}
let opcao = 0
while(opcao != -1){
          opcao = getInteiroAleatorio(-1,20)
          console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Até a próxima')