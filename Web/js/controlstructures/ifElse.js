const imprimirResutado = function (nota){
          if(nota>=7){
                    console.log('Aprovado: '+ nota)
          } else {
                    console.log('Reprovado: '+ nota)
          }
}
imprimirResutado(10)
imprimirResutado(4)
imprimirResutado('Epa') // cuidado!!! por ser fracamente tipada a linguagem java Script tende a deixar passar esse tipo de erro se não for tratado durante a produção do código
