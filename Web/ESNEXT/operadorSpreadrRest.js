// Operador Rest(juntar), Spread(espalhar)
// usar rest como parâmetro de função


//Usar spread com obj
const funcionario = {nome:'Maria', salario:12348.99}
const clone = {ativo:true,...funcionario}
console.log(clone)
//Usando spread em um Array
const grupoA = ['João','Pedro','cleitin']
const grupofinal = ["Maria",...grupoA]
console.log(grupofinal)