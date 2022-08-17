function trataErroELancar(erro){
          // throw new Error('...erro x')

          nome: erro.name,
          msg: erro.message,
          date = new Date;
      }
      
      
      
      function ImprimirNomeGritado (obj){
          try{
              console.log(obj.nome.toUpperCase() + '!!!')
          } catch(e){
              trataErroELancar(e)
          }
          finally {
                    console.log('Final rodando independentemente se rolou um erro ou não')
          }
      }
      const obj = {nome:'Roberto'}
      ImprimirNomeGritado(obj)