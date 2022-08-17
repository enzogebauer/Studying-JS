function soBoaNoiticia(nota){
          if(nota >= 7){
                    console.log('Aprovado com nota: ' + nota);
          }
}
soBoaNoiticia(7);
soBoaNoiticia(6);
function seForVerdadeEuFalo(valor){
          if(valor){
                    console.log('É verdade...' + valor)
          }
}
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('?')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('[]')
seForVerdadeEuFalo('[1,2]')