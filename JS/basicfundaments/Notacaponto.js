console.log(Math.ceil(6.1))
const any1 = {}
any1.nome = 'Bola'
any1['nome'] = 'Bola1'
any1.letra = 'b'
console.log(any1.nome);
console.log(any1.letra)
function Obj (nome){
    this.nome = nome
    this.exec = function (){
        console.log('Exec...')
    }
}
const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()