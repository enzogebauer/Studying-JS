function compras (trabalho1,trabalho2){
          const comprarsorvete = trabalho1 || trabalho2
          const comprartv50pol = trabalho1 && trabalho2
          // const comprartv32pol = !!(trabalho1 ^ trabalho2)
          const comprartv32pol = trabalho1 != trabalho2 
          const manterSaudavel= !comprarsorvete //negação lógica de tomar sorvete
          return {
                    comprarsorvete,comprartv50pol,comprartv32pol,manterSaudavel 
                    //criar objetos sem o par chave valor só se tornou possível após o upadate do ES2015 
                    //antes tinha que fazer {comprarsorvete:comprarsorvete,comprartv50pol:comprartv50pol e etc no return dessa função}
          }
}         console.log(compras(true,true))
          console.log(compras(true,false))
          console.log(compras(false,true))
          console.log(compras(false,false))