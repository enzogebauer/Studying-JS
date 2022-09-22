//função sem retrono
function imprimirSoma(a,b){
    soma = a+b
    console.log(soma)
}
imprimirSoma(2,200202020)
//função com retorn
function somaa(a,b=3) {
    return a + b
}
console.log(somaa(2,3))
console.log(somaa(2))
