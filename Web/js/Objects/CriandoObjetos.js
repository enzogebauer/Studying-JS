// usando notação literal
const obj1 = {}
console.log(obj1)
//ou
const obj2 = new Object
console.log(obj2)
//funções construtoras
function Produto(nome,preco,desc){
  this.nome = nome;
  this.getPrecocomdesconto = ()=>{
    return preco * (1-desc);
  }
  //this torna meu atributo público sendo possíve por exemplo alterar o seu valor
}
Produto.nome = 'Gebauer'
console.log(Produto.nome)
//assim torna-se possível acessar atributos de objetos e altera-los
const caneta = new Produto('caneta',5.22,0.15);
console.log(caneta.getPrecocomdesconto());
// função factory
function CriarFuncionario (nome,salarioBase,faltas){
  return{
    nome,
    salarioBase,
    faltas,
    getSalarioBase(){
      return (salarioBase/30)* (30-faltas)
    }
  }
}
const f1 = CriarFuncionario('Enzo',200000,0)
const f2 = CriarFuncionario ('Maria',400000,18)
console.log(f2.getSalarioBase())
//Object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//UMA função famosa que retorna um objeto
const fromJSON  = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)