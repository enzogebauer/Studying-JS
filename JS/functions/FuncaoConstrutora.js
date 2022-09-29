function Carro(velocidadeMaxima = 20,delta=5){ //classe / função construtora
  //atributo privado
  let velocidadeAtual = 0;
  //metodo publico
  this.acelerar = function (){
    if(velocidadeAtual + delta <= velocidadeMaxima){
       velocidadeAtual += delta
    
   
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }
  //metodo publico
  this.getVelocidadeAtual = function (){
    return velocidadeAtual
  }
}
const uno = new Carro //quando os parâmetros n são passados, os parâmetros padões são utiizados
uno.acelerar()
console.log(uno.getVelocidadeAtual())
const Ferrari = new Carro(360,20) //instanciando objeto a partir da função construtora/classe carro 
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())
console.log(typeof Carro)
console.log(typeof Ferrari)