function falarDepoisDe(segundos,frase){
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      resolve(frase)
      reject(frase)
    },segundos*1000)
  })
  
}
falarDepoisDe(3,'Que legal')
.then(frase => frase.concat('?!?'))
.then(outrafrase => console.log(outrafrase))
.catch(e=>console.log("erro"))