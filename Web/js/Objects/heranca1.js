const ferrari = {
  modelo: 'f40',
  velocidademaxima:324
}
const volvo = {
  modelo:'V40',
  velocidademaxima:'200'
}   

console.log(ferrari.__proto__)
// o protótipo de ferrri existe mas é vazio

console.log(ferrari.__proto__ === Object.prototype)
// o pai de ferrari é o prototype padrão do js
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // pai de todos, não possui prototype
function meuobj(){}
console.log(typeof Object, typeof meuobj)
console.log( Object.prototype, meuobj.prototype)