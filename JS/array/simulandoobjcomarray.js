const quaseArray = {0:"RAFAEL",1:"ANA",2:"ENZO"}
console.log(quaseArray)
Object.defineProperty( quaseArray,"toString",{
  value:function(){return Object.values(this)}, enumerable:false
})
console.log(quaseArray[0])
const meuArray = ["RAFAEL","ANA","ENZO"]
console.log(quaseArray.toString(),meuArray)