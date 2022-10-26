const a = 1;
const b =2;
const c =3;
//!es antes
const obj1 = {a:a,b:b,c:c}
//*melhoria
const obj2 = {a,b,c}
console.log(obj1,obj2)
const nomeatrr = 'nota'
const valor = 23131
const obj3 = {}
obj3 [nomeatrr] = valor
console.log(obj3)
const obj5 = {
  funcao1 : function(){
    //*.....
  },
  funcao2(){

  }
}
console.log(obj5)