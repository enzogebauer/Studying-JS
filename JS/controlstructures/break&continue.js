const numsf = [1,2,3,4,5,6,7,8,9,19]
for(x in numsf){
          if(x == 5){
                    continue
          }else if(x ==2){
                    
                    console.log(`x = ${numsf[x]}`)
                    continue

          } else if(x ==6){
                    console.log(`x = ${numsf[x]}`)
                    break

          }console.log(`x = ${numsf[x]}`)

}
externo: for(a in numsf){
          for(b in numsf){                                                       //poG n usar isso kkk
                    if (a == 22 && b == 3) break externo
                    console.log(`Par = ${a},${b}`)
          }
}
console.log('Fim')