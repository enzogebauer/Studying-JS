const getInteiroAleatorio = function(min,max){
          let valor
          valor = Math.random() * (max-min) + min
          return Math.floor (valor);
}
let opcao = 0
do{
          opcao = getInteiroAleatorio(-1,10)
          console.log(opcao)}

while(opcao != -1)
console.log('Até mais ver sabixão!')