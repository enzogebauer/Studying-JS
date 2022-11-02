// ES8: Object.values/Object.entries
const obj = {
  a:1,
  b:2,
  c:3
}

console.log(Object.keys(obj)) //chaves do obj
console.log(Object.values(obj)) //valores..
console.log(Object.entries(obj))//matriz de pares chave valor
// melhorias na notação literal
const nome = "carla"
const pessoa = {
  nome,
  ola: function () { //não precisa mais, pode so usar ola(){}
    return ("Oi gente")
  }
}
console.log(pessoa.nome,pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal{
  falar(){
    return 'Au au!'
  }
}
const pibody = new Cachorro
console.log(pibody.falar())
// operador rest
function total(...nums){
  let total = 0;
  nums.forEach(n=> total += n)
  return total
}
console.log(total(1,2,3,4,5,6,7,99))