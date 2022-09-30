//prototype chain
Object.prototype.attr0 = 'Z'
const avo = {attr1:'A'}
const pai = {__proto__:avo,attr2:'B',attr3:'3'}
const filho = {__proto__:pai,attr3:'C'}
console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)
console.log(pai.attr3)

const carro = {
  velAtual:0,
  velMax:200,
  acelerarMais(delta) {
    if(this.velAtual + delta <= this.velMax){
      this.velAtual += delta
    }else {
      this.velAtual = this.velMax //capa a velocidade atual na máxima
    }
    
  },
  status (){
    return `${this.velAtual}km/h de ${this.velMax}km/h`
  }
}

carro.acelerarMais(20);
console.log(carro.status());

const ferrari = {
  modelo: 'f40',
  velocidademaxima:324,
  status(){
    return `${this.modelo}: ${super.status()}`
  }
}
const volvo = {
  modelo:'V40',
  
  status(){
    return `${this.modelo}: ${super.status()}`
  }
}   
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)
console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais()
console.log(ferrari.status())