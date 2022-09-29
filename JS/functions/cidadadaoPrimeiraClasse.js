// função em js é fisrt class objetct (citzens)
//higher-order function
// é possível passar uma função como parâmetro, retornar uma função, armazenar uma função numa varíavel
 // funções são tratadas como DADOS no JS

 // criar uma função de forma literal
 //ex:
 function funcao (){ }

 // armazenar uma função anônima em uma variável
 const fun2 = function () {console.log(fun2)}
 //se chamar o nome da constante ele ira invocar a função
 fun2();
 // armazenar um função dentro de um array
 const array = [function(a,b){ return a+b},funcao,fun2]
 console.log(array[0](2,3))
 // arnazebar em um atributo de objeto
 const obj = {}
 obj.falar = function (){return 'Opa'}
 console.log(obj.falar())
 // Passando função como parâmetro para outra função
 function run (fun){
          fun()
 }
 run(function (){console.log('Executando...')})

 // Uma função pode retornar /conter uma função]

 function soma(a,b){
          return function(c){
                    console.log(a+b+c)
          }
 }
 soma(2,3)(5) // duas possibilidades
 //ou
 const soma1 = soma(2,3)
 soma1(4)