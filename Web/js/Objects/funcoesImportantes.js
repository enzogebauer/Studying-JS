const pessoa = {
	nome:'Rebeca',
	idade:2,
	peso:13
}

console.log(Object.keys(pessoa)) //pega as chaves
console.log(Object.values(pessoa)) //pega os valores

console.log(Object.entries(pessoa)) //retorna uma lista contendo todos os pares chave valor

// Object.entries(pessoa).forEach(e =>{
// 	console.log(`${e[0]} : ${e[1]}`)
// })

Object.entries(pessoa).forEach(([chave,valor]) =>{
	console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa,'dataNascimento',{ // define uma propriedade com um maior nivel de controle
	enumerable: true,
	writable:false,//define uma propriedade ao objeto pessoa que não pode ser sobreescrita (false), se fosse true dava pra sobreescrever
	value:'01/01/2019' 
})
pessoa.dataNascimento = '01/01/2022'
console.log(pessoa.dataNascimento)
//object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {B:2}
const o2 = {c:3,d:4}
const obj = Object.assign(dest,o1,o2) //importante não passar objetos que tenham keys iguais, caso sejam passados seus values serão sobreescritos permanecendo como valor final o da útlima key de nome igual passada
console.log(obj)